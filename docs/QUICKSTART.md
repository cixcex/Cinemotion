# Quickstart

Created and maintained by Aditya (@cixcex).

## Install

1. Get `cinemotion-claude-skill.zip` from `releases/`.
2. Enable code execution/file creation in Claude Settings.
3. Go to Customize > Skills and upload the ZIP.
4. Toggle CINEMOTION on.

For Claude Code, copy `.claude/skills/cinemotion` into your project or user skills folder.

## Ask

Use plain language:

> Create a 10-second cinematic POV of walking through a rainy neon street at night.

CINEMOTION will return a scene plan, engine choice, and code or preview instructions.

## Switch modes

- “Use low cost mode.” (default)
- “Switch to balanced mode.”
- “Use maximum quality.”

## Verify it works

Open an example in a browser:

```bash
cd examples/pov-animation
python3 -m http.server 8000
# open http://localhost:8000
```

## Validate

```bash
python3 .claude/skills/cinemotion/scripts/validate_skill.py
```

## Honest limits

Claude Android cannot run Blender or render video inside chat. CINEMOTION will give you the plan and code plus the next step instead of claiming a finished render.
