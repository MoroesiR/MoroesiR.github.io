import { profile } from '@/data/profile'

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-ink-200 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight text-ink-900">
          {profile.name}
        </a>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink-600 transition-colors hover:text-accent-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
