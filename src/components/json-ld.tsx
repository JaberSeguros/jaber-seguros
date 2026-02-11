/**
 * Renders JSON-LD structured data for SEO. Safe: content is JSON.stringify of
 * application-controlled data, not user input.
 */
export function JsonLd<T extends object>({ data }: { data: T }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: Structured data from app data only, not user input
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
