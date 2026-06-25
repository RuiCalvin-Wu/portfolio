'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../lib/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved && translations[saved]) setLang(saved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  function toggleLang() {
    const next = lang === 'en' ? 'zh' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  function t(key) {
    return translations[lang]?.[key] ?? translations.en?.[key] ?? key
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
