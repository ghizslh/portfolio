import { Hero } from '../sections/Hero'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { Creations } from '../sections/Creations'
import { Contact } from '../sections/Contact'

function Divider() {
  return (
    <div className="section-divider" aria-hidden>
      <span />
      <span />
      <span />
    </div>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Creations />
      <Divider />
      <Contact />
    </>
  )
}
