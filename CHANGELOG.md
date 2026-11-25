# Changelog

Created and maintained by Aditya (@cixcex).

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-11-25

### Added

- Full cross-platform usage guide (`docs/PLATFORMS.md`) covering Android, desktop/web, Claude Code, API/Managed Agents, and other Agent Skills clients.
- Cross-links from README, installation guide, and Android guide.

### Changed

- Tracked both release ZIPs in Git so `releases/` is populated on GitHub.

## [1.1.2] - 2026-11-25

### Changed

- Track `releases/cinemotion-claude-skill.zip` and `releases/cinemotion-full-repository.zip` in Git so the two required packages are downloadable directly from the repository.
- Updated `.gitignore` accordingly.

## [1.1.1] - 2026-11-25

### Changed

- Replaced the generated SVG header banner with the maintainer-supplied PNG banner (`assets/branding/cinemotion-banner.png`).
- Updated README and packaging checks to reference the PNG banner.

## [1.1.0] - 2026-11-25

### Added

- Professional README banner, mark, and logo refresh.
- Quickstart guide (`docs/QUICKSTART.md`).
- Contributor Covenant Code of Conduct.
- GitHub issue templates and pull-request template.
- Examples index with engine labels.
- Secret-pattern and screenshot-reference scan in `validate_skill.py`.
- Additional package verification for governance and branding files.

### Changed

- Bumped skill metadata version to `1.1.0`.
- Repackaged `cinemotion-claude-skill.zip` and `cinemotion-full-repository.zip`.

## [1.0.0] - 2026-11-25

### Added

- Initial CINEMOTION release.
- Agent Skills `SKILL.md` with YAML frontmatter and progressive disclosure.
- Modular reference docs for animation, cameras, lighting, characters, continuity, environments, Three.js, Blender, video generation, and cost optimization.
- Reusable templates for cinematic POV, anime 3D, realistic environments, vertical video, and cinematic storytelling.
- Validation script (`validate_skill.py`) and packaging script (`package_skill.py`).
- Runnable examples for POV animation, anime environment, cinematic night scene, and vertical short video.
- Complete installation, Android, usage, engines, cost-optimization, architecture, and FAQ documentation.
- Branding asset and MIT license.
- Developer attribution for Aditya (@cixcex) across all required files.
