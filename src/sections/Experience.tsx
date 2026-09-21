import { Section } from '@/components/Section'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {experience.map((role) => (
          <article key={role.title + role.period} className="border-l-2 border-accent-200 pl-5">
            <h3 className="text-lg font-semibold tracking-tight text-ink-900">{role.title}</h3>
            <p className="mt-1 text-sm text-ink-400">
              {role.employer} · {role.location} · {role.period}
            </p>

            <ul className="mt-4 space-y-2.5">
              {role.points.map((point) => (
                <li key={point.slice(0, 32)} className="flex gap-3 text-sm text-ink-600">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-200" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
