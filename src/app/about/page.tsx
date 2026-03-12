import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "A Custom Coach has been Denver and Boulder's trusted luxury transportation provider since 1988. Learn about owner John Hafer and our 37+ year legacy.",
};

const acquisitions = [
  {
    name: "Boulder Transportation",
    description: "Expanding service coverage across Boulder County and the Front Range.",
  },
  {
    name: "Centennial Sedans",
    description: "Adding executive sedan capacity for corporate and airport clients.",
  },
  {
    name: "Diamond Limousine",
    description: "Strengthening the luxury fleet with stretch limousine inventory.",
  },
];

const industryPositions = [
  {
    role: "Ground Transportation Board Member",
    org: "Denver International Airport",
    detail: "Since 1995 — held positions of Chairman and Vice Chairman",
  },
  {
    role: "Vice President & Member",
    org: "Colorado Limousine Association",
    detail: "Over 20 years of leadership",
  },
  {
    role: "Transportation Forum Member",
    org: "Colorado Convention Bureau",
    detail: "Over 12 years of participation",
  },
];

const affiliations = [
  "National Limousine Association",
  "Colorado Limousine Association",
  "Denver Metro Convention & Visitors Bureau",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Page Header */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              A legacy built on service.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              Established in 1988, A Custom Coach/Boulder Transportation has become a
              leading force in the limousine industry in the state of Colorado. With our
              extensive fleet and excellent staff, we accommodate any transportation need —
              locally and, through affiliates, worldwide.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Our Vision</p>
              <blockquote className="font-display text-2xl md:text-3xl font-medium text-white leading-snug mb-6">
                Present a solution to every customer, no matter the circumstances.
              </blockquote>
              <p className="text-cream-muted text-[15px] leading-relaxed">
                We are backed by an ambitious staff with the same drive to bring you the
                best possible service. The quality of what we offer, combined with the care
                we provide, is what makes us the best in town.
              </p>
            </div>
          </div>
        </section>

        {/* John Hafer Bio */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-start">
              {/* Photo placeholder */}
              <div className="bg-surface border border-border-subtle rounded-xl aspect-[3/4] flex items-center justify-center shadow-[var(--shadow-card)]">
                <div className="text-center px-6">
                  <div className="font-display text-5xl text-gold mb-3">JH</div>
                  <p className="text-cream-muted text-xs tracking-[0.1em] uppercase">
                    Owner &amp; CEO
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div>
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
                  Owner &amp; CEO
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-6">
                  John Hafer
                </h2>
                <div className="flex flex-col gap-4 text-cream-muted text-[15px] leading-relaxed">
                  <p>
                    Born and raised in Colorado, John Hafer founded A Custom Coach in 1988 as
                    a humble, one-car operation. From day one, he set out to maintain a stellar
                    record for on-time service and professionalism among his dispatch and
                    chauffeur staffs.
                  </p>
                  <p>
                    Over nearly four decades, John has grown the company through strategic
                    acquisitions — bringing Boulder Transportation, Centennial Sedans, and
                    Diamond Limousine under the A Custom Coach umbrella — building one of
                    Colorado&apos;s most respected ground transportation operations.
                  </p>
                  <p>
                    His commitment to the industry extends well beyond his own fleet. John has
                    served on the Ground Transportation Board at Denver International Airport
                    since 1995, holding positions of both Chairman and Vice Chairman. He served
                    as Vice President of the Colorado Limousine Association for over 20 years
                    and participated in the Transportation Forum at the Colorado Convention
                    Bureau for over 12 years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acquisitions */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Growth</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
              Three companies, one standard.
            </h2>
            <p className="text-cream-muted text-[15px] leading-relaxed mb-12 max-w-2xl">
              Over the years, John has expanded A Custom Coach by acquiring three established
              Colorado transportation companies — each adding capacity, coverage, and expertise.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {acquisitions.map((acq) => (
                <div
                  key={acq.name}
                  className="bg-surface border border-border-subtle rounded-xl p-8 shadow-[var(--shadow-card)] hover:border-border-gold hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <h3 className="font-display text-xl font-medium text-white mb-3">
                    {acq.name}
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    {acq.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Leadership */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Industry Leadership
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12">
              Decades at the table.
            </h2>
            <div className="flex flex-col gap-8">
              {industryPositions.map((pos) => (
                <div
                  key={pos.org}
                  className="border-l-2 border-gold/40 pl-6"
                >
                  <h3 className="font-display text-xl font-medium text-white mb-1">
                    {pos.role}
                  </h3>
                  <p className="text-gold text-sm mb-2">{pos.org}</p>
                  <p className="text-cream-muted text-sm">{pos.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Affiliations</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-8">
              Proud members of
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {affiliations.map((name) => (
                <div
                  key={name}
                  className="bg-surface border border-border-subtle rounded-xl p-6 flex items-center justify-center text-center min-h-[100px] shadow-[var(--shadow-card)]"
                >
                  <p className="text-cream text-sm font-medium tracking-wide">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-elevated border-y border-border-gold py-16 shadow-[var(--shadow-cta-band)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              37 years of trust. One phone call away.
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              Experience the service that&apos;s made A Custom Coach a Colorado institution
              since 1988.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/reservations"
                className="inline-block bg-gradient-to-br from-gold to-[#B8942F] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-gold-glow-lg)] transition-all duration-300"
              >
                Book Now
              </a>
              <a
                href="tel:3037591376"
                className="inline-block border border-border-gold text-cream px-8 py-4 rounded-md text-sm font-medium tracking-[0.08em] uppercase hover:border-gold hover:text-gold hover:shadow-[0_0_16px_rgba(201,168,76,0.12)] transition-all duration-300"
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
