"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "Flavors", href: "#flavors" },
  { label: "Why Us", href: "#benefits" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Story", href: "#story" },
];

export default function Navbar() {
  const [pastHero, setPastHero] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      // Show solid bg after scrolling just 50px
      setPastHero(window.scrollY > 50);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        pastHero
          ? "py-2 sm:py-2.5 bg-[var(--bb-cream)] shadow-[0_1px_12px_rgba(74,44,26,0.08)]"
          : "py-3 sm:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 flex items-center justify-between">
        <a href="#home">
          <Image
            src="/images/logos/logo-inside.png"
            alt="Bubble Bites"
            width={200}
            height={120}
            className={`h-auto transition-all duration-300 ${pastHero ? "w-20 sm:w-24" : "w-28 sm:w-36"}`}
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 lg:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                pastHero
                  ? "text-[var(--bb-brown)]/60 hover:text-[var(--bb-brown)] hover:bg-[var(--bb-brown)]/5"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg transition-colors"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
            pastHero ? "bg-[var(--bb-brown)]" : "bg-white"
          } ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
            pastHero ? "bg-[var(--bb-brown)]" : "bg-white"
          } ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden border-t ${
              pastHero
                ? "bg-[var(--bb-cream)] border-[var(--bb-brown)]/5"
                : "bg-[var(--bb-brown)]/90 backdrop-blur-xl border-white/10"
            }`}
          >
            <div className="px-4 py-3 flex flex-col gap-0.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-bold py-3 px-3 rounded-xl transition-colors ${
                    pastHero
                      ? "text-[var(--bb-brown)] hover:bg-[var(--bb-brown)]/5"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
