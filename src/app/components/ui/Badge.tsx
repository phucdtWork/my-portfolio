import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  size = "md",
  className,
}: BadgeProps) {
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 bg-[rgba(59,130,246,0.1)] text-(--accent) rounded-full text-[0.85rem] transition-all duration-300",
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
