"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { products } from "@/data/products";

export default function Nutrition() {
  const [sel, setSel] = useState(0);
  const p = products[sel];

  return (
    <section id="nutrition" className="py-14 sm:py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--bb-teal)] mb-2 sm:mb-3">Nutrition</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--bb-brown)]">
            What&apos;s inside every bar
          </h2>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid lg:grid-cols-5 gap-4 sm:gap-6">
              {/* Left — Product visual + selector */}
              <div className="lg:col-span-2">
                <div
                  className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col items-center h-full transition-colors duration-500"
                  style={{ backgroundColor: p.bg }}
                >
                  <div className="flex-1 flex items-center justify-center py-2 sm:py-4">
                    {p.packagingInner && (
                      <Image
                        src={p.packagingInner}
                        alt={p.name}
                        width={730}
                        height={1000}
                        className="w-[100px] sm:w-[130px] lg:w-[160px] h-auto drop-shadow-2xl"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-[10px] sm:text-xs text-white/50 mb-4 sm:mb-6">{p.category} · {p.weight}</p>
                  <div className="flex gap-1.5 sm:gap-2 w-full">
                    {products.map((prod, i) => (
                      <button
                        key={prod.id}
                        onClick={() => setSel(i)}
                        className={`flex-1 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold transition-all truncate ${
                          sel === i
                            ? "bg-white text-[var(--bb-brown)] shadow-md"
                            : "bg-white/15 text-white/60 hover:bg-white/25"
                        }`}
                      >
                        {prod.flavor}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right — Nutrition data */}
              <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-5">
                {/* Key highlights */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {[
                    { value: "84.8", unit: "kcal", label: "Energy" },
                    { value: "0", unit: "g", label: "Sugar" },
                    { value: "0.57", unit: "g", label: "Protein" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center">
                      <div className="flex items-baseline justify-center gap-0.5">
                        <span className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-[var(--bb-brown)]">{stat.value}</span>
                        <span className="text-[10px] sm:text-sm font-bold text-[var(--bb-brown)]/30">{stat.unit}</span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--bb-brown)]/30 mt-0.5 sm:mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Full table */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex-1">
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--bb-brown)]/25 mb-3 sm:mb-4">
                    Nutrition Facts · Per 15g serving
                  </p>
                  {p.nutrition.map((row, i) => (
                    <div
                      key={row.nutrient}
                      className={`flex items-center justify-between py-2.5 sm:py-3 ${
                        i < p.nutrition.length - 1 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-[var(--bb-brown)]">{row.nutrient}</span>
                      <div className="flex items-center gap-3 sm:gap-6">
                        <span className="text-[10px] sm:text-xs text-[var(--bb-brown)]/30 hidden sm:block">{row.per100g}/100g</span>
                        <span className="text-xs sm:text-sm font-bold text-[var(--bb-teal)] min-w-[50px] sm:min-w-[70px] text-right">{row.perServing}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ingredients */}
                <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[var(--bb-brown)]/25">Ingredients</p>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[var(--bb-teal)] bg-[var(--bb-teal)]/5 px-2 py-0.5 rounded-full">
                      Sugar Free
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {p.ingredients.map((ing) => (
                      <span
                        key={ing}
                        className="text-[10px] sm:text-xs text-[var(--bb-brown)]/50 bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg border border-gray-100"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
