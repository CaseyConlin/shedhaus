/**
 * Sanity Data Types
 * Shared type definitions for Sanity CMS data structures
 */

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
