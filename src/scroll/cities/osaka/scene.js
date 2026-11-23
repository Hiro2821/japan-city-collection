// cities/osaka/scene.js — スクロール版の大阪シーン。ベースの OsakaScene（src/scenes/osaka.js）を継承し、
//   カメラを PathRig に差し替えて共通のタイル分割・霞を足す（札幌のスクロール版と同じ階層。共通コードは変更しない）。
import { OsakaScene } from '../../../scenes/osaka.js';
import * as THREE from 'three';
import { PathRig } from '../../rig.js';
import { applyScrollEffects } from '../../city-api.js';
import { PATH } from './camera.js';

export class OsakaScrollScene extends OsakaScene {
  constructor(meta, index, total, opts = {}) {
    super(meta, index, total, opts);
    this.fadeSec = 0;
    this.fx = opts.fx ?? {};       // { tiled, haze }（共通側が渡す）
  }

  async build() {
    await super.build();
    this.videoRig = this.rig;      // ベースの経路（参照用に保持）
    this.rig = new PathRig(PATH);
    applyScrollEffects(this, {
      tiled: this.fx.tiled, haze: this.fx.haze,
      tileExclude: [this.boxMesh, this.farMesh, this.viaduct.meshes[0], this.viaduct.meshes[1], this.cars.mesh, this.peds.mesh, this.pedsNS.mesh],
      skyUniforms: this.sky.uniforms,
    });
    this._hazePoints();
  }

  /** 光点シェーダ（ShaderMaterial／Points）には共通の霞が効かないので、同じ距離カーブで減光する（東京と同じ手法）。 */
  _hazeUniforms() { return this.haze?.uniforms?.uHazeP ? this.haze.uniforms.uHazeP : { value: new THREE.Vector4(0, 1, 0, 0) }; }
  _hazePoints() {
    const hp = this._hazeUniforms(), KEY = 'float fog = exp(-pow(uFog * dist, 2.0));';
    let n = 0; const seen = new Set();
    this.scene.traverse((o) => {
      const m = o.material;
      if (!m || !m.isShaderMaterial || seen.has(m) || !m.vertexShader.includes(KEY)) return;
      seen.add(m);
      m.vertexShader = m.vertexShader.replace('varying vec3 vCol;', 'varying vec3 vCol; uniform vec4 uHazeP;').replace(KEY, KEY + ' fog *= 1.0 - smoothstep(uHazeP.x, uHazeP.y, dist) * uHazeP.z;');
      m.uniforms.uHazeP = hp; m.needsUpdate = true; n++;
    });
    this.hazePointMaterials = n;
  }

  /** 縦画面経路の重み（0=横, 1=縦）。アスペクト比から共通側が設定する。 */
  setLayoutWeight(w) { this.rig.weight = w; }
}
