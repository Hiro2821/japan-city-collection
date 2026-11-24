// cities/kyoto/scene.js — スクロール版の京都シーン。共有の src/scenes・src/lib は変更せず、lib の部品を呼び出して組み立てる（U-11）。
//   晩秋・日没の少し後 → 夜。紅葉のライトアップ、町家と提灯の灯り、舞い散る紅葉。影は使わない（初回フレームと定常は同じ負荷）。
import * as THREE from 'three';
import { CityScene, Track } from '../../../scenes/city-template.js';
import { createSky } from '../../../lib/sky.js';
import { PathRig } from '../../rig.js';
import { applyScrollEffects } from '../../city-api.js';
import { createFacadeMaterial, BuildingBatch } from '../../../lib/buildings.js';
import { createGlowPoints } from '../../../lib/glow.js';
import { createCars, createPedestrians } from '../../../lib/traffic.js';
import { makeRng } from '../../../lib/rng.js';
import { PATH, CAM_XZ } from './camera.js';
import { H, ROUTE, MAIN_PATH, STREETS, PLAZAS, RIVER, CITY, SUN_DIR as SUN, YASAKA_TOWER, KIYOMIZU, KODAIJI, TOWER_K } from './layout.js';
import { buildGround, buildRiver, buildBridge } from './ground.js';
import { lineHouses, fillBlock, buildMachiya, onRoad } from './machiya.js';
import { lanternGeometry, lanternMaterial, stoneLanternGeometry, instancedAt, hangLanterns } from './lanterns.js';
import { buildMomiji, buildEvergreens } from './trees.js';
import { buildTemples } from './temples.js';
import { createLeaves } from './leaves.js';
import { makeFarMaterial, buildFarCity, buildKyotoTower, buildRidges } from './far.js';

const SUN_DIR = new THREE.Vector3(...SUN).normalize();
const segDist = (x, z, ax, az, bx, bz) => { const dx = bx - ax, dz = bz - az, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz))); return Math.hypot(x - (ax + dx * t), z - (az + dz * t)); };
const routeDist = (x, z) => { let d = 1e9; for (let i = 0; i < ROUTE.length - 1; i++) d = Math.min(d, segDist(x, z, ROUTE[i][0], ROUTE[i][1], ROUTE[i + 1][0], ROUTE[i + 1][1])); return d; };

// 時間帯パレット（A=日没の少し後：地平線に橙の残照 B=ブルーアワー C=夜）。晩秋の盆地：薄い霞。
const PAL = [
  { zenith: '#1c2a66', horizon: '#6a6c9e', horizonWarm: '#ff8a4a', sun: '#ff7a3a', cloudLit: '#b07a90', cloudDark: '#2a2c5c', fog: '#46588c', sunCol: '#c8906c', fogD: 0.00005 },
  { zenith: '#0d1a4a', horizon: '#343c78', horizonWarm: '#c0584a', sun: '#d0605a', cloudLit: '#5a5080', cloudDark: '#141a3c', fog: '#232e60', sunCol: '#8088c0', fogD: 0.00006 },
  { zenith: '#050a22', horizon: '#142048', horizonWarm: '#2a3058', sun: '#3a4a7a', cloudLit: '#222c50', cloudDark: '#070d20', fog: '#0d1a3c', sunCol: '#5a70b0', fogD: 0.00007 },
];

export class KyotoScrollScene extends CityScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, opts);
    this.timeOffset = PATH.globalStart; this.duration = PATH.duration;
    this.timeline.duration = this.duration; this.timeline.frameCount = Math.round(this.duration * this.timeline.fps);
    this.showTitle = false; this.fadeSec = 0; this.fx = opts.fx ?? {};
    this.nightU = { value: 0.5 }; this.snowU = { value: 0 }; this.spillU = { value: 0.5 }; this.timeU = { value: 0 };
    this.ambientCount = 0;
  }

  async build() {
    const scene = this.scene, P0 = PAL[0], rng = makeRng(20261124);
    const sky = createSky(THREE, { sunDir: SUN_DIR, colors: { ...P0, cloudCover: 0.15 } }); this.sky = sky; scene.add(sky.mesh);
    scene.fog = new THREE.FogExp2(new THREE.Color(P0.fog), P0.fogD);
    if (this.glRenderer) {
      const envScene = new THREE.Scene(); envScene.add(new THREE.Mesh(sky.mesh.geometry, sky.material));
      const pm = new THREE.PMREMGenerator(this.glRenderer); scene.environment = pm.fromScene(envScene, 0.015, 1, 3000).texture; pm.dispose();
    }
    const sun = new THREE.DirectionalLight(0xc8906c, 0.4); sun.position.copy(SUN_DIR).multiplyScalar(3000); scene.add(sun, sun.target); this.sun = sun;
    this.hemi = new THREE.HemisphereLight(0x7f88c8, 0x30222a, 0.8); scene.add(this.hemi);

    // 地面・川・橋
    const gr = buildGround(this.nightU, this.spillU); this.ground = gr; scene.add(gr.mesh, gr.far);
    this.river = buildRiver(this.nightU, this.spillU, this.timeU); scene.add(this.river);
    this.bridge = buildBridge(); scene.add(this.bridge.mesh);

    // 町家
    const houses = [];
    const keepOut = (x, z) => !(Math.abs(x - 456) < 26 && Math.abs(z) < 30) && !(Math.hypot(x - YASAKA_TOWER[0], z - YASAKA_TOWER[1]) < 22) && !(Math.hypot(x - KODAIJI.c[0], z - KODAIJI.c[1]) < 50) && !(x > 1090 && z > 640) && routeDist(x, z) > 8 && CAM_XZ.every((c) => Math.hypot(x - c[0], z - c[1]) > 17);
    fillBlock(houses, rng, [60, -300, 440, 640], { keep: keepOut });
    fillBlock(houses, rng, [-106, -300, -52, 100], { keep: keepOut, density: 0.95 });
    for (let i = 3; i < MAIN_PATH.length - 1; i++) lineHouses(houses, rng, [MAIN_PATH[i], MAIN_PATH[i + 1]], 4.5, { keep: keepOut, depth: [8, 12] });
    lineHouses(houses, rng, [[760, 290], [800, 400], [840, 410]], 3.0, { keep: keepOut, depth: [8, 12] });
    this.machiya = buildMachiya(houses, rng, this.nightU, this.spillU); scene.add(this.machiya.mesh);
    const occ = new Set(); for (const h of houses) occ.add(`${Math.round(h.x / 9)},${Math.round(h.z / 9)}`);
    const free = (x, z) => !occ.has(`${Math.round(x / 9)},${Math.round(z / 9)}`) && !onRoad(x, z, 4, false) && routeDist(x, z) > 14 && CAM_XZ.every((c) => Math.hypot(x - c[0], z - c[1]) > 18);

    // 近代の建物（鴨川の西：河原町・四条通沿い。低め）
    const facade = createFacadeMaterial(THREE, { uNight: this.nightU, uSnow: this.snowU }); this.facade = facade;
    const batch = new BuildingBatch(THREE, facade, 1200); let seed = 1;
    for (let x = -500; x < -60; x += 27) for (let z = -300; z < 320; z += 27) {
      if (onRoad(x + 13, z + 13, 4) || rng() < 0.18) continue;
      const w = 22 + rng() * 4, d = 22 + rng() * 4, h = 10 + 20 * Math.pow(rng(), 1.5);
      batch.add(x + 13, 0, z + 13, w, h, d, h > 20 ? 2 : [0, 3][Math.floor(rng() * 2)], seed++ + rng(), 0.5 + 0.45 * rng());
    }
    this.boxMesh = batch.build({ castShadow: false }); scene.add(this.boxMesh); this.modernCount = batch.n;

    // 寺社
    this.temples = buildTemples(); scene.add(this.temples.mesh);

    // 木（紅葉・常緑）
    const M = [], E = [];
    const tryM = (x, z, s, lit) => { if (free(x, z) && x > -60 && x < 1500) M.push([x, z, s, rng(), lit]); };
    for (let n = 0; n < 340; n++) tryM(610 + rng() * 230, 100 + rng() * 200, 0.9 + 0.5 * rng(), 0.5);            // 円山公園
    for (let n = 0; n < 90; n++) tryM(562 + rng() * 140, -70 + rng() * 160, 0.9 + 0.5 * rng(), 0.7);              // 八坂神社の境内
    for (let n = 0; n < 50; n++) tryM(880 + rng() * 80, 280 + rng() * 80, 0.9 + 0.4 * rng(), 0.8);               // 高台寺
    for (let i = 3; i < MAIN_PATH.length - 1; i++) { const [ax, az] = MAIN_PATH[i], [bx, bz] = MAIN_PATH[i + 1], L = Math.hypot(bx - ax, bz - az), tx = (bx - ax) / L, tz = (bz - az) / L; for (let s = 0; s < L; s += 9 + 6 * rng()) for (const sd of [-1, 1]) { const o = 12 + 10 * rng(); tryM(ax + tx * s - tz * sd * o, az + tz * s + tx * sd * o, 0.9 + 0.5 * rng(), 0.7); } }
    for (let n = 0; n < 700; n++) { const a = rng() * 6.283, r = 110 * Math.sqrt(rng()); tryM(1187 + Math.cos(a) * r, 796 + Math.sin(a) * r, 1.0 + 0.6 * rng(), 1.0); }    // 清水の谷（赤の面積が最大）
    for (let n = 0; n < 500; n++) tryM(950 + rng() * 520, 500 + rng() * 520, 1.0 + 0.7 * rng(), 0.55);            // 東山の斜面
    for (let n = 0; n < 40; n++) tryM(100 + rng() * 300, -140 + rng() * 6, 0.8 + 0.3 * rng(), 0.3);              // 新橋通
    for (let n = 0; n < 700; n++) { const x = 900 + rng() * 650, z = 400 + rng() * 800; if (free(x, z) && H(x, z) > 40) E.push([x, z, 1.0 + 0.8 * rng(), rng()]); }
    this.momiji = buildMomiji(M, this.nightU); this.momiji.meshes.forEach((m) => scene.add(m));
    this.evergreen = buildEvergreens(E); scene.add(this.evergreen.mesh);

    // 提灯・石灯籠
    const LT = [], SL = [];
    hangLanterns(LT, rng, [[34, 0], [446, 0]], 9.2, 7, 3.4);
    hangLanterns(LT, rng, [[250, -260], [250, 300]], 3.4, 6, 3.0);
    hangLanterns(LT, rng, [[150, -128], [420, -128]], 3.0, 6, 3.0);
    hangLanterns(LT, rng, [[-78, -300], [-78, 70]], 1.8, 5, 3.0);
    hangLanterns(LT, rng, [[350, 120], [350, 400]], 3.0, 6, 3.0);
    for (let i = 3; i < MAIN_PATH.length - 1; i++) hangLanterns(LT, rng, [MAIN_PATH[i], MAIN_PATH[i + 1]], 3.4, 7, 3.2);
    hangLanterns(LT, rng, [[460, 0], [562, 0]], 8, 6, 3.0);
    for (let i = 0; i < ROUTE.length - 1; i++) { const [ax, az] = ROUTE[i], [bx, bz] = ROUTE[i + 1]; if (ax < 560) continue; const L = Math.hypot(bx - ax, bz - az), tx = (bx - ax) / L, tz = (bz - az) / L; for (let s = 6; s < L; s += 14) for (const sd of [-1, 1]) { const x = ax + tx * s - tz * sd * 6.5, z = az + tz * s + tx * sd * 6.5; SL.push([x, z, H(x, z), 1.0, rng() * 6.28]); } }
    this.lanternMesh = instancedAt(lanternGeometry(), lanternMaterial(), LT, 'lanterns'); scene.add(this.lanternMesh);
    const stoneMat = new THREE.MeshStandardMaterial({ color: 0x4a463e, roughness: 0.9 }); stoneMat.customProgramCacheKey = () => 'kyoto-stone-v1';
    this.stoneLanterns = instancedAt(stoneLanternGeometry(), stoneMat, SL, 'stone-lanterns'); scene.add(this.stoneLanterns);

    // 光点：町家の窓・提灯・灯籠・ライトアップの照明
    const pos = [], col = [], siz = [];
    for (const [x, y, z, h] of this.machiya.lit) for (let k = 0; k < 3; k++) { pos.push(x + (rng() - 0.5) * 3, y + (k === 2 ? 3.2 : 0) + rng() * 0.6, z + (rng() - 0.5) * 3); const w = rng(); if (w < 0.7) col.push(2.5, 1.5, 0.65); else col.push(2.6, 2.2, 1.5); siz.push(0.7 + rng() * 0.6); }
    const winN = siz.length;
    for (const l of LT) { pos.push(l[0], l[2], l[1]); col.push(3.4, 1.4, 0.4); siz.push(0.9); }
    for (const l of SL) { pos.push(l[0], l[2] + 1.0, l[1]); col.push(2.6, 1.5, 0.6); siz.push(0.7); }
    for (const [x, y, z, k] of this.temples.lit) { pos.push(x, y, z); col.push(3.2 * k, 1.6 * k, 0.6 * k); siz.push(3.5); }
    this.lights = createGlowPoints(THREE, { positions: new Float32Array(pos), colors: new Float32Array(col), sizes: new Float32Array(siz), fogDensity: 0.00005, minPx: 1.4, maxPx: 16 });
    scene.add(this.lights.points); this.lightCount = siz.length; this.winCount = winN;
    // 街灯（四条通・河原町）
    const lp = [], lc = [], ls = [];
    for (let x = -400; x < 446; x += 40) { if (Math.abs(x) < 38) continue; for (const sd of [-1, 1]) { lp.push(x, 6, sd * 11); lc.push(2.8, 2.1, 1.3); ls.push(0.9); } }
    for (let z = -380; z < 380; z += 40) for (const sd of [-1, 1]) { lp.push(-190 + sd * 13, 6, z); lc.push(2.8, 2.1, 1.3); ls.push(0.9); }
    this.lamps = createGlowPoints(THREE, { positions: new Float32Array(lp), colors: new Float32Array(lc), sizes: new Float32Array(ls), fogDensity: 0.00005, minPx: 1.4, maxPx: 16 }); scene.add(this.lamps.points);

    // 車・歩行者
    this._buildTraffic(rng);

    // 遠景：盆地の街区・京都タワー・駅・山並み
    const fm = makeFarMaterial(rng); this.farMat = fm.mat; this.farWin = fm.uniforms;
    const farBatch = new BuildingBatch(THREE, this.farMat, 16000);
    this.far = buildFarCity(rng, farBatch); farBatch.add(TOWER_K.x - 40, 0, TOWER_K.z + 120, 470, 52, 60, 2, 777.7, 0.5);
    this.farMesh = farBatch.build({ castShadow: false }); scene.add(this.farMesh, this.far.glow.points);
    this.kTower = buildKyotoTower(); scene.add(this.kTower.mesh, this.kTower.glow.points);
    this.ridges = buildRidges(); scene.add(this.ridges.group);
    this.leaves = createLeaves(); scene.add(this.leaves.points);

    this.rig = new PathRig(PATH);
    const K = (arr) => new Track(arr.map(([t, v]) => ({ t, v })));
    this.tracks = {
      night: K([[0, 0.5], [2, 0.7], [4, 0.88], [7, 1]]),
      palette: K([[0, 0], [2.5, 0.7], [5, 1.4], [7, 1.9]]),
      sunPower: K([[0, 0.4], [3, 0.15], [7, 0.05]]), envPower: K([[0, 0.55], [7, 0.2]]), exposure: K([[0, 1.0], [7, 1.0]]),
      bloom: K([[0, 0.45], [3, 0.6], [7, 0.75]]), bloomThreshold: K([[0, 1.0], [7, 0.85]]), bloomRadius: K([[0, 0.6], [7, 0.75]]),
      dofAperture: K([[0, 0.6], [7, 0.6]]), dofMaxBlur: K([[0, 4], [7, 5]]),
    };
    this.look.grade = { uShadowAmt: 0.3, uVig: 0.22, uSat: 1.06, uGrain: 0.02, uAberr: 0.0006, uHighTint: new THREE.Color(1.04, 1.0, 0.94) };
    this._ca = new THREE.Color(); this._cb = new THREE.Color();

    applyScrollEffects(this, { tiled: this.fx.tiled, haze: this.fx.haze, tileExclude: [gr.mesh, gr.far, this.farMesh, this.temples.mesh, this.kTower.mesh, ...this.momiji.meshes, this.cars.mesh, ...this.pedMeshes.map((p) => p.mesh), this.river, this.bridge.mesh, ...this.ridges.group.children], skyUniforms: this.sky.uniforms });
    this._hazePoints();
  }

  _buildTraffic(rng) {
    const lanes = [];
    const add = (alongX, fixed, min, len, n) => { for (const dir of [1, -1]) for (let k = 0; k < n; k++) lanes.push({ alongX, dir, fixed: fixed + (dir > 0 ? -1 : 1) * (alongX ? -1 : 1) * 2.4, speed: rng.range(5, 9), off: rng.range(0, 4000), len, min, ph: rng() }); };
    add(true, 0, -420, 866, 9); add(false, -190, -400, 800, 6); add(false, -48, -560, 1160, 4); add(false, 48, -560, 1160, 4);
    this.cars = createCars(THREE, lanes); this.scene.add(this.cars.mesh); this.carCount = lanes.length;
    const N = lanes.length, cp = new Float32Array(N * 12), cc = new Float32Array(N * 12), cs = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) for (let k = 0; k < 4; k++) { const o = (i * 4 + k) * 3, head = k < 2; if (head) { cc[o] = 3.0; cc[o + 1] = 2.9; cc[o + 2] = 2.3; } else { cc[o] = 2.4; cc[o + 1] = 0.1; cc[o + 2] = 0.07; } cs[i * 4 + k] = head ? 0.7 : 0.5; }
    this.carGlow = createGlowPoints(THREE, { positions: cp, colors: cc, sizes: cs, fogDensity: 0.00005, minPx: 1.4, maxPx: 12 }); this.scene.add(this.carGlow.points);
    const mk = (n, x0, x1, zs) => { const w = []; for (let i = 0; i < n; i++) w.push({ x0, x1, z: zs[0] + rng() * (zs[1] - zs[0]), dir: rng() < 0.5 ? 1 : -1, speed: rng.range(0.7, 1.3), off: rng.range(0, 800), ph: rng() }); return w; };
    this.pedMeshes = []; this.pedCount = 0;
    const addMesh = (walkers, x, y, z, yaw, tilt) => { const p = createPedestrians(THREE, walkers); p.mesh.position.set(x, y, z); p.mesh.rotation.order = 'YZX'; p.mesh.rotation.set(0, yaw, tilt); p.mesh.updateMatrix(); this.scene.add(p.mesh); this.pedMeshes.push(p); this.pedCount += walkers.length; };
    addMesh(mk(200, -400, 446, [-9, -4.5]).concat(mk(200, -400, 446, [4.5, 9])), 0, 0.0, 0, 0, 0);          // 四条通の歩道
    addMesh(mk(120, 34, 446, [-1.5, 1.5]), 0, 0, 0, 0, 0);
    for (let i = 2; i < MAIN_PATH.length - 1; i++) {
      const [ax, az] = MAIN_PATH[i], [bx, bz] = MAIN_PATH[i + 1], L = Math.hypot(bx - ax, bz - az), ha = H(ax, az), hb = H(bx, bz);
      addMesh(mk(Math.round(L / 3.2), 0, L, [-1.6, 1.6]), ax, ha + 0.1, az, -Math.atan2(bz - az, bx - ax), Math.atan2(hb - ha, L));
    }
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
    this.nightU.value = this.sampleTrack('night', t, 0.5);
    const sp = this.sampleTrack('sunPower', t, 0.4); this.sun.intensity = sp; u.uSunStrength.value = Math.min(1, sp / 2);
    this.hemi.intensity = 0.8 * Math.max(0.3, 1 - this.nightU.value * 0.6);
    this.scene.environmentIntensity = this.sampleTrack('envPower', t, 0.5);
    this._ca.set(A.horizon); this._cb.set(B.horizon); const hz = this._ca.lerp(this._cb, f); this.ridges.uniforms.uBody.value.copy(hz).multiplyScalar(0.42);
  }

  onBeforeRender({ t, projScale, camera }) {
    const tg = t + this.timeOffset, n = this.nightU.value, fog = this.scene.fog.density;
    this.sky.mesh.position.copy(camera.position); this.sky.uniforms.uTime.value = tg * 5; this.timeU.value = tg;
    this.spillU.value = 0.9 + 1.2 * n;
    const flick = 1 + 0.06 * Math.sin(tg * 1.7) + 0.03 * Math.sin(tg * 4.3);                            // 提灯のゆるい息づかい（±8%）
    for (const g of [this.lights, this.lamps, this.far.glow, this.kTower.glow]) { g.uniforms.uProj.value = projScale; g.uniforms.uFog.value = fog; }
    this.lights.uniforms.uGain.value = (0.45 + 1.0 * n) * flick; this.lamps.uniforms.uGain.value = 0.3 + 1.0 * n; this.far.glow.uniforms.uGain.value = 0.55 + 0.9 * n; this.kTower.glow.uniforms.uGain.value = 0.8 + 0.6 * n;
    this.temples.mat.emissiveIntensity = 0.12 + 0.55 * n; this.kTower.mat.emissiveIntensity = 0.3 + 0.5 * n; this.farWin.uWinGain.value = 0.12 + 0.2 * n;
    this.lanternMesh.material.emissiveIntensity = (0.7 + 0.9 * n) * flick;
    this.momiji.update(camera, 260);
    const lu = this.leaves.uniforms; lu.uTime.value = tg; lu.uCam.value.copy(camera.position); lu.uProj.value = projScale; lu.uGain.value = 0.4 + 0.3 * n;
    this.carGlow.uniforms.uProj.value = projScale; this.carGlow.uniforms.uFog.value = fog; this.carGlow.uniforms.uGain.value = 0.6 + 0.7 * n;
    this.cars.update(tg, this.carGlow.points.geometry.attributes.position.array); this.carGlow.points.geometry.attributes.position.needsUpdate = true;
    for (const p of this.pedMeshes) p.update(tg);
  }

  setAmbientCount(n) { this.ambientCount = n; this.leaves.setCount(n); }
  setLayoutWeight(w) { this.rig.weight = w; }
}
