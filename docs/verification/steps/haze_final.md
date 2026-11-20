# 霞 — 最終確認

- バンドル再生成: dist/scroll.bundle.js 0.832 MB（gzip 0.222 MB）。霞導入前 0.830 / 0.221 → +約 2 KB（+0.002 MB）。
- フォールバック（tools/test-loading.mjs）: A 既定=bundle 4ファイル 0.84 MB(gzip 0.23) / B ?bundle=0 / C バンドル欠損→自動 modules / D CDN不通→vendor/three 自動切替 — 4 ケースとも ready。モジュール版は 39→40 ファイル（haze.js）、2.29 MB（gzip 0.50）。モジュール版とバンドル版で p=0.5 縦の霞入り描画は画素差分 0。
- 動画版: md5 index.html=90e9408db6f981a210fb1aeab7a5266b / src/main.js=6e280d60ae58a289b9249b48016a7a53（一致）。src/lib・src/scenes は Nov 15 バックアップ(84eb4c8)と差分なし。動画 3.2 / 5.5 / 6.3 秒（1920×1080）を現行ツリーとバックアップで別々に書き出して比較し、3 枚とも画素差分 0。
