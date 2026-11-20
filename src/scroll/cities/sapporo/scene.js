// cities/sapporo/scene.js — スクロール版の札幌シーン。動画版の SapporoScene を継承し、動画版コードは変更しない。
//   ショットは 'odori'（SCENE 03・グローバル 11–18 秒）固定。カメラ経路は ScrollRig（横・縦・混合）に差し替える。
import { SapporoScene } from '../../../scenes/sapporo.js';
import { ScrollRig } from '../../rig.js';
import { applyScrollEffects } from '../../city-api.js';
import { SAPPORO_PATH } from './camera.js';

export class SapporoScrollScene extends SapporoScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, { ...opts, shot: 'odori' });
    this.fadeSec = 0;
    this.fx = opts.fx ?? {};       // { tiled, haze }（共通側が渡す）
  }

  async build() {
    await super.build();
    this.videoRig = this.rig;      // 動画版の経路（比較・参照用に保持）
    this.rig = new ScrollRig(SAPPORO_PATH);   // frameState() はこの rig.sample(t) を使う
    // 共通の描画負荷対策・霞。動く車・歩行者と、描画順を保つため分割しない箱はタイル分割から除外する。
    applyScrollEffects(this, {
      tiled: this.fx.tiled, haze: this.fx.haze,
      tileExclude: [this.cars.mesh, this.peds.mesh, this.scene.children.find((o) => o.isInstancedMesh && o.count === this.boxes.n)],
      skyUniforms: this.sky.uniforms,
    });
  }

  /** 環境アニメーション（雪）の粒数。描画する頂点数だけを変える。 */
  setAmbientCount(n) { this.snow.points.geometry.setDrawRange(0, n); this.ambientCount = n; }

  /** 縦画面経路の重み（0=横, 1=縦）。アスペクト比から共通側が設定する。 */
  setLayoutWeight(w) { this.rig.weight = w; }
}
