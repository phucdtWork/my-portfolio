"use client";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { cn } from "@/lib/cn";

interface TypeWriterProps {
  text: string | string[];
  speed?: number;
  delay?: number;
  loop?: boolean;
  deleteSpeed?: number;
  pauseTime?: number;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
}

export default function TypeWriter({
  text,
  speed = 100,
  delay = 0,
  loop = false,
  deleteSpeed = 50,
  pauseTime = 1000,
  showCursor = true,
  cursorChar = "|",
  className,
  onComplete,
}: TypeWriterProps) {
  const { displayedText, isComplete } = useTypingEffect(text, {
    speed,
    delay,
    loop,
    deleteSpeed,
    pauseTime,
  });

  if (isComplete && onComplete && !loop) {
    onComplete();
  }

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && (
        <span className="animate-pulse inline-block ml-1 text-accent">
          {cursorChar}
        </span>
      )}
    </span>
  );
}
