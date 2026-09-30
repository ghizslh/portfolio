import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { asset } from '../lib/asset'

interface ProjectCoverProps {
  src: string
  alt: string
  label: string
}

// Affiche l'image du projet si elle existe dans /public, sinon un
// emplacement élégant clairement identifié comme placeholder.
export function ProjectCover({ src, alt, label }: ProjectCoverProps) {
  const [failed, setFailed] = useState(false)
  const { lang } = useLanguage()

  if (failed) {
    return (
      <div className="placeholder-cover">
        <div>
          <span className="placeholder-cover__text">{label}</span>
          <span className="placeholder-cover__hint">
            {lang === 'fr' ? 'Image à ajouter' : 'Image to be added'}
          </span>
        </div>
      </div>
    )
  }

  return <img src={asset(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}
