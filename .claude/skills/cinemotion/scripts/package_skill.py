#!/usr/bin/env python3
"""Package CINEMOTION into the two required ZIP deliverables.

Created and maintained by Aditya (@cixcex).

Outputs:
  releases/cinemotion-claude-skill.zip
  releases/cinemotion-full-repository.zip
"""

from __future__ import annotations

import os
import sys
import zipfile
from pathlib import Path


def find_root() -> Path:
    return Path(__file__).resolve().parents[4]


def zip_skill(root: Path, releases: Path) -> Path:
    skill_dir = root / ".claude" / "skills" / "cinemotion"
    out = releases / "cinemotion-claude-skill.zip"
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
        for path in sorted(skill_dir.rglob("*")):
            if not path.is_file():
                continue
            if "__pycache__" in path.parts or path.suffix == ".pyc":
                continue
            arc = Path("cinemotion") / path.relative_to(skill_dir)
            zf.write(path, arc.as_posix())
    return out


def zip_repo(root: Path, releases: Path) -> Path:
    out = releases / "cinemotion-full-repository.zip"
    exclude_names = {".git", "node_modules", "__pycache__", ".venv", "venv"}
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as zf:
        for dirpath, dirnames, filenames in os.walk(root):
            dirnames[:] = [d for d in dirnames if d not in exclude_names]
            for fname in filenames:
                src = Path(dirpath) / fname
                rel = src.relative_to(root)
                # Skip generated packages and caches.
                if rel.parts[0] == "releases" and rel.suffix == ".zip":
                    continue
                if "__pycache__" in rel.parts:
                    continue
                zf.write(src, rel.as_posix())
    return out


def verify_zip(path: Path, required: list[str]) -> list[str]:
    with zipfile.ZipFile(path) as zf:
        names = set(zf.namelist())
    errors = []
    for req in required:
        if req not in names:
            errors.append(f"{path.name} missing {req}")
    return errors


def main() -> int:
    root = find_root()
    releases = root / "releases"
    releases.mkdir(parents=True, exist_ok=True)

    skill_zip = zip_skill(root, releases)
    repo_zip = zip_repo(root, releases)

    errors: list[str] = []
    errors.extend(verify_zip(skill_zip, [
        "cinemotion/SKILL.md",
        "cinemotion/references/animation-fundamentals.md",
        "cinemotion/references/camera-techniques.md",
        "cinemotion/references/lighting-guide.md",
        "cinemotion/references/character-animation.md",
        "cinemotion/references/scene-continuity.md",
        "cinemotion/references/environment-design.md",
        "cinemotion/references/threejs-workflows.md",
        "cinemotion/references/blender-workflows.md",
        "cinemotion/references/video-generation.md",
        "cinemotion/references/cost-optimization.md",
        "cinemotion/templates/cinematic-pov.md",
        "cinemotion/templates/anime-3d.md",
        "cinemotion/templates/realistic-environment.md",
        "cinemotion/templates/vertical-video.md",
        "cinemotion/templates/cinematic-storytelling.md",
        "cinemotion/scripts/validate_skill.py",
        "cinemotion/scripts/package_skill.py",
    ]))
    errors.extend(verify_zip(repo_zip, [
        "README.md",
        "LICENSE",
        "CHANGELOG.md",
        "CONTRIBUTING.md",
        "CODE_OF_CONDUCT.md",
        "SECURITY.md",
        ".gitignore",
        "docs/ANDROID-GUIDE.md",
        "docs/QUICKSTART.md",
        "examples/README.md",
        "assets/branding/cinemotion-banner.svg",
        "assets/branding/cinemotion-mark.svg",
        ".github/PULL_REQUEST_TEMPLATE.md",
        ".github/ISSUE_TEMPLATE/bug_report.yml",
        ".github/ISSUE_TEMPLATE/feature_request.yml",
        ".claude/skills/cinemotion/SKILL.md",
        "examples/pov-animation/index.html",
        "examples/vertical-short-video/index.html",
    ]))

    if errors:
        print("FAIL")
        for e in errors:
            print(f"  - {e}")
        return 1

    print(f"Wrote {skill_zip} ({skill_zip.stat().st_size:,} bytes)")
    print(f"Wrote {repo_zip} ({repo_zip.stat().st_size:,} bytes)")
    print("PASS: both ZIP packages contain the required files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
