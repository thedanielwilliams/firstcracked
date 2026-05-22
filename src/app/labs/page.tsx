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

export default function LabsPage() {
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
          Your brand needs more than a strategy deck.
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={FADE_UP} transition={{ delay: 0.1 }}
          className="mt-6 text-xl text-[var(--color-brand-gray-dark)] max-w-3xl font-sans"
        >
          Cracked Labs is our retainer model where we don't just plan your growth, we execute it. Every week. Every month. End-to-end.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } }}
          className="mt-12 w-full max-w-5xl rounded-3xl overflow-hidden relative aspect-[16/10] md:aspect-[21/9] border border-white/10 group"
        >
          <div className="absolute inset-0 bg-[var(--color-brand-accent)]/10 mix-blend-color z-10 pointer-events-none"></div>
          <Image 
            src="/flask.png" 
            alt="Lab flask with blue fluid representing creative scientific branding"
            fill
            className="object-cover grayscale"
            priority
          />
        </motion.div>
      </section>

      {/* What Labs Actually Is */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          What labs actually is
        </div>
        
        {/* Step 11: Added rich narrative body copy below the header */}
        <p className="text-xl md:text-2xl text-[var(--color-brand-gray-dark)] max-w-4xl leading-relaxed mb-12">
          Cracked Labs replaces your in-house marketing team. We embed senior operators — strategists, designers, copywriters, media buyers — who own your growth as if it were ours.
        </p>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Desk Image - Grayscale and Orange graded */}
          <motion.div variants={FADE_UP} className="rounded-3xl overflow-hidden relative h-[300px] md:h-auto md:aspect-square border border-white/10 group">
            <div className="absolute inset-0 bg-[var(--color-brand-accent)]/10 mix-blend-color z-10 pointer-events-none"></div>
            <Image src="/desk.png" alt="Desk workspace flatlay representation" fill className="object-cover grayscale" />
          </motion.div>

          <motion.div variants={FADE_UP} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-heading font-bold leading-tight text-[var(--color-brand-offwhite)]">
              We become your marketing team. Embedded, accountable, and focused purely on revenue-generating activities.
            </h3>
          </motion.div>

          {/* Step 17: Replace scrabble tiles with cracked safe vector */}
          <motion.div variants={FADE_UP} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-[300px] md:h-auto md:aspect-square relative overflow-hidden group">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)]"></span>
              Cracked Safe Metaphor
            </div>
            
            <div className="w-full h-36 flex items-center justify-center">
              <svg className="w-32 h-32 text-[var(--color-brand-accent)] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                {/* Safe outline */}
                <rect x="25" y="20" width="50" height="60" rx="6" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2" />
                {/* Safe crack lines */}
                <path d="M25 40 L40 45 L35 55 L50 50" stroke="currentColor" strokeWidth="2" />
                {/* Beams of light shining out */}
                <line x1="50" y1="50" x2="10" y2="10" stroke="#F5F1EA" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50" y1="50" x2="90" y2="10" stroke="#F5F1EA" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50" y1="50" x2="90" y2="90" stroke="#F5F1EA" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="50" y1="50" x2="10" y2="90" stroke="#F5F1EA" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>

            <p className="text-xs text-[var(--color-brand-gray-dark)] leading-tight">Embedding and unlocking value inside structural safes.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full bg-[var(--color-brand-gray)] border border-white/5 py-24 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-[var(--color-brand-offwhite)]">
            Everything your brand needs to grow. Nothing it doesn't.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Social Media Marketing",
              "Content Design",
              "High Ticket Management",
              "Email Marketing",
              "Sales Enablement"
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4 hover:bg-white/10 transition-colors"
              >
                {/* Clean inline SVG line icon instead of solid block */}
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/20 flex items-center justify-center flex-shrink-0 text-[var(--color-brand-accent)]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-[var(--color-brand-offwhite)]">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-12">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          How it works
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="sticky top-32 self-start">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-[var(--color-brand-offwhite)]">
              Simple.<br/>Embedded.<br/>Accountable.
            </h2>
            <Button size="lg" asChild className="bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)]">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>

          <div className="space-y-12">
            {[
              { num: "01", title: "Brand Audit", desc: "We audit your brand and current marketing to identify immediate quick wins and long-term bottlenecks." },
              { num: "02", title: "Roadmap", desc: "We build a 90-day growth roadmap together, setting clear KPIs and deliverables." },
              { num: "03", title: "Execution", desc: "We execute, report, and refine every month as an embedded extension of your company." },
              { num: "04", title: "Growth", desc: "You watch your brand grow, reclaim your time, and focus on product and operations." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex gap-6"
              >
                <div className="text-2xl font-bold text-[var(--color-brand-gray-dark)] pt-1">{step.num}.</div>
                <div>
                  {/* Step 12: Added small accent-color number badge above step title */}
                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-bold bg-[var(--color-brand-accent)]/20 border border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] rounded-full">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3 text-[var(--color-brand-offwhite)]">{step.title}</h3>
                  <p className="text-lg text-[var(--color-brand-gray-dark)] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
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
            Ready for a team that actually executes?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 relative z-10 font-sans">
            Let's talk about what Labs looks like for your brand.
          </p>
          <Button size="lg" asChild className="relative z-10 bg-white text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-offwhite)] font-bold">
            <Link href="/contact">Start the conversation →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
