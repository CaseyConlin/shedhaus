import type { JsonLdRecord } from "@/lib/sanity/structured-data";

interface JsonLdScriptProps {
  data: JsonLdRecord;
}

export function JsonLdScript({ data }: JsonLdScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function ProductStructuredData({ data }: JsonLdScriptProps) {
  return <JsonLdScript data={data} />;
}
