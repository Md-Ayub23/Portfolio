import { useInView } from '../hooks/useInView'

const Section = ({ children, className = '', id }) => {
  const [ref, isInView] = useInView()
  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </section>
  )
}

export default Section