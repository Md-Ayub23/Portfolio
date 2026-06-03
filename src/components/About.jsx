import Section from './Section'
import { Sparkles } from 'lucide-react'
import ayubPhoto from '../assets/ayub.jpeg'

const About = () => {
  return (
    <Section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-accent-violet font-mono text-sm mb-4">
              <Sparkles size={16} /> About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Turning <span className="gradient-text">Data</span> into Intelligence
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Fresher AI/ML Engineer with <strong className="text-white">2 production AI products shipped</strong> during undergrad internships.
              Hands-on experience building RAG pipelines, LLM-powered automation systems, and end-to-end ML pipelines using Python, FastAPI, and LangChain.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Recognized community speaker on <strong className="text-white">Agentic AI and GenAI deployment</strong> at Madurai AI Community.
              Currently pursuing B.Tech in Information Technology at K.L.N. College of Engineering, graduating May 2026.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Python', 'FastAPI', 'LangChain', 'LLMs', 'RAG', 'PyTorch', 'Scikit-learn', 'Supabase'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full glass text-sm text-slate-300 border border-slate-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="gradient-border p-1 w-72 h-72 md:w-80 md:h-80">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <img
                  src={ayubPhoto}
                  alt="A. Mohammed Ayub"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-violet/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-cyan/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About