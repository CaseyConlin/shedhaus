"use client";

import Image from "next/image";
import { LinkButton } from "./buttons/LinkButton";
import { H2 } from "./text/H2";

import Link from "next/link";
import { Body } from "./text/Body";

interface DesignOptionItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  mobileOrder: string; // Tailwind order class for mobile
  desktopGridClasses: string; // Grid spans for desktop
  link?: string; // Optional link for the entire card
}

const DESIGN_OPTIONS: DesignOptionItem[] = [
  {
    id: "rooflines",
    title: "Rooflines",
    description:
      "Your shed's roofline defines your available space and can be customized to compliment your home.",
    imageUrl: "/images/rooflines-masonry.webp", // Replace with your actual asset URL
    mobileOrder: "order-1",
    desktopGridClasses: "md:col-span-2 md:row-span-1",
    link: "/configuration#rooflines", // Optional link for this item
  },
  {
    id: "windows",
    title: "Windows",
    description:
      "Choose from options that provide the light and ventilation you need for your space.",
    imageUrl: "/images/windows-masonry.webp", // Replace with your actual asset URL
    mobileOrder: "order-2",
    desktopGridClasses: "md:col-span-1 md:row-span-1",
    link: "/configuration#windows", // Optional link for this item
  },
  {
    id: "siding",
    title: "Siding & Trim Color",
    description:
      "Find the perfect match to compliment the rest of your property.",
    imageUrl: "/images/siding-trim-masonry.webp", // Replace with your actual asset URL
    mobileOrder: "order-3",
    desktopGridClasses: "md:col-span-1 md:row-span-1",
    link: "/configuration#siding", // Optional link for this item
  },
  {
    id: "doors",
    title: "Doors",
    description:
      "Heavy-duty entryways for equipment, or elegant French doors for backyard studios.",
    imageUrl: "/images/doors-masonry.webp", // Replace with your actual asset URL
    mobileOrder: "order-4",
    desktopGridClasses:
      "md:col-span-1 md:row-span-2 md:col-start-1 md:row-start-1",
    link: "/configuration#doors", // Optional link for this item
  },
];

export const ShedDesignOptions = () => {
  return (
    <section className="w-full overflow-hidden bg-black/75 text-white px-4 py-12 md:py-20 gap-10 flex flex-col items-center">
      {/* 1. Header Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-xl mx-auto">
          <H2 text="Make It Yours" className="text-white" />
          <Body
            className="text-white"
            text={[
              "From functional upgrades to architectural accents, customize every inch of your build to match your property.",
            ]}
          />
          {/* Buttons: Layout for Desktop (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4 mt-2">
            {/* Replace these wrapper/anchor buttons with your custom button components */}
            <LinkButton text="View Custom Options" link="/configuration" />
            <LinkButton
              text="Request a Quote"
              link="/request-quote"
              variant="white"
            />
          </div>
        </div>
        {/* 2. Responsive Grid Container */}
        {/* On Mobile: Flex Column with explicit flex order overrides */}
        {/* On Desktop: 3-column, 2-row CSS Grid layout */}
        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-4 w-full max-w-5xl mx-auto">
          {DESIGN_OPTIONS.map((option) => (
            <div
              key={option.id}
              className={`
                relative group overflow-hidden rounded-md 
                w-full aspect-4-3 md:aspect-auto h-65 md:h-auto min-h-55
                border border-white/10 shadow-lg transition-transform duration-500 hover:scale-105
                ${option.mobileOrder} 
                ${option.desktopGridClasses}
              `}
            >
              {/* Next.js Image filling parent container */}
              <Link
                href="/configuration"
                className="group block w-full h-full relative"
              >
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority={option.id === "rooflines"}
                />

                {/* Scrim/Shadow overlay to ensure text contrast */}
                <div className="absolute inset-0" />

                {/* Card Label Overlay Box (Lower Left Placement) */}
                <div className="absolute bottom-0 left-0 right-4 md:right-auto md:max-w-[85%] bg-black/60 backdrop-blur-xs p-2 rounded-tr-md border border-white/5">
                  <h3 className="font-extrabold text-white text-lg mb-1 leading-tight">
                    {option.title}
                  </h3>
                  <p className="text-white leading-snug font-medium">
                    {option.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Buttons: Layout for Mobile (Hidden on Desktop) */}
        <div className="flex md:hidden flex-col gap-3 max-w-sm mx-auto mt-4">
          <LinkButton text="View Custom Options" link="/configuration" />
          <LinkButton
            text="Request a Quote"
            link="/request-quote"
            variant="white"
          />
        </div>
      </div>
    </section>
  );
};
