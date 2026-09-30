import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { projects, type ProjectCategory } from '../data/projects'
import { Reveal } from '../components/Reveal'
import { MockupCover } from '../components/MockupCover'

const filters: { key: ProjectCategory | 'all'; fr: string; en: string }[] = [
  { key: 'all', fr: 'Tous', en: 'All' },
  { key: 'app', fr: 'Applications', en: 'Apps' },
  { key: 'web', fr: 'Web', en: 'Web' },
  { key: 'design', fr: 'Design', en: 'Design' },
]

export function Projects() {
  const { t, lang } = useLanguage()
  const [active, setActive] = useState<ProjectCategory | 'all'>('all')

  const visible = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="section">
      <div
        className="section-blob"
        style={{ top: '-6%', left: '-8%', width: '360px', height: '360px', background: 'var(--color-accent)' }}
        aria-hidden
      />
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.projects.eyebrow}</p>
              <h2>{t.projects.title}</h2>
              <p className="section-heading__subtitle">{t.projects.subtitle}</p>
            </div>
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f.key}
                  className={active === f.key ? 'is-active' : ''}
                  onClick={() => setActive(f.key)}
                >
                  {lang === 'fr' ? f.fr : f.en}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="project-grid">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <Link to={`/project/${project.slug}`} className="project-card">
                <div className="project-card__cover">
                  <MockupCover src={project.cover} alt={project.name} label={project.name} mockup={project.mockup} />
                </div>
                <div className="project-card__meta">
                  <div>
                    <h3 className="project-card__name">{project.name}</h3>
                    <p className="project-card__category">{project.categoryLabel[lang]}</p>
                  </div>
                </div>
                <div className="project-card__tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="project-card__link">
                  {t.projects.viewProject} <span className="arrow" aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
