"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-foundation/95 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-lg md:text-xl font-semibold text-white">
            A Custom Coach
          </span>
          <span className="hidden sm:inline text-gold text-[9px] tracking-[0.1em] uppercase opacity-80">
            Est. 1988
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-cream-muted text-xs tracking-[0.08em] uppercase hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservations"
            className="bg-gradient-to-br from-gold to-[#B8942F] text-foundation px-5 py-2.5 rounded text-xs font-semibold tracking-[0.08em] uppercase hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)] transition-all duration-300"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-cream transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-border-subtle">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-cream text-sm tracking-[0.05em] uppercase py-2 border-b border-border-subtle hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/reservations"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-gradient-to-br from-gold to-[#B8942F] text-foundation px-6 py-3 rounded text-sm font-semibold tracking-[0.08em] uppercase text-center"
            >
              Book Now
            </Link>
            <a
              href="tel:3037591376"
              className="text-gold text-sm font-medium tracking-wide text-center py-2"
            >
              Call 303-759-1376
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
