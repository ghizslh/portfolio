import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'

export function About() {
  const { t } = useLanguage()
  const [failed, setFailed] = useState(false)

  return (
    <section id="about" className="section">
      <div className="container about__grid">
        <Reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2>About me</h2>
          <div className="about__facts">
            <div>
              <span>{t.about.education}</span>
            </div>
            <div>
              <span>{t.about.location}</span>
            </div>
            <div>
              <span>{t.about.focus}</span>
            </div>
          </div>
          <p className="about__quote">{t.about.quote}</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="about__visual">
            {!failed && (
              <img src={`${import.meta.env.BASE_URL}about.jpg`} alt="Ghizlene Salah" onError={() => setFailed(true)} />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
