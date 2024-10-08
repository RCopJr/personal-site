import React from "react";
import SkillBubble from "../SkillBubble";

const CourseCard = ({
  title = "",
  link = "",
  platform = "",
  date = "",
  skills = [],
}: {
  title: string;
  link: string;
  platform: string;
  date: string;
  skills: string[];
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="transform-all group mb-8 flex flex-col rounded-xl bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-950 bg-size-200 bg-pos-100 p-6 transition-all duration-300 hover:scale-105 hover:bg-pos-0"
    >
      <div className="mb-1 flex flex-wrap items-center justify-between text-lg">
        <h1 className="font-bold text-neutral-100">{title}</h1>
        <h3 className="text-sm">{date}</h3>
      </div>
      <h2 className="mb-4 text-lg font-bold text-neutral-400">{platform}</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBubble key={index} skill={skill} />
        ))}
      </div>
    </a>
  );
};

export default CourseCard;
