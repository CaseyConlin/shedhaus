"use client";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  link?: string;
  onClick?: () => void;
  variant?: "default" | "white" | "transRed";
}

export const ButtonBase = ({
  text,
  className,
  link,
  onClick,
  variant = "default",
}: ButtonBaseProps) => {
  const baseClass =
    "inline-flex items-center justify-center px-3 py-1.5 rounded-md font-bold transition duration-300 hover:bg-opacity-80  shadow-[0_4px_4px_rgba(0,0,0,0.25)]";

  const defaultClass =
    "text-white bg-primary hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-primary/50 disabled:hover:bg-primary/50";

  const whiteClass =
    "text-primary bg-white border border-solid border-primary hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-transparent disabled:border-primary/50 disabled:hover:bg-transparent";

  const transRedClass =
    "text-primary bg-transparent border border-solid border-primary hover:text-primary/80 hover:bg-gray-100   focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-transparent disabled:border-primary/50 disabled:hover:bg-transparent";

  const variantClass =
    variant === "white"
      ? whiteClass
      : variant === "transRed"
        ? transRedClass
        : defaultClass;
  return link ? (
    <Link
      href={link}
      className={`${baseClass} ${variantClass} ${className ?? ""}`}
    >
      {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className ?? ""}`}
    >
      {text}
    </button>
  );
};
