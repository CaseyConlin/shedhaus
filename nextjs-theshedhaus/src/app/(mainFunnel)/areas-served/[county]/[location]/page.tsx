import type { Metadata } from "next";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/components/ProductStructuredData";
import { InventorySection } from "@/components/InventorySection";
import { PageHeader } from "@/components/text/PageHeader";
import { LinkButton } from "@/components/buttons/LinkButton";
import {
  getAllCategories,
  getAllServiceAreas,
  getServiceAreaBySlugs,
} from "@/lib/sanity/content";
import {
  generateBreadcrumbStructuredData,
  generateServiceAreaPageStructuredData,
  getAbsoluteUrl,
} from "@/lib/sanity/structured-data";

interface LocationPageProps {
  params: Promise<{ county: string; location: string }>;
}

export async function generateStaticParams() {
  const locations = await getAllServiceAreas();
  return (locations || []).flatMap((location) => {
    const countySlug = location.county?.seo?.slug?.current;
    const locationSlug = location.seo?.slug?.current;
    if (!countySlug || !locationSlug) return [];
    return [{ county: countySlug, location: locationSlug }];
  });
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { county: countySlug, location: locationSlug } = await params;
  const location = await getServiceAreaBySlugs(countySlug, locationSlug);

  if (!location) return { title: "Service Area Not Found" };

  const canonicalUrl = getAbsoluteUrl(
    `/areas-served/${countySlug}/${locationSlug}`,
  );
  return {
    title: location.seo.title || location.pageTitle,
    description: location.seo.description || location.pageDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      ...(location.image?.asset?.url && {
        images: [location.image.asset.url],
      }),
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { county: countySlug, location: locationSlug } = await params;
  const [location, categories] = await Promise.all([
    getServiceAreaBySlugs(countySlug, locationSlug),
    getAllCategories(),
  ]);

  if (!location) notFound();

  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Home", path: "/" },
    { name: "Areas Served", path: "/areas-served" },
    {
      name: location.county.name,
      path: `/areas-served/${countySlug}`,
    },
    {
      name: location.name,
      path: `/areas-served/${countySlug}/${locationSlug}`,
    },
  ]);
  const pageStructuredData = generateServiceAreaPageStructuredData({
    name: location.pageTitle,
    description: location.pageDescription,
    path: `/areas-served/${countySlug}/${locationSlug}`,
  });

  return (
    <>
      <JsonLdScript data={pageStructuredData} />
      <JsonLdScript data={breadcrumbData} />
      <PageHeader
        title={location.pageTitle}
        description={location.pageDescription}
      />
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:px-2">
        {location.image?.asset?.url && (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-neutral-100 shadow-lg md:w-1/2">
            <Image
              src={location.image.asset.url}
              alt={location.image.alt || location.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        )}
        <div className="flex flex-col items-start gap-4 md:flex-1">
          <div className="prose prose-neutral max-w-none font-inter">
            <PortableText value={location.body} />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <LinkButton
              text="See All Our Structures"
              link="/signature-styles"
            />
            <LinkButton
              text="Request a Quote"
              link="/request-a-quote"
              variant="white"
            />
          </div>
        </div>
      </section>
      <InventorySection categories={categories || []} />
    </>
  );
}
