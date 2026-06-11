type Props = {
  graph: Record<string, unknown>[];
};

/**
 * Page-level JSON-LD (@graph). Keep sitewide entities in JsonLd layout; attach page-specific nodes here only.
 */
export function PageStructuredData({ graph }: Props) {
  if (graph.length === 0) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
