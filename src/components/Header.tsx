"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

const links = [
  { href: "/", label: "Home" },
  { href: "/labs", label: "Labs" },
  { href: "/systems", label: "Systems" },
]

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-black/5 p-2 flex items-center justify-between pointer-events-auto">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-lg tracking-tight pl-4 hover:opacity-90 transition-opacity">
          <div className="w-5 h-5 bg-[var(--color-brand-blue)] rounded-sm flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="text-[var(--color-brand-dark)]">First Cracked</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors hover:text-black z-10"
                style={{ color: isActive ? "var(--color-brand-dark)" : "var(--color-brand-gray-dark)" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-[var(--color-brand-gray)] rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pr-1">
          {/* Let's Talk Button */}
          <Button asChild variant="yellow" className="h-[40px] px-5 text-sm">
            <Link href="/contact">Let's Talk</Link>
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden items-center justify-center w-[40px] h-[40px] bg-[var(--color-brand-gray)] text-[var(--color-brand-dark)] rounded-full hover:bg-black/5 transition-colors border border-black/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-x-4 top-[90px] bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-black/5 z-40 p-6 flex flex-col pointer-events-auto md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-xl font-bold font-heading">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2 transition-colors ${
                  pathname === link.href ? "text-[var(--color-brand-blue)]" : "text-[var(--color-brand-dark)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`py-2 transition-colors ${
                pathname === "/contact" ? "text-[var(--color-brand-blue)]" : "text-[var(--color-brand-dark)]"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
