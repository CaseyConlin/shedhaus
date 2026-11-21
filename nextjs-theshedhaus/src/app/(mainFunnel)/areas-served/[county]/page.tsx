import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/components/ProductStructuredData";
import { AreaLinkGrid } from "@/components/areasServed/AreaLinkGrid";
import { InventorySection } from "@/components/InventorySection";
import { PageHeader } from "@/components/text/PageHeader";
import {
  getAllCategories,
  getAllServiceCounties,
  getServiceCountyBySlug,
} from "@/lib/sanity/content";
import {
  generateBreadcrumbStructuredData,
  generateCollectionStructuredData,
  getAbsoluteUrl,
} from "@/lib/sanity/structured-data";

interface CountyPageProps {
  params: Promise<{ county: string }>;
}

export async function generateStaticParams() {
  const counties = await getAllServiceCounties();
  return (counties || []).map((county) => ({
    county: county.seo.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: CountyPageProps): Promise<Metadata> {
  const { county: countySlug } = await params;
  const county = await getServiceCountyBySlug(countySlug);

  if (!county) return { title: "Service Area Not Found" };

  const canonicalUrl = getAbsoluteUrl(`/areas-served/${countySlug}`);
  return {
    title: county.seo.title || county.pageTitle,
    description: county.seo.description || county.pageDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      ...(county.image?.asset?.url && {
        images: [county.image.asset.url],
      }),
    },
  };
}

export default async function CountyPage({ params }: CountyPageProps) {
  const { county: countySlug } = await params;
  const [county, categories] = await Promise.all([
    getServiceCountyBySlug(countySlug),
    getAllCategories(),
  ]);

  if (!county) notFound();

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "Areas Served", path: "/areas-served" },
    { name: county.name, path: `/areas-served/${countySlug}` },
  ]);
  const towns = county.towns || [];
  const collectionData = generateCollectionStructuredData({
    name: county.pageTitle,
    description: county.pageDescription,
    path: `/areas-served/${countySlug}`,
    items: towns.map((town) => ({
      name: town.name,
      path: `/areas-served/${countySlug}/${town.seo.slug.current}`,
    })),
  });

  return (
    <>
      <JsonLdScript data={collectionData} />
      <JsonLdScript data={breadcrumbData} />
      <PageHeader
        title={county.pageTitle}
        description={county.pageDescription}
      />
      {towns.length > 0 && (
        <section className="flex w-full flex-col items-center gap-8 py-12">
          <h2 className="px-4 text-center font-montserrat text-2xl font-bold text-primary">
            Towns We Serve in {county.name}
          </h2>
          <p className="max-w-2xl px-4 text-center text-lg text-neutral-700">
            We provide design, delivery, and installation services for sheds and
            structures in all towns in {county.name} including those below.
          </p>
          <AreaLinkGrid
            ariaLabel={`Towns served in ${county.name}`}
            areas={towns.map((town) => ({
              name: town.name,
              href: `/areas-served/${countySlug}/${town.seo.slug.current}`,
              description: town.pageDescription,
              imageUrl: town.image?.asset?.url,
              imageAlt: town.image?.alt,
            }))}
          />
        </section>
      )}
      <InventorySection
        categories={categories || []}
        showButtons
        secondaryAction={{
          text: "Request a Quote",
          link: "/request-a-quote",
          variant: "white",
        }}
      />
    </>
  );
}
