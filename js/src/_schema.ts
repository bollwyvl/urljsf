/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.
 */
export type ASchemaLocation = string;
/**
 * a format that can be serialized or deserialized
 *
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "any-file-format".
 */
export type FileFormat = 'json' | 'toml' | 'yaml';
/**
 * a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.
 */
export type ASchemaLocation1 = string;
/**
 * a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.
 */
export type ASchemaLocation2 = string;
/**
 * a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.
 */
export type ASchemaLocation3 = string;
/**
 * a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.
 */
export type ASchemaLocation4 = string;
/**
 * a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.
 */
export type ASchemaLocation5 = string;
/**
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "any-template".
 */
export type AnyTemplate = string | [string, ...string[]];
/**
 * a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.
 *
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "any-schema-location".
 */
export type ASchemaLocation6 = string;

/**
 * A schema for building forms for building URLs for building...
 */
export interface Urljsf {
  forms: Forms;
  /**
   * isolate each form on the page in an `iframe`
   */
  iframe?: boolean;
  /**
   * additional simple CSS to apply to an `iframe` element (implies `iframe`)
   *
   */
  iframe_style?: string;
  templates: Templates;
}
/**
 * forms that describe how to build the URL
 *
 */
export interface Forms {
  file: FileForm;
  url: URLForm;
}
/**
 * control the inputs to a JSON, TOML, or YAML file
 */
export interface FileForm {
  form_data?: ASchemaLocation;
  format: FileFormat;
  props?: Props;
  /**
   * prune empty lists, object, etc.
   */
  prune_empty?: boolean;
  schema: ASchemaLocation1;
  ui_schema?: ASchemaLocation2;
}
/**
 * JSON-compatible default values for `rjsf` [`Form.props`][form-props].
 *
 * [form-props]: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props
 */
export interface Props {
  /**
   * The value of this prop will be passed to the `accept-charset` HTML attribute on the form
   */
  acceptCharset?: string;
  /**
   * The value of this prop will be passed to the `action` HTML attribute on the form
   *
   * NOTE: this just renders the `action` attribute in the HTML markup. There is no real network request being sent to this `action` on submit. Instead, react-jsonschema-form catches the submit event with `event.preventDefault()` and then calls the `onSubmit` function, where you could send a request programmatically with `fetch` or similar.
   */
  action?: string;
  /**
   * The value of this prop will be passed to the `autocomplete` HTML attribute on the form
   */
  autoComplete?: string;
  /**
   * The value of this prop will be passed to the `class` HTML attribute on the form
   */
  className?: string;
  /**
   * It's possible to disable the whole form by setting the `disabled` prop. The `disabled` prop is then forwarded down to each field of the form. If you just want to disable some fields, see the `ui:disabled` parameter in `uiSchema`
   */
  disabled?: boolean;
  /**
   * The value of this prop will be passed to the `enctype` HTML attribute on the form
   */
  enctype?: string;
  /**
   * If set to true, causes the `extraErrors` to become blocking when the form is submitted
   */
  extraErrorsBlockSubmit?: boolean;
  /**
   * If set to true, then the first field with an error will receive the focus when the form is submitted with errors
   */
  focusOnFirstError?: boolean;
  /**
   * globals for custom UI
   */
  formContext?: {};
  /**
   * The data for the form, used to prefill a form with existing data
   */
  formData?: {};
  /**
   * The value of this prop will be passed to the `id` HTML attribute on the form
   */
  id?: string;
  /**
   * To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids; Default is `root`
   */
  idPrefix?: string;
  /**
   * To avoid using a path separator that is present in field names, it is possible to change the separator used for ids (Default is `_`)
   */
  idSeparator?: string;
  /**
   * If `omitExtraData` and `liveOmit` are both set to true, then extra form data values that are not in any form field will be removed whenever `onChange` is called. Set to `false` by default
   */
  liveOmit?: boolean;
  /**
   * If set to true, the form will perform validation and show any validation errors whenever the form data is changed, rather than just on submit
   */
  liveValidate?: boolean;
  /**
   * The value of this prop will be passed to the `method` HTML attribute on the form
   */
  method?: string;
  /**
   * The value of this prop will be passed to the `name` HTML attribute on the form
   */
  name?: string;
  /**
   * If set to true, turns off HTML5 validation on the form; Set to `false` by default
   */
  noHtml5Validate?: boolean;
  /**
   * If set to true, then extra form data values that are not in any form field will be removed whenever `onSubmit` is called. Set to `false` by default.
   */
  omitExtraData?: boolean;
  /**
   * It's possible to make the whole form read-only by setting the `readonly` prop. The `readonly` prop is then forwarded down to each field of the form. If you just want to make some fields read-only, see the `ui:readonly` parameter in `uiSchema`
   */
  readonly?: boolean;
  /**
   * The JSON schema object for the form
   */
  schema?: {};
  /**
   * When this prop is set to `top` or 'bottom', a list of errors (or the custom error list defined in the `ErrorList`) will also show. When set to false, only inline input validation errors will be shown. Set to `top` by default
   */
  showErrorList?: false | 'top' | 'bottom';
  /**
   * It's possible to change the default `form` tag name to a different HTML tag, which can be helpful if you are nesting forms. However, native browser form behaviour, such as submitting when the `Enter` key is pressed, may no longer work
   */
  tagName?: string;
  /**
   * The value of this prop will be passed to the `target` HTML attribute on the form
   */
  target?: string;
  uiSchema?: UISchema;
}
/**
 * The uiSchema for the form
 */
export interface UISchema {
  'ui:options'?: UIOptions;
  'ui:urljsfGrid'?: {
    addButton?: string[];
    children?: {
      [k: string]: string[];
    };
    default?: string[];
  };
}
export interface UIOptions {
  urljsfGrid?: {
    addButton?: string[];
    children?: {
      [k: string]: string[];
    };
    default?: string[];
  };
}
/**
 * control the inputs to a valid URL
 */
export interface URLForm {
  form_data?: ASchemaLocation3;
  props?: Props1;
  schema?: ASchemaLocation4;
  ui_schema?: ASchemaLocation5;
}
/**
 * JSON-compatible default values for `rjsf` [`Form.props`][form-props].
 *
 * [form-props]: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props
 */
export interface Props1 {
  /**
   * The value of this prop will be passed to the `accept-charset` HTML attribute on the form
   */
  acceptCharset?: string;
  /**
   * The value of this prop will be passed to the `action` HTML attribute on the form
   *
   * NOTE: this just renders the `action` attribute in the HTML markup. There is no real network request being sent to this `action` on submit. Instead, react-jsonschema-form catches the submit event with `event.preventDefault()` and then calls the `onSubmit` function, where you could send a request programmatically with `fetch` or similar.
   */
  action?: string;
  /**
   * The value of this prop will be passed to the `autocomplete` HTML attribute on the form
   */
  autoComplete?: string;
  /**
   * The value of this prop will be passed to the `class` HTML attribute on the form
   */
  className?: string;
  /**
   * It's possible to disable the whole form by setting the `disabled` prop. The `disabled` prop is then forwarded down to each field of the form. If you just want to disable some fields, see the `ui:disabled` parameter in `uiSchema`
   */
  disabled?: boolean;
  /**
   * The value of this prop will be passed to the `enctype` HTML attribute on the form
   */
  enctype?: string;
  /**
   * If set to true, causes the `extraErrors` to become blocking when the form is submitted
   */
  extraErrorsBlockSubmit?: boolean;
  /**
   * If set to true, then the first field with an error will receive the focus when the form is submitted with errors
   */
  focusOnFirstError?: boolean;
  /**
   * globals for custom UI
   */
  formContext?: {};
  /**
   * The data for the form, used to prefill a form with existing data
   */
  formData?: {};
  /**
   * The value of this prop will be passed to the `id` HTML attribute on the form
   */
  id?: string;
  /**
   * To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids; Default is `root`
   */
  idPrefix?: string;
  /**
   * To avoid using a path separator that is present in field names, it is possible to change the separator used for ids (Default is `_`)
   */
  idSeparator?: string;
  /**
   * If `omitExtraData` and `liveOmit` are both set to true, then extra form data values that are not in any form field will be removed whenever `onChange` is called. Set to `false` by default
   */
  liveOmit?: boolean;
  /**
   * If set to true, the form will perform validation and show any validation errors whenever the form data is changed, rather than just on submit
   */
  liveValidate?: boolean;
  /**
   * The value of this prop will be passed to the `method` HTML attribute on the form
   */
  method?: string;
  /**
   * The value of this prop will be passed to the `name` HTML attribute on the form
   */
  name?: string;
  /**
   * If set to true, turns off HTML5 validation on the form; Set to `false` by default
   */
  noHtml5Validate?: boolean;
  /**
   * If set to true, then extra form data values that are not in any form field will be removed whenever `onSubmit` is called. Set to `false` by default.
   */
  omitExtraData?: boolean;
  /**
   * It's possible to make the whole form read-only by setting the `readonly` prop. The `readonly` prop is then forwarded down to each field of the form. If you just want to make some fields read-only, see the `ui:readonly` parameter in `uiSchema`
   */
  readonly?: boolean;
  /**
   * The JSON schema object for the form
   */
  schema?: {};
  /**
   * When this prop is set to `top` or 'bottom', a list of errors (or the custom error list defined in the `ErrorList`) will also show. When set to false, only inline input validation errors will be shown. Set to `top` by default
   */
  showErrorList?: false | 'top' | 'bottom';
  /**
   * It's possible to change the default `form` tag name to a different HTML tag, which can be helpful if you are nesting forms. However, native browser form behaviour, such as submitting when the `Enter` key is pressed, may no longer work
   */
  tagName?: string;
  /**
   * The value of this prop will be passed to the `target` HTML attribute on the form
   */
  target?: string;
  uiSchema?: UISchema;
}
/**
 * `nunjucks` templates that control URLs for machines and markdown for humans
 *
 */
export interface Templates {
  checks?: Checks;
  /**
   * text to show on the button when a form is valid. multiple lines will be joined
   * with `\n`, then leading and trailing whitespace will be trimmed.
   *
   */
  submit_button: string | [string, ...string[]];
  /**
   * the URL to build. all whitespace will be trimmed, then joined with no delimiter.
   *
   */
  url: string | [string, ...string[]];
}
/**
 * markdown templates, which if rendered to _any_ non-whitespace, will be treated as
 * an error, preventing the submit button from being shown.
 *
 */
export interface Checks {
  [k: string]: AnyTemplate;
}
/**
 * `nunjucks` templates keyed by their label: any evaluating to a non-whitespace
 * string will be considered failing.
 *
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "checks".
 */
export interface Checks1 {
  [k: string]: AnyTemplate;
}
/**
 * a description of a form that builds a data file
 *
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "file-form".
 */
export interface FileForm1 {
  form_data?: ASchemaLocation;
  format: FileFormat;
  props?: Props;
  /**
   * prune empty lists, object, etc.
   */
  prune_empty?: boolean;
  schema: ASchemaLocation1;
  ui_schema?: ASchemaLocation2;
}
/**
 * forms used to build and populate a URL
 *
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Forms1 {
  file: FileForm;
  url: URLForm;
}
/**
 * [`nunjucks`][nunjucks] strings (or lists of strings) that control how strings are built
 * from forms.
 *
 * The [jinja compatibility layer][jinjacompat] is enabled, allowing for more expressive,
 * python-like syntax. Some addition filters are included:
 *
 * - `base64` turns a string into its [Base64]-encoded alternative
 *
 * [nunjucks]: https://mozilla.github.io/nunjucks/templating.html
 * [jinjacompat]: https://mozilla.github.io/nunjucks/api.html#installjinjacompat
 * [Base64]: https://developer.mozilla.org/en-US/docs/Glossary/Base64
 *
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "templates".
 */
export interface Templates1 {
  checks?: Checks;
  /**
   * text to show on the button when a form is valid. multiple lines will be joined
   * with `\n`, then leading and trailing whitespace will be trimmed.
   *
   */
  submit_button: string | [string, ...string[]];
  /**
   * the URL to build. all whitespace will be trimmed, then joined with no delimiter.
   *
   */
  url: string | [string, ...string[]];
}
/**
 * a definition of a form to build a URL
 *
 * This interface was referenced by `Urljsf`'s JSON-Schema
 * via the `definition` "url-form".
 */
export interface URLForm1 {
  form_data?: ASchemaLocation3;
  props?: Props1;
  schema?: ASchemaLocation4;
  ui_schema?: ASchemaLocation5;
}
