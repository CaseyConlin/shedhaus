"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/images/tempImage.png", // Replace with your actual Asset path
    alt: "The Shed Haus Premium Gable Shed Style A",
  },
  {
    id: 2,
    src: "/images/tempImage.png", // Replace with your actual Asset path
    alt: "The Shed Haus Premium Gable Shed Style B",
  },
  {
    id: 3,
    src: "/images/tempImage.png", // Replace with your actual Asset path
    alt: "The Shed Haus Premium Gable Shed Style C",
  },
];

export const ProductGallery = () => {
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
    <section className="w-full bg-transparent py-2 md:py-0 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 md:px-0">
        {/* ==========================================
            1. DESKTOP VIEWPORT: Stacked Vertical Column (Full Width of Container)
            ========================================== */}
        <div className="hidden md:flex flex-col gap-6 w-full">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
                priority={img.id === 1}
              />
            </div>
          ))}
        </div>

        {/* ==========================================
            2. MOBILE VIEWPORT: Swipeable Row with Full-Width Cards
            ========================================== */}
        <div className="md:hidden flex flex-col items-center w-full">
          {/* Touch-swipe Carousel strip */}
          <div
            ref={carouselRef}
            className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.id}
                className="snap-center shrink-0 w-full aspect-[4/3] relative rounded-lg overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={img.id === 1}
                />
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
