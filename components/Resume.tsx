"use client";
import React, { useEffect, useRef } from "react";

const Resume = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollWheel = (e: WheelEvent) => {
      if (mainDivRef.current) {
        mainDivRef.current.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScrollWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  return (
    <div ref={mainDivRef} className="py-24 overflow-y-hidden">
      <p className="leading-relaxed mb-6">
        Hey there 👋 my name is Ramonito! I recently graduated from the
        <span className="text-slate-200"> University of Waterloo</span> with a
        degree in Mechatronics Engineering. I have a strong passion for software
        engineering and love building and learning how to build fun apps that
        are useful, efficient, and aesthetic!
      </p>

      <p className="leading-relaxed mb-6">
        I am currently{" "}
        <span className="text-slate-200">
          {" "}
          seeking software engineering opportunities
        </span>{" "}
        in both web or mobile development, with a focus on either frontend or
        full-stack.
      </p>

      <p className="leading-relaxed mb-6">
        Other than building apps, I also love travelling, reading, hanging out
        with friends, and{" "}
        <a
          className="underline text-slate-200"
          href="https://www.strava.com/athletes/138075895"
          title="Add me on Strava!!"
        >
          going on runs!
        </a>
      </p>

      {/* Simulating long content */}
      {/* {[...Array(50)].map((_, i) => (
        <div key={i} className="my-4">
          Content block {i + 1}: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam vel ultricies nulla. Suspendisse potenti.
        </div>
      ))} */}
    </div>
  );
};

export default Resume;
