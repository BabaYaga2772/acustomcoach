"use client";

import { useState, type FormEvent } from "react";

const vehicleOptions = [
  "Luxury Sedan",
  "SUV",
  "Stretch Limousine",
  "Passenger Van (up to 14)",
  "Luxury Executive Van (up to 9)",
  "Motor Coach (26–55 via affiliate)",
  "Not sure — help me decide",
];

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire to email service (Formspree, Resend, or FASTTRAK)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border-gold rounded-xl p-10 text-center">
        <p className="font-display text-2xl text-white mb-3">Thank you.</p>
        <p className="text-cream-muted text-sm leading-relaxed">
          We&apos;ve received your inquiry and will respond within 48 hours.
          <br />
          For immediate assistance, call{" "}
          <a href="tel:3037591376" className="text-gold hover:text-gold-light transition-colors">
            (303) 759-1376
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <Field label="Full Name" name="name" type="text" required />

      {/* Email + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>

      {/* Date + Passengers row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Date of Service" name="date" type="date" />
        <Field label="Number of Passengers" name="passengers" type="number" min={1} max={55} />
      </div>

      {/* Pickup + Drop-off row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Pickup Location" name="pickup" type="text" />
        <Field label="Drop-off Location" name="dropoff" type="text" />
      </div>

      {/* Vehicle Preference */}
      <div>
        <label htmlFor="vehicle" className="block text-xs text-gold tracking-[0.15em] uppercase mb-2">
          Vehicle Preference
        </label>
        <select
          id="vehicle"
          name="vehicle"
          className="w-full bg-elevated border border-border-subtle rounded-lg px-4 py-3 text-cream text-[15px] focus:outline-none focus:border-border-gold transition-colors appearance-none"
          defaultValue=""
        >
          <option value="" disabled className="text-cream-muted">
            Select a vehicle type
          </option>
          {vehicleOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-elevated text-cream">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs text-gold tracking-[0.15em] uppercase mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-elevated border border-border-subtle rounded-lg px-4 py-3 text-cream text-[15px] leading-relaxed focus:outline-none focus:border-border-gold transition-colors resize-none"
          placeholder="Tell us about your transportation needs..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gradient-to-br from-gold to-[#B8942F] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase hover:shadow-[0_4px_20px_rgba(201,168,76,0.3)] transition-all duration-300 cursor-pointer"
      >
        Submit Inquiry
      </button>

      <p className="text-cream-muted text-xs text-center leading-relaxed">
        Your reservation is <span className="text-cream">not complete</span> until
        you receive a confirmation from our team.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  min,
  max,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  min?: number;
  max?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs text-gold tracking-[0.15em] uppercase mb-2">
        {label}
        {required && <span className="text-gold-light ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        min={min}
        max={max}
        className="w-full bg-elevated border border-border-subtle rounded-lg px-4 py-3 text-cream text-[15px] placeholder:text-cream-muted/50 focus:outline-none focus:border-border-gold transition-colors"
      />
    </div>
  );
}
