import {
  BrushIcon,
  CheckIcon,
  MailIcon,
  MegaphoneIcon,
  MousePointerClickIcon,
  PaletteIcon,
  SearchIcon,
  TrendingUpIcon,
  UsersIcon,
  VideoIcon,
  BarChart3Icon,
  StarIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const creativeServices = [
  {
    icon: SearchIcon,
    title: "Digital Marketing & SEO",
    description:
      "Comprehensive digital marketing strategies including search engine optimization, paid advertising, and performance tracking to boost your online presence and drive qualified traffic.",
    features: [
      "Search engine optimization (SEO)",
      "Google Ads & PPC campaigns",
      "Social media advertising",
      "Conversion rate optimization",
      "Analytics & reporting",
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
    ],
  },
  {
    icon: UsersIcon,
    title: "Social Media Marketing",
    description:
      "End-to-end social media management and community building across all major platforms to engage your audience and build brand loyalty.",
    features: [
      "Content creation & scheduling",
      "Community management",
      "Influencer marketing",
      "Social media advertising",
      "Brand reputation monitoring",
    ],
    technologies: [
      "Meta Business",
      "LinkedIn Ads",
      "TikTok Ads",
      "Hootsuite",
      "Buffer",
    ],
  },
  {
    icon: PaletteIcon,
    title: "Graphic Design & Branding",
    description:
      "Professional visual identity and graphic design services that create memorable brand experiences and consistent visual communication across all touchpoints.",
    features: [
      "Logo & brand identity design",
      "Marketing collateral design",
      "Social media graphics",
      "Print design materials",
      "Brand guidelines creation",
    ],
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "Canva Pro",
      "Sketch",
      "InDesign",
    ],
  },
  {
    icon: VideoIcon,
    title: "Video & Content Creation",
    description:
      "Engaging video content and multimedia production including explainer videos, social media content, and promotional materials to captivate your audience.",
    features: [
      "Explainer video production",
      "Social media video content",
      "Animation & motion graphics",
      "Podcast production",
      "Content strategy development",
    ],
    technologies: [
      "After Effects",
      "Premiere Pro",
      "Final Cut Pro",
      "Lottie",
      "Audacity",
    ],
  },
  {
    icon: MailIcon,
    title: "Email Marketing & Automation",
    description:
      "Strategic email marketing campaigns and automated workflows to nurture leads, retain customers, and drive conversions through personalized communication.",
    features: [
      "Email campaign design",
      "Marketing automation setup",
      "Lead nurturing workflows",
      "A/B testing optimization",
      "Performance analytics",
    ],
    technologies: [
      "Mailchimp",
      "HubSpot",
      "Klaviyo",
      "ConvertKit",
      "ActiveCampaign",
    ],
  },
  {
    icon: TrendingUpIcon,
    title: "Performance Marketing",
    description:
      "Data-driven marketing campaigns focused on measurable results, including growth hacking strategies and conversion optimization for maximum ROI.",
    features: [
      "Growth hacking experiments",
      "Funnel optimization",
      "Attribution modeling",
      "Customer acquisition strategies",
      "Retention marketing",
    ],
    technologies: [
      "Google Analytics 4",
      "Mixpanel",
      "Hotjar",
      "Optimizely",
      "Amplitude",
    ],
  },
  {
    icon: MegaphoneIcon,
    title: "PR & Media Relations",
    description:
      "Strategic public relations and media outreach to build brand credibility, manage reputation, and secure valuable media coverage for your business.",
    features: [
      "Press release writing",
      "Media outreach campaigns",
      "Crisis communication",
      "Thought leadership content",
      "Industry relationship building",
    ],
    technologies: ["PR Newswire", "HARO", "Cision", "Meltwater", "Brand24"],
  },
  {
    icon: MousePointerClickIcon,
    title: "Web Analytics & Optimization",
    description:
      "Comprehensive website analytics and conversion rate optimization to maximize your digital performance and improve user experience across all touchpoints.",
    features: [
      "Website performance auditing",
      "User behavior analysis",
      "Landing page optimization",
      "Heat mapping & user testing",
      "Conversion funnel analysis",
    ],
    technologies: [
      "Google Analytics",
      "Google Tag Manager",
      "Hotjar",
      "Crazy Egg",
      "Unbounce",
    ],
  },
  {
    icon: StarIcon,
    title: "Online Reputation Management",
    description:
      "Proactive reputation monitoring and management across all digital platforms to maintain positive brand perception and handle customer feedback effectively.",
    features: [
      "Review monitoring & response",
      "Sentiment analysis",
      "Crisis management",
      "Positive content campaigns",
      "Brand mention tracking",
    ],
    technologies: [
      "Google My Business",
      "Trustpilot",
      "ReviewTrackers",
      "Mention",
      "Brandwatch",
    ],
  },
];

export default function CreativeSection() {
  return (
    <section className="flex flex-col py-12 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Creative & Marketing Services
          </h2>
          <p className="text-base text-muted-foreground max-w-xl">
            Strategic marketing and creative solutions to amplify your brand and
            drive meaningful engagement with your target audience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {creativeServices.map((service, index) => (
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
                      Tools & Platforms:
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
