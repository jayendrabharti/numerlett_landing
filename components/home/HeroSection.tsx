"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCallIcon, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealHero from "../animations/RevealHero";
import ScrollToSection from "../ScrollToSection";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] text-center text-balance">
      <Link href="/products">
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 cursor-pointer hover:bg-primary/20 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          🌱 Introducing SEED - The Future of Retail Management
        </motion.div>
      </Link>

      <RevealHero className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight mx-auto">
        Revolutionize Your
        <span className="text-primary block">Retail Business</span>
      </RevealHero>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        SEED is the comprehensive retail management system that streamlines
        operations, boosts efficiency, and drives growth for modern businesses.
        Experience the power of intelligent automation and data-driven insights.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link href={"/contact"}>
          <Button size="lg" className="rounded-full text-lg">
            Contact Us
            <PhoneCallIcon />
          </Button>
        </Link>
        <ScrollToSection targetId="about">
          <Button
            variant={"outline"}
            size="lg"
            className="rounded-full text-lg"
          >
            Learn More
            <ArrowRight />
          </Button>
        </ScrollToSection>
      </motion.div>
    </section>
  );
}
