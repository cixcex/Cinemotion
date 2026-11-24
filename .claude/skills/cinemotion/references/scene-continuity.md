# Scene Continuity

Created and maintained by Aditya (@cixcex).

Scenes must feel like one story, not random clips.

## Required fields per scene

- `scene_description`
- `duration`
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

## Continuity rules

1. **Character identity** — same design and clothing.
2. **Environment layout** — doors, windows, and signs stay in the same place.
3. **Lighting consistency** — unless the story moves through time or space.
4. **Object positions** — tracked objects keep their last known place.
5. **Camera direction** — avoid jump cuts that flip screen direction.
6. **Story progression** — each scene changes the state.

## Transition library

| Transition | Use |
|---|---|
| Cut | Normal story flow |
| Fade | Time passage or dream |
| Match cut | Similar shape or motion |
| Dolly through | Move from one space to another |
| Whip pan | Sudden time/place change |
| Cross dissolve | Soft memory or mood shift |

## State tracking template

```json
{
  "character": "standing in bedroom, facing window",
  "environment": "bedroom door open, light off",
  "lighting": "cool moonlight, warm phone glow",
  "next_start": "camera continues from window toward door"
}
```

## QA checklist

- Read the ending state of scene N before starting scene N+1.
- Verify the character can physically move between both positions.
- Verify lighting makes sense in the new location.
- Verify no prop appears or disappears without a reason.
