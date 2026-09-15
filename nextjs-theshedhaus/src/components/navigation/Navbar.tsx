"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Body } from "../text/Body";

interface MegaMenuCategory {
  title: string;
  description: string;
  slug?: string;
  items: { name: string; href: string }[];
}

const structureMegaMenu: Record<string, MegaMenuCategory[]> = {
  Sheds: [
    {
      title: "Popular Styles",
      description: "Explore our most popular shed styles.",
      items: [
        {
          name: "A-Frame Signature Series",
          href: "/signature-styles/sheds/a-frame-signature-series-shed",
        },
        {
          name: "Quaker Deluxe",
          href: "/signature-styles/sheds/quaker-deluxe-series-shed",
        },
        {
          name: "Cape Cod Board & Batten",
          href: "/signature-styles/sheds/cape-cod-board-and-batten-shed",
        },
        {
          name: "Classic Deluxe",
          href: "/signature-styles/sheds/classic-deluxe-series-shed",
        },
        {
          name: "Colonial Dutch Barn Signature Series",
          href: "/signature-styles/sheds/colonial-dutch-barn-signature-series",
        },
        {
          name: "Studio Deluxe Series",
          href: "/signature-styles/sheds/studio-deluxe-series",
        },
        {
          name: "Mini Barn Signature Series",
          href: "/signature-styles/sheds/mini-barn-signature-series",
        },
        {
          name: "Monterey Deluxe",
          href: "/signature-styles/sheds/monterey-deluxe-series-shed",
        },
      ],
    },
    {
      title: "Custom Options",
      description: "Personalize your shed with our custom options.",
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
      description: "Discover the variety of barn styles we offer.",
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
      description: "Customize your barn to fit your needs.",
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
      description: "Choose from various gazebo shapes and styles.",
      items: [
        {
          name: "Classic Gazebo",
          href: "/signature-styles/gazebos/classic-gazebo",
        },
        {
          name: "Belle Gazebo",
          href: "/signature-styles/gazebos/belle-gazebo",
        },
        {
          name: "Country Gazebo",
          href: "/signature-styles/gazebos/country-gazebo",
        },
        {
          name: "Cathedral Gazebo",
          href: "/signature-styles/gazebos/cathedral-gazebo",
        },
        {
          name: "Majestic Gazebo",
          href: "/signature-styles/gazebos/majestic-gazebo",
        },
      ],
    },
  ],

  More: [
    {
      title: "Sheds",
      description: "Storage sheds and garden structures.",
      slug: "sheds",
      items: [
        {
          name: "A-Frame Signature Series",
          href: "/signature-styles/sheds/a-frame-signature-series-shed",
        },
        {
          name: "Cape Cod Deluxe",
          href: "/signature-styles/sheds/cape-cod-deluxe-series-shed",
        },
        {
          name: "Colonial Dutch Barn",
          href: "/signature-styles/sheds/colonial-dutch-barn-signature-series",
        },
      ],
    },
    {
      title: "Garages",
      description: "Vehicle storage solutions.",
      slug: "garages",
      items: [
        {
          name: "Board & Batten Garage",
          href: "/signature-styles/garages/board-and-batten-garage",
        },
        {
          name: "Deluxe Series Garage",
          href: "/signature-styles/garages/deluxe-series-garage",
        },
        {
          name: "Double Wide Garage",
          href: "/signature-styles/garages/garages/double-wide-garage",
        },
      ],
    },
    {
      title: "Barns & Livestock Shelters",
      description: "Agricultural and animal structures.",
      slug: "barns",
      items: [
        { name: "Run-In Shed", href: "/signature-styles/barns/run-in-shed" },
        {
          name: "Standard Horse Barn",
          href: "/signature-styles/barns/standard-horse-barn",
        },
        {
          name: "Run-In Stall Combo",
          href: "/signature-styles/barns/run-in-stall-combo",
        },
      ],
    },
    {
      title: "Board and Batten",
      description:
        "Classic architectural style with vertical boards and battens.",
      slug: "board-and-batten",
      items: [
        {
          name: "A-Frame Board & Batten Shed",
          href: "/signature-styles/board-and-batten/a-frame-board-and-batten-shed",
        },
        {
          name: "Board & Batten Garage",
          href: "/signature-styles/board-and-batten/board-and-batten-garage",
        },
        {
          name: "Board & Batten Wood Shed",
          href: "/signature-styles/board-and-batten/board-and-batten-wood-shed",
        },
        {
          name: "Carriage House Board & Batten Shed",
          href: "/signature-styles/board-and-batten/carriage-house-board-and-batten-shed",
        },
      ],
    },
    {
      title: "Pavilions",
      description: "Open-air gathering spaces.",
      slug: "pavilions",
      items: [
        {
          name: "Hampton Vinyl Pavilion",
          href: "/signature-styles/pavilions/hampton-vinyl-pavilion",
        },
        {
          name: "Keystone Wood Pavilion",
          href: "/signature-styles/pavilions/keystone-wood-pavilion",
        },
        {
          name: "Manor Vinyl Pavilion",
          href: "/signature-styles/pavilions/manor-vinyl-pavilion",
        },
      ],
    },
    {
      title: "Playhouses",
      description: "Imaginative play structures.",
      slug: "playhouses",
      items: [
        {
          name: "A-Frame Style Playhouse",
          href: "/signature-styles/playhouses/a-frame-style-playhouse",
        },
        {
          name: "Elite Style Playhouse",
          href: "/signature-styles/playhouses/elite-style-playhouse",
        },
        {
          name: "Victorian Style Playhouse",
          href: "/signature-styles/playhouses/victorian-style-playhouse",
        },
      ],
    },
    {
      title: "Pool Houses",
      description: "Waterside retreats and changing rooms.",
      slug: "poolhouses",
      items: [
        {
          name: "A-Frame Seaside Bar",
          href: "/signature-styles/poolhouses/a-frame-seaside-bar",
        },
        {
          name: "Modern Poolhouse",
          href: "/signature-styles/poolhouses/modern-poolhouse",
        },
        {
          name: "A-Frame Poolhouse Patio",
          href: "/signature-styles/poolhouses/a-frame-poolhouse-patio",
        },
      ],
    },
    {
      title: "Gazebos",
      slug: "gazebos",
      description: "Elegant outdoor shelters.",
      items: [
        {
          name: "Classic Gazebo",
          href: "/signature-styles/gazebos/classic-gazebo",
        },
        {
          name: "Belle Gazebo",
          href: "/signature-styles/gazebos/belle-gazebo",
        },
        {
          name: "Country Gazebo",
          href: "/signature-styles/gazebos/country-gazebo",
        },
      ],
    },
    {
      title: "Pergolas",
      slug: "pergolas",
      description: "Latticed outdoor structures.",
      items: [
        {
          name: "Cozy Arch Wood Pergola",
          href: "/signature-styles/pergolas/cozy-arch-wood-pergola",
        },
        {
          name: "Elegant Vinyl Pergola",
          href: "/signature-styles/pergolas/elegant-vinyl-pergola",
        },
        {
          name: "Veranda Vinyl Pergola",
          href: "/signature-styles/pergolas/veranda-vinyl-pergola",
        },
      ],
    },
    {
      title: "Poly Furniture",
      slug: "poly-furniture",
      description: "Durable outdoor furnishings.",
      items: [
        {
          name: "Poly Adirondack & Lounge Seating",
          href: "/signature-styles/poly-furniture/poly-adirondack-lounge-seating",
        },
        {
          name: "Poly Benches & Outdoor Accessories",
          href: "/signature-styles/poly-furniture/poly-benches-outdoor-accessories",
        },
        {
          name: "Poly Outdoor Dining",
          href: "/signature-styles/poly-furniture/poly-outdoor-dining-sets",
        },
        {
          name: "Poly Gliders & Swings",
          href: "/signature-styles/poly-furniture/poly-gliders-swings",
        },
      ],
    },
    {
      title: "Chicken Coops",
      slug: "coops",
      description: "Secure poultry housing solutions.",
      items: [
        {
          name: "A-Frame Chicken Coop",
          href: "/signature-styles/coops/a-frame-chicken-coop",
        },
        {
          name: "Combination Chicken Coop",
          href: "/signature-styles/coops/combination-chicken-coop",
        },
        { name: "Quaker Chicken Coop", href: "/coops/quaker-chicken-coop" },
      ],
    },
    {
      title: "Kennels",
      slug: "kennels",
      description: "Safe pet enclosures.",
      items: [
        {
          name: "Single Residential Dog Kennel",
          href: "/signature-styles/kennels/single-residential-dog-kennel",
        },
        {
          name: "Double & Multi-Run Residential Kennel",
          href: "/signature-styles/kennels/double-multi-run-residential-kennel",
        },
        {
          name: "Commercial Dog Kennel",
          href: "/signature-styles/kennels/commercial-dog-kennel",
        },
      ],
    },
    {
      title: "Small Structures",
      slug: "small-structures",
      description: "Compact and specialized buildings.",
      items: [
        {
          name: "Decorative Lighthouse",
          href: "/signature-styles/small-structures/decorative-lighthouse",
        },
        {
          name: "Decorative Windmill",
          href: "/signature-styles/small-structures/decorative-windmill",
        },
        {
          name: "Decorative Wishing Well",
          href: "/signature-styles/small-structures/decorative-wishing-well",
        },
        {
          name: "A-Frame with 10x12 Greenhouse",
          href: "/signature-styles/small-structures/a-frame-with-greenhouse",
        },
        {
          name: "Heavy-Duty Woodshed",
          href: "/signature-styles/small-structures/heavy-duty-woodshed",
        },
        {
          name: "Outdoor Trashcan Shed",
          href: "/signature-styles/small-structures/outdoor-trashcan-shed",
        },
        {
          name: "Premium Dog House",
          href: "/signature-styles/small-structures/amish-made-dog-house",
        },
        {
          name: "Amish-Made Rabbit Hutch",
          href: "/signature-styles/small-structures/rabbit-hutch",
        },
      ],
    },
  ],
  About: [
    {
      title: "About the Shed Haus",
      description: "Learn more about our company and team.",
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
  { name: "More", href: "/signature-styles", className: "mx-4" },
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
  const router = useRouter();
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

  const handleMobileNavigation = (href: string) => {
    setMobileMenuOpen(false);
    router.push(href);
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
          <div
            className={`max-w-7xl mx-auto px-8 py-10 grid gap-8 ${
              hoveredLink === "More" ? "grid-cols-1" : "grid-cols-3"
            }`}
          >
            <div
              className={`${hoveredLink === "More" ? "col-span-1" : "col-span-1"} ${hoveredLink !== "More" ? "border-r border-neutral-100 pr-8" : ""}`}
            >
              <h4 className="text-primary font-montserrat font-extrabold text-xl tracking-tight mb-2">
                {hoveredLink === "More"
                  ? "All Structures"
                  : `Explore ${hoveredLink}`}
              </h4>
              <Body
                text={[
                  hoveredLink === "More"
                    ? "Browse our complete collection of hand-crafted architectural designs to find the perfect structure for your needs."
                    : "Choose from our hand-crafted, architectural structures built to last.",
                ]}
                className="text-left text-black font-inter text-sm leading-relaxed"
              />
            </div>

            <div
              className={`grid gap-4 ${
                hoveredLink === "More"
                  ? "col-span-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "col-span-2 grid-cols-2"
              }`}
            >
              {structureMegaMenu[hoveredLink].map((category, index) => (
                <div key={index} className="space-y-1">
                  <h5 className="font-montserrat font-black text-xs text-primary border-b border-neutral-100 pb-0">
                    {category?.slug ? (
                      <Link
                        onClick={() => setHoveredLink(null)}
                        href={`/signature-styles/${category?.slug}`}
                      >
                        {category.title}
                      </Link>
                    ) : (
                      category.title
                    )}
                  </h5>
                  <ul className="">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          onClick={() => setHoveredLink(null)}
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
        <>
          {/* Backdrop overlay to close menu on click */}
          <div
            className="md:hidden fixed inset-0 bg-black/20 z-30 top-16"
            onClick={() => setMobileMenuOpen(false)}
            style={{ pointerEvents: "auto" }}
          />
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

                    {/* Accordion Items List with Category Headings */}
                    {hasSubmenu && isExpanded && (
                      <div className="mt-3 pl-4 flex flex-col gap-3 border-l border-neutral-100">
                        {structureMegaMenu[link.name].map(
                          (category, catIndex) => (
                            <div key={catIndex} className="flex flex-col gap-2">
                              <Link
                                href={`/signature-styles/${category.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <h6 className="font-montserrat font-black text-xs text-primary cursor-pointer hover:underline transition-colors">
                                  {category.title}
                                </h6>
                              </Link>
                              <div className="flex flex-col gap-2 pl-2 font-inter">
                                {category.items.map((item, itemIndex) => (
                                  <button
                                    key={itemIndex}
                                    onClick={() =>
                                      handleMobileNavigation(item.href)
                                    }
                                    className="text-left text-neutral-600 text-sm py-1 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer font-inherit"
                                  >
                                    {item.name}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ),
                        )}
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
                              <button
                                key={index}
                                onClick={() =>
                                  handleMobileNavigation(item.href)
                                }
                                className="text-left text-neutral-600 text-sm py-1 hover:text-primary transition-colors bg-transparent border-0 cursor-pointer font-inherit"
                              >
                                {item.name}
                              </button>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
