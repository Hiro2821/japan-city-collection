// brand.js — 全都市共通のタイトル表示（2Dキャンバスで合成。位置・フォント・アニメは全都市で同一）
import { titleState, clamp, ease } from './timeline.js';

const SANS = `"Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans JP", "Segoe UI", Arial, sans-serif`;

// letterSpacing に依存せず、1文字ずつ配置して字間アニメを実現
function drawSpaced(ctx, text, cx, y, spacingPx, perCharAlpha) {
  const chars = [...text];
  const widths = chars.map((ch) => ctx.measureText(ch).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacingPx * (chars.length - 1);
  let x = cx - total / 2;
  chars.forEach((ch, i) => {
    ctx.globalAlpha = perCharAlpha(i, chars.length);
    ctx.fillText(ch, x, y);
    x += widths[i] + spacingPx;
  });
}

export function drawTitle(ctx, W, H, t, duration, { englishName, name, index, total }) {
  const st = titleState(t, duration);
  if (!st.visible || st.opacity <= 0.001) return;
  const u = H / 1080; // 解像度に比例

  ctx.save();
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#fff';
  ctx.shadowColor = 'rgba(8,14,34,0.55)';
  ctx.shadowBlur = 24 * u;

  // 下部に向けた柔らかい暗幕（可読性）
  const g = ctx.createLinearGradient(0, H * 0.62, 0, H);
  g.addColorStop(0, 'rgba(6,10,24,0)');
  g.addColorStop(1, `rgba(6,10,24,${0.5 * st.opacity})`);
  ctx.shadowColor = 'transparent';
  ctx.fillStyle = g;
  ctx.fillRect(0, H * 0.62, W, H * 0.38);
  ctx.fillStyle = '#fff';
  ctx.shadowColor = 'rgba(8,14,34,0.55)';

  const cx = W / 2;
  // 都市名（英語大文字・細字・広い字間）
  const fs = 104 * u;
  ctx.font = `200 ${fs}px ${SANS}`;
  const spacing = st.spacing * fs;
  const label = englishName.toUpperCase();
  drawSpaced(ctx, label, cx + spacing / 2, H * 0.865, spacing, (i, n) => {
    const a = clamp(st.reveal * (n + 3) - i * 0.9, 0, 1); // 左から順に現れる
    return st.opacity * ease.outCubic(a);
  });

  // 細いライン（左右に伸びる）
  const lineW = W * 0.16 * ease.outCubic(st.reveal);
  ctx.globalAlpha = st.opacity * 0.8;
  ctx.shadowBlur = 0;
  ctx.fillRect(cx - lineW / 2, H * 0.885, lineW, Math.max(1, 1.5 * u));

  // 日本語名 + 連番
  ctx.shadowBlur = 12 * u;
  ctx.shadowColor = 'rgba(8,14,34,0.6)';
  ctx.font = `300 ${24 * u}px ${SANS}`;
  ctx.globalAlpha = st.opacity * ease.outCubic(clamp(st.reveal * 1.4 - 0.4, 0, 1));
  drawSpaced(ctx, `${name}`, cx, H * 0.925, 10 * u, () => ctx.globalAlpha);
  ctx.font = `300 ${15 * u}px ${SANS}`;
  ctx.globalAlpha = st.opacity * 0.75 * ease.outCubic(clamp(st.reveal * 1.4 - 0.4, 0, 1));
  drawSpaced(ctx, `JAPAN — THE CITY COLLECTION      ${String(index).padStart(2, '0')} / ${String(total).padStart(2, '0')}`, cx, H * 0.958, 5 * u, () => ctx.globalAlpha);
  ctx.restore();
}
