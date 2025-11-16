import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <Main
        className={cn(
          "flex w-full flex-col items-center overflow-y-auto overflow-x-hidden flex-1"
        )}
      >
        {children}
        <Footer />
      </Main>
    </>
  );
}
