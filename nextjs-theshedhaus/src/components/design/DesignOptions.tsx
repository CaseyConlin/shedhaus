"use client";
import { DesignSection, type DesignSectionProps } from "./DesignSection";
import { useState, useEffect, useRef } from "react";
import { LinkButton } from "../buttons/LinkButton";

export const DesignOptionsPage = ({
  sections,
}: {
  sections: DesignSectionProps[];
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const programmaticScrollUntilRef = useRef(0);

  const getParentSectionIdForTarget = (targetId: string) => {
    const matchingSection = sections.find((section) => {
      if (section.id === targetId) {
        return true;
      }

      return (section.subSections ?? []).some(
        (subSection) => subSection.id === targetId,
      );
    });

    return matchingSection?.id ?? targetId;
  };

  const navLinks = sections.flatMap((section) => {
    const parentLink = {
      key: `section-${section.id}`,
      id: section.id,
      label: section.navLabel ?? section.sectionTitle,
      isSubsection: false,
    };

    const sectionShortcutLinks = (section.linksToShow ?? []).map(
      (label, idx) => ({
        key: `section-shortcut-${section.id}-${idx}`,
        id: section.id,
        label,
        isSubsection: true,
      }),
    );

    const subsectionLinks = (section.subSections ?? [])
      .filter((subSection) => subSection.includeInNav)
      .map((subSection) => ({
        key: `subsection-${subSection.id}`,
        id: subSection.id,
        label: subSection.navLabel ?? subSection.title ?? subSection.id,
        isSubsection: true,
      }));

    return [parentLink, ...sectionShortcutLinks, ...subsectionLinks];
  });

  const handleScrollToSection = (id: string) => {
    setActiveSection(getParentSectionIdForTarget(id));
    programmaticScrollUntilRef.current = window.setTimeout(() => {
      programmaticScrollUntilRef.current = 0;
    }, 700);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      if (programmaticScrollUntilRef.current) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let closestSectionId = sections[0]?.id ?? "";
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const sectionId of sections.map((section) => section.id)) {
        const el = document.getElementById(sectionId);
        if (el) {
          const elementTop = el.getBoundingClientRect().top;
          const distanceFromCenter = Math.abs(
            elementTop + el.offsetHeight / 2 - viewportCenter,
          );

          if (distanceFromCenter < closestDistance) {
            closestDistance = distanceFromCenter;
            closestSectionId = sectionId;
          }
        }
      }

      setActiveSection(closestSectionId);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);

      if (programmaticScrollUntilRef.current) {
        window.clearTimeout(programmaticScrollUntilRef.current);
      }
    };
  }, [sections]);

  return (
    // <div className="flex flex-col items-center justify-center w-screen">
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="flex w-full max-w-6xl mx-auto flex-col md:flex-row items-start justify-center md:gap-10 py-4 md:py-8 md:px-0">
        <div className="hidden lg:block lg:flex-1 lg:sticky lg:top-8 lg:self-start">
          {/* Sticky Left Navigation (Desktop Only - hidden on mobile) */}
          <nav className="bg-white ">
            <h3 className="font-montserrat font-extrabold text-lg text-primary mb-0 ">
              Design Options
            </h3>
            <ul className="space-y-0 font-inter mb-5 pl-2">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.key}
                  className={navLink.isSubsection ? "pl-3" : ""}
                >
                  <button
                    onClick={() => handleScrollToSection(navLink.id)}
                    className={
                      navLink.isSubsection
                        ? "w-full text-left text-black font-medium"
                        : `w-full text-left text-primary pt-2 font-semibold transition-all duration-300 ${activeSection === navLink.id ? "underline underline-offset-4" : ""}`
                    }
                  >
                    {navLink.label}
                  </button>
                </li>
              ))}
            </ul>

            <LinkButton link="/request-a-quote" text="Request a Quote" />
          </nav>
        </div>
        {/* Core Content Area */}
        {/* <div className="flex-3 flex flex-col justify-start items-start min-w-screen md:min-w-xl gap-4 px-4 md:px-0"> */}
        <div className="flex-3 flex flex-col justify-start items-start w-full min-w-0 md:min-w-xl gap-4 px-4 md:px-0">
          {sections.map((section) => (
            <DesignSection key={section.id} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};
