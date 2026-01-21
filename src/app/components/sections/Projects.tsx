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
      title: "Personal Project - Medical Appointment Booking",
      projectImage: "/images/projects/Medibook.png",
      role: "Full-stack Developer",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "Express",
      ],
      links: [
        {
          url: "https://medical-appointment-booking-app-fro.vercel.app",
          label: "Live Demo",
          icon: "fas fa-external-link-alt",
        },
        {
          url: "https://github.com/phucdtWork/Medical-appointment-booking-app",
          label: "GitHub",
          icon: "fab fa-github",
        },
      ],
      projectContent:
        "Comprehensive full-stack medical appointment booking platform bridging patients and healthcare providers. Features real-time scheduling, AI-powered health insights, multi-language support, secure authentication, and an intuitive user interface for seamless healthcare management.",
      duration: "December 2025 - January 2026",
      isPrivate: false,
      githubLink:
        "https://github.com/phucdtWork/Medical-appointment-booking-app",
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
