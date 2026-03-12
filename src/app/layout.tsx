import type { Metadata } from "next";
import { MobileCTABar } from "@/components/MobileCTABar";
import "./globals.css";

// TODO: Update to final domain once confirmed with client
const SITE_URL = "https://www.acustomcoach.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "A Custom Coach | Denver & Boulder Luxury Transportation Since 1988",
    template: "%s | A Custom Coach",
  },
  description:
    "Premier limousine and transportation services in Denver and Boulder, Colorado. Airport transfers, corporate travel, mountain destinations, and special events. A+ BBB rated. 24/7 live dispatch. Established 1988.",
  keywords: [
    "Denver limousine service",
    "Boulder transportation",
    "DIA airport transfer",
    "Colorado luxury transportation",
    "Denver chauffeur service",
    "corporate transportation Denver",
    "mountain transportation Colorado",
    "Denver airport limo",
    "Boulder limo service",
    "Denver executive car service",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "A Custom Coach",
    title: "A Custom Coach | Denver & Boulder Luxury Transportation Since 1988",
    description:
      "Premier limousine and chauffeur services in Denver and Boulder, Colorado. Airport transfers, corporate travel, mountain destinations, and special events. Established 1988.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "A Custom Coach | Denver & Boulder Luxury Transportation",
    description:
      "37+ years of premier limousine and transportation services in Colorado. A+ BBB rated. 24/7 live dispatch.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// TODO: Verify address, phone numbers, hours with client before go-live
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LimousineBusService",
  name: "A Custom Coach",
  alternateName: ["A Custom Coach Transportation", "Boulder Transportation"],
  description:
    "Premier limousine and transportation services in Denver and Boulder, Colorado. Airport transfers, corporate travel, mountain destinations, weddings, and special events.",
  url: SITE_URL,
  telephone: "+1-303-759-1376",
  // TODO: Verify this is the correct active address
  address: {
    "@type": "PostalAddress",
    streetAddress: "5105 E Missouri Ave",
    addressLocality: "Denver",
    addressRegion: "CO",
    postalCode: "80246",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.696345,
    longitude: -104.926644,
  },
  // TODO: Verify hours with client
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "06:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "22:00",
    },
  ],
  foundingDate: "1988-09-01",
  founder: {
    "@type": "Person",
    name: "John Hafer",
    jobTitle: "Owner & CEO",
  },
  areaServed: [
    { "@type": "City", name: "Denver", containedInPlace: { "@type": "State", name: "Colorado" } },
    { "@type": "City", name: "Boulder", containedInPlace: { "@type": "State", name: "Colorado" } },
  ],
  serviceType: [
    "Airport Transfer",
    "Corporate Transportation",
    "Wedding Transportation",
    "Mountain Transportation",
    "Meet and Greet Service",
    "Special Event Transportation",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "1",
    reviewCount: "1",
  },
  award: "A+ BBB Rating",
  memberOf: [
    { "@type": "Organization", name: "National Limousine Association" },
    { "@type": "Organization", name: "Colorado Limousine Association" },
    { "@type": "Organization", name: "Denver Metro Convention & Visitors Bureau" },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-303-759-1376",
      contactType: "reservations",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-800-671-5466",
      contactType: "reservations",
      areaServed: "US",
      availableLanguage: "English",
      contactOption: "TollFree",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <MobileCTABar />
      </body>
    </html>
  );
}
