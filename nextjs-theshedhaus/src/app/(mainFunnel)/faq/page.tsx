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

  const { seo, pageTitle, pageDescription, faqs } = pageData;
  // const faqList = faqs || [
  //   {
  //     question: "Do you offer shipping?",
  //     answer:
  //       "Yes, we offer shipping on our structures for a nominal charge based on your delivery location. In NY we deliver in Dutchess, Putnam & Westchester counties. We also deliver to Fairfield County CT and parts of Massachusetts on NY/CT border. Toys, weathervanes and other small items can be shipped to your direct via UPS for an additional charge.",
  //   },

  //   {
  //     question: "Do you move sheds?",
  //     answer:
  //       "We are able to perform the service of moving a shed or structure as long as it is Amish made. We can not move homemade or “big box store” sheds. If you would like to contact us about moving a shed or structure, please be prepared to email us the following information: Current location of the shed and conditions to access it with our truck and trailer, the new location for the shed and conditions to access it with our truck and trailer, the size of shed and images of the shed from the gable end clearly showing skids at the base of the shed.",
  //   },

  //   {
  //     question: "Can I get a Shed with Vinyl Siding?",
  //     answer:
  //       "Yes, we do offer sheds with vinyl siding, made of high-grade vinyl compounds and UV inhibitors with a Vapor Vent weep hole system that keeps moisture out. The panel has a thickness of .040 with attractive weathered wood grain appearance and is covered by a Limited Lifetime Warranty.",
  //   },

  //   {
  //     question: "Do I need a permit for my shed?",
  //     answer:
  //       "Every town has their own requirements for sheds and structures so be sure to check with your municipality. The customer is responsible for all permits and fees, association rules, setbacks & boundary lines.",
  //   },

  //   {
  //     question: "Do I need a foundation for my shed?",
  //     answer:
  //       "We recommend a level gravel pad to place your shed on, however it is not included in the price of a shed. We can install shed pads within 20 miles of The Shed Haus. Keep in mind the shed pad must be complete prior to delivery of your shed & some towns require your shed to be anchored. If you choose not to place your shed on a pad, we can install your shed on blocks for a fee. If your shed is on blocks or others have installed your pad, leveling is not guaranteed. We do offer a one year guarantee on pads we install.",
  //   },

  //   {
  //     question: "What is included in my delivery?",
  //     answer:
  //       "Your delivery charge includes the use of our truck and trailer to install on to your site pad by either backing up to or pulling on to your pad. If other means are required to set your structure, there will be an additional charge.",
  //   },

  //   {
  //     question: "Does the weather play a factor in delivery of my shed?",
  //     answer:
  //       "Weather conditions will affect our ability to deliver your shed. Our goal is always to get your shed delivered as soon as possible. Please be patient with us when there is rain, snow or when the ground is wet.",
  //   },

  //   {
  //     question: "How can I prepare for my delivery?",
  //     answer:
  //       "Having your shed pad ready is essential. Making sure we have proper access is just important. We must have a clear way to the location at least 3ft wider and taller than the shed you order. A shed can be up to 14ft tall on a trailer. Please clear low overhanging branches, brush, rocks and fencing that may block our way in or damage your shed.",
  //   },
  //   {
  //     question: "What do I need to do on the day of delivery?",
  //     answer:
  //       "You must be present on delivery day to ensure your shed is placed exactly how you like it. We are working with heavy equipment and your safety is important to us! Please make sure to stand at least 50 feet away at all times for the safety of everyone involved.",
  //   },

  //   {
  //     question: "Can you build a shed on my property?",
  //     answer:
  //       "When the conditions do not allow a fully assembled shed to be delivered we can assemble your shed on site for an additional cost that varies by location.",
  //   },

  //   {
  //     question: "Do you offer replacement parts?",
  //     answer:
  //       "We are happy to assist you with hardware, windows, doors and other replacement parts. Yourself or your contractor will need to install these parts. Please keep in mind door and window openings often need to be adjusted and we cannot be responsible for that work.",
  //   },

  //   {
  //     question: "Do you have a return policy?",
  //     answer:
  //       "Custom structure orders may be canceled within 72 hours only. We cannot refund dog houses, weathervanes, furniture or similar items that have left the property or have been altered from their original state at your request. Doors, windows and other replacement parts are non-refundable. Structures in stock may only be canceled within 72 hours if you have not selected a delivery date within the same 72 hours.",
  //   },

  //   {
  //     question: "What methods of payment do you accept?",
  //     answer:
  //       "We accept check, money orders and cash. We do not take credit card payments.",
  //   },

  //   {
  //     question: "What is Rent-to-Own?",
  //     answer:
  //       "We partner with BLI Rentals to offer you flexible low payment options to purchase your shed. There is no credit check required and you can get started for as low as the first month’s rent. This is not a loan, but a rental agreement with the option to buy at any time. There are no early payoff fees and comes with a 90 day same as cash payoff. The rent to own agreements do include convenience fees and the purchase of your shed in this fashion is not the same as a cash purchase price.",
  //   },
  // ];
  console.log("seo", seo);
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
