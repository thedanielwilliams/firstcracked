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
    }, 2000)
  }

  return (
    <div className="flex-1 flex items-center justify-center min-h-[70vh] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Column - Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
            Let's Work Together
          </h1>
          <p className="text-xl text-[var(--color-brand-gray-dark)] leading-relaxed max-w-md">
            Whether you need a full embedded team or a strategic blueprint to execute yourself, we're ready to crack open your next stage of growth.
          </p>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[var(--color-brand-gray)] p-8 md:p-12 rounded-3xl"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold font-heading">Message Sent</h3>
              <p className="text-[var(--color-brand-gray-dark)]">Redirecting you to the home page...</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-[var(--color-brand-dark)]">First + Last Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-white border-2 border-transparent focus:border-[var(--color-brand-blue)] rounded-xl px-4 py-4 text-[var(--color-brand-dark)] outline-none transition-colors shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-[var(--color-brand-dark)]">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  placeholder="name@firstcracked.com"
                  className="w-full bg-white border-2 border-transparent focus:border-[var(--color-brand-blue)] rounded-xl px-4 py-4 text-[var(--color-brand-dark)] outline-none transition-colors shadow-sm"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-[var(--color-brand-dark)]">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Leave us a message..."
                  className="w-full bg-white border-2 border-transparent focus:border-[var(--color-brand-blue)] rounded-xl px-4 py-4 text-[var(--color-brand-dark)] outline-none transition-colors shadow-sm resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="yellow" 
                size="lg" 
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-[var(--color-brand-dark)] border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : "Submit"}
              </Button>
            </form>
          )}
        </motion.div>

      </div>
    </div>
  )
}
