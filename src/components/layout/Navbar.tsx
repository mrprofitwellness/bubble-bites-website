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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-2 sm:py-3" : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5 flex items-center justify-between">
        <a href="#home">
          <Image
            src="/images/logos/logo-inside.png"
            alt="Bubble Bites"
            width={200}
            height={120}
            className={`h-auto transition-all duration-300 ${scrolled ? "w-24 sm:w-28" : "w-28 sm:w-36"}`}
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs sm:text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                scrolled
                  ? "text-[var(--bb-brown)]/50 hover:text-[var(--bb-brown)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[2px] transition-all duration-300 ${
            scrolled ? "bg-[var(--bb-brown)]" : "bg-white"
          } ${open ? "rotate-45 translate-y-[4px]" : ""}`} />
          <span className={`block w-5 h-[2px] transition-all duration-300 ${
            scrolled ? "bg-[var(--bb-brown)]" : "bg-white"
          } ${open ? "-rotate-45 -translate-y-[4px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-bold text-[var(--bb-brown)] py-3 px-2 rounded-lg hover:bg-gray-50"
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
