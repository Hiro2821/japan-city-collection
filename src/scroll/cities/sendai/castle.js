// cities/sendai/castle.js — D 区間：広瀬川（終盤に上空から見える要素・橋）、青葉山の森、城址の平場・石垣・伊達政宗騎馬像（シルエットのみ＝U-4）、遠方の街の灯り。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RIVER_X, BLUFF, PLATEAU, PLATEAU_Y, AOBA_Z, groundY, CITY_BOX } from './layout.js';

const colorize = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set(c, i * 3); g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); return g; };

/** 広瀬川：水面の帯（空と灯りを映す）。幅 36 m、南北に長い。 */
export function buildRiver() {
  const geo = new THREE.PlaneGeometry(36, 2600, 1, 1); geo.rotateX(-Math.PI / 2); geo.translate(RIVER_X, 0.06, 250);
  const mat = new THREE.MeshStandardMaterial({ color: 0x0b1a2a, roughness: 0.05, metalness: 0.0, envMapIntensity: 1.4, emissive: new THREE.Color(0.03, 0.075, 0.15), polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  mat.customProgramCacheKey = () => 'sendai-river-v1';
  const m = new THREE.Mesh(geo, mat); m.name = 'river'; m.receiveShadow = false;
  return m;
}

/** 橋（大橋に相当）：青葉通の延長。床板・高欄・橋灯。戻り値 { mesh, lights } */
export function buildBridge() {
  const x0 = RIVER_X - 24, x1 = RIVER_X + 24, w = 46, y = 0.35;
  const parts = [];
  const box = (cx, cy, cz, sx, sy, sz, c) => parts.push(colorize(new THREE.BoxGeometry(sx, sy, sz).translate(cx, cy, cz), c));
  box(RIVER_X, y, AOBA_Z, x1 - x0, 0.7, w, [0.10, 0.10, 0.11]);                              // 床板（アスファルト色）
  for (const s of [-1, 1]) {
    box(RIVER_X, y + 0.9, AOBA_Z + s * (w / 2 - 0.2), x1 - x0, 1.0, 0.35, [0.5, 0.5, 0.48]);   // 高欄
    for (let x = x0 + 4; x < x1; x += 14) box(x, y + 0.2, AOBA_Z + s * (w / 2 - 0.2), 1.2, 2.2, 1.0, [0.45, 0.45, 0.43]);   // 橋脚の見え
  }
  const lights = [];
  for (const s of [-1, 1]) for (let x = x0 + 3; x <= x1; x += 9) lights.push([x, 7.5, AOBA_Z + s * (w / 2 - 1.0)]);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 });
  mat.customProgramCacheKey = () => 'sendai-bridge-v1';
  const mesh = new THREE.Mesh(mergeGeometries(parts), mat); mesh.name = 'bridge'; mesh.castShadow = false; mesh.receiveShadow = true;
  return { mesh, lights };
}

/** 青葉山の森：杉に見立てた二段の円錐を斜面にまばらに。2200 本（タイル分割で見える範囲だけ描画）。 */
export function buildForest(rng) {
  const cone = (r, h, y, c) => { const g = new THREE.ConeGeometry(r, h, 7, 1).translate(0, y + h / 2, 0); return colorize(g, c); };
  const geo = mergeGeometries([colorize(new THREE.CylinderGeometry(0.25, 0.35, 2.0, 5).translate(0, 1.0, 0), [0.12, 0.09, 0.07]), cone(2.5, 6.5, 1.5, [0.07, 0.14, 0.07]), cone(1.8, 5.5, 5.5, [0.09, 0.18, 0.08])]);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
  mat.customProgramCacheKey = () => 'sendai-forest-v1';
  const P = [];
  let tries = 0;
  while (P.length < 2200 && tries++ < 40000) {
    const x = BLUFF.x0 - rng() * 800, z = 250 + (rng() - 0.5) * 1500;
    const h = groundY(x, z);
    if (h < 4) continue;
    if (Math.hypot(x - PLATEAU.x, z - PLATEAU.z) < 46) continue;                 // 城址の平場は空ける
    if (rng() > 0.35 + 0.65 * Math.min(1, h / 40)) continue;
    P.push([x, h, z, 0.8 + rng() * 0.9]);
  }
  const m = new THREE.InstancedMesh(geo, mat, P.length), M = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3(), c = new THREE.Color();
  const up = new THREE.Vector3(0, 1, 0);
  P.forEach(([x, h, z, sc], i) => { q.setFromAxisAngle(up, rng() * 6.283); s.set(sc, sc * (0.9 + 0.5 * rng()), sc); p.set(x, h - 0.3, z); M.compose(p, q, s); m.setMatrixAt(i, M); const v = 0.75 + 0.5 * rng(); c.setRGB(v, v * (0.95 + 0.1 * rng()), v * 0.9); m.setColorAt(i, c); });
  m.instanceMatrix.needsUpdate = true; m.instanceColor.needsUpdate = true; m.castShadow = false; m.receiveShadow = false; m.name = 'aobayama-forest';
  return { mesh: m, count: P.length, tris: geo.index ? geo.index.count / 3 : geo.attributes.position.count / 3 };
}

/** 伊達政宗騎馬像（シルエット）。+x（東＝市街）を向く。原点は台座の中心、足元 y=0。ほぼ黒の素材。 */
export function buildStatue() {
  const P = [], dark = [0.02, 0.022, 0.02], stone = [0.05, 0.05, 0.05];
  const box = (cx, cy, cz, sx, sy, sz, c = dark, rz = 0, ry = 0) => { const g = new THREE.BoxGeometry(sx, sy, sz); if (rz) g.rotateZ(rz); if (ry) g.rotateY(ry); g.translate(cx, cy, cz); P.push(colorize(g, c)); };
  box(0, 1.6, 0, 6.2, 3.2, 3.8, stone);                       // 台座（石組みの塊）
  box(0, 3.6, 0, 5.2, 0.8, 3.0, stone);
  const by = 3.9;                                             // 馬の背の高さの基準
  box(0, by + 1.7, 0, 3.8, 1.3, 1.25);                        // 胴
  box(1.9, by + 2.6, 0, 1.4, 1.5, 0.95, dark, -0.5);          // 首
  box(2.7, by + 3.1, 0, 1.15, 0.65, 0.6, dark, -0.15);        // 頭
  box(-2.0, by + 1.9, 0, 1.2, 1.2, 0.5, dark, 0.7);           // 尻尾
  for (const [x, z] of [[1.4, 0.4], [1.4, -0.4], [-1.4, 0.4], [-1.4, -0.4]]) box(x, by + 0.55, z, 0.34, 1.7, 0.34);   // 脚
  box(-0.1, by + 3.0, 0, 0.9, 1.5, 0.75);                     // 騎手の胴
  box(-0.8, by + 2.8, 0, 1.0, 1.7, 1.2, dark, 0.25);          // 陣羽織
  P.push(colorize(new THREE.SphereGeometry(0.36, 8, 6).translate(0, by + 4.0, 0), dark));   // 頭
  const moon = new THREE.TorusGeometry(0.62, 0.07, 4, 14, Math.PI); moon.rotateZ(Math.PI * 0.0); moon.rotateY(Math.PI / 2); moon.translate(0.0, by + 4.35, 0); P.push(colorize(moon, dark));   // 兜の三日月の前立て
  box(0.55, by + 3.3, 0.2, 0.2, 1.4, 0.2, dark, -0.6);        // 腕・手綱
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 });
  mat.customProgramCacheKey = () => 'sendai-statue-v1';
  const mesh = new THREE.Mesh(mergeGeometries(P), mat); mesh.name = 'masamune-silhouette'; mesh.castShadow = false; mesh.receiveShadow = false;
  mesh.position.set(PLATEAU.x + 24, PLATEAU_Y, PLATEAU.z - 3); mesh.rotation.y = 0;
  return mesh;
}

/** 城址の平場の舗装・石垣（弧状）・見晴らし台の柵と灯り。 */
export function buildPlateau() {
  const parts = [];
  const disc = new THREE.CircleGeometry(30, 40); disc.rotateX(-Math.PI / 2); disc.translate(PLATEAU.x, PLATEAU_Y + 0.08, PLATEAU.z);
  parts.push(colorize(disc, [0.30, 0.28, 0.25]));
  const lights = [];
  // 東向きの弧（-70°..70° を石垣に。±12° は見晴らしの切れ目）
  for (let a = -75; a <= 75; a += 6) {
    if (Math.abs(a) < 14) continue;
    const r = 33, th = (a * Math.PI) / 180, cx = PLATEAU.x + Math.cos(th) * r, cz = PLATEAU.z + Math.sin(th) * r;
    const g = new THREE.BoxGeometry(2.4, 3.4, 6.6); g.rotateY(-th); g.translate(cx, PLATEAU_Y - 0.5, cz); parts.push(colorize(g, [0.36, 0.34, 0.31]));
    const top = new THREE.BoxGeometry(2.0, 0.5, 6.4); top.rotateY(-th); top.translate(cx, PLATEAU_Y + 1.4, cz); parts.push(colorize(top, [0.42, 0.40, 0.36]));
  }
  for (let a = -90; a <= 90; a += 12) {                                          // 見晴らしの柵と灯り
    const th = (a * Math.PI) / 180, r = 28;
    const g = new THREE.BoxGeometry(0.1, 1.0, 5.4); g.rotateY(-th); g.translate(PLATEAU.x + Math.cos(th) * r, PLATEAU_Y + 0.6, PLATEAU.z + Math.sin(th) * r); parts.push(colorize(g, [0.12, 0.12, 0.13]));
    lights.push([PLATEAU.x + Math.cos(th) * (r - 1.5), PLATEAU_Y + 3.2, PLATEAU.z + Math.sin(th) * (r - 1.5)]);
  }
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, emissive: new THREE.Color(0.05, 0.035, 0.02) });
  mat.customProgramCacheKey = () => 'sendai-plateau-v1';
  const mesh = new THREE.Mesh(mergeGeometries(parts), mat); mesh.name = 'castle-ruins'; mesh.receiveShadow = true;
  return { mesh, lights };
}

/** 遠方の街の灯り：市街の外側（東の仙台平野・南北）に散らす。密度は市街に近いほど高い。 */
export function farCityLights(rng, count = 1800) {
  const pos = new Float32Array(count * 3), col = new Float32Array(count * 3), siz = new Float32Array(count);
  let n = 0, tries = 0;
  while (n < count && tries++ < 100000) {
    const x = CITY_BOX.x1 + 40 + Math.pow(rng(), 1.7) * 5200, z = (rng() - 0.5) * 4200 + 200;
    const d = Math.hypot(x - 330, z - 150);
    if (rng() > Math.exp(-d / 2200) * 1.1) continue;
    if (Math.abs(((z * 0.01) % 1)) > 0.35 && rng() < 0.6) continue;          // 道路沿いにやや連なる
    pos.set([x, 4 + rng() * 22, z], n * 3);
    const warm = rng(), k = 1.4 + rng() * 1.6;
    col.set(warm < 0.7 ? [k * 1.0, k * 0.72, k * 0.4] : [k * 0.8, k * 0.9, k * 1.0], n * 3);
    siz[n] = 1.4 + rng() * 2.2; n++;
  }
  return { positions: pos.slice(0, n * 3), colors: col.slice(0, n * 3), sizes: siz.slice(0, n), count: n };
}
