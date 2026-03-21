import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-foundation">
        <section className="min-h-[60vh] flex items-center justify-center py-24">
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="font-display text-8xl font-semibold text-pink leading-none mb-6">
              404
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-medium text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-cream-muted text-lg leading-relaxed mb-10">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
              Let us get you back on the road.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-block bg-gradient-to-br from-pink to-[#CC1076] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-pink-glow-lg)] transition-all duration-300"
              >
                Back to Home
              </Link>
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
