import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-foundation">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-gold text-xs tracking-[0.25em] uppercase mb-6 font-body">
              Established 1988 · Denver &amp; Boulder, Colorado
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-medium text-white leading-[1.05] tracking-tight mb-6">
              Denver&apos;s Premier
              <br />
              <span className="text-gold">Transportation</span>
            </h1>
            <p className="text-cream-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-light">
              Professional limousine and chauffeur services for airport transfers,
              corporate travel, mountain destinations, and special events.
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

        {/* Trust Indicators */}
        <section className="bg-surface border-y border-border-subtle py-16">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "37+", label: "Years in Service" },
              { number: "A+", label: "BBB Rating" },
              { number: "24/7", label: "Live Dispatch" },
              { number: "3", label: "Companies Acquired" },
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

        {/* Services Preview - TODO: Build out */}
        <section className="bg-foundation py-24">
          <div className="max-w-5xl mx-auto px-6">
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">Our Services</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-white mb-12">
              Whatever the destination,<br />we&apos;ll get you there.
            </h2>
            {/* TODO: Service cards */}
          </div>
        </section>

        {/* CTA Band */}
        <section className="bg-elevated border-y border-border-gold py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
              A live voice, every time you call.
            </h2>
            <p className="text-cream-muted mb-8 leading-relaxed">
              No auto-attendant. No phone tree. Our team personally answers every call,
              24 hours a day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3037591376"
                className="text-gold text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
              >
                Local: 303-759-1376
              </a>
              <span className="hidden sm:inline text-border-gold">|</span>
              <a
                href="tel:18006715466"
                className="text-gold text-lg font-medium tracking-wide hover:text-gold-light transition-colors"
              >
                Toll Free: 1-800-671-5466
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
