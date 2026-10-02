import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { RotatingBadge } from '../components/RotatingBadge'
import { asset } from '../lib/asset'

export function Hero() {
  const { t, lang } = useLanguage()
  const [photoFailed, setPhotoFailed] = useState(false)

  const badgeText =
    lang === 'fr'
      ? 'DÉVELOPPEUSE · CRÉATRICE DIGITALE · '
      : 'SOFTWARE DEVELOPER · DIGITAL CREATOR · '

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">

        {/* CONTENU */}
        <div className="hero__content">

          <h1 className="hero-enter">
            Ghizlene <em>Salah</em>
          </h1>

          <p
            className="hero__eyebrow hero-enter"
            style={{ animationDelay: '90ms' }}
          >
            {t.hero.role}
          </p>

          <p
            className="hero__intro hero-enter"
            style={{ animationDelay: '160ms' }}
          >
            {t.hero.intro}
          </p>

          <div
            className="hero-enter"
            style={{ animationDelay: '220ms' }}
          >
            <a href="#projects" className="btn btn-primary">
              {t.hero.cta} <span aria-hidden>→</span>
            </a>
          </div>

          {/* LIENS */}
          <div className="hero__links">
            <a
              href="https://www.instagram.com/ateliercoursmaths/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="mailto:ghizlenesalah2002@gmail.com"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          {/* ABOUT */}
          <div id="about" className="hero__about">
            <p className="eyebrow">
              {t.about.eyebrow}
            </p>

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

            <p className="about__quote">
              {t.about.quote}
            </p>
          </div>

        </div>

        {/* PHOTO */}
        <div className="hero__visual-wrap">

          <div
            className="hero__decor-arch"
            aria-hidden
          />

          <div
            className="hero__decor-shape"
            aria-hidden
          />

          <div className="hero__visual">
            {!photoFailed && (
              <img
                src={asset('profile1.jpg')}
                alt="Ghizlene Salah"
                onError={() => setPhotoFailed(true)}
              />
            )}

            {photoFailed && (
              <div className="hero__visual-placeholder">
                {t.hero.photoPlaceholder}
              </div>
            )}
          </div>

          <div className="hero__decor-badge">
            <RotatingBadge text={badgeText} />
          </div>

          <div
            className="hero__decor-note"
            aria-hidden
          >
            Code · Design · Create

            <svg
              viewBox="0 0 90 22"
              fill="none"
            >
              <path
                d="M2 12c14-14 24 6 40-2 12-6 24 4 46-6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

        </div>

      </div>
    </section>
  )
}
