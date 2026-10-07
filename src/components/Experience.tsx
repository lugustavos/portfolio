import { Briefcase, MapPin } from 'lucide-react'
import { jobs } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Experience() {
  return (
    <section id="experiencia" className="section border-t border-border/60">
      <div className="container-content">
        <SectionHeading eyebrow="02 — Experiência" title="Experiência profissional" />

        <div className="mt-10 space-y-6">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i}>
              <article className="card p-6 sm:p-8">
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-accent-soft">
                      <Briefcase size={20} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{job.company}</h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted">
                        <MapPin size={14} /> {job.location}
                      </p>
                    </div>
                  </div>
                  <p className="rounded-lg border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted">
                    {job.start} — {job.end ?? 'atual'}
                  </p>
                </header>

                <ol className="relative mt-7 space-y-5 border-l border-border pl-6">
                  {job.roles.map((role) => (
                    <li key={role.title}>
                      <span
                        className={`absolute -left-[6px] mt-1.5 h-3 w-3 rounded-full border-2 border-card ${
                          role.end ? 'bg-muted' : 'bg-accent'
                        }`}
                      />
                      <p className="font-semibold">{role.title}</p>
                      <p className="font-mono text-xs text-muted">
                        {role.start} — {role.end ?? 'atual'}
                      </p>
                    </li>
                  ))}
                </ol>

                <p className="mt-7 leading-relaxed text-text/90">{job.summary}</p>

                <h4 className="mt-7 text-sm font-semibold uppercase tracking-wider text-muted">
                  Atividades
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {job.activities.map((a) => (
                    <li key={a} className="flex gap-3 text-sm leading-relaxed text-text/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-soft" />
                      {a}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-7 text-sm font-semibold uppercase tracking-wider text-muted">
                  Principais resultados
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {job.results.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-text/90">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" />
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
