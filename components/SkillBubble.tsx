import React from "react";

const SkillBubble = ({ skill }: { skill: string }) => {
  return (
    <div className="inline-block rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-50">
      {skill}
    </div>
  );
};

export default SkillBubble;
