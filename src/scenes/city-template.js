// city-template.js — 都市シーンの基底クラス。
// 新しい都市は CityScene を継承して build() と look/トラックを定義するだけで追加できる。
//   共通基盤(renderer.js)は frameState(t) と scene/camera/duration/titleInfo だけを使う。
import * as THREE from 'three';
import { CameraRig } from '../camera.js';
import { Track, ease, Timeline } from '../timeline.js';

export class CityScene {
  /**
   * @param {object} meta   cities.json の1都市分
   * @param {number} index  1始まりの表示順
   * @param {number} total  都市数
   */
  constructor(meta, index, total, { renderer } = {}) {
    this.meta = meta;
    this.glRenderer = renderer;
    this.duration = meta.durationSec ?? 15;
    this.timeline = new Timeline({ fps: 30, duration: this.duration });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, 16 / 9, 4, 40000);
    this.titleInfo = { englishName: meta.englishName, name: meta.name, index, total };
    // 都市ごとに上書きする設定
    this.rig = null;                 // CameraRig（サブクラスで設定）
    this.tracks = {};                // { exposure, bloom, night, ... : Track }
    this.look = { grade: {} };       // グレード上書き（共通ルックからの微調整のみ）
    this.focusLead = 0;              // フォーカス距離のオフセット(m)
    this.timeOffset = 0;             // 部分プレビュー用：ローカル時刻0がグローバル時刻の何秒か
    this.showTitle = true;           // ENDING以外の部分プレビューでは false
    this.fadeSec = 0.8;              // 冒頭・末尾の黒フェード秒数
  }

  /** 非同期にジオメトリ等を構築（サブクラスで実装）。 */
  async build() { throw new Error('build() を実装してください'); }

  sampleTrack(name, t, fallback = 0) { return this.tracks[name] ? this.tracks[name].sample(t) : fallback; }

  /** 時刻 t の状態を決定してカメラへ適用し、ポスト用パラメータを返す。 */
  frameState(tLocal) {
    const t = tLocal + this.timeOffset; // 以降はグローバル時刻（時間帯トラック・カメラ経路共通）
    const c = this.rig.sample(t);
    this.camera.position.set(...c.position);
    this.camera.lookAt(...c.target);
    this.camera.fov = c.fov;
    const dx = c.position[0] - c.target[0], dy = c.position[1] - c.target[1], dz = c.position[2] - c.target[2];
    const focusDistance = Math.hypot(dx, dy, dz) + this.focusLead;
    this.applyTime?.(t, c); // 太陽・夜の度合いなどシーン固有の時間変化
    return {
      exposure: this.sampleTrack('exposure', t, 1),
      bloom: this.sampleTrack('bloom', t, 0.6),
      bloomRadius: this.sampleTrack('bloomRadius', t, 0.7),
      bloomThreshold: this.sampleTrack('bloomThreshold', t, 0.9),
      dofAperture: this.sampleTrack('dofAperture', t, 1),
      dofMaxBlur: this.sampleTrack('dofMaxBlur', t, 6),
      focusDistance,
    };
  }
}

export { Track, ease, CameraRig };
