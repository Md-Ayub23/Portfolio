import { useInView } from '../hooks/useInView'
import { Github, Linkedin, Mail, ChevronDown, ArrowRight, Download } from 'lucide-react'

const Hero = () => {
  const [ref, isInView] = useInView()

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            Open to AI/ML Opportunities
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="block text-slate-100">A. Mohammed</span>
          <span className="block gradient-text mt-2">Ayub</span>
        </h1>

        <p className={`text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Machine Learning & AI Engineer. Building RAG pipelines, LLM-powered automation,
          and end-to-end ML systems. 2 production AI products shipped. Graduating May 2026.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-semibold text-lg hover-glow flex items-center gap-2">
            View Projects <ArrowRight size={20} />
          </a>
          <a href="#contact" className="px-8 py-4 rounded-full glass text-slate-300 font-semibold text-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
            <Mail size={20} /> Get in Touch
          </a>
          <a 
            href="/resume.pdf" 
            download="A_Mohammed_Ayub_Resume.pdf"
            className="px-8 py-4 rounded-full glass border border-accent-emerald/30 text-accent-emerald font-semibold text-lg hover:bg-accent-emerald/10 transition-colors flex items-center gap-2"
          >
            <Download size={20} /> Resume
          </a>
        </div>

        <div className={`flex items-center justify-center gap-6 mt-12 transition-all duration-1000 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
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
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-accent-violet/50 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero