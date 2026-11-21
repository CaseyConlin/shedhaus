/**
 * JSON-LD structured data builders for schema.org entities.
 */

export type JsonLdRecord = Record<string, unknown>;

export interface ProductStructuredData extends JsonLdRecord {
  "@context": "https://schema.org";
  "@type": "Product";
  name: string;
  url: string;
  category: string;
  image: string[];
  description: string;
  additionalProperty: Array<{
    "@type": "PropertyValue";
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

interface CategoryListItem {
  name: string;
  slug: { current: string };
  seo?: { description?: string };
  pageDescription?: string;
}

interface ProductListItem {
  productName: string;
  seo?: { slug?: { current?: string } };
}

export function getSiteUrl(): string {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://theshedhaus.com";
  const withProtocol = /^https?:\/\//i.test(configuredUrl)
    ? configuredUrl
    : `https://${configuredUrl}`;

  return withProtocol.replace(/\/$/, "");
}

export function getAbsoluteUrl(path: string): string {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export function generateProductStructuredData(
  productData: ProductPageData,
  category: string,
  productSlug: string,
  categoryName: string = category,
): ProductStructuredData {
  const productUrl = getAbsoluteUrl(
    `/signature-styles/${category}/${productSlug}`,
  );
  const imageUrls =
    productData.gallery
      ?.map((item) => item.image?.asset?.url)
      .filter((url): url is string => Boolean(url)) || [];
  const additionalProperties =
    productData.specs
      ?.filter((spec) => spec.lead && spec.text)
      .map((spec) => ({
        "@type": "PropertyValue" as const,
        name: spec.lead,
        value: spec.text,
      })) || [];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productData.productName,
    url: productUrl,
    category: categoryName,
    image: imageUrls,
    description: productData.seo?.description || productData.productName,
    additionalProperty: additionalProperties,
  };
}

export function generateBreadcrumbStructuredData(
  items: Array<{ name: string; path: string }>,
): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export function generateCollectionStructuredData(options: {
  name: string;
  description: string;
  path: string;
  items: Array<{
    name: string;
    path: string;
  }>;
}): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.name,
    description: options.description,
    url: getAbsoluteUrl(options.path),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: options.items.length,
      itemListElement: options.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: getAbsoluteUrl(item.path),
      })),
    },
  };
}

export function generateServiceAreaPageStructuredData(options: {
  name: string;
  description: string;
  path: string;
}): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    description: options.description,
    url: getAbsoluteUrl(options.path),
    about: {
      "@type": "Place",
      name: options.name,
    },
  };
}

export function generateCategoryCollectionStructuredData(
  category: {
    name: string;
    slug: { current: string };
    seo?: { description?: string };
    pageTitle?: string;
    pageDescription?: string;
  },
  products: ProductListItem[],
): JsonLdRecord {
  const categorySlug = category.slug.current;
  return generateCollectionStructuredData({
    name: category.pageTitle || category.name,
    description:
      category.seo?.description ||
      category.pageDescription ||
      `Explore ${category.name} structures.`,
    path: `/signature-styles/${categorySlug}`,
    items: products
      .filter((product) => product.seo?.slug?.current)
      .map((product) => ({
        name: product.productName,
        path: `/signature-styles/${categorySlug}/${product.seo!.slug!.current}`,
      })),
  });
}

export function generateIndexCollectionStructuredData(
  categories: CategoryListItem[],
): JsonLdRecord {
  return generateCollectionStructuredData({
    name: "Structures",
    description:
      "Explore sheds, garages, barns, playhouses, and other outdoor structures.",
    path: "/signature-styles",
    items: categories.map((category) => ({
      name: category.name,
      path: `/signature-styles/${category.slug.current}`,
    })),
  });
}

export function generateLocalBusinessStructuredData(): JsonLdRecord {
  return {
    "@context": "https://schema.org",
    "@type": ["Store", "HomeAndConstructionBusiness"],
    name: "The Shed Haus",
    url: getSiteUrl(),
    image: getAbsoluteUrl("/images/shedhaus-sign.webp"),
    description:
      "Sells and installs sheds, garages, barns, playhouses, pavilions, and outdoor structures.",
    telephone: "+1-845-855-5989",
    email: "info@theshedhaus.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "816 Route 22",
      addressLocality: "Pawling",
      postalCode: "12564",
      addressRegion: "NY",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Westchester County, NY",
      },
      {
        "@type": "AdministrativeArea",
        name: "Putnam County, NY",
      },
      {
        "@type": "AdministrativeArea",
        name: "Dutchess County, NY",
      },
      {
        "@type": "AdministrativeArea",
        name: "Fairfield County, CT",
      },
      ...[
        "Ardsley",
        "Hastings",
        "Mount Pleasant",
        "Elmsford",
        "North Castle",
        "Verplank",
        "Buchanan",
        "New Castle",
      ].map((name) => ({
        "@type": "Place",
        name: `${name}, NY`,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "15:00",
      },
    ],
    sameAs: [
      "https://facebook.com/theshedhaus",
      "https://instagram.com/theshedhaus",
    ],
  };
}
