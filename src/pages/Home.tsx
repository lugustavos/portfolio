import { Hero } from '../components/Hero'
import { ProjectCards } from '../components/ProjectCards'
import { Education } from '../components/Education'
import { Experience } from '../components/Experience'

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectCards />
      <Education />
      <Experience />
    </main>
  )
}
