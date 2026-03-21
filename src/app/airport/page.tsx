import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "DIA Airport Transfers",
  description:
    "Professional airport transfer service to and from Denver International Airport (DIA), private jet terminals, and all Colorado airports. Flight tracking, meet and greet, 24/7 availability.",
  openGraph: {
    title: "Denver Airport Transfers — DIA Limousine & Car Service",
    description:
      "Door-to-door airport transportation throughout Colorado. DIA, private jet terminals, Colorado Springs, Eagle-Vail. Flight tracking, meet & greet, 24/7 live dispatch.",
    url: "/airport",
  },
  alternates: { canonical: "/airport" },
};

const airports = [
  {
    name: "Denver International Airport (DIA)",
    code: "DEN",
    description:
      "Colorado's primary commercial airport and our most requested route. Full curbside and Ground Transportation booth pickup.",
  },
  {
    name: "Rocky Mountain Metropolitan Airport",
    code: "BJC",
    description:
      "Broomfield/Boulder area general aviation airport. Popular for private jet and charter arrivals.",
  },
  {
    name: "Centennial Airport",
    code: "APA",
    description:
      "One of the busiest general aviation airports in the country, serving the Denver Tech Center and south metro area.",
  },
  {
    name: "Colorado Springs Airport",
    code: "COS",
    description:
      "Full-service commercial airport south of Denver. We provide transfers to Denver, Boulder, and mountain destinations.",
  },
  {
    name: "Eagle County Regional Airport",
    code: "EGE",
    description:
      "Gateway to Vail and Beaver Creek ski resorts. Seasonal commercial service plus year-round private aviation.",
  },
  {
    name: "Private Jet & FBO Terminals",
    code: "FBO",
    description:
      "We serve all fixed-base operators across Colorado. Direct ramp access where permitted, plus terminal pickup at every FBO.",
  },
];

export default function AirportPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Hero */}
        <section className="relative py-24 border-b border-border-subtle overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1662593614056-f3514348b0d5?auto=format&fit=crop&w=1920&q=80"
            alt="Denver International Airport terminal with iconic white tent roof"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foundation/80" />
          <div className="relative max-w-4xl mx-auto px-6">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              Airport Transfers
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Denver&apos;s Most Trusted Airport Car Service.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              Professional door-to-door transportation to and from Denver
              International Airport, private jet terminals, and every airport in
              Colorado. Flight-tracked, on time, every time.
            </p>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="bg-surface border-b border-border-subtle py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "24/7", label: "Live Dispatch" },
              { number: "100%", label: "Flight Tracked" },
              { number: "A+", label: "BBB Rating" },
              { number: "$0", label: "Hidden Fees" },
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

        {/* How It Works */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12">
              Simple, Professional, On Time.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Book Your Transfer",
                  description:
                    "Call us or submit a reservation online. We'll confirm your vehicle, pricing, and pickup details in writing — no surprises.",
                },
                {
                  step: "02",
                  title: "We Track Your Flight",
                  description:
                    "Our 24-hour dispatch monitors your flight in real time. If your arrival changes, we adjust automatically — no need to call.",
                },
                {
                  step: "03",
                  title: "Meet Your Chauffeur",
                  description:
                    "At DIA, head to the Ground Transportation booth on Level 5. Tell the attendant \"A Custom Coach\" — your chauffeur arrives within minutes.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-surface border border-border-subtle rounded-xl p-8 shadow-[var(--shadow-card)]"
                >
                  <div className="font-display text-5xl font-semibold text-pink/20 leading-none mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-medium text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-cream-muted text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIA Pickup Instructions */}
        <section className="py-24 border-t border-border-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
                  Denver International Airport
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
                  DIA Pickup Instructions
                </h2>
                <ol className="text-cream-muted text-[15px] leading-relaxed space-y-6 list-none">
                  <li className="flex gap-4">
                    <span className="font-display text-2xl font-semibold text-pink leading-none shrink-0 w-8">
                      1.
                    </span>
                    <span>
                      After collecting your luggage, proceed to the{" "}
                      <span className="text-cream font-medium">
                        Ground Transportation Booth
                      </span>{" "}
                      on Level 5 of the terminal.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-2xl font-semibold text-pink leading-none shrink-0 w-8">
                      2.
                    </span>
                    <span>
                      Inform the attendant that your transportation company is{" "}
                      <span className="text-cream font-medium">
                        &ldquo;A Custom Coach.&rdquo;
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="font-display text-2xl font-semibold text-pink leading-none shrink-0 w-8">
                      3.
                    </span>
                    <span>
                      Within minutes, your chauffeur will arrive at the booth
                      and assist you with your luggage.
                    </span>
                  </li>
                </ol>
                <p className="text-cream-muted text-sm mt-8 leading-relaxed bg-surface border border-border-subtle rounded-lg p-4">
                  <span className="text-gold font-medium">Flight delayed?</span>{" "}
                  No need to call. Our dispatch monitors all arrivals in real
                  time and adjusts your pickup automatically.
                </p>
              </div>

              {/* Meet & Greet */}
              <div className="bg-surface border border-border-gold rounded-xl p-8 shadow-[var(--shadow-card-hover)]">
                <p className="text-pink text-xs tracking-[0.2em] uppercase mb-3">
                  Premium Option
                </p>
                <h3 className="font-display text-2xl font-medium text-white mb-4">
                  Meet &amp; Greet Service
                </h3>
                <p className="text-cream-muted text-[15px] leading-relaxed mb-6">
                  For VIPs, executives, or first-time visitors — our greeter
                  meets you at your gate or baggage claim with a custom name
                  sign, assists with luggage, and escorts you directly to your
                  waiting vehicle.
                </p>
                <ul className="space-y-3">
                  {[
                    "Personalized name signage",
                    "Gate or baggage claim meeting",
                    "Luggage assistance to vehicle",
                    "Group coordination for large parties",
                    "Custom signage available",
                  ].map((feature) => (
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
          </div>
        </section>

        {/* Rate Table Placeholder */}
        {/* TODO: Get actual rates from John — remove placeholder when real rates arrive */}
        <section className="py-24 border-t border-border-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              Pricing
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
              Transparent Rates, No Surprises.
            </h2>
            <p className="text-cream-muted text-[15px] leading-relaxed mb-10 max-w-2xl">
              All prices are disclosed in advance and in writing before your
              reservation is confirmed. Rates vary by vehicle type, distance, and
              time of day.
            </p>
            <div className="bg-surface border border-border-subtle rounded-xl overflow-hidden shadow-[var(--shadow-card)]">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border-subtle">
                    <th className="text-gold text-xs tracking-[0.15em] uppercase font-medium px-6 py-4">
                      Route
                    </th>
                    <th className="text-gold text-xs tracking-[0.15em] uppercase font-medium px-6 py-4">
                      Vehicle
                    </th>
                    <th className="text-gold text-xs tracking-[0.15em] uppercase font-medium px-6 py-4 text-right">
                      Starting At
                    </th>
                  </tr>
                </thead>
                <tbody className="text-cream-muted text-sm">
                  {[
                    { route: "DIA → Downtown Denver", vehicle: "Sedan", price: "Call for quote" },
                    { route: "DIA → Boulder", vehicle: "Sedan", price: "Call for quote" },
                    { route: "DIA → Denver Tech Center", vehicle: "Sedan", price: "Call for quote" },
                    { route: "DIA → Vail / Beaver Creek", vehicle: "SUV", price: "Call for quote" },
                    { route: "DIA → Colorado Springs", vehicle: "Sedan", price: "Call for quote" },
                    { route: "Custom Route", vehicle: "Any vehicle", price: "Call for quote" },
                  ].map((row) => (
                    <tr
                      key={row.route}
                      className="border-b border-border-subtle last:border-b-0 hover:bg-elevated/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-cream">{row.route}</td>
                      <td className="px-6 py-4">{row.vehicle}</td>
                      <td className="px-6 py-4 text-right text-gold font-medium">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-cream-muted text-xs mt-4">
              Gratuity not included. Rates subject to change. Contact us for a
              firm quote based on your specific itinerary.
            </p>
          </div>
        </section>

        {/* Colorado Airports */}
        <section className="py-24 border-t border-border-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              Airports We Serve
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
              Every Airport in Colorado.
            </h2>
            <p className="text-cream-muted text-[15px] leading-relaxed mb-12 max-w-2xl">
              From Denver International to private jet terminals across the
              state, we provide professional ground transportation to and from
              any airport in Colorado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {airports.map((airport) => (
                <div
                  key={airport.code}
                  className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[var(--shadow-card)] hover:border-border-gold hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <h3 className="font-display text-lg font-medium text-white">
                      {airport.name}
                    </h3>
                  </div>
                  <span className="inline-block text-gold text-[10px] tracking-[0.2em] uppercase font-medium bg-gold-muted px-2 py-1 rounded mb-3">
                    {airport.code}
                  </span>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    {airport.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 24/7 Availability Callout */}
        <section className="py-16 border-t border-border-subtle">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              Always Available
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
              A Live Voice, Any Hour.
            </h2>
            <p className="text-cream-muted text-[15px] leading-relaxed max-w-xl mx-auto">
              Red-eye arrival? 4 AM pickup? Last-minute change? Our dispatch
              team answers every call personally — 24 hours a day, 7 days a
              week. No auto-attendant. No phone tree. Just a real person ready to
              help.
            </p>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-elevated border-y border-border-gold py-16 shadow-[var(--shadow-cta-band)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              Book Your Airport Transfer.
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              Call for an instant quote or submit a reservation online. Prices
              confirmed in writing before every trip.
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
