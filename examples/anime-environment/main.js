// Created and maintained by Aditya (@cixcex).
// CINEMOTION anime environment preview: stylized sunset street.

const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(canvas.clientWidth * dpr);
  canvas.height = Math.floor(canvas.clientHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
window.addEventListener('resize', resize);
resize();

const W = () => canvas.clientWidth;
const H = () => canvas.clientHeight;

function draw(time) {
  const w = W();
  const h = H();
  const t = (time % 10000) / 10000;

  // Sky gradient.
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#2b1055');
  sky.addColorStop(0.45, '#ff9a8b');
  sky.addColorStop(1, '#ffd56b');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // Sun.
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * (0.35 + t * 0.05), 36, 0, Math.PI * 2);
  ctx.fill();

  // Buildings.
  const buildings = [
    { x: 0, w: w * 0.25, c: '#5b21b6' },
    { x: w * 0.28, w: w * 0.22, c: '#7c3aed' },
    { x: w * 0.52, w: w * 0.2, c: '#db2777' },
    { x: w * 0.75, w: w * 0.25, c: '#4c1d95' },
  ];
  buildings.forEach((b, i) => {
    ctx.fillStyle = b.c;
    ctx.fillRect(b.x, h * 0.15, b.w, h * 0.75);
    // windows
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 3; c++) {
        if ((i + r + c) % 2 === 0) {
          ctx.fillRect(b.x + 8 + c * 22, h * 0.2 + r * 30, 12, 18);
        }
      }
    }
  });

  // Lanterns with sway.
  for (let i = 0; i < 5; i++) {
    const x = w * (0.1 + i * 0.2);
    const sway = Math.sin(time / 500 + i) * 6;
    ctx.strokeStyle = '#1f2937';
    ctx.beginPath();
    ctx.moveTo(x + sway, h * 0.15);
    ctx.lineTo(x + sway, h * 0.28);
    ctx.stroke();
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.ellipse(x + sway, h * 0.3 + Math.sin(time / 300 + i) * 3, 16, 20, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Ground.
  ctx.fillStyle = '#111827';
  ctx.fillRect(0, h * 0.85, w, h * 0.15);

  // Character silhouette.
  ctx.fillStyle = '#1f2937';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.72, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillRect(w * 0.47, h * 0.74, w * 0.06, h * 0.12);

  // Petals / particles.
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  for (let i = 0; i < 20; i++) {
    const x = (i * 47 + time / 20) % w;
    const y = (i * 31 + time / 30) % h;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Title.
  ctx.fillStyle = '#fff';
  ctx.font = '600 14px sans-serif';
  ctx.fillText('CINEMOTION anime environment preview', 16, 28);
}

function loop(time) {
  draw(time);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
