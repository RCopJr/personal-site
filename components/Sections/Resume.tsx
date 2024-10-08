import React from "react";
import CourseCard from "../Cards/CourseCard";
import ExperienceCard from "../Cards/ExperienceCard";
import ProjectCard from "../Cards/ProjectCard";
import ViewMoreAction from "../ViewMoreAction";
import Footer from "./Footer";

const Resume = () => {
  return (
    <div className="py-16 lg:py-24">
      <section
        id="about"
        className="mb-32 scroll-mt-24 text-sm leading-relaxed text-neutral-400"
      >
        <div className="sticky top-0 mb-5 bg-neutral-950 py-4 text-xl font-bold text-neutral-100 opacity-90 lg:hidden lg:py-0">
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
        className="mb-32 scroll-mt-24 leading-relaxed text-neutral-400"
      >
        <div className="sticky top-0 mb-5 bg-neutral-950 py-4 text-xl font-bold text-neutral-100 opacity-90 lg:relative lg:py-0 lg:text-lg lg:text-neutral-400 lg:opacity-100">
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
        <div className="sticky top-0 mb-5 bg-neutral-950 py-4 text-xl font-bold text-neutral-100 opacity-90 lg:relative lg:py-0 lg:text-lg lg:text-neutral-400 lg:opacity-100">
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
      <section id="certifications" className="mb-32 scroll-mt-24">
        <div className="sticky top-0 mb-5 bg-neutral-950 py-4 text-xl font-bold text-neutral-100 opacity-90 lg:relative lg:py-0 lg:text-lg lg:text-neutral-400 lg:opacity-100">
          <h1>Certifications</h1>
        </div>
        <CourseCard
          title="The Complete Web Development Bootcamp"
          link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-31a51522-7bba-4e8d-86e9-b4c31c59521f.pdf"
          platform="Udemy"
          date="2022"
          skills={["HTML", "CSS", "Javascript", "Node.js", "React", "MongoDB"]}
        />
        <CourseCard
          title="Machine Learning"
          link="https://www.coursera.org/account/accomplishments/certificate/R5L5R6MAGLYM"
          platform="Coursera: Stanford"
          date="2022"
          skills={["Python", "MATLAB"]}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
