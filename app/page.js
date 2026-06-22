import Nav from '../components/Nav'
import ProjectCard from '../components/ProjectCard'

export default function Page() {
  const projects = [
    {
      title: 'Project One',
      description: 'Next.js + Tailwind — a production-ready demo',
      repo: '#',
      demo: '#',
      image: 'https://placehold.co/600x400?text=Project+1'
    },
    {
      title: 'Project Two',
      description: 'React SPA with API integration',
      repo: '#',
      demo: '#',
      image: 'https://placehold.co/600x400?text=Project+2'
    }
  ]

  return (
    <main className="container mx-auto px-6 py-12">
      <Nav />

      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold">Your Name</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">I build fast, accessible web apps using Next.js and Tailwind.</p>

            <div className="mt-6 flex gap-4">
              <a className="btn" href="#projects">See projects</a>
              <a className="btn-outline" href="/resume.pdf">Download CV</a>
            </div>

            <div className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              GitHub • LinkedIn • Email
            </div>
          </div>

          <div>
            <img alt="Hero screenshot" src="https://placehold.co/800x600?text=Hero+Screenshot" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section id="projects" className="mt-16">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="mt-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Use the form below or email me at <strong>you@example.com</strong>.</p>

        <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-6 max-w-xl">
          <label className="block">
            <span className="text-sm">Name</span>
            <input name="name" className="mt-1 block w-full rounded border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none" />
          </label>

          <label className="block mt-4">
            <span className="text-sm">Message</span>
            <textarea name="message" rows={4} className="mt-1 block w-full rounded border-slate-200 bg-white px-3 py-2 shadow-sm focus:outline-none" />
          </label>

          <button type="submit" className="mt-4 btn">Send message</button>
        </form>
      </section>

      <footer className="mt-24 py-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name — Built with Next.js + Tailwind
      </footer>
    </main>
  )
}
