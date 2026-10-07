import { skills } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Skills() {
  return (
    <section id="skills" className="section border-t border-border/60">
      <div className="container-content">
        <SectionHeading eyebrow="06 — Ferramentas" title="Competências" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i}>
              <div className="card h-full p-6">
                <h3 className="font-mono text-sm text-accent-soft">{s.group}</h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-sm text-text/90">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
