import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-1">
      <div>
        Deployed with <span>Vercel</span>. Built with{" "}
        <span className="text-neutral-100">Next.js</span>,{" "}
        <span className="text-neutral-100">Tailwind</span>, and{" "}
        <span className="text-neutral-100">Aceternity UI</span>{" "}
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
  );
};

export default Footer;
