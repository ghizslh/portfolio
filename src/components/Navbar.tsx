import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageSwitch } from './LanguageSwitch'

const base = import.meta.env.BASE_URL // ex: "/portfolio/"

const links = [
  { to: `${base}#home`, key: 'home', hash: '#home' },
  { to: `${base}#about`, key: 'about', hash: '#about' },
  { to: `${base}#projects`, key: 'projects', hash: '#projects' },
  { to: `${base}#creations`, key: 'creations', hash: '#creations' },
  { to: `${base}#contact`, key: 'contact', hash: '#contact' },
] as const

export function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Ghizlene Salah
        </NavLink>
        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.to} className={location.hash === link.hash ? 'is-active' : ''}>
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__right">
          <LanguageSwitch />
          <button
            className="navbar__toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className="navbar__mobile">
        {links.map((link) => (
          <a key={link.key} href={link.to}>
            {t.nav[link.key]}
          </a>
        ))}
      </nav>
    </header>
  )
}
