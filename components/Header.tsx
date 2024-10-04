"use client";

import React, { useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScrollWheel = (e: WheelEvent) => {
      if (headerRef.current) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScrollWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  return (
    <header ref={headerRef} className="py-24">
      <h1 className="font-bold text-5xl text-neutral-200">Ramonito Copreros</h1>
      <h2 className="mt-4 text-xl font-light text-neutral-200">
        Frontend/Fullstack Software Engineer
      </h2>
      <p className="mt-4 text-m max-w-xs text-neutral-400">
        Aspiring to build interesting apps at the highest quality.
      </p>
    </header>
  );
};

export default Header;
