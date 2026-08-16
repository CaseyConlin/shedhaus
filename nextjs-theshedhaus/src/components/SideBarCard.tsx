"use client";

import { LinkButton } from "./buttons/LinkButton";

interface SideBarCardProps {
  topBadgeTitle?: string; // Optional top badge title (e.g., "Open for browsing 24/7")
  topBadgeText?: string[]; // Top italic callout (e.g., "Open for browsing 24/7")
  bannerTitle?: string; // White banner primary title (e.g., "Visit Our Showroom")
  bodyText: string[]; // Core middle descriptive block
  children?: React.ReactNode; // Optional children for additional content
  phoneNumber?: string; // Optional phone number (e.g., "845 855 5989")
  emailAddress?: string; // Optional email address (e.g., "info@theshedhaus.com")
  className?: string; // Custom styling override hook
  shadow?: string; // Optional shadow  for the card
}

export const SideBarCard = ({
  topBadgeTitle = "Open for browsing 24/7",
  topBadgeText,
  bannerTitle = "Visit Our Showroom",
  bodyText,
  children,
  phoneNumber,
  emailAddress,
  className = "",
  shadow = "",
}: SideBarCardProps) => {
  return (
    <div
      className={`w-90 bg-[#707070] text-white font-bold rounded-md ${shadow} font-inter overflow-hidden md:flex flex-col border border-[#575757] ${className}`}
    >
      <div className="py-4 px-2">
        {topBadgeTitle && (
          <div className="text-center pb-2 text-lg">
            <p className="text-white italic font-bold tracking-wide">
              {topBadgeTitle}
            </p>
          </div>
        )}
        {topBadgeText &&
          topBadgeText.map((text, index) => (
            <p
              key={index}
              className="text-white font-inter font-medium text-center"
            >
              {text}
            </p>
          ))}
      </div>
      {bannerTitle && (
        <div className="bg-white text-center py-1 px-1">
          <h2 className="text-primary font-montserrat text-lg font-extrabold tracking-tight">
            {bannerTitle}
          </h2>
        </div>
      )}
      <div className="flex-1 flex flex-col justify-between p-4 text-center gap-6">
        <div className="flex flex-col gap-2">
          {bodyText.map((text, index) => (
            <p
              key={index}
              className="text-white font-inter font-bold leading-relaxed whitespace-pre-line"
            >
              {text}
            </p>
          ))}
        </div>
        {(phoneNumber || emailAddress || children) && (
          <div className="flex flex-col gap-3 w-full mt-auto pt-4">
            {phoneNumber && (
              <LinkButton
                text={phoneNumber}
                link={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                className="w-full"
              />
            )}
            {emailAddress && (
              <LinkButton
                text={emailAddress}
                link={`mailto:${emailAddress}`}
                className="w-full"
              />
            )}
            {children && <>{children}</>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBarCard;
