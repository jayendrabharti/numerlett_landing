"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  BotIcon,
  CloudIcon,
  GlobeIcon,
  SearchIcon,
  UsersIcon,
  PaletteIcon,
  DatabaseIcon,
  VideoIcon,
} from "lucide-react";
import {
  FeatureCard,
  SectionContainer,
  SectionHeader,
} from "@/components/shared";

export default function FeaturesSection() {
  const featuredServices = [
    {
      icon: BotIcon,
      title: "AI Automations & Solutions",
      description:
        "Intelligent automation solutions powered by AI to optimize workflows, reduce manual tasks, and enhance decision-making processes.",
    },
    {
      icon: CloudIcon,
      title: "SaaS Development",
      description:
        "Build scalable Software-as-a-Service applications with modern cloud architecture and subscription management capabilities.",
    },
    {
      icon: GlobeIcon,
      title: "Website Development",
      description:
        "Professional websites and web applications built with modern technologies, responsive design, and optimized performance.",
    },
    {
      icon: DatabaseIcon,
      title: "ERP Solutions",
      description:
        "Comprehensive Enterprise Resource Planning systems to streamline operations and integrate departments efficiently.",
    },
    {
      icon: SearchIcon,
      title: "Digital Marketing & SEO",
      description:
        "Comprehensive digital marketing strategies including SEO, paid advertising, and performance tracking to boost your online presence.",
    },
    {
      icon: UsersIcon,
      title: "Social Media Marketing",
      description:
        "End-to-end social media management and community building across all major platforms to engage your audience.",
    },
    {
      icon: PaletteIcon,
      title: "Graphic Design & Branding",
      description:
        "Professional visual identity and graphic design services that create memorable brand experiences and consistent communication.",
    },
    {
      icon: VideoIcon,
      title: "Video & Content Creation",
      description:
        "Engaging video content and multimedia production including explainer videos, social media content, and promotional materials.",
    },
  ];

  return (
    <SectionContainer id="services">
      <SectionHeader
        title="Our Services"
        description="Comprehensive technical and marketing solutions designed to drive your business forward with innovation and expertise."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredServices.map((service, index) => (
          <FeatureCard key={service.title} {...service} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/services">
          <Button size="lg" variant="outline" className="rounded-full group">
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}
