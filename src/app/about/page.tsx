import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A Custom Coach has been Denver and Boulder's trusted luxury transportation provider since 1988. Learn about owner John Hafer and our 37+ year legacy.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Page Header */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              A legacy built on service.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              {/* TODO: Rewrite from recovered content */}
              Established in 1988, A Custom Coach has become a leading force in Colorado&apos;s
              luxury transportation industry.
            </p>
          </div>
        </section>

        {/* TODO: Owner bio, acquisitions, industry credentials, affiliations */}
      </main>
      <Footer />
    </>
  );
}
