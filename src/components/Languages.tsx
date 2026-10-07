import { Languages as LanguagesIcon } from 'lucide-react'
import { languages } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Languages() {
  return (
    <section id="idiomas" className="section border-t border-border/60">
      <div className="container-content">
        <SectionHeading eyebrow="04 — Línguas" title="Idiomas" />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {languages.map((l, i) => (
            <Reveal key={l.name} delay={i}>
              <div className="card p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent-soft">
                      <LanguagesIcon size={19} />
                    </span>
                    <h3 className="text-lg font-bold">{l.name}</h3>
                  </div>
                  <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                    {l.level}
                  </span>
                </div>
                <div
                  className="mt-5 h-1.5 overflow-hidden rounded-full bg-surface"
                  role="img"
                  aria-label={`Nível de ${l.name}: ${l.level}`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent2"
                    style={{ width: `${l.percent}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-muted">{l.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
