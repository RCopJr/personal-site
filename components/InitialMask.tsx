"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

const InitialMask = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`${inView ? "opacity-0" : "opacity-100"} pointer-events-none fixed top-0 z-10 h-screen w-screen bg-slate-950 transition duration-1000 motion-reduce:transition-none`}
    ></div>
  );
};

export default InitialMask;
