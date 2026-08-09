import type { Metadata } from "next";
import { PageHeader } from "@/components/text/PageHeader";
import { ContactFooter } from "../../components/ContactFooter";
import { getContactPageData } from "@/lib/sanity/content";
import { getContactPageMetadata } from "@/lib/sanity/metadata";
import { portableTextToString } from "@/lib/utils/portableText";

export async function generateMetadata(): Promise<Metadata> {
  return getContactPageMetadata();
}

export default async function Page() {
  const pageData = await getContactPageData();

  if (!pageData) {
    return (
      <>
        <PageHeader title="Contact" description="Get in touch with us" />
        <div>Error loading page data. Please try again later.</div>
      </>
    );
  }

  const { pageTitle, pageDescription } = pageData;

  return (
    <>
      <PageHeader
        title={pageTitle || "Contact"}
        description={
          pageDescription
            ? portableTextToString(pageDescription)
            : "Get in touch with us"
        }
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <ContactFooter />
      </div>
    </>
  );
}
