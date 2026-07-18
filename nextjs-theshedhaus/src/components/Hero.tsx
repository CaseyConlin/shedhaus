// import { LinkButton } from "@/components/buttons/LinkButton";
// export const Hero = () => {
//   return (
//     <div
//       className="relative w-full h-screen flex bg-top bg-no-repeat bg-cover justify-center overflow-hidden"
//       style={{
//         backgroundImage:
//           "url('/no-bg-a123712-11-cropped_upscayl_4x_ultrasharp-4x1.webp'), linear-gradient(to top, #3a66e9a1,#fff)",
//       }}
//     >
//       <div className="flex justify-end items-center w-full h-full">
//         <div className="bg-black/69  text-white p-4 rounded-md w-xl">
//           <div className="flex flex-col py-4 px-4 gap-4 ">
//             <h2 className="text-2xl font-black text-white border-primary border-b-2 border-solid">
//               Locally trusted for sheds that last{" "}
//             </h2>
//             <p className="w-sm">
//               As your neighbors we know exactly what a true four-season build
//               requires. From heavy-duty floor joists to premium siding, we
//               provide structures built to last that help you expand your space,
//               and we’re right in your own backyard.{" "}
//             </p>
//             <div className="mt-4 flex gap-4">
//               <LinkButton text="Get a Quote" link="/contact" />
//               <LinkButton
//                 variant="transWt"
//                 text="Shop Our Inventory"
//                 link="/inventory"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
"use client";

import { useState } from "react";
import Image from "next/image";
import { LinkButton } from "@/components/buttons/LinkButton";
import { H2 } from "./text/H2";
import { Body } from "./text/Body";
import heroImage from "../../public/no-bg-a123712-11-cropped_upscayl_4x_ultrasharp-4x1.webp";

export const Hero = () => {
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);

  return (
    <div className="w-full flex flex-col md:relative md:h-screen md:flex-row md:justify-end md:items-center bg-[#1a1e24]">
      {/* 1. Interactive background wrapper (Acts as top banner on mobile, full-screen on desktop) */}
      <div className="relative w-full h-auto aspect-180/107 md:h-full md:aspect-auto md:absolute md:inset-0 z-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,#3a66e9a1,#fff)]"
        />
        <Image
          src={heroImage}
          alt="Custom-built shed exterior"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          onLoadingComplete={() => setHeroImageLoaded(true)}
          className={`object-top object-contain md:object-cover transition-[opacity,filter,transform] duration-200  ${
            heroImageLoaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-90 blur-sm scale-[1.01]"
          }`}
        />
      </div>

      {/* 2. Right-Flush Info Panel */}
      {/* Mobile: Sits directly under the image banner with a solid dark theme */}
      {/* Desktop: Centered vertically on the right side, flush to the screen edge with a clean left radius */}
      <div className="relative z-10 w-full md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:h-auto md:w-[50vw] lg:w-[45vw] xl:w-[40vw] p-6 md:p-6 md:pl-6 bg-[#1a1e24] md:bg-black/75 text-white shadow-2xl flex flex-col justify-center font-inter md:rounded-md md:border-l md:border-y md:border-neutral-800/30">
        {/* Inner Content Constraint: Prevents the text from stretching too wide or drifting too far right on large displays */}
        <div className="flex flex-col gap-5 md:gap-5 max-w-sm md:max-w-md lg:max-w-lg w-full">
          {/* Header with styled accent underline matching shHeroMoblie.jpg */}
          <div className="pb-2 self-start w-full">
            <H2
              className="text-white text-left border-b-2 pb-4 border-primary"
              text="Locally trusted for sheds that last"
            />
          </div>

          {/* Body Description containing selective font-weight highlighting */}
          <Body
            className="text-white text-lg text-left font-bold"
            text={[
              "As your neighbors we know exactly what a true four-season build requires. From heavy-duty floor joists to premium siding, we provide structures built to last that help you expand your space, and we’re right in your own backyard.",
            ]}
          />
          {/* Action Button Wrappers (Stacked on mobile, row-aligned on desktop) */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <LinkButton text="Get a Quote Now" link="/request-a-quote" />
            <LinkButton
              variant="white"
              text="Shop Our Inventory"
              link="https://facebook.com/theshedhaus"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
