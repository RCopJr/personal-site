import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-1">
      <div>
        Deployed with <span className="text-slate-50">Vercel</span>. Built with{" "}
        <span className="text-slate-50">Next.js</span>,{" "}
        <span className="text-slate-50">Tailwind</span>, and{" "}
        <span className="text-slate-50">Aceternity UI</span> .
      </div>
      <div>
        Main inspirations:{" "}
        <a
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-slate-50">brittanychiang.com</span> and{" "}
        </a>
        <a
          href="https://cherupil.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-slate-50">cherupil.com</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
