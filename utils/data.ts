import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneCallIcon,
  TwitterIcon,
  BarChart3,
  ShoppingCart,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Package,
  CreditCard,
} from "lucide-react";

export const appName = "Numerlett";

export const contactInfo = {
  mail: "numerlett@gmail.com",
  phone: "+91 8800534940",
  linkedin: "https://www.linkedin.com/company/numerlett",
  instagram: "https://www.instagram.com/numerlett.tech/",
};

export const footerLinks = {
  product: [
    { name: "Products", href: "/#features" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "API Documentation", href: "#docs" },
    { name: "Integrations", href: "#integrations" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Webinars", href: "#webinars" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
};

export const socialLinks = [
  { name: "Phone", icon: PhoneCallIcon, href: `tel:${contactInfo.phone}` },
  { name: "Email", icon: MailIcon, href: `mailto:${contactInfo.mail}` },
  { name: "LinkedIn", icon: LinkedinIcon, href: contactInfo.linkedin },
  { name: "Instagram", icon: InstagramIcon, href: contactInfo.instagram },
  { name: "Twitter", icon: TwitterIcon, href: "#" },
  { name: "GitHub", icon: GithubIcon, href: "#" },
];

export const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your business performance with real-time analytics, customizable dashboards, and predictive analytics to forecast trends.",
    benefits: [
      "Real-time sales tracking",
      "Customer behavior analytics",
      "Predictive inventory forecasting",
      "Custom KPI dashboards",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Inventory Management",
    description:
      "Track stock levels, automate reordering, and optimize your inventory across multiple locations with smart alerts and automated workflows.",
    benefits: [
      "Multi-location inventory tracking",
      "Automated reorder points",
      "Barcode scanning support",
      "Supplier management",
    ],
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Build stronger relationships with comprehensive customer profiles, purchase history tracking, and personalized marketing campaigns.",
    benefits: [
      "360° customer profiles",
      "Purchase history tracking",
      "Loyalty program integration",
      "Targeted marketing campaigns",
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Accept payments seamlessly with integrated POS systems, multiple payment gateway support, and secure transaction processing.",
    benefits: [
      "Multi-gateway support",
      "Mobile payment processing",
      "Subscription billing",
      "Fraud protection",
    ],
  },
  {
    icon: Package,
    title: "Supply Chain Management",
    description:
      "Streamline your supply chain operations with automated vendor management, procurement workflows, and delivery tracking.",
    benefits: [
      "Vendor performance tracking",
      "Automated purchase orders",
      "Delivery tracking",
      "Quality control workflows",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales Optimization",
    description:
      "Boost sales with AI-powered recommendations, dynamic pricing strategies, and conversion optimization tools.",
    benefits: [
      "AI-powered recommendations",
      "Dynamic pricing rules",
      "Sales performance tracking",
      "Conversion optimization",
    ],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security with compliance support for retail industry standards, data encryption, and audit trails.",
    benefits: [
      "End-to-end encryption",
      "GDPR compliance",
      "Audit trail logging",
      "Role-based access control",
    ],
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Automate routine tasks and workflows to focus on growing your business with intelligent automation and workflow management.",
    benefits: [
      "Workflow automation",
      "Task scheduling",
      "Email notifications",
      "Integration APIs",
    ],
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "TBD",
    period: "",
    description: "For small shops and single-location stores",
    features: [
      "Core inventory management",
      "Basic billing and invoicing",
      "Sales reports",
      "Mobile app access",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "TBD",
    period: "",
    description: "For stores with multiple locations or channels",
    features: [
      "Everything in Starter",
      "Multi-location support",
      "Advanced reporting",
      "Supplier management",
      "Priority support",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For larger operations with specific needs",
    features: [
      "Everything in Business",
      "Custom integrations",
      "Dedicated support",
      "Custom features",
      "Training and onboarding",
      "SLA guarantee",
    ],
    popular: false,
  },
];
