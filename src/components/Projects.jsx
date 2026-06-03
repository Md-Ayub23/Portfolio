import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { Sparkles, Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const [ref, isInView] = useInView()

  const filters = ['All', 'Gen AI', 'NLP', 'Automation', 'Healthcare', 'ML Pipeline']

  const projects = [
    {
      title: 'AI Outreach System',
      category: 'Automation',
      description: 'End-to-end B2B email automation pipeline with contact discovery, email verification, AI-personalized generation, and real-time analytics dashboard. Saves ~8 hours/week of manual outreach.',
      tech: ['Python', 'FastAPI', 'Gemini', 'Gmail API', 'Streamlit'],
      github: 'https://github.com/Md-Ayub23/AI-outreach-Agent',
      link: 'https://github.com/Md-Ayub23/AI-outreach-Agent',
      featured: true,
    },
    {
      title: 'ScanBuddy',
      category: 'Healthcare',
      description: 'Multimodal medical scan assistant using Gemma 1.3B with OCR-powered scan extraction, conversational memory, and Tamil/Hindi auto-translation for 20+ scan types.',
      tech: ['Python', 'Ollama', 'Gemma 1.3B', 'OCR', 'Translation APIs'],
      github: 'https://github.com/Md-Ayub23/scanbuddy',
      link: 'https://github.com/Md-Ayub23/scanbuddy',
      featured: true,
    },
    {
      title: 'Pixel Perfect',
      category: 'Automation',
      description: 'AI-powered visual UI regression platform using Claude Opus for human-level layout reasoning. Automated Playwright scraping + Figma API integration, achieving ~90% defect detection accuracy.',
      tech: ['Python', 'FastAPI', 'Playwright', 'Claude Opus', 'Figma API', 'Supabase'],
      // github: 'https://github.com/Md-Ayub23/pixel-perfect',
      // link: 'https://github.com/Md-Ayub23/pixel-perfect',
      featured: true,
    },
    {
      title: 'Compliance Guard',
      category: 'Automation',
      description: 'Automated GST compliance system with rule-based mismatch detection, multi-channel alerting (dashboard + WhatsApp), and modular backend for evolving regulations.',
      tech: ['Python', 'FastAPI', 'WhatsApp API', 'Supabase', 'LLMs'],
      github: 'https://github.com/Md-Ayub23/governanceai_ui',
      link: 'https://github.com/Md-Ayub23/governanceai_ui',
      featured: false,
    },
    {
      title: 'CRM Knowledge Assistant',
      category: 'Gen AI',
      description: 'RAG-based chatbot over company CRM schema using vector embeddings and retrieval-grounded LLM responses. Reduced hallucination to near-zero and cut support lookup time by ~60%.',
      tech: ['Python', 'LangChain', 'Vector DB', 'FastAPI', 'LLMs'],
      // github: 'https://github.com/Md-Ayub23/crm-knowledge-assistant',
      // link: 'https://github.com/Md-Ayub23/crm-knowledge-assistant',
      featured: true,
    },
    {
      title: 'Telecom Churn Prediction',
      category: 'ML Pipeline',
      description: 'End-to-end ML pipeline with 9 domain-driven features, correlation pruning, and soft voting ensemble (LogReg, DT, RF, XGBoost) achieving ~86% recall on churners.',
      tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Joblib'],
      github: 'https://github.com/Md-Ayub23/Telecom-churn-prediction',
      link: 'https://github.com/Md-Ayub23/Telecom-churn-prediction',
      featured: false,
    },
    {
      title: 'Cyberbullying Detection',
      category: 'NLP',
      description: 'Full NLP pipeline over 3 combined datasets with TF-IDF vectorization. Benchmarked Logistic Regression and SVM with user-level features, achieving ~88% F1-score.',
      tech: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'TF-IDF'],
      github: 'https://github.com/Md-Ayub23/cyberbully-comment-prediction',
      link: 'https://github.com/Md-Ayub23/cyberbully-comment-prediction',
      featured: false,
    },

    {
  title: 'Time Sales Forecasting',
  category: 'ML Pipeline',
  description: 'Built a Time sales forecasting pipeline on the Superstore dataset using Facebook Prophet with log-transformation and Category × Segment × Region regressors. Tuned changepoint_prior_scale via grid search achieving SMAPE of 18.27%.',
  tech: ['Python', 'Prophet', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'Plotly'],
  github: 'https://github.com/Md-Ayub23/Sales-forecasting-with-prophet',
  link: 'https://github.com/Md-Ayub23/Sales-forecasting-with-prophet',
  featured: false,
 },
  ]

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent-emerald font-mono text-sm mb-4">
            <Sparkles size={16} /> Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Production systems and research implementations built during internships and personal development.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f
                    ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white'
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`group gradient-border p-6 hover-glow transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                  {project.category}
                </span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-accent-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-slate-500 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects