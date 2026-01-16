"use client";

import { Cloud, Headphones, Monitor, Smartphone } from "lucide-react";
import {
  CapabilityCard,
  SectionContainer,
  SectionHeader,
} from "@/components/shared";

export default function SeedPlatformSection() {
  const platformFeatures = [
    {
      icon: Monitor,
      title: "Desktop",
      description:
        "Full back-office controls for inventory, pricing, and reports.",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description:
        "Quick access for owners and managers when they are on the move.",
    },
    {
      icon: Cloud,
      title: "Cloud sync",
      description:
        "All your locations and channels stay on the same, real-time data.",
    },
    {
      icon: Headphones,
      title: "People-first support",
      description:
        "A small team you can reach by email or phone when something breaks.",
    },
  ];

  return (
    <SectionContainer background="muted">
      <SectionHeader
        title="Built for modern retail teams"
        description="SEED will work across your stores and devices so your inventory, billing, and reporting all stay in sync."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {platformFeatures.map((item, index) => (
          <CapabilityCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
