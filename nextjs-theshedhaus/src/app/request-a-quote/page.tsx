import { PageHeader } from "@/components/text/PageHeader";
import { RequestAQuoteForm } from "@/components/RequestAQuoteForm";
import { SideBarCard } from "@/components/SideBarCard";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <PageHeader title={slug} description={`Details about ${slug}`} />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl md:gap-10 py-4 md:py-8md:px-0">
          <div className="flex-3 flex flex-col justify-start items-start min-w-screen md:min-w-xl gap-4 px-4 md:px-0">
            <RequestAQuoteForm />
          </div>
          <div className="hidden md:flex flex-1 flex-col items-start justify-start w-full">
            <SideBarCard
              topBadgeTitle="We Review Every Request"
              topBadgeText={[
                "We believe you should know exactly what your project costs up front. Once you complete the form on the left, we’ll instantly provide our current, complete retail price list. You can see the exact baseline costs for every style, size, and material option on our lot so you can plan your budget with total confidence.",
              ]}
              bannerTitle="What happens next?"
              bodyText={[
                "Instant Access \n You’ll immediately receive the full, up-to-date baseline price sheet for all standard models.",
                "",
                "Size & Style Comparison \n Easily map out costs across our entire footprint, from compact storage units to heavy-duty workshops.",
                "",
                "Budget Your Site \n Use the price sheet to calculate your total investment alongside our local delivery and stone pad preparation guides.",
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
