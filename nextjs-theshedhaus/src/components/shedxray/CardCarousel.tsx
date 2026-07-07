"use client";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { XRayCard } from "@/components/shedxray/XrayCard";
import type { ArrowHotspot } from "@/components/shedxray/ShedXray";
export const CardCarousel = ({
  cards,
  activeArrowId,
  setActiveArrowId,
}: {
  cards: {
    id: ArrowHotspot["id"];
    heading: string;
    description: string;
  }[];
  activeArrowId: ArrowHotspot["id"];
  setActiveArrowId: (id: ArrowHotspot["id"]) => void;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector<HTMLElement>(
      "[data-card-item='true']",
    );
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap || "0");
    const cardStep = (firstCard?.offsetWidth ?? 220) + gap;
    const scrollAmount = direction === "left" ? -cardStep : cardStep;

    carousel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const handleCardSelect = (
    cardId: ArrowHotspot["id"],
    cardElement: HTMLDivElement | null,
  ) => {
    setActiveArrowId(cardId);

    if (!cardElement || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    cardElement.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="w-full max-w-full overflow-hidden px-4">
      <div
        ref={carouselRef}
        className="flex w-full flex-row gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            data-card-item="true"
            className="min-w-55 shrink-0"
            onClick={(event) =>
              handleCardSelect(card.id, event.currentTarget as HTMLDivElement)
            }
          >
            <XRayCard
              heading={card.heading}
              description={card.description}
              active={activeArrowId === card.id}
              action={() => handleCardSelect(card.id, null)}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollCards("left")}
          className="transform -rotate-180"
          aria-label="Scroll cards left"
        >
          <ChevronRightIcon className="h-7 w-7 stroke-5 text-primary" />
        </button>
        <button
          type="button"
          onClick={() => scrollCards("right")}
          aria-label="Scroll cards right"
        >
          <ChevronRightIcon className="h-7 w-7 stroke-5 text-primary" />
        </button>
      </div>
    </div>
  );
};
