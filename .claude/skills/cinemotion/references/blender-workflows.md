# Blender Workflows

Created and maintained by Aditya (@cixcex).

Use Blender when the user needs offline rendering, physical materials, or a professional 3D sequence.

## When to choose Blender

- High-quality stills or video renders.
- Complex lighting and materials.
- Camera motion that needs exact keyframes.
- The user has Blender installed and accepts desktop work.

## Script pattern

```python
import bpy

# Clear default objects
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

# Floor
bpy.ops.mesh.primitive_plane_add(size=10, location=(0, 0, 0))
floor = bpy.context.object
floor.name = "Floor"

# Key light
bpy.ops.object.light_add(type='AREA', location=(3, -3, 5))
key = bpy.context.object
key.data.energy = 250
key.data.color = (1.0, 0.95, 0.85)

# Camera
bpy.ops.object.camera_add(location=(0, -6, 2))
cam = bpy.context.object
bpy.context.scene.camera = cam

# Render settings
scene = bpy.context.scene
scene.render.fps = 24
scene.render.resolution_x = 1080
scene.render.resolution_y = 1920
scene.render.filepath = "/tmp/cinemotion_render.mp4"
```

## Animation pattern

```python
cam.location = (0, -6, 2)
cam.keyframe_insert(data_path="location", frame=1)
cam.location = (0, -2, 1.6)
cam.keyframe_insert(data_path="location", frame=96)
```

## Continuity checklist

- Save the `.blend` file name and scene unit.
- Keep character proportions and materials constant.
- Record camera start/end positions in the scene plan.
- Confirm the engine is available before promising a render.

## Android limitation

Blender cannot run inside the Claude Android app. If the user is on Android, generate the script and explain that they must run it on a desktop with Blender installed.
