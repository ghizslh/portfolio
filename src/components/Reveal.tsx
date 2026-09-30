import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  as?: 'div' | 'li'
  className?: string
}

export function Reveal({ children, delay = 0, as = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as
  return (
    <Tag
      ref={ref as any}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  )
}
