// scroll/tiling.js — 静的ジオメトリのタイル分割（スクロール版のみ）。画面外のタイルを視錐台カリングで描画から外す。
//   - InstancedMesh: 各インスタンスの位置で 2D グリッド（xz）に振り分け、タイルごとに別の InstancedMesh にする。
//       インスタンス属性（aBld / aPar / aTaper など）はタイル分だけ切り出す。頂点属性・index・マテリアルは共有。
//   - 通常の Mesh（山地など）: 三角形の重心で xz グリッドに振り分け、index だけを分けた BufferGeometry にする（頂点バッファは共有）。
//   動くもの（車・歩行者）や Points は対象外。書き出し（動画版）では使わない。見た目は変えないこと。
import * as THREE from 'three';

const cellKey = (ix, iz) => ix + '_' + iz;

/** InstancedMesh を size(m) 四方のタイルに分割して返す（元のメッシュは変更しない）。 */
export function tileInstanced(src, size, pad = 8) {
  const n = src.count, mat = src.instanceMatrix.array, buckets = new Map();
  for (let i = 0; i < n; i++) {
    const k = cellKey(Math.floor(mat[i * 16 + 12] / size), Math.floor(mat[i * 16 + 14] / size));
    let b = buckets.get(k); if (!b) buckets.set(k, b = []); b.push(i);
  }
  const g0 = src.geometry, out = [];
  for (const ids of buckets.values()) {
    const g = new THREE.BufferGeometry();
    for (const name of Object.keys(g0.attributes)) {
      const a = g0.attributes[name];
      if (a.isInstancedBufferAttribute) {
        const arr = new a.array.constructor(ids.length * a.itemSize);
        ids.forEach((id, j) => { for (let c = 0; c < a.itemSize; c++) arr[j * a.itemSize + c] = a.array[id * a.itemSize + c]; });
        g.setAttribute(name, new THREE.InstancedBufferAttribute(arr, a.itemSize, a.normalized, a.meshPerAttribute));
      } else g.setAttribute(name, a);                          // 頂点属性は共有
    }
    if (g0.index) g.setIndex(g0.index);
    g.groups = g0.groups.slice();
    g.boundingBox = g0.boundingBox; g.boundingSphere = g0.boundingSphere;
    if (!g.boundingSphere) { g0.computeBoundingSphere(); g.boundingSphere = g0.boundingSphere; }
    const m = new THREE.InstancedMesh(g, src.material, ids.length);
    ids.forEach((id, j) => m.instanceMatrix.array.set(mat.subarray(id * 16, id * 16 + 16), j * 16));
    m.instanceMatrix.needsUpdate = true;
    if (src.instanceColor) {
      m.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(ids.length * 3), 3);
      ids.forEach((id, j) => m.instanceColor.array.set(src.instanceColor.array.subarray(id * 3, id * 3 + 3), j * 3));
      m.instanceColor.needsUpdate = true;
    }
    m.castShadow = src.castShadow; m.receiveShadow = src.receiveShadow; m.renderOrder = src.renderOrder;
    m.name = src.name; m.userData = src.userData; m.layers.mask = src.layers.mask;
    m.position.copy(src.position); m.quaternion.copy(src.quaternion); m.scale.copy(src.scale);
    m.frustumCulled = true;
    m.computeBoundingSphere();
    m.boundingSphere.radius += pad;                            // 先細り等の頂点変形に対する余裕
    out.push(m);
  }
  return out;
}

/** インデックス付き Mesh を、三角形の重心でグリッド分割する。cell(m) 四方。頂点バッファは共有。 */
export function tileMesh(src, cell, pad = 2) {
  const g0 = src.geometry, pos = g0.attributes.position, idx = g0.index;
  if (!idx) return [src];
  const ia = idx.array, tris = ia.length / 3, buckets = new Map();
  for (let t = 0; t < tris; t++) {
    const a = ia[t * 3], b = ia[t * 3 + 1], c = ia[t * 3 + 2];
    const cx = (pos.getX(a) + pos.getX(b) + pos.getX(c)) / 3, cz = (pos.getZ(a) + pos.getZ(b) + pos.getZ(c)) / 3;
    const k = cellKey(Math.floor(cx / cell), Math.floor(cz / cell));
    let l = buckets.get(k); if (!l) buckets.set(k, l = []); l.push(t);
  }
  const out = [];
  for (const list of buckets.values()) {
    const arr = new ia.constructor(list.length * 3);
    list.forEach((t, j) => { arr[j * 3] = ia[t * 3]; arr[j * 3 + 1] = ia[t * 3 + 1]; arr[j * 3 + 2] = ia[t * 3 + 2]; });
    const g = new THREE.BufferGeometry();
    for (const name of Object.keys(g0.attributes)) g.setAttribute(name, g0.attributes[name]);   // 頂点属性は共有
    g.setIndex(new THREE.BufferAttribute(arr, 1));
    // 境界は「このタイルの三角形が使う頂点」だけから求める（全頂点だと巨大になりカリングが効かない）
    const box = new THREE.Box3(), v = new THREE.Vector3();
    for (let i = 0; i < arr.length; i++) { v.fromBufferAttribute(pos, arr[i]); box.expandByPoint(v); }
    g.boundingBox = box; g.boundingSphere = box.getBoundingSphere(new THREE.Sphere()); g.boundingSphere.radius += pad;
    const m = new THREE.Mesh(g, src.material);
    m.castShadow = src.castShadow; m.receiveShadow = src.receiveShadow; m.renderOrder = src.renderOrder; m.name = src.name + '-tile'; m.userData = src.userData;
    m.position.copy(src.position); m.quaternion.copy(src.quaternion); m.scale.copy(src.scale);
    m.frustumCulled = true;
    out.push(m);
  }
  return out;
}

/**
 * scene 直下の静的な InstancedMesh / 山地メッシュをタイルに置き換える。
 * exclude: 分割しない Object3D の集合（動く車・歩行者など）。
 */
export function tileScene(scene, { exclude = [], instSize = 350, mountainCell = 3000, only = null, minCount = 2000 } = {}) {
  const skip = new Set(exclude);
  const stats = { instancedSrc: 0, instancedTiles: 0, mountainTiles: 0, instances: 0 };
  for (const o of scene.children.slice()) {
    if (skip.has(o)) continue;
    // 少数のインスタンス（塔・タンク・切妻など）は分割しても得がなく、重なり合う面の描画順が変わるため対象外
    if (o.isInstancedMesh && o.count < minCount) continue;
    let tiles = null;
    if (o.isInstancedMesh && !o.isPoints && (!only || only === 'inst')) { tiles = tileInstanced(o, instSize); stats.instancedSrc++; stats.instancedTiles += tiles.length; stats.instances += o.count; }
    else if (o.isMesh && o.name === 'mountains' && (!only || only === 'mtn')) { tiles = tileMesh(o, mountainCell); stats.mountainTiles = tiles.length; }
    if (!tiles) continue;
    scene.remove(o);
    for (const t of tiles) scene.add(t);
  }
  return stats;
}
