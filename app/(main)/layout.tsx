import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Aurora from "@/components/ui/Aurora";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Aurora colorStops={["#264f40", "#40866c", "#e8f5f0"]} />
      <Main
        className={cn(
          "flex w-full flex-col items-center overflow-y-auto overflow-x-hidden flex-1 relative z-10"
        )}
      >
        <NavBar />
        {children}
        <Footer />
      </Main>
    </>
  );
}
