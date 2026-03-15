"use client";

import { motion } from "framer-motion";
import { brandInfo } from "@/data/products";

export default function CTA() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[var(--bb-teal)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Ready to try the snack kids can&apos;t stop talking about?
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/50 max-w-xs sm:max-w-md mx-auto leading-relaxed">
            Sugar-free, brain-boosting, protein-packed chocolate bars.
            Three flavors, zero regrets.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:${brandInfo.email}`}
              className="bg-white text-[var(--bb-teal)] font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:shadow-lg transition-shadow text-center"
            >
              Get in Touch
            </a>
            <a
              href="#flavors"
              className="border border-white/30 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white/10 transition-colors text-center"
            >
              View Flavors
            </a>
          </div>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-8 text-white/30 text-[10px] sm:text-xs font-semibold">
            <span>🇮🇳 Made in India</span>
            <span>FSSAI Certified</span>
            <span>Sugar Free</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
