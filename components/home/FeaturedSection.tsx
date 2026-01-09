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

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <RevealHero className="mx-auto text-3xl md:text-4xl font-bold text-foreground mb-4">
            What SEED will help you stay on top of
          </RevealHero>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A practical set of tools we&apos;re building for the work retailers actually do every
            day — from counting stock to closing the books.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: BarChart3,
              title: "Numbers that make sense",
              description:
                "Clear dashboards for sales, margins, and stock — without ten tabs of filters.",
            },
            {
              icon: ShoppingCart,
              title: "Stock that matches reality",
              description:
                "Track items across locations and get gentle alerts before you run out.",
            },
            {
              icon: Users,
              title: "Customers you remember",
              description:
                "Purchase history and basic CRM in one place, so follow‑ups feel natural.",
            },
            {
              icon: CreditCard,
              title: "Checkout that just works",
              description:
                "Integrate with your existing POS and payment providers instead of replacing them.",
            },
            {
              icon: Package,
              title: "Suppliers in one line",
              description:
                "Simple purchase orders and receipts so you always know what is on the way.",
            },
            {
              icon: TrendingUp,
              title: "Health of the business",
              description:
                "Weekly and monthly views that make it obvious what is moving and what is stuck.",
            },
            {
              icon: Shield,
              title: "Roles and access",
              description:
                "Give your team the access they need without sharing one master login.",
            },
            {
              icon: Zap,
              title: "Tiny automations",
              description:
                "Small, boring workflows automated so your team can focus on customers.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md hover:border-primary/20 transition-all duration-300 bg-card border-border group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                    <feature.icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2.5">
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
