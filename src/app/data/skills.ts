export interface Skill {
  name: string;
  level: "proficient" | "intermediate" | "familiar";
}

export const skills: Skill[] = [
  // Proficient
  { name: "JavaScript", level: "proficient" },
  { name: "ReactJS", level: "proficient" },
  { name: "HTML5", level: "proficient" },
  { name: "CSS3", level: "proficient" },
  { name: "Git", level: "proficient" },

  // Intermediate
  { name: "TypeScript", level: "intermediate" },
  { name: "React Native", level: "intermediate" },
  { name: "Node.js", level: "intermediate" },
  { name: "Express.js", level: "intermediate" },
  { name: "MongoDB", level: "intermediate" },
  { name: "Tailwind CSS", level: "intermediate" },
  { name: "SASS", level: "intermediate" },

  // Familiar
  { name: "GraphQL", level: "familiar" },
  { name: "SQL Server", level: "familiar" },
  { name: "Ant Design", level: "familiar" },
  { name: "REST APIs", level: "familiar" },
];
