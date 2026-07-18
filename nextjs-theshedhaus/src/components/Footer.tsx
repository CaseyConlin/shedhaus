"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const PRODUCTS_LINKS = [
  { label: "Sheds", href: "/sheds" },
  { label: "Barns", href: "/barns" },
  { label: "Gazebos", href: "/gazebos" },
  { label: "Pergolas", href: "/pergolas" },
];

const COMPANY_LINKS = [
  { label: "About us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/contact?type=quote" },
];

export const Footer = () => {
  return (
    /* Padding matches the specified padding: 44px 0px (py-11) and background #860000 */
    <footer className="w-full bg-primary text-white px-6 py-11 md:py-16 font-montserrat">
      <div className="max-w-7xl pb-36 mx-auto flex flex-col gap-10 md:gap-10">
        {/* 1. Responsive Columns Layout */}
        {/* On mobile: strictly centers columns in a single vertical stack matching Frame 285.png */}
        {/* On desktop: maps beautifully to horizontal auto layouts with accurate width boundaries */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-8 w-full text-center md:text-left">
          {/* Column 1: Brand Logo & Title Mark (Matches Figma image 55 layout footprints) */}
          <div className="flex flex-col items-center justify-start w-full max-w-85 min-h-6">
            <Link
              href="/"
              className="group flex flex-col transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/images/shedhaus_logo_menu_large_white.webp"
                alt="The Shed Haus Logo"
                width={200}
                height={200}
                className="object-contain w-60 h-auto"
              />
            </Link>
          </div>

          {}
          {/* Column 2: Contact Info Blocks & Interactive Social Icons (Figma Frame 281) */}
          {/* Defined width: 262px, height: 141px (auto scaled), with custom gap: 7px */}
          <div className="flex flex-col items-center md:items-start gap-1.75 w-full max-w-65.5">
            <div className="flex flex-col items-center md:items-start gap-1.75">
              {/* Address Map Pin Anchor (Montserrat 17px/21px bold) */}
              <a
                href="https://maps.google.com/?q=816+Route+22+Pawling+NY"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-neutral-200 transition-colors duration-200 h-7.75"
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-2xl shrink-0 text-white"
                />
                <span className="font-bold text-[17px] leading-5.25 tracking-tight">
                  816 Route 22 Pawling, NY
                </span>
              </a>

              {/* Interactive Phone Link (Montserrat 17px/21px bold) */}
              <a
                href="tel:8458555989"
                className="flex items-center gap-2.5 hover:text-neutral-200 transition-colors duration-200 h-7.75"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl shrink-0 text-white"
                />
                <span className="font-bold text-[17px] leading-5.25 tracking-tight">
                  845 855 5989
                </span>
              </a>

              {/* Digital Mail Connection (Montserrat 17px/21px bold) */}
              <a
                href="mailto:info@theshedhaus.com"
                className="flex items-center gap-2.5 hover:text-neutral-200 transition-colors duration-200 h-7.75"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-2xl shrink-0 text-white"
                />
                <span className="font-bold text-[17px] leading-5.25 tracking-tight">
                  info@theshedhaus.com
                </span>
              </a>
            </div>

            {/* Social Accounts Area (Figma Frame 284: width: 58px, height: 26px) */}
            <div className="flex items-center gap-2  mt-1 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-neutral-200 transition-transform duration-200 w-6.25 h-6.25 flex items-center justify-center"
                aria-label="Find us on Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl text-white shrink-0"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-neutral-200 transition-transform duration-200 w-6.25 h-6.25 flex items-center justify-center"
                aria-label="Find us on Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl text-white shrink-0"
                />
              </a>
            </div>
          </div>

          {}
          {/* Column 3: Sheds, Barns, Gazebos, Pergolas List (Figma Frame 283) */}
          {/* Defined width: 89px, height: 103px, gap: 9px, text center-aligned */}
          <div className="flex flex-col items-center md:items-start gap-2.25 w-full max-w-52">
            <h3 className="hidden md:block text-xs font-black uppercase tracking-wider text-white/50">
              Products
            </h3>
            <ul className="flex flex-col gap-2.25 w-full items-center md:items-start">
              {PRODUCTS_LINKS.map((link) => (
                <li key={link.href} className="h-4.75 flex items-center">
                  <Link
                    href={link.href}
                    className="font-bold text-[16px] leading-4.75 text-center md:text-left hover:text-neutral-200 transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company Explore List (Figma Frame 282) */}
          {/* Defined width: 133px, height: 103px, gap: 9px, text center-aligned */}
          <div className="flex flex-col items-center md:items-start gap-2.25 w-full max-w-52">
            <h3 className="hidden md:block text-xs font-black uppercase tracking-wider text-white/50">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.25 w-full items-center md:items-start">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href} className="h-4.75 flex items-center">
                  <Link
                    href={link.href}
                    className="font-bold text-[16px] leading-4.75 text-center md:text-left hover:text-neutral-200 transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {}
        {/* 2. Base Metadata Row */}
        <div className="pt-8 flex flex-col items-center justify-between gap-4  font-medium text-white">
          <a
            href="https://www.parkcrestdesign.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website by Parkcrest Design
          </a>
        </div>
      </div>
    </footer>
  );
};
