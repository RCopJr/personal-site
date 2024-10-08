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
        isActive ? "bg-pos-100 text-neutral-100" : ""
      } group flex w-28 rounded-xl bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900 bg-size-200 py-2 pr-3 text-sm transition-all duration-500 hover:bg-pos-100 hover:text-neutral-100`}
      href={sectionLink}
    >
      <div
        className={`${
          isActive ? "w-full" : ""
        } transform-all w-0 duration-500 group-hover:w-full`}
      ></div>
      {title.charAt(0).toUpperCase() + title.slice(1)}
    </a>
  );
};

export default NavItemCard;
