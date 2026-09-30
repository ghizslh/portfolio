import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from '../components/Reveal'

const skills = {
  fr: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'Flutter / Dart', 'UI/UX', 'Canva / Design graphique', 'Intelligence artificielle'],
  en: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'Flutter / Dart', 'UI/UX', 'Canva / Graphic design', 'Artificial intelligence'],
}

export function Skills() {
  const { t, lang } = useLanguage()
  const list = skills[lang]
  const looped = [...list, ...list]

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.skills.eyebrow}</p>
          <h2 style={{ marginBottom: 'var(--space-4)' }}>{t.skills.title}</h2>
        </Reveal>
      </div>
      <Reveal delay={100}>
        <div className="skills__marquee">
          <ul className="skills__list skills__track">
            {looped.map((skill, i) => (
              <li key={`${skill}-${i}`}>{skill}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
