/** Shrink Schritt1 + Schritt3 after manual asset updates (~35–45 KB target). */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");
const TARGET_MAX_BYTES = 45_000;
const FILES = ["Schritt1.webp", "Schritt3.webp"];

async function shrinkSchritt(filePath) {
  const rel = path.basename(filePath);
  let width = 800;
  let best = null;

  for (let wStep = 0; wStep < 6; wStep++) {
    for (let quality = 78; quality >= 38; quality -= 6) {
      const buffer = await sharp(filePath)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 4, smartSubsample: true })
        .toBuffer();
      if (!best || buffer.length < best.size) {
        best = { buffer, quality, width, size: buffer.length };
      }
      if (buffer.length <= TARGET_MAX_BYTES) {
        best = { buffer, quality, width, size: buffer.length };
        break;
      }
    }
    if (best && best.size <= TARGET_MAX_BYTES) break;
    width = Math.max(520, Math.floor(width * 0.82));
  }

  if (!best) return;

  const before = fs.statSync(filePath).size;
  const outPath = path.join(PUBLIC, "_schritt-opt", rel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, best.buffer);

  try {
    fs.writeFileSync(filePath, best.buffer);
    console.log(
      `${rel}: ${(before / 1024).toFixed(1)} → ${(best.size / 1024).toFixed(1)} KiB (w=${best.width}, q=${best.quality})`
    );
  } catch {
    console.log(
      `${rel}: optimized to ${(best.size / 1024).toFixed(1)} KiB → copy from public/_schritt-opt/${rel} (file locked)`
    );
  }
}

for (const name of FILES) {
  const p = path.join(PUBLIC, name);
  if (fs.existsSync(p)) await shrinkSchritt(p);
  else console.warn(`Missing: ${name}`);
}
