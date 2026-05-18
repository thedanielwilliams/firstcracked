import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-gray)] py-16 px-6 md:px-12 rounded-t-3xl mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        
        {/* Brand Column */}
        <div className="space-y-4 max-w-sm">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
            <div className="w-6 h-6 bg-[var(--color-brand-blue)] rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            First Cracked
          </Link>
          <p className="text-[var(--color-brand-gray-dark)]">
            Marketing solutions for brands and startups that mean business.
          </p>
          <p className="text-sm text-gray-400 font-medium pt-8">
            © {new Date().getFullYear()} First Cracked Studio
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex gap-16 md:gap-24">
          <div className="space-y-4">
            <h4 className="font-bold text-[var(--color-brand-dark)]">Studio</h4>
            <nav className="flex flex-col gap-3 font-medium text-[var(--color-brand-gray-dark)]">
              <Link href="/" className="hover:text-[var(--color-brand-blue)] transition-colors">Home</Link>
              <Link href="/labs" className="hover:text-[var(--color-brand-blue)] transition-colors">Labs</Link>
              <Link href="/systems" className="hover:text-[var(--color-brand-blue)] transition-colors">Systems</Link>
              <Link href="/contact" className="hover:text-[var(--color-brand-blue)] transition-colors">Let's Talk</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-[var(--color-brand-dark)]">Socials</h4>
            <nav className="flex flex-col gap-3 font-medium text-[var(--color-brand-gray-dark)]">
              {/* Updating to generic external links to fix the broken template paths */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-blue)] transition-colors">
                X (Twitter)
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-blue)] transition-colors">
                LinkedIn
              </a>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}
