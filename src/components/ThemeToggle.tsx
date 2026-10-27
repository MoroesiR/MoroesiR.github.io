import { useSyncExternalStore } from 'react'

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)

  return () => {
    listeners.delete(listener)
  }
}

function isDark() {
  return document.documentElement.classList.contains('dark')
}

function setDark(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
  listeners.forEach((listener) => listener())
}

export function ThemeToggle({ dark = false }: { dark?: boolean }) {
  const darkTheme = useSyncExternalStore(subscribe, isDark, () => false)

  return (
    <button
      type="button"
      onClick={() => setDark(!darkTheme)}
      aria-label={darkTheme ? 'Switch to the light theme' : 'Switch to the dark theme'}
      className={`rounded-md border px-2 py-1 font-mono text-xs transition-colors ${
        dark
          ? 'border-white/25 text-white/70 hover:border-spark-400 hover:text-spark-400'
          : 'border-ink-200 text-ink-600 hover:border-accent-500 hover:text-accent-700'
      }`}
    >
      {darkTheme ? 'light' : 'dark'}
    </button>
  )
}
