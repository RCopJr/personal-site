import React from "react";

const SkillBubble = ({ skill }: { skill: string }) => {
  return (
    <div className="inline-block py-1 px-3 bg-gray-700 text-gray-100 rounded-full text-xs">
      {skill}
    </div>
  );
};

export default SkillBubble;
