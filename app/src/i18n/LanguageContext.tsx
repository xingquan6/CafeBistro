import { createContext, type ReactNode, useContext, useEffect, useState } from 'react'
import { en } from './en'
import { fr } from './fr'

export type Lang = 'en' | 'fr'

const DICTIONARIES = { en, fr }

const STORAGE_KEY = 'cb-lang'

function detectInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'fr') return stored
  return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof en
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    const dict = DICTIONARIES[lang]
    document.documentElement.lang = lang
    document.title = dict.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', dict.meta.description)
    localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  function setLang(next: Lang) {
    setLangState(next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTIONARIES[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
