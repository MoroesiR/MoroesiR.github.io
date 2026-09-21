import { Section } from '@/components/Section'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-lg border border-ink-200 bg-white p-6 transition-shadow hover:shadow-sm"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-ink-900">{project.name}</h3>
              <p className="text-sm text-ink-400">{project.tagline}</p>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-ink-600">{project.description}</p>

            <ul className="mt-4 space-y-2">
              {project.highlights.map((highlight) => (
                <li key={highlight.slice(0, 32)} className="flex gap-3 text-sm text-ink-600">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-600" />
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-ink-100 px-2.5 py-1 text-xs text-ink-600"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-medium text-accent-700 underline underline-offset-4"
            >
              Read the code
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
