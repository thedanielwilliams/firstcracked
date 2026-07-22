"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-24 overflow-x-hidden section-dark pt-16">
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-4"
        >
          Who we are
        </motion.p>
        
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="text-4xl md:text-7xl font-bold font-heading leading-[1.05] tracking-tight max-w-4xl text-[var(--color-brand-offwhite)]"
        >
          Email specialists. No fluff, no middle management.
        </motion.h1>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ delay: 0.15 }}
          className="mt-12 w-full max-w-3xl bg-[var(--color-brand-gray)] border-2 border-[var(--color-brand-accent)] rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-accent)]/10 rounded-full blur-2xl"></div>
          <p className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-brand-offwhite)] leading-snug">
            "The two people you hire are the two people doing the work."
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 md:p-14 space-y-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
            About First Cracked
          </div>
          
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[var(--color-brand-offwhite)]">
            DTC Email Marketing Specialists
          </h2>
          
          <div className="text-lg text-[var(--color-brand-gray-dark)] space-y-6 leading-relaxed">
            <p>
              First Cracked is Zahra and Daniel, two email specialists with around four years each running email across Klaviyo, Shopify, ConvertKit and Mailchimp.
            </p>
            <p>
              We've seen too many DTC brands hand off their email to generalist agencies where account managers pass requests down to junior interns. The result? Generic blasts, broken flows, and money left on the table.
            </p>
            <p>
              No account managers, no juniors. When you work with First Cracked, Zahra and Daniel build your flows, write your campaigns, segment your list, and optimize your deliverability directly.
            </p>
          </div>
        </div>
      </section>

      {/* 2-Person Specialist Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-12 justify-center">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Meet the Specialists
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-[320px]">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-[var(--color-brand-accent)]/15 border border-[var(--color-brand-accent)]/40 flex items-center justify-center font-heading font-bold text-[var(--color-brand-accent)] text-xl">
                Z
              </div>
              <span className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-bold">Email Specialist</span>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold font-heading text-[var(--color-brand-offwhite)] mb-1">Zahra</h4>
              <span className="text-xs font-semibold text-[var(--color-brand-gray-dark)] mb-3 block">Klaviyo, Shopify & Email Strategy</span>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">
                4+ years architecting high-converting automated sequences, segmenting customer lifecycle cohorts, and auditing deliverability.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-[320px]">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-full bg-[var(--color-brand-accent)]/15 border border-[var(--color-brand-accent)]/40 flex items-center justify-center font-heading font-bold text-[var(--color-brand-accent)] text-xl">
                D
              </div>
              <span className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-bold">Email Specialist</span>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold font-heading text-[var(--color-brand-offwhite)] mb-1">Daniel</h4>
              <span className="text-xs font-semibold text-[var(--color-brand-gray-dark)] mb-3 block">Campaign Copywriting & Flow Optimization</span>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">
                4+ years crafting campaign rhythms, writing persuasive DTC copy, and testing email mechanics that convert list subscribers into buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}
          className="bg-[var(--color-brand-accent)] text-white rounded-3xl p-12 md:p-20 flex flex-col items-center text-center relative overflow-hidden"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 max-w-3xl relative z-10 text-white leading-tight">
            Find out exactly where your email is losing money.
          </h2>
          <Button size="lg" asChild className="relative z-10 bg-white text-[#0E0E0E] hover:bg-slate-100 font-bold rounded-full px-8">
            <Link href="/contact">Book a free audit →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
