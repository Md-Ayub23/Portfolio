import { useState } from 'react'
import Section from './Section'
import { Mail, Phone, Github, Linkedin, ArrowRight, Send } from 'lucide-react'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [focused, setFocused] = useState(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData()
    formData.append('name', formState.name)
    formData.append('email', formState.email)
    formData.append('message', formState.message)
    formData.append('_subject', `New Portfolio Message from ${formState.name}`)
    formData.append('_template', 'table')

    try {
      await fetch('https://formsubmit.co/ayub23022@gmail.com', {
        method: 'POST',
        body: formData,
      })
      setStatus('sent')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <Section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-accent-violet font-mono text-sm mb-4">
            <Mail size={16} /> Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Open to AI/ML engineering roles, internships, and research collaborations. Graduating May 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <a href="mailto:ayub23022@gmail.com" className="block gradient-border p-6 hover-glow transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent-cyan">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-white">ayub23022@gmail.com</p>
                </div>
              </div>
            </a>

            <a href="tel:+918807709991" className="block gradient-border p-6 hover-glow transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent-emerald">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <p className="text-white">+91 88077 09991</p>
                </div>
              </div>
            </a>

            <a href="https://github.com/Md-Ayub23" target="_blank" rel="noopener noreferrer" className="block gradient-border p-6 hover-glow transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent-violet">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="text-white">github.com/Md-Ayub23</p>
                </div>
              </div>
            </a>

            <a href="https://linkedin.com/in/mdayub23" target="_blank" rel="noopener noreferrer" className="block gradient-border p-6 hover-glow transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent-rose">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-white">linkedin.com/in/mdayub23</p>
                </div>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: 'name', label: 'Name', type: 'text', required: true },
              { id: 'email', label: 'Email', type: 'email', required: true },
            ].map((field) => (
              <div key={field.id} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === field.id || formState[field.id]
                      ? '-top-2.5 text-xs text-accent-violet bg-slate-950 px-2'
                      : 'top-4 text-slate-500'
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required={field.required}
                  value={formState[field.id]}
                  onChange={(e) => setFormState({ ...formState, [field.id]: e.target.value })}
                  onFocus={() => setFocused(field.id)}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet/50 text-white transition-all"
                />
              </div>
            ))}

            <div className="relative">
              <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused === 'message' || formState.message
                    ? '-top-2.5 text-xs text-accent-violet bg-slate-950 px-2'
                    : 'top-4 text-slate-500'
                }`}
              >
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                className="w-full px-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-accent-violet focus:outline-none focus:ring-1 focus:ring-accent-violet/50 text-white transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-semibold text-lg hover-glow flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {status === 'sending' ? (
                <span className="animate-pulse">Sending...</span>
              ) : status === 'sent' ? (
                <span className="text-emerald-200">Message Sent!</span>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>

            {status === 'sent' && (
              <p className="text-center text-emerald-400 text-sm mt-2">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 text-sm mt-2">
                Something went wrong. Please email me directly at ayub23022@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Contact