import { Code2, Server, Database, Hammer } from "lucide-react";

interface Skill {
  title: string;
  icon: any;
  items: string[];
}

const skillsData: Skill[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "React Native",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SASS",
      "Ant Design",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "SQL Server", "Firebase"],
  },
  {
    title: "Tools & Platforms",
    icon: Hammer,
    items: ["GitHub", "Postman", "Figma", "Microsoft Office"],
  },
];

export { skillsData };
