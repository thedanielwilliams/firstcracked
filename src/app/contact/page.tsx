"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)

    // Redirect to home after showing success state briefly
    setTimeout(() => {
      router.push("/")
    }, 2500)
  }

  return (
    <div className="flex-1 flex items-center justify-center min-h-[75vh] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Column - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-brand-accent)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-accent)]"></span>
            Zero Obligation • 100% Free
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-[var(--color-brand-offwhite)]">
            Book a free email audit
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-brand-gray-dark)] leading-relaxed max-w-md">
            Find out exactly where your email is losing money — in under a week. Zahra & Daniel will review your flows, campaigns, and deliverability and show you the biggest gaps.
          </p>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--color-brand-gray)] border border-white/5 p-8 md:p-12 rounded-3xl"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 bg-[var(--color-brand-accent)] rounded-full flex items-center justify-center text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-heading text-[var(--color-brand-offwhite)]">Audit Requested!</h3>
              <p className="text-[var(--color-brand-gray-dark)] max-w-sm">
                Thanks! Zahra & Daniel will review your store and email setup and follow up shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-[var(--color-brand-offwhite)]">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-[#111111] border-2 border-white/5 focus:border-[var(--color-brand-accent)] rounded-xl px-4 py-3.5 text-[var(--color-brand-offwhite)] outline-none transition-colors shadow-sm placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[var(--color-brand-offwhite)]">Work Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  placeholder="jane@yourbrand.com"
                  className="w-full bg-[#111111] border-2 border-white/5 focus:border-[var(--color-brand-accent)] rounded-xl px-4 py-3.5 text-[var(--color-brand-offwhite)] outline-none transition-colors shadow-sm placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-bold text-[var(--color-brand-offwhite)]">Store URL / Website</label>
                <input 
                  type="text" 
                  id="website"
                  name="website"
                  required
                  placeholder="yourbrand.com"
                  className="w-full bg-[#111111] border-2 border-white/5 focus:border-[var(--color-brand-accent)] rounded-xl px-4 py-3.5 text-[var(--color-brand-offwhite)] outline-none transition-colors shadow-sm placeholder:text-zinc-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[var(--color-brand-offwhite)]">Current Email Setup / Goals (Optional)</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="e.g. Using Klaviyo & Shopify. Want to overhaul our welcome & cart flows..."
                  className="w-full bg-[#111111] border-2 border-white/5 focus:border-[var(--color-brand-accent)] rounded-xl px-4 py-3.5 text-[var(--color-brand-offwhite)] outline-none transition-colors shadow-sm resize-none placeholder:text-zinc-600"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full mt-4 bg-[var(--color-brand-accent)] hover:bg-[var(--color-brand-blue-dark)] text-white font-bold h-12 text-base rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : "Request Free Audit"}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  )
}
