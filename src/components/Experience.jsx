import Section from './Section'
import { Database } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: 'AI/ML Engineer',
      company: 'Radiance Testing Solutions',
      period: 'March 2026 – Present',
      description: 'Built Pixel Perfect — an AI-powered visual UI regression platform. Engineered Playwright scraping, Figma API integration, and Claude Opus-powered visual comparison engine achieving ~90% defect detection accuracy. Developed FastAPI backend orchestrating export→scrape→compare pipeline, reducing defect reporting from hours to under 5 minutes.',
      tags: ['Python', 'FastAPI', 'Playwright', 'Claude Opus', 'Figma API', 'Supabase'],
    },
    {
      role: 'AI Product Developer Intern',
      company: 'Pibi Technologies',
      period: '3 months',
      description: 'Shipped Compliance Guard — automated GST compliance system with rule-based mismatch detection and multi-channel alerting. Built CRM Knowledge Assistant RAG chatbot using vector embeddings and retrieval-grounded LLM responses, cutting support lookup time by ~60%.',
      tags: ['Python', 'FastAPI', 'LLMs', 'RAG', 'WhatsApp API', 'Supabase'],
    },
  ]

  return (
    <Section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent-rose font-mono text-sm mb-4">
            <Database size={16} /> Career Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line hidden md:block" />

          {experiences.map((exp, i) => (
            <div key={i} className={`relative mb-12 md:mb-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'} md:w-1/2`}>
              <div className="gradient-border p-6 md:p-8 relative">
                <div className="hidden md:block absolute top-8 w-4 h-4 rounded-full bg-accent-violet border-4 border-slate-950 shadow-lg shadow-accent-violet/50"
                  style={{ [i % 2 === 0 ? 'right' : 'left']: '-26px' }}
                />

                <span className="text-accent-cyan font-mono text-sm">{exp.period}</span>
                <h3 className="text-xl font-semibold mt-2 mb-1">{exp.role}</h3>
                <p className="text-slate-400 text-sm mb-3">{exp.company}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs glass text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experience