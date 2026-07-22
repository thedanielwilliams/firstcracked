"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function SystemsPage() {
  return (
    <div className="flex flex-col gap-32 overflow-x-hidden section-dark">
      
      {/* Hero Section */}
      <section className="pt-16 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-4"
        >
          What do you want to achieve?
        </motion.p>

        <motion.h1 
          initial="hidden" animate="visible" variants={FADE_UP}
          className="text-5xl md:text-7xl font-bold font-heading leading-[1.05] tracking-tight max-w-4xl text-[var(--color-brand-offwhite)]"
        >
          You need to know exactly how to run it yourself.
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={FADE_UP} transition={{ delay: 0.1 }}
          className="mt-6 text-xl text-[var(--color-brand-gray-dark)] max-w-3xl font-sans"
        >
          Cracked Systems is our playbook model. We build the strategy, the frameworks, and the systems. You take ownership and execute with total confidence.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } }}
          className="mt-12 w-full max-w-5xl rounded-3xl overflow-hidden relative aspect-[16/10] md:aspect-[21/9] border border-white/10 group"
        >
          <div className="absolute inset-0 bg-[var(--color-brand-accent)]/10 mix-blend-color z-10 pointer-events-none"></div>
          <Image 
            src="/book.png" 
            alt="Premium leather bound book representing the strategic playbook"
            fill
            className="object-cover grayscale"
            priority
          />
        </motion.div>
      </section>

      {/* What Systems Actually Is */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          What systems actually is
        </div>
        
        {/* Step 14: Filled in the playbook narrative body copy below header */}
        <p className="text-xl md:text-2xl text-[var(--color-brand-gray-dark)] max-w-4xl leading-relaxed mb-12">
          A 30-day strategic engagement. You leave with a documented playbook your in-house team can execute against for the next 12 months.
        </p>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Flowchart Image with Burnt Orange grading */}
          <motion.div variants={FADE_UP} className="rounded-3xl overflow-hidden relative h-[300px] md:h-auto md:aspect-square border border-white/10 group">
            <div className="absolute inset-0 bg-[var(--color-brand-accent)]/10 mix-blend-color z-10 pointer-events-none"></div>
            <Image src="/flowchart.png" alt="Workflow strategic flowchart" fill className="object-cover grayscale" />
          </motion.div>

          <motion.div variants={FADE_UP} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight text-[var(--color-brand-offwhite)]">
              We document your marketing. Every channel, every funnel, every SOP. All organized in one single playbook.
            </h3>
          </motion.div>

          {/* Step 17: Replace blueprint tiles with cracked code vector */}
          <motion.div variants={FADE_UP} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-[300px] md:h-auto md:aspect-square relative overflow-hidden group">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)]"></span>
              Cracked Code Metaphor
            </div>
            
            <div className="w-full h-36 flex items-center justify-center">
              <svg className="w-32 h-32 text-[var(--color-brand-accent)] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                {/* Screen Outline */}
                <rect x="15" y="20" width="70" height="50" rx="4" stroke="currentColor" strokeWidth="2" />
                <line x1="30" y1="70" x2="20" y2="85" stroke="currentColor" strokeWidth="2" />
                <line x1="70" y1="70" x2="80" y2="85" stroke="currentColor" strokeWidth="2" />
                <line x1="15" y1="85" x2="85" y2="85" stroke="currentColor" strokeWidth="2" />
                {/* Cracked code lines inside screen */}
                <path d="M25 35 L55 35 M25 45 L45 45 M25 55 L65 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* Dynamic lightning crack splitting the code */}
                <path d="M55 25 L45 45 L60 40 L50 65" stroke="#F5F1EA" strokeWidth="2.5" />
              </svg>
            </div>

            <p className="text-xs text-[var(--color-brand-gray-dark)] leading-tight">Cracking and revealing valuable algorithms inside screen structures.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Deliverables */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full bg-[var(--color-brand-gray)] border border-white/5 py-24 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
            Deliverables
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-[var(--color-brand-offwhite)]">
            What we build for you during our 30 days together.
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Growth Playbook",
                desc: "We analyze your audience, map out exactly what channels to focus on, and detail your high-level marketing strategy.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25M2.25 18h19.5" />
                  </svg>
                )
              },
              {
                title: "Visual Assets Roadmap",
                desc: "Creative blueprints showing exactly what design, photo, and video assets your brand needs to stand out and convert.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 00.47 16.122a3 3 0 005.78 1.138l3.28-3.28a3 3 0 000-4.244z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 3a2.25 2.25 0 113.375 3.375L12 16.5l-4.5 1.5 1.5-4.5L19.5 3z" />
                  </svg>
                )
              },
              {
                title: "Launch Frameworks",
                desc: "Campaign checklists and timelines for product drops, service launches, or seasonal promotions to avoid execution errors.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L12 10.5l3 2.25m-6 0v7.5A2.25 2.25 0 0011.25 22.5h1.5A2.25 2.25 0 0015 20.25v-7.5m-6 0H6.75A2.25 2.25 0 014.5 10.5v-3a2.25 2.25 0 012.25-2.25h10.5A2.25 2.25 0 0119.5 7.5v3a2.25 2.25 0 01-2.25 2.25H15" />
                  </svg>
                )
              },
              {
                title: "Sales Systems Strategy",
                desc: "Full maps showing how lead nurture, high-ticket sales pipelines, and sales collateral work together to close deals.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                )
              },
              {
                title: "Execution Blueprints",
                desc: "Channel-by-channel execution templates and standard operating procedures (SOPs) so your in-house team can execute flawlessly.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.98 14.98 0 00-6.16 12.12c2.61.16 5.15-.36 7.38-1.58m5.74-6.58a14.98 14.98 0 00-5.74 6.58m0 0l-5.74-6.58m5.74 6.58l-5.74-6.58" />
                  </svg>
                )
              }
            ].map((del, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row gap-6 hover:bg-white/10 transition-colors"
              >
                {/* Step 13: Thin line SVG replacement for emojis */}
                <div className="w-14 h-14 rounded-full bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 flex items-center justify-center flex-shrink-0 text-[var(--color-brand-accent)]">
                  {del.icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold font-heading mb-2 text-[var(--color-brand-offwhite)]">{del.title}</h4>
                  <p className="text-lg text-[var(--color-brand-gray-dark)] leading-relaxed">{del.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Step 15: Added detailed strategic handoff deliverables checklist below the cards */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-2xl font-bold font-heading text-[var(--color-brand-offwhite)] mb-6">What you receive:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--color-brand-gray-dark)] text-lg">
              {[
                "60-page strategic playbook (PDF + Notion)",
                "90-day execution roadmap",
                "Campaign calendar template",
                "Sales process documentation",
                "2x 60-minute interactive handoff sessions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[var(--color-brand-accent)] font-bold text-xl pt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}
          className="bg-[var(--color-brand-accent)] text-white rounded-3xl p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 max-w-3xl relative z-10 text-white leading-tight">
            Ready for a clear blueprint?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 relative z-10 font-sans">
            Let's build the systems that unlock your brand's true performance.
          </p>
          <Button size="lg" asChild className="relative z-10 bg-white text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-offwhite)] font-bold">
            <Link href="/contact">Build your systems →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
