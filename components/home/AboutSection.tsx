"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import RevealHero from "../animations/RevealHero";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <RevealHero className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 mx-auto">
            About Numerlett
          </RevealHero>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We&apos;re a small team building SEED, a retail operations platform
            designed for Indian retailers. We believe retail software should be
            simple, reliable, and actually useful — not overwhelming dashboards
            and features you&apos;ll never use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center bg-background border-border hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build retail software that actually works for small and medium
                  retailers in India. No enterprise complexity, no unnecessary
                  features — just tools that make daily operations easier.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center bg-background border-border hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <Eye size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create software that retailers actually want to use.
                  We&apos;re starting with SEED, and we&apos;ll keep building
                  based on what real retailers tell us they need.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center bg-background border-border hover:border-primary/20 transition-colors">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Values
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Simplicity over features. Reliability over flashy tech. Real
                  feedback over assumptions. We&apos;re building this with
                  retailers, not for them.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
