"use client";

import { motion } from "framer-motion";

interface PackagingMockupProps {
  flavor: "hazelnut" | "dark-chocolate" | "orange";
  className?: string;
  rotate?: number;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const flavorConfig = {
  hazelnut: {
    topColor: "#2B6B5E",
    topColorDark: "#1F4F45",
    bottomColor: "#D4A853",
    bottomColorDark: "#B8903A",
    accentColor: "#F5E6C8",
    label: "Hazelnut",
    weight: "13g",
  },
  "dark-chocolate": {
    topColor: "#3E2723",
    topColorDark: "#2C1B17",
    topColorLight: "#5D4037",
    bottomColor: "#8D6E63",
    bottomColorDark: "#6D4C41",
    accentColor: "#EFEBE9",
    label: "Dark Chocolate",
    weight: "13g",
  },
  orange: {
    topColor: "#E65100",
    topColorDark: "#BF360C",
    bottomColor: "#FFB74D",
    bottomColorDark: "#F09820",
    accentColor: "#FFF3E0",
    label: "Orange",
    weight: "13g",
  },
};

const sizes = {
  sm: { w: 160, h: 220 },
  md: { w: 220, h: 300 },
  lg: { w: 300, h: 410 },
};

export default function PackagingMockup({
  flavor,
  className = "",
  rotate = -12,
  delay = 0,
  size = "md",
}: PackagingMockupProps) {
  const config = flavorConfig[flavor];
  const dim = sizes[size];
  const zigzagSize = size === "sm" ? 6 : size === "md" ? 8 : 10;
  const zigzagCount = Math.ceil(dim.w / (zigzagSize * 2));

  // Generate zigzag path for top and bottom seal
  const zigzagTop = Array.from({ length: zigzagCount + 1 }, (_, i) => {
    const x = i * zigzagSize * 2;
    const y = i % 2 === 0 ? 0 : zigzagSize;
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  const zigzagBottom = Array.from({ length: zigzagCount + 1 }, (_, i) => {
    const x = i * zigzagSize * 2;
    const y = i % 2 === 0 ? zigzagSize : 0;
    return `${i === 0 ? "M" : "L"} ${x} ${y}`;
  }).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
      className={`relative inline-block ${className}`}
      style={{ width: dim.w }}
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: rotate + 3 }}
        transition={{ duration: 0.3 }}
        style={{
          width: dim.w,
          transform: `rotate(${rotate}deg)`,
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25)) drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
        }}
      >
        <svg
          viewBox={`0 0 ${dim.w} ${dim.h}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <defs>
            {/* Top section gradient */}
            <linearGradient id={`top-${flavor}`} x1="0" y1="0" x2={dim.w} y2="0">
              <stop offset="0%" stopColor={config.topColorDark} />
              <stop offset="35%" stopColor={config.topColor} />
              <stop offset="70%" stopColor={config.topColor} />
              <stop offset="100%" stopColor={config.topColorDark} />
            </linearGradient>

            {/* Bottom section gradient */}
            <linearGradient id={`bottom-${flavor}`} x1="0" y1="0" x2={dim.w} y2="0">
              <stop offset="0%" stopColor={config.bottomColorDark} />
              <stop offset="30%" stopColor={config.bottomColor} />
              <stop offset="70%" stopColor={config.bottomColor} />
              <stop offset="100%" stopColor={config.bottomColorDark} />
            </linearGradient>

            {/* Wrapper shine */}
            <linearGradient id={`shine-${flavor}`} x1="0" y1="0" x2={dim.w} y2={dim.h}>
              <stop offset="0%" stopColor="white" stopOpacity="0.15" />
              <stop offset="40%" stopColor="white" stopOpacity="0" />
              <stop offset="60%" stopColor="white" stopOpacity="0.05" />
              <stop offset="100%" stopColor="black" stopOpacity="0.1" />
            </linearGradient>

            {/* Side shadow for 3D depth */}
            <linearGradient id={`side-l-${flavor}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="black" stopOpacity="0.2" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>
            <linearGradient id={`side-r-${flavor}`} x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="black" stopOpacity="0.15" />
              <stop offset="100%" stopColor="black" stopOpacity="0" />
            </linearGradient>

            {/* Clip for rounded body */}
            <clipPath id={`body-clip-${flavor}`}>
              <rect x="0" y={zigzagSize} width={dim.w} height={dim.h - zigzagSize * 2} rx="4" />
            </clipPath>
          </defs>

          {/* ===== TOP ZIGZAG SEAL ===== */}
          <g transform={`translate(0, 0)`}>
            <svg viewBox={`0 0 ${dim.w} ${zigzagSize + 2}`} width={dim.w} height={zigzagSize + 2}>
              <path
                d={zigzagTop + ` L ${dim.w} ${zigzagSize} L 0 ${zigzagSize} Z`}
                fill={config.topColor}
              />
              <path
                d={zigzagTop + ` L ${dim.w} ${zigzagSize} L 0 ${zigzagSize} Z`}
                fill="black"
                opacity="0.08"
              />
            </svg>
          </g>

          {/* ===== MAIN BODY ===== */}
          <g clipPath={`url(#body-clip-${flavor})`}>
            {/* Top half — brand color */}
            <rect
              x="0"
              y={zigzagSize}
              width={dim.w}
              height={dim.h * 0.55}
              fill={`url(#top-${flavor})`}
            />

            {/* Bottom half — lighter/accent */}
            <rect
              x="0"
              y={zigzagSize + dim.h * 0.55}
              width={dim.w}
              height={dim.h * 0.45}
              fill={`url(#bottom-${flavor})`}
            />

            {/* Divider line between sections */}
            <rect
              x="0"
              y={zigzagSize + dim.h * 0.545}
              width={dim.w}
              height="2"
              fill="black"
              opacity="0.08"
            />

            {/* === LOGO area (top section) === */}
            {/* Bubble Bites text */}
            <text
              x={dim.w / 2}
              y={zigzagSize + dim.h * 0.16}
              textAnchor="middle"
              fontFamily="var(--font-display), Fredoka, system-ui"
              fontWeight="700"
              fontSize={size === "sm" ? 16 : size === "md" ? 22 : 30}
              fill="white"
              style={{ paintOrder: "stroke", stroke: "rgba(0,0,0,0.15)", strokeWidth: 1 }}
            >
              Bubble Bites
            </text>

            {/* Mascot placeholder — simple cute chocolate character */}
            <g transform={`translate(${dim.w / 2 - (size === "sm" ? 18 : size === "md" ? 24 : 32)}, ${zigzagSize + dim.h * 0.2})`}>
              {/* Body */}
              <rect
                width={size === "sm" ? 36 : size === "md" ? 48 : 64}
                height={size === "sm" ? 42 : size === "md" ? 56 : 74}
                rx={size === "sm" ? 6 : 8}
                fill="#4A2510"
              />
              {/* Face highlight */}
              <rect
                x={size === "sm" ? 4 : 6}
                y={size === "sm" ? 4 : 6}
                width={size === "sm" ? 28 : size === "md" ? 36 : 52}
                height={size === "sm" ? 14 : size === "md" ? 18 : 24}
                rx="4"
                fill="white"
                opacity="0.08"
              />
              {/* Eyes */}
              <circle
                cx={size === "sm" ? 12 : size === "md" ? 16 : 22}
                cy={size === "sm" ? 16 : size === "md" ? 22 : 28}
                r={size === "sm" ? 4 : size === "md" ? 5 : 7}
                fill="white"
              />
              <circle
                cx={size === "sm" ? 24 : size === "md" ? 32 : 42}
                cy={size === "sm" ? 16 : size === "md" ? 22 : 28}
                r={size === "sm" ? 4 : size === "md" ? 5 : 7}
                fill="white"
              />
              {/* Pupils */}
              <circle
                cx={size === "sm" ? 13 : size === "md" ? 17 : 23}
                cy={size === "sm" ? 16 : size === "md" ? 22 : 28}
                r={size === "sm" ? 2.5 : size === "md" ? 3 : 4}
                fill="#1A0800"
              />
              <circle
                cx={size === "sm" ? 25 : size === "md" ? 33 : 43}
                cy={size === "sm" ? 16 : size === "md" ? 22 : 28}
                r={size === "sm" ? 2.5 : size === "md" ? 3 : 4}
                fill="#1A0800"
              />
              {/* Eye shine */}
              <circle
                cx={size === "sm" ? 14 : size === "md" ? 18.5 : 25}
                cy={size === "sm" ? 14.5 : size === "md" ? 20 : 25.5}
                r={size === "sm" ? 1 : 1.5}
                fill="white"
              />
              <circle
                cx={size === "sm" ? 26 : size === "md" ? 34.5 : 45}
                cy={size === "sm" ? 14.5 : size === "md" ? 20 : 25.5}
                r={size === "sm" ? 1 : 1.5}
                fill="white"
              />
              {/* Smile */}
              <path
                d={
                  size === "sm"
                    ? "M 10 24 Q 18 30 26 24"
                    : size === "md"
                    ? "M 12 32 Q 24 40 36 32"
                    : "M 16 42 Q 32 54 48 42"
                }
                stroke="white"
                strokeWidth={size === "sm" ? 1.5 : 2}
                fill="none"
                strokeLinecap="round"
              />
            </g>

            {/* === BOTTOM section — product info === */}
            {/* PROTEIN BAR */}
            <text
              x={dim.w / 2}
              y={zigzagSize + dim.h * 0.62}
              textAnchor="middle"
              fontFamily="var(--font-display), Fredoka, system-ui"
              fontWeight="800"
              fontSize={size === "sm" ? 13 : size === "md" ? 18 : 24}
              fill={config.topColor}
              letterSpacing="1"
            >
              PROTEIN BAR
            </text>

            {/* CHOCOLATE */}
            <text
              x={dim.w / 2}
              y={zigzagSize + dim.h * 0.69}
              textAnchor="middle"
              fontFamily="var(--font-display), Fredoka, system-ui"
              fontWeight="700"
              fontSize={size === "sm" ? 10 : size === "md" ? 13 : 17}
              fill={config.topColor}
              opacity="0.7"
            >
              CHOCOLATE
            </text>

            {/* Weight badge */}
            <rect
              x={dim.w / 2 - (size === "sm" ? 16 : size === "md" ? 22 : 28)}
              y={zigzagSize + dim.h * 0.72}
              width={size === "sm" ? 32 : size === "md" ? 44 : 56}
              height={size === "sm" ? 16 : size === "md" ? 22 : 28}
              rx={size === "sm" ? 8 : 11}
              fill={config.topColor}
            />
            <text
              x={dim.w / 2}
              y={zigzagSize + dim.h * 0.72 + (size === "sm" ? 12 : size === "md" ? 16 : 20)}
              textAnchor="middle"
              fontFamily="var(--font-display), Fredoka, system-ui"
              fontWeight="800"
              fontSize={size === "sm" ? 9 : size === "md" ? 12 : 15}
              fill="white"
            >
              {config.weight}
            </text>

            {/* Flavor name */}
            <text
              x={dim.w / 2}
              y={zigzagSize + dim.h * 0.86}
              textAnchor="middle"
              fontFamily="serif"
              fontWeight="400"
              fontStyle="italic"
              fontSize={size === "sm" ? 14 : size === "md" ? 20 : 26}
              fill={config.topColor}
            >
              {config.label}
            </text>

            {/* === 3D DEPTH EFFECTS === */}
            {/* Left edge shadow */}
            <rect
              x="0"
              y={zigzagSize}
              width={dim.w * 0.08}
              height={dim.h - zigzagSize * 2}
              fill={`url(#side-l-${flavor})`}
            />

            {/* Right edge shadow */}
            <rect
              x={dim.w * 0.92}
              y={zigzagSize}
              width={dim.w * 0.08}
              height={dim.h - zigzagSize * 2}
              fill={`url(#side-r-${flavor})`}
            />

            {/* Full wrapper shine overlay */}
            <rect
              x="0"
              y={zigzagSize}
              width={dim.w}
              height={dim.h - zigzagSize * 2}
              fill={`url(#shine-${flavor})`}
            />

            {/* Wrapper crinkle lines */}
            {[0.15, 0.35, 0.65, 0.85].map((pos) => (
              <line
                key={pos}
                x1={dim.w * pos}
                y1={zigzagSize + dim.h * 0.54}
                x2={dim.w * pos + 2}
                y2={dim.h - zigzagSize}
                stroke="white"
                strokeWidth="0.3"
                opacity="0.1"
              />
            ))}
          </g>

          {/* ===== BOTTOM ZIGZAG SEAL ===== */}
          <g transform={`translate(0, ${dim.h - zigzagSize})`}>
            <svg viewBox={`0 0 ${dim.w} ${zigzagSize + 2}`} width={dim.w} height={zigzagSize + 2}>
              <path
                d={zigzagBottom + ` L ${dim.w} 0 L 0 0 Z`}
                fill={config.bottomColor}
              />
              <path
                d={zigzagBottom + ` L ${dim.w} 0 L 0 0 Z`}
                fill="white"
                opacity="0.05"
              />
            </svg>
          </g>

          {/* ===== SIDE FOLD CREASES (3D effect) ===== */}
          {/* Left fold */}
          <line
            x1={dim.w * 0.04}
            y1={zigzagSize + 2}
            x2={dim.w * 0.04}
            y2={dim.h - zigzagSize - 2}
            stroke="black"
            strokeWidth="0.5"
            opacity="0.06"
          />
          {/* Right fold */}
          <line
            x1={dim.w * 0.96}
            y1={zigzagSize + 2}
            x2={dim.w * 0.96}
            y2={dim.h - zigzagSize - 2}
            stroke="black"
            strokeWidth="0.5"
            opacity="0.06"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
