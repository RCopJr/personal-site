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
      className={`${isActive ? "text-slate-100" : ""} p-10`}
      href={sectionLink}
    >
      {title}
    </a>
  );
};

export default NavItemCard;
