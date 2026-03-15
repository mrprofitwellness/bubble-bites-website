"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "🧠",
    title: "Brain Boosting",
    desc: "Shankhpushpi & Brahmi — Ayurvedic herbs that support memory, focus, and cognitive development in growing kids.",
    color: "#1B7A6E",
  },
  {
    icon: "🚫",
    title: "Zero Added Sugar",
    desc: "Sweetened with Maltitol. Real chocolate taste, no sugar crash.",
    color: "#5C4033",
  },
  {
    icon: "💪",
    title: "Protein Packed",
    desc: "Fuel for active bodies — perfect after school or sports.",
    color: "#F28C38",
  },
  {
    icon: "🔬",
    title: "Ayurvedic Science",
    desc: "Ancient herbs meet modern nutrition in every single bar.",
    color: "#1B7A6E",
  },
  {
    icon: "📦",
    title: "13g Snack Size",
    desc: "Fits any lunchbox or backpack. Grab it and go.",
    color: "#D4A853",
  },
  {
    icon: "🌿",
    title: "Clean Ingredients",
    desc: "Real cocoa mass, cocoa butter, natural flavors. No artificial colours or fillers.",
    color: "#5C4033",
  },
];

export default function Benefits() {
  const hero = features[0];
  const rest = features.slice(1);

  return (
    <section id="benefits" className="py-14 sm:py-20 md:py-28 bg-[var(--bb-cream)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bb-teal)] mb-2 sm:mb-3">
            Why Bubble Bites
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--bb-brown)]">
            Good for kids. Trusted by parents.
          </h2>
        </div>

        {/* Hero benefit — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl overflow-hidden mb-4 sm:mb-5"
          style={{ backgroundColor: hero.color }}
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-5 sm:p-8 md:p-12">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/15 flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-5">
                {hero.icon}
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                {hero.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-sm">
                {hero.desc}
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
                {["Shankhpushpi", "Brahmi", "Creatinine"].map((ing) => (
                  <div key={ing} className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/40" />
                    <span className="text-[10px] sm:text-xs font-semibold text-white/50">{ing}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center p-8">
              <Image
                src="/images/packaging/hazelnut-inner.png"
                alt="Bubble Bites"
                width={730}
                height={1000}
                className="w-[140px] lg:w-[180px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {/* Card 1 — tall accent */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="sm:row-span-2 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col justify-between"
            style={{ backgroundColor: rest[0].color }}
          >
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/15 flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5">
                {rest[0].icon}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{rest[0].title}</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{rest[0].desc}</p>
            </div>
            <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl sm:text-4xl font-bold text-white">0g</span>
                <span className="text-xs sm:text-sm text-white/40 font-semibold">added sugar</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 border border-gray-100"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0"
                style={{ backgroundColor: `${rest[1].color}10` }}
              >
                {rest[1].icon}
              </div>
              <div>
                <h3 className="font-display text-sm sm:text-base font-bold text-[var(--bb-brown)] mb-1">{rest[1].title}</h3>
                <p className="text-xs sm:text-sm text-[var(--bb-brown)]/40 leading-relaxed">{rest[1].desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 border border-gray-100"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0"
                style={{ backgroundColor: `${rest[2].color}10` }}
              >
                {rest[2].icon}
              </div>
              <div>
                <h3 className="font-display text-sm sm:text-base font-bold text-[var(--bb-brown)] mb-1">{rest[2].title}</h3>
                <p className="text-xs sm:text-sm text-[var(--bb-brown)]/40 leading-relaxed">{rest[2].desc}</p>
              </div>
            </div>
          </motion.div>

          {/* Card 4 — wide */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="sm:col-span-2 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
            style={{ backgroundColor: `${rest[3].color}08`, border: `1px solid ${rest[3].color}15` }}
          >
            <div
              className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl shrink-0"
              style={{ backgroundColor: `${rest[3].color}12` }}
            >
              {rest[3].icon}
            </div>
            <div className="flex-1">
              <h3 className="font-display text-sm sm:text-base font-bold text-[var(--bb-brown)] mb-1">{rest[3].title}</h3>
              <p className="text-xs sm:text-sm text-[var(--bb-brown)]/40 leading-relaxed">{rest[3].desc}</p>
            </div>
            <div className="sm:text-right shrink-0">
              <div className="font-display text-2xl sm:text-3xl font-bold" style={{ color: rest[3].color }}>13g</div>
              <div className="text-[9px] sm:text-[10px] font-semibold text-[var(--bb-brown)]/30 uppercase">per bar</div>
            </div>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 border border-gray-100"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-lg sm:text-xl shrink-0"
                style={{ backgroundColor: `${rest[4].color}10` }}
              >
                {rest[4].icon}
              </div>
              <div>
                <h3 className="font-display text-sm sm:text-base font-bold text-[var(--bb-brown)] mb-1">{rest[4].title}</h3>
                <p className="text-xs sm:text-sm text-[var(--bb-brown)]/40 leading-relaxed">{rest[4].desc}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
