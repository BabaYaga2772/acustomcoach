import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  openGraph: {
    title: "A Custom Coach | Denver & Boulder Luxury Transportation Since 1988",
    description:
      "Professional limousine and chauffeur services for airport transfers, corporate travel, mountain destinations, and special events. Serving Colorado and Wyoming. A+ rated. Established 1988.",
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
        <section className="relative min-h-[85vh] flex items-start justify-center pt-[10vh] md:pt-[12vh] bg-foundation overflow-hidden">
          <Image
            src="/images/replacement-assets/09_homepage_hero_dia_mountains.jpg"
            alt="Denver International Airport iconic white tent roof with Rocky Mountains backdrop"
            fill
            priority
            className="object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-foundation/70" />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-2">
              A Custom Coach
            </h1>
            <p className="font-display text-2xl md:text-4xl font-medium text-gold tracking-tight mb-4">
              Denver&apos;s Premier Transportation
            </p>
            <p className="text-pink text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-body" style={{textShadow: '0 1px 4px rgba(0,0,0,0.95), 0 2px 12px rgba(0,0,0,0.85), 0 0 20px rgba(0,0,0,0.6)'}}>
              Established 1988 · Serving Colorado &amp; Wyoming
            </p>
            <p className="text-cream-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              Professional limousine and chauffeur services for airport transfers,
              corporate travel, mountain destinations, and special events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservations"
                className="inline-block bg-gradient-to-br from-pink to-[#CC1076] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-pink-glow-lg)] transition-all duration-300"
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
              { number: "A+", label: "Rated" },
              { number: "24/7", label: "Live Dispatch" },
              { number: "3", label: "Companies Acquired" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-semibold text-pink leading-none mb-2">
                  {stat.number}
                </div>
                <div className="text-cream-muted text-xs tracking-[0.1em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Preview */}
        <section className="bg-foundation py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12 inline-block">
              Whatever the Destination,<br /><span className="block text-right">We&apos;ll Get You There.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  label: "Airport Transfers",
                  title: "Door-to-Door Airport Service",
                  description:
                    "Pickup and drop-off at any airport in Colorado — from DIA to private jet terminals. Flight tracking, on-time arrivals, and a professional chauffeur waiting when you land.",
                  features: ["Denver International Airport (DIA)", "Private jet & FBO terminals", "Flight tracking & delay monitoring"],
                  image: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=800&q=80",
                  alt: "Denver International Airport terminal interior with white tent roof",
                },
                {
                  label: "Corporate & Business",
                  title: "Executive Travel, Elevated",
                  description:
                    "Reliable ground transportation for executives, clients, and teams. Punctual, professional service that reflects your brand — from a single sedan to a full fleet.",
                  features: ["Executive sedan & SUV service", "Multi-vehicle coordination", "Corporate account billing"],
                  image: "https://images.unsplash.com/photo-1586740070162-41777c99457f?auto=format&fit=crop&w=800&q=80",
                  alt: "Downtown Denver skyscrapers and business district",
                },
                {
                  label: "Mountain Attractions",
                  title: "Colorado\u2019s Peaks, Without the Stress",
                  description:
                    "Vehicle transportation to any location in the Rocky Mountains and surrounding attractions. Ski resorts, mountain retreats, scenic tours — sit back and let us navigate.",
                  features: ["Ski resort transfers", "Mountain retreat access", "Year-round availability"],
                  image: "https://images.unsplash.com/photo-1653688107875-38c6dfe0e59b?auto=format&fit=crop&w=800&q=80",
                  alt: "Scenic Colorado mountain highway through the Rockies",
                },
              ].map((service) => (
                <a
                  key={service.label}
                  href="/services"
                  className="group bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:border-border-gold hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-surface/80 ${service.label === "Airport Transfers" ? "via-transparent" : "via-surface/30"} to-transparent`} />
                  </div>
                  <div className="p-8 pt-4">
                    <p className="text-pink text-[10px] tracking-[0.2em] uppercase font-medium mb-3">
                      {service.label}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-cream-muted text-[15px] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-cream-muted text-sm flex items-start gap-2"
                        >
                          <span className="text-gold mt-1 text-xs">&#9670;</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center">
              <a
                href="/services"
                className="inline-block border border-border-gold text-cream px-8 py-4 rounded-md text-sm font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold hover:shadow-[0_0_16px_rgba(212,175,55,0.12)] transition-all duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Fleet Highlight */}
        <section className="bg-surface border-y border-border-subtle py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">Our Fleet</p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
                  The Right Vehicle for Every Occasion.
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed mb-4">
                  From luxury sedans and SUVs to high-top executive vans, our
                  diverse fleet is maintained to the highest standards. Through national
                  affiliates, we accommodate groups from 2 to 55 passengers.
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {["Luxury Sedans & SUVs", "Luxury Executive Vans", "Motor Coaches via Affiliates"].map((item) => (
                    <li key={item} className="text-cream-muted text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="/fleet"
                  className="inline-block bg-gradient-to-br from-pink to-[#CC1076] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-pink-glow-lg)] transition-all duration-300"
                >
                  View Our Fleet
                </a>
              </div>
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
                <Image
                  src="/images/replacement-assets/06_fleet_overview.jpg"
                  alt="Professional lineup of black luxury vehicles on tarmac at golden hour"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
              </div>
            </div>
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
                href="tel:3036695144"
                className="text-gold text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
              >
                Text: (303) 669-5144
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
