import { useState } from 'react'

import { facts, profile } from '@/data/profile'

export function Intro() {
  // The portrait is optional. If the file is not there, the page keeps its
  // shape rather than showing a broken image.
  const [hasPortrait, setHasPortrait] = useState(true)

  return (
    <section id="top" className="hero relative overflow-hidden">
      <div aria-hidden className="hero-grid absolute inset-0" />

      <div className="relative mx-auto w-full max-w-3xl px-6 pb-16 pt-20">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-spark-400">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-spark-500" />
              {profile.availability}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl leading-snug text-white/80">{profile.headline}</p>

            <p className="mt-3 font-mono text-xs text-white/45">
              {profile.role} · {profile.location}
            </p>
          </div>

          {hasPortrait && (
            <div className="relative shrink-0">
              <span
                aria-hidden
                className="absolute -bottom-2 -right-2 h-full w-full rounded-xl border border-spark-500/60"
              />
              <img
                src={profile.portrait}
                alt={profile.name}
                onError={() => setHasPortrait(false)}
                className="relative h-40 w-40 rounded-xl border border-white/20 object-cover object-top sm:h-48 sm:w-48"
              />
            </div>
          )}
        </div>

        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-white/70">
          {profile.summary.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <dl className="mt-10 grid gap-3 sm:grid-cols-3">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-white/12 bg-white/5 p-4 backdrop-blur-sm"
            >
              <dt className="font-mono text-lg font-semibold text-spark-400">{fact.value}</dt>
              <dd className="mt-1 text-sm leading-snug text-white/65">{fact.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-night-900 transition-colors hover:bg-spark-400"
          >
            See the work
          </a>
          <a
            href={`mailto:${profile.emails[0]}`}
            className="rounded-md border border-white/25 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-spark-400 hover:text-spark-400"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
