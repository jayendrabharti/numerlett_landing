import AboutSection from "@/components/home/AboutSection";
import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import PlatformSection from "@/components/home/PlatformSection";
import SidebarNav from "@/components/home/SidebarNav";

export default function HomePage() {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div className="w-full flex flex-row">
        <SidebarNav />
        <div className="flex-1">
          <FeaturesSection />
          <PlatformSection />
          <AboutSection />
          <CTASection />
        </div>
      </div>
    </>
  );
}
