import Hero from "@/app/components/sections/Hero";
import Experience from "@/app/components/sections/Experience";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import Education from "@/app/components/sections/Education";
import Certificates from "@/app/components/sections/Certificates";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}
