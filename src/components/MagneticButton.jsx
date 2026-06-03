import { useRef } from 'react'

const MagneticButton = ({ children, className = '', onClick, href }) => {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0, 0)'
  }

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={btnRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`magnetic-btn inline-block ${className}`}
    >
      {children}
    </Tag>
  )
}

export default MagneticButton