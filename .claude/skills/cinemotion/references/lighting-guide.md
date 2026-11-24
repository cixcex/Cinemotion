# Lighting Guide

Created and maintained by Aditya (@cixcex).

Choose lighting to set mood and support the camera. Light should be motivated by the scene.

## Common setups

| Setup | Mood | Notes |
|---|---|---|
| Three-point | Clean, readable | Key, fill, rim; good default |
| Neon rim | Cyberpunk / night | Use colored area lights from behind |
| Moonlight | Night exterior | Cool blue, low fill, high contrast |
| Warm interior | Safe / intimate | Tungsten key, soft fill |
| Convenience store | Modern / lonely | Overhead fluorescent + cold spill |
| Rooftop dusk | Melancholy | Purple-orange gradient, rim from skyline |

## Physical behaviour

- Light falls off with distance.
- Shadows reveal object shape.
- Wet surfaces reflect nearby neon.
- Fog makes light beams visible.
- Small light flickers feel alive; constant flicker is distracting.

## Three.js quick pattern

```js
const key = new THREE.DirectionalLight(0xfff0e0, 2);
key.position.set(3, 5, 2);
scene.add(key);

const rim = new THREE.PointLight(0x00f0ff, 6, 6);
rim.position.set(-2, 1.5, -2);
scene.add(rim);

scene.add(new THREE.AmbientLight(0x404060, 0.2));
```

## Blender quick pattern

```python
bpy.ops.object.light_add(type='AREA', location=(2, -2, 3))
light = bpy.context.object
light.data.energy = 120
light.data.color = (1.0, 0.9, 0.8)
```

## Cheap lighting tips

- Use one key light and one rim light before adding detail.
- Fake a night sky with a dark blue ambient.
- Reuse one lighting preset across a sequence unless mood changes.
- Use emissive materials for signs instead of many point lights.

## Deliverable checklist

- State time of day and light sources.
- State colors and intensity.
- Confirm lighting is consistent between scene cuts.
