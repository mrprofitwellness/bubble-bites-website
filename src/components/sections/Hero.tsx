"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import PackagingMockup from "@/components/ui/PackagingMockup";
import { products } from "@/data/products";

function useDirection() {
  const ref = useRef(1);
  return { get: () => ref.current, set: (v: number) => { ref.current = v; } };
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const dir = useDirection();
  const p = products[active];

  const switchTo = useCallback((i: number) => {
    dir.set(i > active ? 1 : -1);
    setActive(i);
  }, [active, dir]);

  const next = useCallback(() => {
    dir.set(1);
    setActive((i) => (i + 1) % products.length);
  }, [dir]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const progress = useMotionValue(0);
  useEffect(() => {
    progress.set(0);
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      progress.set(Math.min(elapsed / 5000, 1));
      if (elapsed < 5000) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, progress]);

  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  const d = dir.get();

  const textContainer = {
    enter: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
    exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  };

  const textChild = {
    initial: { opacity: 0, x: d * 40, filter: "blur(6px)" },
    enter: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] as const } },
    exit: { opacity: 0, x: d * -30, filter: "blur(4px)", transition: { duration: 0.25, ease: [0.5, 0, 0.75, 0] as const } },
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
          style={{ backgroundColor: p.heroBg }}
        />
      </AnimatePresence>

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 min-h-[100svh] flex flex-col justify-center pt-20 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* LEFT: Copy */}
          <div className="order-2 lg:order-1">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center mb-4 sm:mb-6"
            >
              <motion.span
                animate={{ color: p.heroAccent }}
                transition={{ duration: 0.5 }}
                className="font-display text-sm sm:text-base md:text-lg font-bold tracking-wide"
              >
                Snack Smart
              </motion.span>
              <motion.span
                animate={{ backgroundColor: `${p.heroAccent}60` }}
                transition={{ duration: 0.5 }}
                className="mx-2 sm:mx-2.5 w-4 sm:w-5 h-[2px] rounded-full inline-block"
              />
              <motion.span
                animate={{ color: p.heroAccent }}
                transition={{ duration: 0.5 }}
                className="font-display text-sm sm:text-base md:text-lg font-bold tracking-wide"
              >
                Play Hard
              </motion.span>
            </motion.div>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={p.id}
                variants={textContainer}
                initial="initial"
                animate="enter"
                exit="exit"
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-[10em] flex flex-wrap"
                style={{ color: p.heroHeadline }}
              >
                {p.tagline.split(" ").map((word, i) => (
                  <motion.span
                    key={`${p.id}-${i}`}
                    variants={textChild}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${p.id}`}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
                transition={{ duration: 0.4, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
                className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base max-w-sm leading-relaxed"
                style={{ color: `${p.heroHeadline}99` }}
              >
                {p.description}
              </motion.p>
            </AnimatePresence>

            {/* Flavor switcher */}
            <div className="mt-5 sm:mt-8 flex items-center gap-2 sm:gap-3 flex-wrap">
              {products.map((prod, i) => (
                <button
                  key={prod.id}
                  onClick={() => switchTo(i)}
                  className="relative rounded-full overflow-hidden transition-all duration-400"
                  style={
                    i === active
                      ? { backgroundColor: prod.heroAccent, color: prod.heroHeadline, padding: "6px 14px", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }
                      : { backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", padding: "6px 12px" }
                  }
                >
                  <span className="relative z-10 text-[11px] sm:text-xs font-bold uppercase tracking-wide">{prod.name}</span>
                  {i === active && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[3px] rounded-full"
                      style={{ width: progressWidth, backgroundColor: `${prod.heroHeadline}40` }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Quick facts */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 sm:mt-10 flex gap-5 sm:gap-8"
            >
              {[
                { val: "0g", label: "Sugar" },
                { val: "13g", label: "Bar" },
                { val: "100%", label: "Delicious" },
              ].map((s) => (
                <div key={s.label}>
                  <motion.div
                    animate={{ color: p.heroAccent }}
                    transition={{ duration: 0.5 }}
                    className="font-display text-lg sm:text-xl font-bold"
                  >
                    {s.val}
                  </motion.div>
                  <motion.div
                    animate={{ color: `${p.heroHeadline}55` }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider"
                  >
                    {s.label}
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 sm:mt-8"
            >
              <motion.a
                href="#flavors"
                animate={{ backgroundColor: p.heroAccent, color: p.heroHeadline }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-shadow"
              >
                Explore Flavors
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: Product */}
          <div className="relative flex justify-center lg:justify-end min-h-[200px] sm:min-h-[300px] lg:min-h-[350px] order-1 lg:order-2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: d * 120, rotate: d * 15, scale: 0.85 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, x: d * -80, rotate: d * -10, scale: 0.9 }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
              >
                {p.packagingInner ? (
                  <Image
                    src={p.packagingInner}
                    alt={p.name}
                    width={730}
                    height={1000}
                    className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-auto drop-shadow-2xl"
                  />
                ) : (
                  <PackagingMockup flavor={p.id} rotate={-10} size="lg" delay={0} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
