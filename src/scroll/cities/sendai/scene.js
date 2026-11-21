// cities/sendai/scene.js — スクロール版の仙台シーン。共有の src/scenes・src/lib は変更せず、lib の部品を呼び出して組み立てる（U-11）。
//   Step 1：地形・街路（地面シェーダ）・仮の建物・車・歩行者・街灯・空と時間変化・仮カメラ。ケヤキ・アーケード・七夕飾り・青葉山の作り込みは Step 2〜4。
import * as THREE from 'three';
import { CityScene, Track } from '../../../scenes/city-template.js';
import { createSky } from '../../../lib/sky.js';
import { createFacadeMaterial, BuildingBatch } from '../../../lib/buildings.js';
import { createGlowPoints } from '../../../lib/glow.js';
import { createCars, createPedestrians } from '../../../lib/traffic.js';
import { createMountains } from '../../../lib/terrain.js';
import { makeRng, makeNoise2 } from '../../../lib/rng.js';
import { NOISE } from '../../../lib/glsl.js';
import { PathRig } from '../../rig.js';
import { applyScrollEffects } from '../../city-api.js';
import { PATH } from './camera.js';
import { STREETS, PARKS, PLAZAS, CITY_BOX, BLUFF, AOBA_Z, JOZ_Z, groundY, SUN_DIR as SUN } from './layout.js';

const SUN_DIR = new THREE.Vector3(...SUN).normalize();

// 時間帯パレット（A=夏の金色の夕方 B=夕焼け〜ブルーアワー C=灯りの夜）。快晴（U-13）。橙〜青の対比で、紫に寄せない。
const PAL = [
  { zenith: '#2a66b6', horizon: '#bcd3ec', horizonWarm: '#ffc488', sun: '#ffd6a6', cloudLit: '#ffe3c8', cloudDark: '#8da3c4', fog: '#c8d6e8', sunCol: '#ffcf9a', fogD: 0.00005 },
  { zenith: '#17387a', horizon: '#6f96c8', horizonWarm: '#f7965a', sun: '#ff9a62', cloudLit: '#f2aa8e', cloudDark: '#45588c', fog: '#7f9cc6', sunCol: '#ff9a60', fogD: 0.00006 },
  { zenith: '#060f2c', horizon: '#1b3a6e', horizonWarm: '#3a4f82', sun: '#ff9a60', cloudLit: '#3a4a70', cloudDark: '#0c1630', fog: '#1a3156', sunCol: '#ff9a60', fogD: 0.00007 },
];

const rectOf = (s) => (s.dir === 'x'
  ? { x0: s.a, x1: s.b, z0: s.c - s.w / 2, z1: s.c + s.w / 2 }
  : { x0: s.c - s.w / 2, x1: s.c + s.w / 2, z0: s.a, z1: s.b });
const hit = (r, q, m = 0) => r.x0 - m < q.x1 && r.x1 + m > q.x0 && r.z0 - m < q.z1 && r.z1 + m > q.z0;

export class SendaiScrollScene extends CityScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, opts);
    this.timeOffset = PATH.globalStart;
    this.duration = PATH.duration;
    this.timeline.duration = this.duration; this.timeline.frameCount = Math.round(this.duration * this.timeline.fps);
    this.showTitle = false; this.fadeSec = 0;
    this.fx = opts.fx ?? {};
    this.nightU = { value: 0.1 };
    this.snowU = { value: 0 };           // 夏：facade の積雪は常に 0
    this.ambientCount = 0;
  }

  async build() {
    const rng = makeRng(20260806);       // 七夕（8/6）
    const scene = this.scene;

    // ---- 空・霧・環境マップ
    const P0 = PAL[0];
    const sky = createSky(THREE, { sunDir: SUN_DIR, colors: { ...P0, cloudCover: 0.2 } });
    this.sky = sky; scene.add(sky.mesh);
    scene.fog = new THREE.FogExp2(new THREE.Color(P0.fog), P0.fogD);
    if (this.glRenderer) {
      const envScene = new THREE.Scene();
      envScene.add(new THREE.Mesh(sky.mesh.geometry, sky.material));
      const pm = new THREE.PMREMGenerator(this.glRenderer);
      scene.environment = pm.fromScene(envScene, 0.015, 1, 3000).texture;
      pm.dispose();
    }

    // ---- 太陽（西北西の低い夕日）と静的シャドウ。丘は影を落とさない（市街の西側が丘の影で沈まないように）。
    const sun = new THREE.DirectionalLight(0xffcf9a, 3.3);
    const fc = new THREE.Vector3(-150, 0, 100);
    sun.position.copy(fc).addScaledVector(SUN_DIR, 3000);
    sun.target.position.copy(fc);
    sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
    const sc = sun.shadow.camera;
    sc.left = -820; sc.right = 820; sc.top = 520; sc.bottom = -520; sc.near = 200; sc.far = 6500;
    sun.shadow.bias = -0.0002; sun.shadow.normalBias = 0.9;
    scene.add(sun, sun.target); this.sun = sun;
    this.hemi = new THREE.HemisphereLight(0xdfeaff, 0xc9d1a8, 0.55); scene.add(this.hemi);

    // ---- 地形・地面・遠景
    scene.add(this._buildGround());
    scene.add(this._buildBluff());
    scene.add(this._buildFarMountains());

    // ---- 市街（仮の建物）・街灯・動くもの
    this._buildBlocks(rng);
    this._buildLamps();
    this._buildTraffic(rng);

    // ---- カメラ（通り沿い経路：横は時間キー、縦は折れ線ドリー）
    this.rig = new PathRig(PATH);

    // ---- 時間帯トラック（グローバル 0–7 秒）：昼は短く、灯りの時間を厚くする（U-1）
    const K = (arr) => new Track(arr.map(([t, v]) => ({ t, v })));
    this.tracks = {
      night: K([[0, 0.1], [1.2, 0.3], [2.6, 0.6], [4.2, 0.85], [7, 1]]),
      palette: K([[0, 0], [1.2, 0.5], [3, 1.0], [5, 1.45], [7, 1.85]]),
      sunPower: K([[0, 3.3], [1.5, 2.3], [3, 1.2], [4.5, 0.5], [7, 0.1]]),
      envPower: K([[0, 0.7], [3, 0.5], [7, 0.25]]),
      exposure: K([[0, 1.0], [7, 1.0]]),
      bloom: K([[0, 0.25], [3, 0.4], [7, 0.55]]),
      bloomThreshold: K([[0, 1.4], [7, 1.0]]),
      bloomRadius: K([[0, 0.55], [7, 0.7]]),
      dofAperture: K([[0, 0.6], [7, 0.6]]),
      dofMaxBlur: K([[0, 4], [7, 5]]),
    };
    this.look.grade = { uShadowAmt: 0.3, uVig: 0.3, uSat: 1.06, uGrain: 0.02, uAberr: 0.0006, uHighTint: new THREE.Color(1.03, 1.0, 0.95) };
    this._ca = new THREE.Color(); this._cb = new THREE.Color();

    // ---- 共通の描画負荷対策（タイル分割＋視錐台カリング）と霞。動くもの・描画順を保つ建物の箱は分割しない。
    applyScrollEffects(this, {
      tiled: this.fx.tiled, haze: this.fx.haze,
      tileExclude: [this.cars.mesh, this.peds.mesh, this.boxMesh],
      skyUniforms: this.sky.uniforms,
    });
  }

  // ---------- 地面：街路（断面別）・歩道・遊歩道・公園・広場を 1 枚のシェーダで描く
  _buildGround() {
    const geo = new THREE.PlaneGeometry(24000, 24000, 1, 1); geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, metalness: 0 });
    mat.customProgramCacheKey = () => 'sendai-ground-v1';
    // 小さい順（一般街路）→ アーケード → 青葉通・定禅寺通 の順に描いて、主要な通りが交差点で連続するようにする
    const order = (s) => (s.kind === 0 ? 0 : s.kind === 3 ? 1 : 2);
    const st = [...STREETS].sort((a, b) => order(a) - order(b));
    const uA = st.map((s) => new THREE.Vector4(s.dir === 'x' ? 0 : 1, s.c, s.w, s.kind));
    const uB = st.map((s) => new THREE.Vector4(s.a, s.b, 0, 0));
    const pk = [...PARKS, ...PLAZAS];
    const uP = pk.map((r) => new THREE.Vector4(r.x0, r.x1, r.z0, r.z1));
    const uPk = pk.map((r) => (PLAZAS.includes(r) ? 1 : 0));
    const NST = st.length, NPK = pk.length;
    const uNight = this.nightU;
    const box = CITY_BOX;
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uNight = uNight; shader.uniforms.uStA = { value: uA }; shader.uniforms.uStB = { value: uB };
      shader.uniforms.uPark = { value: uP };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform float uNight; varying vec3 vWP;
          uniform vec4 uStA[${NST}]; uniform vec4 uStB[${NST}]; uniform vec4 uPark[${NPK}];
          ${NOISE}`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          float gRough = 0.85; vec3 gEmis = vec3(0.0); float gBump = 1.0;
          {
            vec2 p = vWP.xz;
            float nz = fbm(p * 0.05), fine = vnoise(p * 1.9);
            float fw = fwidth(p.x) * 1.0 + 0.02;
            // 市街の外側は草地、街区の中（建物の足元）は舗装
            float inCity = step(${box.x0.toFixed(1)}, p.x) * step(p.x, ${box.x1.toFixed(1)}) * step(${box.z0.toFixed(1)}, p.y) * step(p.y, ${box.z1.toFixed(1)});
            vec3 grass = vec3(0.17, 0.25, 0.10) * (0.85 + 0.3 * nz + 0.08 * fine);
            vec3 c = mix(grass, vec3(0.30, 0.30, 0.29) * (0.9 + 0.2 * fine), inCity);
            float surf = -1.0, lat = 99.0, alongRoad = 0.0, kindHit = 0.0;
            for (int i = 0; i < ${NST}; i++) {
              vec4 A = uStA[i], B = uStB[i];
              float along = A.x < 0.5 ? p.x : p.y;
              float off = abs((A.x < 0.5 ? p.y : p.x) - A.y);
              float half_ = A.z * 0.5;
              if (along > B.x && along < B.y && off < half_) {
                float kind = A.w; float s = 0.0;                              // 0=歩道 1=車道 2=緑地帯 3=タイル
                if (kind < 0.5) s = off < half_ - 3.4 ? 1.0 : 0.0;
                else if (kind < 1.5) s = off < 4.0 ? 2.0 : (off < 16.5 ? 1.0 : 0.0);
                else if (kind < 2.5) s = off < 9.0 ? ((off > 2.6 && off < 6.4) ? 2.0 : 3.0) : (off < 17.0 ? 1.0 : 0.0);
                else s = 3.0;
                surf = s; lat = off; alongRoad = along; kindHit = kind;
              }
            }
            if (surf > -0.5) {
              vec3 roadC = mix(vec3(0.075, 0.078, 0.085), vec3(0.17, 0.17, 0.18), smoothstep(0.55, 0.95, nz) * 0.5);
              vec3 walkC = vec3(0.50, 0.49, 0.47) * (0.88 + 0.24 * fine);
              vec3 tileC = vec3(0.56, 0.50, 0.44) * (0.9 + 0.2 * vnoise(p * 0.7));
              vec3 greenC = vec3(0.14, 0.22, 0.08) * (0.9 + 0.25 * fine);
              float lineAt = kindHit < 0.5 ? 0.0 : (kindHit < 1.5 ? 10.25 : 13.0);
              float dash = step(0.5, fract(alongRoad / 8.0)) * (1.0 - smoothstep(0.1, 0.3, abs(lat - lineAt)));
              if (surf < 0.5) c = walkC;
              else if (surf < 1.5) { c = mix(roadC, vec3(0.72), dash * 0.65 * smoothstep(0.3, 0.7, fine)); gRough = 0.5; }
              else if (surf < 2.5) c = greenC;
              else { c = tileC; if (kindHit > 2.5) { float g = step(0.04, abs(fract(p.x / 1.2) - 0.5)) * step(0.04, abs(fract(p.y / 1.2) - 0.5)); c *= 0.9 + 0.1 * g; } }
            }
            for (int j = 0; j < ${NPK}; j++) {
              vec4 R = uPark[j];
              if (p.x > R.x && p.x < R.y && p.y > R.z && p.y < R.w) {
                c = grass * 1.15;
                float path = (1.0 - smoothstep(1.6, 2.4, abs(p.y - 0.5 * (R.z + R.w)))) * 0.9;
                c = mix(c, vec3(0.55, 0.50, 0.42) * (0.9 + 0.2 * fine), path);
              }
            }
            diffuseColor.rgb = c;
            // 夜：街灯の暖色の光だまり（道路沿い）
            float pool = pow(0.5 + 0.5 * cos(6.2831853 * alongRoad / 36.0), 3.0);
            float nearRoad = surf > -0.5 ? (1.0 - smoothstep(18.0, 28.0, lat)) : 0.0;
            gEmis = uNight * vec3(1.0, 0.62, 0.32) * nearRoad * (0.02 + (surf < 1.5 && surf > 0.5 ? 0.05 : 0.025) * pool);
            gBump = surf > 0.5 && surf < 1.5 ? 0.2 : 1.0;
          }`)
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = gRough;')
        .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
          {
            vec2 q = vWP.xz * 0.9; float e = 0.35;
            float n0 = vnoise(q), nx = vnoise(q + vec2(e, 0.0)), nz2 = vnoise(q + vec2(0.0, e));
            vec3 pert = vec3((n0 - nx), 0.0, (n0 - nz2)) * 0.5 * gBump;
            float fade = 1.0 - smoothstep(120.0, 600.0, length(vWP - cameraPosition));
            normal = normalize(normal + (mat3(viewMatrix) * pert) * fade);
          }`)
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += gEmis;');
    };
    const mesh = new THREE.Mesh(geo, mat); mesh.receiveShadow = true; mesh.name = 'ground';
    return mesh;
  }

  // ---------- 青葉山の丘（西）。Step 4 で石垣・木立・城址を足す。
  _buildBluff() {
    const x0 = -1500, x1 = BLUFF.x0, z0 = -750, z1 = 1250, nx = 110, nz = 150;
    const geo = new THREE.PlaneGeometry(x1 - x0, z1 - z0, nx, nz); geo.rotateX(-Math.PI / 2);
    geo.translate((x0 + x1) / 2, 0, (z0 + z1) / 2);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, groundY(pos.getX(i), pos.getZ(i)));
    geo.computeVertexNormals();
    const nrm = geo.attributes.normal, col = new Float32Array(pos.count * 3), noise = makeNoise2(19);
    for (let i = 0; i < pos.count; i++) {
      const h = pos.getY(i), slope = 1 - nrm.getY(i), n = noise.fbm(pos.getX(i) * 0.01, pos.getZ(i) * 0.01, 3);
      const forest = Math.min(1, h / 20), g = 0.85 + 0.3 * n;
      col[i * 3] = (0.17 + (0.09 - 0.17) * forest + slope * 0.25) * g;
      col[i * 3 + 1] = (0.25 + (0.17 - 0.25) * forest + slope * 0.15) * g;
      col[i * 3 + 2] = (0.10 + (0.07 - 0.10) * forest + slope * 0.1) * g;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
    mat.customProgramCacheKey = () => 'sendai-bluff-v1';
    const mesh = new THREE.Mesh(geo, mat); mesh.receiveShadow = true; mesh.castShadow = false; mesh.name = 'bluff';
    mesh.position.y = 0.02;
    return mesh;
  }

  // ---------- 遠景の山並み（北に泉ヶ岳、南西に蔵王、西に奥羽の山並み）。createMountains の形を使い、夏の緑に塗り直す。
  _buildFarMountains() {
    const nA = makeNoise2(51), nB = makeNoise2(77);
    const M = [
      { x: -24000, z: 22000, h: 1550, sx: 6500, sz: 5200 },   // 蔵王方面（南西）
      { x: -9000, z: -19000, h: 1150, sx: 3600, sz: 3200 },   // 泉ヶ岳方面（北〜北北西）
      { x: -22000, z: -3000, h: 850, sx: 4800, sz: 9500 },    // 奥羽の山並み（西）
      { x: -17000, z: 11000, h: 700, sx: 4200, sz: 3800 },
    ];
    const heightFn = (x, z) => {
      let h = 0;
      for (const m of M) h += m.h * Math.exp(-(((x - m.x) / m.sx) ** 2 + ((z - m.z) / m.sz) ** 2));
      const r = Math.hypot(x, z);
      h += (160 + 380 * nA.fbm(x * 0.00018, z * 0.00018, 4)) * Math.min(1, Math.max(0, (r - 2500) / 6500)) * (0.6 + 0.8 * nB.fbm(x * 0.0004, z * 0.0004, 3));
      return h;
    };
    const mesh = createMountains(THREE, { heightFn, y: -4, rings: 240, segs: 400, thA: 1.9, thB: 4.4, snowLine: 99999 });
    // 夏の山肌に塗り直す（頂点色のみ。形は createMountains のもの）
    const pos = mesh.geometry.attributes.position, nrm = mesh.geometry.attributes.normal;
    const col = new Float32Array(pos.count * 3), cn = makeNoise2(31);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i), h = pos.getY(i);
      const slope = 1 - nrm.getY(i), n = cn.fbm(x * 0.0011, z * 0.0011, 4), n2 = cn.fbm(x * 0.006 + 5, z * 0.006, 3);
      const rock = Math.min(1, Math.max(0, (slope - 0.22) / 0.3)) * Math.min(1, Math.max(0, (h - 500) / 500));
      const hi = Math.min(1, Math.max(0, (h - 900) / 500));
      const base = [0.14 + 0.05 * hi + 0.03 * n, 0.22 - 0.02 * hi + 0.03 * n, 0.10 + 0.02 * hi];
      const rk = [0.34, 0.32, 0.30];
      const k = 0.88 + 0.24 * n2;
      for (let c = 0; c < 3; c++) col[i * 3 + c] = (base[c] + (rk[c] - base[c]) * rock * 0.7) * k;
    }
    mesh.geometry.setAttribute('color', new THREE.BufferAttribute(col, 3));
    return mesh;
  }

  // ---------- 街区：街路に囲まれた区画を割って建物を置く（Step 1 は仮置き。Step 2〜3 で通り沿いの低層部・店先・アーケード側壁を作り込む）
  _buildBlocks(rng) {
    const facade = createFacadeMaterial(THREE, { uNight: this.nightU, uSnow: this.snowU });
    const batch = new BuildingBatch(THREE, facade, 4000);
    const strips = STREETS.map(rectOf), keep = [...PARKS, ...PLAZAS];
    // 区画の境界：通りの端（全通りの x / z 境界）
    const xs = new Set([CITY_BOX.x0, CITY_BOX.x1]), zs = new Set([CITY_BOX.z0, CITY_BOX.z1]);
    for (const s of STREETS) { const r = rectOf(s); if (s.dir === 'z') { xs.add(r.x0); xs.add(r.x1); } else { zs.add(r.z0); zs.add(r.z1); } }
    const X = [...xs].sort((a, b) => a - b), Z = [...zs].sort((a, b) => a - b);
    let seed = 1;
    for (let i = 0; i < X.length - 1; i++) for (let j = 0; j < Z.length - 1; j++) {
      const xa = X[i], xb = X[i + 1], za = Z[j], zb = Z[j + 1];
      if (xb - xa < 9 || zb - za < 9) continue;
      const nx = Math.max(1, Math.round((xb - xa) / 27)), nz = Math.max(1, Math.round((zb - za) / 25));
      for (let a = 0; a < nx; a++) for (let b = 0; b < nz; b++) {
        const lx0 = xa + ((xb - xa) * a) / nx, lx1 = xa + ((xb - xa) * (a + 1)) / nx;
        const lz0 = za + ((zb - za) * b) / nz, lz1 = za + ((zb - za) * (b + 1)) / nz;
        const lot = { x0: lx0, x1: lx1, z0: lz0, z1: lz1 };
        if (strips.some((s) => hit(lot, s, -0.6)) || keep.some((k) => hit(lot, k, 2))) continue;
        const cx = (lx0 + lx1) / 2, cz = (lz0 + lz1) / 2;
        if (cx < BLUFF.x0 - 20) continue;
        const dAoba = Math.abs(cz - AOBA_Z), dJoz = Math.abs(cz - JOZ_Z), dIchi = Math.abs(cx);
        let hMin = 16, hMax = 44;                                              // 一般の街区
        if (dAoba < 62) { hMin = 38; hMax = 95; }                              // 青葉通沿い：事務所・商業ビル
        else if (dJoz < 58) { hMin = 28; hMax = 66; }                          // 定禅寺通沿い
        if (dIchi < 36 && cz > 20 && cz < 215) { hMin = 14; hMax = 26; }       // 一番町アーケード沿い（低層〜中層の商店街）
        if (cx > 180 && cz > 60 && cz < 330) { hMin = 55; hMax = 120; }        // 駅周辺
        if (cx < -240) { hMin = 10; hMax = 28; }                               // 西（公園・住宅寄り）
        const h = hMin + (hMax - hMin) * Math.pow(rng(), 1.3);
        const kind = h > 60 ? (rng() < 0.6 ? 2 : 0) : h > 30 ? rng.pick([0, 2, 4]) : rng.pick([1, 3, 4, 4]);
        const w = lx1 - lx0 - 1.2, d = lz1 - lz0 - 1.2;
        if (w < 6 || d < 6) continue;
        batch.add(cx, 0, cz, w, h, d, kind, seed++ + rng(), 0.35 + 0.55 * rng());
      }
    }
    this.boxes = batch;
    this.boxMesh = batch.build({ castShadow: true });
    this.scene.add(this.boxMesh);
  }

  // ---------- 街灯（光点）：通りの両縁に 36 m 間隔
  _buildLamps() {
    const P = [];
    for (const s of STREETS) {
      if (s.kind === 3) continue;
      const half = s.w / 2 - 1.2;
      const n = Math.floor((s.b - s.a) / 36);
      for (let i = 0; i <= n; i++) for (const side of [-1, 1]) {
        const t = s.a + i * 36 + (side > 0 ? 18 : 0);
        if (t > s.b) continue;
        P.push(s.dir === 'x' ? [t, 9, s.c + side * half] : [s.c + side * half, 9, t]);
      }
    }
    const pos = new Float32Array(P.length * 3), col = new Float32Array(P.length * 3), siz = new Float32Array(P.length);
    P.forEach((q, i) => { pos.set(q, i * 3); col.set([3.0, 1.9, 0.9], i * 3); siz[i] = 1.1; });
    this.lamps = createGlowPoints(THREE, { positions: pos, colors: col, sizes: siz, fogDensity: 0.00005, minPx: 1.4, maxPx: 22 });
    this.scene.add(this.lamps.points);
    this.lampCount = P.length;
  }

  // ---------- 車と歩行者（札幌の部品を流用。歩行者が主で、車は控えめ。密度は札幌並み＝U-8）
  _buildTraffic(rng) {
    const lanes = [];
    for (const s of STREETS) {
      if (s.kind === 3) continue;
      const len = s.b - s.a;
      const offs = s.kind === 0 ? [3.4] : s.kind === 1 ? [6.0, 12.4] : [10.4, 14.6];
      for (const o of offs) for (const dir of [1, -1]) {
        const n = Math.max(1, Math.round(len / 70));
        for (let k = 0; k < n; k++) {
          const sgn = s.dir === 'x' ? (dir > 0 ? -1 : 1) : (dir > 0 ? 1 : -1);
          lanes.push({ alongX: s.dir === 'x', dir, fixed: s.c + sgn * o, speed: rng.range(6, 12), off: rng.range(0, 4000), len, min: s.a, ph: rng() });
        }
      }
    }
    this.cars = createCars(THREE, lanes);
    this.scene.add(this.cars.mesh);
    const N = lanes.length;
    const pos = new Float32Array(N * 4 * 3), col = new Float32Array(N * 4 * 3), siz = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) for (let k = 0; k < 4; k++) {
      const o = (i * 4 + k) * 3, head = k < 2;
      if (head) { col[o] = 3.0; col[o + 1] = 2.9; col[o + 2] = 2.3; } else { col[o] = 2.4; col[o + 1] = 0.1; col[o + 2] = 0.07; }
      siz[i * 4 + k] = head ? 0.7 : 0.5;
    }
    this.carGlow = createGlowPoints(THREE, { positions: pos, colors: col, sizes: siz, fogDensity: 0.00004, minPx: 1.4, maxPx: 12 });
    this.scene.add(this.carGlow.points);
    this.carCount = N;

    // 歩行者（東西方向の歩道・遊歩道。南北のアーケード内は Step 3）
    const walkers = [];
    const add = (z, x0, x1, n) => { for (let i = 0; i < n; i++) walkers.push({ x0, x1, z: z + rng.range(-0.8, 0.8), dir: rng() < 0.5 ? 1 : -1, speed: rng.range(0.9, 1.5), off: rng.range(0, 800), ph: rng() }); };
    add(AOBA_Z - 21.5, -420, 300, 55); add(AOBA_Z + 21.5, -420, 300, 55);
    for (const z of [-3, 3, -19.5, 19.5]) add(JOZ_Z + z, -235, 105, 30);
    add(115 - 6, -330, -10, 12); add(115 + 6, -330, -10, 12); add(115 - 6, 10, 330, 12); add(115 + 6, 10, 330, 12);
    this.peds = createPedestrians(THREE, walkers);
    this.scene.add(this.peds.mesh);
    this.pedCount = walkers.length;
  }

  // ---------- 時刻（グローバル）に応じた空・光・夜の度合い
  applyTime(t) {
    const pv = this.sampleTrack('palette', t, 0);
    const i0 = Math.min(1, Math.floor(pv)), f = Math.min(1, pv - i0);
    const A = PAL[i0], B = PAL[Math.min(2, i0 + 1)];
    const u = this.sky.uniforms, L = (key, uni) => { this._ca.set(A[key]); this._cb.set(B[key]); uni.value.lerpColors(this._ca, this._cb, f); };
    L('zenith', u.uZenith); L('horizon', u.uHorizon); L('horizonWarm', u.uHorizonWarm); L('sun', u.uSunColor); L('cloudLit', u.uCloudLit); L('cloudDark', u.uCloudDark);
    this._ca.set(A.fog); this._cb.set(B.fog); this.scene.fog.color.lerpColors(this._ca, this._cb, f);
    this.scene.fog.density = A.fogD + (B.fogD - A.fogD) * f;
    this._ca.set(A.sunCol); this._cb.set(B.sunCol); this.sun.color.lerpColors(this._ca, this._cb, f);
    this.nightU.value = this.sampleTrack('night', t, 0.1);
    const sp = this.sampleTrack('sunPower', t, 3);
    this.sun.intensity = sp; u.uSunStrength.value = Math.min(1, sp / 2);
    this.hemi.intensity = 0.55 * Math.max(0.25, 1 - this.nightU.value * 1.0);
    this.scene.environmentIntensity = this.sampleTrack('envPower', t, 0.6);
  }

  onBeforeRender({ t, projScale, camera }) {
    const tg = t + this.timeOffset;
    this.sky.mesh.position.copy(camera.position);
    this.sky.uniforms.uTime.value = tg * 5;
    const fog = this.scene.fog.density;
    for (const g of [this.lamps, this.carGlow]) { g.uniforms.uProj.value = projScale; g.uniforms.uFog.value = fog; }
    const n = this.nightU.value;
    this.lamps.uniforms.uGain.value = 0.08 + 1.0 * n;
    this.carGlow.uniforms.uGain.value = 0.5 + 0.7 * n;
    this.cars.update(tg, this.carGlow.points.geometry.attributes.position.array);
    this.carGlow.points.geometry.attributes.position.needsUpdate = true;
    this.peds.update(tg);
  }

  /** 環境アニメーション（吹き流し）の束数。Step 3 で描画数に反映する。 */
  setAmbientCount(n) { this.ambientCount = n; }

  /** 縦画面経路の重み（0=横, 1=縦）。 */
  setLayoutWeight(w) { this.rig.weight = w; }
}
