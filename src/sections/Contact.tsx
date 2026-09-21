import { Section } from '@/components/Section'
import { profile } from '@/data/profile'

export function Contact() {
  const links = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github },
    profile.linkedin
      ? {
          label: 'LinkedIn',
          value: profile.linkedin.replace('https://', ''),
          href: profile.linkedin,
        }
      : null,
  ].filter((link) => link !== null)

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-base leading-relaxed text-ink-600">{profile.openTo}</p>

      <dl className="mt-6 space-y-3">
        {links.map((link) => (
          <div key={link.label} className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <dt className="w-20 shrink-0 text-ink-400">{link.label}</dt>
            <dd>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
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
