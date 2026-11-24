# Installation

Created and maintained by Aditya (@cixcex).

CINEMOTION is packaged as an [Agent Skills](https://agentskills.io/) folder. It can be installed in Claude products that support custom skills.

## What you need

- A Claude surface that supports custom Skills.
- The file `releases/cinemotion-claude-skill.zip`.
- For some workflows, code execution enabled.

## Install in Claude (web, desktop, or Android)

1. Open Settings.
2. Go to Capabilities and enable Code execution and file creation (also shown as Create and edit files).
3. Go to Customize > Skills.
4. Select “+” then “+ Create skill.”
5. Choose “Upload a skill.”
6. Upload `cinemotion-claude-skill.zip`.
7. Toggle CINEMOTION on.

Menu names and feature availability can change. If the Android app does not show the upload option, use Claude on desktop/web or Claude Code.

## Install in Claude Code

Place the skill folder in your project or user skills directory:

```bash
# Project-level
cp -r .claude/skills/cinemotion /path/to/project/.claude/skills/cinemotion

# User-level
cp -r .claude/skills/cinemotion ~/.claude/skills/cinemotion
```

Then start a Claude Code session and ask for an animation.

## Install via the Skills API

For API users, upload the skill ZIP through the Anthropic Skills API as described in the official Skills API documentation. The skill is a normal Agent Skills package; no extra manifest is required.

## Verify installation

Run the included validator from the full repository:

```bash
python3 .claude/skills/cinemotion/scripts/validate_skill.py
```

You should see a PASS line. If you only have the Claude-ready skill ZIP, extract it first, then run the script from the extracted folder.

## Uninstall

- Claude app: Customize > Skills, find CINEMOTION, disable or delete it.
- Claude Code: remove the skill folder from `.claude/skills/` or `~/.claude/skills/`.
