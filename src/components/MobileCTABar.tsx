"use client";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-foundation/95 backdrop-blur-sm border-t border-border-subtle">
      <div className="flex gap-3 px-4 py-3">
        <a
          href="tel:3037591376"
          className="flex-1 text-center border border-border-gold text-cream py-3 rounded-md text-sm font-semibold tracking-[0.08em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
        >
          Call
        </a>
        <a
          href="/reservations"
          className="flex-1 text-center bg-gradient-to-br from-gold to-[#B8962E] text-foundation py-3 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-gold-glow-lg)] transition-all duration-300"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
