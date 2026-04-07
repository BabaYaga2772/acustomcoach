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
  "Luxury SUV",
  "Luxury Executive Van (up to 14)",
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
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
              Reservations
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Book Your Ride.
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
              or or text{" "}
              <a
                href="tel:3036695144"
                className="text-gold hover:text-gold-light transition-colors"
              >
                (303) 669-5144
              </a>
              .
            </p>
          </div>
        </section>

        {/* Online Booking — Coming Soon */}
        <section className="py-16 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gold-muted border-2 border-border-gold rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 shadow-[var(--shadow-card-hover)]">
              <div className="flex-1">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
                  Online Booking Coming Soon
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-gold mb-3">
                  For Now, a Live Voice Is Even Better.
                </h2>
                <p className="text-cream text-[15px] leading-relaxed">
                  Our online booking portal is on the way. In the meantime,
                  submit a reservation request below or call us directly —
                  a real person answers every call, 24/7.
                </p>
              </div>
              <a
                href="tel:3037591376"
                className="shrink-0 bg-gradient-to-br from-pink to-[#CC1076] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-pink-glow-lg)] transition-all duration-300"
              >
                Call Now
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
                <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">
                  Request a Reservation
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-3">
                  Tell Us Where You&apos;re Headed.
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
                  <p className="text-pink text-xs tracking-[0.15em] uppercase mb-3">
                    Denver International Airport
                  </p>
                  <h3 className="font-display text-lg font-medium text-white mb-3">
                    DIA Pickup Instructions
                  </h3>
                  <ol className="text-cream-muted text-sm leading-relaxed space-y-3 list-decimal list-inside">
                    <li>
                      After collecting your luggage, proceed to the{" "}
                      <span className="text-cream">
                        Ground Transportation
                      </span>{" "}
                      on Level 5 of the terminal.
                    </li>
                    <li>
                      Your chauffeur will direct you to which door number
                      and to the 2nd island, and assist you with your luggage.
                    </li>
                  </ol>
                  <p className="text-cream-muted text-xs mt-4 leading-relaxed">
                    Our 24-hour dispatch monitors all flight arrivals. If your
                    flight is delayed, we adjust automatically — no need to call.
                  </p>
                </div>

                {/* Quick Contact */}
                <div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-lg font-medium text-white">
                      Prefer to Call?
                    </h3>
                    <span className="text-[10px] tracking-[0.1em] uppercase text-pink border border-border-pink rounded-full px-2.5 py-0.5 bg-pink-muted">
                      Live Voice
                    </span>
                  </div>
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
                      href="tel:3036695144"
                      className="block text-gold text-sm font-medium hover:text-gold-light transition-colors"
                    >
                      Text: (303) 669-5144
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
              No Hidden Fees. No Surprises.
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
