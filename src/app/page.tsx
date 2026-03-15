import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FlavorShowcase from "@/components/sections/FlavorShowcase";
import Benefits from "@/components/sections/Benefits";
import ProductDisplay from "@/components/sections/ProductDisplay";
import Nutrition from "@/components/sections/Nutrition";
import BrandStory from "@/components/sections/BrandStory";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FlavorShowcase />
        <Benefits />
        <ProductDisplay />
        <Nutrition />
        <BrandStory />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
