// scroll/math.js — スクロール版の純粋な数値ロジック（DOM・Three.js 非依存。Node でも単体テスト可能）
export const SPAN = 0.94;      // p がこの値に達した時点で動画 7 秒が終わり、残りは最終構図を保持
export const DURATION = 7.0;   // 動画版ショットの尺（秒）

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };

/** スクロール位置 → 進行度 p（0..1 にクランプ）。top = track.getBoundingClientRect().top */
export const progressFromScroll = (top, trackH, stageH) => clamp(-top / Math.max(1, trackH - stageH));

/** p → ショットのローカル時刻 t（秒）。t = min(1, p/0.94) × 7.0 */
export const tOfP = (p) => Math.min(1, clamp(p) / SPAN) * DURATION;

/** アスペクト比（幅/高さ）→ 縦画面経路の重み。≤0.88 で 1（縦）、≥1.12 で 0（横）、中間は滑らかに混合。 */
export const portraitWeight = (aspect) => 1 - smoothstep(0.88, 1.12, aspect);

/** キャプションの表示窓（進行度 p）。窓の間のすき間は 0.02〜0.03。窓は重ならない。 */
export const CAPTIONS = [
  { id: 'cap-sapporo', a: -0.05, b: 0.17 },  // SAPPORO / 札幌       … p=0, 0.10
  { id: 'cap-tower', a: 0.20, b: 0.45 },     // さっぽろテレビ塔     … p=0.25
  { id: 'cap-odori', a: 0.47, b: 0.70 },     // 大通公園             … p=0.50
  { id: 'cap-teine', a: 0.72, b: 1.08 },     // 手稲山の方へ         … p=0.75, 0.94, 1.0
];
export const CAPTION_FADE = 0.03; // 窓の両端のフェード幅（窓の内側に取るので、すき間は変わらない）

/** 窓 (a,b) に対する p での不透明度 0..1。 */
export const windowOpacity = (a, b, p, f = CAPTION_FADE) => smoothstep(a, a + f, p) * (1 - smoothstep(b - f, b, p));
