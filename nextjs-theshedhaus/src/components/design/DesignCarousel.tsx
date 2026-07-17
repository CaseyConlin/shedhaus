"use client";

import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const DesignCarousel = ({ children }: { children: React.ReactNode }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    // A fixed pixel step is the most reliable way to test if JS is working
    const step = 300;

    container.scrollBy({
      left: direction === "prev" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 
        CRITICAL: Removed snap-mandatory, snap-x, and scroll-smooth.
        We are testing "raw" overflow scroll to see if buttons work.
      */}
      <div
        ref={carouselRef}
        className="w-full flex gap-4 overflow-x-auto scrollbar-none pb-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      <div className="flex items-center justify-center gap-12 mt-2">
        <button
          type="button"
          onClick={() => handleScroll("prev")}
          className="p-2 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="text-3xl text-primary"
          />
        </button>
        <button
          type="button"
          onClick={() => handleScroll("next")}
          className="p-2 cursor-pointer"
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
