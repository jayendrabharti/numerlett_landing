import {
  BotIcon,
  CheckIcon,
  CloudIcon,
  DatabaseIcon,
  GlobeIcon,
  PaletteIcon,
  SettingsIcon,
  ShieldIcon,
  ShoppingCartIcon,
  SmartphoneIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const technicalServices = [
  {
    icon: DatabaseIcon,
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
    icon: CloudIcon,
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
    icon: GlobeIcon,
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
    icon: BotIcon,
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
    icon: PaletteIcon,
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
    icon: ShieldIcon,
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
    icon: SmartphoneIcon,
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
    icon: SettingsIcon,
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
    icon: ShoppingCartIcon,
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

export default function TechnicalSection() {
  return (
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
                          <CheckIcon className="h-3 w-3 text-primary flex-shrink-0" />
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
  );
}
