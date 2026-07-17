"use client";

import Image from "next/image";

export interface SidingItem {
  id: string;
  title: string;
  subtitle: string;
  bullets: string[];
  imageUrl: string;
}

export interface SwatchItem {
  id: string;
  name: string;
  colors: string | string[];
}

export interface MediumItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  subtitle?: string;
}

export const SidingLargeCard = ({ item }: { item: SidingItem }) => {
  return (
    <article className="shrink-0  bg-white text-black border border-neutral-200 rounded-md overflow-hidden shadow-xl flex flex-col min-h-[25%]">
      <div className="relative w-full aspect-video bg-neutral-100 shrink-0">
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

export const SwatchSmallCard = ({ item }: { item: SwatchItem }) => {
  const isSplit = Array.isArray(item.colors);

  return (
    <div className="shrink-0 flex flex-col items-center justify-between w-[92px] h-[125px] bg-white border border-neutral-100 rounded-lg p-2.5 shadow-xl text-center">
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

      <p className="font-inter font-bold text-[11px] text-black leading-tight tracking-tight line-clamp-2">
        {item.name}
      </p>
    </div>
  );
};

export const MediumLandscapeCard = ({ item }: { item: MediumItem }) => {
  return (
    // <article className="shrink-0 w-[285px] sm:w-full bg-white text-black border border-neutral-200 rounded-lg overflow-hidden shadow-xl flex flex-row h-[165px]">
    <article className="shrink-0 w-full bg-white text-black border border-neutral-200 rounded-lg overflow-hidden shadow-xl flex flex-row h-[165px]">
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
