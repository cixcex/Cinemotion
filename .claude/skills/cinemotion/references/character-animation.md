# Character Animation

Created and maintained by Aditya (@cixcex).

Use this reference for human or humanoid motion. Keep the design simple enough to be consistent.

## Character card

Create one card at the start and reuse it:

```
name: Traveler
body_proportions: stylized 7-head
hair: short dark
top: charcoal hoodie
bottom: black jeans
shoes: white sneakers
accent: small blue backpack
```

Do not change this card inside the same animation.

## Basic motions

| Action | Key poses | Timing note |
|---|---|---|
| Walk | contact, down, passing, up | 2 steps per second |
| Run | contact, fly, support | Faster cadence, larger arm swing |
| Sit | lean, bend knees, lower | Ease into the chair |
| Stand | anticipate up, push | Use legs before torso |
| Turn | head leads, body follows | Avoid spinning on one frame |
| Look around | eyes, then head, then shoulders | Hold each pause |
| Hand reach | shoulder, elbow, wrist | Extend before grabbing |

## First-person POV

The camera is the character. Animate:

- Eye height (about 1.6 m).
- Head bob at walk/run frequency.
- Breathing idle motion.
- Hand/object entering frame when relevant.

## Consistency checks

- Same clothing colors and silhouette in every scene.
- Same body proportions.
- Same prop positions unless the story moves them.
- Same hair and accessories.

## Interaction rules

- Hand reaches before object moves.
- Object leaves trace: door creak, light switch, shelf shift.
- Keep interactions motivated; avoid random floating objects.

## Low-cost approach

Use a simple capsule or block character for planning. Add detail only if the user requests maximum quality. This keeps token use and render time low.
