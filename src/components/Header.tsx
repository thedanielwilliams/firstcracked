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
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Desktop Navigation Pill */}
        <nav className="hidden md:flex items-center bg-white/90 backdrop-blur-md rounded-full shadow-sm p-1.5 border border-black/5">
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

        {/* Let's Talk Button - Desktop */}
        <div className="hidden md:block">
          <Button asChild variant="yellow" className="h-[44px] px-6">
            <Link href="/contact">Let's Talk</Link>
          </Button>
        </div>

        {/* Mobile Header elements */}
        <div className="flex md:hidden items-center gap-2">
          <Button asChild variant="yellow" className="h-[44px] px-6 w-[200px] shadow-lg">
            <Link href="/contact" className="truncate">Let's Talk</Link>
          </Button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-[44px] h-[44px] bg-white rounded-full shadow-lg border border-black/5"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[80px] bg-[var(--background)] z-40 p-6 flex flex-col pointer-events-auto md:hidden">
          <nav className="flex flex-col gap-4 text-2xl font-bold font-heading">
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
