import { projects } from '../data/projects'
import { Reveal } from './ui/Reveal'

export function Timeline() {
  return (
    <section id="trajetoria" className="section border-t border-border/60">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">02 — Evolução</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Trajetória</h2>
          <p className="mt-4 max-w-2xl text-muted">
            A linha do tempo da graduação: cada ponto marca um projeto e a competência que ele adicionou.
          </p>
        </Reveal>

        <ol className="relative mt-14 border-l border-border">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i} className="mb-10 ml-6 last:mb-0">
              <span
                className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg"
                style={{ background: p.accent }}
              />
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="font-mono text-sm" style={{ color: p.accent }}>
                  {p.semesterLabel}
                </span>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <span className="text-sm text-muted">· {p.type}</span>
              </div>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{p.tagline}. {p.role}.</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
