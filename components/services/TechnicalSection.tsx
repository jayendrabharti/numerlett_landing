"use client";

import {
  ServiceCard,
  SectionContainer,
  SectionHeader,
} from "@/components/shared";
import { technicalServices } from "@/lib/servicesData";

export default function TechnicalSection() {
  return (
    <SectionContainer background="muted">
      <SectionHeader
        title="Technical & Software Services"
        description="Comprehensive technology solutions to drive your business forward with innovation and expertise"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {technicalServices.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
