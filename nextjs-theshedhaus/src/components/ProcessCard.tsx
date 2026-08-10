import Image from "next/image";
import { Body } from "./text/Body";

export interface ProcessCardProps {
  title: string;
  description: string[];
  icon?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  order: number;
  odd: boolean;
}

export const ProcessCard = ({
  title,
  description,
  icon,
  order,
  odd,
}: ProcessCardProps) => {
  const iconElement = icon?.asset?.url ? (
    <Image
      src={icon.asset.url}
      alt={icon.alt || title}
      width={52}
      height={52}
      style={{ width: "auto", height: "auto" }}
    />
  ) : (
    <div className="w-13 h-13 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
      {order}
    </div>
  );

  return (
    <div
      className={`relative flex flex-col-reverse md:${odd ? "flex-row-reverse" : "flex-row"} items-center justify-start gap-4 w-full max-w-2xl text-center z-10`}
    >
      <div
        className="absolute md:hidden left-1/2 -translate-x-1/2 top-18.75 h-4 w-1 bg-primary z-0"
        aria-hidden="true"
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-2 w-full border rounded-md p-4 md:p-4 shadow-xl bg-white">
        <h3 className="text-lg font-bold text-primary text-start">{title}</h3>
        <Body text={description} className="text-start" />
      </div>
      <div className="relative w-18.75 h-18.75 flex items-center justify-center shrink-0 z-10">
        <div className="w-18.25 h-18.25 rounded-full bg-primary flex items-center justify-center shadow-md">
          <div className="w-13 h-13 flex items-center justify-center text-white font-black text-sm">
            {iconElement}
          </div>
        </div>
      </div>
    </div>
  );
};
