import { Metadata } from "next";
import ProductCard from "@/components/shared/ProductCard";
import SectionContainer from "@/components/shared/SectionContainer";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Products | Numerlett",
  description:
    "Explore Numerlett's suite of software products designed to streamline business operations and drive growth.",
};

export default function ProductsPage() {
  const products = [
    {
      title: "SEED",
      tagline: "Retail software that feels calm, not chaotic",
      description:
        "A comprehensive retail management system built for modern retail teams. SEED helps you manage inventory, billing, and reporting in one place with real-time sync across all your locations.",
      href: "/products/seed",
      status: "coming-soon" as const,
    },
  ];

  return (
    <main>
      <SectionContainer className="pt-32">
        <SectionHeader
          title="Our Products"
          description="Innovative software solutions designed to solve real business challenges and empower teams to work smarter."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg">
            More products coming soon. We&apos;re constantly innovating to bring
            you powerful solutions.
          </p>
        </div>
      </SectionContainer>
    </main>
  );
}
