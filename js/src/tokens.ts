// Copyright (C) prjsf contributors.
// Distributed under the terms of the Modified BSD License.

export const META_KEYS = ['prjsfFileName', 'prjsfPruneEmpty', 'prjsfIdPrefix'] as const;
export const PROVIDER_KEYS = [
  'prjsfGitHubUrl',
  'prjsfGitHubRepo',
  'prjsfGitHubBranch',
] as const;
export const URL_KEYS = ['prjsfData', 'prjsfSchema', 'prjsfUiSchema'] as const;
export const FORMAT_KEYS = [
  'prjsfSchemaFormat',
  'prjsfUiSchemaFormat',
  'prjsfDataFormat',
] as const;
export const ALL_KEYS = [...PROVIDER_KEYS, ...URL_KEYS, ...FORMAT_KEYS, ...META_KEYS];

export type TProviderKey = (typeof PROVIDER_KEYS)[number];
export type TFormatKey = (typeof FORMAT_KEYS)[number];
export type TUrlKey = (typeof URL_KEYS)[number];
export type TMetaKey = (typeof META_KEYS)[number];
export type TDataKey = TProviderKey | TFormatKey | TUrlKey | TMetaKey;

export type TDataSet = Partial<{
  [K in TDataKey]: string | null;
}>;

export const DEFAULTS: TDataSet = {
  prjsfSchemaFormat: 'json',
  prjsfUiSchemaFormat: 'json',
  prjsfDataFormat: 'json',
  prjsfPruneEmpty: 'true',
  prjsfGitHubRepo: 'main',
  prjsfGitHubUrl: 'https://github.com',
};
