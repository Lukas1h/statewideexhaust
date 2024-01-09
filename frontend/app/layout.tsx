import type { Metadata } from 'next'
import { Inter,Assistant } from 'next/font/google'
import './globals.css'
import {Popup} from './ui/components';
import { ReactNode } from "react";
import { Footer,Header } from './ui/components';


const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Statewide Exhaust Hood Cleaners',
  description: 'Statewide Exhaust Hood Cleaners provide unparalleled quality hood cleaning services throughout western oregon.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="max-w-4xl m-2  ">
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
