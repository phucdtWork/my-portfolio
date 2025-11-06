"use client";

import ProjectsCard from "../ui/ProjectCard";
import { useAnimation } from "@/hooks/useAnimation";

function Projects() {
  const animationTitle = useAnimation<HTMLDivElement>({
    animationType: "fade-up",
    duration: 600,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationLeft = useAnimation<HTMLDivElement>({
    animationType: "fade-left",
    duration: 500,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });

  const animationRight = useAnimation<HTMLDivElement>({
    animationType: "fade-right",
    duration: 500,
    delay: 100,
    threshold: 0.2,
    triggerOnce: false,
  });

  const projectsData = [
    {
      title: "Pago - Farm Management System",
      projectImage: "/images/projects/pago.jpg",
      projectContent:
        "Developed cross-platform farm management application with ReactJS and React Native. Built purchase management, chatbot UI, and real-time sensor monitoring features. Currently Pending - Under Review",
      role: "Front-end Developer",
      duration: "August 2024 - November 2024",

      techStack: ["ReactJS", "React Native", "TypeScript", "GraphQL"],
      links: [{ url: "#", label: "Proprietary Code", icon: "fas fa-eye" }],
      isPrivate: true,
      facebookLink: "https://www.facebook.com/PagoSolution.vn/",
    },
    {
      title: "Boarding House Management",
      projectImage: "/images/projects/bhManagement.png",
      role: "Leader & Full-stack Developer",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      links: [
        {
          url: "#",
          label: "Demo Coming Soon",
          icon: "fas fa-external-link-alt",
        },
      ],
      projectContent:
        "Led 5-member team to build comprehensive boarding house management system using MERN stack. Designed architecture, developed reusable components, and delivered complete solution.",
      duration: "May 2025 - August 2025",
      isPrivate: false,
      githubLink: "https://github.com/Duycld03/Boarding-house-booking",
    },
  ];

  return (
    <section id="projects">
      <h2
        ref={animationTitle.ref}
        style={animationTitle.style}
        className="section-title"
      >
        Featured Projects
      </h2>

      <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ">
        {projectsData.map((project, index) => (
          <ProjectsCard
            ref={index % 2 === 0 ? animationRight.ref : animationLeft.ref}
            style={index % 2 === 0 ? animationRight.style : animationLeft.style}
            key={index}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
