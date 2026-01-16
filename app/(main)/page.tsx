import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import PlatformSection from "@/components/home/PlatformSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PlatformSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
