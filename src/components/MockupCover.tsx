import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import type { MockupType } from '../data/projects'
import { asset } from '../lib/asset'

interface MockupCoverProps {
  src: string
  alt: string
  label: string
  mockup: MockupType
}

// Présente la cover d'un projet dans un mockup adapté à son type,
// comme demandé au point 26 du brief : téléphone pour les apps,
// ordinateur pour les sites, composition graphique pour le branding.
// Si l'image n'existe pas encore, un placeholder reste visible à
// l'intérieur du mockup (jamais de fausse capture inventée).
export function MockupCover({ src, alt, label, mockup }: MockupCoverProps) {
  const [failed, setFailed] = useState(false)
  const { lang } = useLanguage()

  const content = failed ? (
    <div className="mockup-placeholder">
      <span>{label}</span>
      <small>{lang === 'fr' ? 'Image à ajouter' : 'Image to be added'}</small>
    </div>
  ) : (
    <img src={asset(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} />
  )

  if (mockup === 'phone') {
    return (
      <div className="mockup mockup--phone">
        <div className="mockup__phone-body">
          <div className="mockup__phone-notch" />
          <div className="mockup__phone-screen">{content}</div>
        </div>
      </div>
    )
  }

  if (mockup === 'laptop') {
    return (
      <div className="mockup mockup--laptop">
        <div className="mockup__laptop-screen">{content}</div>
        <div className="mockup__laptop-base" />
      </div>
    )
  }

  return (
    <div className="mockup mockup--graphic">
      <div className="mockup__graphic-back" />
      <div className="mockup__graphic-front">{content}</div>
    </div>
  )
}
