import { PageHeader } from "@/components/text/PageHeader";
import { SideBarCard } from "@/components/SideBarCard";
import { ProcessCard } from "@/components/ProcessCard";
import { LinkButton } from "@/components/buttons/LinkButton";
const OUR_PROCESS_PAGE_SLUG = "our-process";

export default async function Page() {
  const processSteps = [
    {
      title: "Explore & Select Your Style",
      description: [
        "Whether you are browsing our unlocked, 24/7 open display lot on Route 22 in Pawling or testing configurations online, your project starts with finding the right blueprint. From classic New England Cape Sheds to minimalist Lean-Tos, we help you lock in the ideal architectural style, spatial footprint, and door/window placements to match your property's workflow.",
      ],
      icon: (
        <svg
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.25 48.4668L15.9254 54.4644L20.302 50.3039L27.7855 29.7716C25.9484 29.3123 24.3274 28.3938 23.0036 27.124L15.25 48.4668Z"
            fill="white"
          />
          <path
            d="M37.9694 27.124C36.6456 28.3938 34.9976 29.3123 33.1875 29.7716L40.671 50.3039L45.0476 54.4644L45.75 48.4668L37.9694 27.124Z"
            fill="white"
          />
          <path
            d="M38.5916 19.345C38.5916 15.8329 36.3222 12.8611 33.1883 11.7264V5.83691H27.7851V11.7264C24.6512 12.8611 22.3818 15.8329 22.3818 19.345C22.3818 23.8297 26.002 27.4499 30.4867 27.4499C34.9714 27.4499 38.5916 23.8297 38.5916 19.345ZM30.4867 22.0466C29.0008 22.0466 27.7851 20.8309 27.7851 19.345C27.7851 17.8591 29.0008 16.6434 30.4867 16.6434C31.9726 16.6434 33.1883 17.8591 33.1883 19.345C33.1883 20.8309 31.9726 22.0466 30.4867 22.0466Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Get Transparent Pricing Instantly",
      description: [
        "We don't believe in hidden fees or high-pressure sales tactics. Once you choose your preferred dimensions and styling choices, we instantly provide a complete, transparent baseline retail price list. This allows you to plan your budget with total clarity, mapping out exact costs across our entire inventory before moving forward.",
      ],
      icon: (
        <svg
          width="40"
          height="53"
          viewBox="0 0 40 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 6.625H26.6667C26.6667 2.9709 23.6771 0 20 0C16.3229 0 13.3333 2.9709 13.3333 6.625H5C2.23958 6.625 0 8.85059 0 11.5938V48.0312C0 50.7744 2.23958 53 5 53H35C37.7604 53 40 50.7744 40 48.0312V11.5938C40 8.85059 37.7604 6.625 35 6.625ZM10 43.8906C8.61458 43.8906 7.5 42.783 7.5 41.4062C7.5 40.0295 8.61458 38.9219 10 38.9219C11.3854 38.9219 12.5 40.0295 12.5 41.4062C12.5 42.783 11.3854 43.8906 10 43.8906ZM10 33.9531C8.61458 33.9531 7.5 32.8455 7.5 31.4688C7.5 30.092 8.61458 28.9844 10 28.9844C11.3854 28.9844 12.5 30.092 12.5 31.4688C12.5 32.8455 11.3854 33.9531 10 33.9531ZM10 24.0156C8.61458 24.0156 7.5 22.908 7.5 21.5312C7.5 20.1545 8.61458 19.0469 10 19.0469C11.3854 19.0469 12.5 20.1545 12.5 21.5312C12.5 22.908 11.3854 24.0156 10 24.0156ZM20 4.14062C21.3854 4.14062 22.5 5.24824 22.5 6.625C22.5 8.00176 21.3854 9.10938 20 9.10938C18.6146 9.10938 17.5 8.00176 17.5 6.625C17.5 5.24824 18.6146 4.14062 20 4.14062ZM33.3333 42.2344C33.3333 42.6898 32.9583 43.0625 32.5 43.0625H17.5C17.0417 43.0625 16.6667 42.6898 16.6667 42.2344V40.5781C16.6667 40.1227 17.0417 39.75 17.5 39.75H32.5C32.9583 39.75 33.3333 40.1227 33.3333 40.5781V42.2344ZM33.3333 32.2969C33.3333 32.7523 32.9583 33.125 32.5 33.125H17.5C17.0417 33.125 16.6667 32.7523 16.6667 32.2969V30.6406C16.6667 30.1852 17.0417 29.8125 17.5 29.8125H32.5C32.9583 29.8125 33.3333 30.1852 33.3333 30.6406V32.2969ZM33.3333 22.3594C33.3333 22.8148 32.9583 23.1875 32.5 23.1875H17.5C17.0417 23.1875 16.6667 22.8148 16.6667 22.3594V20.7031C16.6667 20.2477 17.0417 19.875 17.5 19.875H32.5C32.9583 19.875 33.3333 20.2477 33.3333 20.7031V22.3594Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Site Foundation & Stone Pad Preparation",
      description: [
        "A premium structure is only as reliable as its foundation. To prevent shifting and water damage over time, we provide exact specs for site preparation. We highly recommend a level, 4-inch crushed stone pad that extends 12 inches past the perimeter of the structure. Our dedicated foundation crew, managed by our local foreman, can handle this entire excavation and leveling process for you to guarantee decades of structural stability.",
      ],
      icon: (
        <svg
          width="55"
          height="50"
          viewBox="0 0 55 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.11111 36.6343C5.70556 36.6343 4.50274 36.1817 3.50267 35.2763C2.50089 34.3695 2 33.2799 2 32.0075V18.1269C2 16.8545 2.50089 15.7649 3.50267 14.858C4.50274 13.9527 5.70556 13.5 7.11111 13.5H48C49.4056 13.5 50.6092 13.9527 51.611 14.858C52.6111 15.7649 53.1111 16.8545 53.1111 18.1269V32.0075C53.1111 33.2799 52.6111 34.3695 51.611 35.2763C50.6092 36.1817 49.4056 36.6343 48 36.6343H7.11111ZM7.11111 32.0075H48V18.1269H41.9944C42.2926 18.6667 42.5166 19.2257 42.6666 19.8041C42.8148 20.3825 42.8889 20.9801 42.8889 21.597C42.8889 23.7948 42.0047 25.6933 40.2362 27.2927C38.4695 28.8936 36.3722 29.694 33.9444 29.694H21.1667C18.7389 29.694 16.6416 28.8936 14.8749 27.2927C13.1064 25.6933 12.2222 23.7948 12.2222 21.597C12.2222 20.9801 12.2972 20.3825 12.4471 19.8041C12.5953 19.2257 12.8185 18.6667 13.1167 18.1269H7.11111V32.0075ZM21.1667 25.0672H25V18.1269H21.1667C20.1444 18.1269 19.25 18.4739 18.4833 19.1679C17.7167 19.8619 17.3333 20.6716 17.3333 21.597C17.3333 22.5224 17.7167 23.3321 18.4833 24.0261C19.25 24.7201 20.1444 25.0672 21.1667 25.0672ZM30.1111 25.0672H33.9444C34.9667 25.0672 35.8611 24.7201 36.6278 24.0261C37.3944 23.3321 37.7778 22.5224 37.7778 21.597C37.7778 20.6716 37.3944 19.8619 36.6278 19.1679C35.8611 18.4739 34.9667 18.1269 33.9444 18.1269H30.1111V25.0672Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Procurement & Quality Control",
      description: [
        "We coordinate directly with our top-tier regional structure manufacturers to source your building using heavy-duty framing, premium shingles, and advanced siding like T1-11. Once the structure arrives at our lot or is ready for dispatch, our operations team performs a strict final inspection. We personally verify that every floor joist, roof truss, and locking mechanism meets our precise structural standards before it ever hooks up to a delivery trailer.",
      ],
      icon: (
        <svg
          width="36"
          height="48"
          viewBox="0 0 36 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.5 6H24C24 2.69063 21.3094 0 18 0C14.6906 0 12 2.69063 12 6H4.5C2.01562 6 0 8.01562 0 10.5V43.5C0 45.9844 2.01562 48 4.5 48H31.5C33.9844 48 36 45.9844 36 43.5V10.5C36 8.01562 33.9844 6 31.5 6ZM18 3.75C19.2469 3.75 20.25 4.75313 20.25 6C20.25 7.24687 19.2469 8.25 18 8.25C16.7531 8.25 15.75 7.24687 15.75 6C15.75 4.75313 16.7531 3.75 18 3.75ZM29.3625 25.4812L15.9562 38.775C15.5156 39.2156 14.8031 39.2062 14.3625 38.7656L6.61875 30.9563C6.17812 30.5156 6.1875 29.8031 6.62812 29.3625L9.29062 26.7188C9.73125 26.2781 10.4437 26.2875 10.8844 26.7281L15.1969 31.0781L25.1344 21.2156C25.575 20.775 26.2875 20.7844 26.7281 21.225L29.3719 23.8875C29.8125 24.3375 29.8031 25.0406 29.3625 25.4812Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Transport Logistics & Precision Placement",
      description: [
        "Final delivery is executed by our experienced transport logistics team. Utilizing specialized truck-and-trailer equipment and ground-friendly motorized tools, we navigate your property with minimal impact to your lawn. We safely place, anchor, and meticulously level your new structure on its prepared pad, leaving it completely ready to use on day one.",
      ],
      icon: (
        <svg
          width="52"
          height="37"
          viewBox="0 0 52 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.7 20.8H49.4V15.6C49.4 14.1643 48.2357 13 46.8 13H42.9L34.0616 1.95163C33.5743 1.34272 32.9564 0.851182 32.2534 0.513364C31.5505 0.175546 30.7806 9.75079e-05 30.0007 0H20.8C19.3643 0 18.2 1.16431 18.2 2.6V13H5.2C3.76431 13 2.6 14.1643 2.6 15.6V20.8H1.3C0.58175 20.8 0 21.3818 0 22.1V24.7C0 25.4183 0.58175 26 1.3 26H5.33081C5.26906 26.4282 5.2 26.8548 5.2 27.3C5.2 32.3261 9.27387 36.4 14.3 36.4C19.3261 36.4 23.4 32.3261 23.4 27.3C23.4 26.8548 23.3309 26.4282 23.2692 26H28.7316C28.6699 26.4282 28.6008 26.8548 28.6008 27.3C28.6008 32.3261 32.6747 36.4 37.7008 36.4C42.7269 36.4 46.8008 32.3261 46.8008 27.3C46.8008 26.8548 46.7318 26.4282 46.67 26H50.7C51.4182 26 52 25.4183 52 24.7V22.1C52 21.3818 51.4182 20.8 50.7 20.8ZM23.4 5.2H30.0007L36.2407 13H23.4V5.2ZM14.3 31.2C12.1493 31.2 10.4 29.4507 10.4 27.3C10.4 25.1493 12.1493 23.4 14.3 23.4C16.4507 23.4 18.2 25.1493 18.2 27.3C18.2 29.4507 16.4507 31.2 14.3 31.2ZM37.7 31.2C35.5493 31.2 33.8 29.4507 33.8 27.3C33.8 25.1493 35.5493 23.4 37.7 23.4C39.8507 23.4 41.6 25.1493 41.6 27.3C41.6 29.4507 39.8507 31.2 37.7 31.2Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  //   const OUR_WORK_QUERY = `*[_type == "ourWork" && slug.current == "${OUR_PROCESS_PAGE_SLUG}"]`;

  //   const ourWorkData = await sanityFetchData(OUR_WORK_QUERY);

  //   const { title, body } = ourWorkData[0];

  return (
    <>
      <PageHeader
        title={OUR_PROCESS_PAGE_SLUG}
        description={`Details about ${OUR_PROCESS_PAGE_SLUG}`}
      />
      <div className="flex flex-col items-center justify-center w-screen">
        <div className="flex flex-col md:flex-row items-start justify-center max-w-6xl md:gap-15 py-4 md:py-8md:px-0">
          <div className="flex-3 flex flex-col justify-start items-start min-w-screen md:min-w-xl  px-4 md:px-0">
            {processSteps.map((step, index) => (
              <div key={index} className="relative w-full">
                <ProcessCard
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
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
            ))}
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
