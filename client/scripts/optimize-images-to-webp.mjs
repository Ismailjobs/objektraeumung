// Converts public jpg/jpeg/png images to .webp (~30-40 KB target).
// Skips .ico. Removes originals after successful conversion.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");
const TARGET_BYTES = 38_000;
const MAX_BYTES = 48_000;

function maxWidthFor(relPath) {
  const base = path.basename(relPath).toLowerCase();
  const dir = relPath.replace(/\\/g, "/");

  if (base === "icon.png") return 256;
  if (base.startsWith("logo")) return 480;
  if (base.startsWith("hero-") || base === "hero.jpg" || base === "hero.webp") return 1920;
  if (base.startsWith("content-")) return 1200;
  if (base.startsWith("gallery-")) return 1000;
  if (base.startsWith("schritt")) return 900;
  if (dir.includes("uber-uns") || base.includes("objektraeumung")) return 1200;
  return 1400;
}

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) files.push(...walk(full, []));
    else files.push(full);
  }
  return files;
}

async function encodeWebp(inputPath, maxWidth, targetBytes) {
  const meta = await sharp(inputPath).metadata();
  let width = Math.min(maxWidth, meta.width ?? maxWidth);
  let quality = 82;

  for (let round = 0; round < 14; round++) {
    const buffer = await sharp(inputPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 4, smartSubsample: true })
      .toBuffer();

    if (buffer.length <= MAX_BYTES || quality <= 42) {
      return { buffer, quality, width, size: buffer.length };
    }
    quality -= 4;
  }

  width = Math.max(640, Math.floor(width * 0.85));
  const buffer = await sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 58, effort: 4, smartSubsample: true })
    .toBuffer();
  return { buffer, quality: 58, width, size: buffer.length };
}

async function main() {
  const inputs = walk(PUBLIC_DIR).filter((f) => /\.(jpe?g|png)$/i.test(f) && !/\.ico$/i.test(f));

  console.log(`Found ${inputs.length} images to convert.\n`);

  let ok = 0;
  let skipped = 0;

  for (const inputPath of inputs) {
    const rel = path.relative(PUBLIC_DIR, inputPath);
    const outPath = inputPath.replace(/\.(jpe?g|png)$/i, ".webp");

    try {
      const { buffer, quality, width, size } = await encodeWebp(
        inputPath,
        maxWidthFor(rel),
        TARGET_BYTES
      );
      fs.writeFileSync(outPath, buffer);
      fs.unlinkSync(inputPath);
      const kb = (size / 1024).toFixed(1);
      console.log(`OK  ${rel} -> ${path.basename(outPath)} (${kb} KB, q=${quality}, w=${width})`);
      ok++;
    } catch (err) {
      console.error(`FAIL ${rel}:`, err.message);
      skipped++;
    }
  }

  // Re-compress existing large webp files (no jpg/png source left)
  const webps = walk(PUBLIC_DIR).filter((f) => /\.webp$/i.test(f));
  for (const webpPath of webps) {
    const stat = fs.statSync(webpPath);
    if (stat.size <= MAX_BYTES) continue;
    const rel = path.relative(PUBLIC_DIR, webpPath);
    try {
      const { buffer, quality, width, size } = await encodeWebp(
        webpPath,
        maxWidthFor(rel),
        TARGET_BYTES
      );
      if (size < stat.size) {
        fs.writeFileSync(webpPath, buffer);
        console.log(`RECOMPRESS ${rel} (${(size / 1024).toFixed(1)} KB, q=${quality}, w=${width})`);
      }
    } catch (err) {
      console.error(`FAIL recompress ${rel}:`, err.message);
    }
  }

  console.log(`\nDone: ${ok} converted, ${skipped} failed.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
