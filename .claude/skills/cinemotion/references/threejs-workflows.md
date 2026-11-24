# Three.js Workflows

Created and maintained by Aditya (@cixcex).

Use Three.js when the user wants a real-time 3D browser preview.

## Project structure

```
example/
├── index.html
├── main.js
└── README.md
```

No build step is required for basic examples. Load Three.js from a CDN if the client supports it, or use a local copy if available.

## Minimal starter

```html
<!doctype html>
<html>
<head><meta charset="utf-8"><title>CINEMOTION preview</title></head>
<body>
  <canvas id="scene"></canvas>
  <script src="https://unpkg.com/three@0.160.0/build/three.min.js"></script>
  <script src="main.js"></script>
</body>
</html>
```

```js
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, innerWidth/innerHeight, 0.1, 100);
camera.position.set(0, 1.6, 3);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 4, 1);
scene.add(light);

const box = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshStandardMaterial({ color: 0x5eead4 })
);
scene.add(box);

renderer.setAnimationLoop(() => {
  box.rotation.y += 0.01;
  renderer.render(scene, camera);
});
```

## Camera animation pattern

```js
const clock = new THREE.Clock();
function update() {
  const t = clock.getElapsedTime();
  camera.position.x = Math.sin(t * 0.2) * 2;
  camera.lookAt(0, 1, 0);
}
```

Use easing functions rather than linear motion when possible.

## Performance tips

- Reuse geometries and materials.
- Keep poly counts low on mobile.
- Use one or two lights before adding many.
- Render only the canvas size needed.

## Deliverable

Provide the HTML/JS files plus one line explaining how to preview: “open `index.html` in a browser” or “serve the folder with any static server.” Do not claim a rendered video unless the render actually completed.
