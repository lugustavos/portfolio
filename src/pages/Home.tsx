import { Hero } from '../components/Hero'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Courses } from '../components/Courses'
import { Languages } from '../components/Languages'
import { ProjectCards } from '../components/ProjectCards'
import { Skills } from '../components/Skills'

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Experience />
      <Courses />
      <Languages />
      <ProjectCards />
      <Skills />
    </main>
  )
}
