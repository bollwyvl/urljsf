"""Generated schema for ``urljsf``."""
# Copyright (C) urljsf contributors.
# Distributed under the terms of the Modified BSD License.

from typing import Any, Literal, Required, TypedDict, Union

ASchema = Union["_AnySchemaLocation", "AnInlineObject"]
"""
A Schema.

Aggregation type: oneOf
Subtype: "_AnySchemaLocation", "AnInlineObject"
"""


AnInlineObject = dict[str, Any]
"""
An Inline Object.

An line object
"""


class FileForm(TypedDict, total=False):
    """File Form.

    a description of a form that builds a data file
    """

    form_data: "ASchema"
    """
    A Schema.

    Aggregation type: oneOf
    Subtype: "_AnySchemaLocation", "AnInlineObject"
    """

    format: Required["FileFormat"]
    """
    File Format.

    a format that can be serialized or deserialized

    Required property
    """

    props: "_Props"
    """
    JSON-compatible default values for `rjsf` [`Form.props`][form-props].

    [form-props]: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props
    """

    prune_empty: bool
    """ prune empty lists, object, etc. """

    schema: Required["ASchema"]
    """
    A Schema.

    Aggregation type: oneOf
    Subtype: "_AnySchemaLocation", "AnInlineObject"

    Required property
    """

    ui_schema: "ASchema"
    """
    A Schema.

    Aggregation type: oneOf
    Subtype: "_AnySchemaLocation", "AnInlineObject"
    """


FileFormat = Literal["json", "toml", "yaml"]
"""
File Format.

a format that can be serialized or deserialized
"""
FILEFORMAT_JSON: Literal["json"] = "json"
"""The values for the 'File Format' enum"""
FILEFORMAT_TOML: Literal["toml"] = "toml"
"""The values for the 'File Format' enum"""
FILEFORMAT_YAML: Literal["yaml"] = "yaml"
"""The values for the 'File Format' enum"""


class UrlForm(TypedDict, total=False):
    """URL Form.

    a definition of a form to build a URL
    """

    form_data: "ASchema"
    """
    A Schema.

    Aggregation type: oneOf
    Subtype: "_AnySchemaLocation", "AnInlineObject"
    """

    props: "_Props"
    """
    JSON-compatible default values for `rjsf` [`Form.props`][form-props].

    [form-props]: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props
    """

    schema: "ASchema"
    """
    A Schema.

    Aggregation type: oneOf
    Subtype: "_AnySchemaLocation", "AnInlineObject"
    """

    ui_schema: "ASchema"
    """
    A Schema.

    Aggregation type: oneOf
    Subtype: "_AnySchemaLocation", "AnInlineObject"
    """


# | urljsf.
# |
# | A schema for building forms for building URLs for building...
Urljsf = TypedDict(
    "Urljsf",
    {
        # | format: uri-reference
        "$id": str,
        # | format: uri-reference
        "$schema": str,
        "css_variables": dict[str, "_AnyCss"],
        # | forms used to build and populate a URL
        # |
        # | Required property
        "forms": Required["_Forms"],
        # | isolate each form on the page in an `iframe`
        "iframe": bool,
        # | additional simple CSS to apply to an `iframe` element (implies `iframe`)
        # |
        "iframe_style": str,
        # | don't try to add a link to bootstrap if missing.
        # |
        # | default: False
        "no_bootstrap": bool,
        # | [`nunjucks`][nunjucks] strings (or lists of strings) that control how strings are built
        # | from forms.
        # |
        # | The [jinja compatibility layer][jinjacompat] is enabled, allowing for more expressive,
        # | python-like syntax. Some addition filters are included:
        # |
        # | - `base64` turns a string into its [Base64]-encoded alternative
        # |
        # | [nunjucks]: https://mozilla.github.io/nunjucks/templating.html
        # | [jinjacompat]: https://mozilla.github.io/nunjucks/api.html#installjinjacompat
        # | [Base64]: https://developer.mozilla.org/en-US/docs/Glossary/Base64
        # |
        # | Required property
        "templates": Required["_Templates"],
    },
    total=False,
)


_AnyCss = Union[str, dict[str, Any]]
""" Aggregation type: oneOf """


_AnySchemaLocation = str
"""
a path to a JSON schema, serialized as JSON, TOML, or (simple) YAML.

format: uri-reference
minLength: 1
"""


_AnyTemplate = Union[str, "_AnyTemplateAnyof1"]
""" Aggregation type: anyOf """


_AnyTemplateAnyof1 = list[str]
""" minItems: 1 """


_Checks = dict[str, "_AnyTemplate"]
"""
`nunjucks` templates keyed by their label: any evaluating to a non-whitespace
string will be considered failing.
"""


class _Forms(TypedDict, total=False):
    """forms used to build and populate a URL."""

    file: "FileForm"
    """
    File Form.

    a description of a form that builds a data file
    """

    url: Required["UrlForm"]
    """
    URL Form.

    a definition of a form to build a URL

    Required property
    """


class _Props(TypedDict, total=False):
    """JSON-compatible default values for `rjsf` [`Form.props`][form-props].

    [form-props]: https://rjsf-team.github.io/react-jsonschema-form/docs/api-reference/form-props
    """

    acceptCharset: str
    """ The value of this prop will be passed to the `accept-charset` HTML attribute on the form """

    action: str
    """
    The value of this prop will be passed to the `action` HTML attribute on the form

    NOTE: this just renders the `action` attribute in the HTML markup. There is no real network request being sent to this `action` on submit. Instead, react-jsonschema-form catches the submit event with `event.preventDefault()` and then calls the `onSubmit` function, where you could send a request programmatically with `fetch` or similar.
    """

    autoComplete: str
    """ The value of this prop will be passed to the `autocomplete` HTML attribute on the form """

    className: str
    """ The value of this prop will be passed to the `class` HTML attribute on the form """

    disabled: bool
    """ It's possible to disable the whole form by setting the `disabled` prop. The `disabled` prop is then forwarded down to each field of the form. If you just want to disable some fields, see the `ui:disabled` parameter in `uiSchema` """

    enctype: str
    """ The value of this prop will be passed to the `enctype` HTML attribute on the form """

    extraErrorsBlockSubmit: bool
    """ If set to true, causes the `extraErrors` to become blocking when the form is submitted """

    focusOnFirstError: bool
    """ If set to true, then the first field with an error will receive the focus when the form is submitted with errors """

    formContext: dict[str, Any]
    """ globals for custom UI """

    formData: dict[str, Any]
    """ The data for the form, used to prefill a form with existing data """

    id: str
    """ The value of this prop will be passed to the `id` HTML attribute on the form """

    idPrefix: str
    """ To avoid collisions with existing ids in the DOM, it is possible to change the prefix used for ids; Default is `root` """

    idSeparator: str
    """ To avoid using a path separator that is present in field names, it is possible to change the separator used for ids (Default is `_`) """

    liveOmit: bool
    """ If `omitExtraData` and `liveOmit` are both set to true, then extra form data values that are not in any form field will be removed whenever `onChange` is called. Set to `false` by default """

    liveValidate: bool
    """ If set to true, the form will perform validation and show any validation errors whenever the form data is changed, rather than just on submit """

    method: str
    """ The value of this prop will be passed to the `method` HTML attribute on the form """

    name: str
    """ The value of this prop will be passed to the `name` HTML attribute on the form """

    noHtml5Validate: bool
    """ If set to true, turns off HTML5 validation on the form; Set to `false` by default """

    omitExtraData: bool
    """ If set to true, then extra form data values that are not in any form field will be removed whenever `onSubmit` is called. Set to `false` by default. """

    readonly: bool
    """ It's possible to make the whole form read-only by setting the `readonly` prop. The `readonly` prop is then forwarded down to each field of the form. If you just want to make some fields read-only, see the `ui:readonly` parameter in `uiSchema` """

    schema: dict[str, Any]
    """ The JSON schema object for the form """

    showErrorList: "_PropsShowerrorlist"
    """ When this prop is set to `top` or 'bottom', a list of errors (or the custom error list defined in the `ErrorList`) will also show. When set to false, only inline input validation errors will be shown. Set to `top` by default """

    tagName: str
    """ It's possible to change the default `form` tag name to a different HTML tag, which can be helpful if you are nesting forms. However, native browser form behaviour, such as submitting when the `Enter` key is pressed, may no longer work """

    target: str
    """ The value of this prop will be passed to the `target` HTML attribute on the form """

    uiSchema: "_Uischema"
    """ an rjsf ui schema, with light extension """


_PropsShowerrorlist = Literal[False, "top", "bottom"]
""" When this prop is set to `top` or 'bottom', a list of errors (or the custom error list defined in the `ErrorList`) will also show. When set to false, only inline input validation errors will be shown. Set to `top` by default """
_PROPSSHOWERRORLIST_FALSE: Literal[False] = False
"""The values for the 'When this prop is set to `top` or 'bottom', a list of errors (or the custom error list defined in the `ErrorList`) will also show. When set to false, only inline input validation errors will be shown. Set to `top` by default' enum"""
_PROPSSHOWERRORLIST_TOP: Literal["top"] = "top"
"""The values for the 'When this prop is set to `top` or 'bottom', a list of errors (or the custom error list defined in the `ErrorList`) will also show. When set to false, only inline input validation errors will be shown. Set to `top` by default' enum"""
_PROPSSHOWERRORLIST_BOTTOM: Literal["bottom"] = "bottom"
"""The values for the 'When this prop is set to `top` or 'bottom', a list of errors (or the custom error list defined in the `ErrorList`) will also show. When set to false, only inline input validation errors will be shown. Set to `top` by default' enum"""


class _Templates(TypedDict, total=False):
    """[`nunjucks`][nunjucks] strings (or lists of strings) that control how strings are built
    from forms.

    The [jinja compatibility layer][jinjacompat] is enabled, allowing for more expressive,
    python-like syntax. Some addition filters are included:

    - `base64` turns a string into its [Base64]-encoded alternative

    [nunjucks]: https://mozilla.github.io/nunjucks/templating.html
    [jinjacompat]: https://mozilla.github.io/nunjucks/api.html#installjinjacompat
    [Base64]: https://developer.mozilla.org/en-US/docs/Glossary/Base64
    """

    checks: "_Checks"
    """
    `nunjucks` templates keyed by their label: any evaluating to a non-whitespace
    string will be considered failing.
    """

    submit_button: Required["_AnyTemplate"]
    """
    Aggregation type: anyOf

    Required property
    """

    url: Required["_AnyTemplate"]
    """
    Aggregation type: anyOf

    Required property
    """


_URLJSF_NO_BOOTSTRAP_DEFAULT = False
""" Default value of the field path 'urljsf no_bootstrap' """


class _Uioptions(TypedDict, total=False):
    urljsfGrid: "_UioptionsUrljsfgrid"


class _UioptionsUrljsfgrid(TypedDict, total=False):
    addButton: list[str]
    children: dict[str, list[str]]
    default: list[str]


# | an rjsf ui schema, with light extension
_Uischema = TypedDict(
    "_Uischema",
    {
        "ui:options": "_Uioptions",
        "ui:urljsfGrid": "_UischemaUiColonUrljsfgrid",
    },
    total=False,
)


class _UischemaUiColonUrljsfgrid(TypedDict, total=False):
    addButton: list[str]
    children: dict[str, list[str]]
    default: list[str]