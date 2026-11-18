// scroll/renderer.js — スクロール版のレンダラー。動画版の CityRenderer を継承し、動画版コードは変更しない。
//   違い: 黒フェードなし(uFade=1)・タイトルなし・renderer.info を手動集計・アンビエント時刻を分離。
import * as THREE from 'three';
import { CityRenderer, CAMERA_NEAR, CAMERA_FAR } from '../renderer.js';

export class ScrollRenderer extends CityRenderer {
  constructor(stage, opts) {
    super(stage, opts);
    this.gl.info.autoReset = false; // composer は 1 フレームに複数回 render するため、フレーム単位で集計する
    this.lastInfo = { calls: 0, triangles: 0 };
  }

  /** 描画サイズ・MSAA・DoF の有無を設定する（MSAA が変わるときは合成チェーンを作り直す）。 */
  applyQuality({ w, h, samples, dof }) {
    this.dofOn = dof;
    if (samples !== this.samples) { this.samples = samples; this.width = 0; }
    this.setSize(w, h);
  }

  /** 実際に GPU 文字列（取得できない環境では 'unknown'）。 */
  gpuString() {
    const gl = this.gl.getContext();
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'unknown';
  }

  /**
   * t: シーン時刻(秒, ショットのローカル)。カメラ・時間帯は t で決まる。
   * ambientT: 雪・車・歩行者・ビーコンの時刻。省略時は t（＝決定的）。
   */
  renderAt(t, frame = 0, ambientT = t) {
    const city = this.city;
    const f = city.frameState(t);
    const cam = city.camera;
    cam.aspect = this.width / this.height;
    cam.near = CAMERA_NEAR; cam.far = CAMERA_FAR;
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld(true);

    const proj = cam.projectionMatrix.elements[5] * 0.5 * this.height;
    city.onBeforeRender?.({ t: ambientT, frame, projScale: proj, camera: cam });

    this.gl.toneMappingExposure = f.exposure;
    this.bloomPass.strength = f.bloom;
    this.bloomPass.radius = f.bloomRadius ?? 0.7;
    this.bloomPass.threshold = f.bloomThreshold ?? 0.9;
    const dof = this.dofPass.uniforms;
    dof.uFocus.value = f.focusDistance;
    dof.uAperture.value = f.dofAperture ?? 1.0;
    dof.uMaxBlur.value = (f.dofMaxBlur ?? 7) * (this.height / 1080);
    this.dofPass.enabled = this.dofOn !== false && (f.dofMaxBlur ?? 7) > 0.05;
    const g = this.gradePass.uniforms;
    g.uFade.value = 1; // スクロール版は黒フェードなし
    g.uSeed.value = frame % 997;
    Object.entries(city.look.grade ?? {}).forEach(([k, v]) => { if (g[k]) (g[k].value.isColor ? g[k].value.set(v) : (g[k].value = v)); });

    if (this._shadowDirty) { this.gl.shadowMap.needsUpdate = true; this._shadowDirty = false; }
    this.gl.info.reset();
    this.composer.render();
    this.lastInfo = { calls: this.gl.info.render.calls, triangles: this.gl.info.render.triangles };

    this.ctx2d.drawImage(this.glCanvas, 0, 0, this.width, this.height);
  }
}

export { THREE };
