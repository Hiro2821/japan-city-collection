// cities/osaka/landmarks.js — 大阪のランドマーク（東京 far.js のタワー等の作法）。
//   梅田スカイビル（2 棟＋頂部のリング）／大阪駅（大屋根）／中之島の公会堂（ドーム）／通天閣（格子の塔）／あべのハルカス（稜線の光）。
//   建物の量塊は共通 BuildingBatch へ入れ、専用形状（リング・ドーム・格子）だけをここで作る。実在ロゴは使わない（D-4）。
import * as THREE from 'three';
import { BeamSet } from '../../../lib/buildings.js';
import { createGlowPoints } from '../../../lib/glow.js';
import { SKYBLDG, STATION, HALL, TSUTENKAKU, HARUKAS, HARUKAS_TIERS } from './layout.js';

const glowOf = (pts, cols, sizs, maxPx = 16) => createGlowPoints(THREE, {
  positions: new Float32Array(pts.flat()), colors: new Float32Array(cols.flat()), sizes: new Float32Array(sizs),
  fogDensity: 0.00004, minPx: 1.4, maxPx,
});

// バッチへ入れる量塊（スカイビルの 2 棟、駅舎、公会堂、島のオフィス棟、ハルカスの 3 段）。seed は呼び出し側の続き番号から。
export function landmarkBoxes(batch, seed) {
  batch.add(SKYBLDG.x - 19, 0, SKYBLDG.z, 17, SKYBLDG.h, 40, 2, seed++ , 0.92);
  batch.add(SKYBLDG.x + 19, 0, SKYBLDG.z, 17, SKYBLDG.h, 40, 2, seed++, 0.92);
  batch.add((STATION.x0 + STATION.x1) / 2, 0, (STATION.z0 + STATION.z1) / 2, STATION.x1 - STATION.x0, 34, STATION.z1 - STATION.z0, 4, seed++, 0.8);
  batch.add(HALL.x, 0, HALL.z, HALL.w, HALL.h, HALL.d, 1, seed++, 0.85);
  batch.add(-430, 0, 455, 90, 42, 34, 4, seed++, 0.75);
  batch.add(540, 0, 455, 110, 52, 34, 4, seed++, 0.75);
  let y = 0;
  for (const [w, d, h] of HARUKAS_TIERS) { batch.add(HARUKAS.x, y, HARUKAS.z, w, h, d, 2, seed++, 0.8); y += h; }
  return seed;
}

// 梅田スカイビル頂部のリング（空中庭園）と光の輪
export function buildSkyRing() {
  const mat = new THREE.MeshStandardMaterial({ color: 0x232830, roughness: 0.6, metalness: 0.4 });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(24, 3.4, 8, 40), mat);
  ring.rotation.x = Math.PI / 2; ring.position.set(SKYBLDG.x, SKYBLDG.h - 4, SKYBLDG.z);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(21, 21, 3, 28), mat);
  disc.position.set(SKYBLDG.x, SKYBLDG.h - 7, SKYBLDG.z);
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(30, 4, 10), mat);
  bridge.position.set(SKYBLDG.x, SKYBLDG.h - 12, SKYBLDG.z);
  const pts = [], cols = [], siz = [];
  for (let i = 0; i < 44; i++) { const a = (i / 44) * Math.PI * 2; pts.push([SKYBLDG.x + Math.cos(a) * 24, SKYBLDG.h - 1.5, SKYBLDG.z + Math.sin(a) * 24]); cols.push([2.4, 2.2, 1.9]); siz.push(0.9); }
  const glow = glowOf(pts, cols, siz);
  return { meshes: [ring, disc, bridge], glow };
}

// 大阪駅の大屋根（量塊の上の薄い屋根＋南面の光の帯）
export function buildStationRoof() {
  const roof = new THREE.Mesh(
    new THREE.BoxGeometry(STATION.x1 - STATION.x0 + 26, 3, STATION.z1 - STATION.z0 + 22),
    new THREE.MeshStandardMaterial({ color: 0x1c2027, roughness: 0.55, metalness: 0.35 })
  );
  roof.position.set((STATION.x0 + STATION.x1) / 2, 36.5, (STATION.z0 + STATION.z1) / 2);
  const pts = [], cols = [], siz = [];
  for (let x = STATION.x0 + 6; x <= STATION.x1 - 4; x += 7) { pts.push([x, 30, STATION.z1 + 1.2]); cols.push([2.0, 2.2, 2.6]); siz.push(0.8); }
  const glow = glowOf(pts, cols, siz);
  return { meshes: [roof], glow };
}

// 公会堂のドームと小塔
export function buildHallDome() {
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a2320, roughness: 0.85 });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(9.5, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat);
  dome.position.set(HALL.x, HALL.h, HALL.z);
  const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.1, 6, 6), mat);
  spire.position.set(HALL.x, HALL.h + 9, HALL.z);
  return [dome, spire];
}

// 通天閣：格子の塔（BeamSet）＋展望台の量塊＋稜線と頂部の光点
export function buildTsutenkaku() {
  const { x, z, h } = TSUTENKAKU;
  const mat = new THREE.MeshStandardMaterial({ color: 0x3a332a, roughness: 0.6, metalness: 0.3, emissive: new THREE.Color(1.0, 0.6, 0.22), emissiveIntensity: 0.3 });
  const beams = new BeamSet(THREE, mat);
  const hwAt = (y) => 13 - (13 - 3.2) * (y / 88);
  const C = (sx, sz, y) => [x + sx * hwAt(y), y, z + sz * hwAt(y)];
  for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
    beams.add(C(sx, sz, 0), C(sx, sz, 88), 0.75);
    for (let y = 0; y < 88; y += 11) {
      const nx = sx === -1 ? 1 : -1, nzn = sz === -1 ? 1 : -1;
      beams.add(C(sx, sz, y), C(nx, sz, y + 11), 0.26);
      beams.add(C(nx, sz, y), C(sx, sz, y + 11), 0.26);
      beams.add(C(sx, sz, y), C(nx, sz, y), 0.3);
      beams.add(C(sx, sz, y), C(sx, nzn, y), 0.3);
    }
  }
  const lattice = beams.build({ castShadow: false, sides: 5 });
  lattice.name = 'tsutenkaku';
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(13, 11, 13), new THREE.MeshStandardMaterial({ color: 0x2c2620, roughness: 0.7, emissive: new THREE.Color(1.0, 0.7, 0.36), emissiveIntensity: 0.35 }));
  cabin.position.set(x, 93, z);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.6, 9, 6), mat);
  mast.position.set(x, 103, z);
  const pts = [], cols = [], siz = [];
  for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) for (let y = 6; y <= 88; y += 6.5) { pts.push(C(sx, sz, y)); cols.push([2.6, 2.2, 1.7]); siz.push(0.85); }
  for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; pts.push([x + Math.cos(a) * 7.4, 99, z + Math.sin(a) * 7.4]); cols.push(i % 2 ? [0.6, 2.2, 3.0] : [3.0, 0.9, 2.2]); siz.push(0.9); }
  pts.push([x, h + 1, z]); cols.push([3.2, 0.5, 0.5]); siz.push(1.6);
  const glow = glowOf(pts, cols, siz);
  return { meshes: [lattice, cabin, mast], glow, mat };
}

// あべのハルカス：稜線・段の輪・頂部の光点
export function buildHarukasGlow() {
  const pts = [], cols = [], siz = [];
  let y = 0;
  for (const [w, d, hh] of HARUKAS_TIERS) {
    const hw = w / 2 + 0.4, hd = d / 2 + 0.4;
    for (const [sx, sz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) for (let yy = y + 5; yy <= y + hh; yy += 7) { pts.push([HARUKAS.x + sx * hw, yy, HARUKAS.z + sz * hd]); cols.push([2.1, 2.4, 3.0]); siz.push(0.85); }
    const topY = y + hh, n = 26;
    for (let i = 0; i < n; i++) {
      const t = i / n, side = Math.floor(t * 4), f = t * 4 - side;
      const px = side === 0 ? -hw + 2 * hw * f : side === 1 ? hw : side === 2 ? hw - 2 * hw * f : -hw;
      const pz = side === 0 ? -hd : side === 1 ? -hd + 2 * hd * f : side === 2 ? hd : hd - 2 * hd * f;
      pts.push([HARUKAS.x + px, topY + 0.5, HARUKAS.z + pz]); cols.push([2.1, 2.4, 3.0]); siz.push(0.85);
    }
    y = topY;
  }
  const glow = glowOf(pts, cols, siz);
  return { glow, count: pts.length };
}
