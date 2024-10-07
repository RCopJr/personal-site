"use client";

import {
  faGithub,
  faInstagram,
  faLinkedin,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="sticky top-0 py-24 flex flex-col justify-between h-screen">
      <div>
        <h1 className="font-bold text-5xl text-neutral-200">
          Ramonito Copreros
        </h1>
        <h2 className="mt-4 text-xl font-light text-neutral-200">
          Frontend/Fullstack{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 animate-gradient-slow bg-[length:200%_200%]">
            Software Engineer
          </span>
        </h2>
        <p className="mt-4 text-m max-w-xs text-neutral-400">
          Aspiring to build interesting apps at the highest quality.
        </p>
        <NavBar />
      </div>
      <div className="flex gap-7 text-neutral-400">
        <a
          href="https://github.com/RCopJr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-3xl hover:text-neutral-100"
            icon={faGithub}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/rcoprerosjr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-3xl hover:text-neutral-100"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.instagram.com/ramonito.jr/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-3xl hover:text-neutral-100"
            icon={faInstagram}
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.strava.com/athletes/138075895"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-3xl hover:text-neutral-100 transition duration-500"
            icon={faStrava}
          ></FontAwesomeIcon>
        </a>
      </div>
    </header>
  );
};

export default Header;
