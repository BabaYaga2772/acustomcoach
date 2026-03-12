import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Book your Denver luxury transportation online 24/7. Airport transfers, corporate travel, and special events. Your reservation is confirmed once you receive confirmation.",
};

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        <section className="py-24 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Reservations</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Book your ride.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              Submit a reservation request online 24 hours a day. Your reservation is
              complete once you&apos;ve received a confirmation from our team.
            </p>
          </div>
        </section>

        {/* TODO: Reservation form or FASTTRAK booking portal embed */}
        {/* TODO: DIA Pickup Instructions section */}
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-surface border border-border-gold rounded-lg p-8">
              <h2 className="font-display text-2xl font-medium text-white mb-4">
                DIA Pickup Instructions
              </h2>
              <p className="text-cream-muted leading-relaxed">
                Approach the Ground Transportation Booth and inform the attendant that your
                transportation company is &ldquo;A Custom Coach.&rdquo; Within minutes, your
                chauffeur will arrive and handle the rest.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
