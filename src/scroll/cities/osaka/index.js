// cities/osaka/index.js — 大阪の都市モジュール（契約は docs/city-module-contract.md）。
import { OsakaScrollScene } from './scene.js';
import { CAPTIONS } from './captions.js';
import { PATH } from './camera.js';

export default {
  contract: 1,
  meta: { id: 'osaka', name: { ja: '大阪', en: 'Osaka' }, season: 'winter', theme: '冬の夜（御堂筋イルミネーションと大阪の夜景）', docTitle: 'OSAKA — JAPAN — THE CITY COLLECTION' },
  captions: CAPTIONS,
  timeline: { globalStart: PATH.globalStart, duration: PATH.duration },
  // 環境アニメーション：光のきらめき。counts は明滅させる光点の数（通常 / スマホ軽量）。
  ambient: { name: 'きらめき', counts: { normal: 40000, light: 16000 } },
  // 都市固有の既定上書き（仕様書 D-13：東京の考え方を初期値に、大阪の深い夜に合わせる）
  tuning: {
    haze: { start: 700, end: 8000, strength: 0.5, mountain: 0.5 },
    grade: { expDay: 1.0, expDusk: 0.92, rampFrom: 0.0, rampTo: 0.4, highDusk: [1.04, 1.0, 0.95] },
  },
  async buildScene(ctx) {
    const scene = new OsakaScrollScene(ctx.cityMeta, ctx.index, ctx.total, { renderer: ctx.renderer, fx: ctx.fx });
    await scene.build();
    return scene;
  },
};
