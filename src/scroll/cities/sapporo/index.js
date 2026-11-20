// cities/sapporo/index.js — 札幌の都市モジュール（契約は docs/city-module-contract.md）。
import { SapporoScrollScene } from './scene.js';
import { CAPTIONS } from './captions.js';
import { SAPPORO_PATH } from './camera.js';

export default {
  contract: 1,
  meta: { id: 'sapporo', name: { ja: '札幌', en: 'Sapporo' }, season: 'winter', theme: '雪の大通公園（昼→夕）', docTitle: 'SAPPORO — JAPAN — THE CITY COLLECTION' },
  captions: CAPTIONS,
  timeline: { globalStart: SAPPORO_PATH.globalStart, duration: SAPPORO_PATH.duration },
  // 環境アニメーション：雪。counts は描画する粒数（通常 / スマホ軽量）。
  ambient: { name: '雪', counts: { normal: 14000, light: 7000 } },
  // 都市固有の既定上書き（霞・グレーディング）。札幌は共通の既定をそのまま使う。
  tuning: { haze: {}, grade: {} },
  /** シーンを構築して返す。ctx: { renderer(THREE.WebGLRenderer), cityMeta, index, total, fx:{tiled,haze} } */
  async buildScene(ctx) {
    const scene = new SapporoScrollScene(ctx.cityMeta, ctx.index, ctx.total, { renderer: ctx.renderer, fx: ctx.fx });
    await scene.build();
    return scene;
  },
};
