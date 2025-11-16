import RevealHero from "@/components/animations/RevealHero";

export default async function BlogsPage() {
  return (
    <section className="h-dvh p-4 flex flex-col gap-3">
      <RevealHero className="font-extrabold text-3xl">Blogs</RevealHero>
      <span>No Blogs Yet</span>
    </section>
  );
}
