import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { creations } from '../data/creations'
import { Reveal } from '../components/Reveal'
import { asset } from '../lib/asset'

function CreationImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div style={{ width: '100%', height: '100%' }} />
  return <img src={asset(src)} alt={alt} loading="lazy" onError={() => setFailed(true)} />
}

export function Creations() {
  const { t, lang } = useLanguage()
  return (
    <section id="creations" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.creations.eyebrow}</p>
          <h2>{t.creations.title}</h2>
          <p className="section-heading__subtitle" style={{ marginTop: 'var(--space-1)', marginBottom: 'var(--space-4)' }}>
            {t.creations.subtitle}
          </p>
        </Reveal>
        <div className="creations__grid">
          {creations.map((creation, i) => (
            <Reveal key={creation.slug} delay={i * 60}>
              <div className="creation-item">
                <CreationImage src={creation.image} alt={creation.name} />
                <div className="creation-item__overlay">
                  <strong>{creation.name}</strong>
                  <span>{creation.category[lang]}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
