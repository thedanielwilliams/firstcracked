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
    <div className="flex flex-col gap-24 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-12 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="text-xs md:text-sm font-bold uppercase tracking-widest text-[var(--color-brand-blue)] mb-4"
        >
          What do you want to achieve?
        </motion.p>

        <motion.h1 
          initial="hidden" animate="visible" variants={FADE_UP}
          className="text-5xl md:text-7xl font-bold font-heading leading-[1.05] tracking-tight max-w-4xl"
        >
          Your brand needs more than a strategy deck.
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={FADE_UP} transition={{ delay: 0.1 }}
          className="mt-6 text-xl text-[var(--color-brand-gray-dark)] max-w-3xl"
        >
          Cracked Labs is our retainer model where we don't just plan your growth, we execute it. Every week. Every month. End-to-end.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } }}
          className="mt-8 md:mt-12 w-full max-w-5xl rounded-3xl overflow-hidden relative aspect-[16/10] md:aspect-[21/9]"
        >
          <Image 
            src="/flask.png" 
            alt="Lab flask with blue fluid and sticky notes"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* What Labs Actually Is */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-blue)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
          What labs actually is
        </div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={FADE_UP} className="rounded-3xl overflow-hidden relative h-[300px] md:h-auto md:aspect-square">
            <Image src="/desk.png" alt="Desk flatlay" fill className="object-cover" />
          </motion.div>

          <motion.div variants={FADE_UP} className="bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-heading font-bold leading-tight">
              We become your marketing team. Embedded, accountable, and focused purely on revenue-generating activities.
            </h3>
          </motion.div>

          <motion.div variants={FADE_UP} className="rounded-3xl overflow-hidden relative h-[300px] md:h-auto md:aspect-square">
            <Image src="/team.png" alt="Scrabble TEAM" fill className="object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full bg-[var(--color-brand-dark)] text-white py-24 rounded-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-yellow)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-yellow)]"></span>
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16">
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
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <h4 className="text-xl font-bold">{service}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-blue)] mb-12">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
          How it works
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="sticky top-32 self-start">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Simple.<br/>Embedded.<br/>Accountable.
            </h2>
            <Button size="lg" asChild>
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
                  <h3 className="text-2xl font-bold font-heading mb-3">{step.title}</h3>
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
          className="bg-[var(--color-brand-blue)] text-white rounded-3xl p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 max-w-3xl relative z-10">
            Ready for a team that actually executes?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 relative z-10">
            Let's talk about what Labs looks like for your brand.
          </p>
          <Button size="lg" variant="yellow" asChild className="relative z-10">
            <Link href="/contact">Start the conversation →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
