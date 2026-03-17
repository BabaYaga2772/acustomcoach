import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border-subtle shadow-[0_-2px_16px_rgba(0,0,0,0.4)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-semibold text-white mb-2">
              A Custom Coach
            </div>
            <div className="text-xs text-gold tracking-[0.1em] uppercase mb-4">
              Luxury Transportation Since 1988
            </div>
            <p className="text-cream-muted text-sm leading-relaxed">
              Serving Colorado &amp; Wyoming with premier luxury transportation since 1988.
              A+ rated. National Limousine Association member.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs text-gold tracking-[0.15em] uppercase mb-4">
              Quick Links
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/fleet", label: "Our Fleet" },
                { href: "/about", label: "About Us" },
                { href: "/reservations", label: "Reservations" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream-muted text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs text-gold tracking-[0.15em] uppercase mb-4">
              Contact
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:3037591376" className="text-cream hover:text-gold transition-colors">
                Local: (303) 759-1376
              </a>
              <a href="tel:18006715466" className="text-cream hover:text-gold transition-colors">
                Toll Free: 1-800-671-5466
              </a>
              <a href="mailto:info@acustomcoach.com" className="text-cream hover:text-gold transition-colors">
                info@acustomcoach.com
              </a>
              {/* TODO: Verify address with client */}
              <p className="text-cream-muted mt-2">
                Denver, Colorado
              </p>
              <div className="text-cream-muted text-xs mt-2 leading-relaxed">
                {/* TODO: Verify hours with client */}
                Mon–Sat: 6:00 AM – 11:00 PM<br />
                Sun: 9:00 AM – 10:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-cream-muted text-xs">
            © {new Date().getFullYear()} A Custom Coach, Inc. All rights reserved.
          </div>
          <div className="text-cream-muted text-xs flex gap-4">
            <span>National Limousine Association</span>
            <span>·</span>
            <span>Colorado Limousine Association</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
