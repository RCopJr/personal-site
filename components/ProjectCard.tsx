import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React from "react";
import SkillBubble from "./SkillBubble";

const ProjectCard = ({
  name = "Audioworks",
  imageSrc = "",
  link = "",
  description = "Worked on their mobile and web social media platform Sounds unite",
  skills = ["React", "Javascript"],
}: {
  name: string;
  imageSrc: string;
  link: string;
  description: string;
  skills: string[];
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-105 transform-all flex group gap-5 mb-8 rounded-xl p-6 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-950 bg-size-200 bg-pos-100 transition-all duration-300 hover:bg-pos-0"
    >
      <img className="hidden md:inline-block h-20" src={imageSrc}></img>
      <div>
        <h1 className="flex items-center gap-2 text-lg font-bold mb-3 text-gray-200">
          {name}
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
        <p className="text-sm text-gray-400 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillBubble key={index} skill={skill} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
