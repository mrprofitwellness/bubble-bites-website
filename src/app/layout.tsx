import type { Metadata, Viewport } from "next";
import { Nunito, Fredoka } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bubblebiteskids.com";

export const viewport: Viewport = {
  themeColor: "#1B7A6E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bubble Bites — Sugar-Free Protein Chocolate Bars for Kids",
    template: "%s | Bubble Bites",
  },
  description:
    "Bubble Bites makes sugar-free, brain-boosting protein chocolate bars kids actually love. Packed with Shankhpushpi & Brahmi. Available in Hazelnut, Dark Chocolate, and Orange flavors. A brand by Mr. Pro-Fit Wellness.",
  keywords: [
    "Bubble Bites",
    "protein bar for kids",
    "sugar free chocolate bar",
    "kids protein snack",
    "brain boosting snack",
    "healthy chocolate bar",
    "Shankhpushpi chocolate",
    "Brahmi protein bar",
    "zero sugar chocolate",
    "kids snack India",
    "protein bar India",
    "Hazelnut chocolate bar",
    "Dark chocolate protein bar",
    "Orange chocolate bar",
    "Mr Pro-Fit Wellness",
    "healthy snack for children",
    "Ayurvedic chocolate bar",
    "sugar free protein bar",
    "lunchbox snack",
    "FSSAI certified snack",
  ],
  authors: [{ name: "Mr. Pro-Fit Wellness", url: "https://www.mrprofitwellness.com" }],
  creator: "Mr. Pro-Fit Wellness",
  publisher: "Mr. Pro-Fit Wellness",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Bubble Bites",
    title: "Bubble Bites — Sugar-Free Protein Chocolate Bars for Kids",
    description:
      "Sugar-free, brain-boosting protein chocolate bars kids actually love. Available in Hazelnut, Dark Chocolate, and Orange. Made in India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bubble Bites — Snack Smart. Play Hard.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubble Bites — Sugar-Free Protein Chocolate Bars for Kids",
    description:
      "Sugar-free, brain-boosting protein chocolate bars kids love. Hazelnut, Dark Chocolate & Orange. Made in India.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  category: "Food & Beverage",
};

// Structured data for Google Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bubble Bites",
  url: siteUrl,
  logo: `${siteUrl}/images/logos/bubble-bites-logo.png`,
  description:
    "Sugar-free, brain-boosting protein chocolate bars for kids. Made in India by Mr. Pro-Fit Wellness.",
  brand: {
    "@type": "Brand",
    name: "Bubble Bites",
    slogan: "Snack Smart. Play Hard.",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Mr. Pro-Fit Wellness",
    url: "https://www.mrprofitwellness.com",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-92271-81401",
    email: "info@mrprofitwellness.com",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [],
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Bubble Bites Protein Chocolate Bars",
  description: "Sugar-free protein chocolate bars in three flavors",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Bubble Bites Hazelnut Protein Bar",
        description:
          "Sugar-free dark chocolate protein bar with hazelnut flavor, Shankhpushpi & Brahmi. 13g bar.",
        brand: { "@type": "Brand", name: "Bubble Bites" },
        category: "Protein Bars",
        image: `${siteUrl}/images/packaging/hazelnut-inner.png`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Bubble Bites Dark Chocolate Protein Bar",
        description:
          "Sugar-free dark chocolate protein bar with Shankhpushpi & Brahmi. 13g bar.",
        brand: { "@type": "Brand", name: "Bubble Bites" },
        category: "Protein Bars",
        image: `${siteUrl}/images/packaging/dark-chocolate-inner.png`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Bubble Bites Orange Chocolate Protein Bar",
        description:
          "Sugar-free dark chocolate protein bar with orange flavor, Shankhpushpi & Brahmi. 13g bar.",
        brand: { "@type": "Brand", name: "Bubble Bites" },
        category: "Protein Bars",
        image: `${siteUrl}/images/packaging/orange-inner.png`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      </head>
      <body className={`${nunito.variable} ${fredoka.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
