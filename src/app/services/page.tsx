"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const offers = [
    { 
      title: "Free Audit", 
      for: "See where email is losing you money", 
      price: "Free", 
      desc: "We review your flows, campaigns and deliverability and show you the biggest gaps — with zero obligation.",
      cta: "Book a free audit"
    },
    { 
      title: "Micro-offers", 
      for: "Fix one specific flow, fast", 
      price: "$400", 
      desc: "Usually one flow (e.g. Welcome or Abandoned Cart), done properly, so you see the value before you scale.",
      cta: "Fix a flow"
    },
    { 
      title: "Core Flows Sprint", 
      duration: "2 Months", 
      for: "Get your core email system built", 
      price: "$800", 
      desc: "A dedicated two-month sprint to build, set up, and launch your automated Klaviyo revenue engine across all core sequences.",
      cta: "Start a sprint"
    },
    { 
      title: "Email Revenue Programme", 
      duration: "3 Months", 
      for: "Make email a top revenue channel", 
      price: "$1,500", 
      desc: "Comprehensive programme combining core flows, active campaign management, segmentation, deliverability, and ongoing testing to drive 25-33% of store revenue.",
      cta: "Apply for programme"
    }
  ]

  return (
    <div className="flex flex-col gap-20 overflow-x-hidden section-dark pt-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Services & Offers
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-offwhite)]">
          Email services engineered for DTC growth
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-brand-gray-dark)]">
          We'd rather prove it than pitch it. Pick where you want to start.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offers.map((offer, idx) => (
          <div key={idx} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-[var(--color-brand-accent)]/40 transition-colors">
            <div>
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-[var(--color-brand-offwhite)]">{offer.title}</h3>
                  {offer.duration && (
                    <span className="text-xs uppercase tracking-wider font-bold text-[var(--color-brand-accent)]">{offer.duration}</span>
                  )}
                </div>
                <div className="text-2xl font-bold text-[var(--color-brand-accent)] font-heading">{offer.price}</div>
              </div>
              
              <p className="font-semibold text-white/90 text-lg mb-3">{offer.for}</p>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed mb-8">{offer.desc}</p>
            </div>

            <Button asChild className="w-full bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)] rounded-full font-bold">
              <Link href="/contact">{offer.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
