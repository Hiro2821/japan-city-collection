// scroll/city-api.js — 都市モジュール契約の共通側（検証・共通エフェクト・破棄）。契約の本文は docs/city-module-contract.md。
import { tileScene } from './tiling.js';
import { applyHaze, HAZE_DEFAULT } from './haze.js';

const need = (c, cond, msg) => { if (!cond) throw new Error(`都市モジュール "${c?.meta?.id ?? '?'}" が契約を満たしていません: ${msg}`); };

/** 都市モジュールの形を検証する（起動時に 1 回）。 */
export function validateCity(c) {
  need(c, c && c.contract === 1, 'contract: 1 が必要');
  const m = c.meta;
  need(c, m && m.id && m.name?.ja && m.name?.en && m.season && m.docTitle, 'meta.{id,name.ja,name.en,season,docTitle}');
  need(c, Array.isArray(c.captions) && c.captions.length > 0, 'captions[]');
  c.captions.forEach((k, i) => {
    need(c, k.id && k.title && typeof k.a === 'number' && typeof k.b === 'number' && k.a < k.b, `captions[${i}] は {id,title,sub,a<b}`);
    if (i) need(c, k.a >= c.captions[i - 1].b, `captions[${i}] の窓が前の窓と重なる`);
  });
  need(c, c.timeline && c.timeline.duration > 0 && typeof c.timeline.globalStart === 'number', 'timeline.{globalStart,duration}');
  need(c, c.ambient && c.ambient.name && c.ambient.counts && c.ambient.counts.normal > 0 && c.ambient.counts.light > 0, 'ambient.{name,counts.{normal,light}}');
  need(c, c.tuning && typeof c.tuning === 'object', 'tuning（空でも可）');
  need(c, typeof c.buildScene === 'function', 'buildScene(ctx)');
}

/** シーン（buildScene が返すオブジェクト）が共通側から使うインターフェース。 */
export function validateScene(s) {
  for (const k of ['frameState', 'setAmbientCount', 'setLayoutWeight']) if (typeof s[k] !== 'function') throw new Error(`シーンに ${k}() がありません`);
  for (const k of ['scene', 'camera', 'look', 'rig']) if (!s[k]) throw new Error(`シーンに ${k} がありません`);
}

/**
 * 構築後の共通処理：描画負荷対策（タイル分割＋視錐台カリング）と空気遠近法の霞。都市の build() の最後で呼ぶ。
 * tileExclude: 分割しない Object3D（動くもの、描画順を保ちたいもの）。skyUniforms: 空の地平線色（霞色が追従する）。
 */
export function applyScrollEffects(city, { tiled, haze, tileExclude = [], skyUniforms }) {
  city.tiled = tiled === undefined ? true : tiled;           // false で分割なし（比較用）。文字列は部分分割（検証用）
  city.hazeCfg = haze ?? { mult: 1, ...HAZE_DEFAULT };
  if (city.tiled) city.tileStats = tileScene(city.scene, { exclude: tileExclude, only: typeof city.tiled === 'string' ? city.tiled : null });
  city.haze = city.hazeCfg.mult > 0 && skyUniforms ? applyHaze(city.scene, skyUniforms, city.hazeCfg) : { cfg: city.hazeCfg, materials: 0 };
}

/** シーンのジオメトリ・マテリアル・テクスチャを破棄する（都市の切り替え・ページ離脱用）。 */
export function disposeScene(city) {
  const seen = new Set();
  const tex = (m) => { for (const v of Object.values(m)) if (v && v.isTexture && !seen.has(v)) { seen.add(v); v.dispose(); } };
  city.scene.traverse((o) => {
    o.geometry?.dispose?.();
    for (const m of (Array.isArray(o.material) ? o.material : o.material ? [o.material] : [])) { if (!seen.has(m)) { seen.add(m); tex(m); m.dispose(); } }
  });
  city.scene.clear();
}
