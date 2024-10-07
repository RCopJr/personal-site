"use client";

import { getServerActionDispatcher } from "next/dist/client/components/app-router";
import React, { useEffect, useState } from "react";
import NavItemCard from "./NavItemCard";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [sectionIds, setSectionsIds] = useState<string[]>([]);

  useEffect(() => {
    setSectionsIds(() => {
      const sectionIds = Array.from(document.querySelectorAll("section"));
      return sectionIds.map((section) => section.id);
    });

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionArea = section.getBoundingClientRect();
        if (
          (sectionArea.top >= 0 && sectionArea.top < window.innerHeight / 3) ||
          (sectionArea.bottom >= 0 &&
            sectionArea.top < 0 &&
            sectionArea.bottom > window.innerHeight / 3)
        ) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex flex-col gap-2 mt-24">
      {sectionIds.map((id, index) => {
        return (
          <NavItemCard
            key={index}
            sectionLink={`#${id}`}
            title={id}
            isActive={activeSection === id}
          />
        );
      })}
    </nav>
  );
};

export default NavBar;
