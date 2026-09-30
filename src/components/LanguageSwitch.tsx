import { useLanguage } from '../i18n/LanguageContext'

export function LanguageSwitch() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="lang-switch" role="group" aria-label="Language switch">
      <button className={lang === 'fr' ? 'is-active' : ''} onClick={() => setLang('fr')}>
        FR
      </button>
      <span>|</span>
      <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>
        EN
      </button>
    </div>
  )
}
