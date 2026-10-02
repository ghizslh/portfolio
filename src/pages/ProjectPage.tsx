import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { ProjectCover } from '../components/ProjectCover'
import { MockupCover } from '../components/MockupCover'
import { Reveal } from '../components/Reveal'
import { asset } from '../lib/asset'

export function ProjectPage() {
  const { slug } = useParams()
  const { t, lang } = useLanguage()
  const project = slug ? getProjectBySlug(slug) : undefined
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  if (!project) return <Navigate to="/" replace />

  const linkLabel =
 project.linkType === 'instagram'
        ? t.projectPage.viewInstagram
        : t.projectPage.visitSite

  return (
    <section className="section">
      <div className="container">
        <Link to="/#projects" className="project-page__back">
          ← {t.nav.back}
        </Link>

        <Reveal>
          <div className="project-page__header">
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)' }}>{project.name}</h1>
            <p className="project-page__category">{project.categoryLabel[lang]}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="project-page__hero">
            <MockupCover src={project.cover} alt={project.name} label={project.name} mockup={project.mockup} />
          </div>
          <p className="project-page__description">{project.shortDescription[lang]}</p>
        </Reveal>

        <div className="project-page__gallery">
          {project.images.map((img, i) => (
            <Reveal key={img} delay={i * 60}>
              <button className="project-page__gallery-item" onClick={() => setLightbox(img)}>
                <ProjectCover src={img} alt={`${project.name} — capture ${i + 1}`} label={`${project.name} ${i + 1}`} />
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="project-page__footer">
            <div>
              <span className="contact__label">{t.projectPage.technologies}</span>
              <p className="project-page__tech">{project.technologies.join(' · ')}</p>
            </div>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                {linkLabel} <span aria-hidden>→</span>
              </a>
            ) : (
              <span className="project-page__tech">{t.projectPage.noLink}</span>
            )}
          </div>
        </Reveal>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setLightbox(null)}>
            ×
          </button>
          <img
            src={asset(lightbox)}
            alt=""
            onClick={(e) => e.stopPropagation()}
            onError={() => setLightbox(null)}
          />
        </div>
      )}
    </section>
  )
}
