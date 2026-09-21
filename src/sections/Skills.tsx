import { Section } from '@/components/Section'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.heading}
            className="rounded-xl border border-ink-200 bg-card p-5 shadow-sm"
          >
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-600">
              {group.heading}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-ink-100 px-3 py-1 text-sm text-ink-600 transition-colors hover:bg-accent-100 hover:text-accent-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
