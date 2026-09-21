import { profile } from '@/data/profile'

export function Intro() {
  return (
    <section id="top" className="py-16">
      <p className="text-sm text-ink-400">
        {profile.role} · {profile.location} · {profile.availability}
      </p>

      <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-ink-900 sm:text-5xl">
        {profile.headline}
      </h1>

      <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
        {profile.summary.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-accent-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-700"
        >
          See the work
        </a>
        <a
          href={`mailto:${profile.emails[0]}`}
          className="rounded-md border border-ink-300 px-4 py-2 text-sm font-medium text-ink-800 transition-colors hover:bg-ink-100"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
