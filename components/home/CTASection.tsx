"use client";

import { motion } from "framer-motion";
import { Calendar, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  "Free consultation with our experts",
  "Tailored solutions for your business",
  "Transparent pricing and timelines",
  "Ongoing support and maintenance",
];

export default function CTASection() {
  return (
    <section id="cta" className="py-20 md:py-28 bg-muted/30 w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Numerlett can help you achieve your goals.
            Book a free consultation or get in touch with our team today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                {benefit}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href={"/book-appointment"}>
              <Button size="lg" className="rounded-full text-lg px-8">
                Book a Consultation
                <Calendar className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href={"/contact"}>
              <Button
                variant={"outline"}
                size="lg"
                className="rounded-full text-lg px-8"
              >
                Contact Us
                <MessageSquare className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
