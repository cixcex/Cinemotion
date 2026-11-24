// Created and maintained by Aditya (@cixcex).
// CINEMOTION night scene preview: neon reflections and rain.

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
  const t = (time % 12000) / 12000;

  // Night sky.
  const sky = ctx.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, '#020617');
  sky.addColorStop(1, '#0f172a');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, w, h);

  // Buildings.
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, h * 0.15, w * 0.35, h * 0.7);
  ctx.fillRect(w * 0.65, h * 0.1, w * 0.35, h * 0.75);

  // Windows.
  ctx.fillStyle = 'rgba(250, 204, 21, 0.6)';
  for (let i = 0; i < 12; i++) {
    const x = (i % 4) * w * 0.08 + w * 0.05;
    const y = Math.floor(i / 4) * h * 0.12 + h * 0.22;
    if (i % 3 !== 0) ctx.fillRect(x, y, 12, 18);
  }

  // Neon signs.
  const signs = [
    { x: w * 0.12, y: h * 0.22, text: 'HOTEL', color: '#22d3ee' },
    { x: w * 0.7, y: h * 0.18, text: 'BAR', color: '#f472b6' },
    { x: w * 0.15, y: h * 0.42, text: 'RAMEN', color: '#a78bfa' },
  ];
  signs.forEach((s, i) => {
    const flicker = Math.sin(time / 90 + i * 2) > 0.9 ? 0.2 : 1;
    ctx.save();
    ctx.globalAlpha = flicker;
    ctx.shadowColor = s.color;
    ctx.shadowBlur = 16;
    ctx.fillStyle = s.color;
    ctx.font = 'bold 18px sans-serif';
    ctx.fillText(s.text, s.x, s.y);
    ctx.restore();
  });

  // Wet road.
  const road = ctx.createLinearGradient(0, h * 0.55, 0, h);
  road.addColorStop(0, '#111827');
  road.addColorStop(1, '#020617');
  ctx.fillStyle = road;
  ctx.fillRect(0, h * 0.55, w, h * 0.45);

  // Neon reflections.
  signs.forEach((s, i) => {
    const y = h * (0.62 + i * 0.1);
    const grad = ctx.createLinearGradient(s.x, y, s.x, y + 30);
    grad.addColorStop(0, s.color + 'aa');
    grad.addColorStop(1, s.color + '00');
    ctx.fillStyle = grad;
    ctx.fillRect(s.x - 10, y, 80, 30);
  });

  // Rain.
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
  for (let i = 0; i < 60; i++) {
    const x = (i * 31 + time / 6) % w;
    const y = (i * 47 + time / 3) % h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 3, y + 14);
    ctx.stroke();
  }

  // Title.
  ctx.fillStyle = '#fff';
  ctx.font = '600 14px sans-serif';
  ctx.fillText('CINEMOTION night scene preview', 16, 28);
}

function loop(time) {
  draw(time);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
