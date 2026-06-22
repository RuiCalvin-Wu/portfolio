'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleDark() {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.theme = 'light'
      setDark(false)
    } else {
      html.classList.add('dark')
      localStorage.theme = 'dark'
      setDark(true)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800' : 'bg-transparent'}`}>
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-sm tracking-tight">Calvin Wu</span>

        <div className="flex items-center gap-5">
          <a href="#projects" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="https://github.com/RuiCalvin-Wu" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
          <button onClick={toggleDark} aria-label="Toggle theme" className="p-1.5 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
