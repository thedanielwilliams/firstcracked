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

export default function Home() {
  return (
    <div className="flex flex-col gap-32 overflow-x-hidden section-dark">
      
      {/* Hero Section */}
      <section className="pt-16 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center relative">
        
        {/* Jagged Horizontal Hairline Crack Animation (Splits on page load) */}
        <div className="w-full max-w-4xl mb-8 relative h-4 overflow-hidden flex items-center justify-center">
          <svg className="w-full h-full text-[var(--color-brand-accent)]" viewBox="0 0 1000 20" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M0 10 L350 10 L360 16 L375 4 L385 14 L395 8 L405 10 L600 10 L610 16 L620 4 L635 12 L645 8 L655 10 L1000 10"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-heading leading-[1.05] tracking-tight max-w-4xl text-[var(--color-brand-offwhite)]"
        >
          Marketing engineered to breakthrough
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ delay: 0.1 }}
          className="mt-6 text-xl md:text-2xl text-[var(--color-brand-gray-dark)] max-w-2xl font-sans"
        >
          Embedded marketing teams and growth playbooks for brands ready to scale past $1M.
        </motion.p>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ delay: 0.2 }}
          className="mt-8 z-10"
        >
          <Button size="lg" asChild className="rounded-full shadow-lg bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)]">
            <Link href="/contact">Start a project</Link>
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.8 } }}
          className="mt-12 w-full max-w-5xl rounded-3xl overflow-hidden relative aspect-[16/10] md:aspect-[21/9] border border-white/10 group"
        >
          {/* Desaturate + 10% burnt orange duotone grading overlay */}
          <div className="absolute inset-0 bg-[var(--color-brand-accent)]/10 mix-blend-color z-10 pointer-events-none transition-colors group-hover:bg-[var(--color-brand-accent)]/5"></div>
          <Image 
            src="/megaphone.png" 
            alt="Megaphone on styled background representing breakout marketing"
            fill
            className="object-cover grayscale contrast-115 transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </motion.div>
      </section>

      {/* Happy Clients Logo Grid & Testimonials */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Happy Clients
        </div>

        {/* 6 Greyscale client logo placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-65 mb-16 py-8 border-y border-white/5">
          {["AlphaCo", "SaaSify", "DTC Lab", "Summit", "ScaleOps", "Apex"].map((logoName, i) => (
            <div key={i} className="flex items-center gap-2 text-[var(--color-brand-gray-dark)] hover:text-white transition-colors duration-300 font-heading font-bold text-lg grayscale">
              <svg className="w-6 h-6 text-[var(--color-brand-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span>{logoName}</span>
            </div>
          ))}
        </div>

        {/* 2 Premium Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--color-brand-gray)] rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col justify-between">
            <p className="text-xl md:text-2xl text-[var(--color-brand-offwhite)] font-sans italic leading-relaxed mb-8">
              "First Cracked completely re-engineered our customer acquisition. Having a senior team embedded with us made execution flawless — we scaled past our annual targets 3 months early."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-accent)]/20 border border-[var(--color-brand-accent)] flex items-center justify-center font-bold text-[var(--color-brand-accent)] text-lg">
                JD
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-brand-offwhite)]">John Doe</h4>
                <p className="text-sm text-[var(--color-brand-gray-dark)]">VP Growth, SaaSify</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-brand-gray)] rounded-3xl p-8 md:p-12 border border-white/5 flex flex-col justify-between">
            <p className="text-xl md:text-2xl text-[var(--color-brand-offwhite)] font-sans italic leading-relaxed mb-8">
              "We didn't need another slide deck; we needed execution. Cracked Labs acted as our embedded team and unlocked +312% in predictable MRR within a quarter. Best partnership we've ever made."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[var(--color-brand-accent)]/20 border border-[var(--color-brand-accent)] flex items-center justify-center font-bold text-[var(--color-brand-accent)] text-lg">
                AS
              </div>
              <div>
                <h4 className="font-bold text-[var(--color-brand-offwhite)]">Sarah Jenkins</h4>
                <p className="text-sm text-[var(--color-brand-gray-dark)]">Founder, DTC Lab</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid & About Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]"
        >
          
          {/* Box 1: Core Focus */}
          <motion.div variants={FADE_UP} className="md:col-span-1 bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              Why us
            </div>
            <p className="text-2xl font-medium leading-tight text-[var(--color-brand-offwhite)]">Brands scale with us and stay.</p>
          </motion.div>

          {/* Box 2: Services List */}
          <motion.div variants={FADE_UP} className="md:col-span-1 bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-center gap-2 text-[var(--color-brand-offwhite)]">
            <p className="font-medium text-lg">Social media marketing.</p>
            <p className="font-medium text-lg">Email marketing.</p>
            <p className="font-medium text-lg">High-ticket management.</p>
            <p className="font-medium text-lg text-[var(--color-brand-gray-dark)]">Sales enablement.</p>
          </motion.div>

          {/* Box 3: Industries Cracked (Image) */}
          <motion.div variants={FADE_UP} className="md:col-span-2 rounded-3xl overflow-hidden relative border border-white/10 group">
            <div className="absolute inset-0 bg-[var(--color-brand-accent)]/10 mix-blend-color z-10 pointer-events-none"></div>
            <Image src="/vault.png" alt="Secure vault representing secure growth" fill className="object-cover grayscale" />
            <div className="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white z-20">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              Industries Cracked
            </div>
          </motion.div>

          {/* Box 4: Challenge CTA */}
          <motion.div variants={FADE_UP} className="md:col-span-2 bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between items-start">
            <h3 className="text-3xl font-heading font-bold max-w-xs text-[var(--color-brand-offwhite)]">What's your biggest growth challenge?</h3>
            <Button variant="yellow" asChild className="bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)]">
              <Link href="/contact">We can crack it.</Link>
            </Button>
          </motion.div>

          {/* Box 5: Custom SVG replacement for Rubiks Cube - Cracked Egg revealing gold */}
          <motion.div variants={FADE_UP} className="md:col-span-1 bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-accent)] z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)]"></span>
              Metaphor
            </div>
            {/* Custom vector showing egg cracking open revealing warm gold core */}
            <div className="w-full h-32 flex items-center justify-center relative my-4">
              <svg className="w-28 h-28 text-[var(--color-brand-accent)] transition-transform duration-500 group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                {/* Left shell segment */}
                <path d="M48 20 C35 20, 20 35, 20 55 C20 70, 30 80, 48 80 C48 80, 42 65, 48 55 C52 45, 45 35, 48 20 Z" fill="currentColor" opacity="0.85" />
                {/* Right shell segment */}
                <path d="M52 20 C65 20, 80 35, 80 55 C80 70, 70 80, 52 80 C52 80, 58 65, 52 55 C48 45, 55 35, 52 20 Z" fill="currentColor" opacity="0.85" />
                {/* Glowing gold yolk in split */}
                <circle cx="50" cy="50" r="14" fill="#F5F1EA" />
                <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
              </svg>
            </div>
            <p className="text-xs text-[var(--color-brand-gray-dark)] leading-tight z-10">Cracking open latent value inside established brands.</p>
          </motion.div>

          {/* Box 6: Satisfied Clients Row (Unused / Now Box 6) */}
          <motion.div variants={FADE_UP} className="md:col-span-1 bg-[var(--color-brand-accent)] text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-7xl font-heading font-bold text-white">14+</h2>
            <p className="text-xs font-bold uppercase tracking-widest mt-2 text-white/80">Satisfied Clients</p>
          </motion.div>

          {/* Box 7: About */}
          <motion.div variants={FADE_UP} className="md:col-span-2 bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              About
            </div>
            <h3 className="text-3xl font-heading font-bold text-[var(--color-brand-offwhite)] leading-tight">
              We built First Cracked for brands that are ready to scale with pure execution.
            </h3>
          </motion.div>

          {/* Box 8: Who We Are */}
          <motion.div variants={FADE_UP} className="md:col-span-2 bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col gap-4 text-[var(--color-brand-offwhite)]">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-gray-dark)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              Why we exist
            </div>
            <p className="text-lg leading-relaxed text-[var(--color-brand-gray-dark)]">
              Ambitious founders deserve marketing that actually moves the needle. Not fluff. Not vanity hours. Real growth cracked open through rigorous creative and analytical playbooks.
            </p>
          </motion.div>

          {/* Box 9: Sticky Wall Image */}
          <motion.div variants={FADE_UP} className="md:col-span-4 rounded-3xl overflow-hidden relative aspect-[21/9] md:aspect-auto md:h-[400px] border border-white/10 group">
            <div className="absolute inset-0 bg-[var(--color-brand-accent)]/10 mix-blend-color z-10 pointer-events-none"></div>
            <Image src="/wall.png" alt="Marketing sticky notes wall representing brainstorming and execution" fill className="object-cover grayscale" />
          </motion.div>

        </motion.div>
      </section>

      {/* The Method Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full py-12">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-12">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Method
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Crack Method</h2>
          <p className="text-lg text-[var(--color-brand-gray-dark)]">How we engineer predictable growth and take over execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { num: "01", name: "Audit", desc: "We map your current ecosystem to identify immediate quick-wins and structural bottlenecks." },
            { num: "02", name: "Roadmap", desc: "We co-build a 90-day growth blueprint, establishing transparent KPIs and deliverables." },
            { num: "03", name: "Execute", desc: "We deploy senior talent to fully embed and execute across all high-leverage marketing channels." },
            { num: "04", name: "Scale", desc: "We systematically optimize systems to unlock predictable, compounded revenue growth." }
          ].map((method, idx) => (
            <div key={idx} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-[240px] hover:border-[var(--color-brand-accent)]/30 transition-colors duration-300">
              <span className="text-3xl font-heading font-bold text-[var(--color-brand-accent)]">{method.num}</span>
              <div>
                <h4 className="text-2xl font-bold font-heading mb-2 text-[var(--color-brand-offwhite)]">{method.name}</h4>
                <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Cracked Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-12">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Industries Cracked
        </div>

        {/* 6 Industry pill tags as buttons */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center max-w-4xl mx-auto">
          {["DTC", "SaaS", "Creator Brands", "Coaching", "B2B Services", "Health & Wellness"].map((tag, i) => (
            <button key={i} className="px-6 py-3 bg-[var(--color-brand-gray)] hover:bg-[var(--color-brand-accent)] hover:text-white border border-white/10 rounded-full font-bold text-sm tracking-wide transition-all duration-300 text-[var(--color-brand-offwhite)]">
              {tag}
            </button>
          ))}
        </div>

        {/* 4 Statistics columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5 text-center">
          {[
            { value: "$15M+", label: "Revenue Generated" },
            { value: "50+", label: "Campaigns Shipped" },
            { value: "6+", label: "Industries Served" },
            { value: "14+", label: "Satisfied Clients" }
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-accent)]">{stat.value}</h3>
              <p className="text-xs uppercase tracking-widest text-[var(--color-brand-gray-dark)] font-bold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Pricing
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Subscription/Labs */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP}
            className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold font-heading mb-4 text-[var(--color-brand-offwhite)]">Subscription / Labs</h3>
            <p className="text-[var(--color-brand-gray-dark)] mb-6 text-sm">
              Retainer-based growth. We embed with your brand and execute social media, email, high-ticket sales, and creative.
            </p>
            <p className="font-medium mb-8 text-sm text-[var(--color-brand-offwhite)]">You focus on the business. We grow it.</p>
            
            <div className="text-3xl font-bold mb-8 text-[var(--color-brand-offwhite)]">
              From $4,500<span className="text-sm font-medium text-[var(--color-brand-gray-dark)]">/mo</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium flex-1 text-[var(--color-brand-offwhite)]">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Social media marketing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Email marketing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                High-ticket management
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Sales enablement
              </li>
            </ul>
            <Button asChild className="w-full bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)]">
              <Link href="/contact">Start a project</Link>
            </Button>
          </motion.div>

          {/* Card 2: Subscription Plus */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} transition={{ delay: 0.1 }}
            className="bg-[var(--color-brand-gray)] border-2 border-[var(--color-brand-accent)] text-white rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold font-heading text-[var(--color-brand-offwhite)]">Subscription Plus</h3>
              <span className="bg-[var(--color-brand-accent)] text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">+plus</span>
            </div>
            <p className="text-[var(--color-brand-gray-dark)] mb-6 text-sm">
              Retainer-based growth. Expanded support including custom landing page builds, extensive paid ads support, and custom visual shoots.
            </p>
            <p className="font-medium mb-8 text-sm text-[var(--color-brand-offwhite)]">Accelerated growth with embedded media buyers.</p>
            
            <div className="text-3xl font-bold mb-8 text-[var(--color-brand-offwhite)]">
              From $4,500<span className="text-sm font-medium text-[var(--color-brand-gray-dark)]">/mo</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium flex-1 text-[var(--color-brand-offwhite)]">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                All standard subscription channels
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Embedded media buying (Ads)
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                High-converting landing pages
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Bi-weekly analytics reports
              </li>
            </ul>
            <Button asChild variant="yellow" className="w-full bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)]">
              <Link href="/contact">Start a project</Link>
            </Button>
          </motion.div>

          {/* Card 3: Systems */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} transition={{ delay: 0.2 }}
            className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold font-heading mb-4 text-[var(--color-brand-offwhite)]">Systems</h3>
            <p className="text-[var(--color-brand-gray-dark)] mb-6 text-sm">
              One-time playbooks. We build the strategy, the campaigns, the growth systems. You execute with full confidence.
            </p>
            <p className="font-medium mb-8 text-sm text-[var(--color-brand-offwhite)]">Own your growth. We hand you the blueprint.</p>
            
            <div className="text-3xl font-bold mb-8 text-[var(--color-brand-offwhite)]">
              From $7,500
            </div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium flex-1 text-[var(--color-brand-offwhite)]">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Growth playbooks
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Sales systems
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Campaign strategy
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center text-white text-xs">✓</div>
                Launch frameworks
              </li>
            </ul>
            <Button asChild className="w-full bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)]">
              <Link href="/contact">Start a project</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-12">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          Case Studies
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              type: "DTC Skincare Brand, Series A",
              challenge: "Outgrown traditional agencies with zero strategic direction.",
              solution: "Deployed an embedded full-stack team running high-frequency creative loops and automated email flows.",
              result: "+312% MRR in 90 days",
              slug: "skincare"
            },
            {
              type: "SaaS Analytics Platform",
              challenge: "High onboarding drop-offs and poor trial conversion rates.",
              solution: "Rebuilt onboarding flows, refined key in-app copy, and implemented an accountable email strategy.",
              result: "+45% LTV Increase",
              slug: "saas"
            },
            {
              type: "Creator Education Brand",
              challenge: "High traffic, but extremely low organic checkout conversion.",
              solution: "Engineered a high-ticket conversion funnel and streamlined modern sales playbooks.",
              result: "$250k Launch Week",
              slug: "creator"
            }
          ].map((cs, idx) => (
            <div key={idx} className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--color-brand-accent)]/30 transition-all duration-300 group">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-bold mb-4 block">{cs.type}</span>
                <p className="text-[var(--color-brand-gray-dark)] text-sm mb-2"><strong className="text-[var(--color-brand-offwhite)]">Challenge:</strong> {cs.challenge}</p>
                <p className="text-[var(--color-brand-gray-dark)] text-sm mb-6"><strong className="text-[var(--color-brand-offwhite)]">Solution:</strong> {cs.solution}</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-heading font-bold text-[var(--color-brand-accent)] mb-4">{cs.result}</div>
                <Link href={`/work/${cs.slug}`} className="text-sm font-bold text-[var(--color-brand-offwhite)] hover:text-[var(--color-brand-accent)] transition-colors flex items-center gap-1">
                  View Case Study
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
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
            Your growth is already in there. Let's crack it open.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 relative z-10 font-sans">
            Whether you need a full marketing team (Labs) or a world-class strategy to execute yourself (Systems) we have the model for you.
          </p>
          <Button size="lg" asChild className="relative z-10 bg-white text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-offwhite)] font-bold">
            <Link href="/contact">Let's talk →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
