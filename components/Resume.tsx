import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";

const Resume = () => {
  return (
    <div className="py-24">
      <section
        id="about"
        className="mb-24 text-neutral-400 leading-relaxed scroll-mt-24"
      >
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
          Other than building apps, I also love exploring the world, reading a
          new book, hanging out with friends, and{" "}
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
      <section
        id="experience"
        className="mb-24 text-neutral-400 leading-relaxed scroll-mt-24"
      >
        <h1 className="font-bold text-3xl text-neutral-100 mb-8">
          Relevant Experience:
        </h1>
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
          className=" text-neutral-100 hover:text-lg hover:size-7 transition-all ease-in-out duration-200"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mt-10 font-bold flex flex-row gap-2">
            View my full resume here{" "}
            <ArrowTopRightOnSquareIcon className="size-5" />
          </div>
        </a>
      </section>

      <section id="projects" className="mb-24 scroll-mt-24">
        <h1 className="font-bold text-3xl text-neutral-100 mb-8">
          My Favourite Projects:
        </h1>
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
          className=" text-neutral-100 hover:text-lg hover:size-7 transition-all ease-in-out duration-200"
          href="https://github.com/RCopJr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mt-10 font-bold flex flex-row gap-2">
            Checkout my github for more!
            <ArrowTopRightOnSquareIcon className="size-5" />
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
