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
  // 仮置き（仕様書 §10）。実測で確定したら更新する。
  tuning: {
    haze: { start: 500, end: 6000, strength: 0.55, mountain: 0.6 },
    grade: { expDay: 1.06, expDusk: 0.92, highDusk: [1.06, 1.0, 0.92] },
  },
  async buildScene(ctx) {
    const scene = new KyotoScrollScene(ctx.cityMeta, ctx.index, ctx.total, { renderer: ctx.renderer, fx: ctx.fx });
    await scene.build();
    return scene;
  },
};
