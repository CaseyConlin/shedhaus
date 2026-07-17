"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface SidingItem {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  imageUrl: string;
}

interface SwatchItem {
  id: string;
  name: string;
  colors: string | string[];
}

interface MediumItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  subtitle?: string;
}

const SIDING_DATA: SidingItem[] = [
  {
    id: "t111",
    title: "T1-11 Siding",
    subtitle:
      "Best for long-term durability & classic painted-shed aesthetics without warping.",
    bullets: [
      "Wood-grain texture",
      "50-year manufacturer warranty",
      "Zinc-borate treated to resist rot & termites",
      "Stainable to match natural landscapes",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "vinyl",
    title: "Premium Vinyl Siding",
    subtitle:
      "Best for property owners wanting a completely maintenance-free exterior.",
    bullets: [
      "Installed over wood-grain sheathing",
      "Zero painting required for life",
      "Dent-resistant advanced polymers",
      "Cleans easily with garden hose spray",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: "lp-lap",
    title: "LP SmartSide Lap",
    subtitle:
      "Premium siding engineered with advanced technology to handle deep winters.",
    bullets: [
      "Realistic deep wood texture",
      "Enhanced impact resistance",
      "Resists fungal decay",
      "Comes pre-primed for paint lock",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600",
  },
];

const SWATCH_DATA: SwatchItem[] = [
  { id: "navajo", name: "Navajo White", colors: "#f9f6ee" },
  { id: "sandstone", name: "Sandstone", colors: "#dfd2b9" },
  { id: "beige", name: "Beige", colors: ["#dfd4c3", "#3a3a3c"] },
  { id: "clay", name: "Clay", colors: ["#b8a48f", "#1f1f1f"] },
  { id: "charcoal", name: "Charcoal", colors: "#4a4a4a" },
  { id: "barn-red", name: "Barn Red", colors: "#860000" },
  { id: "forest-green", name: "Forest Green", colors: "#1b4d3e" },
  { id: "navy-blue", name: "Navy Blue", colors: "#1d2951" },
  { id: "pearl-gray", name: "Pearl Gray", colors: "#cfd4d8" },
];

const WOOD_DOORS_DATA: MediumItem[] = [
  {
    id: "conventional",
    title: "Conventional Wood Door",
    subtitle: "Traditional styling",
    description:
      "Features absolute structural integrity with hand-selected premium studs, designed to resist sag and drafts.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "classic-painted",
    title: "Classic Painted Door",
    subtitle: "Durable finish",
    description:
      "Coated with architectural-grade paint designed to repel water and endure severe weather patterns.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "new-england",
    title: "New England Transom",
    subtitle: "Sunlit entryway",
    description:
      "Features high-pitch accent layout windows integrated directly into the upper panels for natural internal lighting.",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "mid-century",
    title: "Cross-Buck Door",
    subtitle: "Rustic aesthetic",
    description:
      "Reinforced wood frame designed with traditional structural diagonal bracing for high-demand workspaces.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
  },
];

const WINDOWS_DATA: MediumItem[] = [
  {
    id: "std-18-27",
    title: 'Standard 18"x27"',
    description:
      "Compact sizing. Perfect for adding natural light to smaller storage units without sacrificing valuable wall space.",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "large-24-36",
    title: 'Large 24"x36"',
    description:
      "Generous sizing. Perfect for active garden workshops, tool stations, and hobby rooms demanding optimal cross-ventilation.",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "transom-long",
    title: "Transom Window",
    description:
      "Elegant layout. Sits directly under eaves to provide privacy while distributing light across the roof rafters.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "trim-shutter",
    title: "Shed Haus Trim",
    description:
      "High impact color-matched shutters that tie your custom shed design into your home property's paint scheme.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
  },
];

interface DesignCarouselProps {
  children: React.ReactNode;
}

const DesignCarousel = ({ children }: DesignCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;

    const firstItem = container.firstElementChild as HTMLElement;
    if (!firstItem) return;

    const scrollStep = firstItem.offsetWidth + 16;
    const scrollAmount = direction === "prev" ? -scrollStep : scrollStep;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        ref={scrollRef}
        className="w-full flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-3 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

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
  );
};

const SidingLargeCard: React.FC<{ item: SidingItem }> = ({ item }) => {
  return (
    <article className="shrink-0 w-[285px] sm:w-full bg-white text-black border border-neutral-200 rounded-lg overflow-hidden shadow-md flex flex-col h-[460px]">
      <div className="relative w-full h-[180px] bg-neutral-100 shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover object-center"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-montserrat font-black text-lg text-[#860000] tracking-tight leading-tight uppercase mb-1">
            {item.title}
          </h3>
          <p className="font-inter italic text-xs text-neutral-600 font-medium leading-relaxed mb-4">
            {item.subtitle}
          </p>
          <ul className="space-y-2 text-xs text-neutral-800 font-semibold">
            {item.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="text-[#860000] font-black shrink-0 select-none">
                  •
                </span>
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

const SwatchSmallCard: React.FC<{ item: SwatchItem }> = ({ item }) => {
  const isSplit = Array.isArray(item.colors);

  return (
    <div className="shrink-0 flex flex-col items-center justify-between w-[92px] h-[125px] bg-white border border-neutral-100 rounded-lg p-2.5 shadow-sm text-center">
      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-neutral-300 shadow-inner shrink-0">
        {isSplit ? (
          <div className="w-full h-full flex">
            <div
              className="w-1/2 h-full"
              style={{ backgroundColor: item.colors[0] }}
            />
            <div
              className="w-1/2 h-full"
              style={{ backgroundColor: item.colors[1] }}
            />
          </div>
        ) : (
          <div
            className="w-full h-full"
            style={{ backgroundColor: item.colors as string }}
          />
        )}
      </div>

      <p className="font-inter font-bold text-[11px] text-neutral-800 leading-tight tracking-tight line-clamp-2">
        {item.name}
      </p>
    </div>
  );
};

const MediumLandscapeCard: React.FC<{ item: MediumItem }> = ({ item }) => {
  return (
    <article className="shrink-0 w-[285px] sm:w-full bg-white text-black border border-neutral-200 rounded-lg overflow-hidden shadow-sm flex flex-row h-[165px]">
      <div className="relative w-[110px] sm:w-[130px] h-full bg-neutral-100 shrink-0">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 150px, 200px"
          className="object-cover object-center"
        />
      </div>

      <div className="p-3.5 flex-1 flex flex-col justify-start overflow-hidden">
        <h4 className="font-montserrat font-black text-[13px] sm:text-[14px] text-[#860000] tracking-tight leading-tight uppercase mb-0.5">
          {item.title}
        </h4>
        {item.subtitle && (
          <p className="font-inter italic text-[10px] text-neutral-500 font-medium mb-1">
            {item.subtitle}
          </p>
        )}
        <p className="font-inter text-[11px] text-neutral-700 leading-snug font-medium line-clamp-4">
          {item.description}
        </p>
      </div>
    </article>
  );
};

export const ShedDesignOptionsPage = () => {
  const [activeSection, setActiveSection] = useState("siding");
  const [showQuoteNotification, setShowQuoteNotification] = useState(false);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["siding", "finishes", "doors", "windows"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 font-sans">
      {/* Premium Notification Modal instead of any window.alert */}
      {showQuoteNotification && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white max-w-md w-full rounded-lg shadow-2xl p-6 border-t-4 border-[#860000] animate-in fade-in zoom-in-95 duration-200">
            <h3 className="font-montserrat font-black text-xl text-[#860000] uppercase mb-2">
              Requesting Quote Details
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Our site configurator has marked your custom choice
              specifications. Redirecting you to our standard quote form to
              finalize your specs.
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowQuoteNotification(false)}
                className="bg-[#860000] hover:bg-[#a00000] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Layout Area */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Intro Context Banner */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-12 border border-neutral-200">
          <p className="text-xs font-bold text-[#860000] tracking-wider uppercase mb-1">
            Configuration & Specs
          </p>
          <h2 className="font-montserrat font-black text-2xl md:text-3xl text-neutral-950 uppercase leading-none mb-3">
            Make It Yours
          </h2>
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-3xl">
            Browse through our regional design options and blueprint
            configurations. Customize every inch of your handmade build using
            our heavy-duty framing choices, premium sidings, multi-pane window
            upgrades, and hand-finished New England doors.
          </p>
        </div>

        {/* Responsive Content Grid: Sidebar + Details for Desktop / Stacked for Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Left Navigation (Desktop Only - hidden on mobile) */}
          <nav className="hidden lg:block lg:col-span-3 sticky top-24 bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
            <h3 className="font-montserrat font-extrabold text-[13px] uppercase tracking-wider text-neutral-500 mb-4 border-b pb-2">
              Design Options
            </h3>
            <ul className="space-y-1 text-sm font-semibold text-neutral-800">
              <li>
                <button
                  onClick={() => handleScrollToSection("siding")}
                  className={`w-full text-left py-2 px-3 rounded transition-colors ${activeSection === "siding" ? "bg-[#860000]/10 text-[#860000]" : "hover:bg-neutral-50"}`}
                >
                  Siding
                </button>
              </li>
              <li className="pl-3">
                <button
                  onClick={() => handleScrollToSection("t111-anchor")}
                  className="w-full text-left py-1 text-xs text-neutral-500 hover:text-[#860000]"
                >
                  • T1-11
                </button>
              </li>
              <li className="pl-3 mb-1">
                <button
                  onClick={() => handleScrollToSection("vinyl-anchor")}
                  className="w-full text-left py-1 text-xs text-neutral-500 hover:text-[#860000]"
                >
                  • Vinyl
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("finishes")}
                  className={`w-full text-left py-2 px-3 rounded transition-colors ${activeSection === "finishes" ? "bg-[#860000]/10 text-[#860000]" : "hover:bg-neutral-50"}`}
                >
                  Finishes & Paint
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("doors")}
                  className={`w-full text-left py-2 px-3 rounded transition-colors ${activeSection === "doors" ? "bg-[#860000]/10 text-[#860000]" : "hover:bg-neutral-50"}`}
                >
                  Doors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollToSection("windows")}
                  className={`w-full text-left py-2 px-3 rounded transition-colors ${activeSection === "windows" ? "bg-[#860000]/10 text-[#860000]" : "hover:bg-neutral-50"}`}
                >
                  Windows
                </button>
              </li>
            </ul>

            <button
              onClick={() => setShowQuoteNotification(true)}
              className="w-full mt-6 bg-[#860000] hover:bg-[#a00000] text-white text-[11px] font-black uppercase tracking-widest py-3.5 rounded text-center transition-colors shadow-sm cursor-pointer"
            >
              Request a Quote
            </button>
          </nav>

          {/* Core Content Area */}
          <div className="lg:col-span-9 space-y-16">
            {/* 1. Siding Section */}
            <section id="siding" className="scroll-mt-24 space-y-6">
              <div className="border-b pb-2">
                <h2 className="font-montserrat font-black text-xl md:text-2xl text-[#860000] uppercase tracking-tight">
                  Siding
                </h2>
                <p className="text-xs text-neutral-500 font-medium font-inter mt-1">
                  Choose the primary exterior shield and aesthetic finish of
                  your shed structure.
                </p>
              </div>

              {/* Responsive container: Grid layout on desktop, Swipable Track on mobile */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SIDING_DATA.map((item) => (
                  <div id={`${item.id}-anchor`} key={item.id}>
                    <SidingLargeCard item={item} />
                  </div>
                ))}
              </div>

              <div className="sm:hidden">
                <DesignCarousel>
                  {SIDING_DATA.map((item) => (
                    <SidingLargeCard key={item.id} item={item} />
                  ))}
                </DesignCarousel>
              </div>
            </section>

            {/* 2. Paint, Stain & Exterior Finishes Section */}
            <section id="finishes" className="scroll-mt-24 space-y-6">
              <div className="border-b pb-2">
                <h2 className="font-montserrat font-black text-xl md:text-2xl text-[#860000] uppercase tracking-tight">
                  Paint, Stain & Finishes
                </h2>
                <p className="text-xs text-neutral-500 font-medium font-inter mt-1">
                  We use top-tier coatings designed for robust UV protection and
                  water-repelling traits.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-montserrat font-bold text-xs text-neutral-500 uppercase tracking-widest">
                  T1-11 & Trim Colors
                </h4>

                <div className="hidden sm:flex flex-wrap gap-4">
                  {SWATCH_DATA.map((item) => (
                    <SwatchSmallCard key={item.id} item={item} />
                  ))}
                </div>

                <div className="sm:hidden">
                  <DesignCarousel>
                    {SWATCH_DATA.map((item) => (
                      <SwatchSmallCard key={item.id} item={item} />
                    ))}
                  </DesignCarousel>
                </div>
              </div>
            </section>

            {/* 3. Wood Doors Section */}
            <section id="doors" className="scroll-mt-24 space-y-6">
              <div className="border-b pb-2">
                <h2 className="font-montserrat font-black text-xl md:text-2xl text-[#860000] uppercase tracking-tight">
                  Doors
                </h2>
                <p className="text-xs text-neutral-500 font-medium font-inter mt-1">
                  High-constructed reinforced entries built with standard
                  heavy-duty strap hinges.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-montserrat font-bold text-xs text-neutral-500 uppercase tracking-widest">
                  Wood Doors
                </h4>

                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {WOOD_DOORS_DATA.map((item) => (
                    <MediumLandscapeCard key={item.id} item={item} />
                  ))}
                </div>

                <div className="sm:hidden">
                  <DesignCarousel>
                    {WOOD_DOORS_DATA.map((item) => (
                      <MediumLandscapeCard key={item.id} item={item} />
                    ))}
                  </DesignCarousel>
                </div>
              </div>
            </section>

            {/* 4. Windows Section */}
            <section id="windows" className="scroll-mt-24 space-y-6 pb-12">
              <div className="border-b pb-2">
                <h2 className="font-montserrat font-black text-xl md:text-2xl text-[#860000] uppercase tracking-tight">
                  Windows
                </h2>
                <p className="text-xs text-neutral-500 font-medium font-inter mt-1">
                  Shed Haus options for optimal airflow, illumination, and
                  color-matched shutter layouts.
                </p>
              </div>

              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WINDOWS_DATA.map((item) => (
                  <MediumLandscapeCard key={item.id} item={item} />
                ))}
              </div>

              <div className="sm:hidden">
                <DesignCarousel>
                  {WINDOWS_DATA.map((item) => (
                    <MediumLandscapeCard key={item.id} item={item} />
                  ))}
                </DesignCarousel>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Standard bottom Call to Action matching luxury brand footer footprint */}
      <section className="bg-neutral-900 text-white py-12 px-4 text-center">
        <h3 className="font-montserrat font-black text-lg md:text-xl uppercase tracking-wider mb-2">
          Ready to map out your property?
        </h3>
        <p className="text-xs md:text-sm text-neutral-300 font-light max-w-md mx-auto mb-6">
          Contact our team in Pawling, NY today. We will guide you through
          custom specs, foundations, and instant retail estimations.
        </p>
        <button
          onClick={() => setShowQuoteNotification(true)}
          className="bg-[#860000] hover:bg-[#a00000] text-white text-xs font-black uppercase tracking-widest py-3.5 px-8 rounded transition-all active:scale-95 shadow-lg cursor-pointer"
        >
          Request a Quote
        </button>
      </section>
    </div>
  );
};

export default ShedDesignOptionsPage;
