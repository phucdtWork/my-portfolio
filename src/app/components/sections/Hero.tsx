"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import TypeWriter from "@/components/animations/TypeWriter";
import { personalInfo } from "@/data/personal";
import { FaDownload, FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useAnimation } from "@/hooks/useAnimation";

function Hero() {
  const animationR = useAnimation<HTMLDivElement>({
    animationType: "fade-right",
    duration: 600,
    delay: 300,
    threshold: 0.2,
    triggerOnce: false,
  });

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const socialLinks = [
    {
      href: "https://github.com/phucdtWork",
      title: "GitHub",
      icon: <FaGithub width={40} height={40} />,
    },
    {
      href: "https://www.instagram.com/tphuc_doan/",
      title: "Ig",
      icon: <FaInstagram width={40} height={40} />,
    },
  ];

  return (
    <div
      className="max-w-[1200px] pt-24 pb-16 px-8 m-auto flex flex-col md:flex-row justify-center items-center overflow-hidden relative before:content-[''] before:absolute before:top-[-50%] before:right-[-50%] before:w-full before:h-full before:bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,transparent_70%)] before:animate-pulseCustom"
      id="home"
    >
      <div className="flex mt-2.5 md:mt-16 relative z-10 max-w-[1200px] items-center justify-between gap-16 flex-col-reverse md:flex-row">
        <div
          className="hero-text flex-1"
          ref={animationR.ref}
          style={animationR.style}
        >
          <h1 className="text-6xl font-bold mb-4 bg-linear-to-r from-(--text-primary) to-(--accent) bg-clip-text text-transparent">
            <TypeWriter
              text={[personalInfo.name, "GitHub: phucdtWork"]}
              speed={200}
              showCursor
              loop
              pauseTime={2000}
            />
          </h1>
          <p className="subtitle text-2xl text-(--accent) mb-6">
            {personalInfo.title}
          </p>
          <p className="text-lg text-(--text-secondary) text-justify mb-6">
            {personalInfo.bio}
          </p>

          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size={isDesktop ? "lg" : "md"}
              icon={<FaDownload />}
              href={personalInfo.resumeUrl}
              isNewTab
            >
              Download CV
            </Button>
            <Button
              variant="secondary"
              size={isDesktop ? "lg" : "md"}
              icon={<FaEnvelope />}
              isNewTab={false}
              href="#contact"
            >
              Contact Me
            </Button>
          </div>

          <div className="flex items-center gap-4 mt-8">
            {socialLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                className="bg=(--bg-card) rounded-full p-3 hover:bg-(--accent) hover:color-white color-(--text-secondary) transition-all hover:color-(--accent) text-xl duration-500 hover:-translate-y-0.5"
                aria-label={link.title}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src={personalInfo.avatar}
            alt={personalInfo.name}
            width={350}
            height={350}
            className="rounded-full object-fit border-4 border-solid border-(--accent) animate-float shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
