import type { ComponentProps } from "react";
import type { PortableText } from "next-sanity";

/**
 * Sanity Data Types
 * Shared type definitions for Sanity CMS data structures
 */

export type SanityPortableText = NonNullable<
  ComponentProps<typeof PortableText>["value"]
>;

export interface GalleryItem {
  image?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface SanitySeo {
  title?: string;
  description?: string;
  slug: {
    current: string;
  };
  socialImage?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
}

export interface ServiceAreaImage {
  asset?: {
    url: string;
  };
  alt?: string;
}

export interface ServiceAreaTown {
  name: string;
  seo: SanitySeo;
  pageTitle: string;
  pageDescription: string;
  body: SanityPortableText;
  image?: ServiceAreaImage;
}

export interface ServiceCounty {
  _id?: string;
  name: string;
  seo: SanitySeo;
  pageTitle: string;
  pageDescription: string;
  image?: ServiceAreaImage;
  towns?: ServiceAreaTown[];
}

export interface ServiceAreaRouteData extends ServiceAreaTown {
  county: {
    name: string;
    seo: {
      slug: {
        current: string;
      };
    };
  };
}

export interface ServiceAreaSitemapEntry {
  name: string;
  seo: {
    slug: {
      current: string;
    };
  };
  county?: {
    name: string;
    seo?: {
      slug?: {
        current?: string;
      };
    };
  };
}
