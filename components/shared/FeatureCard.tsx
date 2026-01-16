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
    >
      <Card className="h-full border border-border/50 bg-card hover:border-primary/20 transition-colors duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary/15">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
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
