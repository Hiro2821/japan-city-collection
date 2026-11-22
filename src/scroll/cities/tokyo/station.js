// cities/tokyo/station.js — 東京駅丸の内駅舎（赤レンガ・西向き）の専用モデル。公共性の高い建築の形状再現（U-7）。ロゴ・看板なし。
//   南北に約 336 m（z −168〜+168）、奥行 24 m。両端に八角のドーム、中央に皇室用の中央玄関（切妻）、その間に 3 階建ての翼棟。
//   構成：壁（レンガ）・石帯・ピラスター・窓枠・マンサード屋根・ドーマー・ドーム。窓は別メッシュ（暖色の発光）。寸法は記憶ベース（★）。
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { FACADE_X } from './layout.js';

const col = (g, c) => { const n = g.attributes.position.count, a = new Float32Array(n * 3); for (let i = 0; i < n; i++) a.set(c, i * 3); g.setAttribute('color', new THREE.BufferAttribute(a, 3)); g.deleteAttribute('uv'); return g; };
const BRICK = [0.40, 0.13, 0.10], STONE = [0.60, 0.56, 0.48], SLATE = [0.07, 0.08, 0.09], COPPER = [0.08, 0.15, 0.13], FRAME = [0.52, 0.48, 0.42];

export function buildStation() {
  const X0 = FACADE_X, D = 24;                                   // 西ファサード x=X0、奥へ D
  const parts = [], win = [];
  const box = (cx, cy, cz, w, h, d, c) => parts.push(col(new THREE.BoxGeometry(w, h, d).translate(cx, cy, cz), c));
  // 奥行方向は x、長手方向は z。(z0..z1) の翼棟を高さ h で作る
  const wing = (z0, z1, h, mansard = true) => {
    const L = z1 - z0, cz = (z0 + z1) / 2;
    box(X0 + D / 2, h / 2, cz, D, h, L, BRICK);
    box(X0 - 0.15, 7.2, cz, 0.7, 0.9, L + 0.4, STONE);          // 1・2 階の間の石帯
    box(X0 - 0.15, 13.4, cz, 0.7, 0.9, L + 0.4, STONE);
    box(X0 - 0.25, h, cz, 1.4, 1.1, L + 0.6, STONE);             // コーニス
    box(X0 - 0.1, 0.8, cz, 0.6, 1.6, L + 0.4, STONE);            // 基壇
    if (mansard) {                                              // マンサード屋根（片流れの面を 2 枚）：粗い台形
      const g = new THREE.BoxGeometry(D - 1, 5.2, L - 0.6); g.translate(X0 + D / 2, h + 2.6, cz); parts.push(col(g, SLATE));
      const g2 = new THREE.BoxGeometry(D - 8, 3.0, L - 4); g2.translate(X0 + D / 2 + 1, h + 6.6, cz); parts.push(col(g2, SLATE));
    }
  };
  // ドーム（南北の端）：八角の土台＋ドーム＋ランタン
  const dome = (cz) => {
    box(X0 + 11, 12.5, cz, 22, 25, 30, BRICK);
    box(X0 - 0.2, 25, cz, 1.6, 1.2, 31, STONE); box(X0 - 0.2, 7.2, cz, 0.8, 0.9, 30.4, STONE); box(X0 - 0.2, 13.4, cz, 0.8, 0.9, 30.4, STONE);
    const base = new THREE.CylinderGeometry(11, 12, 3.2, 8).translate(X0 + 11, 26.6, cz); parts.push(col(base, STONE));
    const sph = new THREE.SphereGeometry(10.5, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2); sph.scale(1, 1.05, 1); sph.translate(X0 + 11, 28.2, cz); parts.push(col(sph, COPPER));
    parts.push(col(new THREE.CylinderGeometry(1.6, 2.2, 5, 8).translate(X0 + 11, 41.5, cz), STONE));
    parts.push(col(new THREE.ConeGeometry(2.0, 6, 8).translate(X0 + 11, 46.5, cz), COPPER));
    for (let k = 0; k < 8; k++) { const a = (k / 8) * Math.PI * 2 + Math.PI / 8; parts.push(col(new THREE.BoxGeometry(0.8, 2.2, 2.6).translate(X0 + 11 + Math.cos(a) * 10.2, 31.5, cz + Math.sin(a) * 10.2), STONE)); }
  };
  wing(-136, -24, 21.5); wing(24, 136, 21.5);
  dome(-152); dome(152);
  // 中央玄関（皇室用）：やや高く、切妻の破風。張り出した車寄せ
  box(X0 + 12, 13.5, 0, 24, 27, 46, BRICK); box(X0 - 2.0, 4.5, 0, 4.2, 9, 22, STONE);
  box(X0 - 0.2, 27, 0, 1.6, 1.2, 47, STONE);
  { const g = new THREE.CylinderGeometry(9, 9, 46, 3, 1); g.rotateX(Math.PI / 2); g.rotateZ(Math.PI); g.scale(1, 0.6, 1); g.translate(X0 + 12, 27 + 2.7, 0); parts.push(col(g, SLATE)); }
  parts.push(col(new THREE.BoxGeometry(0.8, 4.5, 20).translate(X0 - 0.6, 25.6, 0), STONE));      // 破風
  // ピラスター（柱型）と窓の枠：翼棟・中央・ドーム側面に等間隔
  const winRects = [];
  const bays = (z0, z1, rows) => {
    for (let z = z0 + 1.8; z < z1 - 1; z += 3.6) {
      box(X0 - 0.35, 10.5, z - 1.8, 0.7, 20.6, 0.55, STONE);                                      // ピラスター
      for (const y of rows) {
        parts.push(col(new THREE.BoxGeometry(0.4, 0.35, 2.3).translate(X0 - 0.15, y + 2.15, z), FRAME));   // まぐさ（窓の上）
        parts.push(col(new THREE.BoxGeometry(0.4, 0.35, 2.5).translate(X0 - 0.2, y - 0.2, z), FRAME));     // 窓台
        parts.push(col(new THREE.BoxGeometry(0.3, 2.3, 0.3).translate(X0 - 0.12, y + 1, z - 1.1), FRAME)); parts.push(col(new THREE.BoxGeometry(0.3, 2.3, 0.3).translate(X0 - 0.12, y + 1, z + 1.1), FRAME));
        winRects.push([z, y + 1.0]);
      }
    }
  };
  bays(-136, -24, [1.6, 8.0, 14.4]); bays(24, 136, [1.6, 8.0, 14.4]); bays(-23, 23, [1.6, 8.0, 14.4, 20.0]);
  for (const cz of [-152, 152]) bays(cz - 14, cz + 14, [1.6, 8.0, 14.4, 19.2]);
  // ドーマー（マンサード屋根の小窓）：翼棟に 7.2 m 間隔
  for (const [z0, z1] of [[-136, -24], [24, 136]]) for (let z = z0 + 3.6; z < z1; z += 7.2) {
    box(X0 + 3.2, 21.5 + 3.6, z, 2.6, 3.0, 2.6, SLATE);
    { const g = new THREE.ConeGeometry(2.1, 1.8, 4); g.rotateY(Math.PI / 4); g.translate(X0 + 3.2, 21.5 + 6.0, z); parts.push(col(g, SLATE)); }
    winRects.push([z, 21.5 + 3.4, 'dormer']);
  }
  const geo = mergeGeometries(parts);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.85, metalness: 0.02, emissive: new THREE.Color(0.55, 0.30, 0.16), emissiveIntensity: 0 });
  mat.customProgramCacheKey = () => 'tokyo-station-v1';
  const mesh = new THREE.Mesh(geo, mat); mesh.name = 'tokyo-station'; mesh.castShadow = false; mesh.receiveShadow = false;
  // 窓（発光）：1 つの BufferGeometry にまとめる
  const wp = [], wi = [];
  for (const r of winRects) {
    const z = r[0], y = r[1], hw = r[2] ? 0.7 : 0.95, hh = r[2] ? 0.9 : 1.15, n = wp.length / 3, x = X0 - 0.02;
    wp.push(x, y - hh, z - hw, x, y - hh, z + hw, x, y + hh, z + hw, x, y + hh, z - hw); wi.push(n, n + 1, n + 2, n, n + 2, n + 3);
  }
  const wg = new THREE.BufferGeometry(); wg.setAttribute('position', new THREE.Float32BufferAttribute(wp, 3)); wg.setIndex(wi);
  const wmat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1, 0.72, 0.4), side: THREE.DoubleSide, fog: true });
  const winMesh = new THREE.Mesh(wg, wmat); winMesh.name = 'tokyo-station-windows';
  const tris = (geo.index ? geo.index.count : geo.attributes.position.count) / 3 + wi.length / 3;
  return { meshes: [mesh, winMesh], mat, winMat: wmat, tris };
}
