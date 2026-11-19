// scroll/scene.js — スクロール版の札幌シーン。動画版の SapporoScene を継承し、動画版コードは変更しない。
//   ショットは 'odori'（SCENE 03・グローバル 11–18 秒）固定。カメラ経路は ScrollRig（横・縦・混合）に差し替える。
import { SapporoScene } from '../scenes/sapporo.js';
import { ScrollRig } from './rig.js';
import { tileScene } from './tiling.js';
import { applyHaze, HAZE_DEFAULT } from './haze.js';

export class SapporoScrollScene extends SapporoScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, { ...opts, shot: 'odori' });
    this.fadeSec = 0;
    this.hazeCfg = opts.haze ?? { mult: 1, ...HAZE_DEFAULT };
    this.tiled = opts.tiled === undefined ? true : opts.tiled;   // false で分割なし（比較用）
  }

  async build() {
    await super.build();
    this.videoRig = this.rig;      // 動画版の経路（比較・参照用に保持）
    this.rig = new ScrollRig();    // frameState() はこの rig.sample(t) を使う
    // 静的ジオメトリをタイル分割（動く車・歩行者は除外）。見た目は変えず、画面外のタイルだけ視錐台カリングで落とす。
    if (this.tiled) this.tileStats = tileScene(this.scene, { exclude: [this.cars.mesh, this.peds.mesh, this.scene.children.find((o) => o.isInstancedMesh && o.count === this.boxes.n)],   // 箱（建物本体）は重なる面の描画順を保つため分割しない
       only: typeof this.tiled === 'string' ? this.tiled : null });
    // 空気遠近法の霞（スクロール版のみ。空の地平線色に追従）。?haze=0 で無効。
    this.haze = this.hazeCfg.mult > 0 ? applyHaze(this.scene, this.sky.uniforms, this.hazeCfg) : { cfg: this.hazeCfg, materials: 0 };
  }

  /** 雪の粒数（通常 14,000 / スマホ軽量 7,000）。描画する頂点数だけを変える。 */
  setSnowCount(n) { this.snow.points.geometry.setDrawRange(0, n); this.snowCount = n; }

  /** 縦画面経路の重み（0=横, 1=縦）。アスペクト比から app.js が設定する。 */
  setLayoutWeight(w) { this.rig.weight = w; }
}

export default SapporoScrollScene;
