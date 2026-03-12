import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "A Custom Coach",
  },
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
      </head>
      <body>{children}</body>
    </html>
  );
}
