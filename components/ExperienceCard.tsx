import React from "react";
import SkillBubble from "./SkillBubble";

const ExperienceCard = ({
  company = "",
  position = "",
  date = "",
  description = "",
  skills = [],
}: {
  company: string;
  position: string;
  date: string;
  description: string;
  skills: string[];
}) => {
  return (
    <div className="mb-8 text-gray-400 rounded-xl shadow-lg p-6 bg-gradient-to-r from-gray-900 to-gray-950">
      <div className="flex flex-wrap justify-between text-lg mb-1 items-center">
        <h1 className="font-bold text-gray-100">{company}</h1>
        <h3 className="text-sm">{date}</h3>
      </div>
      {/* <div className="mb-2 h-[1px] bg-gradient-to-r from-gray-100 via-gray-100 to-gray-950"></div> */}
      <h2 className="font-bold text-lg mb-4 text-gray-400">{position}</h2>
      <p className="text-gray-400 mb-6 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBubble key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
