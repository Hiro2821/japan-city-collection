// renderer.js — 全都市共通のレンダリング基盤
//   WebGLRenderer → EffectComposer(HDR/MSAA) → [Render → DoF → Bloom → Output(トーンマップ) → Grade]
//   → 2Dキャンバス(#stage)へ合成しタイトルを描画。書き出し・プレビュー共通。
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createDofPass, createGradePass } from './lib/post.js';
import { drawTitle } from './brand.js';
import { fadeBlack } from './timeline.js';

export const CAMERA_NEAR = 4;
export const CAMERA_FAR = 40000;

export class CityRenderer {
  /**
   * @param {HTMLCanvasElement} stage  最終出力の2Dキャンバス（プレビュー表示・VideoFrame元）
   */
  constructor(stage, { width = 1920, height = 1080, samples = 4 } = {}) {
    this.stage = stage;
    this.ctx2d = stage.getContext('2d', { alpha: false });
    this.glCanvas = document.createElement('canvas');
    this.gl = new THREE.WebGLRenderer({
      canvas: this.glCanvas, antialias: false, alpha: false, powerPreference: 'high-performance',
      preserveDrawingBuffer: false,
    });
    this.gl.setPixelRatio(1);
    this.gl.outputColorSpace = THREE.SRGBColorSpace;
    this.gl.toneMapping = THREE.ACESFilmicToneMapping;
    this.gl.shadowMap.enabled = true;
    this.gl.shadowMap.type = THREE.PCFShadowMap;
    this.gl.shadowMap.autoUpdate = false; // 静的ジオメトリの影は最初に1回だけ計算
    this.samples = samples;
    this.width = 0; this.height = 0;
    this.city = null;
    this._shadowDirty = true;
    this.setSize(width, height);
  }

  _buildComposer() {
    const { width: w, height: h } = this;
    this.composer?.dispose?.();
    const makeRT = (samples) => new THREE.WebGLRenderTarget(w, h, {
      type: THREE.HalfFloatType, samples, depthBuffer: true,
      depthTexture: new THREE.DepthTexture(w, h, THREE.UnsignedIntType),
    });
    let rt;
    try { rt = makeRT(this.samples); } catch { rt = makeRT(0); }
    this.composer = new EffectComposer(this.gl, rt);
    this.composer.setPixelRatio(1);
    this.composer.setSize(w, h);

    this.renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
    this.dofPass = createDofPass(THREE, { near: CAMERA_NEAR, far: CAMERA_FAR });
    this.bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 0.6, 0.7, 0.9);
    this.outputPass = new OutputPass();
    this.gradePass = createGradePass(THREE);
    [this.renderPass, this.dofPass, this.bloomPass, this.outputPass, this.gradePass].forEach((p) => this.composer.addPass(p));
    this.dofPass.uniforms.uRes.value.set(w, h);
    this.gradePass.uniforms.uRes.value.set(w, h);
  }

  setSize(w, h) {
    w = Math.round(w); h = Math.round(h);
    if (w === this.width && h === this.height) return;
    this.width = w; this.height = h;
    this.stage.width = w; this.stage.height = h;
    this.gl.setSize(w, h, false);
    this._buildComposer();
    if (this.city) this._bindCity();
  }

  _bindCity() {
    this.renderPass.scene = this.city.scene;
    this.renderPass.camera = this.city.camera;
    this.city.camera.aspect = this.width / this.height;
    this.city.camera.updateProjectionMatrix();
  }

  setCity(city) {
    this.city = city;
    this._bindCity();
    this._shadowDirty = true;
  }

  /** 時刻 t(秒) のフレームを描画し、#stage に最終合成する。frame はグレインのseed。 */
  renderAt(t, frame = 0) {
    const city = this.city;
    const f = city.frameState(t); // カメラ・ライティング・ポスト設定を決定
    const cam = city.camera;
    cam.aspect = this.width / this.height;
    cam.near = CAMERA_NEAR; cam.far = CAMERA_FAR;
    cam.updateProjectionMatrix();
    cam.updateMatrixWorld(true);

    const proj = cam.projectionMatrix.elements[5] * 0.5 * this.height;
    city.onBeforeRender?.({ t, frame, projScale: proj, camera: cam });

    this.gl.toneMappingExposure = f.exposure;
    this.bloomPass.strength = f.bloom;
    this.bloomPass.radius = f.bloomRadius ?? 0.7;
    this.bloomPass.threshold = f.bloomThreshold ?? 0.9;
    const dof = this.dofPass.uniforms;
    dof.uFocus.value = f.focusDistance;
    dof.uAperture.value = f.dofAperture ?? 1.0;
    dof.uMaxBlur.value = (f.dofMaxBlur ?? 7) * (this.height / 1080);
    this.dofPass.enabled = (f.dofMaxBlur ?? 7) > 0.05;
    const g = this.gradePass.uniforms;
    g.uFade.value = fadeBlack(t, city.duration, { inSec: city.fadeSec ?? 0.8, outSec: city.fadeSec ?? 0.8 });
    g.uSeed.value = frame % 997;
    Object.entries(city.look.grade ?? {}).forEach(([k, v]) => { if (g[k]) (g[k].value.isColor ? g[k].value.set(v) : (g[k].value = v)); });

    if (this._shadowDirty) { this.gl.shadowMap.needsUpdate = true; this._shadowDirty = false; }
    this.composer.render();

    const ctx = this.ctx2d;
    ctx.drawImage(this.glCanvas, 0, 0, this.width, this.height);
    if (city.showTitle !== false) drawTitle(ctx, this.width, this.height, t, city.duration, city.titleInfo);
  }

  dispose() { this.composer?.dispose?.(); this.gl.dispose(); }
}
