import { Inter, Assistant } from "next/font/google";
import "./globals.css";
import { Popup } from "./ui/components";
import { ReactNode, Suspense } from "react";
import { Footer, Header } from "./ui/components";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

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
    { "@type": "State", name: "Oregon" },
    { "@type": "City", name: "Eugene" },
    { "@type": "City", name: "Medford" },
    { "@type": "City", name: "Roseburg" },
    { "@type": "City", name: "Grants Pass" },
    { "@type": "AdministrativeArea", name: "Lane County" },
    { "@type": "City", name: "Springfield" },
    { "@type": "Place", name: "Umpqua" },
    { "@type": "City", name: "Winston" },
    { "@type": "City", name: "Creswell" },
    { "@type": "AdministrativeArea", name: "Douglas County" },
    { "@type": "City", name: "Cottage Grove" }
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VGRSMJWHZ3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VGRSMJWHZ3');
          `}
        </Script>
      </head>
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
        <Analytics />
      </body>
    </html>
  );
}
