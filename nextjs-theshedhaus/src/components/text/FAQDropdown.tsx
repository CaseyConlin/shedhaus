"use client";
import { useState } from "react";
import { Caret } from "../Caret";
import { Body } from "./Body";

export const FAQDropdown = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full md:w-xl rounded-md border-2 border-gray-300 md:min-w-xl py-2 px-3">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full text-left font-extrabold text-lg text-primary "
      >
        {question}
        <Caret isOpen={isOpen} className="ml-2" />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700 w-full">
          <Body className="text-left" text={[answer]} />
        </div>
      )}
    </div>
  );
};
