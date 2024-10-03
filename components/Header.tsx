"use client";

import React, { useEffect, useRef } from "react";

const Header = () => {
  const scrollableRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScrollWheel = (e: WheelEvent) => {
      if (scrollableRef.current) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScrollWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  return (
    <header ref={scrollableRef} className="max-h-screen overflow-hidden">
      <h1>Test component</h1>
    </header>
  );
};

export default Header;
