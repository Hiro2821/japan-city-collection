// sapporo.js — SAPPORO CINEMATIC JOURNEY（実在の名所を巡る約55秒）
//
// 構成（グローバル時刻）:
//   01 全景 0–5 / 02 札幌駅・JRタワー 5–11 / 03 大通公園・さっぽろテレビ塔 11–18 / 04 札幌市時計台 18–25 /
//   05 狸小路・すすきの 25–32 / 06 サッポロファクトリー 32–39 / 07 藻岩山の夜景 39–49 / ENDING 49–55
//   現在実装済み: 03（?shot=odori）。他のショットは未実装（SHOTS[].ready=false）。
//
// ■ 地理・モデルの扱い: src/geo.js 参照。位置は条・丁目の住所グリッドからの配置（測量データではない）。
//   ランドマークは特徴を踏まえた手続き生成の概略モデルであり、正確な再現ではない。
import * as THREE from 'three';
import { CityScene, Track, CameraRig } from './city-template.js';
import { makeRng } from '../lib/rng.js';
import { NOISE } from '../lib/glsl.js';
import { createSky } from '../lib/sky.js';
import { createFacadeMaterial, BuildingBatch, BeamSet, makeGableGeometry, makeTankGeometry } from '../lib/buildings.js';
import { createMountains, createFarPlain, sapporoHeight } from '../lib/terrain.js';
import { buildTVTower } from './sapporo-tower.js';
import { createGlowPoints, createSnow } from '../lib/glow.js';
import { createCars, createPedestrians } from '../lib/traffic.js';
import { PITCH, TV_TOWER, xLine, zLineNorth, zLineSouth, blockZNorth, blockZSouth } from '../geo.js';

export const SHOTS = [
  { id: 'overview', name: '札幌の全景', start: 0, end: 5, ready: false },
  { id: 'station', name: '札幌駅・JRタワー', start: 5, end: 11, ready: false },
  { id: 'odori', name: '大通公園・さっぽろテレビ塔', start: 11, end: 18, ready: true },
  { id: 'clocktower', name: '札幌市時計台', start: 18, end: 25, ready: false },
  { id: 'susukino', name: '狸小路・すすきの', start: 25, end: 32, ready: false },
  { id: 'factory', name: 'サッポロファクトリー', start: 32, end: 39, ready: false },
  { id: 'moiwa', name: '藻岩山からの夜景', start: 39, end: 49, ready: false },
  { id: 'ending', name: 'ENDING', start: 49, end: 55, ready: false },
];

const SUN_DIR = new THREE.Vector3(-0.66, 0.25, 0.71).normalize(); // 冬の南西の低い夕日（仰角約14°）

// 時間帯パレット（A=夕方の黄金色 B=ブルーアワー C=夜）。紫に寄らないよう青〜橙の対比で構成。
const PAL = [
  { zenith: '#24508f', horizon: '#a9c6e8', horizonWarm: '#ffbd80', sun: '#ffd2a2', cloudLit: '#ffdcc0', cloudDark: '#8296b8', fog: '#bfd0e6', sunCol: '#ffc88f', fogD: 0.000062 },
  { zenith: '#0f2a5c', horizon: '#4a78b4', horizonWarm: '#f29a58', sun: '#ff9d62', cloudLit: '#eaa68e', cloudDark: '#3b4d7c', fog: '#5a7fb0', sunCol: '#ff9a60', fogD: 0.00007 },
  { zenith: '#050b20', horizon: '#12305c', horizonWarm: '#243e66', sun: '#ff9a60', cloudLit: '#3a4a70', cloudDark: '#0c1630', fog: '#122646', sunCol: '#ff9a60', fogD: 0.00008 },
];

export class SapporoScene extends CityScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, opts);
    this.shot = SHOTS.find((s) => s.id === (opts.shot || 'odori')) ?? SHOTS[2];
    this.timeOffset = this.shot.start;
    this.duration = this.shot.end - this.shot.start;
    this.timeline.duration = this.duration; this.timeline.frameCount = Math.round(this.duration * this.timeline.fps);
    this.showTitle = this.shot.id === 'ending';
    this.fadeSec = 0.35;
    this.nightU = { value: 0.1 };
    this.snowU = { value: 1 };
  }

  async build() {
    const rng = makeRng(20261115);
    const scene = this.scene;

    // ---- 空・霧
    const P0 = PAL[0];
    const sky = createSky(THREE, { sunDir: SUN_DIR, colors: { ...P0, cloudCover: 0.36 } });
    this.sky = sky; scene.add(sky.mesh);
    scene.fog = new THREE.FogExp2(new THREE.Color(P0.fog), P0.fogD);

    // 環境マップ（反射・間接光）。夕方パレットの空から1回だけ生成し、強度は時刻で変える。
    if (this.glRenderer) {
      const envScene = new THREE.Scene();
      envScene.add(new THREE.Mesh(sky.mesh.geometry, sky.material));
      const pm = new THREE.PMREMGenerator(this.glRenderer);
      scene.environment = pm.fromScene(envScene, 0.015, 1, 3000).texture;
      pm.dispose();
    }

    // ---- 太陽光と静的シャドウ（ショットごとに影の範囲を絞って解像度を確保）
    const sun = new THREE.DirectionalLight(0xffc88f, 3.4);
    const fc = this.shot.id === 'odori' ? new THREE.Vector3(-330, 0, 0) : new THREE.Vector3(-500, 0, -250);
    sun.position.copy(fc).addScaledVector(SUN_DIR, 3000);
    sun.target.position.copy(fc);
    sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
    const sc = sun.shadow.camera;
    const ext = this.shot.id === 'odori' ? [560, 260] : [1700, 520];
    sc.left = -ext[0]; sc.right = ext[0]; sc.top = ext[1]; sc.bottom = -ext[1]; sc.near = 200; sc.far = 6500;
    sun.shadow.bias = -0.0002; sun.shadow.normalBias = 0.9;
    scene.add(sun, sun.target); this.sun = sun;
    this.hemi = new THREE.HemisphereLight(0xe6eeff, 0xd9c3a2, 0.5); scene.add(this.hemi);

    // ---- 地形・地面
    scene.add(createFarPlain(THREE, { size: 90000, y: -40 }));
    scene.add(createMountains(THREE, { heightFn: sapporoHeight(), y: -4 }));
    scene.add(this._buildGround());

    // ---- 市街・公園・ランドマーク・動くもの
    this._buildCity(rng);
    this._buildTVTower();
    this._buildParkAndStreet(rng);
    this._buildTraffic(rng);

    this.snow = createSnow(THREE, { count: 14000, box: 150, fall: 3.0, wind: [2.2, 0.8], size: 0.06, bright: 0.55 });
    scene.add(this.snow.points);

    // ---- カメラ経路（グローバル時刻）。区間内で自然に減速して着地する。
    const warp = (u) => { const a = u * u * (3 - 2 * u), b = 1 - (1 - u) * (1 - u); return 0.5 * a + 0.5 * b; };
    const lin = (u) => u;   // 区間ごとに止まらない（全体の加減速は timeWarp が担当）
    this.rig = new CameraRig([
      // 公園の回廊内（z≦約52）を通ってビル屋上との衝突を避け、塔の南側を通過しながら西へ振り返る。
      // 数値最適化：最大速度≈89 m/s・最大回転≈37°/s・通過区間は連続的に減速。
      { t: 11, pos: [-420, 40, 14], target: [-140, 54, -2], fov: 38, ease: lin },
      { t: 12.78, pos: [-313, 50, 32], target: [-100, 103, -20], fov: 34, ease: lin },
      { t: 14.36, pos: [-211, 62, 44], target: [-108, 76, -33], fov: 35, ease: lin },
      { t: 15.99, pos: [-111, 77, 54], target: [-95, 82, -25], fov: 36, ease: lin },
      { t: 17.63, pos: [-61, 85, 39], target: [-109, 85, -13], fov: 37, ease: lin },
      { t: 18, pos: [-64, 97, 45], target: [-188, 91, -69], fov: 38, ease: lin },
    ], { shakeAmp: 0.1, shakeSeed: 4.0, timeWarp: warp });

    // ---- 全編共通の時間帯トラック（グローバル時刻 0–55）
    const K = (arr) => new Track(arr.map(([t, v]) => ({ t, v })));
    this.tracks = {
      night: K([[0, 0.04], [11, 0.1], [18, 0.22], [25, 0.55], [32, 0.8], [39, 1], [55, 1]]),
      palette: K([[0, 0], [11, 0.12], [18, 0.4], [25, 0.85], [32, 1.2], [39, 2], [55, 2]]),
      sunPower: K([[0, 3.8], [18, 3.1], [25, 1.5], [32, 0.5], [39, 0], [55, 0]]),
      envPower: K([[0, 0.75], [18, 0.62], [25, 0.46], [32, 0.36], [39, 0.2], [55, 0.2]]),
      exposure: K([[0, 1.0], [55, 1.0]]),
      bloom: K([[0, 0.22], [18, 0.3], [32, 0.45], [55, 0.55]]),
      bloomThreshold: K([[0, 1.5], [55, 1.0]]),
      bloomRadius: K([[0, 0.5], [55, 0.7]]),
      dofAperture: K([[0, 0.5], [55, 0.6]]),
      dofMaxBlur: K([[0, 4], [55, 5]]),
    };
    this.look.grade = { uShadowAmt: 0.3, uVig: 0.3, uSat: 1.04, uGrain: 0.022, uAberr: 0.0007, uHighTint: new THREE.Color(1.03, 1.0, 0.96) };
    this._ca = new THREE.Color(); this._cb = new THREE.Color();
  }

  // ---------- 地面：雪・車道・歩道・横断歩道・公園の園路を1枚のシェーダで描く
  _buildGround() {
    const geo = new THREE.PlaneGeometry(12000, 12000, 1, 1); geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, metalness: 0 });
    mat.customProgramCacheKey = () => 'sapporo-ground-v2';
    const uNight = this.nightU;
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uNight = uNight;
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying vec3 vWP;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;');
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform float uNight; varying vec3 vWP;
          ${NOISE}`)
        .replace('#include <color_fragment>', `#include <color_fragment>
          float gRough = 0.85; vec3 gEmis = vec3(0.0); float gBump = 1.0;
          {
            vec2 p = vWP.xz;
            float cx = abs(mod(p.x, 108.0) - 54.0);                    // 南北の通りの中心線までの距離
            float zz = abs(p.y) - 62.5;
            float cz = abs(mod(zz + 54.0, 108.0) - 54.0);               // 東西の通りの中心線までの距離
            float rd = min(cx, cz);
            float fw = fwidth(rd) * 1.2 + 0.02;
            float asphalt = 1.0 - smoothstep(7.0 - fw, 7.0 + fw, rd);
            float lotEdge = smoothstep(10.0 - fw, 10.0 + fw, rd);        // 歩道の外側（敷地）
            float walk = (1.0 - lotEdge) - asphalt;                      // 歩道
            float bank = smoothstep(5.6, 6.9, rd) * (1.0 - smoothstep(6.9, 8.3, rd));  // 路肩の雪堤

            float nz = fbm(p * 0.05);
            float fine = vnoise(p * 1.9);
            bool inPark = abs(p.y) < 52.5 && p.x > -1350.0 && p.x < -54.0 && !(cx < 10.0);
            vec3 snow = vec3(0.94, 0.95, 0.972) * (0.93 + 0.12 * nz + 0.04 * fine);
            if (!inPark) snow *= 0.94;
            // 車道：除雪された濡れた路面（わだちに薄い雪）
            vec3 roadC = mix(vec3(0.055, 0.058, 0.064), vec3(0.20, 0.205, 0.22), smoothstep(0.58, 0.95, nz) * 0.6);
            float alongRoad = (cx < cz) ? p.y : p.x;
            float lateral = (cx < cz) ? (cx) : (cz);
            roadC += vec3(0.05) * smoothstep(3.0, 4.2, lateral) * (1.0 - smoothstep(4.2, 6.5, lateral));   // 路肩寄りの雪
            // 車線の破線（雪でかすれる）
            float dash = step(0.5, fract(alongRoad / 8.0)) * (1.0 - smoothstep(0.12, 0.3, lateral)) * smoothstep(0.35, 0.7, fine);
            roadC = mix(roadC, vec3(0.7), dash * 0.7);
            // 横断歩道
            float zebraA = step(cx, 7.0) * step(10.8, cz) * step(cz, 14.6) * step(0.5, fract(p.x / 1.1));
            float zebraB = step(cz, 7.0) * step(10.8, cx) * step(cx, 14.6) * step(0.5, fract(p.y / 1.1));
            float zebra = max(zebraA, zebraB) * smoothstep(0.25, 0.6, fine + 0.15);
            roadC = mix(roadC, vec3(0.78), zebra * 0.85);
            vec3 walkC = vec3(0.62, 0.63, 0.67) * (0.88 + 0.24 * fine);        // 踏み固められた歩道
            vec3 c = snow;
            c = mix(c, walkC, walk);
            c = mix(c, vec3(0.93, 0.945, 0.97) * (0.95 + 0.08 * fine), bank * 0.9);
            c = mix(c, roadC, asphalt);
            // 公園の園路（踏み固められた雪の道）と テレビ塔の広場
            if (inPark) {
              float path = (1.0 - smoothstep(3.8, 4.8, abs(p.y))) + (1.0 - smoothstep(1.6, 2.4, abs(abs(p.y) - 30.0))) * 0.8;
              c = mix(c, vec3(0.64, 0.65, 0.69) * (0.9 + 0.2 * fine), clamp(path, 0.0, 1.0));
              float plaza = 1.0 - smoothstep(24.0, 32.0, length(p - vec2(-90.0, 0.0)));
              c = mix(c, vec3(0.58, 0.58, 0.61) * (0.92 + 0.14 * fine), plaza * 0.8);
            }
            diffuseColor.rgb = c;
            gRough = mix(0.9, 0.34, asphalt);
            gBump = (1.0 - asphalt * 0.85) * (1.0 - walk * 0.5);
            // 夜：街灯の暖色の光だまり
            float phase = 0.5 + 0.5 * cos(6.2831853 * alongRoad / 42.0);
            float pool = pow(phase, 3.0);
            float spill = (1.0 - smoothstep(6.0, 40.0, rd)) * (0.5 + 0.5 * pool);
            gEmis = uNight * vec3(1.0, 0.6, 0.3) * (spill * 0.028 + asphalt * pool * 0.05);
          }`)
        .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = gRough;')
        .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
          {
            vec2 q = vWP.xz * 0.9;
            float e = 0.35;
            float n0 = vnoise(q), nx = vnoise(q + vec2(e, 0.0)), nz2 = vnoise(q + vec2(0.0, e));
            vec3 pert = vec3((n0 - nx), 0.0, (n0 - nz2)) * 0.8 * gBump;
            float fade = 1.0 - smoothstep(120.0, 600.0, length(vWP - cameraPosition));
            normal = normalize(normal + (mat3(viewMatrix) * pert) * fade);
          }`)
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += gEmis;');
    };
    const mesh = new THREE.Mesh(geo, mat); mesh.receiveShadow = true; return mesh;
  }

  // ---------- 街区：建物アーキタイプで多様化（段付き・L字・基壇+塔・切妻の低層・並び建ち）
  _buildCity(rng) {
    const facade = createFacadeMaterial(THREE, { uNight: this.nightU, uSnow: this.snowU });
    const boxes = new BuildingBatch(THREE, facade, 110000);
    const roofs = new BuildingBatch(THREE, facade, 30000, makeGableGeometry(THREE));
    this.boxes = boxes;
    const tanks = new BuildingBatch(THREE, facade, 12000, makeTankGeometry(THREE));

    const dist = (x, z, a, b) => Math.hypot(x - a, z - b);
    const density = (cx, cz) => {
      const odori = Math.exp(-(((Math.abs(cz) - 112) / 170) ** 2)) * (cx > -1500 && cx < 400 ? 1 : 0.3);
      const station = Math.exp(-((dist(cx, cz, -300, -600) / 420) ** 2));
      const susukino = Math.exp(-((dist(cx, cz, -430, 520) / 380) ** 2));
      const r = dist(cx, cz, -450, -100);
      return Math.max(odori, station, susukino) * 0.85 + 0.25 * Math.exp(-((r / 1700) ** 2));
    };
    const pickKind = (dn) => {
      const r = rng();
      if (dn > 0.55) return r < 0.32 ? 0 : r < 0.55 ? 2 : r < 0.75 ? 4 : r < 0.85 ? 1 : 3;
      if (dn > 0.3) return r < 0.25 ? 0 : r < 0.4 ? 2 : r < 0.6 ? 4 : r < 0.7 ? 1 : 3;
      return r < 0.12 ? 0 : r < 0.18 ? 4 : r < 0.25 ? 1 : 3;
    };
    const fhOf = (kind) => (kind === 3 ? 2.9 : kind === 4 ? 3.9 : kind === 2 ? 3.8 : 3.6);

    // 屋上：パラペット（縁の立ち上がり）・空調機・階段室・貯水タンク・アンテナ。近景のみ細部を足す。
    const roofGear = (x, y, z, w, d, seed, lit) => {
      const near = Math.abs(z) < 700 && x > -1500 && x < 500;
      if (near && w > 12 && d > 12) {
        const t = 0.35, ph = 0.9;
        boxes.add(x, y, z - d / 2 + t / 2, w, ph, t, 6, seed, lit);
        boxes.add(x, y, z + d / 2 - t / 2, w, ph, t, 6, seed, lit);
        boxes.add(x - w / 2 + t / 2, y, z, t, ph, d - 2 * t, 6, seed, lit);
        boxes.add(x + w / 2 - t / 2, y, z, t, ph, d - 2 * t, 6, seed, lit);
      }
      const k = rng.int(2, near ? 5 : 3);
      for (let i = 0; i < k; i++) {
        const px = x + rng.range(-w * 0.3, w * 0.3), pz = z + rng.range(-d * 0.3, d * 0.3);
        const r = rng();
        if (r < 0.34) boxes.add(px, y, pz, rng.range(2, Math.min(7, w * 0.35)), rng.range(1.2, 2.2), rng.range(1.5, Math.min(5, d * 0.35)), 5, seed + i * 0.13, lit);   // 空調室外機
        else if (r < 0.58) boxes.add(px, y, pz, rng.range(3, 5), rng.range(2.6, 3.4), rng.range(3, 5), 0, seed + i * 0.17, lit, 0, [3, 3.2, 0.3, 0.3]);                // 階段室
        else if (r < 0.82) { const dd = rng.range(2, 3.6); tanks.add(px, y, pz, dd, rng.range(2.2, 3.6), dd, 5, seed + i * 0.11, lit); }                              // 貯水タンク
        else boxes.add(px, y, pz, 0.18, rng.range(5, 12), 0.18, 6, seed, lit);                                                                                      // アンテナ
      }
    };

    let farFlat = false;
    const addBuilding = (x, z, w, d, floors, kind, dn) => {
      const seed = rng(), lit = rng();
      const fh = fhOf(kind);
      const h = Math.max(6, floors * fh);
      if (kind === 3 && floors <= 3 && !farFlat && rng() < 0.7) {                     // 低層住宅：切妻屋根
        boxes.add(x, 0, z, w, h * 0.78, d, 3, seed, lit);
        const rh = Math.min(w, d) * rng.range(0.28, 0.4);
        const longX = w >= d;
        roofs.add(x, h * 0.78, z, (longX ? d : w) + 0.8, rh, (longX ? w : d) + 0.8, 3, seed, lit, longX ? Math.PI / 2 : 0, [2.6, 2.9, 0.5, 0.5]);
        return;
      }
      if (floors >= 11 && w > 30 && d > 30) {                                // 基壇 + 塔
        const podF = rng.int(3, 4), podH = podF * 4.2;
        boxes.add(x, 0, z, w, podH, d, rng() < 0.5 ? 4 : 0, seed, lit);
        const tw = w * rng.range(0.55, 0.8), td = d * rng.range(0.5, 0.75);
        const tx = x + (w - tw) * rng.range(-0.3, 0.3), tz = z + (d - td) * rng.range(-0.3, 0.3);
        const th = h - podH;
        boxes.add(tx, podH, tz, tw, th, td, kind === 4 ? 2 : kind, seed + 0.31, lit);
        if (rng() < 0.5) boxes.add(tx, h, tz, tw * 0.6, rng.range(4, 9), td * 0.6, 0, seed + 0.7, lit, 0, [4, 3.6, 0.8, 0.3]);
        roofGear(tx, h, tz, tw, td, seed, lit);
        return;
      }
      if (floors >= 6 && rng() < 0.4) {                                      // 上層の段付き（セットバック）
        const lowF = Math.ceil(floors * 0.65), lowH = lowF * fh;
        boxes.add(x, 0, z, w, lowH, d, kind, seed, lit);
        const sb = rng.range(3, 6);
        boxes.add(x + rng.range(-1.5, 1.5), lowH, z + rng.range(-1.5, 1.5), w - sb * 2, h - lowH, d - sb * 2, kind, seed + 0.2, lit);
        roofGear(x, h, z, w - sb * 2, d - sb * 2, seed, lit);
        return;
      }
      if (floors >= 5 && w > 28 && d > 28 && rng() < 0.45) {                 // L字（低い翼棟を付ける）
        boxes.add(x, 0, z, w, h, d, kind, seed, lit);
        const ww = w * rng.range(0.35, 0.5), wd = d * rng.range(0.4, 0.6), wh = Math.max(6, (floors - rng.int(2, 3)) * fh);
        const sx = rng() < 0.5 ? 1 : -1, sz = rng() < 0.5 ? 1 : -1;
        boxes.add(x + sx * (w / 2 + ww / 2 - 0.5), 0, z + sz * (d / 2 - wd / 2), ww, wh, wd, kind === 2 ? 0 : kind, seed + 0.4, lit);
        roofGear(x, h, z, w, d, seed, lit);
        return;
      }
      boxes.add(x, 0, z, w, h, d, kind, seed, lit);
      if (h > 12) roofGear(x, h, z, w, d, seed, lit);
    };

    const fillBlock = (cx, cz, hx, hz) => {
      const r = dist(cx, cz, -450, -100);
      if (r > 4600) return;
      const dn = density(cx, cz);
      const far = r > 2600;
      let floorsMean = 2.6 + 8.5 * dn * dn + 1.4 * dn;
      const pat = rng();
      const gap = () => rng.range(2.5, 5.5);
      farFlat = far;
      if (far) {                                                                    // 住宅地：小さな建物の格子
        // 距離に応じて段階的に簡略化：近い側は2×2、遠くは街区ごとに1棟（細かい建物の点在による地平線のちらつきを避ける）
        const nx = r < 3400 ? 2 : 1, nz = r < 3400 ? 2 : 1;
        const lw = (hx * 2) / nx, ld = (hz * 2) / nz;
        const f0 = rng.range(2.5, 4.5);
        for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
          const f = Math.max(2, Math.round(f0 + rng.range(-0.6, 0.6)));
          addBuilding(cx - hx + (i + 0.5) * lw, cz - hz + (j + 0.5) * ld, lw - rng.range(2, 4), ld - rng.range(2, 4), f, 3, 0.1);
        }
        return;
      }
      const baseF = () => Math.max(2, Math.round(floorsMean * (0.55 + Math.pow(rng(), 1.5) * 1.1) * (rng() < 0.07 && dn > 0.5 ? 1.7 : 1)));
      if (pat < 0.28 + 0.2 * dn) {                                                  // 街区いっぱいの大型ビル
        addBuilding(cx, cz, hx * 2 - rng.range(3, 8), hz * 2 - rng.range(3, 8), Math.min(22, baseF() + 1), pickKind(dn), dn);
      } else if (pat < 0.55) {                                                      // 2分割
        const alongX = rng() < 0.5, k = rng.range(0.38, 0.62);
        if (alongX) {
          const w1 = hx * 2 * k - 2, w2 = hx * 2 * (1 - k) - 2;
          addBuilding(cx - hx + w1 / 2 + 1, cz, w1, hz * 2 - gap(), baseF(), pickKind(dn), dn);
          addBuilding(cx + hx - w2 / 2 - 1, cz, w2, hz * 2 - gap(), baseF(), pickKind(dn), dn);
        } else {
          const d1 = hz * 2 * k - 2, d2 = hz * 2 * (1 - k) - 2;
          addBuilding(cx, cz - hz + d1 / 2 + 1, hx * 2 - gap(), d1, baseF(), pickKind(dn), dn);
          addBuilding(cx, cz + hz - d2 / 2 - 1, hx * 2 - gap(), d2, baseF(), pickKind(dn), dn);
        }
      } else if (pat < 0.75) {                                                      // 並び建ち（間口の狭い店舗ビル）
        const n = rng.int(3, 5); const lw = (hx * 2) / n;
        const rowZ = rng() < 0.5 ? -1 : 1; const dd = rng.range(0.55, 0.75) * hz * 2;
        for (let i = 0; i < n; i++) addBuilding(cx - hx + (i + 0.5) * lw, cz + rowZ * (hz - dd / 2), lw - rng.range(0.4, 1.4), dd, Math.max(2, baseF() + rng.int(-1, 1)), pickKind(dn), dn);
        addBuilding(cx, cz - rowZ * (hz - (hz * 2 - dd) / 2), hx * 2 - 3, hz * 2 - dd - 3, Math.max(2, baseF() - 1), pickKind(dn * 0.6), dn);
      } else {                                                                      // 4分割
        const lw = hx, ld = hz;
        for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++)
          addBuilding(cx - hx + (i + 0.5) * lw, cz - hz + (j + 0.5) * ld, lw - gap(), ld - gap(), baseF(), pickKind(dn), dn);
      }
    };

    for (let j = -30; j <= 28; j++) {
      const cx = PITCH * j;
      if (!(j >= -12 && j <= -1)) fillBlock(cx, 0, 44, 50.5);                      // 大通の列（公園区間は除く）
      for (let n = 0; n <= 19; n++) {
        for (const side of [-1, 1]) {
          const cz = side < 0 ? blockZNorth(n) : blockZSouth(n);
          fillBlock(cx, cz, 44, 44);
        }
      }
    }
    this.scene.add(boxes.build(), roofs.build(), tanks.build());
  }

  // ---------- さっぽろテレビ塔（詳細は sapporo-tower.js。概略モデルであり測量に基づく再現ではない）
  _buildTVTower() {
    const t = buildTVTower(this.scene, TV_TOWER);
    this.towerSteel = t.steel; this.towerSteel2 = t.steelDark; this.deckMat = t.deckMat; this.beacon = t.beacon; this.baseMats = t.baseMats; this.bolM = t.bolM;
  }

  // ---------- 大通公園の冬木立・街路樹・街灯
  _buildParkAndStreet(rng) {
    const bark = new THREE.MeshStandardMaterial({ color: 0x433d38, roughness: 0.95 });
    const snowM = new THREE.MeshStandardMaterial({ color: 0xf2f5fa, roughness: 0.75 });
    const trees = new BeamSet(THREE, bark), caps = new BeamSet(THREE, snowM);
    // 再帰的に枝分かれ：幹→主枝(3-4)→枝(2-3)→小枝(2)。枝は先細り、上向きの太い枝には雪が積もる。
    const grow = (p, dir, len, r, depth, spread) => {
      const e = [p[0] + dir[0] * len, p[1] + dir[1] * len, p[2] + dir[2] * len];
      const rEnd = r * (depth === 0 ? 0.55 : 0.4);
      trees.add(p, e, r, rEnd);
      if (depth <= 2 && dir[1] > 0.35 && r > 0.045) caps.add([p[0], p[1] + r * 0.8, p[2]], [e[0], e[1] + rEnd * 0.8, e[2]], r * 0.7, rEnd * 0.6);
      if (depth >= 3) return;
      const nb = depth === 0 ? rng.int(3, 4) : rng.int(2, 3);
      const az0 = rng() * Math.PI * 2;
      for (let k = 0; k < nb; k++) {
        const az = az0 + (k / nb) * Math.PI * 2 + rng.range(-0.5, 0.5);
        const el = Math.min(1.25, spread * rng.range(0.7, 1.3));           // 幹からの開き角
        const d = [Math.cos(az) * Math.sin(el), Math.cos(el) * 0.9 + 0.1, Math.sin(az) * Math.sin(el)];
        const dl = Math.hypot(...d);
        const f = depth === 0 ? 1 : rng.range(0.6, 1);
        const st = [p[0] + (e[0] - p[0]) * f, p[1] + (e[1] - p[1]) * f, p[2] + (e[2] - p[2]) * f];
        grow(st, d.map((v) => v / dl), len * rng.range(0.55, 0.72), rEnd * rng.range(0.7, 0.9), depth + 1, spread * 1.12);
      }
    };
    const addTree = (px, pz) => {
      const h = rng.range(8, 13.5);
      const lean = [rng.range(-0.12, 0.12), 1, rng.range(-0.12, 0.12)]; const ll = Math.hypot(...lean);
      grow([px, 0, pz], lean.map((v) => v / ll), h * 0.4, rng.range(0.3, 0.42), 0, rng.range(0.5, 0.75));
      // 太い主枝の下枝（低い位置から横へ）
      for (let k = 0; k < 2; k++) {
        const az = rng() * 6.28, y0 = h * rng.range(0.18, 0.32);
        grow([px, y0, pz], [Math.cos(az) * 0.8, 0.55, Math.sin(az) * 0.8], h * 0.26, 0.12, 1, 0.8);
      }
    };
    for (let j = -12; j <= -1; j++) {
      const cx = PITCH * j;
      for (const zr of [-42, -22, 22, 42]) for (let x = cx - 40; x <= cx + 40; x += 11.5) {
        const px = x + rng.range(-2, 2), pz = zr + rng.range(-2.5, 2.5);
        if (Math.hypot(px - TV_TOWER.x, pz - TV_TOWER.z) < 30) continue;
        if (Math.abs(((px % 108) + 108) % 108 - 54) < 11) continue;               // 横断する通りは避ける
        addTree(px, pz);
      }
    }
    for (const s of [-1, 1]) for (let x = -1330; x <= -60; x += 15) {            // 大通の街路樹（歩道）
      if (Math.abs(((x % 108) + 108) % 108 - 54) < 12) continue;
      addTree(x + rng.range(-1.5, 1.5), s * (62.5 + 8.6));
      addTree(x + 7 + rng.range(-1.5, 1.5), s * (62.5 - 8.6));
    }
    this.scene.add(trees.build({ castShadow: true, sides: 5 }), caps.build({ castShadow: false, sides: 4 }));

    // 街灯：ポール + 光点
    const poleMat = new THREE.MeshStandardMaterial({ color: 0x4a4f57, roughness: 0.6, metalness: 0.6 });
    const poles = new BeamSet(THREE, poleMat);
    const headM = new THREE.MeshStandardMaterial({ color: 0x3a3e45, roughness: 0.5, metalness: 0.5, emissive: new THREE.Color(1.0, 0.72, 0.4), emissiveIntensity: 0 });
    this.lampHeadM = headM;
    const heads = new BeamSet(THREE, headM);
    const lampPos = [], lampCol = [], lampSize = [];
    const addLamp = (x, z, h = 9, withPole = false) => {
      lampPos.push(x, h, z);
      const k = rng.range(0.85, 1.15);
      lampCol.push(3.4 * k, 2.0 * k, 0.9 * k); lampSize.push(1.3);
      if (withPole) { poles.add([x, 0, z], [x, h, z], 0.13, 0.08); poles.add([x, h - 0.2, z], [x + 0.9, h + 0.15, z], 0.05, 0.04); heads.add([x + 0.55, h + 0.02, z], [x + 1.25, h + 0.02, z], 0.22, 0.18); }
    };
    const XR = 2400, ZR = 1900;
    for (let j = -23; j <= 23; j++) {                                              // 南北の通り
      const x = xLine(j);
      for (let z = -ZR; z <= ZR; z += 44) { const near = Math.abs(z) < 260 && x > -1400 && x < 200; addLamp(x - 9.2, z + rng.range(-2, 2), 9, near); addLamp(x + 9.2, z + 22, 9, near); }
    }
    for (let n = 0; n <= 17; n++) for (const s of [-1, 1]) {                       // 東西の通り
      const z = s * (62.5 + PITCH * n);
      for (let x = -XR; x <= XR; x += 44) { const near = n === 0 && x > -1400 && x < 200; addLamp(x + rng.range(-2, 2), z - 9.2, 9, near); addLamp(x + 22, z + 9.2, 9, near); }
    }
    for (let x = -1330; x <= -110; x += 26) for (const zr of [-6.5, 6.5]) addLamp(x, zr, 4.6, true);   // 公園の園路灯
    this.scene.add(poles.build({ castShadow: false, sides: 5 }), heads.build({ castShadow: false, sides: 6 }));
    this.lamps = createGlowPoints(THREE, { positions: new Float32Array(lampPos), colors: new Float32Array(lampCol), sizes: new Float32Array(lampSize), fogDensity: 0.00004, minPx: 1.6, maxPx: 14 });
    this.scene.add(this.lamps.points);
  }

  // ---------- 車（左側通行）と歩行者
  _buildTraffic(rng) {
    const lanes = [];
    const N = 1500;
    for (let i = 0; i < N; i++) {
      const alongX = rng() < 0.5, dir = rng() < 0.5 ? 1 : -1;
      let fixed;
      if (alongX) {
        const n = rng.int(0, 14), s = rng() < 0.5 ? -1 : 1;
        fixed = s * (62.5 + PITCH * n) + (dir > 0 ? -3.4 : 3.4);              // 東進=北側車線
      } else {
        fixed = xLine(rng.int(-20, 18)) + (dir > 0 ? 3.4 : -3.4);             // 南進=東側車線
      }
      lanes.push({ alongX, dir, fixed, speed: rng.range(6, 13), off: rng.range(0, 5000), len: alongX ? 4800 : 3800, min: alongX ? -2400 : -1900, ph: rng() });
    }
    this.cars = createCars(THREE, lanes);
    this.scene.add(this.cars.mesh);
    const pos = new Float32Array(N * 4 * 3), col = new Float32Array(N * 4 * 3), siz = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) for (let k = 0; k < 4; k++) {
      const o = (i * 4 + k) * 3, head = k < 2;
      if (head) { col[o] = 3.0; col[o + 1] = 2.9; col[o + 2] = 2.3; } else { col[o] = 2.4; col[o + 1] = 0.1; col[o + 2] = 0.07; }
      siz[i * 4 + k] = head ? 0.7 : 0.5;
    }
    this.carGlow = createGlowPoints(THREE, { positions: pos, colors: col, sizes: siz, fogDensity: 0.00004, minPx: 1.4, maxPx: 12 });
    this.scene.add(this.carGlow.points);

    const walkers = [];
    for (let i = 0; i < 260; i++) {
      const lane = rng.pick([-3, -1.2, 1.2, 3, -31, 31, -29, 29]);
      walkers.push({ x0: -1320, x1: -110, z: lane + rng.range(-0.4, 0.4), dir: rng() < 0.5 ? 1 : -1, speed: rng.range(1.1, 1.6), off: rng.range(0, 2400), ph: rng() });
    }
    for (let i = 0; i < 40; i++) walkers.push({ x0: -135, x1: -52, z: rng.pick([-26, -20, -16, 16, 20, 26]) + rng.range(-0.8, 0.8), dir: rng() < 0.5 ? 1 : -1, speed: rng.range(0.9, 1.5), off: rng.range(0, 800), ph: rng() });
    this.peds = createPedestrians(THREE, walkers);
    this.scene.add(this.peds.mesh);
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
    this.hemi.intensity = 0.5 * Math.max(0.22, 1 - this.nightU.value * 1.05);
    this.scene.environmentIntensity = this.sampleTrack('envPower', t, 0.6);
  }

  onBeforeRender({ t, projScale, camera }) {
    const tg = t + this.timeOffset;
    this.sky.mesh.position.copy(camera.position);
    this.sky.uniforms.uTime.value = tg * 5;
    const fog = this.scene.fog.density;
    for (const g of [this.lamps, this.carGlow, this.beacon]) { g.uniforms.uProj.value = projScale; g.uniforms.uFog.value = fog; }
    const n = this.nightU.value;
    this.lamps.uniforms.uGain.value = 0.08 + 1.0 * n;
    this.carGlow.uniforms.uGain.value = 0.5 + 0.7 * n;
    this.beacon.uniforms.uGain.value = 0.15 + 0.85 * Math.pow(0.5 + 0.5 * Math.sin(tg * Math.PI * 1.25), 3.0);
    this.towerSteel.emissiveIntensity = 0.03 + 0.4 * Math.max(0, n - 0.25);
    this.towerSteel2.emissiveIntensity = this.towerSteel.emissiveIntensity;
    this.lampHeadM.emissiveIntensity = 0.2 + 2.4 * n;
    this.deckMat.emissiveIntensity = 0.25 + 1.0 * n;
    for (const m of this.baseMats) m.emissiveIntensity = 0.25 + 0.9 * n;
    this.bolM.emissiveIntensity = 0.1 + 2.0 * n;

    this.cars.update(tg, this.carGlow.points.geometry.attributes.position.array);
    this.carGlow.points.geometry.attributes.position.needsUpdate = true;
    this.peds.update(tg);

    const s = this.snow.uniforms;
    s.uTime.value = tg; s.uCam.value.copy(camera.position); s.uProj.value = projScale; s.uFog.value = fog;
  }
}

export default SapporoScene;
