// cities/kobe/index.js — 神戸の都市モジュール（契約は docs/city-module-contract.md）。
import { KobeScrollScene } from './scene.js';
import { CAPTIONS } from './captions.js';
import { PATH } from './camera.js';

export default {
  contract: 1,
  meta: { id: 'kobe', name: { ja: '神戸', en: 'Kobe' }, season: 'spring', theme: '春の夕暮れ→夜・港と山の夜景', docTitle: 'KOBE — JAPAN — THE CITY COLLECTION' },
  captions: CAPTIONS,
  timeline: { globalStart: PATH.globalStart, duration: PATH.duration },
  ambient: { name: '灯り', counts: { normal: 6000, light: 2500 } },
  tuning: {
    // 初期値（Step 8 で候補比較して確定する）。春のわずかな霞：start 700、strength 0.45。
    haze: { start: 700, end: 7000, strength: 0.45, mountain: 0.6 },
    grade: { expDay: 1.3, expDusk: 1.2, highDusk: [1.06, 1.0, 0.94] },
  },
  async buildScene(ctx) {
    const scene = new KobeScrollScene(ctx.cityMeta, ctx.index, ctx.total, { renderer: ctx.renderer, fx: ctx.fx });
    await scene.build();
    return scene;
  },
};
