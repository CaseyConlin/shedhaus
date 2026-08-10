"use client";

import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { SidingLargeCard, type LargeItem } from "./DesignOptionsCards";

export const SidingCarousel = ({ items }: { items: LargeItem[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const firstCard = carousel.querySelector<HTMLElement>(
      "[data-carousel-item]",
    );
    const styles = getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const scrollStep =
      (firstCard?.offsetWidth ?? carousel.clientWidth * 0.85) + gap;

    carousel.scrollBy({
      left: direction === "prev" ? -scrollStep : scrollStep,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-full overflow-hidden">
      <div
        ref={carouselRef}
        className="flex w-full gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            data-carousel-item
            className="snap-center shrink-0 min-w-[85vw] max-w-[85vw]"
          >
            <SidingLargeCard item={item} />
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-12">
        <button
          type="button"
          onClick={() => handleScroll("prev")}
          aria-label="Scroll siding cards left"
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
          aria-label="Scroll siding cards right"
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
