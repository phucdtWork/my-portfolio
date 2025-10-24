"use client";

import { useEffect, useState } from "react";

interface TypingEffectOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  deleteSpeed?: number;
  pauseTime?: number;
}

export function useTypingEffect(
  text: string | string[],
  options: TypingEffectOptions = {}
) {
  const {
    speed = 100,
    delay = 500,
    loop = false,
    deleteSpeed = 50,
    pauseTime = 1000,
  } = options;

  const texts = Array.isArray(text) ? text : [text];

  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentText = texts[currentTextIndex] ?? "";

    if (
      delay > 0 &&
      currentTextIndex === 0 &&
      charIndex === 0 &&
      !isDeleting &&
      displayedText === ""
    ) {
      timeout = setTimeout(() => {
        setCharIndex(1);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      // Typing forward
      if (charIndex <= currentText.length - 1) {
        setDisplayedText(currentText.slice(0, charIndex));
        timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
      } else {
        // finished typing current text
        setDisplayedText(currentText);
        if (loop) {
          timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          setIsComplete(true);
        }
      }
    } else {
      if (charIndex > 0) {
        setDisplayedText(currentText.slice(0, charIndex));
        timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
      } else {
        setIsDeleting(false);
        setIsComplete(false);
        setCurrentTextIndex((i) => (i + 1) % texts.length);
        timeout = setTimeout(() => setCharIndex(1), Math.max(50, speed));
      }
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    currentTextIndex,
    isDeleting,
    texts,
    speed,
    deleteSpeed,
    delay,
    loop,
    pauseTime,
    displayedText,
  ]);

  return {
    displayedText,
    isComplete,
    isDeleting,
  };
}

export default useTypingEffect;
