"use client";

import Logo from "./Logo";
import { contactInfo } from "@/utils/data";
import {
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
  PhoneCallIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: LinkedinIcon, href: contactInfo.linkedin },
  { name: "Instagram", icon: InstagramIcon, href: contactInfo.instagram },
  { name: "Email", icon: MailIcon, href: `mailto:${contactInfo.mail}` },
  { name: "Phone", icon: PhoneCallIcon, href: `tel:${contactInfo.phone}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-border w-full bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand Section */}
          <div className="flex-1">
            <Logo className="mb-3" />
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Technical and marketing solutions that empower businesses to
              thrive in the digital landscape.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Numerlett. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            Proudly serving businesses worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
