import { InventorySection } from "@/components/InventorySection";
import { PageHeader } from "@/components/text/PageHeader";
import { getAllCategories } from "@/lib/sanity/content";

const STRUCTURES_PAGE_SLUG = "Structures";

export default async function Page() {
  const categories = await getAllCategories();

  return (
    <>
      <PageHeader
        title={STRUCTURES_PAGE_SLUG}
        description={`Details about ${STRUCTURES_PAGE_SLUG}`}
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <InventorySection categories={categories || []} />
      </div>
    </>
  );
}
