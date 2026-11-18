# sheet.py — 撮影した p ごとの静止画を 1 枚のコンタクトシートにまとめる。 python3 tools/sheet.py DIR OUT.png
import sys, glob, os
from PIL import Image, ImageDraw
d, out = sys.argv[1], sys.argv[2]
rows = []
for name, h in (('portrait', 560), ('landscape', 300)):
    fs = sorted(glob.glob(os.path.join(d, name + '_p*.png')))
    if not fs: continue
    ims = []
    for f in fs:
        im = Image.open(f).convert('RGB'); w = int(im.width * h / im.height); im = im.resize((w, h), Image.LANCZOS)
        ImageDraw.Draw(im).text((4, 3), 'p=%.2f' % (int(f.split('_p')[1][:4]) / 1000), fill=(255, 230, 80)); ims.append(im)
    W = sum(i.width for i in ims) + 4 * (len(ims) - 1); row = Image.new('RGB', (W, h), (12, 12, 12)); x = 0
    for i in ims: row.paste(i, (x, 0)); x += i.width + 4
    rows.append(row)
W = max(r.width for r in rows); H = sum(r.height for r in rows) + 4 * (len(rows) - 1)
sheet = Image.new('RGB', (W, H), (12, 12, 12)); y = 0
for r in rows: sheet.paste(r, (0, y)); y += r.height + 4
sheet.save(out); print(out, sheet.size)
