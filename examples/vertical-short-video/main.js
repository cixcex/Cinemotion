// Created and maintained by Aditya (@cixcex).
// CINEMOTION vertical short video preview: beat-based 9:16 animation.

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

function drawBeat(time) {
  const w = W();
  const h = H();
  const t = (time % 30000) / 30000;

  // Background color changes by beat.
  let c1 = '#0f172a';
  let c2 = '#312e81';
  if (t > 0.25) { c1 = '#450a0a'; c2 = '#7c2d12'; }
  if (t > 0.55) { c1 = '#064e3b'; c2 = '#065f46'; }
  if (t > 0.8) { c1 = '#1e1b4b'; c2 = '#312e81'; }

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, c1);
  grad.addColorStop(1, c2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Center object changes by beat.
  const cx = w / 2;
  const cy = h / 2;
  const r = 60 + Math.sin(time / 300) * 10;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  // Beat markers.
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  for (let i = 0; i < 5; i++) {
    const bt = [0, 0.066, 0.266, 0.666, 0.833][i];
    const y = h * (0.1 + i * 0.2);
    if (t >= bt) {
      ctx.fillRect(w * 0.1, y, w * 0.8, 4);
    }
  }

  // Beat label.
  const labels = ['Hook', 'Setup', 'Action', 'Turn', 'End'];
  const idx = t < 0.066 ? 0 : t < 0.266 ? 1 : t < 0.666 ? 2 : t < 0.833 ? 3 : 4;
  ctx.fillStyle = '#fff';
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(labels[idx], cx, h * 0.85);

  // Scanline / cinematic bar.
  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.fillRect(0, 0, w, h * 0.08);
  ctx.fillRect(0, h * 0.92, w, h * 0.08);

  // Title.
  ctx.textAlign = 'left';
  ctx.font = '600 14px sans-serif';
  ctx.fillText('CINEMOTION vertical short preview', 16, 28);
}

function loop(time) {
  drawBeat(time);
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);
