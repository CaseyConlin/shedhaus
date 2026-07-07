import React from "react";

interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export const H2 = ({ text, className }: H2Props) => {
  return (
    <h2 className={`text-2xl font-black text-center ${className || ""}`}>
      {text}
    </h2>
  );
};
