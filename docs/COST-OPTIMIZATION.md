# Cost Optimization

Created and maintained by Aditya (@cixcex).

CINEMOTION defaults to LOW COST mode.

## Modes

| Mode | Detail level | Engine | External APIs |
|---|---|---|---|
| Low cost | Compact | HTML/CSS/JS, Canvas | None |
| Balanced | Moderate | Three.js or simple Blender | None unless requested |
| Maximum quality | High | Three.js/Blender | Optional paid video API |

## Techniques

- Progressive disclosure: load only needed references.
- Reuse templates and character cards.
- Reuse assets across scenes.
- Batch compatible operations.
- Avoid regenerating the same code.
- Prefer local rendering.

## Cost types

- Claude subscription: chat usage under the user's plan.
- API usage: billed per provider if an external API is called.
- Local rendering: user device resources.

CINEMOTION names the cost type before recommending an action.

## What it will not do

- Claim token usage is zero.
- Claim third-party APIs are free.
- Hide local rendering limits.
- Add unnecessary dependencies.

## Switching modes

Say any of these:

- “Use low cost mode.”
- “Switch to balanced mode.”
- “Use maximum quality.”

The skill returns to low cost for the next request unless you say otherwise.
