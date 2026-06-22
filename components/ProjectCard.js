export default function ProjectCard({ project }) {
  return (
    <article className="rounded-lg border p-4 shadow-sm bg-white dark:bg-slate-800">
      <img src={project.image} alt={project.title} className="w-full rounded" />
      <h3 className="mt-3 text-lg font-medium">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>

      <div className="mt-4 flex gap-3">
        <a className="text-sm underline text-sky-600" href={project.demo}>Live</a>
        <a className="text-sm underline" href={project.repo}>Repo</a>
      </div>
    </article>
  )
}
