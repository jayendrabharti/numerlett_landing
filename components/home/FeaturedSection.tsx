"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  ShoppingCart,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Package,
  CreditCard,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import RevealHero from "../animations/RevealHero";
import Reveal from "../animations/Reveal";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your business performance with real-time analytics and customizable dashboards.",
  },
  {
    icon: ShoppingCart,
    title: "Inventory Management",
    description:
      "Track stock levels, automate reordering, and optimize your inventory across multiple locations.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Build stronger relationships with comprehensive customer profiles and purchase history tracking.",
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Accept payments seamlessly with integrated POS systems and multiple payment gateway support.",
  },
  {
    icon: Package,
    title: "Supply Chain",
    description:
      "Streamline your supply chain operations with automated vendor management and procurement.",
  },
  {
    icon: TrendingUp,
    title: "Sales Optimization",
    description:
      "Boost sales with AI-powered recommendations and dynamic pricing strategies.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with compliance support for retail industry standards.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Automate routine tasks and workflows to focus on growing your business.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="products" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <RevealHero className="mx-auto text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to Succeed
          </RevealHero>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SEED provides a comprehensive suite of tools designed to streamline
            every aspect of your retail operations, from inventory to customer
            relationships.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon size={24} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
