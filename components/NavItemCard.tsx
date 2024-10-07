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
        isActive ? "text-neutral-100 bg-pos-100 text-base" : ""
      } flex py-2 pr-3 w-32 text-sm rounded-xl duration-500 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 bg-size-200 transition-all`}
      href={sectionLink}
    >
      <div
        className={`${isActive ? "w-full" : "w-0"} transform-all duration-500`}
      ></div>
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </a>
  );
};

export default NavItemCard;
