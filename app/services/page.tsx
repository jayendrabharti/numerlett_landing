"use client";

import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  Globe,
  Bot,
  Palette,
  Shield,
  Smartphone,
  Settings,
  ShoppingCart,
  ArrowRight,
  Check,
  Zap,
  Code,
  Brain,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const technicalServices = [
  {
    icon: Database,
    title: "ERP Solution",
    description:
      "Comprehensive Enterprise Resource Planning systems to streamline your business operations, integrate departments, and improve efficiency across your organization.",
    features: [
      "Custom ERP development",
      "System integration",
      "Process automation",
      "Real-time reporting",
      "Multi-module support",
    ],
    technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom Solutions"],
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description:
      "Build scalable Software-as-a-Service applications with modern cloud architecture, multi-tenancy, and subscription management capabilities.",
    features: [
      "Multi-tenant architecture",
      "Subscription management",
      "API development",
      "Cloud deployment",
      "Scalable infrastructure",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional websites and web applications built with modern technologies, responsive design, and optimized performance for your business needs.",
    features: [
      "Responsive web design",
      "Custom web applications",
      "Content management systems",
      "Performance optimization",
      "SEO implementation",
    ],
    technologies: ["React", "Next.js", "WordPress", "Shopify", "Custom CMS"],
  },
  {
    icon: Bot,
    title: "AI Automations & Solutions",
    description:
      "Intelligent automation solutions powered by artificial intelligence to optimize workflows, reduce manual tasks, and enhance decision-making processes.",
    features: [
      "Process automation",
      "Machine learning models",
      "Natural language processing",
      "Computer vision",
      "Predictive analytics",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "AutoGen"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that create intuitive, engaging, and accessible digital experiences for your customers and users.",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Visual design systems",
      "Accessibility compliance",
      "Mobile-first design",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
  },
  {
    icon: Shield,
    title: "Blockchain Development",
    description:
      "Secure and transparent blockchain solutions including smart contracts, DApps, and cryptocurrency integration for modern digital businesses.",
    features: [
      "Smart contract development",
      "DApp creation",
      "Token development",
      "Blockchain integration",
      "Security auditing",
    ],
    technologies: ["Ethereum", "Solidity", "Web3.js", "Polygon", "Hyperledger"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android with seamless user experiences and robust functionality.",
    features: [
      "Native iOS & Android apps",
      "Cross-platform development",
      "App store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
  },
  {
    icon: Settings,
    title: "DevOps & Security",
    description:
      "Robust DevOps practices and comprehensive security solutions to ensure reliable, secure, and efficient software delivery and operations.",
    features: [
      "CI/CD pipeline setup",
      "Infrastructure as code",
      "Security implementation",
      "Monitoring & logging",
      "Performance optimization",
    ],
    technologies: [
      "Docker",
      "Jenkins",
      "Terraform",
      "AWS Security",
      "Monitoring Tools",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Shopify",
    description:
      "Complete e-commerce solutions with custom online stores, payment integration, inventory management, and conversion optimization.",
    features: [
      "Custom store development",
      "Payment gateway integration",
      "Inventory management",
      "SEO optimization",
      "Analytics & reporting",
    ],
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "BigCommerce",
      "Custom Solutions",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, understand your business goals, and create a detailed project roadmap.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    description:
      "Our team designs the technical architecture and creates user-focused mockups and prototypes.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using best practices, conduct thorough testing, and ensure quality delivery.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description:
      "We deploy your solution and provide ongoing support, maintenance, and updates as needed.",
  },
];

const whyChooseUs = [
  {
    icon: Code,
    title: "Expert Development Team",
    description:
      "Skilled developers with expertise across modern technologies and frameworks.",
  },
  {
    icon: Zap,
    title: "Agile Methodology",
    description:
      "Fast, iterative development with regular updates and client feedback integration.",
  },
  {
    icon: Brain,
    title: "Innovation Focus",
    description:
      "Cutting-edge solutions using the latest technologies and industry best practices.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Robust security measures and compliance with industry standards and regulations.",
  },
];

export default function ServicesPage() {
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
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                Comprehensive technical solutions to transform your business
                with cutting-edge technology and innovative approaches tailored
                to your specific needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
              >
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Services Section */}
      <section className="flex flex-col py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Technical & Software Services
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              Comprehensive technology solutions to drive your business forward
              with innovation and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {technicalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex"
              >
                <Card className="flex flex-col flex-1 hover:shadow-lg transition-all duration-300 border-border group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3">
                      <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <service.icon size={24} className="sm:w-6 sm:h-6" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">
                        Key Features:
                      </h4>
                      <ul className="flex flex-col space-y-1">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-xs sm:text-sm"
                          >
                            <Check className="h-3 w-3 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <h4 className="font-semibold text-sm mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-col py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Why Choose Numerlett
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              We combine technical expertise with business understanding to
              deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
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
                <p className="text-muted-foreground text-xs sm:text-sm text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="flex flex-col py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Our Development Process
            </h2>
            <p className="text-base text-muted-foreground max-w-xl">
              A proven methodology that ensures successful project delivery from
              concept to deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary text-primary-foreground mb-3 sm:mb-4 font-bold text-lg sm:text-xl">
                  {step.step}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center">
                  {step.description}
                </p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-xl mb-6 sm:mb-8 opacity-90">
              Let's discuss how our technical expertise can help transform your
              business and achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
