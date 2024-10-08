import React from "react";

const SkillBubble = ({ skill }: { skill: string }) => {
  return (
    <div className="inline-block rounded-full bg-neutral-700 px-3 py-1 text-xs text-neutral-100">
      {skill}
    </div>
  );
};

export default SkillBubble;
