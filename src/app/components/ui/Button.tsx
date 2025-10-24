"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

// Base props chung
interface BaseButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  isNewTab?: boolean;
}

// Button props (khi không có href)
interface ButtonAsButton
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps>,
    BaseButtonProps {
  href?: never;
  external?: never;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  isLoading = false,
  disabled = false,
  className,
  href,
  external,
  isNewTab = true,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-lg cursor-pointer transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-(--accent) text-white hover:-translate-y-2 hover:bg-(--accent-hover) hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-(--accent) transition-all duration-300",
    secondary:
      "bg-transparent border-2 border-(--accent) text-(--accent) hover:bg-(--accent) hover:text-white hover:-translate-y-1 hover:shadow-lg",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm gap-2",
    md: "px-5 py-2 text-base gap-2",
    lg: "px-7 py-3 text-lg gap-3",
  };

  const isDisabled = disabled || isLoading;

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    isLoading && "cursor-wait",
    isDisabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  const loadingSpinner = (
    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const content = (
    <>
      {isLoading && loadingSpinner}
      {!isLoading && icon && iconPosition === "left" && icon}
      {children}
      {!isLoading && icon && iconPosition === "right" && icon}
    </>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  if (href) {
    const linkProps = {
      href,
      className: classes,
      "aria-disabled": isDisabled,
      onClick: handleClick,
    };

    if (external) {
      return (
        <a
          {...linkProps}
          target={isNewTab ? "_blank" : "_parent"}
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link {...linkProps} target={isNewTab ? "_blank" : "_parent"}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={isDisabled}
      onClick={onClick}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
