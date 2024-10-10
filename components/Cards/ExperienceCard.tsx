"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import SkillBubble from "../SkillBubble";

const ExperienceCard = ({
  company = "",
  position = "",
  date = "",
  description = "",
  skills = [],
  inViewThreshold = 0.5,
}: {
  company: string;
  position: string;
  date: string;
  description: string;
  skills: string[];
  inViewThreshold?: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: inViewThreshold,
  });
  return (
    <div
      ref={ref}
      className={`${inView ? "translate-x-0 opacity-100" : "translate-x-[+5%] opacity-0 lg:translate-x-[+18%] 2xl:translate-x-[+50%]"} mb-8 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-slate-400 transition-all duration-1000 motion-reduce:transition-none`}
    >
      <div className="mb-1 flex flex-wrap items-center justify-between text-lg">
        <h1 className="font-bold text-slate-50">{company}</h1>
        <h3 className="text-sm">{date}</h3>
      </div>
      {/* <div className="mb-2 h-[1px] bg-gradient-to-r from-slate-100 via-slate-100 to-slate-950"></div> */}
      <h2 className="mb-4 text-lg font-bold text-slate-400">{position}</h2>
      <p className="mb-6 text-sm text-slate-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBubble key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
