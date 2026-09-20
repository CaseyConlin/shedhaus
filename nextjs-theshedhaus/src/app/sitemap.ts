import { MetadataRoute } from "next";
import { getAllCategories, getProductsByCategory } from "@/lib/sanity/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || "http://localhost:3000";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/configuration`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/signature-styles`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/request-a-quote`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  // Dynamic product/category pages
  try {
    const categories = await getAllCategories();

    if (!categories || categories.length === 0) {
      return staticPages;
    }

    const dynamicPages: MetadataRoute.Sitemap = [];

    for (const category of categories) {
      // Add category page
      dynamicPages.push({
        url: `${baseUrl}/signature-styles/${category.slug.current}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
      });

      // Add products for this category
      const products = await getProductsByCategory(category.slug.current);

      if (products && products.length > 0) {
        for (const product of products) {
          // Option B: Use only the first category to avoid duplicate product URLs
          const firstCategory = Array.isArray(product.category)
            ? product.category[0]
            : product.category;

          // Only add product if it belongs to current category (avoid duplicates)
          if (firstCategory === category.slug.current) {
            dynamicPages.push({
              url: `${baseUrl}/signature-styles/${category.slug.current}/${product.seo.slug.current}`,
              lastModified: new Date(),
              changeFrequency: "monthly",
              priority: 0.8,
            });
          }
        }
      }
    }

    return [...staticPages, ...dynamicPages];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticPages;
  }
}
