"use client";

import type { ProductStructuredData } from "@/lib/sanity/structured-data";

/**
 * Client component that renders JSON-LD structured data script tag
 * Injects Product schema into page <head> for SEO
 */

interface ProductStructuredDataProps {
  data: ProductStructuredData;
}

export function ProductStructuredData({ data }: ProductStructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
