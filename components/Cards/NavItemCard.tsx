import React from "react";

const NavItemCard = ({
  sectionLink,
  title,
  isActive,
}: {
  sectionLink: string;
  title: string;
  isActive: boolean;
}) => {
  return (
    <a
      className={`${
        isActive ? "bg-pos-100 text-slate-50" : ""
      } group flex w-28 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 bg-size-200 py-2 pr-3 text-sm transition-all duration-500 hover:bg-pos-100 hover:text-slate-50 motion-reduce:transition-none`}
      href={sectionLink}
    >
      <div
        className={`${
          isActive ? "w-full" : "w-0"
        } transition-all duration-500 group-hover:w-full motion-reduce:transition-none`}
      ></div>
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </a>
  );
};

export default NavItemCard;
