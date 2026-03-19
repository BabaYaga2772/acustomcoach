"use client";

import { useState, type FormEvent } from "react";

export function ReservationForm({
  vehicleOptions,
}: {
  vehicleOptions: string[];
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire to email service (Formspree, Resend, or FASTTRAK API)
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-surface border border-border-gold rounded-xl p-10 text-center shadow-[var(--shadow-card-hover)]">
        <p className="font-display text-2xl text-white mb-3">
          Request received.
        </p>
        <p className="text-cream-muted text-sm leading-relaxed">
          We&apos;ll confirm your reservation within 48 hours with vehicle
          details and pricing. For immediate assistance, call{" "}
          <a
            href="tel:3037591376"
            className="text-gold hover:text-gold-light transition-colors"
          >
            (303) 759-1376
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Full Name" name="name" type="text" required />
        <InputField label="Email" name="email" type="email" required />
      </div>

      {/* Phone + Passengers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Phone" name="phone" type="tel" required />
        <InputField
          label="Number of Passengers"
          name="passengers"
          type="number"
          min={1}
          max={55}
          required
        />
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Date of Service" name="date" type="date" required />
        <InputField label="Pickup Time" name="time" type="time" required />
      </div>

      {/* Pickup + Drop-off */}
      <InputField
        label="Pickup Location"
        name="pickup"
        type="text"
        required
        placeholder="e.g. DIA Terminal West, 123 Main St Denver"
      />
      <InputField
        label="Drop-off Location"
        name="dropoff"
        type="text"
        required
        placeholder="e.g. The Brown Palace Hotel, Vail Resort"
      />

      {/* Flight Information */}
      <div>
        <p className="text-gold text-[10px] tracking-[0.2em] uppercase font-medium mb-3 mt-2">
          Flight Information
        </p>
        <InputField
          label="Origin City"
          name="originCity"
          type="text"
          placeholder="e.g. Los Angeles, New York, Chicago"
        />
      </div>

      {/* Luggage Count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField
          label="Carry-on Bags"
          name="carryOnBags"
          type="number"
          min={0}
          max={20}
          placeholder="0"
        />
        <InputField
          label="Checked Bags"
          name="checkedBags"
          type="number"
          min={0}
          max={20}
          placeholder="0"
        />
      </div>

      {/* Vehicle Type */}
      <div>
        <label
          htmlFor="vehicle"
          className="block text-xs text-gold tracking-[0.15em] uppercase mb-2"
        >
          Vehicle Preference
        </label>
        <select
          id="vehicle"
          name="vehicle"
          className="w-full bg-elevated border border-border-subtle rounded-lg px-4 py-3 text-cream text-[15px] focus:outline-none focus:border-border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] transition-all appearance-none"
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

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-gradient-to-br from-gold to-[#B8962E] text-foundation px-8 py-4 rounded-md text-sm font-semibold tracking-[0.08em] uppercase shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-gold-glow-lg)] transition-all duration-300 cursor-pointer"
      >
        Request Reservation
      </button>

      <p className="text-cream-muted text-xs text-center leading-relaxed">
        Your reservation is{" "}
        <span className="text-cream">not confirmed</span> until you receive a
        response from our team.
      </p>
    </form>
  );
}

function InputField({
  label,
  name,
  type,
  required,
  min,
  max,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  min?: number;
  max?: number;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs text-gold tracking-[0.15em] uppercase mb-2"
      >
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
        placeholder={placeholder}
        className="w-full bg-elevated border border-border-subtle rounded-lg px-4 py-3 text-cream text-[15px] placeholder:text-cream-muted/50 focus:outline-none focus:border-border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.1)] transition-all"
      />
    </div>
  );
}
