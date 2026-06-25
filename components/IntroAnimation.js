'use client'
import { useEffect, useState } from 'react'

export default function IntroAnimation() {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 1500)
    const t2 = setTimeout(() => setPhase('done'), 2300)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div className={`intro-overlay ${phase === 'exit' ? 'intro-exit' : ''}`}>
      <h1 className="intro-name">Rui Xuan Calvin Wu</h1>
      <div className="intro-line" />
    </div>
  )
}
