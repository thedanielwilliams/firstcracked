import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#F5F1EA] text-[#0E0E0E] py-16 px-6 md:px-12 rounded-t-3xl mt-auto border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        
        {/* Brand Column */}
        <div className="space-y-4 max-w-sm">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight text-[#0E0E0E]">
            {/* Burnt Orange Branding Badge */}
            <div className="w-6 h-6 bg-[#FF4A1C] rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            First Cracked
          </Link>
          <p className="text-black/75 text-sm md:text-base">
            Marketing solutions for brands and startups that mean business.
          </p>
          <p className="text-xs md:text-sm text-black/50 font-medium pt-8">
            © {new Date().getFullYear()} First Cracked Studio
          </p>
        </div>

        {/* Links Columns */}
        <div className="flex gap-16 md:gap-24">
          <div className="space-y-4">
            <h4 className="font-bold text-[#0E0E0E] uppercase text-xs tracking-wider">Studio</h4>
            <nav className="flex flex-col gap-3 font-medium text-black/75 text-sm md:text-base">
              <Link href="/" className="hover:text-[#FF4A1C] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#FF4A1C] transition-colors">About</Link>
              <Link href="/labs" className="hover:text-[#FF4A1C] transition-colors">Labs</Link>
              <Link href="/systems" className="hover:text-[#FF4A1C] transition-colors">Systems</Link>
              <Link href="/contact" className="hover:text-[#FF4A1C] transition-colors">Let's Talk</Link>
            </nav>
          </div>
        </div>

      </div>
    </footer>
  )
}
