"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-32 overflow-x-hidden section-dark pt-16">
      
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
          className="text-5xl md:text-7xl font-bold font-heading leading-[1.05] tracking-tight max-w-4xl text-[var(--color-brand-offwhite)]"
        >
          Built on pure execution.
        </motion.h1>

        {/* Strong POV Statement (Step 19) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ delay: 0.15 }}
          className="mt-12 w-full max-w-3xl bg-[var(--color-brand-gray)] border-2 border-[var(--color-brand-accent)] rounded-3xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-brand-accent)]/10 rounded-full blur-2xl"></div>
          <p className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-brand-offwhite)] leading-snug">
            "We believe most agencies sell hours. We sell outcomes."
          </p>
        </motion.div>
      </section>

      {/* Founder Story */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          
          {/* Founder Story (Step 19 - 200 words) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[var(--color-brand-offwhite)]">
              Why we started First Cracked
            </h2>
            <div className="text-lg text-[var(--color-brand-gray-dark)] space-y-6 leading-relaxed">
              <p>
                First Cracked was founded to eliminate the friction between strategy and tangible business growth. In standard agency models, clients are handed beautiful decks, but left to handle execution on their own, resulting in delayed launches and missed opportunities. We wanted to build something different.
              </p>
              <p>
                We believe that premium brands deserve embedded marketing teams that act like partners, not service vendors. By combining senior strategists, copywriters, and performance marketers under one roof, we embed ourselves directly into your organization, operating with high velocity and total transparency.
              </p>
              <p>
                Whether building automated email ecosystems or formulating high-ticket sales playbooks, we are focused purely on revenue-generating actions. We don't hide behind vanity metrics or count hours; we scale outcomes.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3-Person Team Grid (Step 19) */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full py-12 border-t border-white/5">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-12">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          The Operators
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Zahra Williams",
              role: "Founder & Strategy Lead",
              initials: "ZW",
              desc: "Former growth marketer focused on architecting embedded marketing teams and business playbooks."
            },
            {
              name: "Alex Chen",
              role: "Creative Director",
              initials: "AC",
              desc: "Ensures visual and design execution stands out on premium aesthetics across every touchpoint."
            },
            {
              name: "Marcus Vance",
              role: "Operations Lead",
              initials: "MV",
              desc: "Manages timelines, sprint deliverables, and analytics accountability to ensure target completions."
            }
          ].map((member, idx) => (
            <div key={idx} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-[360px] hover:border-[var(--color-brand-accent)]/30 transition-colors duration-300">
              <div className="flex justify-between items-start">
                {/* Team avatar vector */}
                <div className="w-16 h-16 rounded-full bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/30 flex items-center justify-center font-heading font-bold text-[var(--color-brand-accent)] text-xl">
                  {member.initials}
                </div>
                <span className="text-xs uppercase tracking-widest text-[var(--color-brand-gray-dark)] font-bold">Cracked Team</span>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold font-heading text-[var(--color-brand-offwhite)] mb-1">{member.name}</h4>
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-4 block">{member.role}</span>
                <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
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
            Ready to partner with real operators?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 relative z-10 font-sans">
            Let's discuss how we can embed with your brand to unlock growth.
          </p>
          <Button size="lg" asChild className="relative z-10 bg-white text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-offwhite)] font-bold">
            <Link href="/contact">Book your call →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
