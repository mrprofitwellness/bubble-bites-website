"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PackagingMockup from "@/components/ui/PackagingMockup";
import { products } from "@/data/products";

export default function ProductDisplay() {
  return (
    <section className="py-14 sm:py-20 md:py-28" style={{ backgroundColor: "var(--bb-brown)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bb-gold)] mb-2 sm:mb-3">Collection</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            All three. All delicious.
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-3 sm:mb-6">
                <motion.div whileHover={{ y: -8, rotate: 2 }} transition={{ duration: 0.3 }}>
                  {p.packagingInner ? (
                    <Image
                      src={p.packagingInner}
                      alt={p.name}
                      width={730}
                      height={1000}
                      className="w-[70px] sm:w-[120px] md:w-[160px] lg:w-[180px] h-auto drop-shadow-2xl"
                    />
                  ) : (
                    <PackagingMockup flavor={p.id} rotate={0} size="md" delay={0} />
                  )}
                </motion.div>
              </div>
              <h3 className="font-display text-xs sm:text-base md:text-lg font-bold text-white mb-0.5 sm:mb-1">{p.name}</h3>
              <p className="text-[10px] sm:text-sm text-white/40 hidden sm:block">{p.tagline}</p>
              <div className="mt-2 sm:mt-3 flex justify-center gap-1 sm:gap-2 flex-wrap">
                {["Zero Sugar", p.weight].map((t) => (
                  <span key={t} className="text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full bg-white/8 text-white/50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
