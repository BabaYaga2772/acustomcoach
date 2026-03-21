import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact A Custom Coach for luxury transportation in Denver and Boulder. Call (303) 759-1376 or 1-800-671-5466. We answer live, 24 hours a day.",
  openGraph: {
    title: "Contact A Custom Coach — Denver & Boulder Transportation",
    description:
      "Call (303) 759-1376 or toll free 1-800-671-5466. We answer live, 24 hours a day. No auto-attendant. Denver, Colorado.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        <section className="relative py-24 border-b border-border-subtle overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1744871867083-82667ed80856?auto=format&fit=crop&w=1920&q=80"
            alt="Denver skyline at golden hour"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foundation/70" />
          <div className="relative max-w-4xl mx-auto px-6">
            <p className="text-pink text-xs tracking-[0.2em] uppercase mb-4">Contact Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
              Let&apos;s Talk.
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed max-w-2xl">
              Need a ride, have a question, or want to discuss corporate accounts?
              We&apos;re here — and we answer live, every time.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-8">
                Reach Us Directly
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-gold tracking-[0.15em] uppercase">Phone</span>
                    <span className="text-[10px] tracking-[0.1em] uppercase text-pink border border-border-pink rounded-full px-2.5 py-0.5 bg-pink-muted">
                      Live Voice — Every Call
                    </span>
                  </div>
                  <a href="tel:3037591376" className="text-cream text-lg hover:text-gold transition-colors block">
                    (303) 759-1376
                  </a>
                  <a href="tel:18006715466" className="text-cream-muted hover:text-gold transition-colors block mt-1">
                    Toll Free: 1-800-671-5466
                  </a>
                </div>
                <div>
                  <div className="text-xs text-gold tracking-[0.15em] uppercase mb-2">Email</div>
                  <a href="mailto:info@acustomcoach.com" className="text-cream hover:text-gold transition-colors">
                    info@acustomcoach.com
                  </a>
                </div>
                <div>
                  {/* TODO: Verify address with client */}
                  <div className="text-xs text-gold tracking-[0.15em] uppercase mb-2">Location</div>
                  <p className="text-cream-muted">Denver, Colorado</p>
                </div>
                <div>
                  {/* TODO: Verify hours with client */}
                  <div className="text-xs text-gold tracking-[0.15em] uppercase mb-2">Hours</div>
                  <p className="text-cream-muted text-sm leading-relaxed">
                    Mon–Sat: 6:00 AM – 11:00 PM<br />
                    Sun: 9:00 AM – 10:00 PM
                  </p>
                </div>
                <div>
                  <div className="text-xs text-gold tracking-[0.15em] uppercase mb-2">Fax</div>
                  <p className="text-cream-muted">(303) 373-5251</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-medium text-white mb-8">
                Send an Inquiry
              </h2>
              <p className="text-cream-muted text-sm mb-6">
                Allow up to 48 hours for a response. For immediate assistance, please call.
              </p>
              <InquiryForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
