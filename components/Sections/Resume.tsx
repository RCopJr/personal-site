import React from "react";
import portfolioPic from "../../public/portfolio.png";
import recipeFinderPic from "../../public/recipe_finder.png";
import workoutTrackerPic from "../../public/workout_tracker.png";
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
        className="mb-32 scroll-mt-24 text-sm leading-relaxed text-slate-400"
      >
        <div className="sticky top-0 mb-5 bg-slate-900 py-4 text-xl font-bold text-slate-50 opacity-90 lg:hidden lg:py-0">
          <h1>About</h1>
        </div>
        <p className="mb-6">
          👋 Hey there! I&apos;m Ramonito, a University of Waterloo engineering graduate and
          Full-Stack Software Engineer. I am passionate about learning new
          aspects of software development and enjoy creating{" "}
          <span className="text-slate-50">engaging</span>,{" "}
          <span className="text-slate-50">high-performance</span>,{" "}
          <span className="text-slate-50">accessible</span>, and{" "}
          <span className="text-slate-50">visually appealing</span> solutions to
          challenges.
        </p>

        <p className="mb-6">
          I currently work at Ontario Virtual School, where my efforts are split
          between maintaining and enhancing our core learning mangement system,
          and spearheading the development of innovative web applications
          focused on education and student-success.
        </p>

        <p className="mb-6">
          Beyond coding, I enjoy exploring the world, diving into a new book,
          spending quality time with friends and family, playing pickleball, and
          going out for runs!
        </p>
        <ViewMoreAction text="View my full resume here" link="./resume.pdf" />
      </section>
      <section
        id="experience"
        className="mb-32 scroll-mt-24 leading-relaxed text-slate-400"
      >
        <div className="sticky top-0 z-10 mb-5 bg-slate-900 py-4 text-xl text-slate-50 opacity-90 lg:relative lg:py-0 lg:text-lg lg:text-slate-400 lg:opacity-100">
          <h1>Relevant Experience</h1>
        </div>
        <ExperienceCard
          company="Ontario Virtual School"
          date="Mar 2025 - Now  "
          position="Full-Stack Developer"
          description="Developing and enhancing our
          learning management system, while also leading the creation of a new web application 
          aimed at improving student opportunities and outcomes."
          skills={[
            "Next.js",
            "React",
            "Drizzle ORM",
            "Tailwind CSS",
            "PHP",
            "TypeScript",
            "MySQL",
            "PostgreSQL",
            "Docker",
            "AWS S3",
          ]}
          inViewThreshold={0.2}
        />

        <ExperienceCard
          company="Audioworks"
          date="May - Aug 2023"
          position="Full-Stack Developer Intern"
          description="Led projects to enhance and develop core features, including an 
          interactive music player on the mobile app and its integration with paginated 
          user feeds for our social media platform, Soundsunite."
          skills={[
            "React",
            "React Native",
            "Node.js",
            "Express",
            "TypeScript",
            "React Native Track Player",
          ]}
          inViewThreshold={0.2}
        />

        <ExperienceCard
          company="Verticalscope"
          date="Sep - Dec 2022"
          position="Software Engineer Intern"
          description="Collaborated in a team to manage three large fitness websites 
          featuring blogs, products, and forums while also helping develop a proof 
          of concept to decouple the sites using Strapi as a CMS."
          skills={[
            "WordPress",
            "PHP",
            "TypeScript",
            "Strapi",
            "Google Cloud Platform",
          ]}
          inViewThreshold={0.2}
        />

        <ExperienceCard
          company="Kaleidescape"
          date="Sep - Dec 2020"
          position="Software Engineer Intern"
          description="Worked closely with UI teams and engineers to enhance and 
          maintain our movie webstore application, taking the lead on the main 
          updates to the user’s downloads page."
          skills={["JavaScript", "HTML5", "CSS3", "PHP", "SQL", "Knockout.js"]}
        />

        <ExperienceCard
          company="PerkinElmer"
          date="Jan - April 2022"
          position="Machine Learning Engineer Intern"
          description="Led the integration of transfer learning within a project using 
          PyTorch, a necessity for achieving incremental learning."
          skills={["Python", "PyTorch", "Dash"]}
        />

        <ExperienceCard
          company="Applied Brain Research"
          date="May - Aug 2021"
          position="Deep Learning Developer Intern"
          description="Spearheaded the end-to-end machine learning development of autoencoders 
          using Keras, for trajectory prediction."
          skills={["Python", "Keras", "Jupyter Notebook"]}
        />

        <ExperienceCard
          company="Fugro"
          date="Jan - May 2020"
          position="Software Developer Intern"
          description="Collaborated with a team to develop and improve a geo-data 
          pavement analysis application, focusing on optimizing model inference and 
          processing algorithms for improved efficiency."
          skills={["Python", "PyTorch", "C++"]}
        />
      </section>

      <section id="projects" className="mb-32 scroll-mt-24">
        <div className="sticky top-0 z-10 mb-5 bg-slate-900 py-4 text-xl text-slate-50 opacity-90 lg:relative lg:py-0 lg:text-lg lg:text-slate-400 lg:opacity-100">
          <h1>Featured Projects</h1>
        </div>
        <ProjectCard
          name="Workout Tracker"
          alt="Mobile views of workout tracker app"
          imageSrc={workoutTrackerPic}
          link="https://github.com/RCopJr/workout-tracker"
          description="Building a mobile-friendly web clone of the Strong 
          app using the MERN stack, featuring well-styled, responsive UI components."
          skills={["React", "Node.js", "Express", "MongoDB"]}
        />
        <ProjectCard
          name="Recipe Finder"
          alt="Main page of recipe finder app"
          imageSrc={recipeFinderPic}
          link="https://github.com/RCopJr/recipe-finder"
          description="A responsive web app utilizing a third-party API to 
          fetch recipes based on various search filters."
          skills={["React", "Node.js", "Express"]}
        />
        <ProjectCard
          name="Personal Site"
          alt="Personal site landing page view"
          imageSrc={portfolioPic}
          link="https://github.com/RCopJr/portfolio"
          description="This thoughtfully developed personal site built to showcase my 
          work while refining my UI development and design skills, with a focus on performance, 
          accessibility, aesthetics, and interaction design."
          skills={["React", "Next.js", "Tailwind CSS", "Aceternity UI"]}
        />

        <ViewMoreAction
          text="Checkout my GitHub for more!"
          link="https://github.com/RCopJr"
        />
      </section>
      <section id="certifications" className="mb-32 scroll-mt-24">
        <div className="sticky top-0 z-10 mb-5 bg-slate-900 py-4 text-xl text-slate-50 opacity-90 lg:relative lg:py-0 lg:text-lg lg:text-slate-400 lg:opacity-100">
          <h1>Certifications</h1>
        </div>
        <CourseCard
          title="PHP From Scratch 2024 | Beginner to Advanced"
          link="https://www.udemy.com/certificate/UC-9d0428e2-33d3-4394-9baa-cf225e8f1603/"
          platform="Udemy"
          date="2025"
          skills={["PHP", "MySQL", "Apache", "JavaScript", "HTML5", "CSS3"]}
        />
        <CourseCard
          title="Web Development Bootcamp"
          link="https://udemy-certificate.s3.amazonaws.com/pdf/UC-31a51522-7bba-4e8d-86e9-b4c31c59521f.pdf"
          platform="Udemy"
          date="2022"
          skills={[
            "React",
            "Node.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "MongoDB",
          ]}
        />
        <CourseCard
          title="Machine Learning"
          link="https://www.coursera.org/account/accomplishments/certificate/R5L5R6MAGLYM"
          platform="Coursera"
          date="2022"
          skills={["Python", "MATLAB"]}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Resume;
