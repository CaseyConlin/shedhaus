"use client";

import { usePathname } from "next/navigation";
import { ContactFooter } from "./ContactFooter";

interface ConditionallyRenderContactFooterProps {
  // Pass an optional list of routes where you do NOT want this footer to appear
  excludePaths?: string[];
}

export const ConditionallyRenderContactFooter = ({
  excludePaths = ["/contact"],
}: ConditionallyRenderContactFooterProps) => {
  const pathname = usePathname();

  // Check if current route is excluded (handling exact match and trailing slashes)
  const isExcluded = excludePaths.some(
    (path) => pathname === path || pathname === `${path}/`,
  );

  if (isExcluded) {
    return null;
  }

  return <ContactFooter />;
};
