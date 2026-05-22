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
  title: "First Cracked Studio | Embedded Marketing Teams & Growth Playbooks",
  description: "Embedded marketing teams and growth playbooks for ambitious brands. Retainer or one-time engagement. Book a call.",
  openGraph: {
    title: "First Cracked Studio | Embedded Marketing Teams & Growth Playbooks",
    description: "Embedded marketing teams and growth playbooks for ambitious brands. Retainer or one-time engagement. Book a call.",
    url: "https://firstcrackedteam.com",
    siteName: "First Cracked Studio",
    images: [
      {
        url: "https://firstcrackedteam.com/og-image.png", // [REPLACE] placeholder
        width: 1200,
        height: 630,
        alt: "First Cracked - Marketing engineered to breakthrough",
      },
    ],
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
    "logo": "https://firstcrackedteam.com/logo.png", // [REPLACE] placeholder
    "description": "Embedded marketing teams and growth playbooks for ambitious brands. Retainer or one-time engagement. Book a call.",
    "sameAs": [
      "https://x.com/firstcracked",
      "https://www.linkedin.com/company/firstcracked"
    ]
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
        
        {/* Sticky Scroll CTA - Floating Book Call */}
        <div className="fixed bottom-6 right-6 md:top-28 md:bottom-auto md:right-8 z-40">
          <Button asChild variant="yellow" className="h-[44px] px-6 shadow-2xl border border-black/10 rounded-full font-bold">
            <a href="/contact">Book a call</a>
          </Button>
        </div>

        <main className="flex-1 pt-24 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
