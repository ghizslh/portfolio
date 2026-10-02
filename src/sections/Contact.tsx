import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'

export function Contact() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="section">
      <div
        className="section-blob"
        style={{ bottom: '-10%', right: '-6%', width: '420px', height: '420px', background: 'var(--color-accent)' }}
        aria-hidden
      />
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p className="contact__text">{t.contact.text}</p>
          <a href="mailto:ghizlenesalah2002@gmail.com" className="btn btn-primary">
            {t.contact.cta} <span aria-hidden>→</span>
          </a>
        </Reveal>
        <Reveal delay={100}>
          <ul className="contact__list">
            <li>
              <div>
                <span className="contact__label">{t.contact.email}</span>
                <a href="mailto:ghizlenesalah2002@gmail.com">ghizlenesalah2002@gmail.com</a>
              </div>
            </li>
            <li>
              <div>
                <span className="contact__label">{t.contact.phone}</span>
                <a href="tel:+213541203251">05 41 20 32 51</a>
              </div>
            </li>
            <li>
              <div>
                <span className="contact__label">{t.contact.instagram}</span>
                <a href="https://www.instagram.com/ateliercoursmaths/" target="_blank" rel="noreferrer">
                  @ateliercoursmaths
                </a>
              </div>
            </li>
            <li>
              <div>
                <span className="contact__label">{t.contact.location}</span>
                <span className="value">Oran, Algérie</span>
              </div>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
