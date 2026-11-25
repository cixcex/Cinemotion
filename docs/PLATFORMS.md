# Platform and Usage Guide

Created and maintained by Aditya (@cixcex).

CINEMOTION works through normal chat on supported Claude surfaces. You do not need to know Three.js, Blender, camera terminology, or rendering pipelines. Describe the animation; the skill plans it and produces the code or preview.

## Before you start

1. Download [`releases/cinemotion-claude-skill.zip`](../releases/cinemotion-claude-skill.zip) from the repository.
2. Use the Claude-ready skill ZIP, not `cinemotion-full-repository.zip`.
3. Make sure the skill folder name is `cinemotion`; the `name` field in `SKILL.md` must match it.
4. Enable code execution/file creation where your Claude surface requires it.
5. Keep API keys and user data out of the skill folder.

## Claude Android (primary target)

1. Update the Claude Android app.
2. Open **Settings → Capabilities** and enable **Code execution and file creation** (in newer layouts this may be labeled **Create and edit files**).
3. Open **Customize → Skills**.
4. Tap **+**, then **+ Create skill**, then **Upload a skill**.
5. Upload `cinemotion-claude-skill.zip`.
6. Toggle CINEMOTION on.
7. Test it with a normal request such as:

   > Create a 10-second cinematic POV of walking through a rainy neon street at night.

### What you get on Android

- A scene plan or storyboard.
- An engine choice with a short reason.
- Generated code, usually HTML/CSS/JS or Canvas for mobile preview.
- Clear preview instructions.

### Android preview rules

- Open generated `index.html` in a mobile browser.
- Three.js previews are easiest when served with any static server.
- Blender scripts must be run on a desktop computer with Blender installed.
- AI video generation is optional and only used when you have configured a provider and accepted its cost.

### If the Skills menu is missing

- Update the app and confirm your plan supports Skills.
- On Team/Enterprise plans, ask an owner to enable Skills and code execution in organization settings.
- If your Android build still does not expose custom skill upload, use Claude desktop/web or Claude Code. Do not assume a hidden menu exists.

## Claude desktop and web

1. Enable code execution/file creation in Settings.
2. Go to the Skills or Customize area.
3. Upload `cinemotion-claude-skill.zip`.
4. Toggle the skill on and ask in natural language.

Menu labels vary by client version; the upload flow is the same supported Claude Skills interface.

## Claude Code

Project install:

```bash
mkdir -p .claude/skills
cp -r .claude/skills/cinemotion /path/to/project/.claude/skills/cinemotion
```

User install:

```bash
mkdir -p ~/.claude/skills
cp -r .claude/skills/cinemotion ~/.claude/skills/cinemotion
```

Then start a session and ask for an animation. If your Claude Code version shows a skills command, use it to confirm CINEMOTION is listed.

## Claude API / Managed Agents

- **Skills API:** upload the ZIP through the Skills API and attach the skill to requests as documented by Anthropic.
- **Managed Agents:** attach the skill in the agent configuration or mount the repository.
- Skills still require the code execution environment for scripted/preview workflows.

## Other Agent Skills clients

Place the `cinemotion` folder in the client’s skills directory and ensure `SKILL.md` is at `cinemotion/SKILL.md`. The open Agent Skills format is supported by multiple clients; check your client’s documentation for the exact upload or folder location.

## Everyday prompts

Use plain language:

- “Create a 15-second cinematic POV animation of waking up, leaving the bedroom, and entering a convenience store at night.”
- “Make a realistic anime-style rainy street scene.”
- “Create a 10-second vertical cinematic animation.”
- “Animate a character entering a convenience store.”
- “Make a nighttime city environment with realistic reflections and neon lights.”

## Change cost mode

Say:

- “Use low cost mode.” (default)
- “Switch to balanced mode.”
- “Use maximum quality.”

## Expected workflow

1. Claude understands the concept.
2. It selects style, animation type, and engine.
3. It plans connected scenes with continuity checks.
4. It generates the plan and code.
5. It previews or executes when the environment permits.
6. It reports exactly what was produced: plan, code, preview, render, or video.

## Safety and honesty

- No real-world violence, illegal acts, or unsafe stunts.
- No fake rendered videos.
- No invented claims that third-party APIs are free.
- No credentials stored in the skill folder.

See also:

- [`ANDROID-GUIDE.md`](ANDROID-GUIDE.md)
- [`INSTALLATION.md`](INSTALLATION.md)
- [`USAGE.md`](USAGE.md)
- [`ENGINES.md`](ENGINES.md)
- [`COST-OPTIMIZATION.md`](COST-OPTIMIZATION.md)
