import Section from './Section'
import { Award, Mic, Sparkles, Brain } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      icon: <Award size={20} />,
      title: 'Top 10 Finalist',
      desc: 'Kalasalingam Euphoria 2025 AI/ML Hackathon — Healthcare AI track (100+ teams)',
    },
    {
      icon: <Mic size={20} />,
      title: 'Recognized Speaker',
      desc: 'Madurai AI Community — Delivered sessions on Agentic AI & GenAI deployment to 50+ developers, business owners, and students.',
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Community Contributor',
      desc: 'Led hands-on workshops on RAG pipelines, LLM deployment, and practical GenAI use cases at Madurai AI Community.',
    },
    {
      icon: <Brain size={20} />,
      title: '2 Production Products',
      desc: 'Shipped Pixel Perfect (visual regression) and Compliance Guard (GST automation) during undergrad internships.',
    },
  ]

  return (
    <Section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent-emerald font-mono text-sm mb-4">
            <Award size={16} /> Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Achievements & <span className="gradient-text">Community</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach) => (
            <div key={ach.title} className="gradient-border p-6 hover-glow transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent-violet shrink-0">
                  {ach.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{ach.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Achievements