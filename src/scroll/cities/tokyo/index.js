// cities/tokyo/index.js — 東京の都市モジュール（契約は docs/city-module-contract.md）。
import { TokyoScrollScene } from './scene.js';
import { CAPTIONS } from './captions.js';
import { PATH } from './camera.js';

export default {
  contract: 1,
  meta: { id: 'tokyo', name: { ja: '東京', en: 'Tokyo' }, season: 'winter', theme: '冬の夜のイルミネーション（ブルーアワー→夜）', docTitle: 'TOKYO — JAPAN — THE CITY COLLECTION' },
  captions: CAPTIONS,
  timeline: { globalStart: PATH.globalStart, duration: PATH.duration },
  // 環境アニメーション：光のきらめき（Step 3 で実装）。counts は明滅させる光点の数（通常 / スマホ軽量）。
  ambient: { name: 'きらめき', counts: { normal: 40000, light: 16000 } },
  // 都市固有の既定上書き（仕様書 §8：冬は空気が澄み霞を弱く遠く／夜の光が白飛びしやすい／青い影＋暖色の光）。値は仮置き。
  tuning: {
    haze: { start: 800, end: 9000, strength: 0.45, mountain: 0.5 },
    grade: { expDay: 1.08, expDusk: 0.90, highDusk: [1.06, 1.0, 0.93] },
  },
  async buildScene(ctx) {
    const scene = new TokyoScrollScene(ctx.cityMeta, ctx.index, ctx.total, { renderer: ctx.renderer, fx: ctx.fx });
    await scene.build();
    return scene;
  },
};
