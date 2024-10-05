"""Standalone CLI for building simple PR forms."""
# Copyright (C) urljsf contributors.
# Distributed under the terms of the Modified BSD License.

from __future__ import annotations

from argparse import ArgumentParser
from pathlib import Path

from .config import DEFAULTS, Config
from .constants import THEMES, __dist__, __version__
from .urljsf import Urljsf


def get_parser() -> ArgumentParser:
    """Get a parser for the command line arguments."""
    parser = ArgumentParser(__dist__, add_help=False, description=__doc__)
    parser.add_argument(
        "-r",
        "--github-repo",
        help="the owner and repo name to target, e.g. ``deathbeds/urljsf``",
    )
    parser.add_argument(
        "-b",
        "--github-branch",
        help="the full branch URL to target",
        default=DEFAULTS["github_branch"],
    )
    parser.add_argument(
        "-f",
        "--filename",
        dest="pr_filename",
        help="the name of the file to propose",
        default=DEFAULTS["pr_filename"],
    )
    parser.add_argument(
        "-p",
        "--filename-pattern",
        dest="pr_filename_pattern",
        help="a JS regular expression the proposed file must match",
        default=DEFAULTS["pr_filename_pattern"],
    )
    parser.add_argument(
        "-s",
        "--schema",
        help="path or URL for a JSON Schema as a JSON, TOML, or YAML file",
    )
    parser.add_argument(
        "-u",
        "--ui-schema",
        help="path or URL for an rjsf UI schema as a JSON, TOML, or YAML file",
    )
    parser.add_argument(
        "-d",
        "--data",
        help=(
            "path or URL for an initial data document as a JSON, TOML, or YAML file. "
            "Overrides any defaults from ``schema``."
        ),
    )
    parser.add_argument(
        "-o",
        "--output-dir",
        type=Path,
        help="path to a folder to generate",
        default=DEFAULTS["output_dir"],
    )
    parser.add_argument(
        "-h",
        "--html-filename",
        help="name of an HTML file to generate",
        default=DEFAULTS["html_filename"],
    )
    parser.add_argument(
        "--py-schema",
        help="a schema from a python.module:member e.g. foo.bar:baz",
    )
    parser.add_argument(
        "--py-ui-schema",
        help="an rjsf UI schema from a python.module:member e.g. foo.bar:baz",
    )
    parser.add_argument(
        "--py-data",
        help="an initial data document from e.g. foo.bar:baz",
    )
    parser.add_argument(
        "--html-title",
        help="HTML page title",
    )
    parser.add_argument(
        "--prune-empty",
        help="remove empty objects and arrays",
    )
    parser.add_argument(
        "-t",
        "--theme",
        help="the name of a bootswatch theme. (default: plain-old bootstrap)",
        choices=THEMES,
        default=THEMES[0],
    )
    parser.add_argument(
        "--template",
        help="name of the template to use",
        default=DEFAULTS["template"],
    )
    parser.add_argument(
        "-g", "--github-url", help="a GitHub deployment", default=DEFAULTS["github_url"]
    )
    parser.add_argument("--help", action="help", help="show program's usage and exit")
    parser.add_argument("--version", action="version", version=__version__)
    return parser


def main(argv: list[str] | None = None) -> int:
    """Run the command line interface."""
    parser = get_parser()
    config = Config(**vars(parser.parse_args(argv)))
    urljsf = Urljsf(config)
    return urljsf.run_cli()