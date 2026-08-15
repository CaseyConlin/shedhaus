"use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/dist/client/components/navigation";

const Link = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export const BreadCrumbs = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className="flex text-sm py-4  mx-auto w-full">
      <ol className="flex flex-wrap items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-gray-400 hover:text-primary transition-colors"
          >
            Home
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

          const label = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <li key={href} className="flex items-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className=" text-gray-500 mx-1"
                aria-hidden="true"
              />
              {isLast ? (
                <span className="font-bold text-primary" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-gray-400 font-medium hover:text-primary transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
