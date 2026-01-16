"use client";

import { Cloud, Headphones, Zap, Shield } from "lucide-react";
import {
  CapabilityCard,
  SectionContainer,
  SectionHeader,
} from "@/components/shared";

export default function PlatformSection() {
  const capabilities = [
    {
      icon: Zap,
      title: "Scalability",
      description:
        "Built to grow with your business, from startup to enterprise scale with robust infrastructure.",
    },
    {
      icon: Shield,
      title: "Security",
      description:
        "Enterprise-grade security measures to protect your data and ensure compliance with industry standards.",
    },
    {
      icon: Cloud,
      title: "Cloud-Native",
      description:
        "Modern cloud architecture ensuring high availability, reliability, and seamless deployments.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description:
        "Expert support team available to assist you at every step of your digital journey.",
    },
  ];

  return (
    <SectionContainer background="muted" id="capabilities">
      <SectionHeader
        title="Built for Modern Businesses"
        description="We deliver solutions with scalability, security, and support at the core of everything we build."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {capabilities.map((item, index) => (
          <CapabilityCard key={item.title} {...item} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
