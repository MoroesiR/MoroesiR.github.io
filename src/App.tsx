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
        <div className="mx-auto w-full max-w-3xl px-6 py-8 text-sm text-ink-400">
          {profile.name}. Built with React and TypeScript.
        </div>
      </footer>
    </>
  )
}
