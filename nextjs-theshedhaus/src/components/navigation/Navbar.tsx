"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Body } from "../text/Body";

interface MegaMenuCategory {
  title: string;
  items: { name: string; href: string }[];
}

const structureMegaMenu: Record<string, MegaMenuCategory[]> = {
  Sheds: [
    {
      title: "Popular Styles",
      items: [
        { name: "A-Frame Sheds", href: "/signature-styles/sheds" },
        { name: "High Barn Sheds", href: "/signature-styles/sheds" },
        { name: "Quaker Sheds", href: "/signature-styles/sheds" },
        { name: "Cottage Sheds", href: "/signature-styles/sheds" },
      ],
    },
    {
      title: "Custom Options",
      items: [
        { name: "Siding & Trim Colors", href: "/configuration#siding" },
        { name: "Rooflines & Shingles", href: "/configuration#roofs" },
        { name: "Custom Doors & Windows", href: "/configuration#doors" },
      ],
    },
  ],
  Barns: [
    {
      title: "Barn Styles",
      items: [
        { name: "Mini Barns", href: "/signature-styles/barns/mini" },
        { name: "Dutch Barns", href: "/signature-styles/barns/dutch" },
        {
          name: "Double Wide Barns",
          href: "/signature-styles/barns/double-wide",
        },
      ],
    },
    {
      title: "Custom Options",
      items: [
        { name: "Siding & Trim Colors", href: "/configuration#siding" },
        { name: "Rooflines & Shingles", href: "/configuration#roofs" },
        { name: "Custom Doors & Windows", href: "/configuration#doors" },
      ],
    },
  ],
  Gazebos: [
    {
      title: "Shapes & Styles",
      items: [
        { name: "Octagon Gazebos", href: "/signature-styles/gazebos/octagon" },
        { name: "Oval Gazebos", href: "/signature-styles/gazebos/oval" },
        {
          name: "Rectangular Gazebos",
          href: "/signature-styles/gazebos/rectangular",
        },
      ],
    },
  ],
  Pergolas: [
    {
      title: "Material Builds",
      items: [
        {
          name: "Traditional Wood Pergolas",
          href: "/signature-styles/pergolas/wood",
        },
        {
          name: "Artisan Vinyl Pergolas",
          href: "/signature-styles/pergolas/vinyl",
        },
      ],
    },
  ],
  About: [
    {
      title: "About the Shed Haus",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Our Process", href: "/about/our-process" },
        { name: "Our Team", href: "/about#our-team" },
      ],
    },
  ],
};

const leftNavLinks = [
  { name: "Sheds", href: "/signature-styles/sheds", className: "mx-4" },
  { name: "Barns", href: "/signature-styles/barns", className: "mx-4" },
  { name: "Gazebos", href: "/signature-styles/gazebos", className: "mx-4" },
  { name: "Pergolas", href: "/signature-styles/pergolas", className: "mx-4" },
];

const rightNavLinks = [
  { name: "About", href: "/about", className: "mx-4" },
  { name: "FAQ", href: "/faq", className: "mx-3" },
  { name: "Contact", href: "/contact", className: "mx-4" },
  { name: "Request a Quote", href: "/request-a-quote", className: "mx-0" },
];

const LinkItem = ({
  name,
  href,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  name: string;
  href: string;
  className?: string;
  hovered?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) => (
  <div
    className={`flex items-center justify-center flex-col group ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <div className="relative w-10 h-10">
      <svg
        className="w-10 h-10 transition-transform duration-500 scale-0 group-hover:scale-70 origin-bottom opacity-0 group-hover:opacity-100"
        fill="currentColor"
        viewBox="0 0 127.000000 97.000000"
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          transform="translate(0.000000,97.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
          id="g12"
          style={{ fill: "#860000", fillOpacity: 1 }}
        >
          <path
            d="M430 836 c-113 -67 -252 -151 -310 -187 l-105 -64 -3 -88 c-1 -48 -1 -87 2 -87 2 0 53 31 113 69 161 101 500 301 510 301 7 0 253 -147 591 -352 l32 -20 0 89 0 88 -293 174 c-160 96 -301 180 -312 187 -17 10 -46 -4 -225 -110z"
            id="path2"
            style={{ fill: "#860000", fillOpacity: 1 }}
          />
          <path
            d="M 433,553 240,438 V 229 20 h 60 60 l 2,161 3,160 136,80 136,80 137,-82 136,-82 V 179 20 h 65 65 l -2,207 -3,207 -195,118 C 733,616 641,669 635,669 630,669 538,617 433,553 Z"
            id="path4"
            style={{ display: "none", fill: "#860000", fillOpacity: 1 }}
          />
          <path
            d="M 547,337 460,285 V 158 30 h 175 175 v 128 127 l -52,32 c -29,17 -69,40 -88,52 l -35,20 z"
            id="path6"
            style={{ display: "none", fill: "#860000", fillOpacity: 1 }}
          />
          <path
            d="M73 332 l-63 -37 0 -142 0 -143 65 0 65 0 0 180 c0 99 -1 180 -2 180 -2 0 -31 -17 -65 -38z"
            id="path8"
            style={{ fill: "#860000", fillOpacity: 1 }}
          />
          <path
            d="M1130 191 l0 -181 65 0 65 0 0 143 0 142 -57 35 c-32 19 -61 37 -65 38 -5 2 -8 -78 -8 -177z"
            id="path10"
            style={{ fill: "#860000", fillOpacity: 1 }}
          />
        </g>
      </svg>
      <svg
        className="absolute inset-0 w-10 h-10 transition-transform duration-300 scale-50 group-hover:scale-50 origin-bottom"
        fill="currentColor"
        viewBox="0 0 28.222216 22.895269"
      >
        <g
          xmlns="http://www.w3.org/2000/svg"
          id="layer1"
          transform="translate(-86.566854,-142.08627)"
        >
          <path
            d="m 93.375466,146.17849 -6.808612,4.05694 v 7.37306 7.37305 h 2.116667 2.116667 l 0.07055,-5.67972 0.105834,-5.64444 4.797778,-2.82223 4.79778,-2.82222 4.83305,2.89278 4.79778,2.89278 v 5.57389 5.60916 h 2.29306 2.29305 l -0.0705,-7.3025 -0.10583,-7.3025 -6.87917,-4.16277 c -3.77472,-2.25778 -7.02028,-4.1275 -7.23194,-4.1275 -0.17639,0 -3.421947,1.83444 -7.126114,4.09222 z"
            id="path4"
            style={{
              display: "inline",
              fill: "#860000",
              fillOpacity: 1,
              strokeWidth: 0.0352778,
            }}
          />
          <path
            d="m 97.397133,153.79849 -3.069167,1.83444 v 4.48028 4.51556 h 6.173614 6.17361 v -4.51556 -4.48028 l -1.83445,-1.12889 c -1.02305,-0.59972 -2.43416,-1.41111 -3.10444,-1.83444 l -1.23472,-0.70556 z"
            id="path6"
            style={{ fill: "#860000", fillOpacity: 1, strokeWidth: 0.0352778 }}
          />
        </g>
      </svg>
    </div>
    <Link href={href} className="text-center font-black">
      {name}
    </Link>
  </div>
);

export const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<
    string | null
  >(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(
      mobileExpandedSection === section ? null : section,
    );
  };

  return (
    <div
      className="relative w-full z-50 bg-white"
      onMouseLeave={() => setHoveredLink(null)}
    >
      <nav className="flex items-center justify-between w-full font-montserrat px-8 md:px-0">
        {/* ========================================================
            MOBILE HEADER (Matches shNavMobile.png layout precisely)
            ======================================================== */}
        <div className="flex md:hidden items-center justify-between w-full py-4">
          <Link href="/">
            <Image
              src="/images/shedhaus_logo_menu_large.webp"
              alt="The Shed Haus Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* Custom 3-Line Dark Red Hamburger Button matching the figma asset */}
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-between w-8 h-5 text-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="w-full h-1 bg-primary rounded-sm transition-transform duration-300" />
            <span className="w-full h-1 bg-primary rounded-sm transition-transform duration-300" />
            <span className="w-full h-1 bg-primary rounded-sm transition-transform duration-300" />
          </button>
        </div>

        {/* ========================================================
            DESKTOP HEADER
            ======================================================== */}
        {/* Left Nav (Desktop Only) */}
        <div className="hidden md:flex flex-1 justify-end">
          {leftNavLinks.map((link) => (
            <LinkItem
              key={link.name}
              name={link.name}
              href={link.href}
              className={link.className}
              hovered={hoveredLink === link.name}
              onMouseEnter={() => setHoveredLink(link.name)}
            />
          ))}
        </div>

        {/* Center Logo (Desktop Only) */}
        <div className="hidden md:flex justify-center shrink-0 px-3">
          <Link href="/">
            <Image
              src="/images/shedhaus_logo_menu_large.webp"
              alt="The Shed Haus Logo"
              width={130}
              height={130}
              priority
            />
          </Link>
        </div>

        {/* Right Nav (Desktop Only) */}
        <div className="hidden md:flex flex-1 justify-start">
          {rightNavLinks.map((link) => (
            <LinkItem
              key={link.name}
              name={link.name}
              href={link.href}
              className={link.className}
              hovered={hoveredLink === link.name}
              onMouseEnter={() => setHoveredLink(link.name)}
            />
          ))}
        </div>
      </nav>

      {/* ========================================================
          DESKTOP MEGA MENU DROPDOWN PANEL
          ======================================================== */}
      {hoveredLink && structureMegaMenu[hoveredLink] && (
        <div
          className="hidden md:block absolute left-0 right-0 bg-white border-t border-neutral-100 shadow-xl z-40 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
          onMouseEnter={() => setHoveredLink(hoveredLink)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <div className="max-w-6xl mx-auto px-8 py-10 grid grid-cols-3 gap-8">
            <div className="col-span-1 border-r border-neutral-100 pr-8">
              <h4 className="text-primary font-montserrat font-extrabold text-xl tracking-tight mb-2">
                Explore {hoveredLink}
              </h4>
              <Body
                text={[
                  `Choose from our hand-crafted, architectural structures built to last. All standard builds are ready for fast customization or custom ordering.`,
                ]}
                className="text-left text-black font-inter text-sm leading-relaxed"
              />
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-6">
              {structureMegaMenu[hoveredLink].map((category, index) => (
                <div key={index} className="space-y-4">
                  <h5 className="font-montserrat font-black text-xs text-primary  border-b border-neutral-100 pb-2">
                    {category.title}
                  </h5>
                  <ul className="space-y-2.5">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className="font-inter text-sm text-neutral-600 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          MOBILE EXPANDABLE DRAWER (Figma layout compatible)
          ======================================================== */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-2xl z-40 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4 font-montserrat font-bold">
            {/* Structural Accordion Sections (No icons in mobile links as requested) */}
            {leftNavLinks.map((link) => {
              const hasSubmenu = !!structureMegaMenu[link.name];
              const isExpanded = mobileExpandedSection === link.name;

              return (
                <div
                  key={link.name}
                  className="border-b border-neutral-100 pb-2"
                >
                  <div className="flex items-center justify-between w-full">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-primary text-lg font-black uppercase tracking-wide"
                    >
                      {link.name}
                    </Link>
                    {hasSubmenu && (
                      <button
                        onClick={() => toggleMobileSection(link.name)}
                        className="p-1.5 text-neutral-500 hover:text-primary"
                        aria-label={`Toggle ${link.name} submenu`}
                      >
                        <span
                          className={`inline-block text-primary transform transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                        >
                          ▶
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Accordion Items List */}
                  {hasSubmenu && isExpanded && (
                    <div className="mt-3 pl-4 flex flex-col gap-2.5 border-l border-neutral-100 font-inter">
                      {structureMegaMenu[link.name]
                        .flatMap((cat) => cat.items)
                        .map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-neutral-600 text-sm py-1 hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Standard Pages list */}
            {/* Standard Pages list with submenu support */}
            <div className="flex flex-col gap-4 pt-2 font-montserrat font-semibold">
              {rightNavLinks.map((link) => {
                const hasSubmenu = !!structureMegaMenu[link.name];
                const isExpanded = mobileExpandedSection === link.name;

                if (!hasSubmenu) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-neutral-800 text-base py-1 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <div
                    key={link.name}
                    className="border-b border-neutral-100 pb-2"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-neutral-800 text-base font-black uppercase tracking-wide"
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => toggleMobileSection(link.name)}
                        className="p-1.5 text-neutral-500 hover:text-primary"
                        aria-label={`Toggle ${link.name} submenu`}
                      >
                        <span
                          className={`inline-block text-primary transform transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`}
                        >
                          ▶
                        </span>
                      </button>
                    </div>
                    {isExpanded && (
                      <div className="mt-3 pl-4 flex flex-col gap-2.5 border-l border-neutral-100 font-inter">
                        {structureMegaMenu[link.name]
                          .flatMap((cat) => cat.items)
                          .map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="text-neutral-600 text-sm py-1 hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
