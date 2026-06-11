// Writes smaller copies to public-optimized/ (run apply-optimized-webp.mjs to replace when files unlocked).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");
const OUT = path.join(__dirname, "..", "public-optimized");
const MAX_BYTES = 45_000;

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else if (/\.webp$/i.test(name)) acc.push(full);
  }
  return acc;
}

async function optimize(input) {
  let best = null;
  const widths = [1024, 900, 800, 720, 640, 520, 440];
  for (const width of widths) {
    for (let quality = 78; quality >= 36; quality -= 4) {
      const buffer = await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 4, smartSubsample: true })
        .toBuffer();
      if (!best || buffer.length < best.size) {
        best = { buffer, width, quality, size: buffer.length };
      }
      if (buffer.length <= MAX_BYTES) return best;
    }
  }
  return best;
}

async function main() {
  const files = walk(PUBLIC);
  let count = 0;
  for (const file of files) {
    const rel = path.relative(PUBLIC, file);
    const before = fs.statSync(file).size;
    const best = await optimize(file);
    if (!best || (best.size >= before && before <= MAX_BYTES)) continue;
    const dest = path.join(OUT, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, best.buffer);
    count++;
    console.log(
      `${rel}: ${(before / 1024).toFixed(1)} -> ${(best.size / 1024).toFixed(1)} KB (w=${best.width}, q=${best.quality})`
    );
  }
  console.log(`\n${count} optimized copies in public-optimized/`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
