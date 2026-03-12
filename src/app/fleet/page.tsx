import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Fleet | A Custom Coach",
  description:
    "Sedans, SUVs, stretch limousines, passenger vans, and luxury executive vans. Through national affiliates, we accommodate groups of 26 to 55 passengers.",
};

const vehicles = [
  {
    name: "Luxury Sedans",
    passengers: "Up to 3",
    description:
      "Our luxury sedans provide refined comfort for airport transfers, corporate travel, and executive transportation. Ideal for individuals or small groups who demand a first-class experience.",
    features: ["Professional chauffeur", "Climate controlled", "Leather interior", "Complimentary water"],
    icon: (
      <svg viewBox="0 0 64 32" fill="none" className="w-16 h-8 text-gold" aria-hidden="true">
        <path d="M8 24h4a4 4 0 0 0 8 0h24a4 4 0 0 0 8 0h4V18L50 10H18L8 18v6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="16" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="48" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 10l4-6h20l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "SUVs",
    passengers: "Up to 6",
    description:
      "Spacious SUVs for those who need extra room — whether for luggage, larger groups, or mountain destinations. The perfect balance of luxury and utility.",
    features: ["Ample luggage space", "All-weather capable", "Premium seating", "Tinted privacy glass"],
    icon: (
      <svg viewBox="0 0 64 36" fill="none" className="w-16 h-9 text-gold" aria-hidden="true">
        <path d="M6 28h4a4 4 0 0 0 8 0h28a4 4 0 0 0 8 0h4V16L52 8H16L6 16v12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8l2-4h28l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="32" y1="4" x2="32" y2="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Stretch Limousines",
    passengers: "Up to 10",
    description:
      "With our fleet of stretch limousines, we can accommodate any and all of your special events. Weddings, proms, anniversaries, nights out — arrive in unforgettable style.",
    features: ["Premium bar setup", "Mood lighting", "Premium sound system", "Privacy partition"],
    icon: (
      <svg viewBox="0 0 80 32" fill="none" className="w-20 h-8 text-gold" aria-hidden="true">
        <path d="M6 24h4a4 4 0 0 0 8 0h44a4 4 0 0 0 8 0h4V18L66 10H18L6 18v6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="66" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 10l4-6h38l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="34" y1="4" x2="34" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="44" y1="4" x2="44" y2="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Passenger Vans",
    passengers: "Up to 14",
    description:
      "For larger groups of up to 14 people without luggage and up to 10 with luggage. These vans are perfect for running shuttles, group transfers, and cargo transport.",
    features: ["High capacity", "Luggage accommodation", "Shuttle-ready", "Group-friendly layout"],
    icon: (
      <svg viewBox="0 0 64 40" fill="none" className="w-16 h-10 text-gold" aria-hidden="true">
        <path d="M6 32h4a4 4 0 0 0 8 0h28a4 4 0 0 0 8 0h4V14L52 6H16L6 14v18z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 6v8h40V6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="28" y1="6" x2="28" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="6" x2="40" y2="14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Luxury Executive Vans",
    passengers: "Up to 9",
    description:
      "For groups of up to 9 people, our luxury executive vans offer comfortable high-back seats and premium amenities. The ideal choice for corporate groups and VIP transfers.",
    features: ["High-back leather seats", "Executive appointments", "USB charging", "Overhead storage"],
    icon: (
      <svg viewBox="0 0 64 40" fill="none" className="w-16 h-10 text-gold" aria-hidden="true">
        <path d="M6 32h4a4 4 0 0 0 8 0h28a4 4 0 0 0 8 0h4V12L52 4H16L6 12v20z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="50" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 4v8h40V4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 16h20v4H22z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Affiliate Vehicles",
    passengers: "26–55",
    description:
      "Through our national affiliate network, we can accommodate larger groups of 26 to 55 passengers with mini-coaches and full-size motor coaches. Perfect for conventions, corporate events, and group tours.",
    features: ["Mini-coaches available", "Full motor coaches", "National network", "Event coordination"],
    icon: (
      <svg viewBox="0 0 80 40" fill="none" className="w-20 h-10 text-gold" aria-hidden="true">
        <path d="M6 32h4a4 4 0 0 0 8 0h44a4 4 0 0 0 8 0h4V10L68 4H16L6 10v22z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="14" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="66" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 4v6h52V4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="34" y1="4" x2="34" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="44" y1="4" x2="44" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="54" y1="4" x2="54" y2="10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function FleetPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Hero */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Our Fleet
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              The right vehicle for every occasion.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              From luxury sedans to stretch limousines and executive vans, our
              diverse fleet is maintained to the highest standards. Through
              national affiliates, we can accommodate groups of any size.
            </p>
          </div>
        </section>

        {/* Vehicle Cards */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <article
                  key={vehicle.name}
                  className="group bg-surface border border-border-subtle rounded-xl p-8 hover:border-border-gold transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {vehicle.icon}
                  </div>

                  {/* Header */}
                  <h2 className="font-display text-2xl font-medium text-white mb-2">
                    {vehicle.name}
                  </h2>
                  <p className="text-gold text-xs tracking-[0.15em] uppercase mb-4">
                    {vehicle.passengers} passengers
                  </p>

                  {/* Description */}
                  <p className="text-cream-muted text-[15px] leading-relaxed mb-6">
                    {vehicle.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {vehicle.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-cream-muted text-sm"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="border-t border-border-subtle py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Transparent Pricing
            </p>
            <p className="text-cream-muted text-lg leading-relaxed mb-2">
              Whatever your needs, prices for all services will be disclosed in
              advance and in writing. No hidden fees — ever.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-elevated border-y border-border-gold py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              Ready to reserve your vehicle?
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              Call us to discuss your transportation needs, or submit an online
              reservation request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservations"
                className="inline-block bg-gradient-to-br from-gold to-[#B8942F] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)] transition-all duration-300"
              >
                Book Now
              </a>
              <a
                href="tel:3037591376"
                className="inline-block border border-border-gold text-cream px-8 py-4 rounded-md text-sm font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
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
