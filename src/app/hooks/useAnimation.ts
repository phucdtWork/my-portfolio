"use client";

import { useState, useEffect, useRef } from "react";

interface UseAnimationOptions {
  animationType?:
    | "fade-in"
    | "fade-up"
    | "fade-down"
    | "fade-left"
    | "fade-right"
    | "scale-up"
    | "rotate-in"
    | "slide-up";
  duration?: number;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useAnimation = <T extends HTMLElement>(
  options: UseAnimationOptions = {}
) => {
  const {
    animationType = "fade-in",
    duration = 500,
    delay = 0,
    threshold = 0.1,
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<T>(null);

  // Keep track of elements that already ran their animation during this page lifecycle.
  // Using a WeakSet so entries are garbage-collected when elements are removed.
  // This module-level set persists until a full page reload, which matches the
  // requirement: don't replay animations unless the page is reloaded.
  const animatedElements = (globalThis as any).__animatedElements as
    | WeakSet<HTMLElement>
    | undefined;
  if (!animatedElements) {
    (globalThis as any).__animatedElements = new WeakSet<HTMLElement>();
  }
  const playedSet = (globalThis as any)
    .__animatedElements as WeakSet<HTMLElement>;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (playedSet.has(element)) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    if (hasAnimated && triggerOnce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          playedSet.add(element);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, triggerOnce, hasAnimated]);

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `all ${duration}ms ease-out`,
      transitionDelay: `${delay}ms`,
    };

    const animations = {
      "fade-in": {
        opacity: isVisible ? 1 : 0,
        ...baseStyle,
      },
      "fade-up": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        ...baseStyle,
      },
      "fade-down": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-30px)",
        ...baseStyle,
      },
      "fade-left": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(30px)",
        ...baseStyle,
      },
      "fade-right": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-30px)",
        ...baseStyle,
      },
      "scale-up": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "scale(1)" : "scale(0.8)",
        ...baseStyle,
      },
      "rotate-in": {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "rotate(0deg)" : "rotate(-180deg)",
        ...baseStyle,
      },
      "slide-up": {
        transform: isVisible ? "translateY(0)" : "translateY(100%)",
        ...baseStyle,
      },
    };

    return animations[animationType] || animations["fade-in"];
  };

  return {
    ref: elementRef,
    style: getAnimationStyle(),
    isVisible,
  };
};
