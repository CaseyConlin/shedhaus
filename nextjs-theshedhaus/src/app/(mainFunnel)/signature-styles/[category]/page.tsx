import { Metadata } from "next";
import { PageHeader } from "@/components/text/PageHeader";
import { ProductList } from "@/components/productList/ProductList";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/sanity/content";
import { createClient } from "next-sanity";

export const revalidate = 3600; // Revalidate every hour for ISR

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

interface StaticCategoryParams {
  slug: {
    current: string;
  };
}

export async function generateStaticParams() {
  try {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

    console.log(
      `[generateStaticParams] Category: Starting with projectId=${projectId}, dataset=${dataset}`,
    );

    if (!projectId || !dataset) {
      console.error(
        "[generateStaticParams] Category: Missing Sanity credentials",
      );
      return [];
    }

    const client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: false,
    });

    const categories = await Promise.race([
      client.fetch<StaticCategoryParams[]>(`
        *[_type == "category" && defined(slug.current)] {
          slug { current }
        }
      `),
      new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error("Sanity query timeout after 5s")),
          5000,
        ),
      ),
    ]);

    console.log(
      `[generateStaticParams] Category: Successfully fetched ${categories.length} categories`,
    );

    if (!categories || categories.length === 0) {
      console.warn(
        "[generateStaticParams] Category: No categories found, returning empty array",
      );
      return [];
    }

    const params = categories.map((cat) => ({
      category: cat.slug.current,
    }));

    console.log(
      `[generateStaticParams] Category: Returning ${params.length} param sets`,
    );
    return params;
  } catch (error) {
    console.error(
      "[generateStaticParams] Category Error:",
      error instanceof Error ? error.message : String(error),
    );
    return [];
  }
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
