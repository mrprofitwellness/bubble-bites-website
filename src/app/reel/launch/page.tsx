"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/*
  REEL 2: "Brand Launch — Laptop Reveal"

  CONCEPT: Laptop opens → website loads → confetti/ribbon celebration

  HOW TO RECORD:
  1. Open bubblebiteskids.com/reel/launch on your PHONE (vertical)
  2. Screen record
  3. Tap to start
  4. Post with trending audio:
     - "Reason To Stay" by Olivia Dean (product showcase)
     - "Loving Life Again" by @Browsbyzulema (celebration)
     - "This Is The Life" by Hannah Montana (behind-the-scenes)
     OR search "product reveal" / "brand launch" in Instagram audio

  DURATION: ~12 seconds
*/

// Confetti particle
function Confetti({ count = 50 }: { count?: number }) {
  const colors = ["#1B7A6E", "#D4A853", "#F28C38", "#5C4033", "#FF6B6B", "#4ECDC4", "#FFE66D"];
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.8,
      duration: 2 + Math.random() * 2,
      size: 4 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: Math.random() * 360,
      type: Math.random() > 0.5 ? "rect" : "circle",
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
      {particles.current.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10%", x: `${p.x}%`, opacity: 1, rotate: 0 }}
          animate={{ y: "110%", opacity: [1, 1, 0], rotate: p.rotate + 720 }}
          transition={{ delay: p.delay, duration: p.duration, ease: "easeIn" }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.type === "rect" ? p.size * 2.5 : p.size,
            backgroundColor: p.color,
            borderRadius: p.type === "circle" ? "50%" : "1px",
          }}
        />
      ))}
    </div>
  );
}

// Ribbon streamer
function Ribbons() {
  const ribbons = useRef(
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: 10 + (i * 12),
      delay: i * 0.1,
      color: ["#1B7A6E", "#D4A853", "#F28C38", "#5C4033", "#FF6B6B", "#4ECDC4", "#FFE66D", "#1B7A6E"][i],
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-40">
      {ribbons.current.map((r) => (
        <motion.div
          key={r.id}
          initial={{ y: "-20%", rotate: -15, opacity: 0 }}
          animate={{ y: "120%", rotate: 15, opacity: [0, 1, 1, 0] }}
          transition={{ delay: r.delay, duration: 3, ease: "easeIn" }}
          style={{
            position: "absolute",
            left: `${r.x}%`,
            width: 3,
            height: 80,
            backgroundColor: r.color,
            borderRadius: 2,
            transformOrigin: "top center",
          }}
        />
      ))}
    </div>
  );
}

const scenes = [
  { id: "dark", duration: 1500 },
  { id: "laptop-closed", duration: 2000 },
  { id: "laptop-opening", duration: 1500 },
  { id: "website-loading", duration: 2500 },
  { id: "celebration", duration: 3000 },
  { id: "cta", duration: 3000 },
];

export default function LaunchReel() {
  const [started, setStarted] = useState(false);
  const [scene, setScene] = useState(-1);

  const start = useCallback(() => {
    if (started) return;
    setStarted(true);
    setScene(0);
  }, [started]);

  useEffect(() => {
    if (scene < 0 || scene >= scenes.length) return;
    const timer = setTimeout(() => {
      if (scene < scenes.length - 1) setScene(scene + 1);
    }, scenes[scene].duration);
    return () => clearTimeout(timer);
  }, [scene]);

  const currentScene = scene >= 0 ? scenes[scene].id : "waiting";

  return (
    <div
      onClick={start}
      className="fixed inset-0 overflow-hidden cursor-pointer bg-[#0A0604]"
      style={{ fontFamily: "var(--font-display), var(--font-sans), system-ui" }}
    >
      {/* WAITING */}
      {currentScene === "waiting" && (
        <div className="h-full flex items-center justify-center">
          <motion.p
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/50 text-lg font-bold"
          >
            Tap to Start
          </motion.p>
        </div>
      )}

      {/* SCENE 1 — Dark with text */}
      {currentScene === "dark" && (
        <div className="h-full flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-2xl font-bold font-display text-center px-8"
          >
            We built something<br />for your kids...
          </motion.p>
        </div>
      )}

      {/* SCENE 2 — Laptop closed */}
      {currentScene === "laptop-closed" && (
        <div className="h-full flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xs"
          >
            {/* Closed laptop shape */}
            <div className="relative">
              {/* Screen (closed) */}
              <motion.div
                className="bg-[#2A2A2A] rounded-t-xl w-full aspect-[16/10] flex items-center justify-center border border-[#3a3a3a]"
                style={{ transformOrigin: "bottom center" }}
              >
                <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#333]" />
              </motion.div>
              {/* Base */}
              <div className="bg-[#333] h-3 rounded-b-lg w-[102%] -ml-[1%] border-t border-[#444]" />
              <div className="bg-[#2a2a2a] h-1 rounded-b w-[80%] mx-auto" />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/40 text-sm text-center mt-6"
            >
              Ready?
            </motion.p>
          </motion.div>
        </div>
      )}

      {/* SCENE 3 — Laptop opening with website */}
      {currentScene === "laptop-opening" && (
        <div className="h-full flex items-center justify-center px-8">
          <div className="w-full max-w-xs">
            <div className="relative">
              {/* Screen with website */}
              <motion.div
                initial={{ rotateX: -80 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#1B7A6E] rounded-t-xl w-full aspect-[16/10] flex items-center justify-center border border-[#3a3a3a] overflow-hidden"
                style={{ transformOrigin: "bottom center", perspective: 800 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <Image
                    src="/images/logos/logo-inside.png"
                    alt="Bubble Bites"
                    width={120}
                    height={70}
                    className="w-20 h-auto mx-auto mb-2"
                  />
                  <p className="text-white/80 text-[8px] font-bold">bubblebiteskids.com</p>
                </motion.div>
              </motion.div>
              <div className="bg-[#333] h-3 rounded-b-lg w-[102%] -ml-[1%] border-t border-[#444]" />
              <div className="bg-[#2a2a2a] h-1 rounded-b w-[80%] mx-auto" />
            </div>
          </div>
        </div>
      )}

      {/* SCENE 4 — Website zoom in */}
      {currentScene === "website-loading" && (
        <motion.div
          initial={{ scale: 0.3, borderRadius: "12px" }}
          animate={{ scale: 1, borderRadius: "0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full bg-[#1B7A6E] flex flex-col items-center justify-center"
        >
          {/* Crosshatch */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative z-10 text-center"
          >
            <Image
              src="/images/logos/logo-inside.png"
              alt="Bubble Bites"
              width={200}
              height={120}
              className="w-36 h-auto mx-auto mb-4"
            />
            <p className="font-display text-xl font-bold text-[#D4A853]">
              Snack Smart. Play Hard.
            </p>
          </motion.div>

          {/* Products sliding in */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
            className="relative z-10 flex items-end justify-center gap-0 mt-8"
          >
            <div className="-mr-3 -rotate-6">
              <Image src="/images/packaging/hazelnut-inner.png" alt="Hazelnut" width={730} height={1000} className="w-20 h-auto drop-shadow-xl" />
            </div>
            <div className="relative z-10">
              <Image src="/images/packaging/dark-chocolate-inner.png" alt="Dark Chocolate" width={730} height={1000} className="w-24 h-auto drop-shadow-2xl" />
            </div>
            <div className="-ml-3 rotate-6">
              <Image src="/images/packaging/orange-inner.png" alt="Orange" width={730} height={1000} className="w-20 h-auto drop-shadow-xl" />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* SCENE 5 — Celebration with confetti + ribbon */}
      {currentScene === "celebration" && (
        <div className="h-full bg-[#1B7A6E] flex flex-col items-center justify-center relative">
          <Confetti count={60} />
          <Ribbons />

          {/* Crosshatch */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />

          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="relative z-30 text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <p className="text-5xl font-bold text-white font-display mb-2">WE&apos;RE</p>
              <p className="text-6xl font-bold text-[#D4A853] font-display">LIVE!</p>
            </motion.div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="relative z-30 flex items-end justify-center gap-0 mt-8"
          >
            <div className="-mr-3 -rotate-6">
              <Image src="/images/packaging/hazelnut-inner.png" alt="" width={730} height={1000} className="w-16 h-auto drop-shadow-xl" />
            </div>
            <div className="relative z-10">
              <Image src="/images/packaging/dark-chocolate-inner.png" alt="" width={730} height={1000} className="w-20 h-auto drop-shadow-2xl" />
            </div>
            <div className="-ml-3 rotate-6">
              <Image src="/images/packaging/orange-inner.png" alt="" width={730} height={1000} className="w-16 h-auto drop-shadow-xl" />
            </div>
          </motion.div>
        </div>
      )}

      {/* SCENE 6 — Final CTA */}
      <AnimatePresence>
        {currentScene === "cta" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full bg-[#0A0604] flex flex-col items-center justify-center px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Image
                src="/images/logos/logo-inside.png"
                alt="Bubble Bites"
                width={200}
                height={120}
                className="w-36 h-auto mx-auto mb-6"
              />

              <p className="font-display text-lg font-bold text-[#D4A853] mb-1">
                Snack Smart. Play Hard.
              </p>
              <p className="text-white/30 text-xs mb-8">
                Sugar-Free Protein Chocolate Bars
              </p>

              <div className="flex flex-col gap-2 text-sm">
                <p className="text-white/60">🌰 Hazelnut</p>
                <p className="text-white/60">🤎 Dark Chocolate</p>
                <p className="text-white/60">🍊 Orange</p>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-white/25 text-xs mt-8"
              >
                bubblebiteskids.com
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-white/15 text-[10px] mt-4"
              >
                🇮🇳 Made in India · FSSAI Certified
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
