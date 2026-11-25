# Android Guide

Created and maintained by Aditya (@cixcex).

CINEMOTION is designed first for the Claude Android app. This guide is honest about what the skill can and cannot do on mobile.

## Before you start

- Update the Claude Android app to the latest version.
- Confirm you are on a plan that supports Skills.
- Skills require code execution and file creation; the app must have these enabled.

## Install the skill

1. Download `cinemotion-claude-skill.zip` to your Android device.
2. Open the Claude Android app.
3. Open Settings, then look for Capabilities and enable Code execution and file creation (the label may be “Create and edit files”).
4. Go to Customize > Skills.
5. Tap “+” or “+ Create skill,” then choose “Upload a skill.”
6. Select the ZIP file and upload it.
7. Toggle CINEMOTION on.

If any menu label differs, follow the equivalent option shown by the app. If the Skills upload option is not visible, your app build may not expose it yet.

## Use the skill

For the full cross-surface guide, see [PLATFORMS.md](PLATFORMS.md).

Type a normal request, for example:

> Create a 10-second cinematic POV of walking through a rainy neon street at night.

CINEMOTION will:

1. Create a scene plan.
2. Choose an engine (HTML/CSS/JS by default on mobile).
3. Generate the animation code.
4. Tell you how to preview it.

## Previewing output on Android

- For HTML/CSS/JS examples, open the generated `index.html` in any mobile browser.
- For Three.js previews, open the HTML file on a machine that can serve it; some mobile browsers handle local `file://` modules differently.
- For Blender scripts, you need a desktop computer with Blender installed.

## Efficiency modes

Say:

- “Use low cost mode” (default)
- “Switch to balanced mode”
- “Use maximum quality”

The mode changes how much detail Claude generates and whether external APIs are even considered.

## Honest limits on Android

Claude Android cannot run Blender, execute arbitrary shell commands, or render video inside the chat. When those limits apply, CINEMOTION gives you the plan and code plus clear next steps instead of falsely claiming a final render.

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| Skills menu missing | App version or plan limits | Update the app, check plan, or use desktop/web |
| Skill not triggering | Description not matched | Mention “animation,” “POV,” “cinematic scene,” or “3D” |
| Code not running | Code execution disabled | Enable it in Settings > Capabilities |
| Upload fails | ZIP too large or name mismatch | Use the official `cinemotion-claude-skill.zip` |

## Also supported

Claude desktop/web, Claude Code, Claude API/Managed Agents, and other Agent Skills clients. See [PLATFORMS.md](PLATFORMS.md) for the complete usage flow.

## Credits

Created and maintained by Aditya (@cixcex).

- GitHub: https://github.com/cixcex
- Instagram: https://instagram.com/cixcex
- Email: kalebcherry2016@gmail.com
