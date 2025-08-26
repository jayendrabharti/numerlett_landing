"use client";

import { motion } from "framer-motion";
import {
  Check,
  Star,
  ArrowRight,
  Monitor,
  Smartphone,
  Cloud,
  Headphones,
  PhoneCallIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { features, pricingPlans, testimonials } from "@/utils/data";
import Link from "next/link";
import ScrollToSection from "@/components/ScrollToSection";

export default function ProductsPage() {
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
                Meet <span className="text-primary">SEED</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                The comprehensive retail management system that transforms how
                you run your business. From inventory to customer relationships,
                SEED handles it all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Powerful Features for Every Aspect of Your Business
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              Discover how SEED's comprehensive feature set can transform your
              retail operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="flex flex-col flex-1 hover:shadow-lg transition-all duration-300 border-border">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <feature.icon size={24} className="sm:w-8 sm:h-8" />
                      </div>
                      <div className="min-w-0">
                        <CardTitle className="text-lg sm:text-xl">
                          {feature.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                      {feature.description}
                    </p>
                    <ul className="flex flex-col space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm"
                        >
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="flex flex-col py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Built for Modern Retail
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              SEED works seamlessly across all your devices and platforms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Monitor,
                title: "Desktop App",
                description:
                  "Full-featured desktop application for comprehensive management",
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "iOS and Android apps for on-the-go management",
              },
              {
                icon: Cloud,
                title: "Cloud-Based",
                description:
                  "Access your data from anywhere with cloud synchronization",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description:
                  "Round-the-clock customer support when you need it",
              },
            ].map((item, index) => (
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
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Trusted by Retailers Worldwide
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              See what our customers have to say about their SEED experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="flex flex-col flex-1">
                  <CardContent className="flex flex-col flex-1 p-4 sm:p-6">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-1">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="flex flex-col py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Choose Your Plan
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              Select the perfect plan for your business needs. All plans include
              our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card
                  className={`flex flex-col flex-1 relative ${
                    plan.popular
                      ? "border-primary shadow-lg scale-105"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="flex flex-row w-max bg-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-lg sm:text-2xl">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-3 sm:mt-4">
                      <span className="text-2xl sm:text-4xl font-bold">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm sm:text-base">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-2 text-xs sm:text-sm">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <ul className="flex flex-col space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90"
                          : "variant-outline"
                      }`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
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
              Ready to Transform Your Retail Business?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90">
              Join thousands of retailers who have already revolutionized their
              operations with SEED.
            </p>

            <Link href={"/contact"}>
              <Button size="lg" className="border-border border shadow-md">
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
