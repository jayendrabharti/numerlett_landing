import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import InstagramSection from "@/components/InstagramSection";

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <InstagramSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
    </>
  );
}
