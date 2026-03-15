"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  color?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  color = "text-[var(--color-brand-brown)]",
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold ${color} leading-tight`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-[var(--color-brand-brown)]/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex justify-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[var(--color-brand-yellow)]" />
        <span className="w-3 h-3 rounded-full bg-[var(--color-brand-orange)]" />
        <span className="w-3 h-3 rounded-full bg-[var(--color-brand-blue)]" />
      </div>
    </motion.div>
  );
}
