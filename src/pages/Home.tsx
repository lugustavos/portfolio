import { Hero } from '../components/Hero'
import { ProjectCards } from '../components/ProjectCards'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Courses } from '../components/Courses'
import { Languages } from '../components/Languages'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectCards />
      <Education />
      <Experience />
      <Courses />
      <Languages />
    </main>
  )
}
