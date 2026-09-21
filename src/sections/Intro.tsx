import { facts, profile } from '@/data/profile'

export function Intro() {
  return (
    <section id="top" className="relative py-20">
      <div aria-hidden className="grid-backdrop absolute inset-x-0 -top-16 -z-10 h-80" />

      <p className="font-mono text-xs text-accent-600">
        {profile.location} · {profile.availability}
      </p>

      <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl">
        {profile.name}
      </h1>

      <p className="mt-4 max-w-2xl text-xl leading-snug text-ink-800">{profile.headline}</p>

      <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-ink-600">
        {profile.summary.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <dl className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200 sm:grid-cols-3">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-card p-4">
            <dt className="font-mono text-lg font-semibold text-ink-900">{fact.value}</dt>
            <dd className="mt-1 text-sm leading-snug text-ink-600">{fact.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-700"
        >
          See the work
        </a>
        <a
          href={`mailto:${profile.emails[0]}`}
          className="rounded-md border border-ink-300 px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:border-accent-500 hover:text-accent-700"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
