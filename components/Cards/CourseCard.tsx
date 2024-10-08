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
        <h1 className="flex items-center gap-2 text-lg font-bold text-neutral-200">
          {title}
          <svg
            className="size-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
          </svg>
        </h1>

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