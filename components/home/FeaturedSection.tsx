"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  BotIcon,
  CloudIcon,
  GlobeIcon,
  SearchIcon,
  PaletteIcon,
  DatabaseIcon,
  VideoIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
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
      image: "/images/ai-automations-and-solutions.jpeg",
      title: "AI Automations & Solutions",
      description:
        "Intelligent automation solutions powered by AI to optimize workflows, reduce manual tasks, and enhance decision-making processes.",
    },
    {
      icon: CloudIcon,
      image: "/images/saas-development-solutions.jpeg",
      title: "SaaS Development",
      description:
        "Build scalable Software-as-a-Service applications with modern cloud architecture and subscription management capabilities.",
    },
    {
      icon: GlobeIcon,
      image: "/images/web-developement.jpeg",
      title: "Website Development",
      description:
        "Professional websites and web applications built with modern technologies, responsive design, and optimized performance.",
    },
    {
      icon: DatabaseIcon,
      image: "/images/erp-solutions.jpeg",
      title: "ERP Solutions",
      description:
        "Comprehensive Enterprise Resource Planning systems to streamline operations and integrate departments efficiently.",
    },
    {
      icon: PaletteIcon,
      image: "/images/ui-ux-design.jpeg",
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create intuitive, engaging, and accessible digital experiences for your customers.",
    },
    {
      icon: ShoppingCartIcon,
      image: "/images/ecommerce-solutions.jpeg",
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce solutions with custom online stores, payment integration, and inventory management.",
    },
    {
      icon: SmartphoneIcon,
      image: "/images/app-development.jpeg",
      title: "App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
    },
    {
      icon: CloudIcon,
      image: "/images/cloud-infra.jpeg",
      title: "Cloud Infrastructure",
      description:
        "Enterprise-grade cloud infrastructure solutions with scalability, reliability, and cost optimization.",
    },
  ];

  return (
    <SectionContainer id="services">
      <SectionHeader
        title="Our Services"
        description="Comprehensive technical and marketing solutions designed to drive your business forward with innovation and expertise."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
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
