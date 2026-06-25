'use client'
import { useEffect, useState, useRef } from 'react'
import { useLanguage } from './LanguageContext'

export default function AnimatedText({ textKey, as: Tag = 'span', className = '', delay = 0 }) {
  const { lang, t } = useLanguage()
  const text = t(textKey)
  const [displayText, setDisplayText] = useState(text)
  const [phase, setPhase] = useState('idle')
  const prevLang = useRef(lang)
  const timerRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (prevLang.current === lang) {
      setDisplayText(text)
      return
    }
    prevLang.current = lang

    clearTimeout(timerRef.current)
    clearInterval(intervalRef.current)

    setPhase('fadeOut')

    timerRef.current = setTimeout(() => {
      setDisplayText('')
      setPhase('typing')

      let i = 0
      const speed = Math.max(20, Math.min(50, 800 / text.length))
      intervalRef.current = setInterval(() => {
        i++
        setDisplayText(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(intervalRef.current)
          setPhase('idle')
        }
      }, speed)
    }, 300 + delay)

    return () => {
      clearTimeout(timerRef.current)
      clearInterval(intervalRef.current)
    }
  }, [lang, text, delay])

  return (
    <Tag className={`${className} transition-opacity duration-300 ${phase === 'fadeOut' ? 'opacity-0' : 'opacity-100'}`}>
      {displayText}
      {phase === 'typing' && <span className="cursor-blink text-indigo-400">|</span>}
    </Tag>
  )
}
