import { AuroraBackgroundDemo } from "@/components/auroa-hero";
import { CardHoverEffectDemo } from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { HeroHighlightDemo } from "@/components/Home";
import Instructors from "@/components/Instructors";
import { Shadform } from "@/components/form";

export default function Home() {
  return (
    <>
      <main>
        <HeroHighlightDemo />
        <HeroSection />
        <AuroraBackgroundDemo />
        <Shadform />
        <CardHoverEffectDemo />
        <Instructors />
        <Footer />
      </main>
    </>
  );
}
