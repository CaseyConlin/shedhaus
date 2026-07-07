import React from "react";

interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string[];
}

export const Body = ({ text, className }: BodyProps) => {
  return text.map((paragraph, index) => (
    <p
      key={index}
      className={`font-inter font-medium text-black text-center mb-2 ${className || ""}`}
    >
      {paragraph}
    </p>
  ));
};
