"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { FaGithub, FaEye, FaFacebook } from "react-icons/fa";
import Button from "./Button";

interface Project {
  projectImage: string;
  title: string;
  role?: string;
  duration?: string;
  projectContent?: string;
  techStack: string[];
  demoUrl?: string;
  githubLink?: string;
  isPrivate?: boolean;
  facebookLink?: string;
  links?: Array<{
    url: string;
    label: string;
    icon: string;
  }>;
}

interface ProjectCardProps {
  project: Project;
  style?: React.CSSProperties;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project, style }, ref) => {
    return (
      <div
        ref={ref}
        style={style}
        className="bg-(--bg-card) rounded-xl border border-(--border) overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-(--accent) transition-all duration-300 group flex flex-col h-full"
      >
        <div className="relative w-full h-48 bg-linear-to-br from-bg-secondary via-bg-card to-bg-secondary flex items-center justify-center overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-linear-to-br from-accent/0 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={project.projectImage}
            alt={`${project.title} Logo`}
            width={300}
            height={200}
            className="w-full h-full object-cover relative z-10 transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-accent text-sm mb-4 text-(--text-secondary)">
            {project.role}
          </p>
          <p className="text-(--text-secondary) text-sm mb-4">
            {project.duration}
          </p>
          <p className="text-(--text-secondary) text-sm mb-4 text-justify flex-grow">
            {project.projectContent}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 min-h-12 max-h-20 overflow-y-auto max-w-full">
            {project.techStack.map((tech) => (
              <Badge key={tech} size="lg">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3 mt-auto pt-4 border-t border-(--border)">
            {project?.links && project.links.length > 0 ? (
              project.links.map((link) => {
                let icon;
                if (link.icon.includes("github")) {
                  icon = <FaGithub />;
                } else if (link.icon.includes("eye")) {
                  icon = <FaEye />;
                } else if (link.icon.includes("facebook")) {
                  icon = <FaFacebook />;
                }
                return (
                  <Button
                    key={link.label}
                    variant="secondary"
                    href={link.url}
                    size="md"
                    icon={icon}
                  >
                    {link.label}
                  </Button>
                );
              })
            ) : (
              <>
                {project.demoUrl && (
                  <Button
                    disabled={project.isPrivate}
                    variant="secondary"
                    size="md"
                    icon={<FaEye />}
                  >
                    Demo
                  </Button>
                )}
                {project?.githubLink && (
                  <Button
                    variant="secondary"
                    href={project?.githubLink}
                    size="md"
                    icon={<FaGithub />}
                  >
                    GitHub
                  </Button>
                )}
                {project?.facebookLink && (
                  <Button
                    variant="secondary"
                    href={project?.facebookLink}
                    size="md"
                    icon={<FaFacebook />}
                  >
                    Linked link
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
