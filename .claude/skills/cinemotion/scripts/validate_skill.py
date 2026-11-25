#!/usr/bin/env python3
"""Validate the CINEMOTION Agent Skill and repository.

Created and maintained by Aditya (@cixcex).

This script performs read-only validation. It does not modify files.
"""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path


def find_root() -> Path:
    # scripts/validate_skill.py -> .claude/skills/cinemotion/scripts/validate_skill.py
    return Path(__file__).resolve().parents[4]


def parse_frontmatter(text: str) -> tuple[dict[str, str], str]:
    """Minimal YAML frontmatter parser for the fields used by this skill."""
    if not text.startswith("---"):
        raise ValueError("SKILL.md must start with --- frontmatter")
    parts = text.split("---", 2)
    if len(parts) < 3:
        raise ValueError("SKILL.md must close frontmatter with ---")
    fm: dict[str, str] = {}
    current_key = None
    for line in parts[1].splitlines():
        if not line.strip():
            continue
        if line.startswith("  ") and current_key:
            fm[current_key] += " " + line.strip()
            continue
        if ":" in line:
            key, value = line.split(":", 1)
            key = key.strip()
            value = value.strip()
            current_key = key
            fm[key] = value
    return fm, parts[2]


def validate_skill(root: Path) -> list[str]:
    errors: list[str] = []
    skill_dir = root / ".claude" / "skills" / "cinemotion"
    skill_md = skill_dir / "SKILL.md"

    if not skill_md.exists():
        errors.append("Missing .claude/skills/cinemotion/SKILL.md")
        return errors

    text = skill_md.read_text(encoding="utf-8")
    try:
        fm, body = parse_frontmatter(text)
    except ValueError as exc:
        errors.append(str(exc))
        return errors

    name = fm.get("name", "")
    description = fm.get("description", "")

    if name != "cinemotion":
        errors.append(f"frontmatter name must be 'cinemotion', got {name!r}")
    if not re.match(r"^[a-z0-9]+(?:-[a-z0-9]+)*$", name):
        errors.append("name may only contain lowercase letters, numbers, hyphens; no leading/trailing/double hyphens")
    if skill_dir.name != name:
        errors.append(f"name must match parent folder; folder={skill_dir.name!r} name={name!r}")
    if not (1 <= len(description) <= 1024):
        errors.append("description must be 1-1024 characters")
    if not description.strip().endswith("."):
        errors.append("description should end with a period for clean discovery")

    body_lines = body.splitlines()
    if len(body_lines) > 500:
        errors.append(f"SKILL.md body should be under 500 lines; has {len(body_lines)}")

    for field in ("license", "compatibility", "metadata"):
        if field not in fm:
            errors.append(f"frontmatter missing recommended field: {field}")

    # References and templates must exist when referenced.
    for line in text.splitlines():
        m = re.search(r"(?:references|templates)/[\w-]+\.md", line)
        if m:
            rel = m.group(0)
            if not (skill_dir / rel).exists():
                errors.append(f"missing referenced file: {rel}")

    # Every reference/template file should be loadable and not empty.
    for sub in ("references", "templates"):
        folder = skill_dir / sub
        if not folder.exists():
            errors.append(f"missing folder: {sub}/")
            continue
        for f in folder.glob("*.md"):
            if f.stat().st_size < 50:
                errors.append(f"file too small, likely incomplete: {f.relative_to(skill_dir)}")

    return errors


def validate_repo(root: Path) -> list[str]:
    errors: list[str] = []
    required = [
        "README.md",
        "LICENSE",
        "CHANGELOG.md",
        "CONTRIBUTING.md",
        "CODE_OF_CONDUCT.md",
        "SECURITY.md",
        ".gitignore",
        "docs/INSTALLATION.md",
        "docs/ANDROID-GUIDE.md",
        "docs/QUICKSTART.md",
        "docs/PLATFORMS.md",
        "docs/USAGE.md",
        "docs/ENGINES.md",
        "docs/COST-OPTIMIZATION.md",
        "docs/ARCHITECTURE.md",
        "docs/FAQ.md",
        "examples/README.md",
        "assets/branding/cinemotion-logo.svg",
        "assets/branding/cinemotion-banner.png",
        "assets/branding/cinemotion-mark.svg",
        ".github/PULL_REQUEST_TEMPLATE.md",
        ".github/ISSUE_TEMPLATE/bug_report.yml",
        ".github/ISSUE_TEMPLATE/feature_request.yml",
    ]
    for rel in required:
        if not (root / rel).exists():
            errors.append(f"missing repository file: {rel}")

    attribution = "Created and maintained by Aditya (@cixcex)."
    for rel in ("README.md", "CONTRIBUTING.md", "SECURITY.md", "CHANGELOG.md"):
        path = root / rel
        if path.exists() and attribution not in path.read_text(encoding="utf-8"):
            errors.append(f"missing developer attribution in {rel}")

    examples = [
        "examples/pov-animation",
        "examples/anime-environment",
        "examples/cinematic-night-scene",
        "examples/vertical-short-video",
    ]
    for ex in examples:
        for fname in ("README.md", "scene-plan.md", "index.html"):
            if not (root / ex / fname).exists():
                errors.append(f"missing example file: {ex}/{fname}")

    # No fake social proof or fabricated testimonials.
    readme = (root / "README.md").read_text(encoding="utf-8")
    for bad in ("★ 10,000", "10,000+ downloads", "testimonial:"):
        if bad.lower() in readme.lower():
            errors.append(f"possible fake social proof in README.md: {bad}")

    return errors


def validate_secrets(root: Path) -> list[str]:
    """Scan tracked text files for accidental secrets or leaked task assets."""
    errors: list[str] = []
    secret_re = re.compile(
        r"github_pat_[A-Za-z0-9_]{20,}|gh[pousr]_[A-Za-z0-9]{36,}|"
        r"sk-ant-[A-Za-z0-9_-]{20,}|AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z_-]{35}|"
        r"BEGIN [A-Z ]*PRIVATE KEY"
    )
    asset_re = re.compile(r"Screenshot_20\d{6}|in\.pinterest\.com|uploads/004" + "eccab")
    skip_suffixes = {".zip", ".pyc", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"}
    for path in root.rglob("*"):
        if not path.is_file() or ".git" in path.parts or "__pycache__" in path.parts:
            continue
        if path.suffix.lower() in skip_suffixes:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue
        rel = path.relative_to(root).as_posix()
        for m in secret_re.finditer(text):
            errors.append(f"possible secret in {rel}: {m.group(0)[:12]}...")
        for m in asset_re.finditer(text):
            errors.append(f"leaked task asset reference in {rel}: {m.group(0)}")
    return errors


def main() -> int:
    root = find_root()
    print(f"Validating CINEMOTION at {root}")
    errors: list[str] = []
    errors.extend(validate_skill(root))
    errors.extend(validate_repo(root))
    errors.extend(validate_secrets(root))

    if errors:
        print("\nFAIL")
        for e in errors:
            print(f"  - {e}")
        return 1

    print("PASS: skill frontmatter, references, templates, examples, attribution, and repo structure are valid.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
