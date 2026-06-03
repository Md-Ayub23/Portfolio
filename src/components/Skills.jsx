import { useInView } from '../hooks/useInView'
import { Brain, Code, Cpu, Cloud } from 'lucide-react'

const Skills = () => {
  const [ref, isInView] = useInView()

  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: <Brain size={20} />,
      skills: [
        { name: 'Scikit-learn / XGBoost / RF / SVM', level: 90 },
        { name: 'TensorFlow & PyTorch', level: 82 },
        { name: 'Feature Engineering & Tuning', level: 88 },
        { name: 'Time Series Forecasting', level: 78 },
      ]
    },
    {
      title: 'Generative AI & NLP',
      icon: <Code size={20} />,
      skills: [
        { name: 'LLMs (Claude, GPT, Gemma, Gemini)', level: 92 },
        { name: 'RAG & Vector Embeddings', level: 90 },
        { name: 'LangChain & Prompt Engineering', level: 88 },
        { name: 'Hugging Face & Ollama', level: 85 },
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: <Cpu size={20} />,
      skills: [
        { name: 'FastAPI & REST APIs', level: 94 },
        { name: 'Streamlit & Playwright', level: 88 },
        { name: 'Pandas / NumPy / Matplotlib', level: 92 },
        { name: 'Git / GitHub / Jira', level: 85 },
      ]
    },
    {
      title: 'Data & Cloud',
      icon: <Cloud size={20} />,
      skills: [
        { name: 'Python & SQL', level: 95 },
        { name: 'Supabase & Vector DBs', level: 82 },
        { name: 'Web Scraping & OCR', level: 86 },
        { name: 'CI/CD & Model Deployment', level: 80 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent-cyan font-mono text-sm mb-4">
            <Code size={16} /> Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through internships, hackathons, and hands-on AI product development.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, ci) => (
            <div
              key={category.title}
              className={`gradient-border p-8 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6 text-accent-violet">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-sm text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan skill-bar"
                        style={{ width: isInView ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills