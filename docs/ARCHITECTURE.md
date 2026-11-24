# Architecture

Created and maintained by Aditya (@cixcex).

CINEMOTION follows the Agent Skills open standard: a folder with `SKILL.md` plus optional references, templates, scripts, and assets.

## Layers

1. **Metadata** — YAML frontmatter enables discovery and activation.
2. **Main instructions** — `SKILL.md` contains the director workflow, engine matrix, efficiency modes, and output contract.
3. **References** — specialized docs loaded on demand.
4. **Templates** — reusable scene-plan structures.
5. **Scripts** — validation and packaging automation.
6. **Examples** — runnable projects demonstrating the workflow.
7. **Docs** — installation, Android guide, usage, engine, cost, and FAQ.

## Repository structure

```
cinemotion/
├── README.md
├── LICENSE
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── .gitignore
├── .claude/skills/cinemotion/
│   ├── SKILL.md
│   ├── references/
│   ├── templates/
│   └── scripts/
├── docs/
├── examples/
├── assets/branding/
└── releases/
```

## Progressive disclosure

- At startup: only `name` and `description` are loaded.
- On activation: `SKILL.md` body is loaded.
- On demand: individual references and templates are loaded.

Keep `SKILL.md` under 500 lines. Add new detail in `references/`, not in the main file.

## Engine abstraction

The skill does not contain a renderer. It emits instructions/code for:

- Three.js
- Blender
- HTML/CSS/JS
- SVG/Canvas
- Optional AI video providers

This keeps the skill small and portable.

## Efficiency system

- Mode selection happens before planning.
- Templates reduce repeated explanation.
- Reusable camera/lighting presets reduce generation.
- Continuity rules reduce rework.

## Validation pipeline

1. `validate_skill.py` checks frontmatter, references, templates, examples, attribution, and repository structure.
2. `package_skill.py` creates both ZIP packages and verifies their contents.

Run both scripts before every release.
