// cities/kobe/scene.js — スクロール版の神戸シーン。共有の src/scenes・src/lib は変更せず、lib の部品を呼び出して組み立てる（K-13）。
//   春・日没の約 20 分前 → 夜。山から海へ下る。影は使わない（初回フレームと定常は同じ負荷）。
import * as THREE from 'three';
import { CityScene, Track } from '../../../scenes/city-template.js';
import { createSky } from '../../../lib/sky.js';
import { PathRig } from '../../rig.js';
import { applyScrollEffects } from '../../city-api.js';
import { makeRng } from '../../../lib/rng.js';
import { PATH } from './camera.js';
import { SUN_DIR as SUN } from './layout.js';
import { buildGround, buildSea } from './ground.js';
import { buildRidges } from './far.js';

const SUN_DIR = new THREE.Vector3(...SUN).normalize();

// 時間帯パレット（A=日没の約 20 分前の夕景：西の海に橙 B=ブルーアワー C=夜）。春の澄んだ空気：薄い霞。
const PAL = [
  { zenith: '#25356f', horizon: '#7a7aa8', horizonWarm: '#ff9650', sun: '#ff8040', cloudLit: '#c08a98', cloudDark: '#2e3262', fog: '#566a9a', sunCol: '#d89870', fogD: 0.00004 },
  { zenith: '#0d1a4a', horizon: '#343c78', horizonWarm: '#c8604e', sun: '#d0605a', cloudLit: '#5a5080', cloudDark: '#141a3c', fog: '#232e60', sunCol: '#8088c0', fogD: 0.00005 },
  { zenith: '#050a22', horizon: '#142048', horizonWarm: '#2a3058', sun: '#3a4a7a', cloudLit: '#222c50', cloudDark: '#070d20', fog: '#0d1a3c', sunCol: '#5a70b0', fogD: 0.00006 },
];

export class KobeScrollScene extends CityScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, opts);
    this.timeOffset = PATH.globalStart; this.duration = PATH.duration;
    this.timeline.duration = this.duration; this.timeline.frameCount = Math.round(this.duration * this.timeline.fps);
    this.showTitle = false; this.fadeSec = 0; this.fx = opts.fx ?? {};
    this.nightU = { value: 0.3 }; this.snowU = { value: 0 }; this.spillU = { value: 0.5 }; this.timeU = { value: 0 };
    this.ambientCount = 0;
  }

  async build() {
    const scene = this.scene, P0 = PAL[0], rng = makeRng(20261126);
    const sky = createSky(THREE, { sunDir: SUN_DIR, colors: { ...P0, cloudCover: 0.12 } }); this.sky = sky; scene.add(sky.mesh);
    scene.fog = new THREE.FogExp2(new THREE.Color(P0.fog), P0.fogD);
    if (this.glRenderer) {
      const envScene = new THREE.Scene(); envScene.add(new THREE.Mesh(sky.mesh.geometry, sky.material));
      const pm = new THREE.PMREMGenerator(this.glRenderer); scene.environment = pm.fromScene(envScene, 0.015, 1, 3000).texture; pm.dispose();
    }
    const sun = new THREE.DirectionalLight(0xd89870, 0.4); sun.position.copy(SUN_DIR).multiplyScalar(3000); scene.add(sun, sun.target); this.sun = sun;
    this.hemi = new THREE.HemisphereLight(0x7f88c8, 0x30222a, 0.8); scene.add(this.hemi);

    // 地面・埋立地・海
    const gr = buildGround(this.nightU, this.spillU); this.ground = gr; scene.add(gr.mesh, gr.far, ...gr.quays);
    this.sea = buildSea(this.nightU, this.spillU, this.timeU); scene.add(this.sea);
    this.ridges = buildRidges(); scene.add(this.ridges.group);

    this.rig = new PathRig(PATH);
    const K = (arr) => new Track(arr.map(([t, v]) => ({ t, v })));
    this.tracks = {
      night: K([[0, 0.3], [2, 0.55], [4, 0.82], [7, 1]]),
      palette: K([[0, 0], [2.5, 0.7], [5, 1.4], [7, 1.9]]),
      sunPower: K([[0, 0.4], [3, 0.15], [7, 0.05]]), envPower: K([[0, 0.6], [7, 0.2]]), exposure: K([[0, 1.0], [7, 1.0]]),
      bloom: K([[0, 0.4], [3, 0.6], [7, 0.75]]), bloomThreshold: K([[0, 1.0], [7, 0.85]]), bloomRadius: K([[0, 0.6], [7, 0.75]]),
      dofAperture: K([[0, 0.6], [7, 0.6]]), dofMaxBlur: K([[0, 4], [7, 5]]),
    };
    this.look.grade = { uShadowAmt: 0.3, uVig: 0.22, uSat: 1.06, uGrain: 0.02, uAberr: 0.0006, uHighTint: new THREE.Color(1.04, 1.0, 0.95) };
    this._ca = new THREE.Color(); this._cb = new THREE.Color();

    applyScrollEffects(this, { tiled: this.fx.tiled, haze: this.fx.haze, tileExclude: [gr.mesh, gr.far, ...gr.quays, this.sea, ...this.ridges.group.children], skyUniforms: this.sky.uniforms });
    this._hazePoints();
  }

  _hazeUniforms() { return this.haze?.uniforms?.uHazeP ? this.haze.uniforms.uHazeP : { value: new THREE.Vector4(0, 1, 0, 0) }; }
  _hazePoints() {
    const hp = this._hazeUniforms(), KEY = 'float fog = exp(-pow(uFog * dist, 2.0));'; let n = 0; const seen = new Set();
    this.scene.traverse((o) => { const m = o.material; if (!m || !m.isShaderMaterial || seen.has(m) || !m.vertexShader.includes(KEY)) return; seen.add(m);
      m.vertexShader = m.vertexShader.replace('varying vec3 vCol;', 'varying vec3 vCol; uniform vec4 uHazeP;').replace(KEY, KEY + ' fog *= 1.0 - smoothstep(uHazeP.x, uHazeP.y, dist) * uHazeP.z;'); m.uniforms.uHazeP = hp; m.needsUpdate = true; n++; });
    this.hazePointMaterials = n;
  }

  applyTime(t) {
    const pv = this.sampleTrack('palette', t, 0), i0 = Math.min(1, Math.floor(pv)), f = Math.min(1, pv - i0), A = PAL[i0], B = PAL[Math.min(2, i0 + 1)];
    const u = this.sky.uniforms, L = (key, uni) => { this._ca.set(A[key]); this._cb.set(B[key]); uni.value.lerpColors(this._ca, this._cb, f); };
    L('zenith', u.uZenith); L('horizon', u.uHorizon); L('horizonWarm', u.uHorizonWarm); L('sun', u.uSunColor); L('cloudLit', u.uCloudLit); L('cloudDark', u.uCloudDark);
    this._ca.set(A.fog); this._cb.set(B.fog); this.scene.fog.color.lerpColors(this._ca, this._cb, f); this.scene.fog.density = A.fogD + (B.fogD - A.fogD) * f;
    this._ca.set(A.sunCol); this._cb.set(B.sunCol); this.sun.color.lerpColors(this._ca, this._cb, f);
    this.nightU.value = this.sampleTrack('night', t, 0.3);
    const sp = this.sampleTrack('sunPower', t, 0.4); this.sun.intensity = sp; u.uSunStrength.value = Math.min(1, sp / 2);
    this.hemi.intensity = 0.8 * Math.max(0.3, 1 - this.nightU.value * 0.6);
    this.scene.environmentIntensity = this.sampleTrack('envPower', t, 0.5);
    this._ca.set(A.horizon); this._cb.set(B.horizon); const hz = this._ca.lerp(this._cb, f); this.ridges.uniforms.uBody.value.copy(hz).multiplyScalar(0.42);
  }

  onBeforeRender({ t, projScale, camera }) {
    const tg = t + this.timeOffset, n = this.nightU.value;
    this.sky.mesh.position.copy(camera.position); this.sky.uniforms.uTime.value = tg * 5; this.timeU.value = tg;
    this.spillU.value = 0.9 + 1.2 * n;
  }

  setAmbientCount(n) { this.ambientCount = n; }
  setLayoutWeight(w) { this.rig.weight = w; }
}
