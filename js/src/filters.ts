// Copyright (C) urljsf contributors.
// Distributed under the terms of the Modified BSD License.
import { isObject } from '@rjsf/utils';

import { Ajv, ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import type nunjucks from 'nunjucks';

import { Urljsf } from './_schema.js';
import { humanizeErrors } from './ajv.js';
import { IFilters, emptyArray } from './tokens.js';

let AJV: Ajv;

/** remove empty objects and arrays */
export function prune(data: Record<string, any>) {
  let newData: Record<string, any> = {};
  for (let [key, value] of Object.entries(data)) {
    if (Array.isArray(value) && !value.length) {
      continue;
    }

    if (isObject(value)) {
      value = prune(value);
    }

    if (value == null) {
      continue;
    }
    newData[key] = value;
  }
  return [...Object.keys(newData)].length ? newData : null;
}

/* build objects from entries */
export function from_entries(data: [string, any][]): Record<string, any> {
  return Object.fromEntries(data);
}

/* get schema errors */
export function schema_errors(data: any, schema: Record<string, any>): ErrorObject[] {
  AJV = AJV || addFormats(new Ajv({ allErrors: true }));
  AJV.validate(schema, data);
  return AJV.errors ? humanizeErrors(AJV.errors) : emptyArray;
}

export async function addFormatFilters(
  config: Urljsf,
  env: nunjucks.Environment,
): Promise<nunjucks.Environment> {
  for (const filter of config?.nunjucks?.filters || emptyArray) {
    let filters: IFilters | null = null;
    switch (filter) {
      case 'json':
        filters = jsonFilters();
        break;
      case 'toml':
        filters = await tomlFilters();
        break;
      case 'yaml':
        filters = await yamlFilters();
        break;
      /* istanbul ignore next */
      default:
        console.trace();
        console.warn('unknown filter', filter);
        continue;
    }

    if (filters != null) {
      env = addFilters(env, filters);
    }
  }
  return env;
}

export function addFilters(
  env: nunjucks.Environment,
  filters: IFilters,
): nunjucks.Environment {
  for (const [name, filter] of Object.entries(filters)) {
    env = env.addFilter(name, filter);
  }
  return env;
}

function jsonFilters(): IFilters {
  return {
    to_json: (value: any, kwargs?: any) => {
      const indent = kwargs?.indent;
      return JSON.stringify(value, null, indent != null ? indent : 2);
    },
    from_json: (value: any) => {
      return JSON.parse(value);
    },
  };
}

async function tomlFilters(): Promise<IFilters> {
  const toml = await import('smol-toml');
  return {
    to_toml: (value: any) => toml.stringify(value),
    from_toml: (value: any) => toml.parse(value),
  };
}

async function yamlFilters(): Promise<IFilters> {
  let yaml = await import('yaml');
  return {
    to_yaml: (value: any, kwargs?: any) => yaml.stringify(value, kwargs),
    from_yaml: (value: any, kwargs?: any) => yaml.parse(value, kwargs),
  };
}

export const URLJSF_FILTERS = {
  prune,
  base64: btoa,
  from_entries,
  schema_errors,
};
