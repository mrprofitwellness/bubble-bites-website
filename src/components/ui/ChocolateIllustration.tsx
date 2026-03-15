"use client";

import { motion } from "framer-motion";

export default function ChocolateIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 scale-75 bg-gradient-to-br from-[#D4A04A]/40 via-[#8B5E34]/30 to-[#5D3A1A]/20 blur-[80px] rounded-full" />

      <svg
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-auto drop-shadow-2xl"
      >
        {/* === WRAPPER (partially peeled back) === */}
        {/* Wrapper back (the part still covering) */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <path
            d="M120 140 L480 140 L480 400 L120 400 Z"
            fill="url(#wrapperGradient)"
            rx="16"
          />
          <rect x="120" y="140" width="360" height="260" rx="16" fill="url(#wrapperGradient)" />
          {/* Wrapper shine */}
          <rect x="120" y="140" width="360" height="260" rx="16" fill="url(#wrapperShine)" opacity="0.4" />
          {/* Wrapper fold lines */}
          <line x1="200" y1="140" x2="200" y2="400" stroke="#C06820" strokeWidth="0.5" opacity="0.3" />
          <line x1="300" y1="140" x2="300" y2="400" stroke="#C06820" strokeWidth="0.5" opacity="0.3" />
          <line x1="400" y1="140" x2="400" y2="400" stroke="#C06820" strokeWidth="0.5" opacity="0.3" />
        </motion.g>

        {/* === CHOCOLATE BAR (exposed top) === */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Main bar body */}
          <rect x="135" y="100" width="330" height="60" rx="6" fill="url(#chocolateGradient)" />
          {/* Chocolate segments */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={`seg-${i}`}>
              <rect
                x={145 + i * 53}
                y={108}
                width={43}
                height={44}
                rx="4"
                fill="url(#chocolateGradient)"
                stroke="#2E1200"
                strokeWidth="0.8"
                opacity="0.5"
              />
              {/* Highlight on each segment */}
              <rect
                x={147 + i * 53}
                y={110}
                width={20}
                height={6}
                rx="3"
                fill="white"
                opacity="0.08"
              />
            </g>
          ))}
          {/* Top shine */}
          <rect x="135" y="100" width="330" height="15" rx="6" fill="white" opacity="0.06" />
        </motion.g>

        {/* === WRAPPER PEELED TOP (folded open) === */}
        <motion.g
          initial={{ opacity: 0, rotate: 10, y: -20 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ delay: 0.4, duration: 1, type: "spring" }}
        >
          <path
            d="M120 140 L480 140 L510 50 L150 30 Z"
            fill="url(#wrapperTopGradient)"
          />
          <path
            d="M120 140 L480 140 L510 50 L150 30 Z"
            fill="url(#wrapperTopShine)"
            opacity="0.3"
          />
          {/* Fold crease */}
          <line x1="120" y1="140" x2="480" y2="140" stroke="#B85A10" strokeWidth="1.5" opacity="0.4" />
        </motion.g>

        {/* === FLOATING CHOCOLATE PIECES === */}
        {/* Piece 1 - top right */}
        <motion.g
          initial={{ opacity: 0, scale: 0, x: 20, y: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
        >
          <motion.g
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="510" y="80" width="50" height="50" rx="6" fill="#4A2510" transform="rotate(15 535 105)" />
            <rect x="510" y="80" width="50" height="50" rx="6" fill="url(#chocolateGradient)" transform="rotate(15 535 105)" />
            <rect x="512" y="82" width="24" height="6" rx="3" fill="white" opacity="0.08" transform="rotate(15 535 105)" />
          </motion.g>
        </motion.g>

        {/* Piece 2 - bottom left */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: "spring", stiffness: 150 }}
        >
          <motion.g
            animate={{ y: [0, -6, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <rect x="50" y="320" width="45" height="45" rx="5" fill="url(#chocolateGradient)" transform="rotate(-20 72 342)" />
            <rect x="52" y="322" width="20" height="5" rx="2.5" fill="white" opacity="0.08" transform="rotate(-20 72 342)" />
          </motion.g>
        </motion.g>

        {/* Piece 3 - small crumb top */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, type: "spring" }}
        >
          <motion.g
            animate={{ y: [0, -5, 0], rotate: [10, -5, 10] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <rect x="80" y="80" width="28" height="28" rx="4" fill="url(#chocolateGradient)" transform="rotate(30 94 94)" />
          </motion.g>
        </motion.g>

        {/* Piece 4 - bottom right */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
        >
          <motion.g
            animate={{ y: [0, -7, 0], rotate: [-5, 8, -5] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <rect x="520" y="350" width="38" height="38" rx="5" fill="url(#chocolateGradient)" transform="rotate(25 539 369)" />
            <rect x="522" y="352" width="18" height="5" rx="2.5" fill="white" opacity="0.08" transform="rotate(25 539 369)" />
          </motion.g>
        </motion.g>

        {/* === CHOCOLATE DRIP DETAILS === */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Melted drip from bar */}
          <ellipse cx="250" cy="162" rx="8" ry="4" fill="#3A1A00" opacity="0.3" />
          <ellipse cx="380" cy="162" rx="6" ry="3" fill="#3A1A00" opacity="0.25" />
        </motion.g>

        {/* === SPARKLE EFFECTS === */}
        {[
          { cx: 100, cy: 60, delay: 1.8 },
          { cx: 540, cy: 160, delay: 2 },
          { cx: 70, cy: 260, delay: 2.2 },
          { cx: 550, cy: 430, delay: 2.4 },
        ].map((spark, i) => (
          <motion.g
            key={`spark-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              delay: spark.delay,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <line x1={spark.cx - 8} y1={spark.cy} x2={spark.cx + 8} y2={spark.cy} stroke="#F7D34E" strokeWidth="2" strokeLinecap="round" />
            <line x1={spark.cx} y1={spark.cy - 8} x2={spark.cx} y2={spark.cy + 8} stroke="#F7D34E" strokeWidth="2" strokeLinecap="round" />
            <line x1={spark.cx - 5} y1={spark.cy - 5} x2={spark.cx + 5} y2={spark.cy + 5} stroke="#F7D34E" strokeWidth="1.5" strokeLinecap="round" />
            <line x1={spark.cx + 5} y1={spark.cy - 5} x2={spark.cx - 5} y2={spark.cy + 5} stroke="#F7D34E" strokeWidth="1.5" strokeLinecap="round" />
          </motion.g>
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="wrapperGradient" x1="120" y1="140" x2="480" y2="400">
            <stop offset="0%" stopColor="#E8872D" />
            <stop offset="50%" stopColor="#D4721E" />
            <stop offset="100%" stopColor="#C06015" />
          </linearGradient>
          <linearGradient id="wrapperShine" x1="120" y1="140" x2="480" y2="400">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="wrapperTopGradient" x1="150" y1="30" x2="300" y2="140">
            <stop offset="0%" stopColor="#F0A040" />
            <stop offset="100%" stopColor="#D87020" />
          </linearGradient>
          <linearGradient id="wrapperTopShine" x1="150" y1="30" x2="510" y2="50">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="chocolateGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5C3317" />
            <stop offset="30%" stopColor="#4A2510" />
            <stop offset="70%" stopColor="#3A1A08" />
            <stop offset="100%" stopColor="#2E1200" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
