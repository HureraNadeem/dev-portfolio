/**
 * Renders a JSON-LD graph into the document. The payload is built at build time
 * from `@/config/site`, never from user input, so serialising it straight into
 * the script tag is safe.
 */
export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
