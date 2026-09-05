import { skills } from '../data/profile'
import { Reveal } from './ui/Reveal'

export function Skills() {
  return (
    <section id="skills" className="section border-t border-border/60">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">04 — Ferramentas</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Skills</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i} as="div">
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
