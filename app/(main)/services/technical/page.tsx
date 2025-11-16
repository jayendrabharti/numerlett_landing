"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Code, Brain, PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TechnicalSection from "@/components/services/TechnicalSection";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, understand your business goals, and create a detailed project roadmap.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Our team designs the technical architecture and creates user-focused mockups and prototypes.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using best practices, conduct thorough testing, and ensure quality delivery.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "We deploy your solution and provide ongoing support, maintenance, and updates as needed.",
  },
];

const whyChooseUs = [
  {
    icon: Code,
    title: "Expert Development Team",
    description:
      "Skilled developers with expertise across modern technologies and frameworks.",
  },
  {
    icon: Zap,
    title: "Agile Methodology",
    description:
      "Fast, iterative development with regular updates and client feedback integration.",
  },
  {
    icon: Brain,
    title: "Innovation Focus",
    description:
      "Cutting-edge solutions using the latest technologies and industry best practices.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Robust security measures and compliance with industry standards and regulations.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                Comprehensive technical solutions to transform your business
                with cutting-edge technology and innovative approaches tailored
                to your specific needs.
              </p>
            </motion.div>

            <Link href={"/contact"}>
              <Button size="lg" className="rounded-full text-lg">
                Contact Us
                <PhoneCallIcon />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TechnicalSection />

      {/* Why Choose Us Section */}
      <section className="flex flex-col py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Why Choose Numerlett
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              We combine technical expertise with business understanding to
              deliver exceptional results
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
      <section className="flex flex-col py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Our Development Process
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              A proven methodology that ensures successful project delivery from
              concept to deployment
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
      <section className="flex flex-col py-12 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90">
              Let's discuss how our technical expertise can help transform your
              business and achieve your digital goals.
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
