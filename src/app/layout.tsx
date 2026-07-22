import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "First Cracked | DTC Email Marketing Studio for Klaviyo",
  description: "First Cracked builds and optimises Klaviyo flows and campaigns that turn DTC subscribers into repeat buyers so email pulls its weight.",
  openGraph: {
    title: "First Cracked | DTC Email Marketing Studio",
    description: "Email marketing engineered for revenue. We build and optimise Klaviyo flows and campaigns for DTC brands.",
    url: "https://firstcrackedteam.com",
    siteName: "First Cracked Studio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "First Cracked Studio",
    "url": "https://firstcrackedteam.com",
    "description": "First Cracked builds and optimises Klaviyo flows and campaigns that turn DTC subscribers into repeat buyers."
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Header />
        


        <main className="flex-1 pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
