import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-clash", // Reusing the clash variable name from globals.css for heading
  subsets: ["latin"],
});

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "First Cracked Studio | Marketing Agency",
  description: "A creative agency crafting innovative design, digital and marketing experiences to elevate your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
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
