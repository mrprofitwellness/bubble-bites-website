"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

/*
  REEL 1: Brand Introduction
  Duration: ~15 seconds
  Format: 9:16 (phone vertical)

  HOW TO USE:
  1. Open bubblebiteskids.com/reel on your phone
  2. Tap the screen to start
  3. Screen-record the animation
  4. Post as Instagram Reel with trending audio

  SCENE FLOW:
  0.0s - Black screen, logo fades in
  2.5s - Logo zooms, tagline appears
  4.5s - Hazelnut product slides in
  6.5s - Dark Chocolate slides in
  8.5s - Orange slides in
  10.5s - All 3 together with "3 Flavors"
  12.5s - Key benefits flash
  14.0s - Final CTA with logo
*/

const scenes = [
  { id: "intro", duration: 2500 },
  { id: "tagline", duration: 2000 },
  { id: "hazelnut", duration: 2000 },
  { id: "dark", duration: 2000 },
  { id: "orange", duration: 2000 },
  { id: "all", duration: 2000 },
  { id: "benefits", duration: 2000 },
  { id: "cta", duration: 3000 },
];

export default function ReelPage() {
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
      className="fixed inset-0 overflow-hidden cursor-pointer"
      style={{
        fontFamily: "var(--font-display), var(--font-sans), system-ui",
        aspectRatio: "9/16",
        maxWidth: "100vw",
        maxHeight: "100vh",
        margin: "auto",
      }}
    >
      {/* Background transitions */}
      <AnimatePresence mode="wait">
        {(currentScene === "waiting" || currentScene === "intro" || currentScene === "tagline") && (
          <motion.div
            key="bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[#0A0604]"
          />
        )}
        {currentScene === "hazelnut" && (
          <motion.div
            key="bg-hazelnut"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{ backgroundColor: "#1B7A6E" }}
          />
        )}
        {currentScene === "dark" && (
          <motion.div
            key="bg-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{ backgroundColor: "#5C4033" }}
          />
        )}
        {currentScene === "orange" && (
          <motion.div
            key="bg-orange"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{ backgroundColor: "#F28C38" }}
          />
        )}
        {currentScene === "all" && (
          <motion.div
            key="bg-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[#0A0604]"
          />
        )}
        {currentScene === "benefits" && (
          <motion.div
            key="bg-benefits"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-[var(--bb-cream)]"
          />
        )}
        {currentScene === "cta" && (
          <motion.div
            key="bg-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
            style={{ backgroundColor: "#1B7A6E" }}
          />
        )}
      </AnimatePresence>

      {/* Crosshatch texture on colored backgrounds */}
      {["hazelnut", "dark", "orange", "cta"].includes(currentScene) && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      {/* Content layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
        {/* WAITING — Tap to start */}
        {currentScene === "waiting" && (
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-center"
          >
            <p className="text-white/60 text-lg font-bold">Tap to Start</p>
          </motion.div>
        )}

        {/* SCENE 1 — Logo fade in */}
        {currentScene === "intro" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <Image
              src="/images/logos/logo-inside.png"
              alt="Bubble Bites"
              width={200}
              height={120}
              className="w-48 h-auto mx-auto"
            />
          </motion.div>
        )}

        {/* SCENE 2 — Tagline */}
        {currentScene === "tagline" && (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/logos/logo-inside.png"
                alt="Bubble Bites"
                width={200}
                height={120}
                className="w-36 h-auto mx-auto mb-6"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display text-2xl font-bold text-[#D4A853] tracking-wide"
            >
              Snack Smart. Play Hard.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/40 text-sm mt-3"
            >
              Protein Chocolate Bar
            </motion.p>
          </div>
        )}

        {/* SCENE 3 — Hazelnut */}
        {currentScene === "hazelnut" && (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: 200, rotate: 15 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            >
              <Image
                src="/images/packaging/hazelnut-inner.png"
                alt="Hazelnut"
                width={730}
                height={1000}
                className="w-52 h-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-white mt-6 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Hazelnut
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/50 text-sm mt-1"
            >
              Crunchy. Rich. Irresistible.
            </motion.p>
          </div>
        )}

        {/* SCENE 4 — Dark Chocolate */}
        {currentScene === "dark" && (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: -200, rotate: -15 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            >
              <Image
                src="/images/packaging/dark-chocolate-inner.png"
                alt="Dark Chocolate"
                width={730}
                height={1000}
                className="w-52 h-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-white mt-6 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Dark Chocolate
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/50 text-sm mt-1"
            >
              Bold. Pure. Sugar-Free.
            </motion.p>
          </div>
        )}

        {/* SCENE 5 — Orange */}
        {currentScene === "orange" && (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
            >
              <Image
                src="/images/packaging/orange-inner.png"
                alt="Orange"
                width={730}
                height={1000}
                className="w-52 h-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-white mt-6 italic"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Orange
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-white/50 text-sm mt-1"
            >
              Zesty. Smooth. Refreshing.
            </motion.p>
          </div>
        )}

        {/* SCENE 6 — All 3 together */}
        {currentScene === "all" && (
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl font-bold text-white mb-8 font-display"
            >
              3 Flavors
            </motion.p>
            <div className="flex items-end justify-center gap-0">
              <motion.div
                initial={{ opacity: 0, x: -100, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: -8 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="-mr-4"
              >
                <Image src="/images/packaging/hazelnut-inner.png" alt="Hazelnut" width={730} height={1000} className="w-28 h-auto drop-shadow-xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                className="relative z-10"
              >
                <Image src="/images/packaging/dark-chocolate-inner.png" alt="Dark Chocolate" width={730} height={1000} className="w-36 h-auto drop-shadow-2xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100, rotate: 20 }}
                animate={{ opacity: 1, x: 0, rotate: 8 }}
                transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                className="-ml-4"
              >
                <Image src="/images/packaging/orange-inner.png" alt="Orange" width={730} height={1000} className="w-28 h-auto drop-shadow-xl" />
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-white/40 text-sm mt-6"
            >
              One Mission. Zero Sugar.
            </motion.p>
          </div>
        )}

        {/* SCENE 7 — Benefits flash */}
        {currentScene === "benefits" && (
          <div className="text-center w-full">
            {[
              { text: "Zero Added Sugar", delay: 0 },
              { text: "Brain-Boosting Herbs", delay: 0.3 },
              { text: "Protein-Packed", delay: 0.6 },
              { text: "FSSAI Certified", delay: 0.9 },
            ].map((item) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay, duration: 0.3 }}
                className="flex items-center gap-3 justify-center mb-4"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--bb-teal)]" />
                <span className="text-xl font-bold text-[var(--bb-brown)]">{item.text}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* SCENE 8 — Final CTA */}
        {currentScene === "cta" && (
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
              <Image
                src="/images/logos/logo-inside.png"
                alt="Bubble Bites"
                width={200}
                height={120}
                className="w-40 h-auto mx-auto mb-6"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-xl font-bold text-[#D4A853] mb-2"
            >
              Snack Smart. Play Hard.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-white/50 text-sm"
            >
              bubblebiteskids.com
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-8 flex justify-center gap-6 text-white/30 text-xs"
            >
              <span>🇮🇳 Made in India</span>
              <span>Sugar Free</span>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
