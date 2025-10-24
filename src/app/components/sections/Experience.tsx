"use client";

import { useAnimation } from "@/hooks/useAnimation";

function Experience() {
  const animation = useAnimation<HTMLAnchorElement>({
    animationType: "fade-up",
    duration: 600,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });

  const exPerienceContent = {
    position: "Intern Front-end Developer",
    company: "UTA Solution",
    duration: "May 2024 - November 2024",
    details: [
      "Completed 6-month internship building web and mobile interfaces with ReactJS, React Native, and GraphQL in an agile team",
      "Developed key features for Pago - Farm Management System including purchase management, chatbot UI, and sensor monitoring",
      "Collaborated with cross-functional team to deliver production-ready applications serving 1000+ users",
    ],
  };

  return (
    <section id="experience" ref={animation.ref} style={animation.style}>
      <h2 className="section-title">Work Experience</h2>

      <div className="bg-(--bg-card) p-8 rounded-xl border border-solid border-(--border) mb-8 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-(--accent) transition-all duration-300">
        <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold text-(--accent) mb-1">
              {exPerienceContent.position}
            </h3>
            <p className="text-xl text-(--text-primary) font-semibold">
              {exPerienceContent.company}
            </p>
          </div>
          <span className="text-(--text-secondary) text-sm">
            {exPerienceContent.duration}
          </span>
        </div>
        <ul className="mt-4">
          {exPerienceContent.details.map((detail, index) => (
            <li
              key={index}
              className="py-2 px-0 pl-6 relative text-(--text-secondary) before:content-['▹'] before:absolute before:left-0 before:text-(--accent) before:font-bold"
            >
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
