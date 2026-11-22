// cities/tokyo/scene.js — スクロール版の東京シーン。共有の src/scenes・src/lib は変更せず、lib の部品を呼び出して組み立てる（U-11）。
//   Step 1：空・時間変化・暗い地面・仮カメラ。街・イルミネーション・東京タワーは Step 2〜4。
import * as THREE from 'three';
import { CityScene, Track } from '../../../scenes/city-template.js';
import { createSky } from '../../../lib/sky.js';
import { PathRig } from '../../rig.js';
import { applyScrollEffects } from '../../city-api.js';
import { PATH } from './camera.js';
import { createFacadeMaterial, BuildingBatch } from '../../../lib/buildings.js';
import { createGlowPoints } from '../../../lib/glow.js';
import { makeRng } from '../../../lib/rng.js';
import { buildGround, buildMoat, buildPalaceMass } from './ground.js';
import { buildTrees } from './trees.js';
import { buildLeds } from './leds.js';
import { buildStation } from './station.js';
import { lampList, buildLampPoles } from './lamps.js';
import { STREETS, PLAZAS, CITY_BOX, MOAT, FACADE_X, VIADUCT, SUN_DIR as SUN } from './layout.js';

const rectOf = (s) => (s.dir === 'x'
  ? { x0: s.a, x1: s.b, z0: s.c - s.w / 2, z1: s.c + s.w / 2 }
  : { x0: s.c - s.w / 2, x1: s.c + s.w / 2, z0: s.a, z1: s.b });
const hit = (r, q, m = 0) => r.x0 - m < q.x1 && r.x1 + m > q.x0 && r.z0 - m < q.z1 && r.z1 + m > q.z0;
const segDist = (x, z, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz))); return Math.hypot(x - (ax + dx * t), z - (az + dz * t)); };
const nearViaduct = (x, z) => VIADUCT.pts.some((p, i) => i < VIADUCT.pts.length - 1 && segDist(x, z, p[0], p[1], VIADUCT.pts[i + 1][0], VIADUCT.pts[i + 1][1]) < 26);

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
    this.spillU = { value: 0.5 };
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

    const rng = makeRng(20261122);
    scene.add(buildGround(this.nightU, this.spillU));
    scene.add(buildMoat(this.nightU, this.spillU), buildPalaceMass());
    this._buildBlocks(rng);
    const st = buildStation(); st.meshes.forEach((m) => scene.add(m)); this.station = st;
    this.trees = buildTrees(rng); this.trees.meshes.forEach((m) => scene.add(m));
    this.leds = buildLeds(this.trees, rng); this.leds.chunks.forEach((m) => scene.add(m));
    this._buildLamps();

    this.rig = new PathRig(PATH);

    // 時間帯トラック（グローバル 0–7 秒）：日没後 15 分 → ほぼ夜。仙台より暗さを一段進める（U-1）。
    const K = (arr) => new Track(arr.map(([t, v]) => ({ t, v })));
    this.tracks = {
      night: K([[0, 0.55], [1.5, 0.75], [3.5, 0.92], [7, 1]]),
      palette: K([[0, 0], [2.5, 0.8], [5, 1.5], [7, 1.95]]),
      sunPower: K([[0, 0.18], [3, 0.1], [7, 0.05]]),
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

    applyScrollEffects(this, { tiled: this.fx.tiled, haze: this.fx.haze, tileExclude: [this.boxMesh], skyUniforms: this.sky.uniforms });
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

  // ---------- 街区：街路に囲まれた区画を割って建物を置く。仲通り沿いは壁に見えるよう隙間なく並べ、高さは仙台より高く大きい。
  _buildBlocks(rng) {
    const facade = createFacadeMaterial(THREE, { uNight: this.nightU, uSnow: this.snowU });
    const batch = new BuildingBatch(THREE, facade, 6000);
    const strips = STREETS.map(rectOf), keep = [...PLAZAS];
    const xs = new Set([CITY_BOX.x0, CITY_BOX.x1]), zs = new Set([CITY_BOX.z0, CITY_BOX.z1]);
    for (const s of STREETS) { const r = rectOf(s); if (s.dir === 'z') { xs.add(r.x0); xs.add(r.x1); } else { zs.add(r.z0); zs.add(r.z1); } }
    const X = [...xs].sort((a, b) => a - b), Z = [...zs].sort((a, b) => a - b);
    let seed = 1;
    const stationBox = { x0: FACADE_X - 6, x1: FACADE_X + 60, z0: -200, z1: 200 };
    for (let i = 0; i < X.length - 1; i++) for (let j = 0; j < Z.length - 1; j++) {
      const xa = X[i], xb = X[i + 1], za = Z[j], zb = Z[j + 1];
      if (xb - xa < 9 || zb - za < 9) continue;
      const nx = Math.max(1, Math.round((xb - xa) / 26)), nz = Math.max(1, Math.round((zb - za) / 24));
      for (let a = 0; a < nx; a++) for (let b = 0; b < nz; b++) {
        const lx0 = xa + ((xb - xa) * a) / nx, lx1 = xa + ((xb - xa) * (a + 1)) / nx;
        const lz0 = za + ((zb - za) * b) / nz, lz1 = za + ((zb - za) * (b + 1)) / nz;
        const lot = { x0: lx0, x1: lx1, z0: lz0, z1: lz1 };
        if (strips.some((s) => hit(lot, s, -0.6)) || keep.some((k) => hit(lot, k, 2)) || hit(lot, stationBox, 0)) continue;
        const cx = (lx0 + lx1) / 2, cz = (lz0 + lz1) / 2;
        if (cx < MOAT.x0 + 40 && Math.abs(cz) < 336) continue;               // 皇居側（外濠の西）
        if (nearViaduct(cx, cz)) continue;
        if (cx > FACADE_X + 24 && cx < 460 && cz > -330 && cz < 330) continue;     // 駅の東（ホーム・線路の上空は低く開ける）
        const dNaka = Math.abs(cx);
        let hMin = 60, hMax = 150;
        if (dNaka < 80) { hMin = 45; hMax = 115; }                           // 仲通り沿い（壁）
        if (cz < -300) { hMin = 85; hMax = 200; }                            // 大手町側
        if (cx > 380) { hMin = 60; hMax = 130; }                             // 八重洲側
        if (cx < -200) { hMin = 40; hMax = 90; }                             // 日比谷寄り
        const h = hMin + (hMax - hMin) * Math.pow(rng(), 1.1);
        const kind = h > 90 ? rng.pick([2, 2, 0, 4]) : rng.pick([0, 0, 2, 4, 1]);
        const w = lx1 - lx0 - 0.8, d = lz1 - lz0 - 0.8;
        if (w < 6 || d < 6) continue;
        batch.add(cx, 0, cz, w, h, d, kind, seed++ + rng(), 0.5 + 0.45 * rng());
      }
    }
    this.boxes = batch; this.boxMesh = batch.build({ castShadow: false }); this.scene.add(this.boxMesh);
  }

  // ---------- 街灯（柱＋光点）
  _buildLamps() {
    const L = lampList(); this.lampCount = L.length;
    this.scene.add(buildLampPoles(L));
    const pos = new Float32Array(L.length * 3), col = new Float32Array(L.length * 3), siz = new Float32Array(L.length);
    L.forEach((q, i) => { pos.set([q.x, q.h + 0.1, q.z], i * 3); col.set([3.0, 2.1, 1.2], i * 3); siz[i] = 0.9; });
    this.lamps = createGlowPoints(THREE, { positions: pos, colors: col, sizes: siz, fogDensity: 0.00004, minPx: 1.4, maxPx: 20 });
    this.scene.add(this.lamps.points);
  }

  onBeforeRender({ t, projScale, camera }) {
    const tg = t + this.timeOffset, n = this.nightU.value, fog = this.scene.fog.density;
    this.sky.mesh.position.copy(camera.position);
    this.sky.uniforms.uTime.value = tg * 5;
    this.lamps.uniforms.uProj.value = projScale; this.lamps.uniforms.uFog.value = fog; this.lamps.uniforms.uGain.value = 0.3 + 1.0 * n;
    const lu = this.leds.uniforms; lu.uProj.value = projScale; lu.uFog.value = fog; lu.uTime.value = tg; lu.uGain.value = 0.7 + 0.9 * n;
    this.spillU.value = 0.55 + 0.75 * n;
    this.station.mat.emissiveIntensity = 0.04 + 0.07 * n; this.station.winMat.color.setRGB(1, 0.72, 0.4).multiplyScalar(0.55 + 0.35 * n);
    this.trees.mats[0].emissiveIntensity = 0.02 + 0.04 * n;
    this.trees.updateLod(camera.position);
  }

  /** 環境アニメーション（きらめき）：Step 3 で実装。 */
  setAmbientCount(n) { this.ambientCount = n; this.leds.uniforms.uTwFrac.value = Math.min(1, n / 40000); }
  setLayoutWeight(w) { this.rig.weight = w; }
}
