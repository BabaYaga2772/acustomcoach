import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Airport transfers, meet and greet, corporate travel, mountain destinations, weddings, and special events. Professional chauffeur service throughout Colorado.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Services</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Every ride, handled with care.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              With over 60 years of combined experience, we have the personnel and
              equipment to handle any transportation need in Colorado.
            </p>
          </div>
        </section>

        {/* TODO: Service detail sections — Airport, Meet & Greet, Mountain, Corporate, Weddings, Special Events */}
      </main>
      <Footer />
    </>
  );
}
