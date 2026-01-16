import { Metadata } from "next";
import SeedHeroSection from "@/components/products/SeedHeroSection";
import SeedFeaturesSection from "@/components/products/SeedFeaturesSection";
import SeedPlatformSection from "@/components/products/SeedPlatformSection";
import PricingSection from "@/components/home/PricingSection";
import SeedCTASection from "@/components/products/SeedCTASection";

export const metadata: Metadata = {
  title: "SEED - Retail Management Software | Numerlett",
  description:
    "SEED is a comprehensive retail management system that helps retail teams manage inventory, billing, and reporting in one place with real-time sync across all locations.",
};

export default function SeedProductPage() {
  return (
    <main>
      <SeedHeroSection />
      <SeedFeaturesSection />
      <SeedPlatformSection />
      <PricingSection />
      <SeedCTASection />
    </main>
  );
}
