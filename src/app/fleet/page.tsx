import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Luxury sedans, SUVs, and executive vans. Through national affiliates, we accommodate groups of 2 to 55 passengers.",
  openGraph: {
    title: "Our Fleet — Luxury Sedans, SUVs & Executive Vans",
    description:
      "From luxury sedans to SUVs and executive vans. Through national affiliates, we accommodate groups of 2 to 55 passengers. No hidden fees.",
    url: "/fleet",
  },
  alternates: { canonical: "/fleet" },
};

const vehicles = [
  {
    name: "Luxury Sedans",
    passengers: "Up to 3 passengers · 3 bags",
    description:
      "Our luxury sedans provide refined comfort for airport transfers, corporate travel, and executive transportation. Ideal for individuals or small groups who demand a first-class experience.",
    features: ["Professional chauffeur", "Climate controlled", "Leather interior", "Complimentary water"],
    image: "/images/replacement-assets/09_lincoln_continental_black.jpg",
    alt: "Lincoln Continental Black Label — Luxury Sedan",
  },
  {
    name: "Luxury SUVs",
    passengers: "6–7 passengers · 6 bags",
    description:
      "Spacious SUVs for those who need extra room — whether for luggage, larger groups, or mountain destinations. The perfect balance of luxury and utility.",
    features: ["Ample luggage space", "All-weather capable", "Premium seating", "Tinted privacy glass"],
    image: "/images/replacement-assets/05_ford_expedition_fleet.jpg",
    alt: "Black Ford Expedition in motion on urban street at dusk",
  },
  {
    name: "Luxury Executive Vans",
    passengers: "High Top walk-in · Up to 14 passengers + luggage",
    description:
      "Our high-top executive vans offer walk-in convenience and spacious seating for larger groups. Perfect for shuttles, group transfers, corporate events, and airport transportation.",
    features: ["Walk-in high-top ceiling", "High capacity seating", "Luggage accommodation", "Group-friendly layout"],
    image: "/images/replacement-assets/04_ford_transit_pro.jpg",
    alt: "Black Ford Transit High Roof executive passenger van",
  },
  {
    name: "Affiliate Vehicles",
    passengers: "26–55 passengers",
    description:
      "Through our national affiliate network, we can accommodate larger groups of 26 to 55 passengers with mini-coaches and full-size motor coaches. Perfect for conventions, corporate events, and group tours.",
    features: ["Mini-coaches available", "Full motor coaches", "National network", "Event coordination"],
    // PHOTO: Bobby to verify — motor coach
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    alt: "Full-size touring motor coach at dusk",
  },
];

export default function FleetPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Hero */}
        <section className="relative py-24 border-b border-border-subtle overflow-hidden">
          <Image
            src="/images/replacement-assets/06_fleet_overview.jpg"
            alt="Professional lineup of black luxury vehicles on tarmac at golden hour"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foundation/80" />
          <div className="relative max-w-4xl mx-auto px-6">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              Our Fleet
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              The Right Vehicle for Every Occasion.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              From luxury sedans and SUVs to high-top executive vans, our
              diverse fleet is maintained to the highest standards. Through
              national affiliates, we can accommodate groups of any size.
            </p>
          </div>
        </section>

        {/* Vehicle Cards */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vehicles.map((vehicle) => (
                <article
                  key={vehicle.name}
                  className="group bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-[var(--shadow-card)] hover:border-border-gold hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  </div>

                  <div className="p-8 pt-4">
                    {/* Header */}
                    <h2 className="font-display text-2xl font-medium text-white mb-2">
                      {vehicle.name}
                    </h2>
                    <p className="text-pink text-xs tracking-[0.15em] uppercase mb-4">
                      {vehicle.passengers}
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Note */}
        <section className="border-t border-border-subtle py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              Transparent Pricing
            </p>
            <p className="text-cream-muted text-lg leading-relaxed mb-2">
              Whatever your needs, prices for all services will be disclosed in
              advance and in writing. No hidden fees — EVER.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-elevated border-y border-border-gold py-16 shadow-[var(--shadow-cta-band)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              Ready to Reserve Your Vehicle?
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              Call us to discuss your transportation needs, or submit an online
              reservation request.
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
