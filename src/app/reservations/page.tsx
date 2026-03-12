import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReservationForm } from "./ReservationForm";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book your Denver luxury transportation online 24/7. Airport transfers, corporate travel, and special events. Your reservation is confirmed once you receive confirmation.",
  openGraph: {
    title: "Book Denver Luxury Transportation — A Custom Coach Reservations",
    description:
      "Submit a reservation request 24/7. DIA airport transfers, corporate travel, weddings, and special events. A live voice answers every call.",
    url: "/reservations",
  },
  alternates: { canonical: "/reservations" },
};

const vehicleOptions = [
  "Luxury Sedan",
  "SUV",
  "Stretch Limousine",
  "Passenger Van (up to 14)",
  "Luxury Executive Van (up to 9)",
  "Motor Coach (26–55 via affiliate)",
  "Not sure — help me decide",
];

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        {/* Hero */}
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
              Reservations
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Book your ride.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              Submit a reservation request online 24 hours a day. For immediate
              assistance, call us at{" "}
              <a
                href="tel:3037591376"
                className="text-gold hover:text-gold-light transition-colors"
              >
                (303) 759-1376
              </a>{" "}
              or toll free{" "}
              <a
                href="tel:18006715466"
                className="text-gold hover:text-gold-light transition-colors"
              >
                1-800-671-5466
              </a>
              .
            </p>
          </div>
        </section>

        {/* FASTTRAK Online Booking Callout */}
        <section className="py-16 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gold-muted border border-border-gold rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 shadow-[var(--shadow-card-hover)]">
              <div className="flex-1">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  Online Booking
                </p>
                <h2 className="font-display text-xl md:text-2xl font-medium text-white mb-2">
                  Book instantly through our portal
                </h2>
                <p className="text-cream-muted text-sm leading-relaxed">
                  Use our FASTTRAK online booking system for real-time
                  availability, instant confirmation, and secure payment
                  processing.
                </p>
              </div>
              {/* TODO: Replace # with FASTTRAK portal URL once client provides it */}
              <a
                href="#"
                aria-disabled="true"
                className="shrink-0 bg-gradient-to-br from-gold to-[#B8942F] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-gold-glow-lg)] transition-all duration-300"
              >
                Book Online
              </a>
            </div>
          </div>
        </section>

        {/* Reservation Form */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Form — takes 3 of 5 columns */}
              <div className="lg:col-span-3">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
                  Request a Reservation
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-3">
                  Tell us where you&apos;re headed.
                </h2>
                <p className="text-cream-muted text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you with
                  availability and pricing. Allow up to 48 hours for a response.
                </p>
                <ReservationForm vehicleOptions={vehicleOptions} />
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-2 space-y-8">
                {/* Confirmation Notice */}
                <div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-lg font-medium text-white mb-3">
                    Important
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    Your reservation is{" "}
                    <span className="text-cream font-medium">not complete</span>{" "}
                    until you have received a confirmation from our team. We will
                    confirm your booking with vehicle details, pricing, and
                    pickup instructions.
                  </p>
                </div>

                {/* DIA Pickup Instructions */}
                <div className="bg-surface border border-border-gold rounded-xl p-6 shadow-[var(--shadow-card-hover)]">
                  <p className="text-gold text-xs tracking-[0.15em] uppercase mb-3">
                    Denver International Airport
                  </p>
                  <h3 className="font-display text-lg font-medium text-white mb-3">
                    DIA Pickup Instructions
                  </h3>
                  <ol className="text-cream-muted text-sm leading-relaxed space-y-3 list-decimal list-inside">
                    <li>
                      After collecting your luggage, proceed to the{" "}
                      <span className="text-cream">
                        Ground Transportation Booth
                      </span>{" "}
                      on Level 5 of the terminal.
                    </li>
                    <li>
                      Inform the attendant that your transportation company is{" "}
                      <span className="text-cream">
                        &ldquo;A Custom Coach.&rdquo;
                      </span>
                    </li>
                    <li>
                      Within minutes, your chauffeur will arrive and assist you
                      with your luggage.
                    </li>
                  </ol>
                  <p className="text-cream-muted text-xs mt-4 leading-relaxed">
                    Our 24-hour dispatch monitors all flight arrivals. If your
                    flight is delayed, we adjust automatically — no need to call.
                  </p>
                </div>

                {/* Quick Contact */}
                <div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[var(--shadow-card)]">
                  <h3 className="font-display text-lg font-medium text-white mb-3">
                    Prefer to call?
                  </h3>
                  <p className="text-cream-muted text-sm leading-relaxed mb-4">
                    We answer live, every time — no auto-attendant.
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:3037591376"
                      className="block text-gold text-sm font-medium hover:text-gold-light transition-colors"
                    >
                      Local: (303) 759-1376
                    </a>
                    <a
                      href="tel:18006715466"
                      className="block text-gold text-sm font-medium hover:text-gold-light transition-colors"
                    >
                      Toll Free: 1-800-671-5466
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="bg-elevated border-y border-border-gold py-16 shadow-[var(--shadow-cta-band)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              No hidden fees. No surprises.
            </h2>
            <p className="text-cream-muted leading-relaxed">
              Whatever your needs, prices for all services will be disclosed in
              advance and in writing before your reservation is confirmed.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
