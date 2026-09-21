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

      <main>
        <Intro />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="bg-night-900">
        <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-2 px-6 py-10 font-mono text-xs text-white/45">
          <span>{profile.name}</span>
          <span>React · TypeScript · Tailwind</span>
        </div>
      </footer>
    </>
  )
}
