import { Hero } from '../components/Hero'
import { ProjectCards } from '../components/ProjectCards'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'
import { Courses } from '../components/Courses'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectCards />
      <Education />
      <Experience />
      <Courses />
    </main>
  )
}
