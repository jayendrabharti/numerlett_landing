"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollToSection from "../ScrollToSection";

const benefits = [
  "Free 30-day trial",
  "No setup fees",
  "24/7 customer support",
  "Easy migration from existing systems",
];

export default function CTASection() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of retailers who have already revolutionized their
            operations with SEED. Start your journey today and experience the
            difference.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                {benefit}
              </motion.div>
            ))}
          </div>

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
        </motion.div>
      </div>
    </section>
  );
}
