"use client";

import {
  ServiceCard,
  SectionContainer,
  SectionHeader,
} from "@/components/shared";
import { marketingServices } from "@/lib/servicesData";

export default function CreativeSection() {
  return (
    <SectionContainer background="muted">
      <SectionHeader
        title="Marketing & Creative Services"
        description="Strategic marketing solutions to elevate your brand, engage your audience, and drive measurable growth"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {marketingServices.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
