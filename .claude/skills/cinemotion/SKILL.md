---
name: cinemotion
description: Create cinematic animations from natural-language requests. Use when the user asks for a 3D animation, first-person POV walk, anime scene, cinematic environment, camera movement, vertical short video, motion graphics, or an animation plan using Three.js, Blender, HTML/CSS/JS, SVG/Canvas, or AI video generation.
license: MIT
compatibility: Claude Android, Claude Desktop, Claude Web, Claude Code, and Agent Skills-compatible clients; local preview requires a browser or Blender
metadata:
  version: 1.1.2
  author: Aditya (@cixcex)
  project: CINEMOTION
  repository: https://github.com/cixcex/cinemotion
  default-mode: low-cost
---

# CINEMOTION

Created and maintained by Aditya (@cixcex).

CINEMOTION is an advanced AI animation skill. It turns a plain-language request into a cinematic scene plan, chooses the right engine, and generates the animation code or assets needed for the final output.

It is optimized for Claude Android, but works wherever Agent Skills are supported.

## When to use

Use this skill when the user wants to create, plan, storyboard, render, or animate any of these:

- Cinematic 3D scenes or environments.
- Anime or game-inspired animation.
- First-person POV walking, running, or exploration.
- Night streets, neon locations, bedrooms, convenience stores, rooftops, restaurants, parking lots, or rainy urban scenes.
- Camera movements, lighting setups, or scene transitions.
- Motion graphics, 2D animation, vertical short videos, or animated loops.

Do not use this skill for video editing of existing files, simple image generation without motion, or questions unrelated to animation.

## Core rules

1. **Android-first.** Basic use must work through normal chat. Do not require terminal commands, local Blender, or a desktop IDE.
2. **Low cost by default.** Start with the smallest amount of detail, code, and external API usage that satisfies the request.
3. **No fake outputs.** Never say a video was rendered unless a render actually ran. State clearly whether the deliverable is a plan, code, preview, or final video.
4. **Continuity first.** Keep characters, clothing, environment layout, lighting, and object positions consistent across scenes.
5. **Progressive disclosure.** Load a reference file only when the task needs it. Do not read every reference for every request.
6. **Make reasonable creative decisions.** Ask questions only when intent, duration, aspect ratio, or safety constraints are unclear.

## Animation director workflow

For every animation request:

1. **Understand** the concept and desired mood in one sentence.
2. **Classify** the visual style: cinematic 3D, anime/game, first-person POV, or motion graphics.
3. **Break into scenes** with a clear beginning, middle, and ending state.
4. **Design the environment** with spatial structure, objects, textures, and atmospheric effects.
5. **Define the character** with appearance, clothing, and movement style; keep them consistent.
6. **Plan the camera** using the scene context and the camera reference.
7. **Set lighting** and time of day.
8. **Choose transitions** that preserve story continuity.
9. **Select the engine** using the matrix below.
10. **Generate the plan, code, or assets**.
11. **Execute or preview** when the available tools permit it.
12. **Deliver** the output plus the next step the user can take.

## Scene plan contract

Every scene plan must include these fields, even if the user never asks for them explicitly:

- `scene_description`
- `duration`
- `style`
- `camera_position`
- `camera_movement`
- `character_position`
- `character_actions`
- `environment_details`
- `lighting`
- `animation_details`
- `transition`
- `ending_state`
- `continuity_check`

Use `templates/cinematic-storytelling.md` as the starting structure. For POV work, use `templates/cinematic-pov.md`.

## Efficiency modes

| Mode | When to use | Behavior |
|---|---|---|
| Low cost | Default | Compact plan, reused assets, local/browser preview, no external API calls |
| Balanced | User says “balanced” | Moderate detail, one external call only if clearly useful |
| Maximum quality | User says “maximum quality” | Advanced camera, lighting, environmental detail, optional paid services |

Recognized phrases:

- “Use low cost mode.” / “Keep it cheap.”
- “Switch to balanced mode.”
- “Use maximum quality.” / “Make it premium.”

Be honest about costs: Claude usage, API usage, and local rendering are different. Do not claim third-party APIs are free.

## Engine selection matrix

| Request shape | Preferred engine | Why |
|---|---|---|
| Real-time 3D preview, interactive camera | Three.js | Browser-native, no install |
| Full 3D render, physical materials | Blender | Offline, professional |
| Lightweight motion graphic, UI animation | HTML/CSS/JS | Smallest footprint |
| 2D vector or canvas loop | SVG/Canvas | Compact, mobile-friendly |
| Final video from a still or text prompt | AI video generation | Optional; only if configured |

Prefer free and local options first. See `references/threejs-workflows.md`, `references/blender-workflows.md`, and `references/video-generation.md`.

## Camera quick guide

Select camera work from `references/camera-techniques.md`. Default choices:

- POV exploration → first-person camera with natural head bob.
- Character reveal → slow dolly-in or low-angle static shot.
- Environment showcase → smooth pan with depth-of-field.
- Tension → handheld micro-shake and slow push.

Avoid robotic linear motion; ease in and out, and give the camera a motivated reason to move.

## Character animation

Use `references/character-animation.md` for walk, run, sit, stand, turn, look, hand, and object-interaction patterns. Keep clothing and proportions constant. Record the character design at the start of the plan and reuse it.

## Environment design

Use `references/environment-design.md` for bedrooms, streets, stores, rooftops, restaurants, parking lots, neon scenes, rain, and indoor spaces. Every environment must include spatial structure, lighting, objects, background detail, atmosphere, and camera placement.

## Output contract

Depending on the user request and the available tools, deliver one or more of these:

1. Scene plan (Markdown or JSON).
2. Animation code block or file.
3. Preview instructions or generated HTML.
4. Render result, only if rendering actually happened.

If rendering is not possible on Claude Android, provide the code plus a clear next step, such as “open this HTML file in a browser” or “run this Blender script on a desktop machine.”

## References to load on demand

Only read the files you need. Recommended loading rules:

- Character or clothing consistency → `references/character-animation.md`, `references/scene-continuity.md`
- Camera movement → `references/camera-techniques.md`
- Lighting or mood → `references/lighting-guide.md`
- Three.js output → `references/threejs-workflows.md`
- Blender output → `references/blender-workflows.md`
- External video API → `references/video-generation.md`
- Cost concerns → `references/cost-optimization.md`
- Basic animation principles → `references/animation-fundamentals.md`

## Examples

User: “Create a 15-second cinematic POV animation of someone waking up in their bedroom, getting out of bed, walking outside, and entering a convenience store at night.”

CINEMOTION response:

1. Build a 4-scene plan using `templates/cinematic-pov.md`.
2. Maintain one POV character and one lighting setup.
3. Select HTML/CSS/JS for the mobile preview unless the user requests Three.js or Blender.
4. Generate the scene plan and runnable preview code.
5. State that no video was rendered unless preview actually ran.

User: “Make a rainy neon street scene.”

CINEMOTION response:

1. Use `references/environment-design.md` for rainy street layout.
2. Use `references/lighting-guide.md` for neon and reflections.
3. Generate a compact scene plus engine-specific code.

## Safety

- Do not generate instructions for real-world violence, illegal acts, or unsafe stunts.
- Keep external API keys and user data out of the skill files.
- Do not execute unknown bundled scripts without review.
- Do not claim affiliation with Anthropic, Blender, Three.js, or other third parties.

## Credits

Created and maintained by Aditya (@cixcex).

- GitHub: https://github.com/cixcex
- Instagram: https://instagram.com/cixcex
- Email: kalebcherry2016@gmail.com
