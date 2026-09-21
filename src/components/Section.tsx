import type { ReactNode } from 'react'

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-t border-ink-200 py-16">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-accent-600">{index}</span>
        <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">{title}</h2>
        <span aria-hidden className="h-px flex-1 bg-ink-200" />
      </div>

      <div className="mt-8">{children}</div>
    </section>
  )
}
