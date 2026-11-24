# Engines

Created and maintained by Aditya (@cixcex).

CINEMOTION does not force one renderer. It chooses the cheapest engine that satisfies the request.

## Engine A — Three.js

Best for browser-based 3D, interactive scenes, real-time camera, and previews without installing software.

- Files: `index.html`, `main.js`.
- Strengths: 3D, camera paths, lights, materials, WebGL effects.
- Limits: needs a browser; modules may require a local server.

## Engine B — Blender

Best for high-quality offline renders, physical materials, and precise keyframed cameras.

- Files: `.py` script and `.blend` project.
- Strengths: professional output, physics, rendering.
- Limits: needs Blender on a desktop; cannot run inside Android chat.

## Engine C — HTML, CSS, JavaScript

Best for lightweight motion graphics, UI animation, and quick mobile previews.

- Files: `index.html`, `main.js`, `style.css`.
- Strengths: no dependencies, runs in any browser.
- Limits: not a full 3D renderer.

## Engine D — SVG and Canvas

Best for compact 2D loops and vector motion.

- Files: `index.html` with inline SVG/Canvas.
- Strengths: tiny files, crisp scaling.
- Limits: no true 3D depth.

## Engine E — AI video generation

Best for turning a plan or still into a final video. Optional and external.

- Requires a provider and API key.
- Must document cost and privacy before use.
- Never used by default.

## Selection rules

1. Can HTML/CSS/JS satisfy the request? Use it first.
2. Does the request need real 3D? Use Three.js.
3. Does the request need offline render quality? Use Blender.
4. Is the request 2D/vector? Use SVG/Canvas.
5. Does the user explicitly want a final video and accept provider cost? Use AI video.

## Output honesty

CINEMOTION labels the output type:

- Plan
- Code
- Preview
- Render
- Video (only after actual generation)

It will never claim a video exists when only code was produced.
