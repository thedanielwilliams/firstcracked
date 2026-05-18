"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

export default function SystemsPage() {
  return (
    <div className="flex flex-col gap-24 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-12 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.h1 
          initial="hidden" animate="visible" variants={FADE_UP}
          className="text-5xl md:text-7xl font-bold font-heading leading-[1.05] tracking-tight max-w-4xl"
        >
          You need to know exactly how to run it yourself.
        </motion.h1>
        
        <motion.p 
          initial="hidden" animate="visible" variants={FADE_UP} transition={{ delay: 0.1 }}
          className="mt-6 text-xl text-[var(--color-brand-gray-dark)] max-w-3xl"
        >
          Cracked Systems is our playbook model — we build the strategy, the frameworks, and the systems. You take ownership and execute with total confidence.
        </motion.p>

        <motion.div 
          initial="hidden" animate="visible" variants={FADE_UP} transition={{ delay: 0.2 }}
          className="mt-8 z-10"
        >
          <Button size="lg" className="rounded-full shadow-lg">
            What do you want to achieve ?
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } }}
          className="mt-[-2rem] w-full max-w-5xl rounded-3xl overflow-hidden relative aspect-[21/9]"
        >
          <Image 
            src="/book.png" 
            alt="Ornate playbook on textured background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* What Systems Actually Is */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-blue)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
          What systems actually is
        </div>
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={FADE_UP} className="rounded-3xl overflow-hidden relative h-[300px] md:h-auto md:aspect-square">
            <Image src="/flowchart.png" alt="Handwritten flowcharts" fill className="object-cover" />
          </motion.div>

          <motion.div variants={FADE_UP} className="bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-heading font-bold leading-tight">
              The blueprint your brand has been missing. We hand you the exact playbook to scale.
            </h3>
          </motion.div>

          <motion.div variants={FADE_UP} className="rounded-3xl overflow-hidden relative h-[300px] md:h-auto md:aspect-square">
            <Image src="/blueprint.png" alt="Strategy Blueprint" fill className="object-cover" />
          </motion.div>
        </motion.div>
      </section>

      {/* Deliverables */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-blue)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
          Deliverables
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12">
          Everything mapped. Nothing left to chance.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Growth Playbooks", icon: "📈", desc: "Step-by-step guides for executing your growth levers." },
            { title: "Clean, Modern Design", icon: "🎨", desc: "Minimal, structured, and visually balanced visual identities." },
            { title: "Campaign Strategy", icon: "♟️", desc: "Full breakdown of your next quarter of marketing pushes." },
            { title: "Sales System", icon: "🔐", desc: "A predictable engine for converting your traffic." },
            { title: "Launch Frameworks", icon: "🚀", desc: "Tested templates to ensure your next product drops perfectly." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-2xl font-bold font-heading">{item.title}</h3>
              <p className="text-[var(--color-brand-gray-dark)] font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
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
              Systems is built for you if…
            </h2>
            <Button size="lg" asChild>
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>

          <div className="space-y-12">
            {[
              { num: "01", title: "In-house capability", desc: "You have an in-house team that needs a clear, expert direction to execute against." },
              { num: "02", title: "Full ownership", desc: "You want full ownership of your marketing without the guesswork." },
              { num: "03", title: "Ready to scale", desc: "You've outgrown winging it but aren't ready for a full retainer agency." },
              { num: "04", title: "A sharp engagement", desc: "You need one sharp engagement that changes how your brand operates." }
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
            Let's build your blueprint.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 relative z-10">
            One engagement. One powerful system. Yours to own forever.
          </p>
          <Button size="lg" variant="yellow" asChild className="relative z-10">
            <Link href="/contact">Get your system built →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
