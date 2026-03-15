"use client";

import Image from "next/image";
import { brandInfo } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#130D06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 pt-10 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 sm:gap-8 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <Image
              src="/images/logos/logo-inside.png"
              alt="Bubble Bites"
              width={140}
              height={80}
              className="w-20 sm:w-28 h-auto mb-4 sm:mb-5"
            />
            <p className="text-xs sm:text-sm text-white/30 leading-relaxed max-w-sm mb-4 sm:mb-6">
              {brandInfo.description}
            </p>
            <p className="text-[10px] sm:text-xs text-white/15 font-display font-bold">
              Snack Smart. Play Hard.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-2">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white/20 mb-3 sm:mb-5">Explore</p>
            <div className="flex flex-col gap-2 sm:gap-3">
              {[
                { label: "Flavors", href: "#flavors" },
                { label: "Why Us", href: "#benefits" },
                { label: "Nutrition", href: "#nutrition" },
                { label: "Our Story", href: "#story" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="text-xs sm:text-sm text-white/35 hover:text-white/70 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Flavors */}
          <div className="md:col-span-2">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white/20 mb-3 sm:mb-5">Flavors</p>
            <div className="flex flex-col gap-2 sm:gap-3">
              {[
                { name: "Hazelnut", color: "#1B7A6E" },
                { name: "Dark Chocolate", color: "#5C4033" },
                { name: "Orange", color: "#F28C38" },
              ].map((f) => (
                <span key={f.name} className="text-xs sm:text-sm text-white/35 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: f.color }} />
                  {f.name}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-3">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-white/20 mb-3 sm:mb-5">Get in Touch</p>
            <div className="flex flex-col gap-2 sm:gap-3">
              <a href={`mailto:${brandInfo.email}`} className="text-xs sm:text-sm text-white/35 hover:text-white/70 transition-colors break-all">
                {brandInfo.email}
              </a>
              <a href={`tel:${brandInfo.phone.replace(/\s/g, "")}`} className="text-xs sm:text-sm text-white/35 hover:text-white/70 transition-colors">
                {brandInfo.phone}
              </a>
              <a href={`https://${brandInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white/35 hover:text-white/70 transition-colors break-all">
                {brandInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 py-4 sm:py-5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-white/20">
            <span>&copy; {new Date().getFullYear()} Bubble Bites</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px] text-white/15">
            <span className="flex items-center gap-1">
              <span className="text-[10px] sm:text-xs">🇮🇳</span> Made in India
            </span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>A brand by {brandInfo.parentCompany}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
