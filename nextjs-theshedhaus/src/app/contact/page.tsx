import { PageHeader } from "@/components/text/PageHeader";
import { ContactFooter } from "../../components/ContactFooter";

const CONTACT_PAGE_SLUG = "contact";

export default async function Page() {
  return (
    <>
      <PageHeader
        title={CONTACT_PAGE_SLUG}
        description={`Details about ${CONTACT_PAGE_SLUG}`}
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <ContactFooter className="-mt-12" />
      </div>
    </>
  );
}
