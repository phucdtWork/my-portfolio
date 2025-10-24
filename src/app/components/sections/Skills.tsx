"use client";

import { skillsData } from "@/data/skills";
import { useAnimation } from "@/hooks/useAnimation";

function Skills() {
  const animationTitle = useAnimation({
    animationType: "fade-up",
    duration: 600,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });

  // Tạo array của animations với delay tăng dần
  const skillAnimations = skillsData.map((_, index) =>
    useAnimation({
      animationType: "fade-left",
      duration: 500,
      delay: 100 + index * 150, // Mỗi card delay thêm 150ms
      threshold: 0.2,
      triggerOnce: false,
    })
  );

  const getCssVar = (title: string) => {
    switch (title) {
      case "Frontend":
        return "--success";
      case "Backend":
        return "--accent";
      case "Database":
        return "--warning";
      default:
        return "--tool";
    }
  };

  return (
    <section id="skills">
      <h2
        className="section-title"
        ref={animationTitle.ref}
        style={animationTitle.style}
      >
        Technical Skills
      </h2>

      <div className="grid gap-8">
        {skillsData.map((skill, index) => {
          const IconComponent = skill.icon;
          const cssVar = getCssVar(skill.title);
          const animation = skillAnimations[index]; // Lấy animation tương ứng

          return (
            <div
              ref={animation.ref}
              style={animation.style}
              key={index}
              className="bg-(--bg-card) p-8 border rounded-lg border-solid border-(--border)"
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="flex items-center text-lg font-semibold">
                  <IconComponent
                    className="inline-block mr-2"
                    style={{ color: `var(${cssVar})` }}
                  />
                  <span style={{ color: `var(${cssVar})` }}>{skill.title}</span>
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg transition-all duration-300 cursor-default border-l-4 border-solid bg-(--bg-secondary) text-(--text-primary) hover:-translate-y-[3px] hover:shadow-[0_5px_15px_rgba(59,130,246,0.2)]"
                    style={{ borderLeftColor: `var(${cssVar})` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
