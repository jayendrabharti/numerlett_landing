import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneCallIcon,
  TwitterIcon,
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
    { name: "Features", href: "#products" },
    { name: "Pricing", href: "#pricing" },
    { name: "API Documentation", href: "#docs" },
    { name: "Integrations", href: "#integrations" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Contact", href: "#contact" },
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
