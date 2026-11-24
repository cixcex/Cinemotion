// Created and maintained by Aditya (@cixcex).
// CINEMOTION POV preview: lightweight 2D first-person night walk.

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

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function drawScene(time) {
  const t = (time % 16000) / 16000; // 16-second loop
  const w = W();
  const h = H();

  // Sky / background transitions from bedroom wall to night street.
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#0b1026');
  sky.addColorStop(0.55, '#141a33');
  sky.addColorStop(1, '#241b3b');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // Floor / road perspective grid.
  const horizon = h * lerp(0.55, 0.45, t);
  ctx.strokeStyle = 'rgba(94, 234, 212, 0.25)';
  ctx.lineWidth = 1;
  for (let i = -6; i <= 6; i++) {
    ctx.beginPath();
    ctx.moveTo(w / 2 + i * w * 0.2, h);
    ctx.lineTo(w / 2 + i * w * 0.02, horizon);
    ctx.stroke();
  }
  for (let j = 0; j < 12; j++) {
    const p = (j + t * 12) % 12;
    const y = lerp(h, horizon, p / 12);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Neon signs on the right.
  const signs = [
    { y: horizon + h * 0.08, color: '#22d3ee', text: 'OPEN' },
    { y: horizon + h * 0.18, color: '#f472b6', text: 'RAMEN' },
  ];
  signs.forEach((s, i) => {
    const flicker = Math.sin(time / 120 + i) > 0.85 ? 0.4 : 1;
    ctx.fillStyle = s.color;
    ctx.globalAlpha = flicker * 0.9;
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(s.text, w * 0.62, s.y);
    ctx.shadowColor = s.color;
    ctx.shadowBlur = 18;
    ctx.fillText(s.text, w * 0.62, s.y);
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  });

  // Rain streaks.
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  for (let i = 0; i < 40; i++) {
    const x = (i * 37 + time / 8) % w;
    const y = (i * 53 + time / 4) % h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 4, y + 16);
    ctx.stroke();
  }

  // First-person hands at edges.
  ctx.fillStyle = 'rgba(30, 30, 40, 0.9)';
  ctx.beginPath();
  ctx.ellipse(w * 0.12, h * 0.88, w * 0.15, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(w * 0.88, h * 0.88, w * 0.15, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Subtle handheld sway.
  const sway = Math.sin(time / 500) * 4;
  ctx.setTransform(1, 0, 0, 1, sway, 0);

  // Title overlay.
  ctx.fillStyle = '#fff';
  ctx.font = '600 14px sans-serif';
  ctx.fillText('CINEMOTION POV preview', 16, 28);
}

function loop(time) {
  drawScene(time);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
