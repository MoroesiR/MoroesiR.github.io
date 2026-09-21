import { Section } from '@/components/Section'
import { certificates, education } from '@/data/education'
import type { Qualification } from '@/data/education'

function Entry({ item }: { item: Qualification }) {
  return (
    <div className="rounded-xl border border-ink-200 bg-card p-5 shadow-sm">
      <h4 className="text-sm font-semibold text-ink-900">{item.title}</h4>
      <p className="mt-1 font-mono text-xs text-accent-600">
        {item.institution} · {item.period}
      </p>
      {item.note && <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.note}</p>}
    </div>
  )
}

export function Education() {
  return (
    <Section id="education" index="04" title="Education" tone="tint">
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <Entry key={item.title} item={item} />
        ))}
      </div>

      <h3 className="mt-8 font-mono text-xs uppercase tracking-wider text-accent-600">
        Certificates
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {certificates.map((item) => (
          <li
            key={item.title}
            className="rounded-full border border-ink-200 bg-card px-3 py-1 text-sm text-ink-600"
          >
            {item.title}
            <span className="text-ink-400"> · {item.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
