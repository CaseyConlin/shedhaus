import type { Metadata } from "next";
import { PageHeader } from "@/components/text/PageHeader";
import { SideBarCard } from "@/components/SideBarCard";
import {
  FAQDropdown,
  type FAQDropdownProps,
} from "@/components/text/FAQDropdown";
import { getFaqPageData } from "@/lib/sanity/content";
import { getFaqPageMetadata } from "@/lib/sanity/metadata";
import { portableTextToString } from "@/lib/utils/portableText";

export async function generateMetadata(): Promise<Metadata> {
  return getFaqPageMetadata();
}

export default async function Page() {
  const pageData = await getFaqPageData();

  if (!pageData) {
    return (
      <>
        <PageHeader title="FAQ" description="Frequently Asked Questions" />
        <div>Error loading page data. Please try again later.</div>
      </>
    );
  }

  const { pageTitle, pageDescription, faqs } = pageData;
  return (
    <>
      <PageHeader
        title={pageTitle || "FAQ"}
        description={
          pageDescription
            ? portableTextToString(pageDescription)
            : "Frequently Asked Questions"
        }
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl md:gap-10 py-4 md:py-8md:px-0 ">
          <div className="flex-3 flex flex-col justify-start items-start min-w-screen md:min-w-xl gap-4 px-4 md:px-0">
            {faqs.map((item: FAQDropdownProps, index: number) => (
              <FAQDropdown
                key={index}
                question={item.question}
                answer={portableTextToString(item.answer)}
              />
            ))}
          </div>
          <div className="hidden md:flex flex-1 flex-col items-start justify-start w-full lg:sticky lg:top-8">
            <SideBarCard
              topBadgeTitle="Still have questions?"
              bodyText={[
                "From custom build configurations to site delivery clearance, we’re here to make sure your project goes smoothly.\nContact us now.",
              ]}
              phoneNumber=" 845 855 5989"
              emailAddress="info@theshedhaus.com"
            />
          </div>
        </div>
      </div>
    </>
  );
}
