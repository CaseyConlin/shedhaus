"use client";
import { H2 } from "@/components/text/H2";
import Image from "next/image";
import { useState } from "react";
import { LinkButton } from "@/components/buttons/LinkButton";
import { CardCarousel } from "./CardCarousel";
import { Body } from "@/components/text/Body";

export type ArrowHotspot = {
  id:
    | "siding"
    | "rafters"
    | "sheathing"
    | "shingles"
    | "walls"
    | "floor"
    | "hinges"
    | "doors"
    | "joists"
    | "foundation";
  label: string;
  end: { x: number; y: number };
};

const ARROWS: ArrowHotspot[] = [
  {
    id: "siding",
    label: "Siding",
    end: { x: -38, y: 23 },
  },
  {
    id: "rafters",
    label: "Rafters",
    end: { x: 22, y: 4 },
  },
  {
    id: "sheathing",
    label: "Sheathing",
    end: { x: 36, y: 15 },
  },
  {
    id: "shingles",
    label: "Shingles",
    end: { x: 58, y: 17 },
  },
  {
    id: "walls",
    label: "Walls",
    end: { x: 126.5, y: 84.5 },
  },
  {
    id: "floor",
    label: "Floor",
    end: { x: 122, y: 88 },
  },
  {
    id: "hinges",
    label: "Hinges",
    end: { x: 96, y: 62 },
  },
  {
    id: "doors",
    label: "Doors",
    end: { x: 72.5, y: 40 },
  },
  {
    id: "joists",
    label: "Joists",
    end: { x: -15, y: 91 },
  },
  {
    id: "foundation",
    label: "Foundation",
    end: { x: -30, y: 93 },
  },
];

const TRIANGLE_TOP_WIDTH = 10;
const TRIANGLE_HEIGHT = 5;

const cards: {
  id: ArrowHotspot["id"];
  heading: string;
  description: string;
}[] = [
  {
    id: "siding",
    heading: "Exterior Siding",
    description:
      "Our sheds feature premium vinyl or T1-11 wood siding, providing durability and a polished appearance.",
  },
  {
    id: "shingles",
    heading: "Architectural Grade Shingles",
    description:
      "Durable, attractive, and long-lasting, architectural shingles offer superior weather resistance and boost home value.",
  },
  {
    id: "doors",
    heading: "Entrance Doors",
    description:
      "Heavy-constructed reinforced interior frame doors with maintenance-free vinyl Permatrim provide durability and a polished appearance.",
  },
  {
    id: "rafters",
    heading: "Rafters",
    description:
      'Our sheds are built with 2"x4" rafters mounted 16" on center to provide structural integrity and support for the roof.',
  },
  {
    id: "sheathing",
    heading: "Roof Sheathing",
    description:
      '4-ply 1/2" roof sheathing for added structural strength and protection.',
  },
  {
    id: "walls",
    heading: "Wall Construction",
    description:
      'Our sheds feature 2"x4" wall studs mounted 16" on center, providing a sturdy framework for the structure.',
  },
  {
    id: "floor",
    heading: "Floor Construction",
    description:
      'The floor is constructed with 2"x4" floor joists mounted 16" on center, ensuring a solid and durable base for the shed.',
  },
  {
    id: "hinges",
    heading: "Door Hinges",
    description:
      "Heavy-duty hinges are used for the doors, ensuring smooth operation and long-lasting performance.",
  },
  {
    id: "joists",
    heading: "Floor Joists",
    description:
      'The floor is constructed with 2"x4" floor joists mounted 16" on center, ensuring a solid and durable base for the shed.',
  },
  {
    id: "foundation",
    heading: "Foundation",
    description:
      "Our sheds are built on a premium grade pressure treated lumber foundation, providing a stable and long-lasting base for the structure.",
  },
];

export const ShedXray = () => {
  const [activeArrowId, setActiveArrowId] =
    useState<ArrowHotspot["id"]>("siding");
  const activeArrow = ARROWS.find((arrow) => arrow.id === activeArrowId);

  return (
    <div className="flex flex-col md:mt-15 items-center justify-center gap-5 pt-16 w-screen">
      <div className=" bg-black/75 flex h-160 md:h-110 w-full flex-row justify-center">
        <div className="flex h-full w-full max-w-7xl flex-col md:flex-row items-center justify-start md:justify-center gap-6 md:gap-0">
          <div className="flex min-w-0 basis-0 flex-[0_1_0%] md:flex-[1_1_0%] justify-center">
            <div className="flex px-5 md:px-0 md:w-75 max-w-lg flex-col justify-center gap-4 pt-7 md:pt-5">
              <H2 className="text-white" text="Our Sheds Stand Out" />
              <Body
                text={[
                  "The difference in our quality is clear. Our hand-crafted structures begin with premium grade pressure treated lumber foundation and are tied together with the highest quality vinyl or T1-11 wood siding, 30 year architectural grade shingles and a 10 year limited warranty.",
                ]}
                className="text-white"
              />
              <div className="mt-4 flex justify-center">
                <LinkButton text="Learn More" link="/sheds" />
              </div>
            </div>
          </div>
          <div className="flex min-w-0 basis-0 md:flex-[1.5_1_0%] flex-col items-center justify-center">
            <div className="relative w-full md:translate-y-[-30%]">
              <Image
                src="/images/shed-crossection.webp"
                alt="Shed X-Ray"
                width={600}
                height={400}
                className="block h-auto w-full max-w-full"
              />

              {activeArrow ? (
                <svg
                  key={activeArrowId}
                  viewBox="0 0 100 100"
                  className="pointer-events-none absolute inset-0 h-full w-full animate-bounce-sm"
                  role="img"
                  aria-label={activeArrow.label}
                >
                  <polygon
                    points={`${activeArrow.end.x - TRIANGLE_TOP_WIDTH / 2},${activeArrow.end.y - TRIANGLE_HEIGHT} ${activeArrow.end.x + TRIANGLE_TOP_WIDTH / 2},${activeArrow.end.y - TRIANGLE_HEIGHT} ${activeArrow.end.x},${activeArrow.end.y}`}
                    fill="#860000"
                    stroke="#ffffff"
                    strokeWidth="0.3"
                    paintOrder="stroke"
                  />
                </svg>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full md:pl-120 translate-y-[-20%] md:translate-y-[-40%]">
        <CardCarousel
          cards={cards}
          activeArrowId={activeArrowId}
          setActiveArrowId={setActiveArrowId}
        />
      </div>
    </div>
  );
};
