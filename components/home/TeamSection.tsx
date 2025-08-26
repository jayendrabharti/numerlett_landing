"use client";

import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import RevealHero from "../animations/RevealHero";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    email: "sarah@numerlett.com",
    image: "/professional-woman-ceo.png",
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson",
      twitter: "https://twitter.com/sarahjohnson",
      github: "https://github.com/sarahjohnson",
    },
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    email: "michael@numerlett.com",
    image: "/professional-cto-headshot.png",
    social: {
      linkedin: "https://linkedin.com/in/michaelchen",
      twitter: "https://twitter.com/michaelchen",
      github: "https://github.com/michaelchen",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    email: "emily@numerlett.com",
    image: "/professional-woman-product-manager-headshot.png",
    social: {
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
    },
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    email: "david@numerlett.com",
    image: "/professional-developer-headshot.png",
    social: {
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <RevealHero className="text-4xl font-bold text-foreground mb-4 mx-auto">
            Meet Our Team
          </RevealHero>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate innovators behind Numerlett, dedicated to
            revolutionizing retail management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <h3 className="text-xl font-semibold text-card-foreground mb-1">
                {member.name}
              </h3>

              <p className="text-primary font-medium mb-2">{member.role}</p>

              <div className="flex items-center justify-center gap-1 mb-4 text-sm text-muted-foreground">
                <MailIcon className="w-4 h-4" />
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {member.email}
                </a>
              </div>

              <div className="flex justify-center gap-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
