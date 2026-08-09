import type { Metadata } from "next";
import { client } from "./client";
import {
  OUR_PROCESS_PAGE_QUERY,
  FAQ_PAGE_QUERY,
  ABOUT_PAGE_QUERY,
  CONFIGURATION_PAGE_QUERY,
  CONTACT_PAGE_QUERY,
  QUOTE_PAGE_QUERY,
  PRODUCT_PAGE_QUERY,
} from "./queries";

interface SeoData {
  title?: string;
  description?: string;
  socialImage?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  slug?: {
    current: string;
  };
}

interface PageWithSeo {
  seo?: SeoData;
}

/**
 * Convert Sanity SEO object to Next.js Metadata
 */
export function convertSeoToMetadata(
  seo?: SeoData,
  pageUrl?: string,
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://theshedhaus.com";
  const title = seo?.title || "The Shed Haus";
  const description =
    seo?.description || "Premium outdoor structures and sheds";
  const imageUrl = seo?.socialImage?.asset?.url;
  const imageAlt = seo?.socialImage?.alt || title;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    openGraph: {
      title,
      description,
      url: pageUrl || baseUrl,
      siteName: "The Shed Haus",
      type: "website",
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: imageAlt,
            type: "image/jpeg",
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && {
        images: [imageUrl],
      }),
    },
    alternates: {
      canonical: pageUrl || baseUrl,
    },
  };
}

/**
 * Fetch and generate metadata for Our Process page
 */
export async function getOurProcessPageMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(OUR_PROCESS_PAGE_QUERY);
    return convertSeoToMetadata(page?.seo, "/about/our-process");
  } catch (error) {
    console.error("Error fetching Our Process page metadata:", error);
    return {
      title: "Our Process | The Shed Haus",
      description: "Learn how The Shed Haus builds premium structures",
    };
  }
}

/**
 * Fetch and generate metadata for FAQ page
 */
export async function getFaqPageMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(FAQ_PAGE_QUERY);
    return convertSeoToMetadata(page?.seo, "/faq");
  } catch (error) {
    console.error("Error fetching FAQ page metadata:", error);
    return {
      title: "Frequently Asked Questions | The Shed Haus",
      description:
        "Common questions about The Shed Haus structures and delivery",
    };
  }
}

/**
 * Fetch and generate metadata for About page
 */
export async function getAboutPageMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(ABOUT_PAGE_QUERY);
    return convertSeoToMetadata(page?.seo, "/about");
  } catch (error) {
    console.error("Error fetching About page metadata:", error);
    return {
      title: "About The Shed Haus",
      description: "Meet the team behind The Shed Haus",
    };
  }
}

/**
 * Generic metadata fetcher for any page type by slug
 */
export async function getPageMetadataBySlug(
  pageType: string,
  slug: string,
  pageUrl: string,
): Promise<Metadata> {
  try {
    const query = `*[_type == "${pageType}" && seo.slug.current == "${slug}"][0] { seo }`;
    const page = await client.fetch(query);
    return convertSeoToMetadata(page?.seo, pageUrl);
  } catch (error) {
    console.error(`Error fetching metadata for ${pageType}/${slug}:`, error);
    return {
      title: "The Shed Haus",
      description: "Premium outdoor structures",
    };
  }
}

/**
 * Configuration page metadata
 */
export async function getConfigurationPageMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(CONFIGURATION_PAGE_QUERY);
    return convertSeoToMetadata(page?.seo);
  } catch (error) {
    console.error("Error fetching configuration page metadata:", error);
    return {
      title: "Design Your Shed | The Shed Haus",
      description: "Customize your shed design",
    };
  }
}

/**
 * Contact page metadata
 */
export async function getContactPageMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(CONTACT_PAGE_QUERY);
    return convertSeoToMetadata(page?.seo);
  } catch (error) {
    console.error("Error fetching contact page metadata:", error);
    return {
      title: "Contact Us | The Shed Haus",
      description: "Get in touch with us",
    };
  }
}

/**
 * Quote page metadata
 */
export async function getQuotePageMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(QUOTE_PAGE_QUERY);
    return convertSeoToMetadata(page?.seo);
  } catch (error) {
    console.error("Error fetching quote page metadata:", error);
    return {
      title: "Request a Quote | The Shed Haus",
      description: "Get a free quote for your shed",
    };
  }
}

/**
 * Product page metadata by slug
 */
export async function getProductPageMetadata(slug: string): Promise<Metadata> {
  try {
    const query = PRODUCT_PAGE_QUERY(slug);
    const page = await client.fetch(query);
    return convertSeoToMetadata(page?.seo);
  } catch (error) {
    console.error(`Error fetching product page metadata for ${slug}:`, error);
    return {
      title: "Product | The Shed Haus",
      description: "Premium outdoor sheds",
    };
  }
}
