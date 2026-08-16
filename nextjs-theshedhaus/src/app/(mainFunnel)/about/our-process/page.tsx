import type { Metadata } from "next";
import { PageHeader } from "@/components/text/PageHeader";
import { SideBarCard } from "@/components/SideBarCard";
import { ProcessCard, type ProcessCardProps } from "@/components/ProcessCard";
import { LinkButton } from "@/components/buttons/LinkButton";
import { getOurProcessPageData } from "@/lib/sanity/content";
import { getOurProcessPageMetadata } from "@/lib/sanity/metadata";
import { portableTextToString } from "@/lib/utils/portableText";

export async function generateMetadata(): Promise<Metadata> {
  return getOurProcessPageMetadata();
}

export default async function Page() {
  const pageData = await getOurProcessPageData();

  // Fallback if Sanity fails
  if (!pageData) {
    return (
      <>
        <PageHeader
          title="Our Process"
          description="Learn how we build your structures"
        />
        <div>Error loading page data. Please try again later.</div>
      </>
    );
  }

  const { pageTitle, pageDescription, steps } = pageData;
  const processSteps = steps || [];
  return (
    <>
      <PageHeader
        title={pageTitle || "Our Process"}
        description={
          pageDescription
            ? portableTextToString(pageDescription)
            : "Learn how we build your structures"
        }
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl md:gap-15 py-4 md:py-8md:px-0">
          <div className="flex-3 flex flex-col justify-start items-start min-w-screen md:min-w-xl  px-4 md:px-0">
            {processSteps.map((step: ProcessCardProps, index: number) => {
              return (
                <div key={index} className="relative w-full">
                  <ProcessCard
                    title={step.title}
                    description={[
                      portableTextToString(step.description) ||
                        "Process step details",
                    ]}
                    icon={step.icon}
                    order={step.order}
                    odd={index % 2 !== 0}
                  />
                  {index < processSteps.length - 1 && (
                    <div
                      className="relative h-8 md:h-10 w-full -mt-1 -mb-1"
                      aria-hidden="true"
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary z-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="hidden md:flex flex-1 flex-col items-start justify-start w-full lg:sticky lg:top-8">
            <SideBarCard
              topBadgeTitle="We’re Your Project Partner"
              bannerTitle="Not just a shed purchase"
              bodyText={[
                "From navigating site logistics and foundation requirements to coordinating final placement, we oversee the entire process and focus on the details so you can focus on the finished space.",
              ]}
              phoneNumber=" 845 855 5989"
            >
              <LinkButton
                text="Request a Quote"
                link="/request-a-quote"
                className="w-full"
              />
            </SideBarCard>
          </div>
        </div>
      </div>
    </>
  );
}
