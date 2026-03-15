"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary:
    "bg-[var(--color-brand-orange)] text-white hover:bg-[var(--color-brand-orange)]/90 shadow-lg shadow-[var(--color-brand-orange)]/30",
  secondary:
    "bg-[var(--color-brand-blue)] text-white hover:bg-[var(--color-brand-blue)]/90 shadow-lg shadow-[var(--color-brand-blue)]/30",
  outline:
    "border-2 border-[var(--color-brand-orange)] text-[var(--color-brand-orange)] hover:bg-[var(--color-brand-orange)] hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 font-display",
    variants[variant],
    sizes[size],
    className
  );

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...(href ? { href } : { onClick })}
    >
      {children}
    </MotionTag>
  );
}
