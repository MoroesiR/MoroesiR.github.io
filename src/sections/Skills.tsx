import { Section } from '@/components/Section'
import { skills } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.heading}>
            <h3 className="text-sm font-semibold text-ink-900">{group.heading}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-600">
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
