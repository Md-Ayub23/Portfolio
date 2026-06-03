import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-500 text-sm">
            © 2026 A. Mohammed Ayub.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {[
            { icon: <Github size={20} />, href: 'https://github.com/Md-Ayub23', label: 'GitHub' },
            { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/mdayub23', label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: 'mailto:ayub23022@gmail.com', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer