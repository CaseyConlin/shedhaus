"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  SwatchSmallCard,
  type SwatchItem,
  SwatchPortraitCircleCard,
  type MediumItem,
} from "./DesignOptionsCards";

interface SwatchCarouselProps {
  items: SwatchItem[] | MediumItem[];
  type?: "swatch" | "swatch-portrait-circle";
}
export const SwatchCarousel = ({
  items,
  type = "swatch",
}: SwatchCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>(
      "[data-carousel-item]",
    );
    const styles = getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const scrollStep = (firstCard?.offsetWidth ?? 100) + gap;

    carousel.scrollBy({
      left: direction === "prev" ? -scrollStep : scrollStep,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex w-full gap-2 overflow-x-auto px-4 pb-4 scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            data-carousel-item
            className="shrink-0 min-w-25 max-w-25"
          >
            {type === "swatch" && <SwatchSmallCard item={item as SwatchItem} />}
            {type === "swatch-portrait-circle" && (
              <SwatchPortraitCircleCard item={item as MediumItem} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-12">
        <button
          type="button"
          onClick={() => handleScroll("prev")}
          aria-label="Scroll swatches left"
          className="p-2"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-3xl text-primary"
          />
        </button>
        <button
          type="button"
          onClick={() => handleScroll("next")}
          aria-label="Scroll swatches right"
          className="p-2"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="text-3xl text-primary"
          />
        </button>
      </div>
    </div>
  );
};
