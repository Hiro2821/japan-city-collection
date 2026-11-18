// timeline.js — フレーム単位の決定的な時間管理（Three.js非依存）
// 録画ではなく「フレーム番号 → 時刻 → 状態」で全てを決める。

export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;

export const ease = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  smoother: (t) => t * t * t * (t * (t * 6 - 15) + 10),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inCubic: (t) => t * t * t,
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
};

export class Timeline {
  constructor({ fps = 30, duration = 15 } = {}) {
    this.fps = fps;
    this.duration = duration;
    this.frameCount = Math.round(fps * duration);
  }
  timeAtFrame(i) {
    return i / this.fps; // 累積誤差を避けるため整数フレームから直接計算
  }
  // 0..1 の進行度
  progressAtFrame(i) {
    return clamp(i / Math.max(1, this.frameCount - 1));
  }
  // 区間 [a,b] 内での 0..1（イージング付き）
  segment(t, a, b, easing = ease.linear) {
    return easing(clamp((t - a) / (b - a)));
  }
}

// スカラー値のキーフレームトラック（露出・霧・ブルーム強度など）
export class Track {
  constructor(keys) {
    // keys: [{ t, v, ease? }]  ease は「その区間（次のキーまで）」に適用
    this.keys = [...keys].sort((a, b) => a.t - b.t);
  }
  sample(t) {
    const k = this.keys;
    if (t <= k[0].t) return k[0].v;
    if (t >= k[k.length - 1].t) return k[k.length - 1].v;
    let i = 0;
    while (t > k[i + 1].t) i++;
    const f = (k[i].ease ?? ease.smooth)((t - k[i].t) / (k[i + 1].t - k[i].t));
    return lerp(k[i].v, k[i + 1].v, f);
  }
}

// 共通ブランド：都市名タイトルの表示状態（全都市で同一ロジック）
// 既定は 12 秒から出現、終了 0.6 秒前に消える
export function titleState(t, duration, { start = 12, fadeIn = 1.4, fadeOut = 0.6 } = {}) {
  const inP = ease.outCubic(clamp((t - start) / fadeIn));
  const outP = clamp((duration - t) / fadeOut);
  return {
    visible: t >= start,
    opacity: inP * ease.smooth(outP),
    reveal: inP, // 文字の出現アニメ用 0..1
    spacing: lerp(0.9, 0.42, ease.outExpo(clamp((t - start) / (fadeIn * 1.8)))), // letter-spacing(em)
  };
}

// 最初と最後のフェード（黒からの導入／黒への締め）
export function fadeBlack(t, duration, { inSec = 0.8, outSec = 0.8 } = {}) {
  return Math.min(ease.smooth(clamp(t / inSec)), ease.smooth(clamp((duration - t) / outSec)));
}
