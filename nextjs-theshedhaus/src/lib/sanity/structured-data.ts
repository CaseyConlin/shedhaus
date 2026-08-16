/**
 * JSON-LD Structured Data for Product Pages
 * Generates schema.org Product schema for SEO
 */

export interface ProductStructuredData {
  "@context": string;
  "@type": string;
  name: string;
  image: string[];
  description: string;
  brand: {
    "@type": string;
    name: string;
  };
  offers: {
    "@type": string;
    availability: string;
    url: string;
    priceCurrency: string;
  };
  additionalProperty: Array<{
    "@type": string;
    name: string;
    value: string;
  }>;
}

interface ProductPageData {
  productName: string;
  seo?: {
    description?: string;
  };
  gallery?: Array<{
    image?: {
      asset?: {
        url: string;
      };
    };
  }>;
  specs?: Array<{
    lead: string;
    text: string;
  }>;
}

/**
 * Get the site domain, preferring env variable, falling back to hardcoded domain
 */
function getSiteDomain(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    "https://theshedhaus.com"
  );
}

/**
 * Generate Product schema.org JSON-LD for a product page
 * @param productData - Product data from Sanity
 * @param category - Product category (e.g., "sheds")
 * @param productSlug - Product URL slug (e.g., "a-frame-shed")
 * @returns JSON-LD Product schema object
 */
export function generateProductStructuredData(
  productData: ProductPageData,
  category: string,
  productSlug: string,
): ProductStructuredData {
  const domain = getSiteDomain();
  const baseUrl = domain.endsWith("/") ? domain : `${domain}/`;
  const productUrl = `${baseUrl}signature-styles/${category}/${productSlug}`;

  // Extract all gallery image URLs
  const imageUrls =
    productData.gallery
      ?.map((item) => item.image?.asset?.url)
      .filter((url): url is string => !!url) || [];

  // Map all specs to additionalProperty
  const additionalProperties =
    productData.specs?.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.lead,
      value: spec.text,
    })) || [];

  const structuredData: ProductStructuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: productData.productName,
    image: imageUrls,
    description: productData.seo?.description || productData.productName,
    brand: {
      "@type": "Brand",
      name: "The Shed Haus",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: productUrl,
      priceCurrency: "USD",
    },
    additionalProperty: additionalProperties,
  };

  return structuredData;
}
