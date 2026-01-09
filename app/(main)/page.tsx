import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import PlatformSection from "@/components/home/PlatformSection";
import PricingSection from "@/components/home/PricingSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PlatformSection />
      <PricingSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
