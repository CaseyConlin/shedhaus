import type { Metadata } from "next";
import { JsonLdScript } from "@/components/ProductStructuredData";
import { AreaLinkGrid } from "@/components/areasServed/AreaLinkGrid";
import { PageHeader } from "@/components/text/PageHeader";
import {
  generateCollectionStructuredData,
  getAbsoluteUrl,
  generateBreadcrumbStructuredData,
} from "@/lib/sanity/structured-data";
import { getAllServiceCounties } from "@/lib/sanity/content";

export function generateMetadata(): Metadata {
  const canonicalUrl = getAbsoluteUrl("/areas-served");

  return {
    title: "Areas We Serve",
    description:
      "The Shed Haus delivers and installs sheds and outdoor structures throughout Westchester, Putnam, Dutchess, and Fairfield Counties.",
    alternates: { canonical: canonicalUrl },
    openGraph: { url: canonicalUrl },
  };
}

export default async function AreasServedPage() {
  const counties = await getAllServiceCounties();
  const collectionData = generateCollectionStructuredData({
    name: "Areas We Serve",
    description:
      "The Shed Haus delivers and installs sheds and outdoor structures throughout Westchester, Putnam, Dutchess, and Fairfield Counties.",
    path: "/areas-served",
    items: (counties || []).map((county) => ({
      name: county.name,
      path: `/areas-served/${county.seo.slug.current}`,
    })),
  });
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "Areas Served", path: "/areas-served" },
  ]);

  return (
    <>
      <JsonLdScript data={collectionData} />
      <JsonLdScript data={breadcrumbData} />
      <PageHeader
        title="Areas We Serve"
        description="We deliver and install sheds and outdoor structures throughout Westchester, Putnam, Dutchess, and Fairfield Counties. Choose your county to learn more about local delivery and installation."
      />
      <section className="flex w-full flex-col items-center gap-8 py-12">
        <AreaLinkGrid
          ariaLabel="Counties served"
          areas={(counties || []).map((county) => ({
            name: county.name,
            href: `/areas-served/${county.seo.slug.current}`,
            description: county.pageDescription,
            imageUrl: county.image?.asset?.url,
            imageAlt: county.image?.alt,
          }))}
        />
      </section>
    </>
  );
}
