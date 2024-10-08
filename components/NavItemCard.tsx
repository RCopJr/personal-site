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
        isActive ? "text-gray-100 bg-pos-100" : ""
      } group flex py-2 pr-3 w-28 text-sm rounded-xl duration-500 bg-gradient-to-r from-gray-950 via-gray-950 to-gray-900 bg-size-200 transition-all hover:text-gray-100 hover:bg-pos-100`}
      href={sectionLink}
    >
      <div
        className={`${
          isActive ? "w-full" : ""
        } w-0 transform-all duration-500 group-hover:w-full`}
      ></div>
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </a>
  );
};

export default NavItemCard;
