"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TeardownsPage() {
  const teardowns = [
    {
      brand: "DTC Beverage Brand",
      title: "Why 80% of Abandoned Carts Wasted Their Discount Code",
      category: "Abandoned Cart Flow",
      readTime: "5 min read",
      summary: "We signed up, abandoned a cart with $65 of product, and recorded 4 days of emails. Here is where their sequence lost momentum and how a 3-step fix recovers 18% more checkouts."
    },
    {
      brand: "Apparel & Lifestyle Co.",
      title: "The 1-Email Welcome Flow Leaving $12k/Mo on the Table",
      category: "Welcome Sequence",
      readTime: "7 min read",
      summary: "Most new subscribers buy on email 2 or 3. This brand sent a single coupon email and never followed up. Here is our exact 4-part rewrite."
    },
    {
      brand: "Skincare Essentials",
      title: "How Plain Text Win-Back Emails Outperform Graphic Blasts",
      category: "Win-Back Sequence",
      readTime: "6 min read",
      summary: "Breaking down how over-designed campaign templates landed in the promotions tab, and how a founder plain-text letter reactivated 14% of dormant subscribers."
    }
  ]

  return (
    <div className="flex flex-col gap-16 overflow-x-hidden section-dark pt-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Teardowns — see how we think
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-offwhite)]">
          Real DTC emails, broken down.
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-brand-gray-dark)] leading-relaxed">
          Every week we tear down a real DTC brand's email: we sign up, abandon a cart, screenshot what arrives, and break down what's costing them revenue and what we'd do instead.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teardowns.map((item, idx) => (
          <div key={idx} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--color-brand-accent)]/40 transition-colors">
            <div>
              <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold text-[var(--color-brand-accent)] mb-4">
                <span>{item.category}</span>
                <span className="text-[var(--color-brand-gray-dark)] font-normal">{item.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-2">{item.title}</h3>
              <p className="text-xs font-semibold text-white/70 uppercase tracking-widest mb-4">{item.brand}</p>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed mb-8">{item.summary}</p>
            </div>

            <Button asChild variant="outline" className="w-full border-white/10 text-white hover:bg-white/10 rounded-full font-bold">
              <Link href="/contact">Read Teardown breakdown →</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* Audit Banner */}
      <div className="bg-[var(--color-brand-accent)] text-white rounded-3xl p-10 md:p-14 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">Want us to tear down your email flows next?</h2>
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Book a free audit. We review your flows, campaigns and deliverability and show you the biggest gaps — no obligation.
        </p>
        <Button asChild size="lg" className="bg-white text-[#0E0E0E] hover:bg-slate-100 font-bold rounded-full px-8">
          <Link href="/contact">Book a free audit</Link>
        </Button>
      </div>
    </div>
  )
}
