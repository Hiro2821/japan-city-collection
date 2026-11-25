// cities/kyoto/index.js — 京都の都市モジュール（契約は docs/city-module-contract.md）。
import { KyotoScrollScene } from './scene.js';
import { CAPTIONS } from './captions.js';
import { PATH } from './camera.js';

export default {
  contract: 1,
  meta: { id: 'kyoto', name: { ja: '京都', en: 'Kyoto' }, season: 'autumn', theme: '晩秋の紅葉ライトアップ（日没→夜）', docTitle: 'KYOTO — JAPAN — THE CITY COLLECTION' },
  captions: CAPTIONS,
  timeline: { globalStart: PATH.globalStart, duration: PATH.duration },
  ambient: { name: '紅葉', counts: { normal: 12000, light: 5000 } },
  tuning: {
    // 確定値（2026-11-26）。霞：倍率 0.4／1.0／1.8 を比較したが夜景では差が小さい（黒潰れ率 36.0/35.0/34.5%）ので 1.0（strength 0.55）を採用。
    haze: { start: 500, end: 6000, strength: 0.55, mountain: 0.6 },
    // 露出：expDay/expDusk = 1.06/0.92, 1.2/1.1, 1.35/1.3, 1.5/1.5 を比較。黒潰れ率(<10/255) 35.0/30.9/27.4/23.5%、白飛び率 0.01% で同等、p95 輝度 69/77/85/92。
    // 暗い夜景を保ちつつ地面・町家が読める 1.35/1.3 を採用（1.5 は空と灯りのコントラストが落ちる）。
    grade: { expDay: 1.35, expDusk: 1.3, highDusk: [1.06, 1.0, 0.92] },
  },
  async buildScene(ctx) {
    const scene = new KyotoScrollScene(ctx.cityMeta, ctx.index, ctx.total, { renderer: ctx.renderer, fx: ctx.fx });
    await scene.build();
    return scene;
  },
};
