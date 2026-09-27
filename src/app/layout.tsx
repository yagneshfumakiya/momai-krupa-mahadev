import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf8f5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://momaikrupamahadev.com"),
  title: "Dhaval Maharaj | Momai Krupa Mahadev — Modern Vedic Pandit & Sanatan Seva",
  description:
    "Authentic Vedic Puja, Bhagwat Katha, Saptah, Yagna, Pran Pratishtha, Vastu Shanti, Pitru Tarpan & Kundli Jyotish by Dhaval Maharaj in Ahmedabad & Online Globally.",
  keywords: [
    "Vedic Pandit in Ahmedabad",
    "Hindu Pandit in Ahmedabad",
    "Puja Vidhi in Ahmedabad",
    "Havan and Yagna in Ahmedabad",
    "Satyanarayan Katha in Ahmedabad",
    "Bhagwat Katha in Ahmedabad",
    "Pran Pratishtha Puja",
    "Rudrabhishek in Ahmedabad",
    "Vastu Puja in Ahmedabad",
    "Griha Pravesh Puja in Ahmedabad",
    "Online Vedic Puja",
    "Dhaval Maharaj",
    "Momai Krupa Mahadev",
    "Dhaval Sanjaybhai Rajayguru",
  ],
  authors: [{ name: "Dhaval Maharaj" }],
  creator: "Momai Krupa Mahadev",
  openGraph: {
    title: "Dhaval Maharaj | Momai Krupa Mahadev — Modern Vedic Pandit & Sanatan Seva",
    description:
      "Timeless Vedic traditions presented with modern devotion by Dhaval Maharaj. Contact for Puja, Katha, Yagna, Vastu & Jyotish.",
    url: "https://momaikrupamahadev.com",
    siteName: "Momai Krupa Mahadev",
    images: [
      {
        url: "/images/hero/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Dhaval Maharaj Vedic Ceremony",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhaval Maharaj | Momai Krupa Mahadev",
    description: "Vedic Puja, Katha, Saptah, Yagna, Vastu Shanti & Jyotish by Dhaval Maharaj.",
    images: ["/images/hero/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Momai Krupa Mahadev - Dhaval Maharaj",
    image: "https://momaikrupamahadev.com/images/hero/hero-bg.jpg",
    telephone: "+91-8141306110",
    alternateName: "Dhaval Sanjaybhai Rajayguru Vedic Services",
    description:
      "Vedic Pandit services including Puja, Katha, Saptah, Yagna, Pran Pratishtha, Vastu Shanti, Pitru Tarpan, and Kundli Jyotish in Ahmedabad and worldwide online.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: ["Ahmedabad", "Gujarat", "India", "Worldwide Online"],
    priceRange: "$$",
    sameAs: ["https://wa.me/918141306110", "https://wa.me/918200206189"],
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#faf8f5] text-[#18181b] antialiased selection:bg-[#c2410c] selection:text-white min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
