"use client"

import * as React from "react"
import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles, Mail, Zap, Target, TrendingUp, ShieldCheck, UserCheck } from "lucide-react"

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
}

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0)

  const faqs = [
    {
      q: "Do you only do email?",
      a: "Yes. That's exactly why we're better at it than a full-service agency doing five things at once."
    },
    {
      q: "What platforms?",
      a: "Klaviyo and Shopify mainly, plus ConvertKit and Mailchimp."
    },
    {
      q: "We're a smaller brand — is this for us?",
      a: "If you're on Shopify with a growing list, yes. The audit will tell us honestly."
    },
    {
      q: "How fast do we see results?",
      a: "Flows can be live within days. Optimisation compounds over weeks."
    },
    {
      q: "Do you guarantee a number?",
      a: "No — and be wary of anyone who does. We guarantee the work, done well, and realistic targets we agree upfront."
    }
  ]

  const offers = [
    { title: "Free Audit", for: "See where email is losing you money", price: "Free", href: "/contact", highlight: false },
    { title: "Micro-offers", for: "Fix one specific flow, fast", price: "$400", href: "/micro-offers", highlight: false },
    { title: "Core Flows Sprint (2 mo)", for: "Get your core email system built", price: "$3,000", href: "/services", highlight: true },
    { title: "Email Revenue Programme (3 mo)", for: "Make email a top revenue channel", price: "$7,500", href: "/services", highlight: false }
  ]

  return (
    <div className="flex flex-col gap-32 overflow-x-hidden section-dark">
      
      {/* Hero Section */}
      <section className="pt-12 md:pt-16 px-6 md:px-12 max-w-7xl mx-auto w-full flex flex-col items-center text-center relative">
        
        {/* Jagged Horizontal Hairline Crack Animation */}
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
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl lg:text-[5.5rem] font-bold font-heading leading-[1.05] tracking-tight max-w-5xl text-[var(--color-brand-offwhite)]"
        >
          Email marketing engineered for revenue
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-[var(--color-brand-gray-dark)] max-w-3xl font-sans leading-relaxed"
        >
          First Cracked builds and optimises the Klaviyo flows and campaigns that turn DTC subscribers into repeat buyers so email pulls its weight instead of leaving money on the table.
        </motion.p>
        
        {/* CTAs */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 z-10"
        >
          <Button size="lg" asChild className="rounded-full h-14 px-8 text-base shadow-xl bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)] font-bold">
            <Link href="/contact">Book a free audit</Link>
          </Button>
          <Link 
            href="/teardowns" 
            className="inline-flex items-center gap-2 text-base font-semibold text-[var(--color-brand-offwhite)] hover:text-[var(--color-brand-accent)] transition-colors py-2"
          >
            See how we think <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Hero Visual Mockup Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 w-full max-w-5xl rounded-3xl bg-gradient-to-b from-[#1E1E1E] to-[#121212] border border-white/10 p-6 md:p-10 shadow-2xl relative overflow-hidden text-left"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-[var(--color-brand-accent)] font-bold mb-1">Klaviyo Flow Architecture</div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">Automated DTC Revenue Engine</h3>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] flex items-center justify-center">
                <Mail size={20} />
              </div>
              <h4 className="font-bold text-white text-lg">Welcome Sequence</h4>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">Converts 8.4% of new signups into first-time customers within 7 days.</p>
            </div>

            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] flex items-center justify-center">
                <Zap size={20} />
              </div>
              <h4 className="font-bold text-white text-lg">Cart Recovery Flow</h4>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">Recovers high-intent abandoners with timed multi-stage reminders.</p>
            </div>

            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-brand-accent)]/20 text-[var(--color-brand-accent)] flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <h4 className="font-bold text-white text-lg">Post-Purchase & VIP</h4>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">Drives 2nd & 3rd purchases automatically, increasing LTV.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
          The problem
        </div>

        <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-brand-offwhite)] leading-tight">
              For a healthy DTC brand, email should drive a quarter to a third of revenue.
            </h2>
            <p className="text-xl md:text-2xl text-[var(--color-brand-gray-dark)] font-sans leading-relaxed">
              Most sit well below that, not because email stopped working, but because no one owns it. The welcome flow is one email or none. Abandoned carts walk away. The list gets the same blast every time, so it tunes out. And nobody can say what email actually earns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl font-bold text-[var(--color-brand-accent)] font-heading">25% – 33%</div>
              <div className="text-xs text-[var(--color-brand-gray-dark)] font-medium mt-1">Healthy DTC Email Revenue Benchmark</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl font-bold text-red-400 font-heading">&lt; 10%</div>
              <div className="text-xs text-[var(--color-brand-gray-dark)] font-medium mt-1">Average Store Without Dedicated Ownership</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="text-2xl font-bold text-emerald-400 font-heading">100% Owned</div>
              <div className="text-xs text-[var(--color-brand-gray-dark)] font-medium mt-1">What First Cracked Delivers</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              What we do
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-offwhite)]">
              We do one thing, which is why we're good at it.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP}
            className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--color-brand-accent)]/40 transition-colors duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-accent)]/15 text-[var(--color-brand-accent)] flex items-center justify-center mb-6 font-bold text-xl">
                01
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--color-brand-offwhite)]">
                Build the flows that sell on autopilot
              </h3>
              <p className="text-[var(--color-brand-gray-dark)] leading-relaxed text-base">
                Welcome, abandoned cart, browse abandonment, post-purchase, win-back — the automated sequences that recover revenue while you sleep.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} transition={{ delay: 0.1 }}
            className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--color-brand-accent)]/40 transition-colors duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-accent)]/15 text-[var(--color-brand-accent)] flex items-center justify-center mb-6 font-bold text-xl">
                02
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--color-brand-offwhite)]">
                Run campaigns that give your list a reason to buy
              </h3>
              <p className="text-[var(--color-brand-gray-dark)] leading-relaxed text-base">
                Planned, written and sent on a rhythm, not whenever someone remembers.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={FADE_UP} transition={{ delay: 0.2 }}
            className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-[var(--color-brand-accent)]/40 transition-colors duration-300"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-brand-accent)]/15 text-[var(--color-brand-accent)] flex items-center justify-center mb-6 font-bold text-xl">
                03
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-[var(--color-brand-offwhite)]">
                Segment, test and optimise
              </h3>
              <p className="text-[var(--color-brand-gray-dark)] leading-relaxed text-base">
                So the right message reaches the right buyer, and every send teaches us how to earn more from the next one.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof — See How We Think Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col gap-10">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              Proof — see how we think
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-brand-offwhite)] mb-6">
              We're a young studio, so we'll show you rather than tell you.
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-brand-gray-dark)] leading-relaxed max-w-4xl">
              Every week we tear down a real DTC brand's email, we sign up, we abandon a cart, we screenshot what arrives, and we break down exactly what's costing them revenue and what we'd do instead. No theory, no fluff. If you want to know whether we understand your email before you spend a penny, read one.
            </p>
          </div>

          <div>
            <Button asChild size="lg" className="bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)] rounded-full font-bold px-8">
              <Link href="/teardowns">Browse the teardowns →</Link>
            </Button>
          </div>

          <div className="pt-8 border-t border-white/10 text-sm md:text-base text-[var(--color-brand-gray-dark)] leading-relaxed max-w-4xl">
            Behind the scenes, the email work we've run for brands has performed well — strong open and click-through, and sequences that pulled their weight in real launches. We keep client specifics private, but we're happy to talk you through what we did on a call.
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
            How it works
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-[var(--color-brand-offwhite)]">
            You don't have to commit to anything big to find out if we're worth it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-4xl font-heading font-bold text-[var(--color-brand-accent)] block mb-4">1</span>
              <h3 className="text-xl font-bold font-heading mb-3 text-[var(--color-brand-offwhite)]">Start with a free audit</h3>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">
                We review your flows, campaigns and deliverability and show you the biggest gaps — no obligation.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-4xl font-heading font-bold text-[var(--color-brand-accent)] block mb-4">2</span>
              <h3 className="text-xl font-bold font-heading mb-3 text-[var(--color-brand-offwhite)]">Fix the highest-value gap first</h3>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">
                Usually one flow, done properly, so you see the value before you scale.
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <span className="text-4xl font-heading font-bold text-[var(--color-brand-accent)] block mb-4">3</span>
              <h3 className="text-xl font-bold font-heading mb-3 text-[var(--color-brand-offwhite)]">Build the system</h3>
              <p className="text-sm text-[var(--color-brand-gray-dark)] leading-relaxed">
                Most brands then move into a two-month sprint to get their core flows live, and a three-month programme to optimise and compound them.
              </p>
            </div>
          </div>
        </div>

        {/* Callout box */}
        <div className="bg-[var(--color-brand-accent)]/10 border border-[var(--color-brand-accent)]/30 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="text-sm uppercase font-bold tracking-widest text-[var(--color-brand-accent)] block mb-1">Our Philosophy</span>
            <h4 className="text-2xl md:text-3xl font-heading font-bold text-white">Cheap proof first. Big commitment last.</h4>
          </div>
          <Button asChild size="lg" className="bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-blue-dark)] rounded-full font-bold px-8 shrink-0">
            <Link href="/contact">Book a free audit</Link>
          </Button>
        </div>
      </section>

      {/* The Offers, at a Glance Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              The offers, at a glance
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-offwhite)]">
              Clear scope. No hidden retainers.
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 text-base font-semibold text-[var(--color-brand-accent)] hover:underline">
            See all offers →
          </Link>
        </div>

        {/* Offers Grid / Table */}
        <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl overflow-hidden shadow-xl">
          <div className="hidden md:grid grid-cols-12 px-8 py-5 border-b border-white/10 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-gray-dark)]">
            <div className="col-span-4">Offer</div>
            <div className="col-span-6">What it's for</div>
            <div className="col-span-2 text-right">From</div>
          </div>

          <div className="divide-y divide-white/5">
            {offers.map((offer, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 px-8 py-6 items-center gap-4 hover:bg-white/[0.02] transition-colors ${
                  offer.highlight ? "bg-[var(--color-brand-accent)]/5 border-l-4 border-l-[var(--color-brand-accent)]" : ""
                }`}
              >
                <div className="md:col-span-4 font-heading font-bold text-xl text-[var(--color-brand-offwhite)] flex items-center gap-3">
                  {offer.title}
                  {offer.highlight && (
                    <span className="text-[10px] uppercase tracking-wider bg-[var(--color-brand-accent)] text-white px-2 py-0.5 rounded font-sans font-bold">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="md:col-span-6 text-base text-[var(--color-brand-gray-dark)]">
                  {offer.for}
                </div>
                <div className="md:col-span-2 md:text-right font-bold text-xl text-[var(--color-brand-accent)] flex items-center justify-between md:justify-end gap-4">
                  <span>{offer.price}</span>
                  <Link href={offer.href} className="text-xs underline text-white/60 hover:text-white font-normal md:hidden">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's Behind It Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="bg-[var(--color-brand-gray)] border border-white/5 rounded-3xl p-8 md:p-16">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
              Who's behind it
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[var(--color-brand-offwhite)] leading-tight">
              First Cracked is Zahra and Daniel
            </h2>
            
            <p className="text-lg md:text-xl text-[var(--color-brand-gray-dark)] leading-relaxed font-sans">
              Two email specialists with around four years each running email across Klaviyo, Shopify, ConvertKit and Mailchimp. No account managers, no juniors. The two people you hire are the two people doing the work.
            </p>

            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-base font-bold text-[var(--color-brand-accent)] hover:underline"
              >
                More about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto w-full">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--color-brand-accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[var(--color-brand-offwhite)]">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div 
                key={index} 
                className="bg-[var(--color-brand-gray)] border border-white/5 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-xl text-[var(--color-brand-offwhite)] hover:text-[var(--color-brand-accent)] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 shrink-0 text-[var(--color-brand-accent)] ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-base text-[var(--color-brand-gray-dark)] leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-12">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={FADE_UP}
          className="bg-[var(--color-brand-accent)] text-white rounded-3xl p-10 md:p-20 flex flex-col items-center text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 max-w-3xl relative z-10 text-white leading-tight">
            Find out exactly where your email is losing money — in under a week.
          </h2>
          
          <Button size="lg" asChild className="relative z-10 bg-white text-[#0E0E0E] hover:bg-slate-100 font-bold h-14 px-10 text-base rounded-full shadow-lg">
            <Link href="/contact">Book a free audit</Link>
          </Button>
        </motion.div>
      </section>

    </div>
  )
}
