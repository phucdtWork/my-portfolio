"use client";

import { cn } from "@/lib/cn";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

function Navigation() {
  const [currentLink, setCurrentLink] = useState("#home");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentLink(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleCheckLink = (hash: string) => {
    return currentLink === hash;
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (href: string) => {
    setCurrentLink(href);
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="max-w-[1200px] px-8 mx-auto flex justify-between items-center">
        <div className="logo">
          <p className="text-2xl font-bold text-(--accent)"> {"<pD/>"} </p>
        </div>
        <ul
          className={cn(
            "md:flex md:static space-x-0 space-y-8 md:space-y-0 md:space-x-8 z-999 fixed  bg-(--bg-secondary) md:bg-transparent w-full top-[65px]  md:w-auto md:py-0 py-4 md:pl-0 pl-8 transition-all duration-300 ease-in-out",
            isMenuOpen ? "left-0" : "-left-full"
          )}
          id="navLinks"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={cn(
                  "text-(--text-secondary) hover:text-(--accent-hover) transition-colors duration-300",
                  handleCheckLink(link.href) && "text-(--accent-hover)"
                )}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          title="Toggle mobile menu"
          className="md:hidden block text-2xl text-(--text-secondary) hover:text-(--accent-hover) transition-colors duration-300"
          id="mobileMenuBtn"
        >
          {!isMenuOpen ? (
            <FaBars className="text-(--text-secondary) text-2xl" />
          ) : (
            <FaTimes className="text-(--text-secondary) text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
