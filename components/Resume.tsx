import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

const Resume = () => {
  return (
    <div className="py-12 lg:py-24">
      <section
        id="about"
        className="mb-32 text-neutral-400 leading-relaxed scroll-mt-24"
      >
        <div className="bg-neutral-950 opacity-90 sticky top-0 lg:hidden text-2xl text-neutral-100 mb-5 py-4 lg:py-0 ">
          <h1>About</h1>
        </div>
        <p className="mb-6">
          👋 Hey there! I'm Ramonito, a recent Mechatronics Engineering graduate
          from the
          <span className="text-neutral-100"> University of Waterloo</span>. I
          have a strong passion for software engineering and a love for creating
          fun, efficient, and aesthetically pleasing apps.
        </p>

        <p className="mb-6">
          I'm also currently{" "}
          <span className="text-neutral-100">
            {" "}
            seeking software engineering opportunities
          </span>{" "}
          with my main focuses being in frontend or full-stack development (web
          & mobile).
        </p>

        <p className="mb-6">
          Beyond coding, I enjoy exploring the world, diving into a new book,
          hanging out with friends, and going out for runs!
        </p>
      </section>
      <section
        id="experience"
        className="mb-32 text-neutral-400 leading-relaxed scroll-mt-24"
      >
        <div className="bg-neutral-950 opacity-90 sticky top-0 lg:relative text-2xl text-neutral-100 mb-5 py-4 lg:py-0">
          <h1>Relevant Experience</h1>
        </div>
        <ExperienceCard
          company="Audioworks"
          date="May - Aug 2023"
          position="Web & Mobile Developer Intern"
          description="Led projects to enhance and develop core features, 
          including an interactive music player on the mobile app and its 
          integration with paginated user feeds for our social media platform, Soundsunite."
          skills={[
            "React",
            "React Native",
            "Node",
            "Express",
            "React Native Track Player",
          ]}
        />

        <ExperienceCard
          company="Verticalscope"
          date="Sep - Dec 2022"
          position="Software Engineer Intern"
          description="Worked in a team to manage three large fitness websites hosting blogs, products, and forums. 
          Also collaborated with others to create a POC for decoupling the sites using Strapi as a CMS."
          skills={["Wordpress", "PHP", "Typescript", "Strapi"]}
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
          className="hover:text-neutral-100 mt-10 transform-all flex transition-all duration-300"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="font-bold flex flex-row gap-2 items-center">
            View my full resume here
            <svg
              className="size-5 hover:text-neutral-100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
            </svg>
          </div>
        </a>
      </section>

      <section id="projects" className="mb-32 scroll-mt-24">
        <div className="bg-neutral-950 opacity-90 sticky top-0 lg:relative text-2xl text-neutral-100 mb-5 py-4 lg:py-0">
          <h1>Favourite Projects</h1>
        </div>
        <ProjectCard
          name="Workout Tracker"
          imageSrc="/workout_tracker.png"
          link="https://github.com/RCopJr/workout-tracker"
          description="Working on a mobile-friendly web clone of the Strong app in React"
          skills={["MongoDB", "Express", "React", "Node"]}
        />
        <ProjectCard
          name="Recipe Finder"
          imageSrc="/recipe_finder.png"
          link="https://github.com/RCopJr/recipe-finder"
          description="Working on a mobile-friendly web clone of the Strong app in React"
          skills={["MongoDB", "Express", "React", "Node"]}
        />
        <ProjectCard
          name="Portfolio"
          imageSrc="/portfolio.png"
          link="https://github.com/RCopJr/portfolio"
          description="Working on a mobile-friendly web clone of the Strong app in React"
          skills={["React", "Tailwind", "Next"]}
        />

        <a
          className="hover:text-neutral-100 transition-all ease-in-out duration-200"
          href="https://github.com/RCopJr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mt-10 font-bold flex items-center flex-row gap-2">
            Checkout my github for more!
            <svg
              className="size-5 hover:text-neutral-100"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
            </svg>
          </div>
        </a>
      </section>
      <footer className="flex flex-col gap-1">
        <div>
          Deployed with <span>Vercel</span>. Built with{" "}
          <span className="text-neutral-100">Next.js</span>,{" "}
          <span className="text-neutral-100">Tailwind</span>, and{" "}
          <span className="text-neutral-100">Love</span> ❤️
        </div>
        <div>
          Main inspirations:{" "}
          <a
            href="https://brittanychiang.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-neutral-100">brittanychiang.com</span> and{" "}
          </a>
          <a
            href="https://cherupil.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-neutral-100">cherupil.com</span>
          </a>
        </div>
      </footer>
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
