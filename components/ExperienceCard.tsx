import React from "react";
import SkillBubble from "./SkillBubble";

const ExperienceCard = ({
  company = "Audioworks",
  position = "Web and Mobile Developer Intern",
  date = "May - Aug 2024",
  description = "Worked on their mobile and web social media platform Sounds unite",
  skills = ["React", "Javascript"],
}: {
  company: string;
  position: string;
  date: string;
  description: string;
  skills: string[];
}) => {
  return (
    <div className="mb-8 text-neutral-400 rounded-xl shadow-lg p-6 bg-gradient-to-r from-neutral-900 to-neutral-950">
      <div>
        <h1 className="text-xl font-bold mb-1 text-neutral-100">{company}</h1>
        <h3 className="text-sm mb-3">{date}</h3>
        <div className="mb-6 h-[1px] bg-gradient-to-r from-neutral-100 via-neutral-100 to-neutral-950"></div>
        <h2 className="text-base font-bold mb-2 text-neutral-100">
          {position}
        </h2>
        <p className="text-neutral-400 mb-6 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillBubble key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
