// cities/sapporo/farfield.js — 札幌の遠景の作り込み（Phase 2-3 Step B）。札幌モジュール専用。動画版（src/scenes・src/lib）は変更しない。
//   (1) 遠方・中景の住宅街の「高さ・窓明かり」を、地区単位のゆるいまとまりで変える（三角形数は不変）
//   (2) 市街の外側（r 4.6〜9.5 km）に低層の住宅街を足し、平原側へ向かって街が薄れていくようにする
//   (3) 平原の起伏と色のむら（雪原・防風林の帯・耕地の筋）を、頂点カラーのリングメッシュで足す
//   すべて決定的（固定 seed のハッシュのみ）。CPU 更新なし。
import * as THREE from 'three';
import { BuildingBatch, makeGableGeometry } from '../../../lib/buildings.js';

const CX = -450, CZ = -100;                            // 動画版 sapporo.js の市街中心
const hash = (x, y, s = 0) => { const v = Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453; return v - Math.floor(v); };
const vnoise = (x, y, s = 0) => {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = hash(ix, iy, s), b = hash(ix + 1, iy, s), c = hash(ix, iy + 1, s), d = hash(ix + 1, iy + 1, s);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
};
const fbm = (x, y, s = 0) => 0.55 * vnoise(x, y, s) + 0.3 * vnoise(x * 2.1, y * 2.1, s + 3) + 0.15 * vnoise(x * 4.3, y * 4.3, s + 7);

// 副都心（郊外の拠点）。方位と半径は固定。
const NODES = [[3, 3500, 620], [0.9, 3900, 520], [-1.2, 3300, 700], [-2.4, 4100, 560], [2.2, 3000, 480]].map(([a, r, rad]) => ({ x: CX + Math.cos(a) * r, z: CZ + Math.sin(a) * r, rad }));
const clusterAt = (x, z) => { let m = 0; for (const n of NODES) m = Math.max(m, Math.exp(-(((x - n.x) ** 2 + (z - n.z) ** 2) / (n.rad * n.rad)))); return m; };

/** (1) 遠方の箱（kind 3、r>2600）の高さと窓明かり（litBias）を地区ごとに変える。boxMesh は BuildingBatch.build() の InstancedMesh。 */
export function varyFarBlocks(boxMesh) {
  const mats = boxMesh.instanceMatrix.array, bld = boxMesh.geometry.attributes.aBld, par = boxMesh.geometry.attributes.aPar;
  let n = 0;
  for (let i = 0; i < boxMesh.count; i++) {
    const o = i * 16, x = mats[o + 12], z = mats[o + 14];
    const r = Math.hypot(x - CX, z - CZ);
    if (r < 1800) continue;
    const district = fbm(x / 650, z / 650, 11);                            // 地区ごとの明るさ・密度
    const lit = Math.min(0.95, Math.max(0.04, 0.06 + 1.05 * district * district + (hash(x, z, 5) - 0.5) * 0.2));
    bld.array[i * 4 + 2] = lit;
    if (r > 2600 && bld.array[i * 4 + 1] === 3) {
      const cl = clusterAt(x, z);
      const k = 0.75 + 0.9 * hash(x, z, 9) + 3.6 * cl * (0.4 + hash(x, z, 13));      // 副都心ほど高く
      mats[o + 5] *= Math.min(k, 6.5);
      if (cl > 0.35 && mats[o + 5] > 16) { bld.array[i * 4 + 1] = hash(x, z, 17) < 0.5 ? 0 : 4; par.array.set([3.0, 3.6, 0.62, 0.55], i * 4); }   // 中層の事務所・商業ビルの窓
      n++;
    }
  }
  boxMesh.instanceMatrix.needsUpdate = true; bld.needsUpdate = true; par.needsUpdate = true;
  return n;
}

/** (2) 外側の住宅街（r 4.6〜9.5 km）。同じ facade マテリアル・同じ BuildingBatch を使う独立の InstancedMesh（1 コール）。 */
export function buildOuterSuburbs(facade, count = 3600) {
  const batch = new BuildingBatch(THREE, facade, count);
  let seed = 7000;
  for (let tries = 0; tries < count * 3 && batch.n < count; tries++) {
    const a = hash(tries, 1, 21) * Math.PI * 2, rr = 4600 + 4900 * Math.pow(hash(tries, 2, 22), 1.5);
    const x = CX + Math.cos(a) * rr, z = CZ + Math.sin(a) * rr;
    // 南西〜西は山地（手稲山・藻岩山・札幌岳）：山すそに近いところは建てない
    const mtn = Math.max(0, Math.min(1, (rr - 6500) / 2500));
    const ang = Math.atan2(z - CZ, x - CX);
    if ((ang > 2.2 || ang < -2.6) && mtn > 0.2) continue;
    const dens = fbm(x / 900, z / 900, 31) * (1 - 0.8 * (rr - 4600) / 4900);
    if (hash(x, z, 33) > dens * 1.5) continue;
    const w = 14 + hash(x, z, 35) * 22, d = 14 + hash(x, z, 36) * 22, cl = clusterAt(x, z);
    const h = (6 + hash(x, z, 37) * 7) * (1 + 1.6 * cl);
    batch.add(x, -1, z, w, h, d, 3, seed++ + hash(x, z, 38), Math.min(0.9, 0.05 + 0.9 * fbm(x / 650, z / 650, 11) ** 2), Math.floor(hash(x, z, 39) * 4) * Math.PI / 2);
  }
  const mesh = batch.build({ castShadow: false }); mesh.name = 'outer-suburbs'; mesh.receiveShadow = false;
  return { mesh, count: batch.n };
}

/** (3) 平原の起伏と色のむらを持つリングメッシュ（r 5.2〜24 km）。高さは最大十数 m。 */
export function buildPlainDetail() {
  const RINGS = 56, SEGS = 360, R0 = 5200, R1 = 24000, k = Math.log(R1 / R0);
  const pos = new Float32Array((RINGS + 1) * (SEGS + 1) * 3), col = new Float32Array(pos.length);
  const snow = [0.84, 0.86, 0.92], shade = [0.62, 0.66, 0.76], forest = [0.26, 0.30, 0.31], field = [0.80, 0.80, 0.84];
  let o = 0;
  for (let i = 0; i <= RINGS; i++) {
    const r = R0 * Math.exp((k * i) / RINGS);
    for (let j = 0; j <= SEGS; j++) {
      const th = (j / SEGS) * Math.PI * 2, x = CX + Math.cos(th) * r, z = CZ + Math.sin(th) * r;
      const rel = fbm(x / 2600, z / 2600, 41), fine = fbm(x / 500, z / 500, 43);
      const ramp = Math.min(1, (r - 5200) / 1500);                       // 内縁（地面の端）では高さ 0
      const h = -1.2 + ramp * (7 * (rel - 0.45) + 3 * (fine - 0.5)) * Math.min(1, r / 9000);
      pos[o] = x; pos[o + 1] = h; pos[o + 2] = z;
      const belt = Math.max(0, 1 - Math.abs(fbm(x / 1500, z / 1500, 47) - 0.5) / 0.035);   // 防風林の帯
      const strip = 0.5 + 0.5 * Math.sin((x * 0.8 + z * 0.6) / 38 + fine * 6);            // 耕地の筋
      const fAmt = Math.min(1, belt * 0.9 + Math.max(0, fbm(x / 1800, z / 1800, 53) - 0.62) * 2.2);
      const sh = Math.max(0, Math.min(1, (rel - 0.35) * 1.6));
      for (let c = 0; c < 3; c++) {
        let v = snow[c] + (shade[c] - snow[c]) * sh * 0.6;
        v = v + (field[c] - v) * (0.25 * strip) * (1 - fAmt);
        v = v + (forest[c] - v) * fAmt;
        col[o + c] = v;
      }
      o += 3;
    }
  }
  const idx = new Uint32Array(RINGS * SEGS * 6); let q = 0;
  for (let i = 0; i < RINGS; i++) for (let j = 0; j < SEGS; j++) { const a = i * (SEGS + 1) + j, b = a + 1, c = a + SEGS + 1, d = c + 1; idx[q++] = a; idx[q++] = c; idx[q++] = b; idx[q++] = b; idx[q++] = c; idx[q++] = d; }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setIndex(new THREE.BufferAttribute(idx, 1)); g.computeVertexNormals();
  const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0 });
  const mesh = new THREE.Mesh(g, m); mesh.name = 'plain-detail'; mesh.frustumCulled = false; mesh.receiveShadow = false;
  return { mesh, tris: idx.length / 3 };
}

/** 切妻屋根（中景の住宅街）の勾配と窓明かりを地区ごとに変える。屋根メッシュは makeGableGeometry の頂点数で見分ける。 */
export function findRoofMesh(scene) {
  const nv = makeGableGeometry(THREE).attributes.position.count;
  return scene.children.find((o) => o.isInstancedMesh && o.geometry.attributes.aBld && o.geometry.attributes.position.count === nv) ?? null;
}
export function varyRoofs(roofMesh) {
  const mats = roofMesh.instanceMatrix.array, bld = roofMesh.geometry.attributes.aBld;
  for (let i = 0; i < roofMesh.count; i++) {
    const o = i * 16, x = mats[o + 12], z = mats[o + 14], r = Math.hypot(x - CX, z - CZ);
    if (r < 1200) continue;
    const district = fbm(x / 650, z / 650, 11);
    mats[o + 5] *= 0.6 + 1.0 * hash(x, z, 51) * (0.5 + district);                       // 勾配
    bld.array[i * 4 + 2] = Math.min(0.95, Math.max(0.04, 0.06 + 1.05 * district * district + (hash(x, z, 5) - 0.5) * 0.2));
    bld.array[i * 4] = bld.array[i * 4] + 0.37 * Math.floor(hash(x, z, 55) * 5);     // 屋根・外壁の色味を 5 通りにずらす
  }
  roofMesh.instanceMatrix.needsUpdate = true; bld.needsUpdate = true;
}
