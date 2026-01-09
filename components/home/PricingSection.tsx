"use client";

import { motion } from "framer-motion";
import { Check, PhoneCallIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/utils/data";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="flex flex-col py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold md:font-bold text-foreground mb-2">
            Simple plans, clear pricing
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
            Pricing is still being finalized. Early access users will get
            special rates and help shape the product.
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
                className={`flex flex-col flex-1 relative transition-all ${
                  plan.popular
                    ? "border-primary shadow-md hover:shadow-lg md:scale-[1.02]"
                    : "border-border hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="flex flex-row w-max bg-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                      Most popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-6 sm:pt-8">
                  <CardTitle className="text-lg sm:text-2xl">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-3 sm:mt-4">
                    {plan.price === "TBD" ? (
                      <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                        Pricing TBD
                      </span>
                    ) : (
                      <>
                        <span className="text-2xl sm:text-4xl font-bold">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground text-sm sm:text-base ml-1">
                          {plan.period}
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2 text-xs sm:text-sm">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pb-6 sm:pb-8 px-4 sm:px-6">
                  <ul className="flex flex-col space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm"
                      >
                        <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="block w-full mt-auto">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.name === "Enterprise"
                        ? "Discuss early access"
                        : "Join waitlist"}
                      <PhoneCallIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
