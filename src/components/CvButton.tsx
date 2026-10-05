import { useEffect, useState } from 'react'

import { profile } from '@/data/profile'

/**
 * Only rendered once the file is actually there. A download button that
 * answers with a 404 page is worse than no button at all.
 */
export function CvButton({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const [available, setAvailable] = useState(false)

  useEffect(() => {
    let current = true

    fetch(profile.cv, { method: 'HEAD' })
      .then((response) => {
        if (current && response.ok) {
          setAvailable(true)
        }
      })
      .catch(() => setAvailable(false))

    return () => {
      current = false
    }
  }, [])

  if (!available) {
    return null
  }

  return (
    <a
      href={profile.cv}
      download
      className={
        tone === 'dark'
          ? 'rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-spark-400 hover:text-spark-400'
          : 'rounded-md border border-ink-300 px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-accent-500 hover:text-accent-700'
      }
    >
      Download CV
    </a>
  )
}
