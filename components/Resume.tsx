import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import ViewMoreAction from "./ViewMoreAction";

const Resume = () => {
  return (
    <div className="py-12 lg:py-24">
      <section
        id="about"
        className="mb-32 text-neutral-400 leading-relaxed scroll-mt-24 text-sm"
      >
        <div className="bg-neutral-950 opacity-90 sticky top-0 lg:hidden text-xl font-bold text-neutral-100 mb-5 py-4 lg:py-0 ">
          <h1>About</h1>
        </div>
        <p className="mb-6">
          👋 Hey there! I'm Ramonito, a recent Mechatronics Engineering graduate
          from the
          <span className="text-neutral-100"> University of Waterloo</span>. I
          have a passion for learning new things about software and a love for
          creating fun, efficient, and aesthetically pleasing apps.
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
        <div className="bg-neutral-950 opacity-90 text-xl lg:opacity-100 sticky top-0 lg:relative lg:text-lg text-neutral-100 lg:text-neutral-400 font-bold mb-5 py-4 lg:py-0">
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
          description="Collaborated in a team to manage three large fitness websites featuring blogs, 
          products, and forums, while also helping develop a proof of concept to decouple the sites using Strapi as a CMS."
          skills={["Wordpress", "PHP", "Typescript", "Strapi"]}
        />

        <ExperienceCard
          company="Kaleidescape"
          date="Sep - Dec 2020"
          position="Software Engineer Intern"
          description="Worked closely with UI teams and engineers to enhance and maintain our movie webstore application, 
          taking the lead on the main updates to the user's downloads page."
          skills={["Javascript", "HTML", "CSS", "PHP", "SQL", "Knockout.js"]}
        />

        <ViewMoreAction text="View my full resume here" link="./resume.pdf" />
      </section>

      <section id="projects" className="mb-32 scroll-mt-24">
        <div className="bg-neutral-950 opacity-90 lg:opacity-100 sticky top-0 lg:relative text-xl lg:text-lg text-neutral-100 lg:text-neutral-400 font-bold mb-5 py-4 lg:py-0">
          <h1>Featured Projects</h1>
        </div>
        <ProjectCard
          name="Workout Tracker"
          alt="Mobile views of workout tracker app"
          imageSrc="/workout_tracker.png"
          link="https://github.com/RCopJr/workout-tracker"
          description="Working on a mobile-friendly web clone of the Strong app."
          skills={["MongoDB", "Express", "React", "Node.js"]}
        />
        <ProjectCard
          name="Recipe Finder"
          alt="Main page of recipe finder app"
          imageSrc="/recipe_finder.png"
          link="https://github.com/RCopJr/recipe-finder"
          description="A responsive web app for fetching recipes based on various search filters."
          skills={["MongoDB", "Express", "React", "Node.js"]}
        />
        <ProjectCard
          name="Portfolio"
          alt="Portfolio site landing page view"
          imageSrc="/portfolio.png"
          link="https://github.com/RCopJr/portfolio"
          description="This thoughtfully designed portfolio built to showcase my work while honing 
          my UI development and design skills."
          skills={["React", "Tailwind", "Next.js"]}
        />

        <ViewMoreAction
          text="Checkout my github for more!"
          link="https://github.com/RCopJr"
        />
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
