// scenes/osaka.js — 大阪（冬・夜）のベースシーン（札幌方式の階層：動画版と共有する土台。現時点で動画版 main.js には登録しない＝D-7）。
//   スクロール版は src/scroll/cities/osaka/scene.js のサブクラスが PathRig・タイル・霞を足す。
//   部品は src/scroll/cities/osaka/ のモジュールに置き、共通 lib・他都市は変更しない（wrap-only）。
import * as THREE from 'three';
import { CityScene, Track, CameraRig } from './city-template.js';
import { createSky } from '../lib/sky.js';
import { createFacadeMaterial, BuildingBatch } from '../lib/buildings.js';
import { createGlowPoints } from '../lib/glow.js';
import { createCars, createPedestrians } from '../lib/traffic.js';
import { makeRng } from '../lib/rng.js';
import { PATH, LANDSCAPE_KEYS } from '../scroll/cities/osaka/camera.js';
import { STREETS, CITY_BOXES, EXCLUDES, PLAZAS, SUN_DIR as SUN, VIADUCT } from '../scroll/cities/osaka/layout.js';
import { buildGround, buildWater } from '../scroll/cities/osaka/ground.js';
import { treeRecords, buildTrees, ledTips } from '../scroll/cities/osaka/trees.js';
import { buildLeds } from '../scroll/cities/osaka/leds.js';
import { lampList, buildLampPoles } from '../scroll/cities/osaka/lamps.js';
import { buildPanels } from '../scroll/cities/osaka/panels.js';
import { landmarkBoxes, buildSkyRing, buildStationRoof, buildHallDome, buildTsutenkaku, buildHarukasGlow } from '../scroll/cities/osaka/landmarks.js';
import { buildViaduct, buildFarCity, makeFarMaterial, buildRidge } from '../scroll/cities/osaka/far.js';
import { buildStreaks } from '../scroll/cities/osaka/streaks.js';

const rectOf = (s) => (s.dir === 'x'
  ? { x0: s.a, x1: s.b, z0: s.c - s.w / 2, z1: s.c + s.w / 2 }
  : { x0: s.c - s.w / 2, x1: s.c + s.w / 2, z0: s.a, z1: s.b });
const hit = (r, q, m = 0) => r.x0 - m < q.x1 && r.x1 + m > q.x0 && r.z0 - m < q.z1 && r.z1 + m > q.z0;
const segDist = (x, z, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz))); return Math.hypot(x - (ax + dx * t), z - (az + dz * t)); };
const nearViaduct = (x, z) => VIADUCT.pts.some((p, i) => i < VIADUCT.pts.length - 1 && segDist(x, z, p[0], p[1], VIADUCT.pts[i + 1][0], VIADUCT.pts[i + 1][1]) < 26);

const SUN_DIR = new THREE.Vector3(...SUN).normalize();

// 時間帯パレット（A=夜の早い時間 B=夜 C=深夜）。D-1：開始から夜。空は快晴寄り（薄雲のみ）。
const PAL = [
  { zenith: '#12224e', horizon: '#24406e', horizonWarm: '#6e3b2a', sun: '#54301f', cloudLit: '#3c4c80', cloudDark: '#0c1734', fog: '#122344', sunCol: '#6d84bc', fogD: 0.000050 },
  { zenith: '#081236', horizon: '#1a3468', horizonWarm: '#6a4258', sun: '#5a4060', cloudLit: '#2c3a68', cloudDark: '#080f2a', fog: '#101f42', sunCol: '#6880bc', fogD: 0.000055 },
  { zenith: '#03061a', horizon: '#0c1c40', horizonWarm: '#2c2c4c', sun: '#2c3455', cloudLit: '#18224a', cloudDark: '#04081a', fog: '#081630', sunCol: '#546cae', fogD: 0.000060 },
];

export class OsakaScene extends CityScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, opts);
    this.timeOffset = PATH.globalStart;
    this.duration = PATH.duration;
    this.timeline.duration = this.duration; this.timeline.frameCount = Math.round(this.duration * this.timeline.fps);
    this.showTitle = false; this.fadeSec = 0;
    this.fx = opts.fx ?? {};
    this.nightU = { value: 0.7 };
    this.snowU = { value: 0 };           // 雪は降らせない（D-5）。facade の積雪も 0
    this.ambientCount = 0;
    this.spillU = { value: 0.5 };
  }

  async build() {
    const scene = this.scene;
    const P0 = PAL[0];
    const sky = createSky(THREE, { sunDir: SUN_DIR, colors: { ...P0, cloudCover: 0.12 } });
    this.sky = sky; scene.add(sky.mesh);
    scene.fog = new THREE.FogExp2(new THREE.Color(P0.fog), P0.fogD);
    if (this.glRenderer) {
      const envScene = new THREE.Scene();
      envScene.add(new THREE.Mesh(sky.mesh.geometry, sky.material));
      const pm = new THREE.PMREMGenerator(this.glRenderer);
      scene.environment = pm.fromScene(envScene, 0.015, 1, 3000).texture;
      pm.dispose();
    }
    const sun = new THREE.DirectionalLight(0x7a90cc, 0.3); sun.position.copy(SUN_DIR).multiplyScalar(3000); scene.add(sun, sun.target); this.sun = sun;
    this.hemi = new THREE.HemisphereLight(0x6880bc, 0x141a28, 0.5); scene.add(this.hemi);

    const rng = makeRng(20261123);
    scene.add(buildGround(this.nightU, this.spillU));
    for (const w of buildWater(this.nightU, this.spillU)) scene.add(w);
    this._buildBlocks(rng);
    // ランドマークの専用形状
    const ring = buildSkyRing(); ring.meshes.forEach((m) => scene.add(m)); scene.add(ring.glow.points); this.ringGlow = ring.glow;
    const roof = buildStationRoof(); roof.meshes.forEach((m) => scene.add(m)); scene.add(roof.glow.points); this.roofGlow = roof.glow;
    buildHallDome().forEach((m) => scene.add(m));
    const tsut = buildTsutenkaku(); tsut.meshes.forEach((m) => scene.add(m)); scene.add(tsut.glow.points); this.tsut = tsut;
    const haru = buildHarukasGlow(); scene.add(haru.glow.points); this.haruGlow = haru.glow;
    // 街路樹・LED・街灯・店舗とネオン
    const records = treeRecords();
    this.trees = buildTrees(records); scene.add(this.trees.group);
    this.leds = buildLeds(ledTips(records)); this.leds.chunks.forEach((m) => scene.add(m));
    this._buildLamps();
    const pn = buildPanels(); pn.meshes.forEach((m) => scene.add(m)); this.panels = pn;
    this.streaks = buildStreaks(rng); scene.add(this.streaks.mesh);
    this._buildTraffic(rng);
    // 高架・遠景・稜線
    this.viaduct = buildViaduct(); this.viaduct.meshes.forEach((m) => scene.add(m));
    const fm = makeFarMaterial(rng); this.farMat = fm.mat; this.farWin = fm.uniforms;
    const farBatch = new BuildingBatch(THREE, this.farMat, 16000);
    this.far = buildFarCity(rng, farBatch); this.farMesh = farBatch.build({ castShadow: false }); scene.add(this.farMesh, this.far.glow.points);
    this.ridge = buildRidge(); scene.add(this.ridge.mesh);

    // ベースのカメラ（横画面キー。スクロール版は PathRig に差し替える）
    this.rig = new CameraRig(LANDSCAPE_KEYS, { shakeAmp: 0.1, shakeSeed: 4 });

    const K = (arr) => new Track(arr.map(([t, v]) => ({ t, v })));
    this.tracks = {
      night: K([[0, 0.7], [3, 0.9], [7, 1]]),
      palette: K([[0, 0], [2.2, 1], [5, 2]]),
      sunPower: K([[0, 0.05], [7, 0.03]]),
      envPower: K([[0, 0.4], [7, 0.18]]),
      exposure: K([[0, 1.0], [7, 1.0]]),
      bloom: K([[0, 0.5], [7, 0.78]]),
      bloomThreshold: K([[0, 0.95], [7, 0.85]]),
      bloomRadius: K([[0, 0.6], [7, 0.75]]),
      dofAperture: K([[0, 0.35], [7, 0.35]]),
      dofMaxBlur: K([[0, 4], [7, 4]]),
    };
    this.look.grade = { uShadowAmt: 0.3, uVig: 0.22, uSat: 1.05, uGrain: 0.02, uAberr: 0.0006, uHighTint: new THREE.Color(1.04, 1.0, 0.95) };
    this._ca = new THREE.Color(); this._cb = new THREE.Color();
    this.applyTime(0);
  }

  // ---------- 街区：街路で切った区画を割って建物を置く（東京 _buildBlocks と同じ考え方、2 つの領域に適用）
  _buildBlocks(rng) {
    const facade = createFacadeMaterial(THREE, { uNight: this.nightU, uSnow: this.snowU }); this.facade = facade;
    const batch = new BuildingBatch(THREE, facade, 9000);
    const strips = STREETS.map(rectOf);
    let seed = 1;
    const heightAt = (x, z) => {
      const r = rng();
      if (z < -300) return 26 + 30 * Math.pow(r, 1.5);                       // 駅の北は中層まで（開幕の視界を開ける）
      if (z < 200) return 42 + 145 * Math.pow(r, 1.7);                        // 梅田
      if (z < 1900 && Math.abs(x) < 380) return 46 + 92 * Math.pow(r, 1.8);  // 御堂筋の壁
      if (z >= 1900 && z < 2500) return 17 + 46 * Math.pow(r, 1.6);          // 心斎橋〜難波
      if (z >= 2500 && z < 2950) return 10 + 22 * Math.pow(r, 1.6);          // 新世界
      if (z >= 2950) return 22 + 55 * Math.pow(r, 1.7);                      // 天王寺
      return 26 + 72 * Math.pow(r, 1.8);
    };
    for (const box of CITY_BOXES) {
      const xs = new Set([box.x0, box.x1]), zs = new Set([box.z0, box.z1]);
      for (const s of STREETS) { const r = rectOf(s); if (s.dir === 'z') { xs.add(r.x0); xs.add(r.x1); } else { zs.add(r.z0); zs.add(r.z1); } }
      const X = [...xs].filter((v) => v >= box.x0 && v <= box.x1).sort((a, b) => a - b);
      const Z = [...zs].filter((v) => v >= box.z0 && v <= box.z1).sort((a, b) => a - b);
      for (let i = 0; i < X.length - 1; i++) for (let j = 0; j < Z.length - 1; j++) {
        const xa = X[i], xb = X[i + 1], za = Z[j], zb = Z[j + 1];
        if (xb - xa < 9 || zb - za < 9) continue;
        const nx = Math.max(1, Math.round((xb - xa) / 26)), nz = Math.max(1, Math.round((zb - za) / 24));
        for (let a = 0; a < nx; a++) for (let b = 0; b < nz; b++) {
          const lx0 = xa + ((xb - xa) * a) / nx, lx1 = xa + ((xb - xa) * (a + 1)) / nx;
          const lz0 = za + ((zb - za) * b) / nz, lz1 = za + ((zb - za) * (b + 1)) / nz;
          const lot = { x0: lx0, x1: lx1, z0: lz0, z1: lz1 };
          if (strips.some((s) => hit(lot, s, -0.6)) || EXCLUDES.some((k) => hit(lot, k, 0)) || PLAZAS.some((k) => hit(lot, k, 2))) continue;
          const cx = (lx0 + lx1) / 2, cz = (lz0 + lz1) / 2;
          if (nearViaduct(cx, cz)) continue;
          if (cz > 2108 && cz < 2186 && cx > -660 && cx < 860) continue;   // 道頓堀の両岸の建物列は下で別に置く
          const h = heightAt(cx, cz);
          const kind = h < 15 ? 3 : rng.pick([0, 0, 2, 4, 1]);
          const w = lx1 - lx0 - 0.8, d = lz1 - lz0 - 0.8;
          if (w < 6 || d < 6) continue;
          batch.add(cx, 0, cz, w, h, d, kind, seed++ + rng(), 0.5 + 0.45 * rng());
        }
      }
    }
    // 道頓堀の両岸の建物列（運河に面した壁。ネオンの色面は panels.js がこの壁に合わせる）
    for (let x = -640; x < 845; x += 16.5) {
      if (Math.abs(x) < 32) continue;
      batch.add(x, 0, 2122, 13.5, 16 + rng() * 26, 14, rng() < 0.5 ? 1 : 3, seed++ + rng(), 0.8);
      batch.add(x + 8, 0, 2173, 13.5, 15 + rng() * 24, 14, rng() < 0.5 ? 1 : 3, seed++ + rng(), 0.8);
    }
    seed = landmarkBoxes(batch, seed);
    this.boxes = batch; this.boxMesh = batch.build({ castShadow: false }); this.scene.add(this.boxMesh);
  }

  // ---------- 街灯（柱＋光点）
  _buildLamps() {
    const L = lampList(); this.lampCount = L.length;
    this.scene.add(buildLampPoles(L));
    const pos = new Float32Array(L.length * 3), col = new Float32Array(L.length * 3), siz = new Float32Array(L.length);
    L.forEach((q, i) => { pos.set([q.x, q.h + 0.1, q.z], i * 3); col.set([2.6, 2.3, 1.7], i * 3); siz[i] = 0.9; });
    this.lamps = createGlowPoints(THREE, { positions: pos, colors: col, sizes: siz, fogDensity: 0.00004, minPx: 1.4, maxPx: 16 });
    this.scene.add(this.lamps.points);
  }

  // ---------- 車と歩行者（密度は歩行者 約 1,000・車 500）
  _buildTraffic(rng) {
    const lanes = [];
    const spacing = { 0: 95, 1: 55, 2: 420 };
    for (const s of STREETS) {
      const len = s.b - s.a, offs = s.kind === 0 ? [2.0] : s.kind === 1 ? [5.5] : [3.6, 8.2];
      for (const o of offs) for (const dir of [1, -1]) {
        const n = Math.max(1, Math.round(len / spacing[s.kind]));
        for (let k = 0; k < n; k++) {
          const sgn = s.dir === 'x' ? (dir > 0 ? 1 : -1) : (dir > 0 ? -1 : 1);   // 左側通行
          lanes.push({ alongX: s.dir === 'x', dir, fixed: s.c + sgn * o, speed: rng.range(6, 11), off: rng.range(0, 4000), len, min: s.a, ph: rng() });
        }
      }
    }
    while (lanes.length > 500) lanes.splice(Math.floor(rng() * lanes.length), 1);
    this.cars = createCars(THREE, lanes); this.scene.add(this.cars.mesh);
    const N = lanes.length;
    const pos = new Float32Array(N * 4 * 3), col = new Float32Array(N * 4 * 3), siz = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) for (let k = 0; k < 4; k++) {
      const o = (i * 4 + k) * 3, head = k < 2;
      if (head) { col[o] = 3.0; col[o + 1] = 2.9; col[o + 2] = 2.3; } else { col[o] = 2.4; col[o + 1] = 0.1; col[o + 2] = 0.07; }
      siz[i * 4 + k] = head ? 0.7 : 0.5;
    }
    this.carGlow = createGlowPoints(THREE, { positions: pos, colors: col, sizes: siz, fogDensity: 0.00004, minPx: 1.4, maxPx: 12 });
    this.scene.add(this.carGlow.points); this.carCount = N;
    // 歩行者（東西）：駅前広場・道頓堀の両岸・横断する通りの歩道
    const walkers = [];
    const add = (z, x0, x1, n) => { for (let i = 0; i < n; i++) walkers.push({ x0, x1, z: z + rng.range(-0.8, 0.8), dir: rng() < 0.5 ? 1 : -1, speed: rng.range(0.9, 1.5), off: rng.range(0, 800), ph: rng() }); };
    add(-45, -40, 320, 40); add(-70, -40, 320, 40);
    add(2123.5, -620, 820, 85); add(2171.5, -620, 820, 85);
    for (const s of STREETS.filter((q) => q.dir === 'x' && q.id !== 'x300' && q.id !== 'x660')) for (const sd of [-1, 1]) add(s.c + sd * (s.w / 2 - 1.8), s.a + 5, s.b - 5, 8);
    this.peds = createPedestrians(THREE, walkers); this.scene.add(this.peds.mesh);
    // 歩行者（南北）：御堂筋の歩道。東西用の部品を 90° 回して使う（東京の仲通りと同じ）
    const nw = [];
    for (let i = 0; i < 520; i++) { const side = rng() < 0.5 ? -1 : 1; nw.push({ x0: -(2480 - 14), x1: -(-100 + 14), z: side * rng.range(12.5, 20), dir: rng() < 0.5 ? 1 : -1, speed: rng.range(0.7, 1.4), off: rng.range(0, 800), ph: rng() }); }
    this.pedsNS = createPedestrians(THREE, nw); this.pedsNS.mesh.rotation.y = Math.PI / 2; this.pedsNS.mesh.updateMatrix(); this.scene.add(this.pedsNS.mesh);
    this.pedCount = walkers.length + nw.length;
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
    this.nightU.value = this.sampleTrack('night', t, 0.7);
    const sp = this.sampleTrack('sunPower', t, 0.1);
    this.sun.intensity = sp; u.uSunStrength.value = Math.min(1, sp / 2);
    this.hemi.intensity = 0.5 * Math.max(0.3, 1 - this.nightU.value * 0.6);
    this.scene.environmentIntensity = this.sampleTrack('envPower', t, 0.4);
    this._ca.set(A.horizon); this._cb.set(B.horizon); const hz = this._ca.lerp(this._cb, f);
    this.ridge.uniforms.uBody.value.copy(hz).multiplyScalar(0.42); this.ridge.uniforms.uTop.value.copy(hz).multiplyScalar(0.62);
  }

  onBeforeRender({ t, projScale, camera }) {
    const tg = t + this.timeOffset, n = this.nightU.value, fog = this.scene.fog.density;
    this.sky.mesh.position.copy(camera.position);
    this.sky.uniforms.uTime.value = tg * 5;
    for (const g of [this.lamps, this.carGlow, this.ringGlow, this.roofGlow, this.tsut.glow, this.haruGlow, this.far.glow]) {
      g.uniforms.uProj.value = projScale; g.uniforms.uFog.value = fog;
    }
    this.lamps.uniforms.uGain.value = 0.3 + 1.0 * n;
    this.carGlow.uniforms.uGain.value = 0.6 + 0.7 * n;
    this.ringGlow.uniforms.uGain.value = 0.5 + 0.9 * n;
    this.roofGlow.uniforms.uGain.value = 0.5 + 0.9 * n;
    this.tsut.glow.uniforms.uGain.value = 0.6 + 0.8 * n;
    this.haruGlow.uniforms.uGain.value = 0.6 + 0.8 * n;
    this.far.glow.uniforms.uGain.value = 0.55 + 0.9 * n;
    const lu = this.leds.uniforms; lu.uProj.value = projScale; lu.uFog.value = fog; lu.uTime.value = tg; lu.uGain.value = 0.7 + 0.9 * n;
    this.spillU.value = 0.55 + 0.75 * n;
    this.trees.updateLod(camera.position);
    this.cars.update(tg, this.carGlow.points.geometry.attributes.position.array); this.carGlow.points.geometry.attributes.position.needsUpdate = true;
    this.peds.update(tg); this.pedsNS.update(tg);
    this.streaks.uniforms.uTime.value = tg; this.streaks.uniforms.uFog.value = fog; this.streaks.uniforms.uGain.value = 0.7 + 0.8 * n;
    const vu = this.viaduct.uniforms; vu.uTime.value = tg; vu.uFog.value = fog; vu.uGain.value = 0.45 + 0.35 * n;
    this.farWin.uWinGain.value = 0.28 + 0.42 * n;
    this.panels.mat.color.setRGB(1, 1, 1).multiplyScalar(0.5 + 0.4 * n);
    this.tsut.mat.emissiveIntensity = 0.18 + 0.3 * n;
  }

  /** 環境アニメーション（きらめき）：明滅させる LED の割合。 */
  setAmbientCount(n) { this.ambientCount = n; if (this.leds) this.leds.uniforms.uTwFrac.value = Math.min(1, n / 40000); }
  /** ベース（動画型）のリグには重みがない。スクロール版のサブクラスが上書きする。 */
  setLayoutWeight(w) { this.layoutWeight = w; }
}

export default OsakaScene;
