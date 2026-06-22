'use client'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <nav className="flex items-center justify-between">
      <div className="text-lg font-semibold">Your Name</div>
      <div className="flex items-center gap-4">
        <a className="text-sm text-slate-600 dark:text-slate-300" href="https://github.com/RuiCalvin-Wu">GitHub</a>
        <a className="text-sm text-slate-600 dark:text-slate-300" href="#contact">Contact</a>
        {mounted && (
          <button id="theme-toggle" className="ml-2 px-3 py-2 rounded border" onClick={() => {
            const html = document.documentElement
            if (html.classList.contains('dark')) {
              html.classList.remove('dark')
              localStorage.theme = 'light'
            } else {
              html.classList.add('dark')
              localStorage.theme = 'dark'
            }
          }}>
            Toggle
          </button>
        )}
      </div>
    </nav>
  )
}
