import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Timeline />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
