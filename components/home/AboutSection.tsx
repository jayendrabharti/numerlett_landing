"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import RevealHero from "../animations/RevealHero";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
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
            We're a forward-thinking software startup dedicated to transforming
            the retail industry through innovative technology solutions. Our
            mission is to empower businesses with the tools they need to thrive
            in today's competitive marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center bg-background border-border">
              <CardContent className="p-8">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Target size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize advanced retail technology, making powerful
                  business tools accessible to retailers of all sizes and
                  helping them compete in the digital age.
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
            <Card className="h-full text-center bg-background border-border">
              <CardContent className="p-8">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Eye size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading platform that connects retailers with
                  cutting-edge technology, fostering innovation and growth
                  across the global retail ecosystem.
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
            <Card className="h-full text-center bg-background border-border">
              <CardContent className="p-8">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Award size={32} />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Values
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovation, reliability, and customer success drive everything
                  we do. We believe in building lasting partnerships and
                  delivering exceptional value.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
