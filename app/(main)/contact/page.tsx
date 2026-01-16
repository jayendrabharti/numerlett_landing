"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  MessageSquare,
  Users,
  Headphones,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "numerlett@gmail.com",
    description: "Send us an email and we'll respond within 24 hours",
    link: "mailto:numerlett@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 8800534940",
    description: "Speak directly with our team during business hours",
    link: "tel:+918800534940",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with us",
    description: "Follow us for updates and industry insights",
    link: "https://www.linkedin.com/company/numerlett",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@numerlett.tech",
    description: "See our latest updates and behind-the-scenes content",
    link: "https://www.instagram.com/numerlett.tech/",
  },
];

const supportOptions = [
  {
    icon: MessageSquare,
    title: "General Inquiries",
    description: "Questions about our products or services",
    contact: "numerlett@gmail.com",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Need help with our products or technical issues",
    contact: "numerlett@gmail.com",
  },
  {
    icon: Users,
    title: "Sales & Partnerships",
    description: "Interested in partnerships or enterprise solutions",
    contact: "+91 8800534940",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col pt-20 pb-8 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Have questions about our services or need support? We're here to
                help you transform your business with our technical and
                marketing solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="flex flex-col py-12 bg-muted/30 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Contact Information
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="flex flex-col flex-1 hover:shadow-lg transition-all duration-300 border-border">
                  <CardContent className="flex flex-col items-center text-center p-4 sm:p-6">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 text-primary mb-3">
                      <contact.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      {contact.title}
                    </h3>
                    <a
                      href={contact.link}
                      target={
                        contact.link.startsWith("http") ? "_blank" : "_self"
                      }
                      rel={
                        contact.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="text-primary hover:text-primary/80 font-medium block mb-2 transition-colors text-sm sm:text-base"
                    >
                      {contact.value}
                    </a>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {contact.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Support Options */}
      <section className="flex flex-col py-12 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <Card className="flex flex-col flex-1">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl sm:text-2xl">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Options and Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-6 lg:space-y-8"
            >
              {/* Support Options */}
              <Card className="flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl">
                    How Can We Help?
                  </CardTitle>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Choose the best contact method for your specific needs
                  </p>
                </CardHeader>
                <CardContent className="flex flex-col space-y-3 sm:space-y-4">
                  {supportOptions.map((option, index) => (
                    <div
                      key={option.title}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/50"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <option.icon size={16} className="sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm sm:text-base">
                          {option.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                          {option.description}
                        </p>
                        <p className="text-xs sm:text-sm font-medium text-primary">
                          {option.contact}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                    <Clock size={16} className="sm:w-5 sm:h-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2 sm:space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-border last:border-b-0 gap-1 sm:gap-0"
                      >
                        <span className="font-medium text-sm sm:text-base">
                          {schedule.day}
                        </span>
                        <span className="text-muted-foreground text-sm sm:text-base">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      <strong>Note:</strong> For urgent technical support
                      outside office hours, please email us and we'll respond as
                      soon as possible.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="flex flex-col">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                    <MapPin size={16} className="sm:w-5 sm:h-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    We're a remote-first company with team members across India.
                    Our headquarters is based in New Delhi.
                  </p>
                  <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <p className="font-medium text-sm sm:text-base">
                      Numerlett Technologies
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      New Delhi, India
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col py-12 bg-muted/30 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="flex flex-col space-y-4 sm:space-y-6">
            {[
              {
                question: "What services does Numerlett offer?",
                answer:
                  "We provide comprehensive technical services including software development, AI automations, cloud solutions, and UI/UX design, alongside marketing services like SEO, social media management, content creation, and branding.",
              },
              {
                question: "Do you offer technical support?",
                answer:
                  "Yes! We provide comprehensive technical support via email and phone during business hours. All our clients receive dedicated support throughout their project lifecycle and beyond.",
              },
              {
                question: "How do I get started with a project?",
                answer:
                  "Simply reach out through our contact form or book a consultation. We'll schedule a discovery call to understand your requirements, provide a tailored proposal, and outline the next steps for your project.",
              },
              {
                question: "What industries do you work with?",
                answer:
                  "We work with businesses across various industries including retail, healthcare, finance, education, e-commerce, and more. Our solutions are tailored to meet the unique needs of each sector.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="flex flex-col flex-1">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-base sm:text-lg mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mt-6 sm:mt-8"
          >
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Don't see your question here?
            </p>
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-2 sm:px-8 sm:py-3"
            >
              Contact Support
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
