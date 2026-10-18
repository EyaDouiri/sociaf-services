import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations.js'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return window.localStorage?.getItem('sociaf-lang') || 'fr' } catch (e) { return 'fr' }
  })

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    try { window.localStorage?.setItem('sociaf-lang', lang) } catch (e) {}
  }, [lang])

  const t = (key) => {
    const parts = key.split('.')
    let node = translations[lang]
    for (const p of parts) node = node?.[p]
    return node ?? key
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
