# CINEMOTION

![CINEMOTION logo](assets/branding/cinemotion-logo.svg)

Advanced AI animation skill for Claude and AI agents. CINEMOTION turns plain natural-language prompts into cinematic scene plans, animation code, and real outputs when the client can execute them.

It is built primarily for the Claude Android app, while remaining compatible with Claude Desktop, Claude Web, Claude Code, and any agent that supports the [Agent Skills](https://agentskills.io/) format.

## What it does

CINEMOTION makes Claude behave like an animation director, cinematographer, environment designer, and motion-graphics engineer in one workflow:

- Understand a natural-language animation request.
- Decide the visual style, animation type, and engine.
- Plan connected cinematic scenes with consistent characters and environments.
- Select camera moves, lighting, and environmental detail.
- Generate reusable animation code for Three.js, Blender, HTML/CSS/JS, or SVG/Canvas.
- Optionally call external AI video services when they are explicitly configured.
- Minimize token usage and external API cost by default.

## Animation capabilities

| Area | Supported |
|---|---|
| Styles | Cinematic 3D, anime/game-inspired animation, first-person POV |
| Environments | Night streets, neon locations, bedrooms, convenience stores, rooftops, restaurants, parking lots, indoor/outdoor scenes |
| Cameras | POV, tracking, dolly, pan, tilt, handheld, low/high angle, over-shoulder, zoom, focus pull, DOF, motion blur |
| Characters | Walk, run, sit, stand, turn, look, hand/arm motion, object interaction, clothing consistency |
| Effects | Volumetric light, fog, reflections, particles, dynamic shadows, ambient occlusion, environmental motion |
| Output | Scene plan, animation code, browser preview, Blender script, or optional AI video generation |

## Repository layout

```
cinemotion/
├── .claude/skills/cinemotion/   # Agent Skills package
│   ├── SKILL.md                 # Main skill instructions
│   ├── references/              # Detailed reference docs
│   ├── templates/               # Reusable scene templates
│   └── scripts/                 # Validation and packaging scripts
├── docs/                        # Installation, Android guide, usage, engines, cost
├── examples/                    # Runnable example projects
├── assets/branding/             # Logo and brand assets
└── releases/                    # Generated ZIP packages
```

## Quick start

1. Download `releases/cinemotion-claude-skill.zip`.
2. Follow [docs/ANDROID-GUIDE.md](docs/ANDROID-GUIDE.md) for Android, or [docs/INSTALLATION.md](docs/INSTALLATION.md) for Claude Code, desktop, and web.
3. Ask Claude in plain language:

> Create a 15-second cinematic POV animation of someone waking up in their bedroom, getting out of bed, walking outside, and entering a convenience store at night.

Claude will plan the scenes, select an engine, and generate the animation code. When code execution is available, it can run or preview the result.

## Installation

See the dedicated guides:

- [Android installation guide](docs/ANDROID-GUIDE.md)
- [General installation guide](docs/INSTALLATION.md)
- [Usage examples](docs/USAGE.md)
- [Engine details](docs/ENGINES.md)
- [Cost optimization](docs/COST-OPTIMIZATION.md)

## Engine choices

CINEMOTION selects the cheapest engine that satisfies the request:

- **Three.js** — browser-based 3D, real-time previews, interactive camera.
- **Blender** — scripted 3D scenes, materials, lighting, and renders.
- **HTML/CSS/JS** — lightweight 2D/2.5D motion graphics.
- **SVG/Canvas** — compact vector and canvas animations.
- **AI video generation** — optional, only when the user has configured a service and accepted its cost.

See [docs/ENGINES.md](docs/ENGINES.md) for selection rules.

## Efficiency modes

- `Use low cost mode` — default; local rendering, compact plans, minimal API calls.
- `Switch to balanced mode` — moderate detail and rendering time.
- `Use maximum quality` — advanced camera, lighting, and optional external generation.

The skill defaults to low cost and never claims third-party APIs are free.

## Quality assurance

The skill includes a validation script that checks:

- YAML frontmatter and required fields.
- Skill folder name match.
- Reference and template file links.
- Example completeness.
- Developer attribution.
- ZIP package structure.

Run:

```bash
python3 .claude/skills/cinemotion/scripts/validate_skill.py
python3 .claude/skills/cinemotion/scripts/package_skill.py
```

## Compatibility

- Claude Android (primary target, Skills upload interface)
- Claude Desktop / Web (Skills upload or project `.claude/skills/` install)
- Claude Code (project or user skills folder)
- Other Agent Skills-compatible clients

Exact menu names and availability depend on the client version. If a surface does not expose custom skill upload, use the documented desktop/web or Claude Code path.

## License

MIT License — see [LICENSE](LICENSE).

## Credits

Created and maintained by Aditya (@cixcex).

- GitHub: https://github.com/cixcex
- Instagram: https://instagram.com/cixcex
- Email: kalebcherry2016@gmail.com

CINEMOTION is an independent open-source skill. It is not affiliated with, endorsed by, or sponsored by Anthropic, Blender, Three.js, or any other third-party project. All third-party names and logos belong to their respective owners.
