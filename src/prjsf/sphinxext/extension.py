"""A sphinx extension for ``prjsf``."""
# Copyright (C) prjsf contributors.
# Distributed under the terms of the Modified BSD License.

from __future__ import annotations

from pathlib import Path
from typing import TYPE_CHECKING, Any

from ..constants import THEMES, UTF8
from ..prjsf import Prjsf
from .directives import prform

if TYPE_CHECKING:
    from sphinx.application import Sphinx


ROOT_CLASS = "prjsf-form"

DEFAULT_SCOPES = [
    f".{ROOT_CLASS}",
    f".{ROOT_CLASS} .list-group",
    f".{ROOT_CLASS} .card",
]


def variable_css(css: dict[str, Any]) -> list[str]:
    """Generate css variable chunks."""
    scopes = css.get("scopes", DEFAULT_SCOPES)
    rules = [
        f"  --{k}: var(--{v}) !important;"
        for k, v in sorted(css.get("variables", {}).items())
    ]

    chunk = "\n".join([f"""{", ".join(scopes)} {{""", *rules, "}", ""])

    return [chunk] if rules else []


def heading_css(css: dict[str, Any]) -> list[str]:
    """Inject CSS for ``h*`` elements."""
    if not css.get("compact_headings"):
        return []

    selector = ",\n".join([f".{ROOT_CLASS} h{i + 1}" for i in range(7)])
    chunk = "\n".join([f"{selector} {{", "margin: 0", "}"])
    return [chunk]


def build_finished(app: Sphinx, _err: Exception | None) -> None:
    """Copy all static assets.

    Should only deploy bootstrap if asked.
    """
    conf = app.config["prjsf"].get
    static = Path(app.builder.outdir) / "_static"

    Prjsf.deploy_static(Path(app.builder.outdir) / static)

    css = conf("css", {})

    chunks = [*variable_css(css), *heading_css(css)]

    if chunks:
        (static / "prjsf/prjsf.css").write_text("\n".join(chunks), **UTF8)


def html_page_context(
    app: Sphinx, pagename: str, templatename: str, context: dict, doctree: Any
) -> None:
    """Add JS/CSS to the page."""
    if not doctree or not doctree.traverse(prform):
        return
    conf = app.config["prjsf"].get

    app.add_js_file("prjsf/prjsf.js", type="module")
    app.add_css_file(
        "prjsf/prjsf.js",
        rel="modulepreload",
        type=None,
    )

    if conf("css", {}).get("add_bootstrap"):
        theme = conf("theme", THEMES[0])
        css = "bootstrap.min" if theme == THEMES[0] else f"themes/{theme}"
        app.add_css_file(f"prjsf/{css}.css")

    css = conf("css", {})
    if "variables" in css or "compact_headings" in css:
        app.add_css_file("prjsf/prjsf.css")
