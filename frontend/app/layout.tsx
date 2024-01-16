import { Inter,Assistant } from 'next/font/google'
import './globals.css'
import {Popup} from './ui/components';
import { ReactNode } from "react";
import { Footer,Header } from './ui/components';
import { Metadata } from 'next';
import Head from 'next/head'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Statewide Exhaust Services',
    default: 'Statewide Exhaust Services - Professional Hood Cleaning All Throughout Western Oregon',
  },
  description: 'Statewide Exhaust Services provides unparalleled quality hood cleaning services throughout western oregon. Contact us now for a free quote!',
  metadataBase: new URL('https://www.statewideexhaustservices.com'),
  openGraph: {
    images: 'opengraph.png',
  },
  twitter:{
    images:'opengraph.png',
  }
};

const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-betwee min-w-screen">
          <div className="w-full max-w-4xl m-2">
            {children}
          </div>
        </main>
        <Footer />
        {/* Popups TODO: Move this to a better spot.*/}
        <Popup message={{
          header:"Thanks.",
          body:"We'll be in touch with you soon!"
        }} paramName="show-contact-successful"/>
      </body>
    </html>
  )
}
