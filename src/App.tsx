import { Taskbar } from './components/layout/Taskbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Contact } from './sections/Contact'
import { sections, type SectionId } from './data/nav'
import { useActiveSection } from './hooks/useActiveSection'
import { useTheme } from './hooks/useTheme'

const sectionIds = sections.map((s) => s.id)

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sectionIds) as SectionId

  return (
    <>
      <a
        href="#sobre"
        className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-16 focus:z-50"
      >
        Pular para o conteúdo
      </a>
      <Taskbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
