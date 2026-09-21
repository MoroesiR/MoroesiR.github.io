import { Section } from '@/components/Section'
import { profile } from '@/data/profile'

interface ContactLink {
  label: string
  value: string
  href: string
}

export function Contact() {
  const links: ContactLink[] = [
    ...profile.emails.map((email, index) => ({
      label: index === 0 ? 'Email' : '',
      value: email,
      href: `mailto:${email}`,
    })),
    { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github },
    { label: 'LinkedIn', value: 'linkedin.com/in/moroesi-ramodupi', href: profile.linkedin },
  ]

  return (
    <Section id="contact" index="05" title="Contact">
      <p className="max-w-xl text-base leading-relaxed text-ink-600">{profile.openTo}</p>

      <dl className="mt-6 space-y-3">
        {links.map((link) => (
          <div key={link.value} className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <dt className="w-20 shrink-0 font-mono text-xs text-ink-400">{link.label}</dt>
            <dd>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="font-medium text-accent-700 underline underline-offset-4"
              >
                {link.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
