import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

/**
 * Remembers the choice, and falls back to whatever the operating system is
 * already set to rather than assuming everyone wants a bright page.
 */
function initialTheme(): Theme {
  const stored = localStorage.getItem('theme')

  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? 'Switch to the light theme' : 'Switch to the dark theme'}
      className="rounded-md border border-ink-200 px-2 py-1 font-mono text-xs text-ink-600 transition-colors hover:border-accent-500 hover:text-accent-700"
    >
      {theme === 'dark' ? 'light' : 'dark'}
    </button>
  )
}
