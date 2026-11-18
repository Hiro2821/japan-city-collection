// post.js — 被写界深度パス / カラーグレードパス（シリーズ共通の「映画のルック」）
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';

// ---- 被写界深度（深度テクスチャ参照のギャザー式ボケ。HDR段階＝ブルーム前に適用）
export function createDofPass(THREE, { near, far }) {
  const shader = {
    uniforms: {
      tDiffuse: { value: null }, tDepth: { value: null },
      uNear: { value: near }, uFar: { value: far },
      uFocus: { value: 200 }, uAperture: { value: 1.0 }, uMaxBlur: { value: 8 },
      uRes: { value: new THREE.Vector2(1920, 1080) },
    },
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tDiffuse, tDepth;
      uniform float uNear, uFar, uFocus, uAperture, uMaxBlur;
      uniform vec2 uRes;
      varying vec2 vUv;
      float linZ(float d){ float z = d * 2.0 - 1.0; return 2.0 * uNear * uFar / (uFar + uNear - z * (uFar - uNear)); }
      float coc(float z){ return clamp(uAperture * abs(z - uFocus) / max(z, 1.0), 0.0, 1.0) * uMaxBlur; }
      void main(){
        vec4 c0 = texture2D(tDiffuse, vUv);
        float z0 = linZ(texture2D(tDepth, vUv).x);
        float d0 = texture2D(tDepth, vUv).x;
        float r0 = d0 > 0.99995 ? 0.0 : coc(z0);   // 空は常にシャープ
        vec3 acc = c0.rgb; float wsum = 1.0;
        const int N = 28;
        float maxR = uMaxBlur;
        for (int i = 0; i < N; i++){
          float fi = float(i);
          float rr = sqrt((fi + 0.5) / float(N)) * maxR;
          float th = fi * 2.399963;
          vec2 o = vec2(cos(th), sin(th)) * rr;
          vec2 uv = vUv + o / uRes;
          float zs = linZ(texture2D(tDepth, uv).x);
          float rs = coc(zs);
          if (texture2D(tDepth, uv).x > 0.99995) rs = 0.0;
          // サンプル自身のボケ半径が距離を覆うか、中心が十分ボケているときのみ寄与
          float w = smoothstep(rr - 1.0, rr + 1.0, max(rs, r0 * (zs >= z0 ? 1.0 : 0.0)));
          vec3 sc = texture2D(tDiffuse, uv).rgb;
          // 明るい点を少し強調して円形ボケ(玉ボケ)を残す
          float lum = dot(sc, vec3(0.299, 0.587, 0.114));
          w *= 1.0 + clamp(lum - 1.0, 0.0, 6.0) * 0.6;
          acc += sc * w; wsum += w;
        }
        gl_FragColor = vec4(acc / wsum, c0.a);
      }`,
  };
  const pass = new ShaderPass(shader);
  const baseRender = pass.render.bind(pass);
  // composer のバッファはフレームごとに入れ替わるため、毎回 readBuffer の深度を参照する
  pass.render = function (renderer, writeBuffer, readBuffer, dt, mask) {
    this.uniforms.tDepth.value = readBuffer.depthTexture;
    baseRender(renderer, writeBuffer, readBuffer, dt, mask);
  };
  return pass;
}

// ---- カラーグレード（OutputPass 後＝sRGB表示空間で適用）
export function createGradePass(THREE) {
  const shader = {
    uniforms: {
      tDiffuse: { value: null },
      uFade: { value: 1 }, uSeed: { value: 0 }, uRes: { value: new THREE.Vector2(1920, 1080) },
      uSat: { value: 1.08 }, uContrast: { value: 0.35 },
      uShadowTint: { value: new THREE.Color(0.0, 0.05, 0.10) }, uShadowAmt: { value: 0.35 },
      uHighTint: { value: new THREE.Color(1.05, 1.0, 0.93) },
      uVig: { value: 0.55 }, uGrain: { value: 0.028 }, uAberr: { value: 0.0016 },
    },
    vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D tDiffuse;
      uniform float uFade, uSeed, uSat, uContrast, uShadowAmt, uVig, uGrain, uAberr;
      uniform vec2 uRes; uniform vec3 uShadowTint, uHighTint;
      varying vec2 vUv;
      float h21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      void main(){
        vec2 cuv = vUv - 0.5;
        float rad = dot(cuv, cuv);
        // 周辺の色収差
        vec3 c;
        c.r = texture2D(tDiffuse, vUv + cuv * uAberr * 2.0 * rad * 4.0).r;
        c.g = texture2D(tDiffuse, vUv).g;
        c.b = texture2D(tDiffuse, vUv - cuv * uAberr * 2.0 * rad * 4.0).b;
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        // スプリットトーン：影をティール寄り、ハイライトを暖色へ
        c += uShadowTint * (1.0 - smoothstep(0.0, 0.55, l)) * uShadowAmt;
        c = mix(c, c * uHighTint, smoothstep(0.35, 1.0, l));
        l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c = mix(vec3(l), c, uSat);
        c = mix(c, c * c * (3.0 - 2.0 * c), uContrast);               // S字カーブ
        // ビネット
        float vig = smoothstep(0.80, 0.18, length(cuv * vec2(uRes.x / uRes.y, 1.0)));
        c *= mix(1.0, vig, uVig);
        // フィルムグレイン（フレーム番号で決定的）
        float n = h21(gl_FragCoord.xy + uSeed * 17.0) - 0.5;
        c += n * uGrain * (1.0 - l * 0.6);
        c *= uFade;
        gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
      }`,
  };
  return new ShaderPass(shader);
}
