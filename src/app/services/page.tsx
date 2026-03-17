import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Airport transfers, meet and greet, corporate travel, mountain destinations, weddings, and special events. Professional chauffeur service throughout Colorado.",
  openGraph: {
    title: "Denver Limousine & Transportation Services — A Custom Coach",
    description:
      "Airport transfers, meet & greet, mountain destinations, corporate travel, weddings, and special events. 24-hour dispatch. Professional chauffeurs throughout Colorado.",
    url: "/services",
  },
  alternates: { canonical: "/services" },
};

const services = [
  {
    label: "Airport Transfers",
    title: "Door-to-Door Airport Service",
    description:
      "We arrange pickup and drop-off at any airport location in the state of Colorado — from Denver International Airport to any private jet terminal. Flight tracking, on-time arrivals, and a professional chauffeur waiting when you land.",
    features: [
      "Denver International Airport (DIA)",
      "Private jet & FBO terminals",
      "Flight tracking & delay monitoring",
      "Meet at Ground Transportation booth",
    ],
    image: "https://images.unsplash.com/photo-1662593614056-f3514348b0d5?auto=format&fit=crop&w=800&q=80",
    alt: "Denver International Airport terminal interior with white tent roof",
  },
  {
    label: "Meet & Greet",
    title: "First Impressions, Handled",
    description:
      "We meet your clients at a designated location, assist with luggage, and escort them to their vehicle. For larger groups, our greeters gather everyone and direct them to the appropriate vehicle or destination.",
    features: [
      "Luggage assistance",
      "Client escort to vehicle",
      "Group coordination for large parties",
      "Custom signage available",
    ],
    image: "https://images.unsplash.com/photo-1730800328198-f9efbf9db53f?auto=format&fit=crop&w=800&q=80",
    alt: "Chauffeur assisting passenger at luxury vehicle outside hotel entrance",
  },
  {
    label: "Mountain Attractions",
    title: "Colorado's Peaks, Without the Stress",
    description:
      "We arrange vehicle transportation to any location in the Rocky Mountains and surrounding attractions. Ski resorts, mountain retreats, scenic tours — sit back and let us navigate the passes.",
    features: [
      "Ski resort transfers",
      "Mountain retreat & resort access",
      "Scenic tour transportation",
      "Year-round availability",
    ],
    image: "https://images.unsplash.com/photo-1653688107875-38c6dfe0e59b?auto=format&fit=crop&w=800&q=80",
    alt: "Scenic Colorado mountain highway through the Rockies",
  },
  {
    label: "Corporate & Business",
    title: "Executive Travel, Elevated",
    description:
      "Reliable ground transportation for executives, clients, and teams. Whether it's a single sedan to a board meeting or a fleet for a company event, we deliver punctual, professional service that reflects your brand.",
    features: [
      "Executive sedan & SUV service",
      "Client & VIP transportation",
      "Multi-vehicle coordination",
      "Corporate account billing",
    ],
    image: "https://images.unsplash.com/photo-1586740070162-41777c99457f?auto=format&fit=crop&w=800&q=80",
    alt: "Downtown Denver skyscrapers and business district",
  },
  {
    label: "Weddings",
    title: "Your Day, Your Way There",
    description:
      "From the bridal party's arrival to the grand exit, we handle every transportation detail so you can focus on the celebration. Stretch limousines, luxury sedans, and passenger vans for the full wedding party.",
    features: [
      "Bridal party transportation",
      "Ceremony-to-reception transfers",
      "Guest shuttle service",
      "Stretch limousine availability",
    ],
    image: "https://images.unsplash.com/photo-1731515672817-0491d19c9f19?auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor wedding ceremony with guests and mountain backdrop",
  },
  {
    label: "Special Events",
    title: "Any Occasion, Any Size",
    description:
      "Concerts, galas, family reunions, sporting events, nights out — whatever the occasion, we provide safe, comfortable, and punctual transportation. Through national affiliates, we accommodate groups from 2 to 55 passengers.",
    features: [
      "Concerts & sporting events",
      "Galas & formal events",
      "Family reunions",
      "Groups up to 55 via affiliates",
    ],
    image: "https://images.unsplash.com/photo-1701919747996-1e9531dde0a9?auto=format&fit=crop&w=800&q=80",
    alt: "Red Rocks Amphitheatre seating and stage in Morrison, Colorado",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Page Header */}
        <section className="relative py-24 border-b border-border-subtle overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1739841400344-91355156610f?auto=format&fit=crop&w=1920&q=80"
            alt="Denver International Airport exterior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foundation/80" />
          <div className="relative max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Services</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Every Ride, Handled with Care.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              With a combined experience of over 60 years, we have the personnel and
              equipment to provide a wide range of professional transportation services
              throughout the state of Colorado.
            </p>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.label}
                className="group bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:border-border-gold hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                </div>
                <div className="p-8 pt-4">
                  <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-medium mb-3">
                    {service.label}
                  </p>
                  <h2 className="font-display text-2xl font-medium text-white mb-4">
                    {service.title}
                  </h2>
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
              </div>
            ))}
          </div>
        </section>

        {/* Chauffeur Standards */}
        <section className="py-24 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Our Standard</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
              Professional to the Last Detail.
            </h2>
            <p className="text-cream-muted text-[15px] leading-relaxed mb-10 max-w-xl mx-auto">
              Our chauffeurs wear the traditional black suit, white shirt, black shoes,
              and conservative tie. With 24-hour dispatch, our drivers stay in constant
              communication with our staff — no matter the hour.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "24hr", label: "Dispatch" },
                { number: "37+", label: "Years of Service" },
                { number: "A+", label: "BBB Rating" },
                { number: "0", label: "Hidden Fees" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-semibold text-gold leading-none mb-2">
                    {stat.number}
                  </div>
                  <div className="text-cream-muted text-xs tracking-[0.1em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-elevated border-y border-border-gold py-16 shadow-[var(--shadow-cta-band)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              Ready to Book?
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              Whatever your transportation needs, a live voice is always just a phone call away.
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
                className="inline-block border border-border-gold text-cream px-8 py-4 rounded-md text-sm font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold hover:shadow-[0_0_16px_rgba(212,175,55,0.12)] transition-all duration-300"
              >
                Call 303-759-1376
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
