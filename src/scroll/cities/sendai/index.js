// cities/sendai/index.js — 仙台の都市モジュール（契約は docs/city-module-contract.md）。
import { SendaiScrollScene } from './scene.js';
import { CAPTIONS } from './captions.js';
import { PATH } from './camera.js';

export default {
  contract: 1,
  meta: { id: 'sendai', name: { ja: '仙台', en: 'Sendai' }, season: 'summer', theme: '七夕の夕べ（金色の夕方→灯り始める街）', docTitle: 'SENDAI — JAPAN — THE CITY COLLECTION' },
  captions: CAPTIONS,
  timeline: { globalStart: PATH.globalStart, duration: PATH.duration },
  // 環境アニメーション：吹き流し（Step 3 で実装）。counts は描画する束の数（通常 / スマホ軽量）。
  ambient: { name: '吹き流し', counts: { normal: 1200, light: 700 } },
  // 都市固有の既定上書き（仕様書 §7：夏は霞が濃く近い／夕景の暖色が白飛びしやすい／色温度はオレンジ寄り）。値は仮置き。
  tuning: {
    haze: { start: 500, end: 5000, strength: 0.65 },
    grade: { expDay: 1.08, expDusk: 0.92, highDusk: [1.09, 1.0, 0.885] },
  },
  async buildScene(ctx) {
    const scene = new SendaiScrollScene(ctx.cityMeta, ctx.index, ctx.total, { renderer: ctx.renderer, fx: ctx.fx });
    await scene.build();
    return scene;
  },
};
