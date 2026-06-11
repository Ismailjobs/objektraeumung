// Copies public-optimized/ over public/ (run when dev server closed / files unlocked).
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");
const OUT = path.join(__dirname, "..", "public-optimized");

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function main() {
  if (!fs.existsSync(OUT)) {
    console.error("Run: npm run build-optimized-images first");
    process.exit(1);
  }
  let ok = 0;
  let fail = 0;
  for (const src of walk(OUT)) {
    const rel = path.relative(OUT, src);
    const dest = path.join(PUBLIC, rel);
    try {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(src, dest);
      ok++;
    } catch (e) {
      console.error(`FAIL ${rel}:`, e.message);
      fail++;
    }
  }
  console.log(`Applied ${ok} files, ${fail} failed.`);
}

main();
