"use client";
import Image from "next/image";
import { LinkButton } from "../buttons/LinkButton";
import Link from "next/link";
import { GalleryItem } from "@/lib/sanity/types";

export interface Product {
  productName: string;
  specs?: Array<{ lead?: string; text?: string }>;
  features?: Array<{ lead?: string; text?: string }>;
  gallery?: GalleryItem[];
  seo?: { slug?: { current?: string } };
  category: string;
}

export const ProductCard = ({
  productName,
  specs,
  gallery,
  seo,
  category,
}: Product) => {
  const slug =
    seo?.slug?.current || productName?.toLowerCase().replace(/\s+/g, "-");
  const imageUrl = gallery?.[0]?.image?.asset?.url || "/placeholder.png";

  const dimensions = specs?.find((s) => s.lead === "Footprint");

  const dimensionsValues =
    dimensions?.text?.split(",").map((d) => d.trim()) || [];
  const firstDimension = dimensionsValues[0] || "Multiple sizes available";
  const lastDimension =
    dimensionsValues[dimensionsValues.length - 1] || "Various sizes available";
  const dimensionText =
    firstDimension !== lastDimension
      ? `Available sizes from ${firstDimension} to ${lastDimension}`
      : firstDimension;

  const bullets =
    specs
      ?.map((s) => s.text)
      .filter(Boolean)
      .slice(0, 4) || [];
  const link = `/signature-styles/${category}/${slug}`;
  return (
    <article className="flex flex-col bg-white text-black rounded-lg overflow-hidden shadow-xl border border-neutral-200 w-full md:w-xs md:max-w-none md:min-w-90 min-h-120 transition duration-300 hover:shadow-2xl hover:transform hover:scale-105">
      {/* Aspect Ratio Container for Shed Image */}
      <div className="relative w-full h-45 bg-neutral-100 overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 340px"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-5 justify-between">
        <div className="flex flex-col">
          {/* Header Title */}
          <Link href={link}>
            <h3 className="font-montserrat font-black text-xl text-primary tracking-tight leading-tight uppercase">
              {productName}
            </h3>
          </Link>
          {/* Sizes / Subtitle */}
          <p className="font-inter italic text-xs text-neutral-500 mt-1 mb-4">
            {dimensionText}
          </p>

          {/* Key Bullet Features */}
          <ul className="space-y-1.5 text-sm font-semibold text-neutral-800">
            {bullets &&
              bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-1">
                  <span className="text-primary shrink-0 select-none">•</span>
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
