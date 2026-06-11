// Second pass: shrink webp files over 45 KB toward ~35-40 KB.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const MAX_BYTES = 45_000;

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) files.push(...walk(full, []));
    else files.push(full);
  }
  return files;
}

function baseMaxWidth(rel) {
  const base = path.basename(rel).toLowerCase();
  if (base === "icon.webp") return 256;
  if (base.startsWith("logo")) return 480;
  if (base.startsWith("hero-") || base === "hero.webp") return 1024;
  if (base.startsWith("content-")) return 800;
  if (base.startsWith("schritt")) return 800;
  return 1100;
}

async function shrinkFile(filePath) {
  const rel = path.relative(PUBLIC_DIR, filePath);
  let width = baseMaxWidth(rel);
  let best = null;

  for (let wStep = 0; wStep < 6; wStep++) {
    for (let quality = 78; quality >= 38; quality -= 6) {
      const buffer = await sharp(filePath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 4, smartSubsample: true })
        .toBuffer();
      if (!best || buffer.length < best.length) {
        best = { buffer, quality, width, size: buffer.length };
      }
      if (buffer.length <= MAX_BYTES) {
        best = { buffer, quality, width, size: buffer.length };
        break;
      }
    }
    if (best && best.size <= MAX_BYTES) break;
    width = Math.max(520, Math.floor(width * 0.82));
  }

  if (!best) return;
  const before = fs.statSync(filePath).size;
  if (best.size >= before && best.size <= MAX_BYTES) return;
  if (best.size > MAX_BYTES && best.size >= before * 0.95) {
    width = Math.max(480, Math.floor(width * 0.75));
    const buffer = await sharp(filePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 40, effort: 4, smartSubsample: true })
      .toBuffer();
    best = { buffer, quality: 40, width, size: buffer.length };
  }
  if (best.size >= before) return;
  fs.writeFileSync(filePath, best.buffer);
  console.log(
    `SHRINK ${rel}: ${(before / 1024).toFixed(1)} -> ${(best.size / 1024).toFixed(1)} KB (w=${best.width}, q=${best.quality})`
  );
}

async function main() {
  const large = walk(PUBLIC_DIR).filter(
    (f) => /\.webp$/i.test(f) && fs.statSync(f).size > MAX_BYTES
  );
  console.log(`Shrinking ${large.length} large webp files...\n`);
  for (const f of large) {
    try {
      await shrinkFile(f);
    } catch (e) {
      console.error(`FAIL ${f}:`, e.message);
    }
  }
  console.log("\nDone.");
}

main();
