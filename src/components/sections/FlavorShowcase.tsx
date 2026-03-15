"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PackagingMockup from "@/components/ui/PackagingMockup";
import { products, type Product } from "@/data/products";

function ProductImage({ product }: { product: Product }) {
  if (product.packagingOuter) {
    return (
      <Image
        src={product.packagingOuter}
        alt={product.name}
        width={1000}
        height={1000}
        className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-auto drop-shadow-2xl"
      />
    );
  }
  return <PackagingMockup flavor={product.id} rotate={-8} size="lg" delay={0} />;
}

export default function FlavorShowcase() {
  const [active, setActive] = useState(0);
  const p = products[active];

  return (
    <section id="flavors" className="py-14 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bb-teal)] mb-2 sm:mb-3">Our Flavors</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--bb-brown)]">
            Pick your favorite
          </h2>
        </div>

        {/* Flavor tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {products.map((prod, i) => (
            <button
              key={prod.id}
              onClick={() => setActive(i)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                i === active
                  ? "text-white shadow-lg"
                  : "text-[var(--bb-brown)] bg-gray-100 hover:bg-gray-200 border border-gray-200"
              }`}
              style={i === active ? { backgroundColor: prod.bg } : {}}
            >
              {prod.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden"
            style={{ backgroundColor: p.accent }}
          >
            <div className="grid md:grid-cols-2 items-center">
              {/* Product image */}
              <div className="relative flex justify-center py-8 sm:py-12 px-4 sm:px-8">
                <ProductImage product={p} />
              </div>

              {/* Details */}
              <div className="p-5 sm:p-8 md:p-12">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] opacity-40" style={{ fontFamily: "var(--font-condensed)" }}>{p.category}</span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--bb-brown)] mt-2 italic" style={{ fontFamily: "var(--font-serif)" }}>{p.name}</h3>
                <p className="mt-1 font-semibold text-xs sm:text-sm" style={{ color: p.bg, fontFamily: "var(--font-condensed)" }}>{p.tagline}</p>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[var(--bb-brown)]/50 leading-relaxed">{p.description}</p>

                {/* Tags */}
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {["Zero Sugar", "Brain Boost", "13g Bar"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-1 rounded-full"
                      style={{ color: p.bg, backgroundColor: `${p.bg}12` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Ingredients peek */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[var(--bb-brown)]/5">
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-[var(--bb-brown)]/30 mb-2">Key Ingredients</p>
                  <p className="text-[11px] sm:text-xs text-[var(--bb-brown)]/40 leading-relaxed">
                    {p.ingredients.slice(0, 5).join(" · ")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
