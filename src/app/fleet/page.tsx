import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Sedans, SUVs, stretch limousines, passenger vans, and luxury executive vans. Through national affiliates, we accommodate groups of 26 to 55 passengers.",
};

export default function FleetPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Our Fleet</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              The right vehicle for every occasion.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              From luxury sedans to stretch limousines and executive vans, our diverse
              fleet is maintained to the highest standards.
            </p>
          </div>
        </section>

        {/* TODO: Vehicle cards — Sedans, SUVs, Stretch Limos, Passenger Vans (14-pax), Luxury Executive Vans (9-pax), Affiliate vehicles (26-55 pax) */}
      </main>
      <Footer />
    </>
  );
}
