import Link from "next/link";
import Image from "next/image";

export interface AreaLink {
  name: string;
  href: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function AreaLinkGrid({
  areas,
  ariaLabel,
}: {
  areas: AreaLink[];
  ariaLabel: string;
}) {
  return (
    <nav
      aria-label={ariaLabel}
      className="grid w-full max-w-6xl grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {areas.map((area) => (
        <Link
          key={area.href}
          href={area.href}
          className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          {area.imageUrl && (
            <div className="relative aspect-[16/9] w-full bg-neutral-100">
              <Image
                src={area.imageUrl}
                alt={area.imageAlt || area.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          )}
          <div className="p-5">
            <h3 className="font-montserrat text-xl font-bold text-primary">
              {area.name}
            </h3>
            {area.description && (
              <p className="mt-2 text-sm text-neutral-700">
                {area.description}
              </p>
            )}
          </div>
        </Link>
      ))}
    </nav>
  );
}
