// scroll/scene.js — スクロール版の札幌シーン。動画版の SapporoScene を継承し、動画版コードは変更しない。
//   ショットは 'odori'（SCENE 03・グローバル 11–18 秒）固定。カメラ経路は ScrollRig（横・縦・混合）に差し替える。
import { SapporoScene } from '../scenes/sapporo.js';
import { ScrollRig } from './rig.js';

export class SapporoScrollScene extends SapporoScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, { ...opts, shot: 'odori' });
    this.fadeSec = 0;
  }

  async build() {
    await super.build();
    this.videoRig = this.rig;      // 動画版の経路（比較・参照用に保持）
    this.rig = new ScrollRig();    // frameState() はこの rig.sample(t) を使う
  }

  /** 縦画面経路の重み（0=横, 1=縦）。アスペクト比から app.js が設定する。 */
  setLayoutWeight(w) { this.rig.weight = w; }
}

export default SapporoScrollScene;
