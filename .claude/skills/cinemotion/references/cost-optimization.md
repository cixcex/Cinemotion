# Cost Optimization

Created and maintained by Aditya (@cixcex).

CINEMOTION defaults to LOW COST. The goal is to deliver useful output while wasting nothing.

## Three modes

| Mode | Plan detail | Engine | External calls | Render target |
|---|---|---|---|---|
| Low cost | Compact, one-line beats | HTML/CSS/JS or Canvas | None | Browser preview |
| Balanced | Moderate detail | Three.js or simple Blender script | None unless requested | Browser or local render |
| Maximum quality | Full detail, multiple shots | Three.js/Blender | Optional paid video API | Final render |

## Token-saving techniques

- Load only the reference file needed.
- Reuse templates instead of writing new structure.
- Reuse assets across scenes.
- Use short scene descriptions with explicit fields.
- Batch compatible operations.
- Do not regenerate identical code.

## What not to do

- Do not load every reference for every request.
- Do not add unnecessary dependencies.
- Do not claim third-party APIs are free.
- Do not hide local rendering limits.

## Cost honesty

- **Claude subscription**: chat usage subject to the user's plan.
- **API usage**: billed by the provider if the user calls an API.
- **Local rendering**: uses the user's device resources.

Always label which cost type applies before recommending an action.

## Efficiency checklist

- Is the request clear enough to act on? If yes, proceed without clarification.
- Can HTML/CSS/JS satisfy it? Start there.
- Is an external API truly necessary? If not, do not call it.
- Can the plan be expressed in fewer fields without losing meaning? Do so.
