import { ReactNode } from "react";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import { PageHeader } from "@/components/text/PageHeader";
import { KeyFeatures } from "@/components/text/KeyFeatures";
import { SpecTable } from "@/components/text/SpecTable";
import { ProductGallery } from "@/components/ProductGallery";
import { getProductPageData, getSuggestedProducts } from "@/lib/sanity/content";
import { GalleryItem } from "@/lib/sanity/types";
import { LinkButton } from "@/components/buttons/LinkButton";
import { createClient } from "next-sanity";
import { generateProductStructuredData } from "@/lib/sanity/structured-data";
import { ProductStructuredData } from "@/components/ProductStructuredData";
import { ProductList } from "@/components/productList/ProductList";

const preferredTowns = [
  "Ardsley",
  "Hastings",
  "Mount Pleasant",
  "Elmsford",
  "North Castle",
  "Verplank",
  "Buchanan",
  "New Castle",
];

const otherTowns = [
  "Accord",
  "Adams",
  "Airmont",
  "Alford",
  "Amawalk",
  "Amenia",
  "Ancram",
  "Ancramdale",
  "Armonk",
  "Austerlitz",
  "Baldwin Place",
  "Beacon",
  "Bedford",
  "Bedford Corners",
  "Bedford Hills",
  "Bedford Village",
  "Bethel",
  "Bohemia",
  "Brewster",
  "Brewster Hill",
  "Briarcliff",
  "Briarcliff Manor",
  "Bridgehampton",
  "Bridgewater",
  "Bronxville",
  "Brookfield",
  "Campbell Hall",
  "Carmel",
  "Chappaqua",
  "Chelsea",
  "Clinton Corners",
  "Cold Spring",
  "Congers",
  "Copake",
  "Copake Falls",
  "Copake Lake",
  "Cornwall",
  "Cornwall Bridge",
  "Cortlandt Manor",
  "Cos Cob",
  "Cross River",
  "Croton on Hudson",
  "Danbury",
  "Darien",
  "Dobbs Ferry",
  "Dover",
  "Dover Plains",
  "East FIshkill",
  "Eastchester",
  "Elizaville",
  "Falls Village",
  "Fishkill",
  "Fresh Meadows",
  "Garrison",
  "Gaylordsville",
  "Gent",
  "Glenham",
  "Goldens Bridge",
  "Goshen",
  "Granite Springs",
  "Great Barrington",
  "Greenwich",
  "Harrison",
  "Hartsdale",
  "Hawthorne",
  "Highland",
  "Hillsdale",
  "HOLBROOK",
  "Holmes",
  "Hopewell Junction",
  "Hyde Park",
  "Katonah",
  "Kent",
  "Kent Lakes NY",
  "Kent.",
  "Kingston",
  "Lagrange",
  "Lagrangeville",
  "Lake Carmel",
  "Lake Peekskill",
  "Lakeville",
  "Larchmont",
  "Leola",
  "Lewisboro",
  "Liberty",
  "Lincolndale",
  "Litchfield",
  "Lloyd Harbor",
  "Mahopac",
  "Mamaroneck",
  "Mill River",
  "Millbrook",
  "Millerton",
  "Modena",
  "Montrose",
  "Montvale",
  "Mount Kisco",
  "Mount Washington",
  "Mt. Kisco",
  "Mt. Washington",
  "New Britain",
  "New Canaan",
  "New City",
  "New Fairfield",
  "New Marlboro",
  "New Marlborough",
  "New Milford",
  "New Paltz",
  "New Preston",
  "New Rochelle",
  "New York",
  "Newburgh",
  "Newton",
  "Newtown",
  "Norwalk",
  "North Egremont",
  "North Salem",
  "Northcreek",
  "Norwalk",
  "Ossining",
  "Palisades",
  "Patterson",
  "Pawling",
  "Peekskill",
  "Pelham",
  "Pine Plains",
  "Plainview",
  "Pleasant Valley",
  "Pleasantville",
  "Port Chester",
  "Poughkeepsie",
  "Poughquag",
  "Pound Ridge",
  "Purchase",
  "Purdys",
  "Putnam Lake",
  "Putnam Valley",
  "Red Hook",
  "Redding",
  "Rhinebeck",
  "Richmond",
  "Ridgefield",
  "Ridgewood",
  "Rock Hill",
  "Roscoe",
  "Roxbury",
  "Rye",
  "Salisbury",
  "Salt Point",
  "Sandy Hook",
  "Santa Fe",
  "Scarsdale",
  "Sharon",
  "Sherman",
  "Sleepy Hollow",
  "Somers",
  "South Kent",
  "South Salem",
  "South Windsor",
  "Southbury",
  "Southeast",
  "Southhold",
  "Spencer",
  "Stamford",
  "Stanfordville",
  "Stony Point",
  "Stormville",
  "Tarrytown",
  "Thornwood",
  "Torrington",
  "Tyringham",
  "Union Vale",
  "Valhalla",
  "Verbank",
  "Waccabuc",
  "Walden",
  "Wamtagh",
  "Wappingers Falls",
  "Warren",
  "Washington",
  "Wassaic",
  "West Cornwall",
  "West Harrison",
  "Westport",
  "White Plains",
  "Windsor Mill",
  "Wingdale",
  "Woodbury",
  "Yonkers",
  "Yorktown",
  "Yorktown Hgts",
];
const getLocalityMessage = (): ReactNode => {
  const randomPreferredTown1 =
    preferredTowns[Math.floor(Math.random() * preferredTowns.length)];
  const newTownList = preferredTowns.filter(
    (town) => town !== randomPreferredTown1,
  );
  const randomPreferredTown2 =
    newTownList[Math.floor(Math.random() * newTownList.length)];
  const randomOtherTown =
    otherTowns[Math.floor(Math.random() * otherTowns.length)];

  return (
    <p className="text-center  font-medium">
      We deliver to{" "}
      <span className="font-bold text-primary">{randomPreferredTown1}</span>,{" "}
      <span className="font-bold text-primary">{randomPreferredTown2}</span>,
      and other towns in{" "}
      <span className="font-bold">
        Westchester, Putnam, Dutchess, and Fairfield Counties
      </span>
      , including{" "}
      <span className="font-bold text-primary">{randomOtherTown}</span>.
    </p>
  );
};
interface ProductPageProps {
  params: Promise<{
    category: string;
    productSlug: string;
  }>;
}

interface StaticProductParams {
  seo: {
    slug: {
      current: string;
    };
  };
  category: string;
}

export async function generateStaticParams() {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    if (!projectId || !dataset) {
      console.error("[generateStaticParams] Missing Sanity credentials");
      return [];
    }

    const client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
    });

    const products = await Promise.race([
      client.fetch<StaticProductParams[]>(`
        *[_type == "productPage" && defined(seo.slug.current)] {
          seo { slug { current } },
          category
        }
      `),
      new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error("Sanity query timeout after 5s")),
          5000,
        ),
      ),
    ]);

    if (!products || products.length === 0) {
      return [];
    }

    const params = products.flatMap((product) => {
      const categories = Array.isArray(product.category)
        ? product.category
        : [product.category];

      return categories.map((cat) => ({
        productSlug: product.seo.slug.current,
        category: cat,
      }));
    });

    return params;
  } catch (error) {
    console.error(
      "[generateStaticParams] Error:",
      error instanceof Error ? error.message : String(error),
    );
    return [];
  }
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const productData = await getProductPageData(productSlug);

  if (!productData) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: productData.seo?.title || productData.pageTitle,
    description: productData.seo?.description || productData.pageDescription,
    openGraph: productData.seo?.socialImage
      ? {
          images: [productData.seo.socialImage.asset.url],
        }
      : undefined,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug, category } = await params;
  const productData = await getProductPageData(productSlug);
  const suggestedProducts = await getSuggestedProducts(category, productSlug);

  if (!productData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  // Convert gallery to ProductGallery format
  const galleryImages =
    productData.gallery?.map((item: GalleryItem, idx: number) => ({
      id: idx + 1,
      src: item.image?.asset?.url || "/images/tempImage.png",
      alt: item.image?.alt || productData.productName,
    })) || [];

  // Specs and Features from Sanity
  const specs = productData.specs || [];
  const features = productData.features || [];

  // Generate structured data for SEO
  const structuredData = generateProductStructuredData(
    productData,
    category,
    productSlug,
  );

  return (
    <>
      <ProductStructuredData data={structuredData} />
      <PageHeader
        title={productData.pageTitle}
        description={
          productData.pageDescription ? (
            <PortableText value={productData.pageDescription} />
          ) : (
            productData.pageTitle
          )
        }
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl gap-4 md:gap-10 py-4 md:py-8 md:px-0">
          <div className="flex-4 flex justify-start items-start min-w-0">
            <ProductGallery galleryImages={galleryImages} />
          </div>
          <div className="flex-3 flex flex-col items-start justify-start w-full sticky top-0 gap-6">
            <KeyFeatures features={features} />
            <SpecTable specs={specs} />
            <div className="flex flex-col md:flex-row gap-2 w-full px-2 md:px-0">
              <LinkButton
                link="/request-a-quote"
                text="Request a Quote"
                className="grow"
              />
              <LinkButton
                variant="white"
                link="/configuration"
                text="Custom Options"
                className="grow"
              />
            </div>
          </div>
        </div>
      </div>
      {suggestedProducts && suggestedProducts.length > 0 && (
        <div className="w-full my-12">
          <div className="bg-[#f2f2f2] border-gray-300 border-[0.5px] shadow-xl py-5">
            <div className="flex flex-col items-center justify-center w-screen">
              <div className="w-full md:px-4 py-8">
                <h2 className="text-2xl font-bold text-center font-montserrat">
                  You Might Also Like
                </h2>
                <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl gap-4 md:gap-10 py-4 md:py-8 md:px-0 mx-auto">
                  <ProductList
                    products={suggestedProducts}
                    currentCategory={category}
                  />
                </div>
                <div>{getLocalityMessage()}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
