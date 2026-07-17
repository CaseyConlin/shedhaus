"use client";
import Image from "next/image";
import { LinkButton } from "../buttons/LinkButton";

export interface Product {
  id: string;
  title: string;
  dimensions: string;
  bullets: string[];
  imageUrl: string;
  link: string;
}
/**
 * ProductCard
 * Represents a single standard shed item card shown in Frame 167.jpg and Frame 168.jpg.
 */
export const ProductCard = ({
  title,
  dimensions,
  bullets,
  imageUrl,
  link,
}: Product) => {
  return (
    <article className="flex flex-col bg-white text-black rounded-md overflow-hidden shadow-xl border border-neutral-200 w-full  md:w-xs md:max-w-none md:min-w-[300px] h-[480px] transition duration-300 hover:shadow-2xl hover:transform hover:scale-105">
      {/* Aspect Ratio Container for Shed Image */}
      <div className="relative w-full h-[180px] bg-neutral-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 340px"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-5 justify-between">
        <div className="flex flex-col">
          {/* Header Title */}
          <h3 className="font-montserrat font-black text-xl text-[#860000] tracking-tight leading-tight uppercase">
            {title}
          </h3>
          {/* Sizes / Subtitle */}
          <p className="font-inter italic text-xs text-neutral-500 mt-1 mb-4">
            {dimensions}
          </p>

          {/* Key Bullet Features */}
          <ul className="space-y-1.5 text-sm font-semibold text-neutral-800">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-1">
                <span className="text-neutral-400 shrink-0 select-none">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* View Specs Options Button */}
        <div className="mt-4 pt-4 border-t border-neutral-100">
          <LinkButton
            text="View Specs & Options"
            link={link}
            className="w-full"
          />
        </div>
      </div>
    </article>
  );
};
