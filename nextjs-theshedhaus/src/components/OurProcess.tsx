"use client";

import { Body } from "./text/Body";
import { H2 } from "./text/H2";
import { LinkButton } from "./buttons/LinkButton";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  mobileOrder: number; // For keeping layouts in order
  svg?: React.ReactNode; // Optional SVG icon for the step
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "select",
    title: "Select or Customize",
    description:
      "Whether you're designing a bespoke structure from the ground up or choosing a ready-to-ship model from our lot, we'll help you lock in the perfect size and style for your property.",
    mobileOrder: 1,
    svg: (
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
    id: "prep",
    title: "Site Preparation",
    description:
      "A structure is only as solid as its foundation. We'll guide you through exactly what's needed for a level, properly draining stone pad to ensure decades of stability.",
    mobileOrder: 2,
    svg: (
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
    id: "build",
    title: "Build & Inspect",
    description:
      "Custom orders are constructed to your exact specifications. For in-stock inventory, our team performs a rigorous final quality check to ensure every joist and shingle meets our standard.",
    mobileOrder: 3,
    svg: (
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
    id: "delivery",
    title: "Delivery & Placement",
    description:
      "Using specialized equipment, we safely transport and place your new structure right in your backyard. We ensure it's perfectly leveled and ready to use on day one.",
    mobileOrder: 4,
    svg: (
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

export const OurProcess = () => {
  return (
    <section className="w-full bg-white text-black py-12 px-4 md:px-24.25 mb-25 flex flex-col items-center select-none font-inter">
      <div className="w-full max-w-full flex flex-col items-center gap-6.25">
        {/* Header (shH2) */}
        <div className="flex flex-row justify-center items-center py-1 gap-2">
          <H2 text="Our Process" className="text-primary" />
        </div>

        {/* Subtitle (shBody) */}
        <div className="w-full max-w-92 md:max-w-138 min-h-15 flex items-center justify-center">
          <Body
            text={[
              "Whether you're looking for a custom build or a structure from our inventory on-hand, our local experts are here to help you find the perfect fit for your needs and space",
            ]}
          />
        </div>

        {/* Dynamic Timeline / Steps Grid (Desktop Horizontal, Mobile Vertical) */}
        <div className="relative w-full max-w-311.5 flex flex-col gap-10 mt-4">
          {/* Desktop Connecting Line (Line 6) */}
          {/* Hidden on mobile, absolutely positioned on desktop behind the row of circles */}
          <div className="hidden md:block absolute left-[12%] right-[12%] top-9.5 h-0 border-[4.5px] border-primary -z-10" />

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-11.25 w-full">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center gap-2.5 w-57.25 h-auto"
              >
                {/* Step Circle Header (Frame 253 / Ellipse 9) */}
                {/* 73px circle inside 75px boundary container */}
                <div className="relative w-18.75 h-18.75 flex items-center justify-center shrink-0 z-10">
                  <div className="w-18.25 h-18.25 rounded-full bg-primary flex items-center justify-center shadow-md">
                    {/* Placeholder for your custom icon - drop your Icon code here */}
                    <div className="w-13 h-13 flex items-center justify-center text-white font-black text-sm">
                      {/* E.g. <FontAwesomeIcon icon={faDraftingCompass} className="w-6 h-6" /> */}
                      {step.svg}
                    </div>
                  </div>
                </div>

                {/* Step Description Card (shProcessCard) */}
                {/* Fixed dimensions matching Figma: Width 229px, Height 215px */}
                <div className="relative w-57.25 h-53.75 bg-white border border-black rounded-[5px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] p-4 flex flex-col items-center shrink-0">
                  {/* Card Title (shH3 / Montserrat Bold 17px/21px) */}
                  <div className="pt-2 pb-1 border-b-2 border-transparent">
                    <h3 className="font-montserrat font-bold text-[17px] leading-5.25 text-center text-primary tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Card Description (shBody / Inter Medium 16px/19px) */}
                  <div className="mt-2 overflow-hidden h-34.5">
                    <Body text={[step.description]} className="text-black " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons Action Group (Frame 258) */}
        {/* Width 317px, gap: 33px */}
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <LinkButton text="Learn More" link="/about" />
          <LinkButton
            text="Request a Quote"
            link="/contact?type=quote"
            variant="white"
          />
        </div>
      </div>
    </section>
  );
};
