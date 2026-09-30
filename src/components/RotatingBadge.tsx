import { useId } from 'react'

interface RotatingBadgeProps {
  text: string
  size?: number
  className?: string
}

// Petit tampon rond qui tourne en continu, texte le long d'un cercle,
// avec une icône fixe au centre — inspiré du badge "Designing with
// purpose & passion" de la référence.
export function RotatingBadge({ text, size = 116, className = '' }: RotatingBadgeProps) {
  const id = useId().replace(/:/g, '')
  const radius = size / 2 - 12

  return (
    <div className={`rotating-badge-wrap ${className}`} style={{ width: size, height: size }} aria-hidden>
      <svg className="rotating-badge-spin" viewBox={`0 0 ${size} ${size}`}>
        <path
          id={id}
          d={`M ${size / 2},${size / 2} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          fill="none"
        />
        <text>
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="rotating-badge-icon">
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2c0 4-1 6.5-3.2 8.8C6.5 13 4 14 2 14c2 0 4.5 1 6.8 3.2C11 19.5 12 22 12 22c0-4 1-6.5 3.2-8.8C17.5 11 20 10 22 10c-2 0-4.5-1-6.8-3.2C13 4.5 12 2 12 2Z"
            fill="var(--color-accent)"
          />
        </svg>
      </span>
    </div>
  )
}
