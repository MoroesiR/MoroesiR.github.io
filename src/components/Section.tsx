import type { ReactNode } from 'react'

/**
 * Full width band, fixed width contents. Alternating the band colour is what
 * stops the page reading as one long sheet of text.
 */
export function Section({
  id,
  index,
  title,
  tone = 'plain',
  children,
}: {
  id: string
  index: string
  title: string
  tone?: 'plain' | 'tint'
  children: ReactNode
}) {
  return (
    <section id={id} className={tone === 'tint' ? 'bg-tint' : 'bg-paper'}>
      <div className="mx-auto w-full max-w-3xl px-6 py-16">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium text-accent-600">{index}</span>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-900">
            {title}
          </h2>
          <span aria-hidden className="rule h-0.5 flex-1 rounded-full opacity-60" />
        </div>

        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
