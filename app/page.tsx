import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
// import TeamSection from "@/components/home/TeamSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      {/* <TeamSection /> */}
      <CTASection />
    </>
  );
}
