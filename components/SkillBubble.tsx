import React from "react";

const SkillBubble = ({ skill }: { skill: string }) => {
  return (
    <div className="inline-block py-1 px-3 bg-neutral-700 text-neutral-100 rounded-full text-sm shadow-lg">
      {skill}
    </div>
  );
};

export default SkillBubble;
