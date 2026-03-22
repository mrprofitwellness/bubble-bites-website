import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bubble Bites — Links",
  description: "All Bubble Bites links in one place. Website, flavors, contact, and more.",
};

const links = [
  { label: "🍫 Explore Our Flavors", href: "https://bubblebiteskids.com/#flavors", highlight: true },
  { label: "🧠 Why Bubble Bites?", href: "https://bubblebiteskids.com/#benefits", highlight: false },
  { label: "📊 Nutrition Facts", href: "https://bubblebiteskids.com/#nutrition", highlight: false },
  { label: "📖 Our Story", href: "https://bubblebiteskids.com/#story", highlight: false },
  { label: "🌐 Visit Website", href: "https://bubblebiteskids.com", highlight: false },
  { label: "📧 Contact Us", href: "mailto:info@mrprofitwellness.com", highlight: false },
  { label: "📞 Call Us", href: "tel:+919227181401", highlight: false },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-[var(--bb-teal)] flex flex-col items-center px-4 py-10">
      {/* Profile */}
      <div className="text-center mb-8">
        <Image
          src="/images/logos/logo-inside.png"
          alt="Bubble Bites"
          width={200}
          height={120}
          className="w-24 h-auto mx-auto mb-4"
        />
        <h1 className="font-display text-xl font-bold text-white">Bubble Bites</h1>
        <p className="text-sm text-white/60 mt-1 max-w-xs mx-auto">
          Sugar-free protein chocolate bars kids love. Snack Smart. Play Hard.
        </p>
      </div>

      {/* Links */}
      <div className="w-full max-w-sm flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`block w-full text-center py-3.5 px-4 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${
              link.highlight
                ? "bg-white text-[var(--bb-brown)] shadow-lg"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Flavors row */}
      <div className="flex gap-2 mt-8">
        {[
          { src: "/images/packaging/hazelnut-inner.png", alt: "Hazelnut" },
          { src: "/images/packaging/dark-chocolate-inner.png", alt: "Dark Chocolate" },
          { src: "/images/packaging/orange-inner.png", alt: "Orange" },
        ].map((p) => (
          <Image
            key={p.alt}
            src={p.src}
            alt={p.alt}
            width={730}
            height={1000}
            className="w-16 h-auto drop-shadow-xl"
          />
        ))}
      </div>

      {/* Footer */}
      <p className="text-[10px] text-white/25 mt-8">
        A brand by Mr. Pro-Fit Wellness · Made in India 🇮🇳
      </p>
    </div>
  );
}
