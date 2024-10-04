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
      className="flex group gap-5 mb-8 rounded-xl p-6 bg-gradient-to-r from-neutral-700 via-neutral-900 to-neutral-950 bg-size-200 bg-pos-100 transition-all duration-500 hover:bg-pos-0"
    >
      <img className="h-20" src={imageSrc}></img>
      <div>
        <h1 className="flex gap-2 text-xl font-bold mb-1 text-neutral-200 transition-all duration-200 group-hover:text-2xl">
          {name}
          <ArrowTopRightOnSquareIcon className="size-6 transition-all duration-200 group-hover:size-7" />
        </h1>
        <p className="text-neutral-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBubble skill={skill} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
