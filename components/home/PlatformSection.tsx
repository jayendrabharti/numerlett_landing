"use client";

import { motion } from "framer-motion";
import { Cloud, Headphones, Monitor, Smartphone } from "lucide-react";

export default function PlatformSection() {
  const platformFeatures = [
    {
      icon: Monitor,
      title: "Desktop",
      description:
        "Full back-office controls for inventory, pricing, and reports.",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description:
        "Quick access for owners and managers when they are on the move.",
    },
    {
      icon: Cloud,
      title: "Cloud sync",
      description:
        "All your locations and channels stay on the same, real-time data.",
    },
    {
      icon: Headphones,
      title: "People-first support",
      description:
        "A small team you can reach by email or phone when something breaks.",
    },
  ];

  return (
    <section className="flex flex-col py-16 md:py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold md:font-bold text-foreground mb-3">
            Built for modern retail teams
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
            SEED will work across your stores and devices so your inventory,
            billing, and reporting all stay in sync.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {platformFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary/15">
                <item.icon size={26} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2.5">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
