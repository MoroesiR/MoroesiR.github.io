import { Section } from '@/components/Section'
import { certificates, education } from '@/data/education'
import type { Qualification } from '@/data/education'

function Entry({ item }: { item: Qualification }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-900">{item.title}</h4>
      <p className="mt-1 font-mono text-xs text-ink-400">
        {item.institution} · {item.period}
      </p>
      {item.note && <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.note}</p>}
    </div>
  )
}

export function Education() {
  return (
    <Section id="education" index="04" title="Education">
      <div className="space-y-6">
        {education.map((item) => (
          <Entry key={item.title} item={item} />
        ))}
      </div>

      <h3 className="mt-10 font-mono text-xs uppercase tracking-wider text-accent-600">
        Certificates
      </h3>
      <ul className="mt-3 space-y-1.5">
        {certificates.map((item) => (
          <li key={item.title} className="text-sm text-ink-600">
            {item.title}
            <span className="text-ink-400">
              {' '}
              · {item.institution}, {item.period}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
