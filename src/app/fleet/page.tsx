import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Fleet",
  description:
    "Sedans, SUVs, stretch limousines, passenger vans, and luxury executive vans. Through national affiliates, we accommodate groups of 26 to 55 passengers.",
  openGraph: {
    title: "Our Fleet — Luxury Sedans, Limousines & Executive Vans",
    description:
      "From luxury sedans to stretch limousines and executive vans. Through national affiliates, we accommodate groups of 2 to 55 passengers. No hidden fees.",
    url: "/fleet",
  },
  alternates: { canonical: "/fleet" },
};

const vehicles = [
  {
    name: "Lincoln Continental",
    passengers: "Up to 3 passengers · 3 bags",
    description:
      "Our luxury sedans provide refined comfort for airport transfers, corporate travel, and executive transportation. Ideal for individuals or small groups who demand a first-class experience.",
    features: ["Professional chauffeur", "Climate controlled", "Leather interior", "Complimentary water"],
    image: "https://images.pexels.com/photos/29566862/pexels-photo-29566862.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Luxury black sedan in elegant setting",
  },
  {
    name: "Ford Expedition",
    passengers: "Up to 6 passengers · 6 bags",
    description:
      "Spacious SUVs for those who need extra room — whether for luggage, larger groups, or mountain destinations. The perfect balance of luxury and utility.",
    features: ["Ample luggage space", "All-weather capable", "Premium seating", "Tinted privacy glass"],
    image: "https://images.pexels.com/photos/34561429/pexels-photo-34561429.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sleek black SUV in urban street setting",
  },
  {
    name: "Stretch Lincoln Limousines",
    passengers: "Up to 10 passengers · Limited luggage",
    description:
      "With our fleet of stretch limousines, we can accommodate any and all of your special events. Weddings, proms, anniversaries, nights out — arrive in unforgettable style.",
    features: ["Premium bar setup", "Mood lighting", "Premium sound system", "Privacy partition"],
    image: "https://images.pexels.com/photos/3821424/pexels-photo-3821424.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Stretch limousine exterior",
  },
  {
    name: "Ford Transit Passenger Vans",
    passengers: "Up to 14 passengers (10 with luggage)",
    description:
      "For larger groups of up to 14 people without luggage and up to 10 with luggage. These vans are perfect for running shuttles, group transfers, and cargo transport.",
    features: ["High capacity", "Luggage accommodation", "Shuttle-ready", "Group-friendly layout"],
    image: "https://images.pexels.com/photos/1187677/pexels-photo-1187677.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Ford Transit passenger van",
  },
  {
    name: "Executive Sprinter Vans",
    passengers: "Up to 9 passengers · 9 bags",
    description:
      "For groups of up to 9 people, our luxury executive vans offer comfortable high-back seats and premium amenities. The ideal choice for corporate groups and VIP transfers.",
    features: ["High-back leather seats", "Executive appointments", "USB charging", "Overhead storage"],
    image: "https://images.pexels.com/photos/17455633/pexels-photo-17455633.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Black Mercedes V-Class executive van",
  },
  {
    name: "Affiliate Vehicles",
    passengers: "26–55 passengers",
    description:
      "Through our national affiliate network, we can accommodate larger groups of 26 to 55 passengers with mini-coaches and full-size motor coaches. Perfect for conventions, corporate events, and group tours.",
    features: ["Mini-coaches available", "Full motor coaches", "National network", "Event coordination"],
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
            src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Mercedes-Benz vehicles parked in a row"
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
