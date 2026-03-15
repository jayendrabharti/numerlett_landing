"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import RevealHero from "../animations/RevealHero";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100dvh-4rem)] text-center text-balance px-4 overflow-hidden">
      {/* Background gradients and meshes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-primary/10 blur-[120px] rounded-[100%] -z-10 pointer-events-none"></div>

      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-background/50 backdrop-blur-md text-primary text-sm font-semibold mb-8 uppercase tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Transforming Ideas into Digital Reality
      </motion.div>

      <RevealHero className="text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight text-foreground mb-6 leading-[1.1] mx-auto max-w-4xl">
        <span className="dark:text-primary block">Build, Grow & Scale</span>
        <span className="dark:text-primary block">Your Digital Presence</span>
      </RevealHero>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Numerlett empowers businesses with comprehensive software development,
        digital marketing, and innovative product solutions. From AI automations
        to brand strategy, we deliver excellence across the digital landscape.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Link href={"/book-appointment"}>
          <Button
            size="lg"
            className="rounded-full text-lg px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px_var(--primary)] transition-all"
          >
            Book a Consultation
            <Calendar className="ml-2 w-5 h-5" />
          </Button>
        </Link>
        <Link href={"/services"}>
          <Button
            variant={"outline"}
            size="lg"
            className="rounded-full text-lg px-8 h-14 border-border bg-background/50 backdrop-blur-md hover:bg-secondary"
          >
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
