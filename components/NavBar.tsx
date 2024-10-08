"use client";

import React, { useEffect, useState } from "react";
import NavItemCard from "./Cards/NavItemCard";

const sectionIds = ["about", "experience", "projects"];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
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
    <nav className="mt-32 hidden flex-col gap-2 lg:flex">
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
