// scroll/grade.js — スクロール版のカラーグレーディング（色と光の扱いのみ。ジオメトリ・描画コールは増やさない）。
//   動画版と共有の src/renderer.js・src/lib/post.js・シーンは変更しない。ScrollRenderer.renderAt から毎フレーム適用する。
//   ?grade=0 で無効（適用コード自体を通らない＝変更前と完全一致）。?grade=1 が既定、倍率で「変更量」を増減できる。
import * as THREE from 'three';

const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const mixN = (a, b, k) => a + (b - a) * k;

/** 既定値。*Day は t=0（昼）、*Dusk は t=7（夕景）の値。デフォルトの色は sapporo.js の look.grade が基準。 */
export const GRADE_DEFAULT = {
  expDay: 1.15, expDusk: 0.90,                // 露出倍率（1.0 = 変更なし）
  rampFrom: 0.25, rampTo: 1.0,               // 夕景側へ移る区間（t/7）
};

/** URL（?grade= 倍率, ?gradeExpDay= ?gradeExpDusk= ?vig= …）から設定を作る。 */
export function gradeFromQuery(q) {
  const raw = q.get('grade');
  const mult = raw === null || raw === '' ? 1 : Math.max(0, parseFloat(raw));
  const num = (k, d) => (q.has(k) && isFinite(parseFloat(q.get(k))) ? parseFloat(q.get(k)) : d);
  return {
    mult: isFinite(mult) ? mult : 1,
    expDay: num('gradeExpDay', GRADE_DEFAULT.expDay), expDusk: num('gradeExpDusk', GRADE_DEFAULT.expDusk),
    rampFrom: GRADE_DEFAULT.rampFrom, rampTo: GRADE_DEFAULT.rampTo,
  };
}

export class ScrollGrade {
  constructor(cfg) { this.cfg = { ...GRADE_DEFAULT, ...cfg }; this.now = { exposure: 1, dusk: 0 }; }
  get enabled() { return this.cfg.mult > 0; }

  /** t = ショットのローカル時刻(0..7)。 */
  dusk(t) { return smooth(this.cfg.rampFrom, this.cfg.rampTo, t / 7); }

  /** 露出倍率（変更量は mult で比例）。 */
  exposureGain(t) {
    const c = this.cfg, u = this.dusk(t);
    return 1 + (mixN(c.expDay, c.expDusk, u) - 1) * c.mult;
  }

  /** renderAt の中で、コンポーザのグレード uniform を設定した後に呼ぶ。 */
  apply(t, g /* gradePass.uniforms */) {
    if (!this.enabled) return;
    const u = this.dusk(t);
    this.now = { exposure: this.exposureGain(t), dusk: u };
  }
}

export const toneName = (gl) => ({ [THREE.NoToneMapping]: 'なし', [THREE.LinearToneMapping]: 'Linear', [THREE.ReinhardToneMapping]: 'Reinhard', [THREE.CineonToneMapping]: 'Cineon', [THREE.ACESFilmicToneMapping]: 'ACES Filmic', [THREE.AgXToneMapping]: 'AgX', [THREE.NeutralToneMapping]: 'Neutral' }[gl.toneMapping] ?? String(gl.toneMapping));
