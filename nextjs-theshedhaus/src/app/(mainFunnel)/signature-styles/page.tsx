import type { Metadata } from "next";
import { InventorySection } from "@/components/InventorySection";
import { PageHeader } from "@/components/text/PageHeader";
import { getAllCategories } from "@/lib/sanity/content";
import { JsonLdScript } from "@/components/ProductStructuredData";
import {
  generateBreadcrumbStructuredData,
  generateIndexCollectionStructuredData,
  getAbsoluteUrl,
} from "@/lib/sanity/structured-data";

const STRUCTURES_PAGE_SLUG = "Structures";

export function generateMetadata(): Metadata {
  const canonicalUrl = getAbsoluteUrl("/signature-styles");

  return {
    title: "Structures",
    description:
      "Explore sheds, garages, barns, playhouses, and other outdoor structures.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      url: canonicalUrl,
    },
  };
}

export default async function Page() {
  const categories = await getAllCategories();
  const collectionData = generateIndexCollectionStructuredData(
    categories || [],
  );
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "Structures", path: "/signature-styles" },
  ]);

  return (
    <>
      <JsonLdScript data={collectionData} />
      <JsonLdScript data={breadcrumbData} />
      <PageHeader
        title={STRUCTURES_PAGE_SLUG}
        description={`Explore custom sheds, studios, cabins, and outdoor structures from The Shed Haus—crafted for durability, versatility, and backyard living. Browse all available builds and find the right fit for your space.`}
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <InventorySection categories={categories || []} />
      </div>
    </>
  );
}
