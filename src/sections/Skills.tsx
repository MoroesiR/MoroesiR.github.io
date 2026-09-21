import { Section } from '@/components/Section'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" index="03" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.heading}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent-600">
              {group.heading}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded border border-ink-200 bg-card px-2 py-1 text-sm text-ink-600"
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
