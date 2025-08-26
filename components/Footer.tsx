"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";
import { footerLinks, socialLinks } from "@/utils/data";

export default function Footer() {
  return (
    <footer className="bg-sidebar border-t border-sidebar-border w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Logo />
            <motion.p
              className="text-muted-foreground mb-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Revolutionizing retail management with innovative software
              solutions. Empowering businesses to thrive in the digital age.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-sidebar-foreground uppercase tracking-wider mb-4">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-sidebar-border mt-12 pt-8 sm:px-20 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Numerlett. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0 gap-2 flex flex-row items-center">
            Made with ❤️ for retail businesses in INDIA{" "}
            <img src={`/indian-flag.svg`} className="size-6" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
