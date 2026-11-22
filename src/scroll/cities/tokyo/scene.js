// cities/tokyo/scene.js — スクロール版の東京シーン。共有の src/scenes・src/lib は変更せず、lib の部品を呼び出して組み立てる（U-11）。
//   Step 1：空・時間変化・暗い地面・仮カメラ。街・イルミネーション・東京タワーは Step 2〜4。
import * as THREE from 'three';
import { CityScene, Track } from '../../../scenes/city-template.js';
import { createSky } from '../../../lib/sky.js';
import { PathRig } from '../../rig.js';
import { applyScrollEffects } from '../../city-api.js';
import { PATH } from './camera.js';
import { SUN_DIR as SUN } from './layout.js';

const SUN_DIR = new THREE.Vector3(...SUN).normalize();

// 時間帯パレット（A=日没後 15 分：地平線に橙の残照 B=ブルーアワー終盤 C=ほぼ夜）。快晴（U-13）・冬の澄んだ空気。
const PAL = [
  { zenith: '#1a3270', horizon: '#476ca6', horizonWarm: '#f29a62', sun: '#ff9a62', cloudLit: '#7a86b0', cloudDark: '#1c2a58', fog: '#3a5688', sunCol: '#8aa4e0', fogD: 0.00004 },
  { zenith: '#0b1a48', horizon: '#26417a', horizonWarm: '#a85c4c', sun: '#d0705a', cloudLit: '#3e4a7a', cloudDark: '#0e1838', fog: '#1d3260', sunCol: '#6f88c8', fogD: 0.00005 },
  { zenith: '#050a22', horizon: '#0f2048', horizonWarm: '#243258', sun: '#3a4a7a', cloudLit: '#222c50', cloudDark: '#070d20', fog: '#0d1c3c', sunCol: '#5a70b0', fogD: 0.00006 },
];

export class TokyoScrollScene extends CityScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, opts);
    this.timeOffset = PATH.globalStart;
    this.duration = PATH.duration;
    this.timeline.duration = this.duration; this.timeline.frameCount = Math.round(this.duration * this.timeline.fps);
    this.showTitle = false; this.fadeSec = 0;
    this.fx = opts.fx ?? {};
    this.nightU = { value: 0.6 };
    this.snowU = { value: 0 };           // 冬でも雪は降らせない（U-4）。facade の積雪も 0
    this.ambientCount = 0;
  }

  async build() {
    const scene = this.scene;
    const P0 = PAL[0];
    const sky = createSky(THREE, { sunDir: SUN_DIR, colors: { ...P0, cloudCover: 0.0 } });   // 快晴
    this.sky = sky; scene.add(sky.mesh);
    scene.fog = new THREE.FogExp2(new THREE.Color(P0.fog), P0.fogD);
    if (this.glRenderer) {
      const envScene = new THREE.Scene();
      envScene.add(new THREE.Mesh(sky.mesh.geometry, sky.material));
      const pm = new THREE.PMREMGenerator(this.glRenderer);
      scene.environment = pm.fromScene(envScene, 0.015, 1, 3000).texture;
      pm.dispose();
    }
    // 日没後：太陽は地平線の下。弱い青い環境光だけ（影は落とさない）。街の明かりが主役。
    const sun = new THREE.DirectionalLight(0x8aa4e0, 0.5); sun.position.copy(SUN_DIR).multiplyScalar(3000); scene.add(sun, sun.target); this.sun = sun;
    this.hemi = new THREE.HemisphereLight(0x6f88c8, 0x1a2030, 0.5); scene.add(this.hemi);

    // 仮の地面（Step 2 で街路の地面シェーダに置き換える）
    const geo = new THREE.PlaneGeometry(24000, 24000, 1, 1); geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: 0x15171c, roughness: 0.9, metalness: 0 });
    const ground = new THREE.Mesh(geo, mat); ground.name = 'ground'; scene.add(ground);

    this.rig = new PathRig(PATH);

    // 時間帯トラック（グローバル 0–7 秒）：日没後 15 分 → ほぼ夜。仙台より暗さを一段進める（U-1）。
    const K = (arr) => new Track(arr.map(([t, v]) => ({ t, v })));
    this.tracks = {
      night: K([[0, 0.55], [1.5, 0.75], [3.5, 0.92], [7, 1]]),
      palette: K([[0, 0], [2.5, 0.8], [5, 1.5], [7, 1.95]]),
      sunPower: K([[0, 0.5], [3, 0.3], [7, 0.12]]),
      envPower: K([[0, 0.5], [7, 0.2]]),
      exposure: K([[0, 1.0], [7, 1.0]]),
      bloom: K([[0, 0.45], [3, 0.6], [7, 0.75]]),
      bloomThreshold: K([[0, 1.0], [7, 0.85]]),
      bloomRadius: K([[0, 0.6], [7, 0.75]]),
      dofAperture: K([[0, 0.6], [7, 0.6]]),
      dofMaxBlur: K([[0, 4], [7, 5]]),
    };
    this.look.grade = { uShadowAmt: 0.3, uVig: 0.2, uSat: 1.04, uGrain: 0.02, uAberr: 0.0006, uHighTint: new THREE.Color(1.03, 1.0, 0.96) };
    this._ca = new THREE.Color(); this._cb = new THREE.Color();

    applyScrollEffects(this, { tiled: this.fx.tiled, haze: this.fx.haze, tileExclude: [], skyUniforms: this.sky.uniforms });
  }

  applyTime(t) {
    const pv = this.sampleTrack('palette', t, 0);
    const i0 = Math.min(1, Math.floor(pv)), f = Math.min(1, pv - i0);
    const A = PAL[i0], B = PAL[Math.min(2, i0 + 1)];
    const u = this.sky.uniforms, L = (key, uni) => { this._ca.set(A[key]); this._cb.set(B[key]); uni.value.lerpColors(this._ca, this._cb, f); };
    L('zenith', u.uZenith); L('horizon', u.uHorizon); L('horizonWarm', u.uHorizonWarm); L('sun', u.uSunColor); L('cloudLit', u.uCloudLit); L('cloudDark', u.uCloudDark);
    this._ca.set(A.fog); this._cb.set(B.fog); this.scene.fog.color.lerpColors(this._ca, this._cb, f);
    this.scene.fog.density = A.fogD + (B.fogD - A.fogD) * f;
    this._ca.set(A.sunCol); this._cb.set(B.sunCol); this.sun.color.lerpColors(this._ca, this._cb, f);
    this.nightU.value = this.sampleTrack('night', t, 0.6);
    const sp = this.sampleTrack('sunPower', t, 0.5);
    this.sun.intensity = sp; u.uSunStrength.value = Math.min(1, sp / 2);
    this.hemi.intensity = 0.5 * Math.max(0.3, 1 - this.nightU.value * 0.6);
    this.scene.environmentIntensity = this.sampleTrack('envPower', t, 0.5);
  }

  onBeforeRender({ t, camera }) {
    this.sky.mesh.position.copy(camera.position);
    this.sky.uniforms.uTime.value = (t + this.timeOffset) * 5;
  }

  /** 環境アニメーション（きらめき）：Step 3 で実装。 */
  setAmbientCount(n) { this.ambientCount = n; }
  setLayoutWeight(w) { this.rig.weight = w; }
}
