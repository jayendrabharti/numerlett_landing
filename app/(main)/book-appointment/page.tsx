import { Metadata } from "next";
import SectionContainer from "@/components/shared/SectionContainer";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Appointment | Numerlett",
  description:
    "Schedule a consultation with our team to discuss how Numerlett can help transform your business.",
};

export default function BookAppointmentPage() {
  return (
    <main>
      <SectionContainer className="pt-32 min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
            <Calendar className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Book an Appointment
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl">Coming Soon</p>

          <p className="text-muted-foreground max-w-xl">
            We&apos;re setting up our appointment booking system. In the
            meantime, feel free to reach out to us through our{" "}
            <a href="/contact" className="text-primary hover:underline">
              contact page
            </a>
            .
          </p>
        </div>
      </SectionContainer>
    </main>
  );
}
