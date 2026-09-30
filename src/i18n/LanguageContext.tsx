import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Lang, type TranslationShape } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: TranslationShape
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function getInitialLang(): Lang {
  const stored = window.localStorage.getItem('portfolio-lang')
  if (stored === 'fr' || stored === 'en') return stored
  return 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
    window.localStorage.setItem('portfolio-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
