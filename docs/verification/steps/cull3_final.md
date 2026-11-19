# カリング Step 3：バンドル・フォールバック・動画版の不変確認

## バンドル
`npm run build:scroll` で dist/scroll.bundle.js を再生成（0.830 MB、gzip 0.221 MB。タイル分割前 0.826 / 0.220）。

## フォールバックと読み込みサイズ（tools/test-loading.mjs）
| ケース | 結果 | ファイル数 | 計(raw) | gzip推定 |
|---|---|---|---|---|
| A 既定（バンドル） | ready, mode=bundle | 4 | 0.84 MB | 0.23 MB |
| B ?bundle=0 + ?three=local | ready, mode=modules | 39 | 2.29 MB | 0.49 MB |
| C バンドル欠損 → 自動でモジュール版 | ready, modules/local | 39 | 2.29 MB | 0.49 MB |
| D ?bundle=0 + CDN不通 → vendor/three へ自動切替 | ready, local(自動切替) | 39 | 2.29 MB | 0.49 MB |
前回比: バンドル 4ファイル 0.84 MB / 0.22 MB で変化なし。モジュール版は 38→39 ファイル（tiling.js 追加）、2.28→2.29 MB。動画ファイルの読み込みなし。

## 動画版の不変確認
- md5: index.html = 90e9408db6f981a210fb1aeab7a5266b、src/main.js = 6e280d60ae58a289b9249b48016a7a53（指定値と一致）。src/lib・src/scenes・renderer.js・camera.js も Nov 15 バックアップ(84eb4c8)と差分なし。
- 動画 3.2 / 5.5 / 6.3 秒（tools/export.mjs --stills、1920×1080）を現行ツリーとバックアップ 84eb4c8 で別々に書き出して比較: 3 枚とも画素差分 0。
