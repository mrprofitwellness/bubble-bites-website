"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="story" className="py-14 sm:py-20 md:py-28 bg-[var(--bb-cream)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bb-teal)] mb-2 sm:mb-3">Our Story</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--bb-brown)]">
            Built for the next generation
          </h2>
        </div>

        {/* Story cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-16">
          {[
            { num: "01", title: "The Problem", text: "Kids love snacks. But most are either packed with sugar or taste like cardboard. We saw the gap.", color: "#F28C38" },
            { num: "02", title: "The Science", text: "We blended Ayurvedic brain-boosters — Shankhpushpi & Brahmi — into sugar-free dark chocolate.", color: "#1B7A6E" },
            { num: "03", title: "Bubble Bites", text: "Protein bars kids actually want to eat. Three flavors, zero sugar, ingredients parents trust.", color: "#5C4033" },
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
              className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-gray-100"
            >
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center font-display font-bold text-xs sm:text-sm text-white mb-3 sm:mb-5"
                style={{ backgroundColor: step.color }}
              >
                {step.num}
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-[var(--bb-brown)] mb-1.5 sm:mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-[var(--bb-brown)]/40 leading-relaxed">{step.text}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-14 -right-3 w-6 border-t-2 border-dashed border-gray-200" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Brand promise */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--bb-teal)]"
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-5 sm:p-8 md:p-12">
              <svg width="24" height="18" viewBox="0 0 32 24" className="mb-3 sm:mb-4 opacity-20">
                <path d="M0 24V14.4C0 6.08 4.48 1.28 13.44 0l1.28 3.52C9.28 4.8 6.72 8 6.4 12H12v12H0zm18.56 0V14.4c0-8.32 4.48-13.12 13.44-14.4l1.28 3.52C27.84 4.8 25.28 8 24.96 12H30.56v12H18.56z" fill="white"/>
              </svg>
              <p className="font-display text-base sm:text-xl md:text-2xl font-bold text-white leading-snug mb-3 sm:mb-4">
                Every child deserves a snack that powers their adventures without compromising on health.
              </p>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed mb-4 sm:mb-6">
                That&apos;s why we created Bubble Bites — where real chocolate meets real nutrition. Made with love in India, for kids everywhere.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <Image
                  src="/images/logos/logo-inside.png"
                  alt="Bubble Bites"
                  width={100}
                  height={60}
                  className="w-14 sm:w-20 h-auto"
                />
                <div>
                  <p className="text-[10px] sm:text-xs font-bold text-white/70">The Bubble Bites Team</p>
                  <p className="text-[9px] sm:text-[10px] text-white/30">Mr. Pro-Fit Wellness</p>
                </div>
              </div>
            </div>

            {/* Products — visible on mobile as horizontal row, fanned on desktop */}
            <div className="flex items-center justify-center p-5 sm:p-8 gap-0">
              <div className="relative -mr-3 sm:-mr-6 -rotate-6">
                <Image src="/images/packaging/hazelnut-inner.png" alt="Hazelnut" width={730} height={1000} className="w-[60px] sm:w-[80px] md:w-[100px] h-auto drop-shadow-xl" />
              </div>
              <div className="relative z-10">
                <Image src="/images/packaging/dark-chocolate-inner.png" alt="Dark Chocolate" width={730} height={1000} className="w-[70px] sm:w-[95px] md:w-[120px] h-auto drop-shadow-2xl" />
              </div>
              <div className="relative -ml-3 sm:-ml-6 rotate-6">
                <Image src="/images/packaging/orange-inner.png" alt="Orange" width={730} height={1000} className="w-[60px] sm:w-[80px] md:w-[100px] h-auto drop-shadow-xl" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 sm:mt-10 flex flex-wrap justify-center gap-x-5 sm:gap-x-10 gap-y-3"
        >
          {[
            { icon: "🇮🇳", label: "Made in India" },
            { icon: "🏭", label: "FSSAI Certified" },
            { icon: "🚫", label: "Zero Added Sugar" },
            { icon: "🧪", label: "Lab Tested" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-sm sm:text-base">{badge.icon}</span>
              <span className="text-[10px] sm:text-xs font-semibold text-[var(--bb-brown)]/30">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
