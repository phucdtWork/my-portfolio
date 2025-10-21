export interface Project {
  id: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  techStack: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    id: "pago",
    title: "Pago - Farm Management System",
    role: "Front-end Developer",
    duration: "August 2024 - November 2024",
    description: "Developed cross-platform farm management application...",
    techStack: ["ReactJS", "React Native", "TypeScript", "GraphQL"],
    image: "/images/projects/pago-1.jpg",
    isPrivate: true,
  },
  {
    id: "boarding-house",
    title: "Boarding House Management",
    role: "Leader & Full-stack Developer",
    duration: "May 2025 - August 2025",
    description: "Led 5-member team to build comprehensive...",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/boarding-1.jpg",
    demoUrl: "https://your-demo-url.vercel.app",
    githubUrl: "https://github.com/yourname/boarding-house",
  },
];
