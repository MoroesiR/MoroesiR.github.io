import { useEffect, useState } from 'react'

import { ThemeToggle } from '@/components/ThemeToggle'
import { profile } from '@/data/profile'

const LINKS = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  // Transparent over the dark opening band, solid once the page has moved past
  // it. A bar with its own background sitting on the hero looks bolted on.
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-20 transition-colors duration-300 ${
        scrolled ? 'border-b border-ink-200 bg-paper/90 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4">
        <a
          href="#top"
          className={`font-mono text-sm font-semibold tracking-tight transition-colors ${
            scrolled ? 'text-ink-900' : 'text-white'
          }`}
        >
          {profile.name.toLowerCase().replace(' ', '.')}
        </a>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  scrolled ? 'text-ink-600 hover:text-accent-700' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle dark={!scrolled} />
        </div>
      </div>
    </header>
  )
}
