/**
 * Fetches a page and checks JSON-LD blocks (basic parse + @type summary).
 * Usage: node scripts/verify-jsonld.mjs [url]
 *   VERIFY_URL=https://objektraeumung.at node scripts/verify-jsonld.mjs
 */
const url = process.argv[2] || process.env.VERIFY_URL || "http://127.0.0.1:3000/";

const res = await fetch(url, { redirect: "follow" });
if (!res.ok) {
  console.error(`HTTP ${res.status} for ${url}`);
  process.exit(1);
}
const html = await res.text();
const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
const blocks = [];
let m;
while ((m = re.exec(html)) !== null) {
  blocks.push(m[1].trim());
}

if (blocks.length === 0) {
  console.error(`No application/ld+json blocks found on ${url}`);
  process.exit(1);
}

function flattenTypes(node, acc = new Set()) {
  if (node == null) return acc;
  if (Array.isArray(node)) {
    node.forEach((n) => flattenTypes(n, acc));
    return acc;
  }
  if (typeof node === "object") {
    const t = node["@type"];
    if (typeof t === "string") acc.add(t);
    else if (Array.isArray(t)) t.forEach((x) => typeof x === "string" && acc.add(x));
    if (Array.isArray(node["@graph"])) flattenTypes(node["@graph"], acc);
  }
  return acc;
}

console.log(`URL: ${url}`);
console.log(`JSON-LD script blocks: ${blocks.length}\n`);

let ok = true;
blocks.forEach((raw, i) => {
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error(`Block ${i + 1}: invalid JSON — ${e.message}`);
    ok = false;
    return;
  }
  const types = [...flattenTypes(data)].sort();
  console.log(`Block ${i + 1}: @types → ${types.join(", ") || "(none)"}`);
});

if (!ok) process.exit(1);
console.log("\nOK — all blocks parse as JSON.");
process.exit(0);
