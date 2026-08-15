import { Metadata } from "next";
import { PortableText } from "next-sanity";
import { PageHeader } from "@/components/text/PageHeader";
import { KeyFeatures } from "@/components/text/KeyFeatures";
import { SpecTable } from "@/components/text/SpecTable";
import { ProductGallery } from "@/components/ProductGallery";
import { getProductPageData } from "@/lib/sanity/content";
import { GalleryItem } from "@/lib/sanity/types";
import { LinkButton } from "@/components/buttons/LinkButton";

interface ProductPageProps {
  params: Promise<{
    category: string;
    productSlug: string;
  }>;
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
  const { productSlug } = await params;
  const productData = await getProductPageData(productSlug);

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

  return (
    <>
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
    </>
  );
}
