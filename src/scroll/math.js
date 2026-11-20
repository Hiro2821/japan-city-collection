// scroll/math.js — スクロール版の純粋な数値ロジック（DOM・Three.js 非依存。Node でも単体テスト可能）
export const SPAN = 0.94;      // p がこの値に達した時点で動画 7 秒が終わり、残りは最終構図を保持
export const DURATION = 7.0;   // 動画版ショットの尺（秒）

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

/** スクロール位置 → 進行度 p（0..1 にクランプ）。top = track.getBoundingClientRect().top */
export const progressFromScroll = (top, trackH, stageH) => clamp(-top / Math.max(1, trackH - stageH));

/** p → ショットのローカル時刻 t（秒）。t = min(1, p/0.94) × 7.0 */
export const tOfP = (p, duration = DURATION) => Math.min(1, clamp(p) / SPAN) * duration;

/** アスペクト比（幅/高さ）→ 縦画面経路の重み。≤0.88 で 1（縦）、≥1.12 で 0（横）、中間は滑らかに混合。 */
export const portraitWeight = (aspect) => 1 - smoothstep(0.88, 1.12, aspect);

// キャプションの内容・表示窓は都市モジュール（cities/<id>/captions.js）が持つ。ここは窓の計算だけ。
export const CAPTION_FADE = 0.03; // 窓の両端のフェード幅（窓の内側に取るので、すき間は変わらない）

/** 窓 (a,b) に対する p での不透明度 0..1。 */
export const windowOpacity = (a, b, p, f = CAPTION_FADE) => smoothstep(a, a + f, p) * (1 - smoothstep(b - f, b, p));

// ---- 品質ティア（画素数予算方式）。描画画素数が予算(MP)を超えないよう、CSS ピクセル×DPR を一様に縮小する。
//   T2 のみ被写界深度あり（仕様どおり。T3 は MSAA を優先し DoF なし）。
export const TIERS = [
  { id: 'T0', mp: 0.30, samples: 0, dof: false },
  { id: 'T1', mp: 0.55, samples: 2, dof: false },
  { id: 'T2', mp: 1.25, samples: 2, dof: true },
  { id: 'T3', mp: 2.40, samples: 4, dof: false },
];

/** 予算 mp(百万画素) に収まる描画サイズ。例: 390×844・DPR3 → T1 = 504×1091, T2 = 760×1645 */
export function fitBudget(cssW, cssH, dpr, mp) {
  const native = cssW * dpr * cssH * dpr;
  const scale = Math.min(1, Math.sqrt((mp * 1e6) / native));
  return { w: Math.max(2, Math.round(cssW * dpr * scale)), h: Math.max(2, Math.round(cssH * dpr * scale)), scale };
}
export const isPhone = (cssW, cssH, coarse) => !!coarse && Math.min(cssW, cssH) < 700;
/** 初期ティア：スマホ T1、それ以外 T2。?tier= で上書きできる（動的な自動調整は行わない）。 */
export const defaultTier = (cssW, cssH, coarse) => (isPhone(cssW, cssH, coarse) ? 'T1' : 'T2');

// ---- スクロール追従（カメラ側の p の減衰）。ネイティブスクロールは奪わず、表示用の p を目標 p に追従させる。
//   指数追従（行き過ぎなし）＋最大速度制限（150ms あたり最大 0.07）。0..1 にクランプ。
export const FOLLOW = { rate: 6.5, vmax: 0.07 / 0.15 };
export function follow(shown, target, dt, { rate, vmax } = FOLLOW) {
  const d = target - shown;
  if (Math.abs(d) < 1e-5) return clamp(target);
  let step = d * (1 - Math.exp(-rate * dt));
  const lim = vmax * dt;
  if (Math.abs(step) > lim) step = Math.sign(step) * lim;
  return clamp(shown + step);
}
