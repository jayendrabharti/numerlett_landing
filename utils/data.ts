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

import { FaHome, FaCube, FaBlog, FaCogs } from "react-icons/fa";

export const appName = "Numerlett";

export const contactInfo = {
  mail: "numerlett@gmail.com",
  phone: "+91 8800534940",
  linkedin: "https://www.linkedin.com/company/numerlett",
  instagram: "https://www.instagram.com/numerlett.tech/",
};

export const NavBarLinks = [
  { name: "Home", href: "/", icon: FaHome },
  { name: "Products", href: "/products", icon: FaCube },
  { name: "Services", href: "/services", icon: FaCogs },
  { name: "Blogs", href: "/blogs", icon: FaBlog },
];

export const footerLinks = {
  product: [
    { name: "Products", href: "/products" },
    { name: "Features", href: "/#products" },
    { name: "Pricing", href: "#pricing" },
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
    name: "Basic",
    price: "₹19",
    period: "/month",
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 1,000 products",
      "Basic analytics",
      "Email support",
      "Mobile app access",
      "Basic integrations",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹59",
    period: "/month",
    description: "For growing businesses with advanced needs",
    features: [
      "Up to 10,000 products",
      "Advanced analytics",
      "Priority support",
      "Multi-location support",
      "API access",
      "Custom integrations",
      "Automated workflows",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large businesses with complex requirements",
    features: [
      "Unlimited products",
      "Custom analytics",
      "24/7 dedicated support",
      "White-label options",
      "Advanced security",
      "Custom development",
      "SLA guarantee",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, Fashion Forward",
    content:
      "SEED transformed our retail operations. We've seen a 40% increase in efficiency and our inventory management is now seamless.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Operations Director, TechGear",
    content:
      "The analytics dashboard gives us insights we never had before. It's like having a crystal ball for our business.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Store Manager, HomeDecor Plus",
    content:
      "Customer management has never been easier. Our customer satisfaction scores have improved significantly.",
    rating: 5,
  },
];
