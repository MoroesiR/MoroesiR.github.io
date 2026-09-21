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
      label: index === 0 ? 'Email' : 'Also',
      value: email,
      href: `mailto:${email}`,
    })),
    { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github },
    { label: 'LinkedIn', value: 'linkedin.com/in/moroesi-ramodupi', href: profile.linkedin },
  ]

  return (
    <Section id="contact" index="05" title="Contact">
      <div className="rounded-xl border border-ink-200 bg-card p-6 shadow-sm">
        <p className="max-w-xl text-base leading-relaxed text-ink-600">{profile.openTo}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          {links.map((link) => (
            <div key={link.value}>
              <dt className="font-mono text-xs text-ink-400">{link.label}</dt>
              <dd className="mt-1">
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="break-all text-sm font-medium text-accent-700 underline underline-offset-4 decoration-accent-200 transition-colors hover:decoration-accent-600"
                >
                  {link.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
