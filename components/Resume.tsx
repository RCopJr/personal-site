"use client";
import React, { useEffect, useRef } from "react";

const Resume = () => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollWheel = (e: WheelEvent) => {
      if (scrollableRef.current) {
        scrollableRef.current.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScrollWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  return (
    <div ref={scrollableRef} className="overflow-y-scroll">
      <h1>Scrollable Content</h1>
      {/* Simulating long content */}
      {[...Array(50)].map((_, i) => (
        <div key={i} className="my-4">
          Content block {i + 1}: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam vel ultricies nulla. Suspendisse potenti.
        </div>
      ))}
    </div>
  );
};

export default Resume;
