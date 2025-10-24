"use client";

import { useAnimation } from "@/hooks/useAnimation";

function Education() {
  const animationTitle = useAnimation<HTMLDivElement>({
    animationType: "fade-up",
    duration: 600,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationScale = useAnimation<HTMLDivElement>({
    animationType: "scale-up",
    duration: 500,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });
  return (
    <section id="education">
      {/* <h2
        className="section-title"
        ref={animationTitle.ref}
        style={animationTitle.style}
      >
        Education
      </h2> */}

      <div
        ref={animationScale.ref}
        style={animationScale.style}
        className="bg-(--bg-card) p-8 rounded-xl border border-(--border) border-solid hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-(--accent) transition-all duration-300"
      >
        <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold text-(--text-primary)">
              FPT University
            </h3>
            <p className="text-(--accent) text-xl">Software Engineering</p>
          </div>
          <span className="text-(--text-secondary) text-sm">
            September 2021 - October 2025
          </span>
        </div>

        <div className="mt-4">
          <p className="text-xl text-(--accent) mb-2 ">GPA: 3.4/4.0</p>
          <ul className="mt-4">
            <li className='py-2 pl-6 relative text-(--text-secondary) before:content-["🏆"] before:absolute before:left-0'>
              Top 5 IT Faculty (1 semester)
            </li>
            <li className='py-2 pl-6 relative text-(--text-secondary) before:content-["🏆"] before:absolute before:left-0'>
              Outstanding Student (2 semesters)
            </li>
            <li className='py-2 pl-6 relative text-(--text-secondary) before:content-["🏆"] before:absolute before:left-0'>
              Good Student (4 semesters)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
