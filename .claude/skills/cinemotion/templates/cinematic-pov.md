# Cinematic POV Template

Created and maintained by Aditya (@cixcex).

Use this template when the user wants a first-person cinematic.

## Plan fields

```
Title: [one line]
Duration: [seconds]
Aspect: [16:9 / 9:16 / 1:1]
Style: [cinematic 3D / anime / game-inspired]
```

## Scene blocks

For each scene fill:

```
Scene N — [name]
- scene_description:
- duration:
- camera_position: [eye height, X/Y/Z]
- camera_movement: [dolly/pan/tilt/handheld/static]
- character_position: [where the POV body is]
- character_actions: [walk, look, reach, stop]
- environment_details: [room/street/store elements]
- lighting: [source, color, intensity]
- animation_details: [head bob, hand motion, breathing]
- transition: [cut/fade/match cut/dolly through]
- ending_state: [what is true at the end]
- continuity_check: [pass/fail]
```

## Starter prompt

> Create a 15-second cinematic POV animation of someone waking up in their bedroom, getting out of bed, walking outside, and entering a convenience store at night.

## Default values

- Eye height: 1.6 m
- FOV: 70°
- Walk cadence: 120 steps/min
- Handheld shake: 0.15 on a 0–1 scale
- End state: camera settles on a readable subject
