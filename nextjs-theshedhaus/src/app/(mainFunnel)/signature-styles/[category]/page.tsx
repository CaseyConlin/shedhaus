import { Metadata } from "next";
import { PageHeader } from "@/components/text/PageHeader";
import { ProductList } from "@/components/productList/ProductList";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/sanity/content";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryData = await getCategoryBySlug(category);

  if (!categoryData) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: categoryData.seo?.title || categoryData.pageTitle,
    description: categoryData.seo?.description || categoryData.pageDescription,
    openGraph: categoryData.seo?.socialImage
      ? {
          images: [categoryData.seo.socialImage.asset.url],
        }
      : undefined,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryData = await getCategoryBySlug(category);
  const products = await getProductsByCategory(category);
  console.log("products", products);

  if (!categoryData || !products) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Category not found</h1>
      </div>
    );
  }
  return (
    <>
      <PageHeader
        title={categoryData.pageTitle}
        description={categoryData.pageDescription}
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl gap-4 md:gap-10 py-4 md:py-8 md:px-0">
          <ProductList products={products} />
        </div>
      </div>
    </>
  );
}
