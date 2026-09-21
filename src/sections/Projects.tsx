import { Section } from '@/components/Section'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <Section id="projects" index="01" title="Projects">
      <div className="space-y-8">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-lg border border-ink-200 bg-card transition-colors hover:border-accent-500"
          >
            {project.image && (
              <div className="border-b border-ink-200 bg-ink-100">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? ''}
                  loading="lazy"
                  className="h-52 w-full object-cover object-top sm:h-64"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs text-ink-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-ink-900">{project.name}</h3>
                <p className="text-sm text-ink-400">{project.tagline}</p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-600">{project.description}</p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight) => (
                  <li key={highlight.slice(0, 32)} className="flex gap-3 text-sm text-ink-600">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-ink-200 px-2 py-0.5 font-mono text-xs text-ink-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-accent-700"
              >
                <span aria-hidden>{'->'}</span>
                {project.repo.replace('https://github.com/', 'github.com/')}
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
