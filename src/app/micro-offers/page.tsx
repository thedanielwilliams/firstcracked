"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MicroOffersPage() {
  const microOffers = [
    {
      title: "Welcome Flow Overhaul",
      price: "$400",
      for: "Convert new DTC subscribers into first-time buyers",
      details: "Full audit, copy, design structure, and setup of a 3-part Welcome flow in Klaviyo."
    },
    {
      title: "Abandoned Cart Recovery",
      price: "$400",
      for: "Recover high-intent shoppers before they walk away",
      details: "Timed multi-stage trigger setup, objection handling, and offer strategy to recover abandoned checkouts."
    },
    {
      title: "Post-Purchase & Cross-Sell",
      price: "$400",
      for: "Increase customer LTV and repeat purchase rate",
      details: "Automated follow-ups, thank you sequence, product recommendations, and review requests."
    },
    {
      title: "Browse Abandonment Sequence",
      price: "$400",
      for: "Capture window shoppers who left without adding to cart",
      details: "Targeted reminders that re-engage casual site visitors with relevant category recommendations."
    }
  ]

  return (
    <div className="flex flex-col gap-16 overflow-x-hidden section-dark pt-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Micro-Offers
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-offwhite)]">
          Fix one specific flow, fast.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-brand-gray-dark)]">
          No long commitments. For $400, we pick your single highest-value email gap and fix it properly so you see immediate revenue return.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {microOffers.map((item, idx) => (
          <div key={idx} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--color-brand-accent)]/40 transition-colors">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold font-heading text-white">{item.title}</h3>
                <span className="text-2xl font-bold font-heading text-[var(--color-brand-accent)]">{item.price}</span>
              </div>
              <p className="font-semibold text-white/90 mb-2">{item.for}</p>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed mb-8">{item.details}</p>
            </div>

            <Button asChild className="w-full bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)] rounded-full font-bold">
              <Link href="/contact">Book a $400 Flow Fix</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
