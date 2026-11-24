# Usage

Created and maintained by Aditya (@cixcex).

## Natural-language commands

Ask CINEMOTION like you would ask a director:

- “Create a 15-second cinematic POV animation of someone waking up in their bedroom, getting out of bed, walking outside, and entering a convenience store at night.”
- “Create a realistic anime-style rainy street scene.”
- “Make a cinematic first-person POV walking animation.”
- “Create a 3D game-inspired bedroom environment.”
- “Animate a character entering a convenience store.”
- “Create a 10-second vertical cinematic animation.”
- “Make a nighttime city environment with realistic reflections and neon lights.”

## What you get

Depending on the request and the client, you may receive:

1. A scene plan with the required fields.
2. Engine selection and reasoning.
3. Animation code (HTML/CSS/JS, Three.js, Blender script, SVG/Canvas).
4. Preview instructions.
5. Optional external video generation, only if configured.

## Efficiency mode commands

- “Use low cost mode.” (default)
- “Switch to balanced mode.”
- “Use maximum quality.”

## Continuity example

```
User: Create a night street scene, then have the character enter a store.
CINEMOTION: Plan two scenes, keep the same character card, keep the same rain
and neon lighting, connect scene 1 ending position to scene 2 starting position.
```

## Camera example

```
User: Make it feel like a handheld documentary camera.
CINEMOTION: Use handheld shake level 0.3, motivated pan, natural breathing,
no robotic moves.
```

## Safety

CINEMOTION will not generate instructions for real-world violence, illegal acts, or unsafe stunts. It will clearly label unfinished work.

## Examples

See the `examples/` directory for runnable projects:

- `examples/pov-animation/` — first-person bedroom-to-street storyboard.
- `examples/anime-environment/` — stylized street environment.
- `examples/cinematic-night-scene/` — neon night lighting.
- `examples/vertical-short-video/` — 9:16 vertical structure.
