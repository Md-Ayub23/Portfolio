import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-mono tracking-tighter">
          <span className="gradient-text">MA</span>
          <span className="text-slate-400">.dev</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent-violet to-accent-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="A_Mohammed_Ayub_Resume.pdf"
            className="text-sm font-medium text-accent-emerald hover:text-accent-emerald/80 transition-colors flex items-center gap-1.5"
          >
            <Download size={16} /> Resume
          </a>
          <a
            href="mailto:ayub23022@gmail.com?subject=Job%20Opportunity%20-%20AI/ML%20Engineer&body=Hi%20Ayub,%0A%0AI%20came%20across%20your%20portfolio%20and..."
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-accent-violet/25"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-2xl p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-300 hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="A_Mohammed_Ayub_Resume.pdf"
            onClick={() => setMobileOpen(false)}
            className="text-accent-emerald hover:text-accent-emerald/80 transition-colors py-2 flex items-center gap-2"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="mailto:ayub23022@gmail.com?subject=Job%20Opportunity%20-%20AI/ML%20Engineer&body=Hi%20Ayub,%0A%0AI%20came%20across%20your%20portfolio%20and..."
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-white text-sm font-semibold text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}

export default Nav