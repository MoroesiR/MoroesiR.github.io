import { Header } from '@/components/Header'
import { profile } from '@/data/profile'
import { Contact } from '@/sections/Contact'
import { Education } from '@/sections/Education'
import { Experience } from '@/sections/Experience'
import { Intro } from '@/sections/Intro'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'

export function App() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-3xl px-6">
        <Intro />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-ink-200">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-ink-400">
          <span>{profile.name}</span>
          <span>React · TypeScript · Tailwind</span>
        </div>
      </footer>
    </>
  )
}
