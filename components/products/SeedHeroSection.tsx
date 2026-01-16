"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealHero from "../animations/RevealHero";
import ScrollToSection from "../ScrollToSection";
import Link from "next/link";

export default function SeedHeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] text-center text-balance px-4">
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Coming soon · SEED by Numerlett
      </motion.div>

      <RevealHero className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight mx-auto max-w-5xl">
        <span className="dark:text-primary block">Retail Software</span>
        <span className="dark:text-primary block">That Feels Calm,</span>
        <span className="dark:text-primary block">Not Chaotic</span>
      </RevealHero>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        SEED is being built to help retail teams keep inventory, billing, and
        reporting in one place. When it launches, the numbers you see at closing
        time will match what&apos;s on the shelves.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link href={"/contact"}>
          <Button size="lg" className="rounded-full text-lg px-8">
            Get early access
            <PhoneCallIcon className="ml-2" />
          </Button>
        </Link>
        <ScrollToSection targetId="features">
          <Button
            variant={"outline"}
            size="lg"
            className="rounded-full text-lg px-8"
          >
            See what&apos;s planned
            <ArrowRight className="ml-2" />
          </Button>
        </ScrollToSection>
      </motion.div>
    </section>
  );
}
