import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'
import SmoothScrollLink from '../components/SmoothScrollLink'
import IntroAnimation from '../components/IntroAnimation'
import FloatingParticles from '../components/FloatingParticles'
import ScrollReveal from '../components/ScrollReveal'
import AnimatedText from '../components/AnimatedText'

const projects = [
  // Add projects here:
  // {
  //   title: 'Project Name',
  //   description: 'What it does.',
  //   image: 'https://placehold.co/800x450/312e81/a5b4fc?text=Project',
  //   tech: ['React', 'Node.js'],
  //   demo: '#',
  //   repo: 'https://github.com/RuiCalvin-Wu',
  // },
]

export default function Page() {
  return (
    <>
      <IntroAnimation />
      <Nav />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="hero-bg-image" />
        <div className="hero-bg-overlay" />
        <div className="hero-grid" />
        <FloatingParticles />

        {/* Ambient glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          <div className="anim-fade-up mb-4" style={{ animationDelay: '1.6s' }}>
            <AnimatedText textKey="hero.location" as="p" className="text-indigo-400 text-sm font-medium tracking-widest uppercase" />
          </div>

          <div className="anim-fade-up" style={{ animationDelay: '1.9s' }}>
            <AnimatedText textKey="hero.name" as="h1" className="text-5xl sm:text-6xl font-bold text-white tracking-tight" delay={50} />
          </div>

          <div className="anim-fade-up mt-3" style={{ animationDelay: '2.1s' }}>
            <AnimatedText textKey="hero.title" as="p" className="text-lg font-medium text-slate-300" delay={100} />
          </div>

          <div className="anim-fade-up mt-5" style={{ animationDelay: '2.3s' }}>
            <AnimatedText textKey="hero.bio" as="p" className="text-slate-400 leading-relaxed" delay={150} />
          </div>

          <div className="anim-fade-up mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '2.5s' }}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <AnimatedText textKey="hero.downloadCV" delay={200} />
            </a>
            <a href="https://github.com/RuiCalvin-Wu" target="_blank" rel="noopener noreferrer" className="btn-outline border-slate-600 text-slate-200 hover:bg-slate-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
              <AnimatedText textKey="hero.viewGithub" delay={200} />
            </a>
          </div>

          <div className="anim-fade-up mt-14" style={{ animationDelay: '2.7s' }}>
            <SmoothScrollLink href="#projects" className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors">
              <AnimatedText textKey="hero.projects" as="span" className="text-xs tracking-widest uppercase" delay={250} />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce"><path d="m6 9 6 6 6-6"/></svg>
            </SmoothScrollLink>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6">

        {/* ── Featured Projects ─────────────────────────────── */}
        <section id="projects" className="py-24 scroll-mt-14">
          <ScrollReveal>
            <AnimatedText textKey="projects.title" as="h2" className="text-2xl font-bold" />
            <AnimatedText textKey="projects.subtitle" as="p" className="mt-1 text-slate-500 dark:text-slate-400 text-sm" delay={50} />
          </ScrollReveal>

          {projects.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {projects.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 150}>
                  <ProjectCard project={p} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <AnimatedText textKey="projects.empty" as="p" className="mt-8 text-slate-400 dark:text-slate-500 text-sm italic" delay={100} />
          )}
        </section>

        {/* ── Footer ────────────────────────────────────────── */}
        <ScrollReveal>
          <footer className="border-t border-slate-200 dark:border-slate-800 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
            <span>&copy; {new Date().getFullYear()} Calvin Wu</span>

            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/calvin-w-80646b219/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/RuiCalvin-Wu" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57v-2c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="mailto:calvinrxw222@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <AnimatedText textKey="footer.email" delay={50} />
              </a>
            </div>
          </footer>
        </ScrollReveal>

      </main>
    </>
  )
}
