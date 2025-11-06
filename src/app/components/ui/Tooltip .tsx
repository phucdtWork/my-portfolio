"use client";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/cn";

interface TooltipProps {
  text: string;
  children: ReactNode;
  /** Vị trí hiển thị tooltip */
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  /** Màu theme */
  color?:
    | "accent"
    | "success"
    | "warning"
    | "error"
    | "tool"
    | "secondary"
    | "primary";
  /** Kích thước tooltip */
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Tooltip({
  text,
  children,
  position = "top",
  color = "accent",
  size = "md",
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  /* ===== Position map ===== */
  const positionClasses: Record<string, string> = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
    "top-left": "bottom-full left-0 mb-2",
    "top-right": "bottom-full right-0 mb-2",
    "bottom-left": "top-full left-0 mt-2",
    "bottom-right": "top-full right-0 mt-2",
  };

  /* ===== Size map ===== */
  const sizeClasses: Record<string, string> = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  /* ===== Color map (theming) ===== */
  const colorClasses: Record<string, string> = {
    accent: "bg-[var(--accent)] text-white",
    success: "bg-[var(--success)] text-white",
    warning: "bg-[var(--warning)] text-black",
    error: "bg-[var(--error)] text-white",
    tool: "bg-[var(--tool)] text-white",
    secondary: "bg-[var(--bg-secondary)] text-[var(--text-primary)]",
    primary: "bg-[var(--bg-card)] text-[var(--text-primary)]",
  };

  return (
    <div
      className="relative inline-block group"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {/* Tooltip bubble */}
      <div
        className={cn(
          "absolute z-[999] rounded-lg whitespace-nowrap transition-all duration-200 transform pointer-events-none opacity-0 scale-95",
          positionClasses[position],
          sizeClasses[size],
          colorClasses[color],
          visible && "opacity-100 scale-100",
          "shadow-lg backdrop-blur-md",
          className
        )}
      >
        {text}

        {/* Small arrow */}
        <span
          className={cn("absolute w-2 h-2 rotate-45", colorClasses[color], {
            "top-full left-1/2 -translate-x-1/2": position.startsWith("top"),
            "bottom-full left-1/2 -translate-x-1/2":
              position.startsWith("bottom"),
            "left-full top-1/2 -translate-y-1/2": position.startsWith("left"),
            "right-full top-1/2 -translate-y-1/2": position.startsWith("right"),
          })}
        ></span>
      </div>
    </div>
  );
}
