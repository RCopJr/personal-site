"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import SkillBubble from "../SkillBubble";

const ProjectCard = ({
  name = "",
  alt = "",
  imageSrc = {
    src: "",
    width: 0,
    height: 0,
  },
  link = "",
  description = "",
  skills = [],
}: {
  name: string;
  alt: string;
  imageSrc: StaticImageData;
  link: string;
  description: string;
  skills: string[];
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.8 });
  return (
    <a
      ref={ref}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${inView ? "translate-x-0 opacity-100" : "translate-x-[+5%] opacity-0 lg:translate-x-[+18%] 2xl:translate-x-[+50%]"} group mb-8 flex gap-5 rounded-xl bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 bg-size-200 bg-pos-100 p-6 transition-all duration-1000 hover:bg-pos-0 motion-reduce:transition-none`}
    >
      <Image
        alt={alt}
        className="hidden h-16 w-28 md:inline-block"
        src={imageSrc}
      />
      <div>
        <h1 className="mb-3 flex items-center gap-2 text-base text-slate-50">
          {name}
          <svg
            className="size-5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
          </svg>
        </h1>
        <p className="mb-6 text-sm text-slate-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillBubble key={index} skill={skill} />
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
