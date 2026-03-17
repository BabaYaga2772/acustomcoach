import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mountain & Ski Resort Transportation",
  description:
    "Professional transportation to Vail, Breckenridge, Aspen, Beaver Creek, Keystone, and all Colorado ski resorts. Door-to-door from Denver or DIA. Year-round availability.",
  openGraph: {
    title: "Colorado Mountain & Ski Resort Transportation — A Custom Coach",
    description:
      "Door-to-door luxury transportation from Denver and DIA to Vail, Breckenridge, Aspen, Beaver Creek, Keystone, and every Colorado mountain destination. Year-round service.",
    url: "/mountains",
  },
  alternates: { canonical: "/mountains" },
};

const resorts = [
  {
    name: "Vail",
    distanceFromDenver: "~100 miles",
    elevation: "8,150 ft base",
    description:
      "Colorado's flagship ski resort and year-round mountain destination. World-class skiing, Vail Village shopping, and summer hiking draw visitors from around the globe.",
    highlights: ["Vail Village & Lionshead", "Back Bowls & Blue Sky Basin", "Summer hiking & biking", "Golf & spa resorts"],
  },
  {
    name: "Breckenridge",
    distanceFromDenver: "~80 miles",
    elevation: "9,600 ft base",
    description:
      "A historic mining town turned world-class resort. Five peaks of skiing in winter, a vibrant Main Street year-round, and some of the best high-altitude terrain in North America.",
    highlights: ["Historic Main Street", "Five skiable peaks", "Summer festivals & events", "Year-round gondola rides"],
  },
  {
    name: "Aspen",
    distanceFromDenver: "~200 miles",
    elevation: "7,945 ft base",
    description:
      "The iconic Colorado mountain town — synonymous with luxury, culture, and world-class skiing across four mountains. A destination that needs no introduction.",
    highlights: ["Aspen Mountain & Highlands", "Snowmass Village", "Fine dining & nightlife", "Summer music festivals"],
  },
  {
    name: "Beaver Creek",
    distanceFromDenver: "~110 miles",
    elevation: "8,100 ft base",
    description:
      "Vail's exclusive neighbor — known for impeccable grooming, luxury lodging, and a more intimate resort experience. Famous for fresh-baked cookies at the base.",
    highlights: ["Birds of Prey racecourse", "Village-to-village gondola", "Luxury spa & dining", "Summer concerts & events"],
  },
  {
    name: "Keystone",
    distanceFromDenver: "~75 miles",
    elevation: "9,280 ft base",
    description:
      "A family-friendly resort with night skiing, three mountains of terrain, and a charming lakeside village. One of the closest major resorts to Denver.",
    highlights: ["Night skiing available", "Three mountains of terrain", "Keystone Lake & village", "Family-friendly programs"],
  },
];

export default function MountainsPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Hero */}
        <section className="relative py-24 border-b border-border-subtle overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1653688107875-38c6dfe0e59b?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic Colorado mountain highway through the Rockies"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foundation/75" />
          <div className="relative max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Mountain Transportation
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Colorado&apos;s Peaks, Without the Stress.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              Door-to-door luxury transportation from Denver and DIA to every
              ski resort and mountain destination in Colorado. You enjoy the
              scenery — we handle the passes.
            </p>
          </div>
        </section>

        {/* Why Drive With Us */}
        <section className="bg-surface border-b border-border-subtle py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "37+", label: "Years on These Roads" },
              { number: "AWD", label: "Winter-Ready Fleet" },
              { number: "24/7", label: "Live Dispatch" },
              { number: "55", label: "Max Group Size" },
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

        {/* Resort Cards */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Destinations
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12">
              Ski Resorts We Serve.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resorts.map((resort) => (
                <div
                  key={resort.name}
                  className="group bg-surface border border-border-subtle rounded-xl p-8 shadow-[var(--shadow-card)] hover:border-border-gold hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-display text-2xl font-medium text-white">
                      {resort.name}
                    </h3>
                    <span className="text-gold text-[10px] tracking-[0.2em] uppercase font-medium">
                      {resort.elevation}
                    </span>
                  </div>

                  {/* Distance */}
                  <div className="mb-4">
                    <span className="text-cream-muted text-xs">
                      From Denver:{" "}
                      <span className="text-cream">{resort.distanceFromDenver}</span>
                    </span>
                  </div>

                  <p className="text-cream-muted text-[15px] leading-relaxed mb-6">
                    {resort.description}
                  </p>

                  <ul className="flex flex-col gap-2">
                    {resort.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-cream-muted text-sm flex items-start gap-2"
                      >
                        <span className="text-gold mt-1 text-xs">&#9670;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* "And More" Card */}
              <div className="bg-surface border border-border-gold rounded-xl p-8 shadow-[var(--shadow-card-hover)] flex flex-col justify-center">
                <h3 className="font-display text-2xl font-medium text-white mb-4">
                  And Every Mountain In Between.
                </h3>
                <p className="text-cream-muted text-[15px] leading-relaxed mb-4">
                  Copper Mountain, Winter Park, Steamboat Springs, Telluride,
                  Crested Butte, Loveland, Arapahoe Basin — wherever the
                  mountains take you, we&apos;ll get you there.
                </p>
                <p className="text-cream-muted text-sm">
                  Call us with your destination and we&apos;ll provide a quote
                  within minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Group Transportation */}
        <section className="py-24 border-t border-border-subtle">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
                  Group Travel
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
                  Any Size Group, One Call.
                </h2>
                <p className="text-cream-muted text-[15px] leading-relaxed mb-4">
                  Whether it&apos;s a couple heading to Vail or a corporate
                  retreat of 50, we have the vehicle and the experience to get
                  your group to the mountains safely and on time.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    { vehicle: "Luxury Sedans", capacity: "Up to 3 passengers" },
                    { vehicle: "Luxury SUVs", capacity: "6–7 passengers" },
                    { vehicle: "Luxury Executive Vans", capacity: "Up to 14 passengers" },
                    { vehicle: "Motor Coaches", capacity: "26–55 via affiliates" },
                  ].map((item) => (
                    <li
                      key={item.vehicle}
                      className="flex items-center justify-between text-sm border-b border-border-subtle pb-2"
                    >
                      <span className="text-cream">{item.vehicle}</span>
                      <span className="text-cream-muted text-xs">
                        {item.capacity}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/fleet"
                  className="inline-block border border-border-gold text-cream px-8 py-4 rounded-md text-sm font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold hover:shadow-[0_0_16px_rgba(212,175,55,0.12)] transition-all duration-300"
                >
                  View Our Fleet
                </a>
              </div>

              {/* Seasonal Callout */}
              <div className="bg-surface border border-border-subtle rounded-xl p-8 shadow-[var(--shadow-card)]">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
                  Year-Round Service
                </p>
                <h3 className="font-display text-2xl font-medium text-white mb-4">
                  Every Season, Every Pass.
                </h3>
                <p className="text-cream-muted text-[15px] leading-relaxed mb-6">
                  Colorado&apos;s mountains don&apos;t close — and neither do we.
                  Ski season transfers, summer festival rides, fall foliage
                  tours, spring wedding shuttles. Our drivers know these roads in
                  every condition.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { season: "Winter", detail: "Ski & snowboard transfers" },
                    { season: "Spring", detail: "Wedding & event shuttles" },
                    { season: "Summer", detail: "Hiking & festival rides" },
                    { season: "Fall", detail: "Foliage tours & retreats" },
                  ].map((item) => (
                    <div key={item.season}>
                      <div className="font-display text-lg font-medium text-gold mb-1">
                        {item.season}
                      </div>
                      <div className="text-cream-muted text-xs">
                        {item.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-elevated border-y border-border-gold py-16 shadow-[var(--shadow-cta-band)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              Book Your Mountain Transfer.
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              Call for a quote or submit a reservation online. We&apos;ll confirm
              your vehicle, route, and pricing in writing.
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
