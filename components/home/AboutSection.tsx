"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import RevealHero from "../animations/RevealHero";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            We&apos;re a dynamic team delivering comprehensive technical and
            marketing solutions to businesses worldwide. From custom software
            development to strategic digital marketing, we combine innovation
            with expertise to help our clients succeed.
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
                  Empower businesses with cutting-edge technology and strategic
                  marketing solutions that drive growth, enhance efficiency, and
                  create lasting impact in the digital world.
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
                  Be the trusted partner for businesses seeking innovative
                  technical and marketing solutions. We envision a future where
                  every business has access to world-class digital capabilities.
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
                  Excellence in execution. Innovation in approach. Transparency
                  in communication. Client success is our success, and we commit
                  to delivering solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
