import { useInView } from '../hooks/useInView'

const Stats = () => {
  const [ref, isInView] = useInView()
  const stats = [
    { value: '2', label: 'Production AI Products', suffix: '+' },
    { value: '4', label: 'End-to-End Projects', suffix: '+' },
    { value: '2', label: 'Internships Completed', suffix: '' },
    { value: 'Top 10', label: 'Hackathon Finalist', suffix: '' },
  ]

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl glass hover-glow transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats