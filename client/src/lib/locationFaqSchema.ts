/** Maps /locations/[slug] to the i18n namespace that holds faq1Q/faq1A … keys. */
export function getLocationFaqNamespace(slug: string): string | null {
  if (slug === "wien") return null;

  const wienDistrict = slug.match(/^wien-(\d{4})$/);
  if (wienDistrict) return `locationWien${wienDistrict[1]}`;

  if (slug === "klosterneuburg-kahlenberg") return "locationKlosterneuburg";

  return null;
}

type MessageTree = Record<string, unknown>;

/** Reads faq1Q/faq1A … until the next pair is missing (max 10). */
export function extractLocationFaqPairs(
  messages: MessageTree,
  namespace: string,
): { question: string; answer: string }[] {
  const ns = messages[namespace];
  if (!ns || typeof ns !== "object") return [];

  const record = ns as Record<string, unknown>;
  const pairs: { question: string; answer: string }[] = [];

  for (let i = 1; i <= 10; i++) {
    const q = record[`faq${i}Q`];
    const a = record[`faq${i}A`];
    if (typeof q !== "string" || typeof a !== "string" || !q.trim() || !a.trim()) break;
    pairs.push({ question: q, answer: a });
  }

  return pairs;
}
