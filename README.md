# JAPAN — THE CITY COLLECTION

10 Cities. 10 Stories. One Japan.

## 使い方
- `index.html` をWebサーバ経由で開く（例: `npx serve .` / GitHub Pages）。`file://` では ES Modules が動きません。
- Three.js は **0.187.0 固定**。既定は jsDelivr CDN、`?three=local` で `vendor/three/`（r187）。CDN に届かない場合は自動でローカルへ切替。
- 画面下の「WebMを書き出す」で、その端末のGPUが1フレームずつ描画→WebCodecsでVP9エンコード→`<都市>.webm` を保存。
- 開発用: `node tools/export.mjs --city sapporo --stills 1,4,8,12`（静止画）/ `--preview`（Node+ヘッドレスChromeで連番→ffmpeg）。
- 検証: `node tools/selftest.mjs`, `node tools/check-three.mjs`, `node tools/test-browser-export.mjs`

## 都市の追加
1. `src/scenes/<id>.js` に `CityScene` を継承したクラスを作る（`sapporo.js` を参照）。
2. `src/main.js` の `cityModules` に1行足す。
3. `metadata/cities.json` の `status` を `ready` にする。

## SAPPORO CINEMATIC JOURNEY（約55秒）
- ショット: `?shot=odori`（実装済み 11–18秒）。他は `src/scenes/sapporo.js` の `SHOTS`（ready:false）。
- 位置は `src/geo.js`（条・丁目の住所グリッド）。ランドマークは手続き生成の概略モデルで、測量に基づく再現ではない。

## 未対応・既知の制限
- MP4 の書き出しはブラウザ側では未実装（WebMのみ）。`ffmpeg -i x.webm -c:v libx264 x.mp4` で変換可。
- 音声なし。
- 札幌は大通公園・テレビ塔のショットのみ。他の7ショットは未制作。札幌以外の9都市も未制作。
