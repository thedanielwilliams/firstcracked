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
    <div className="flex flex-col gap-24 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-12 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold font-heading leading-[1.05] tracking-tight max-w-4xl"
        >
          Marketing engineered to breakthrough
        </motion.h1>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="mt-8 z-10"
        >
          <Button size="lg" className="rounded-full shadow-lg">
            What do you want to achieve ?
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.8 } }}
          className="mt-[-2rem] w-full max-w-5xl rounded-3xl overflow-hidden relative aspect-[21/9]"
        >
          <Image 
            src="/megaphone.png" 
            alt="Megaphone with sticky notes"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]"
        >
          
          {/* Box 1: Happy Clients */}
          <motion.div variants={FADE_UP} className="md:col-span-1 bg-[var(--color-brand-dark)] text-white rounded-3xl p-8 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-blue)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
              Happy Clients
            </div>
            <p className="text-2xl font-medium leading-tight">Brands and coaches who scaled with us and stayed.</p>
          </motion.div>

          {/* Box 2: Services List */}
          <motion.div variants={FADE_UP} className="md:col-span-1 bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col justify-center gap-2">
            <p className="font-medium text-lg">Social media marketing.</p>
            <p className="font-medium text-lg">Email marketing.</p>
            <p className="font-medium text-lg">High-ticket management.</p>
            <p className="font-medium text-lg text-[var(--color-brand-gray-dark)]">Sales enablement.</p>
          </motion.div>

          {/* Box 3: Image Vault */}
          <motion.div variants={FADE_UP} className="md:col-span-2 rounded-3xl overflow-hidden relative">
            <Image src="/vault.png" alt="Secure vault" fill className="object-cover" />
            <div className="absolute top-6 left-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              Industries Cracked
            </div>
          </motion.div>

          {/* Box 4: Challenge CTA */}
          <motion.div variants={FADE_UP} className="md:col-span-2 bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col justify-between items-start">
            <h3 className="text-3xl font-heading font-bold max-w-xs">What's your biggest growth challenge?</h3>
            <Button variant="yellow" asChild>
              <Link href="/contact">We can crack it.</Link>
            </Button>
          </motion.div>

          {/* Box 5: Satisfied Clients */}
          <motion.div variants={FADE_UP} className="md:col-span-1 bg-[var(--color-brand-blue)] text-white rounded-3xl p-8 flex flex-col justify-center items-center text-center">
            <h2 className="text-7xl font-heading font-bold">14+</h2>
            <p className="text-sm font-bold uppercase tracking-wider mt-2">Satisfied Clients</p>
          </motion.div>

          {/* Box 6: Image Rubiks */}
          <motion.div variants={FADE_UP} className="md:col-span-1 rounded-3xl overflow-hidden relative">
            <Image src="/rubiks.png" alt="Rubiks cube" fill className="object-cover" />
          </motion.div>

          {/* Box 7: About */}
          <motion.div variants={FADE_UP} className="md:col-span-2 bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-blue)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
              About
            </div>
            <h3 className="text-3xl font-heading font-bold">We built this for brands that are ready.</h3>
          </motion.div>

          {/* Box 8: Who We Are */}
          <motion.div variants={FADE_UP} className="md:col-span-2 bg-[var(--color-brand-dark)] text-white rounded-3xl p-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50">
              <span className="w-2 h-2 rounded-full bg-white/50"></span>
              Why we exist
            </div>
            <p className="text-xl leading-relaxed">
              FirstCracked exists for one reason: brands and ambitious founders deserve marketing that actually moves the needle. Not fluff. Not vanity metrics. Real growth cracked open, built to last.
            </p>
          </motion.div>

          {/* Box 9: Sticky Wall Image */}
          <motion.div variants={FADE_UP} className="md:col-span-4 rounded-3xl overflow-hidden relative aspect-[21/9] md:aspect-auto md:h-[400px]">
            <Image src="/wall.png" alt="Marketing sticky notes wall" fill className="object-cover" />
          </motion.div>

        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-blue)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></span>
          Pricing
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP}
            className="bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold font-heading mb-4">Subscription</h3>
            <p className="text-[var(--color-brand-gray-dark)] mb-6 text-sm">
              Retainer-based growth. We embed with your brand and execute social media, email, high-ticket sales, and beyond.
            </p>
            <p className="font-medium mb-8 text-sm">You focus on the business. We grow it.</p>
            
            <div className="text-3xl font-bold mb-8">$<span className="text-lg font-medium text-gray-500">/month</span></div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium flex-1">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                Social media marketing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                Email marketing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                High-ticket management
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                Sales enablement
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} transition={{ delay: 0.1 }}
            className="bg-[var(--color-brand-dark)] text-white rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold font-heading">Subscription</h3>
              <span className="bg-[var(--color-brand-blue)] text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">+plus</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm">
              Retainer-based growth. We embed with your brand and execute social media, email, high-ticket sales, and beyond.
            </p>
            <p className="font-medium mb-8 text-sm">You focus on the business. We grow it.</p>
            
            <div className="text-3xl font-bold mb-8">$<span className="text-lg font-medium text-gray-500">/Month</span></div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium flex-1">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-yellow)] flex items-center justify-center text-black text-xs">✓</div>
                Social media marketing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-yellow)] flex items-center justify-center text-black text-xs">✓</div>
                Email marketing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-yellow)] flex items-center justify-center text-black text-xs">✓</div>
                High-ticket management
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-yellow)] flex items-center justify-center text-black text-xs">✓</div>
                Sales enablement
              </li>
            </ul>
            <Button asChild variant="yellow" className="w-full">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} transition={{ delay: 0.2 }}
            className="bg-[var(--color-brand-gray)] rounded-3xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold font-heading mb-4">Systems</h3>
            <p className="text-[var(--color-brand-gray-dark)] mb-6 text-sm">
              One-time playbooks. We build the strategy, the campaigns, the growth systems. You execute with full confidence.
            </p>
            <p className="font-medium mb-8 text-sm">Own your growth. We hand you the blueprint.</p>
            
            <div className="text-3xl font-bold mb-8">$</div>
            
            <ul className="space-y-3 mb-8 text-sm font-medium flex-1">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                Growth playbooks
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                Sales systems
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                Campaign strategy
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[var(--color-brand-blue)] flex items-center justify-center text-white text-xs">✓</div>
                Launch frameworks
              </li>
            </ul>
            <Button asChild className="w-full">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}
          className="bg-[var(--color-brand-blue)] text-white rounded-3xl p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 max-w-3xl relative z-10">
            Your growth is already in there. Let's crack it open.
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 relative z-10">
            Whether you need a full marketing team (Labs) or a world-class strategy to execute yourself (Systems) we have the model for you.
          </p>
          <Button size="lg" variant="yellow" asChild className="relative z-10">
            <Link href="/contact">Let's talk →</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
