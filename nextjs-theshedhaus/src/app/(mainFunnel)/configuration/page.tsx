import { DesignOptionsPage } from "../../../components/design/DesignOptions";
import type { DesignSectionProps } from "../../../components/design/DesignSection";

const SIDING_SECTION: DesignSectionProps = {
  id: "siding",
  sectionTitle: "Siding",
  sectionDescription:
    "Your siding is the primary barrier against the Northeast climate. We carry these three high-performance materials because they provide the best balance of structural integrity, low maintenance, and aesthetic finish for our local environment.",
  linksToShow: ["T1-11 Siding", "Vinyl Siding"],
  subSections: [
    {
      cardType: "siding",
      id: "siding-options",
      items: [
        {
          id: "t1-11",
          title: "T1-11 Siding",
          subtitle:
            "Best for long-term durability & classic painted-shed aesthetics without warping.",
          bullets: [
            "Wood-grain texture",
            "50-year manufacturer warranty",
            "Zinc-borate treated to resist rot & termites",
            "Stainable to match natural landscapes",
          ],
          imageUrl: "/images/tempDesignImage.png",
        },
        {
          id: "vinyl",
          title: "Premium Vinyl Siding",
          subtitle:
            "Best for property owners wanting a completely maintenance-free exterior.",
          bullets: [
            "Installed over wood-grain sheathing",
            "Zero painting required for life",
            "Dent-resistant advanced polymers",
            "Cleans easily with garden hose spray",
          ],
          imageUrl: "/images/tempDesignImage.png",
        },
      ],
    },
  ],
};

const COLOR_SECTION: DesignSectionProps = {
  id: "color",
  navLabel: "Finishes & Paint",
  sectionTitle: "Paint, Stain & Exterior Finishes",
  sectionDescription:
    "The final finish is what integrates your new structure into your property’s unique landscape. Whether you are aiming for a classic barn aesthetic that blends into the treeline or a crisp, modern look that complements your home’s existing siding, we offer a curated palette of weather-tested stains and exterior-grade paints designed to resist fading and rot in our Northeast climate.",
  subSections: [
    {
      id: "colorOptions",
      cardType: "swatch",
      title: "T1-11 & Trim Colors",
      items: [
        { id: "navajo", name: "Navajo White", colors: "#f9f6ee" },
        { id: "sandstone", name: "Sandstone", colors: "#dfd2b9" },
        { id: "beige", name: "Beige", colors: ["#dfd4c3", "#3a3a3c"] },
        { id: "clay", name: "Clay", colors: ["#b8a48f", "#1f1f1f"] },
        { id: "charcoal", name: "Charcoal", colors: "#4a4a4a" },
        { id: "barn-red", name: "Barn Red", colors: "#860000" },
        { id: "forest-green", name: "Forest Green", colors: "#1b4d3e" },
        { id: "navy-blue", name: "Navy Blue", colors: "#1d2951" },
        { id: "pearl-gray", name: "Pearl Gray", colors: "#cfd4d8" },
      ],
    },
  ],
};

const WOOD_DOORS_SECTION: DesignSectionProps = {
  id: "doors",
  sectionTitle: "Doors",
  sectionDescription:
    "Your shed's entryways are the most frequently used and most vulnerable points of your structure. We offer a curated selection of heavy-duty wood doors designed to withstand frequent use, resist warping, and provide a secure barrier against the elements.",
  subSections: [
    {
      id: "woodDoorOptions",
      cardType: "medium",
      title: "Wood Door Options",
      description:
        "Our wood doors are designed to provide a secure and durable entryway for your shed. Each option is crafted with high-quality materials and attention to detail, ensuring long-lasting performance and aesthetic appeal.",
      includeInNav: true,
      items: [
        {
          id: "conventional",
          title: "Conventional Wood Door",
          subtitle: "Traditional styling",
          description:
            "Features absolute structural integrity with hand-selected premium studs, designed to resist sag and drafts.",
          imageUrl: "/images/tempDesignImage.png",
        },
        {
          id: "classic-painted",
          title: "Classic Painted Door",
          subtitle: "Durable finish",
          description:
            "Coated with architectural-grade paint designed to repel water and endure severe weather patterns.",
          imageUrl: "/images/tempDesignImage.png",
        },
        {
          id: "new-england",
          title: "New England Transom",
          subtitle: "Sunlit entryway",
          description:
            "Features high-pitch accent layout windows integrated directly into the upper panels for natural internal lighting.",
          imageUrl: "/images/tempDesignImage.png",
        },
        {
          id: "mid-century",
          title: "Cross-Buck Door",
          subtitle: "Rustic aesthetic",
          description:
            "Reinforced wood frame designed with traditional structural diagonal bracing for high-demand workspaces.",
          imageUrl: "/images/tempDesignImage.png",
        },
      ],
    },
  ],
};

const WINDOWS_SECTION: DesignSectionProps = {
  id: "windows",
  sectionTitle: "Windows",
  sectionDescription:
    "Your shed's windows provide natural light and ventilation, enhancing the functionality and comfort of your space. We offer a variety of window styles and sizes to suit your needs, from compact options for smaller sheds to larger designs for workshops and hobby rooms.",
  subSections: [
    {
      id: "windowOptions",
      cardType: "medium",
      items: [
        {
          id: "std-18-27",
          title: 'Standard 18"x27"',
          description:
            "Compact sizing. Perfect for adding natural light to smaller storage units without sacrificing valuable wall space.",
          imageUrl: "/images/tempDesignImage.png",
        },
        {
          id: "large-24-36",
          title: 'Large 24"x36"',
          description:
            "Generous sizing. Perfect for active garden workshops, tool stations, and hobby rooms demanding optimal cross-ventilation.",
          imageUrl: "/images/tempDesignImage.png",
        },
        {
          id: "transom-long",
          title: "Transom Window",
          description:
            "Elegant layout. Sits directly under eaves to provide privacy while distributing light across the roof rafters.",
          imageUrl: "/images/tempDesignImage.png",
        },
        {
          id: "trim-shutter",
          title: "Shed Haus Trim",
          description:
            "High impact color-matched shutters that tie your custom shed design into your home property's paint scheme.",
          imageUrl: "/images/tempDesignImage.png",
        },
      ],
    },
  ],
};

import { PageHeader } from "@/components/text/PageHeader";

const CONFIGURATION_PAGE_SLUG = "configuration";

export default async function Page() {
  return (
    <>
      <PageHeader
        title={CONFIGURATION_PAGE_SLUG}
        description={`Details about ${CONFIGURATION_PAGE_SLUG}`}
      />
      <DesignOptionsPage
        sections={[
          SIDING_SECTION,
          COLOR_SECTION,
          WOOD_DOORS_SECTION,
          WINDOWS_SECTION,
        ]}
      />
    </>
  );
}
