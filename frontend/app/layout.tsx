import { Inter, Assistant } from "next/font/google";
import "./globals.css";
import { Popup } from "./ui/components";
import { ReactNode, Suspense } from "react";
import { Footer, Header } from "./ui/components";
import { Metadata } from "next";
import Head from "next/head";



export const metadata: Metadata = {
  title: {
    template: "%s | Statewide Exhaust Services",
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
