import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <div className="footer__brand">Ghizlene Salah</div>
          <div className="footer__meta">{t.footer.role} · Oran, Algérie</div>
        </div>
        <div className="footer__links">
          <a href="mailto:ghizlenesalah2002@gmail.com">Email</a>

          <a href="https://www.instagram.com/ateliercoursmaths/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <div className="footer__meta">© {new Date().getFullYear()} Ghizlene Salah</div>
      </div>
    </footer>
  )
}
