import type { Metadata } from "next";
import { PageHeader } from "@/components/text/PageHeader";
import { SideBarCard } from "@/components/SideBarCard";
import { TeamCard, type TeamCardProps } from "@/components/text/TeamCard";
import { H2 } from "@/components/text/H2";
import { Body } from "@/components/text/Body";
import { ListItemWithLead } from "@/components/text/ListItemWithLead";
import { getAboutPageData } from "@/lib/sanity/content";
import { getAboutPageMetadata } from "@/lib/sanity/metadata";
import { portableTextToString } from "@/lib/utils/portableText";

export async function generateMetadata(): Promise<Metadata> {
  return getAboutPageMetadata();
}

export default async function Page() {
  const pageData = await getAboutPageData();

  if (!pageData) {
    return (
      <>
        <PageHeader title="About" description="About The Shed Haus" />
        <div>Error loading page data. Please try again later.</div>
      </>
    );
  }

  const { seo, pageTitle, pageDescription, teamMembers } = pageData;
  const teamList = teamMembers || [];

  const integrityDetails = [
    {
      leadText: "Curated Quality",
      bodyText:
        "We hand-select our structure partners based on their track record for heavy-duty framing and Northeast-grade siding.",
    },
    {
      leadText: "Foundation Focus",
      bodyText:
        "A structure is only as good as its base. We don't just 'drop off' units; we ensure your site meets the standards required for the heavy snow loads and freeze-thaw cycles of the Hudson Valley.",
    },
    {
      leadText: "Logistics-First Approach",
      bodyText:
        "Our delivery partners are local experts who specialize in navigating the tight driveways and tricky terrain typical of Dutchess and Putnam Counties.",
    },
  ];

  return (
    <>
      <PageHeader
        title={pageTitle || "About"}
        description={
          pageDescription
            ? portableTextToString(pageDescription)
            : "About The Shed Haus"
        }
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl md:gap-10 py-4 md:py-8md:px-0">
          <div className="hidden md:flex flex-1 flex-col items-start justify-start w-full lg:sticky lg:top-8">
            <SideBarCard
              bodyText={[
                "Our outdoor display lot on Route 22 in Pawling is always open and unlocked. Stop by anytime to inspect our construction quality firsthand or connect with our team to start a custom design.",
              ]}
              phoneNumber=" 845 855 5989"
              emailAddress="info@theshedhaus.com"
            />
          </div>
          <div className="flex-3 flex flex-col justify-start items-start min-w-screen md:min-w-md w-full gap-8 px-4 md:px-0">
            <div className="flex flex-col items-start justify-start gap-2">
              <H2
                text="Our Local Philosophy"
                className="text-start text-primary"
              />
              <Body
                className="text-start font-normal"
                text={[
                  "The Shed Haus opened in March of 2017 to bring a better, more personal experience to the outdoor structure market in Pawling and beyond. Founded by a longtime resident and contractor, our focus is simple: We curate premium structures and ensure they are placed properly on your property. We understand that buying a structure is a significant project. Our role is to act as your local partner, bridging the gap between national quality standards and your specific backyard requirements. From verified foundation prep to precision delivery logistics, we take the stress out of the process so you get a structure that actually lasts.",
                ]}
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <a id="our-team" />
              <H2 text="Meet Our Team" className="text-start text-primary" />
              <div className="ps-2 gap-4 flex flex-col items-start justify-start">
                {teamList.map((member: TeamCardProps, index: number) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    details={member.details}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <H2
                text="Expert Selection & Site Integrity"
                className="text-start text-primary"
              />
              <Body
                className="text-start font-normal"
                text={[
                  "We don’t believe in one-size-fits-all. Because we are locally owned and operated, we don't just sell you a unit; we advise you on the right fit for your property.",
                ]}
              />
              <ul className="ps-4 list-disc marker:text-primary">
                {integrityDetails.map((detail, index) => (
                  <ListItemWithLead
                    key={index}
                    leadText={detail.leadText}
                    bodyText={detail.bodyText}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
