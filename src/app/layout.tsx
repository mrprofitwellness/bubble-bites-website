import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Bubble Bites — Snack Smart. Play Hard.",
  description:
    "Sugar-free, brain-boosting protein chocolate bars that kids love. Available in Hazelnut, Dark Chocolate, and Orange flavors. A brand by Mr. Pro-Fit Wellness.",
  keywords: [
    "Bubble Bites",
    "protein bar",
    "chocolate bar",
    "sugar free",
    "kids snack",
    "brain boost",
    "healthy snack",
  ],
  openGraph: {
    title: "Bubble Bites — Snack Smart. Play Hard.",
    description:
      "Sugar-free, brain-boosting protein chocolate bars that kids love.",
    type: "website",
    images: ["/images/logos/bubble-bites-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${fredoka.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
