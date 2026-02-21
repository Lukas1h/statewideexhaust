import { Inter, Assistant } from "next/font/google";
import "./globals.css";
import { Popup } from "./ui/components";
import { ReactNode, Suspense } from "react";
import { Footer, Header } from "./ui/components";
import { Metadata } from "next";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Statewide Exhaust Hood Cleaning Services",
  telephone: "+1-541-744-8810",
  url: "https://www.statewideexhaustservices.com",
  image: "https://www.statewideexhaustservices.com/opengraph.png",
  description:
    "NFPA-certified kitchen exhaust hood cleaning in Oregon. Family-owned and operated. Proudly serving Eugene, Springfield, and Roseburg for 20 years.",
  areaServed: [
    {
      "@type": "State",
      name: "Oregon",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Eugene",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Medford",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Roseburg",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Grants Pass",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "AdministrativeArea",
      name: "Lane County",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Springfield",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "Place",
      name: "Umpqua",
      postalCode: "97486",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Winston",
      postalCode: "97496",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Creswell",
      postalCode: "97426",
      addressRegion: "OR",
      addressCountry: "US"
    },
    {
      "@type": "AdministrativeArea",
      name: "Douglas County",
      addressRegion: "CO",
      addressCountry: "US"
    },
    {
      "@type": "City",
      name: "Cottage Grove",
      postalCode: "97424",
      addressRegion: "OR",
      addressCountry: "US"
    }
  ],
  subOrganization: [
    {
      "@type": "LocalBusiness",
      name: "Statewide Exhaust Hood Cleaning Services - Roseburg Area",
      telephone: "+1-541-744-8810",
      priceRange: "$$",
      image: "https://www.statewideexhaustservices.com/opengraph.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "662 Winston Section Rd",
        addressLocality: "Winston",
        addressRegion: "OR",
        postalCode: "97496",
        addressCountry: "US"
      },
      areaServed: {
        "@type": "City",
        name: "Roseburg"
      }
    },
    {
      "@type": "LocalBusiness",
      name: "Statewide Exhaust Hood Cleaning Services - Eugene / Springfield Area",
      telephone: "+1-541-744-8810",
      priceRange: "$$",
      image: "https://www.statewideexhaustservices.com/opengraph.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3773 Main St",
        addressLocality: "Springfield",
        addressRegion: "OR",
        postalCode: "97478",
        addressCountry: "US"
      },
      areaServed: [
        {
          "@type": "City",
          name: "Eugene"
        },
        {
          "@type": "City",
          name: "Springfield"
        }
      ]
    }
  ]
};

export const metadata: Metadata = {
  title: {
    template: "%s | Statewide Exhaust Hood Cleaning Services",
    default:
      "Statewide Hood Cleaning In Eugene / Springfield / Roseburg",
  },
  description:
    "NFPA-certified kitchen exhaust hood cleaning in Oregon. Family-owned and operated. Proudly serving Eugene, Springfield, and Roseburg for 20 years.",
  metadataBase: new URL("https://www.statewideexhaustservices.com"),
  openGraph: {
    images: "opengraph.png",
  },
  twitter: {
    images: "opengraph.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const inter = Inter({ subsets: ["latin"] });
const assistant = Assistant({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-betwee min-w-screen">
          <div className="w-full">{children}</div>
        </main>
        <Footer />
        {/* Popups TODO: Move this to a better spot.*/}
        <Suspense>
          <Popup
            message={{
              header: "Thanks.",
              body: "We'll be in touch with you soon!",
            }}
            paramName="show-contact-successful"
          />
        </Suspense>
      </body>
    </html>
  );
}
