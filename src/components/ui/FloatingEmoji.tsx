"use client";

import { motion } from "framer-motion";

interface FloatingEmojiProps {
  emoji: string;
  size?: number;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function FloatingEmoji({
  emoji,
  size = 40,
  className = "",
  delay = 0,
  duration = 5,
}: FloatingEmojiProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
      style={{ fontSize: size }}
    >
      <motion.span
        animate={{
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="block"
      >
        {emoji}
      </motion.span>
    </motion.div>
  );
}
