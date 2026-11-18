// webm.js — 依存なしの最小 WebM(Matroska) マクサー。VideoEncoder の出力(VP8/VP9/AV1)を .webm にする。
// 全体をメモリ上で組み立て、Cues（シーク用索引）を先頭側に置く。

const enc = new TextEncoder();

function idBytes(id) {
  const out = [];
  let v = id;
  while (v > 0) { out.unshift(v & 0xff); v = Math.floor(v / 256); }
  return Uint8Array.from(out);
}
// 要素サイズは常に 8 バイト形式（0x01 + 7バイト）。最小形でなくても仕様上有効。
function sizeBytes(n) {
  const b = new Uint8Array(8);
  b[0] = 0x01;
  let v = n;
  for (let i = 7; i >= 1; i--) { b[i] = v % 256; v = Math.floor(v / 256); }
  return b;
}
const cat = (arr) => {
  let n = 0; for (const a of arr) n += a.length;
  const out = new Uint8Array(n); let o = 0;
  for (const a of arr) { out.set(a, o); o += a.length; }
  return out;
};
const el = (id, payload) => cat([idBytes(id), sizeBytes(payload.length), payload]);
const uintN = (v, n) => { const b = new Uint8Array(n); for (let i = n - 1; i >= 0; i--) { b[i] = v % 256; v = Math.floor(v / 256); } return b; };
const uintMin = (v) => { let n = 1; while (v >= 2 ** (8 * n)) n++; return uintN(v, n); };
const f64 = (v) => { const b = new Uint8Array(8); new DataView(b.buffer).setFloat64(0, v); return b; };
const str = (s) => enc.encode(s);

export class WebMMuxer {
  /** @param {{codec:'V_VP9'|'V_VP8'|'V_AV1', width:number, height:number, fps:number, codecPrivate?:Uint8Array}} opt */
  constructor(opt) {
    this.opt = opt;
    this.frames = []; // { data:Uint8Array, key:boolean, ms:number }
  }
  addChunk(chunk) {
    const data = new Uint8Array(chunk.byteLength);
    chunk.copyTo(data);
    this.frames.push({ data, key: chunk.type === 'key', ms: Math.round(chunk.timestamp / 1000) });
  }
  finalize() {
    const { codec, width, height, fps, codecPrivate } = this.opt;
    const F = this.frames;
    if (!F.length) throw new Error('フレームがありません');

    const ebml = el(0x1a45dfa3, cat([
      el(0x4286, uintMin(1)), el(0x42f7, uintMin(1)), el(0x42f2, uintMin(4)), el(0x42f3, uintMin(8)),
      el(0x4282, str('webm')), el(0x4287, uintMin(4)), el(0x4285, uintMin(2)),
    ]));

    const durationMs = F[F.length - 1].ms + Math.round(1000 / fps);
    const info = el(0x1549a966, cat([
      el(0x2ad7b1, uintMin(1000000)), el(0x4489, f64(durationMs)),
      el(0x4d80, str('japan-city-collection')), el(0x5741, str('japan-city-collection')),
    ]));

    const video = el(0xe0, cat([el(0xb0, uintMin(width)), el(0xba, uintMin(height))]));
    const trackParts = [
      el(0xd7, uintMin(1)), el(0x73c5, uintMin(1)), el(0x83, uintMin(1)), el(0x9c, uintMin(0)),
      el(0x86, str(codec)), el(0x23e383, uintMin(Math.round(1e9 / fps))),
    ];
    if (codecPrivate) trackParts.push(el(0x63a2, codecPrivate));
    trackParts.push(video);
    const tracks = el(0x1654ae6b, el(0xae, cat(trackParts)));

    // クラスタ：キーフレームごとに区切る
    const clusters = []; // { ms, bytes }
    let cur = null;
    const flush = () => { if (cur) { clusters.push({ ms: cur.ms, bytes: el(0x1f43b675, cat([el(0xe7, uintMin(cur.ms)), ...cur.blocks])) }); cur = null; } };
    for (const f of F) {
      if (!cur || (f.key && cur.blocks.length > 0) || f.ms - cur.ms > 30000) { flush(); cur = { ms: f.ms, blocks: [] }; }
      const rel = f.ms - cur.ms;
      const head = new Uint8Array([0x81, (rel >> 8) & 0xff, rel & 0xff, f.key ? 0x80 : 0x00]);
      cur.blocks.push(el(0xa3, cat([head, f.data])));
    }
    flush();

    // Cues：各クラスタ(=キーフレーム)の位置。サイズ固定にするため整数は固定長で書く。
    const cuePoint = (ms, pos) => el(0xbb, cat([el(0xb3, uintN(ms, 4)), el(0xb7, cat([el(0xf7, uintN(1, 1)), el(0xf1, uintN(pos, 4))]))]));
    const cuesSize = el(0x1c53bb6b, cat(clusters.map((c) => cuePoint(c.ms, 0)))).length;
    const segHead = info.length + tracks.length + cuesSize;
    let pos = segHead;
    const cuePoints = clusters.map((c) => { const p = cuePoint(c.ms, pos); pos += c.bytes.length; return p; });
    const cues = el(0x1c53bb6b, cat(cuePoints));

    const segment = el(0x18538067, cat([info, tracks, cues, ...clusters.map((c) => c.bytes)]));
    return new Blob([ebml, segment], { type: 'video/webm' });
  }
}
