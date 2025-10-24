"use client";

import { skillsData } from "@/data/skills";
import { useAnimation } from "@/hooks/useAnimation";

// Create a separate SkillCard component
function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skillsData)[0];
  index: number;
}) {
  const animation = useAnimation({
    animationType: "fade-left",
    duration: 500,
    delay: 100 + index * 150,
    threshold: 0.2,
    triggerOnce: true,
  });

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

  const cssVar = getCssVar(skill.title);
  const IconComponent = skill.icon;

  return (
    <div
      ref={animation.ref}
      style={animation.style}
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
}

function Skills() {
  const animationTitle = useAnimation({
    animationType: "fade-up",
    duration: 600,
    delay: 100,
    threshold: 0.2,
    triggerOnce: true,
  });

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
        {skillsData.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
