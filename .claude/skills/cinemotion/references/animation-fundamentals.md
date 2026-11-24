# Animation Fundamentals

Created and maintained by Aditya (@cixcex).

Use this reference when a request needs motion that feels alive. Keep the ideas short; apply only what the scene requires.

## Core principles

1. **Squash and stretch** — gives weight to impacts and jumps.
2. **Anticipation** — a small motion before the main action.
3. **Staging** — the camera and pose make the intent obvious.
4. **Follow-through** — hair, cloth, and props continue after the body stops.
5. **Ease in / ease out** — few things start or stop at constant speed.
6. **Secondary action** — small idle motion keeps scenes alive.
7. **Timing** — one action per beat; do not overlap unrelated actions.

## Practical rules

- Use 24 fps for cinematic feel, 30 fps for standard video, 60 fps for smooth loops.
- Keep a 0:00–0:14 vertical short within 3–4 scenes.
- Let the camera breathe: start still, move, settle.
- Animate the environment subtly: neon flicker, rain, cloth sway, steam.

## Easing cheat sheet

| Motion | Easing |
|---|---|
| Walk start | ease-in-out |
| Object fall | ease-in |
| Camera settle | ease-out |
| Idle breathing | sine loop |
| Impact | quick ease-in, hold, ease-out |

## Scene beat template

```
Beat 1: establish — camera still, subject posed
Beat 2: action — main movement begins
Beat 3: reaction — environment/secondary motion
Beat 4: settle — camera eases out, story state changes
```

## Common mistakes

- Robotic constant-speed camera moves.
- Changing clothing or hair between scenes.
- Empty environments with no light or atmosphere.
- Too many actions in one short clip.
- Claiming a render exists before rendering.
