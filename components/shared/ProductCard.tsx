"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  tagline: string;
  description: string;
  href: string;
  status?: "available" | "coming-soon" | "beta";
  index?: number;
  className?: string;
}

export default function ProductCard({
  title,
  tagline,
  description,
  href,
  status = "available",
  index = 0,
  className,
}: ProductCardProps) {
  // Default icon
  const Icon = Package;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn("h-full", className)}
    >
      <Card className="h-full border border-border/50 bg-card hover:border-primary/20 transition-all duration-300 group relative overflow-hidden">
        {status !== "available" && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
              {status === "coming-soon" ? "Coming Soon" : "Beta"}
            </span>
          </div>
        )}

        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary/15 group-hover:scale-105 duration-300">
            <Icon className="w-8 h-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">
            {title}
          </CardTitle>
          <p className="text-sm font-medium text-primary">{tagline}</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">{description}</p>

          <Link href={href} className="block">
            <Button
              variant="outline"
              className="w-full group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
