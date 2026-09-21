import type { ReactNode } from 'react'

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-t border-ink-200 py-16">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  )
}
