# Camera Techniques

Created and maintained by Aditya (@cixcex).

Select camera work that supports the story. Avoid unnecessary movement.

## Technique table

| Technique | Use when | Implementation note |
|---|---|---|
| First-person POV | User wants embodiment | Add subtle head bob and eye-level height |
| Third-person tracking | Follow a character | Keep character in upper third, lead room ahead |
| Dolly shot | Reveal or approach | Move camera along a path, ease in/out |
| Pan | Show horizontal space | Rotate yaw slowly; avoid whip unless dramatic |
| Tilt | Show height or falling | Rotate pitch with a clear motivation |
| Handheld | Tension, realism | Add small noise, not vomiting shake |
| Static composition | Dialogue or mood | Use rule of thirds and light contrast |
| Low angle | Power, scale | Place camera near floor looking up |
| High angle | Vulnerability, overview | Place camera above looking down |
| Over-the-shoulder | Interaction | Keep shoulder in foreground, face readable |
| Zoom | Focus on detail | Use sparingly; prefer dolly for realism |
| Focus pull | Shift attention | Animate focal length or DOF plane |
| Depth of field | Separate subject | Blur background subtly; keep subject sharp |
| Motion blur | Speed | Enable only when fast motion is intentional |

## Camera plan fields

For each scene record:

- `camera_position`
- `camera_movement`
- `focal_length` or field of view
- `focus_target`
- `shake_level` (0–1)
- `transition_from_previous`

## Default recipes

- **POV walk:** eye height 1.6 m, gentle bob, 70° FOV, forward drift.
- **Neon street reveal:** low static start, slow dolly forward, focus on brightest sign.
- **Bedroom wake-up:** close-up on face, slow tilt up, then cut to wide.
- **Rain scene:** slight handheld noise, raindrop particles, shallow DOF.

## Continuity rules

- Keep camera direction consistent between cuts.
- Do not reverse screen direction without a story reason.
- Record the ending state so the next scene can begin from it.
