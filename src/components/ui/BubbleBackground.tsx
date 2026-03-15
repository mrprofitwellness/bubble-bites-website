"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
}

export default function BubbleBackground({
  count = 20,
  color,
}: {
  count?: number;
  color?: string;
}) {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    setBubbles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 50 + 8,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: Math.random() * 10 + 8,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    );
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            ...(color
              ? {
                  background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), ${color}30)`,
                }
              : {}),
          }}
        />
      ))}
    </div>
  );
}
