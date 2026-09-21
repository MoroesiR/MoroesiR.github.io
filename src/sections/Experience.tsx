import { Section } from '@/components/Section'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <Section id="experience" index="02" title="Experience" tone="tint">
      <div className="space-y-10">
        {experience.map((role) => (
          <article key={role.title + role.period} className="relative pl-6">
            <span
              aria-hidden
              className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-accent-500 via-spark-500 to-transparent"
            />
            <span
              aria-hidden
              className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-accent-500 ring-4 ring-tint"
            />

            <h3 className="text-xl font-semibold tracking-tight text-ink-900">{role.title}</h3>
            <p className="mt-1 font-mono text-xs text-accent-600">
              {role.employer} · {role.location} · {role.period}
            </p>

            <ul className="mt-4 space-y-2.5">
              {role.points.map((point) => (
                <li key={point.slice(0, 32)} className="flex gap-3 text-sm text-ink-600">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300" />
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
