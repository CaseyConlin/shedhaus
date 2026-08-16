"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GalleryImage } from "@/lib/sanity/types";

export const ProductGallery = ({
  galleryImages,
}: {
  galleryImages: GalleryImage[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll function for Mobile Slider Button Controls
  const handleScroll = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstItem = carousel.firstElementChild as HTMLElement;
    if (!firstItem) return;

    const scrollStep = firstItem.offsetWidth + 16; // width + gap
    const scrollAmount = direction === "prev" ? -scrollStep : scrollStep;

    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-transparent py-2 md:py-0 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl px-0 ">
        {/* ==========================================
            1. DESKTOP VIEWPORT: Stacked Vertical Column (Full Width of Container)
            ========================================== */}
        <div className="hidden md:flex flex-col gap-6 w-full">
          {galleryImages.map((img) => (
            <figure
              key={img.id}
              className="w-full flex flex-col gap-0 border border-neutral-200 rounded-lg"
            >
              <div className="relative aspect-5/3 rounded-tl-lg rounded-tr-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center"
                  priority={img.id === 1}
                />
              </div>
              <figcaption className="text-sm p-2 bg-black/80 text-white border-primary border-t-4 rounded-br-lg rounded-bl-lg z-20">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        {/* ==========================================
            2. MOBILE VIEWPORT: Swipeable Row
            ========================================== */}
        <div className="md:hidden flex flex-col items-center w-full max-w-[100vw]">
          {/* Touch-swipe Carousel strip */}
          <div
            ref={carouselRef}
            className="w-full flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-4 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((img) => (
              <div
                key={img.id}
                className="snap-center shrink-0 flex-none w-full h-full flex flex-col  border border-neutral-200 rounded-lg"
              >
                <div className="relative aspect-5/3 rounded-tl-lg  rounded-tr-lg overflow-hidden shrink-0 ">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1200px) 100vw, 1200px"
                    className="object-cover object-center"
                    priority={img.id === 1}
                  />
                </div>
                <div className="text-sm p-2 bg-black/80 text-white border-primary border-t-4 rounded-br-lg rounded-bl-lg z-10">
                  {img.alt}
                </div>
              </div>
            ))}
          </div>

          {/* Solid Red Triangle Navigation Controls (Matches mobileimages.jpg) */}
          <div className="flex items-center justify-center gap-12 mt-2">
            <button
              type="button"
              onClick={() => handleScroll("prev")}
              aria-label="Scroll cards left"
            >
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-3xl stroke-10 text-primary"
              />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("next")}
              className="group p-2 cursor-pointer focus:outline-none transition-transform active:scale-90"
              aria-label="Scroll cards right"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-3xl stroke-10 text-primary"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
