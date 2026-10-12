import { skills } from '../data/profile'
import { SectionTitle } from './ui/SectionTitle'
import { Tech } from './ui/TechIcon'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-content">
        <SectionTitle title="Habilidades" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="card p-5">
              <h3 className="font-medium">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <Tech key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
