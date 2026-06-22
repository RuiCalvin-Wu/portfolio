const isRealUrl = (url) => url && url !== '#'

export default function ProjectCard({ project }) {
  const tech = project.tech ?? []
  return (
    <article className="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="aspect-video bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-semibold text-lg">{project.title}</h3>
        <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400 flex-1">{project.description}</p>

        {tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        {(isRealUrl(project.demo) || isRealUrl(project.repo)) && (
          <div className="mt-5 flex gap-3">
            {isRealUrl(project.demo) && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn text-xs px-4 py-2">
                Live Demo
              </a>
            )}
            {isRealUrl(project.repo) && (
              <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-outline text-xs px-4 py-2">
                View Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
