import { InventorySection } from "@/components/InventorySection";
import { PageHeader } from "@/components/text/PageHeader";

const STRUCTURES_PAGE_SLUG = "Structures";

export default async function Page() {
  //   const OUR_WORK_QUERY = `*[_type == "ourWork" && slug.current == "${STRUCTURES_PAGE_SLUG}"]`;

  //   const ourWorkData = await sanityFetchData(OUR_WORK_QUERY);

  //   const { title, body } = ourWorkData[0];

  return (
    <>
      <PageHeader
        title={STRUCTURES_PAGE_SLUG}
        description={`Details about ${STRUCTURES_PAGE_SLUG}`}
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <InventorySection />
      </div>
    </>
  );
}
