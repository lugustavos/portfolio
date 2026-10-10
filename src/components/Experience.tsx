import { FaBriefcase, FaLocationDot } from 'react-icons/fa6'
import { jobs } from '../data/profile'
import { SectionTitle } from './ui/SectionTitle'

export function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container-content">
        <SectionTitle title="Experiência" />

        <div className="mt-10 space-y-6">
          {jobs.map((job) => (
            <article key={job.company} className="card max-w-4xl p-6 sm:p-8">
              <header className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <FaBriefcase size={18} />
                  </span>
                  <div>
                    <h3 className="text-lg">{job.company}</h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
                      <FaLocationDot size={12} /> {job.location}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted">
                  desde {job.start}
                  {job.end ? ` até ${job.end}` : ''}
                </span>
              </header>

              <ul className="mt-6 space-y-2">
                {job.roles.map((role) => (
                  <li key={role.title} className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-medium">{role.title}</span>
                    <span className="text-sm text-muted">
                      {role.start} a {role.end ?? 'hoje'}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 leading-relaxed">{job.summary}</p>

              <h4 className="mt-6 text-sm font-semibold">O que eu faço</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/90 marker:text-brand">
                {job.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>

              <h4 className="mt-6 text-sm font-semibold">Resultados</h4>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink/90 marker:text-brand">
                {job.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
