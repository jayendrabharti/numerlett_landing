"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Award, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreativeSection from "@/components/services/CreativeSection";

const processSteps = [
  {
    step: "01",
    title: "Strategy & Research",
    description:
      "We analyze your market, competitors, and audience to create a data-driven marketing strategy.",
  },
  {
    step: "02",
    title: "Content Creation",
    description:
      "Our creative team develops engaging content tailored to your brand voice and audience.",
  },
  {
    step: "03",
    title: "Campaign Launch",
    description:
      "We execute multi-channel campaigns with precision timing and optimized targeting.",
  },
  {
    step: "04",
    title: "Analytics & Optimization",
    description:
      "Continuous monitoring and data-driven optimization to maximize ROI and performance.",
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description:
      "Marketing strategies backed by analytics, research, and proven methodologies.",
  },
  {
    icon: TrendingUp,
    title: "Results-Focused",
    description:
      "Campaigns designed to deliver measurable results and maximize your return on investment.",
  },
  {
    icon: Users,
    title: "Audience Expertise",
    description:
      "Deep understanding of audience behavior, preferences, and engagement patterns.",
  },
  {
    icon: Award,
    title: "Creative Excellence",
    description:
      "Award-worthy creative content that captures attention and drives meaningful engagement.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <CreativeSection />

      {/* Why Choose Us Section */}
      <section className="flex flex-col py-12 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Why Choose Our Marketing Services
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              We combine creative excellence with data-driven strategies to
              deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                  <item.icon size={24} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="flex flex-col py-12 bg-muted/30 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Our Marketing Process
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              A strategic approach that drives engagement, builds brand
              awareness, and delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground mb-3 sm:mb-4 font-bold text-lg sm:text-xl">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col py-12 bg-primary text-primary-foreground w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90">
              Let's discuss how our marketing expertise can elevate your brand
              and drive meaningful growth across all channels.
            </p>
            <Link href={"/contact"}>
              <Button size="lg" variant={"secondary"}>
                Contact Us
                <PhoneCallIcon />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
