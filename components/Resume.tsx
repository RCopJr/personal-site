"use client";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";

const Resume = () => {
  const mainDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScrollWheel = (e: WheelEvent) => {
      if (mainDivRef.current) {
        mainDivRef.current.scrollTop += e.deltaY;
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleScrollWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScrollWheel);
    };
  }, []);

  return (
    <div ref={mainDivRef} className="py-24 overflow-y-hidden">
      <section className="mb-24 text-neutral-400 leading-relaxed ">
        <p className="mb-6">
          👋 Hey there! My name is Ramonito. I recently graduated from the
          <span className="text-neutral-100"> University of Waterloo</span> with
          a degree in Mechatronics Engineering. I have a strong passion for
          software engineering with a love for building and learning how to
          build fun apps that are useful, efficient, and aesthetic!
        </p>

        <p className="mb-6">
          I am currently{" "}
          <span className="text-neutral-100">
            {" "}
            seeking software engineering opportunities
          </span>{" "}
          in both web or mobile development, with a focus on either frontend or
          full-stack.
        </p>

        <p className="mb-6">
          Other than building apps, I also love travelling, reading, hanging out
          with friends, and{" "}
          <a
            className="underline text-neutral-100 hover:text-lg transition-all ease-in-out duration-200"
            href="https://www.strava.com/athletes/138075895"
            target="_blank"
            rel="noopener noreferrer"
            title="Add me on Strava!!"
          >
            going on runs!
          </a>
        </p>
      </section>

      <section>
        <h1 className="font-bold text-3xl text-neutral-100 mb-8">
          Some of my recent experience:
        </h1>
        <ExperienceCard
          company="Audioworks"
          date="May - Aug 2024"
          position="Web & Mobile Developer"
          description="Led projects to enhance and develop core features, 
          including an interactive music player on the mobile app and its 
          integration with paginated user feeds for our social media platform, Soundsunite."
          skills={["React", "React Native", "Node", "Express"]}
        />

        <ExperienceCard
          company="Audioworks"
          date="May - Aug 2024"
          position="Web & Mobile Developer"
          description="Led projects to enhance and develop core features, 
          including an interactive music player on the mobile app and its 
          integration with paginated user feeds for our social media platform, Soundsunite."
          skills={["React", "React Native", "Node", "Express"]}
        />

        <ExperienceCard
          company="Audioworks"
          date="May - Aug 2024"
          position="Web & Mobile Developer"
          description="Led projects to enhance and develop core features, 
          including an interactive music player on the mobile app and its 
          integration with paginated user feeds for our social media platform, Soundsunite."
          skills={["React", "React Native", "Node", "Express"]}
        />

        <a
          className=" text-neutral-100 hover:text-lg transition-all ease-in-out duration-200"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mt-10 flex flex-row gap-2">
            You can view my full resume here{" "}
            <ArrowTopRightOnSquareIcon className="size-6" />
          </div>
        </a>
      </section>

      {/* Simulating long content */}
      {/* {[...Array(50)].map((_, i) => (
        <div key={i} className="my-4">
          Content block {i + 1}: Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam vel ultricies nulla. Suspendisse potenti.
        </div>
      ))} */}
    </div>
  );
};

export default Resume;
