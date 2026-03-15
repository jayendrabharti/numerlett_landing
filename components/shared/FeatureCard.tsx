"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={cn("h-full", className)}
      whileHover={{ y: -5 }}
    >
      <Card className="relative h-full flex flex-col overflow-hidden border border-border/50 bg-card/50 backdrop-blur-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <CardContent className="p-6 relative z-10 flex flex-col h-full">
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-5 border border-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-3 text-foreground tracking-tight">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
