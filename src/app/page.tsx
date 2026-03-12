import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  openGraph: {
    title: "A Custom Coach | Denver & Boulder Luxury Transportation Since 1988",
    description:
      "Professional limousine and chauffeur services for airport transfers, corporate travel, mountain destinations, and special events. A+ BBB rated. Established 1988.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-foundation overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1554325474-bc42c4c4850a?auto=format&fit=crop&w=1920&q=80"
            alt="Denver cityscape at night"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foundation/75" />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-6 font-body">
              Established 1988 · Denver &amp; Boulder, Colorado
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-6">
              Denver&apos;s Premier
              <br />
              <span className="text-gold">Transportation</span>
            </h1>
            <p className="text-cream-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              Professional limousine and chauffeur services for airport transfers,
              corporate travel, mountain destinations, and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservations"
                className="inline-block bg-gradient-to-br from-gold to-[#B8962E] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-gold-glow-lg)] transition-all duration-300"
              >
                Book Now
              </a>
              <a
                href="tel:3037591376"
                className="inline-block border border-gold/40 bg-gold/5 text-cream px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase hover:bg-gold/10 hover:border-gold hover:text-gold hover:shadow-[0_0_16px_rgba(212,175,55,0.15)] transition-all duration-300"
              >
                Call 303-759-1376
              </a>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-surface border-y border-border-subtle py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "37+", label: "Years in Service" },
              { number: "A+", label: "BBB Rating" },
              { number: "24/7", label: "Live Dispatch" },
              { number: "3", label: "Companies Acquired" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-semibold text-gold leading-none mb-2">
                  {stat.number}
                </div>
                <div className="text-cream-muted text-xs tracking-[0.1em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Preview - TODO: Build out */}
        <section className="bg-foundation py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12">
              Whatever the Destination,<br />We&apos;ll Get You There.
            </h2>
            {/* TODO: Service cards */}
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-elevated border-y border-border-gold py-16 shadow-[var(--shadow-cta-band)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              A Live Voice, Every Time You Call.
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              No auto-attendant. No phone tree. Our team personally answers every call,
              24 hours a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3037591376"
                className="text-gold text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
              >
                Local: 303-759-1376
              </a>
              <span className="hidden sm:inline text-border-gold">|</span>
              <a
                href="tel:18006715466"
                className="text-gold text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
              >
                Toll Free: 1-800-671-5466
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
