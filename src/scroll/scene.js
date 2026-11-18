// scroll/scene.js — スクロール版の札幌シーン。動画版の SapporoScene を継承し、動画版コードは変更しない。
//   ショットは 'odori'（SCENE 03・グローバル 11–18 秒）固定。
import { SapporoScene } from '../scenes/sapporo.js';

export class SapporoScrollScene extends SapporoScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, { ...opts, shot: 'odori' });
    this.fadeSec = 0;
  }
}

export default SapporoScrollScene;
