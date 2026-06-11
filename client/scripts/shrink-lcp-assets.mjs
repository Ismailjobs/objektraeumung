/** One-off: tighten logo + hero slides for LCP audit. */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

async function writeWebp(srcPath, outPath, width, quality) {
  const buffer = await sharp(srcPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 4, smartSubsample: true })
    .toBuffer();
  fs.writeFileSync(outPath, buffer);
  console.log(path.basename(outPath), "→", Math.round(buffer.length / 1024), "KiB", `(${width}px q${quality})`);
}

const logoSrc = path.join(PUBLIC, "logo-nav.webp");
const logoOut = path.join(PUBLIC, "logo-nav-sm.webp");
if (fs.existsSync(logoSrc)) await writeWebp(logoSrc, logoOut, 320, 68);

const optDir = path.join(PUBLIC, "_lcp-opt");
fs.mkdirSync(optDir, { recursive: true });
for (let i = 1; i <= 6; i++) {
  const p = path.join(PUBLIC, `hero-${i}.webp`);
  if (fs.existsSync(p)) {
    await writeWebp(p, path.join(optDir, `hero-${i}.webp`), 1280, 72);
  }
}
console.log("Copy _lcp-opt/*.webp → public/ when OneDrive is not locking files.");
