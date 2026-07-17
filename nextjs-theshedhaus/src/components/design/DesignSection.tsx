import {
  SidingLargeCard,
  SwatchSmallCard,
  MediumLandscapeCard,
} from "./DesignOptionsCards";
import type { SidingItem, SwatchItem, MediumItem } from "./DesignOptionsCards";
import { DesignCarousel } from "./DesignCarousel";
import { H2 } from "../text/H2";
import { Body } from "../text/Body";

export interface SubSection {
  id: string;
  title?: string;
  description?: string;
  items: SidingItem[] | SwatchItem[] | MediumItem[];
  cardType: "siding" | "swatch" | "medium";
  includeInNav?: boolean;
  navLabel?: string;
}
export interface DesignSectionProps {
  id: string;
  sectionTitle: string;
  sectionDescription: string;
  navLabel?: string;
  linksToShow?: string[];
  subSections?: SubSection[];
}

const sectionLeadIn = ({
  title,
  description,
}: {
  title?: string;
  description?: string[];
}) => {
  return (
    <>
      {title && (
        <h3 className="font-montserrat font-semibold text-lg text-primary tracking-tight leading-tight mb-0">
          {title}
        </h3>
      )}
      {description && <Body className="text-left mb-2" text={description} />}
    </>
  );
};

const renderSubSectionItems = (subSection: SubSection) => {
  switch (subSection.cardType) {
    case "siding":
      return (
        <div className="w-full flex flex-col gap-2">
          {(subSection.title || subSection.description) &&
            sectionLeadIn({
              title: subSection.title,
              description: subSection.description
                ? [subSection.description]
                : undefined,
            })}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(subSection.items as SidingItem[]).map((item) => (
              <SidingLargeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    case "swatch":
      return (
        <>
          {(subSection.title || subSection.description) &&
            sectionLeadIn({
              title: subSection.title,
              description: subSection.description
                ? [subSection.description]
                : undefined,
            })}
          <div className="flex flex-wrap justify-center gap-2">
            {(subSection.items as SwatchItem[]).map((item) => (
              <SwatchSmallCard key={item.id} item={item} />
            ))}
          </div>
        </>
      );
    case "medium":
      return (
        <div className="w-full flex flex-col gap-2">
          {(subSection.title || subSection.description) &&
            sectionLeadIn({
              title: subSection.title,
              description: subSection.description
                ? [subSection.description]
                : undefined,
            })}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(subSection.items as MediumItem[]).map((item) => (
              <MediumLandscapeCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export const DesignSection = ({
  id,
  sectionTitle,
  sectionDescription,
  subSections,
}: DesignSectionProps) => {
  return (
    // <section id={id} className="scroll-mt-24 space-y-2 pb-12">
    <section id={id} className="scroll-mt-24 space-y-2 pb-12 w-full min-w-0">
      <div>
        <H2 text={sectionTitle} className="text-primary text-left" />
        <Body className="text-left mb-4" text={[sectionDescription]} />
      </div>
      <div className="hidden sm:grid grid-cols-1 gap-2">
        {subSections?.map((subSection) => (
          <div key={subSection.id} id={subSection.id} className="scroll-mt-24">
            {renderSubSectionItems(subSection)}
          </div>
        ))}
      </div>
      {/* <div className="md:hidden flex flex-col items-center w-full max-w-full overflow-hidden"> */}
      {/* <div className="md:hidden flex flex-col items-center w-full max-w-full">
        <DesignCarousel>
          {subSections?.map((subSection) => {
            if (subSection.cardType === "siding") {
              return (subSection.items as SidingItem[]).map((item) => (
                <div
                  key={item.id}
                  // className="snap-center shrink-0"
                  className=" shrink-0"
                  style={{ minWidth: "85vw", maxWidth: "85vw" }}
                >
                  <SidingLargeCard item={item} />
                </div>
              ));
            }
            if (subSection.cardType === "swatch") {
              return (subSection.items as SwatchItem[]).map((item) => (
                <div
                  key={item.id}
                  // className="snap-center shrink-0"
                  className=" shrink-0"
                  style={{ minWidth: "100px", maxWidth: "100px" }}
                >
                  <SwatchSmallCard item={item} />
                </div>
              ));
            }
            if (subSection.cardType === "medium") {
              return (subSection.items as MediumItem[]).map((item) => (
                <div
                  key={item.id}
                  // className="snap-center shrink-0"
                  className=" shrink-0"
                  style={{ minWidth: "85vw", maxWidth: "85vw" }}
                >
                  <MediumLandscapeCard item={item} />
                </div>
              ));
            }
            return null;
          })}
        </DesignCarousel>
        
      </div>*/}
      <div className="md:hidden flex flex-col items-center w-full max-w-full space-y-8">
        {subSections?.map((subSection) => {
          if (subSection.cardType === "siding") {
            return (
              <div key={subSection.id} className="w-full">
                <DesignCarousel>
                  {(subSection.items as SidingItem[]).map((item) => (
                    <div
                      key={item.id}
                      className=" shrink-0"
                      style={{ minWidth: "85vw", maxWidth: "85vw" }} // Keep your existing widths
                    >
                      <SidingLargeCard item={item} />
                    </div>
                  ))}
                </DesignCarousel>
              </div>
            );
          }

          if (subSection.cardType === "swatch") {
            return (
              <div key={subSection.id} className="w-full">
                <DesignCarousel>
                  {(subSection.items as SwatchItem[]).map((item) => (
                    <div
                      key={item.id}
                      className="snap-center shrink-0"
                      style={{ minWidth: "100px", maxWidth: "100px" }}
                    >
                      <SwatchSmallCard item={item} />
                    </div>
                  ))}
                </DesignCarousel>
              </div>
            );
          }

          if (subSection.cardType === "medium") {
            return (
              <div key={subSection.id} className="w-full">
                <DesignCarousel>
                  {(subSection.items as MediumItem[]).map((item) => (
                    <div
                      key={item.id}
                      className="snap-center shrink-0"
                      style={{ minWidth: "85vw", maxWidth: "85vw" }}
                    >
                      <MediumLandscapeCard item={item} />
                    </div>
                  ))}
                </DesignCarousel>
              </div>
            );
          }
          return null;
        })}
      </div>
    </section>
  );
};
