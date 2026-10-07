import { Award, BookOpen, Building2, Clock, MapPin } from 'lucide-react'
import { certifications, extensionCourses, type Certification } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

function CertBadge({ cert }: { cert: Certification }) {
  return (
    <div className={`card flex h-full flex-col items-center p-5 text-center ${cert.inProgress ? 'border-dashed' : ''}`}>
      <div className="flex h-28 w-28 items-center justify-center">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`Selo ${cert.issuer} ${cert.code}`}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/20 to-accent2/10">
            <Award size={22} className="text-accent-soft" />
            <span className="mt-1 font-mono text-sm font-bold">{cert.code}</span>
          </div>
        )}
      </div>
      <h4 className="mt-4 text-sm font-semibold leading-snug">
        {cert.code} — {cert.name}
      </h4>
      <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
      <p
        className={`mt-3 rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
          cert.inProgress ? 'bg-accent/15 text-accent-soft' : 'bg-surface text-muted'
        }`}
      >
        {cert.date}
      </p>
    </div>
  )
}

export function Courses() {
  return (
    <section id="cursos" className="section border-t border-border/60">
      <div className="container-content">
        <SectionHeading eyebrow="03 — Qualificações" title="Cursos de extensão e certificações" />

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wider text-muted">Cursos de extensão</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {extensionCourses.map((c, i) => (
            <Reveal key={c.name} delay={i}>
              <article className="card h-full p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-accent-soft">
                  <BookOpen size={19} />
                </span>
                <h4 className="mt-4 font-semibold leading-snug">{c.name}</h4>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li className="flex items-center gap-2">
                    <Building2 size={15} className="shrink-0" /> {c.institution}
                  </li>
                  {c.place && (
                    <li className="flex items-center gap-2">
                      <MapPin size={15} className="shrink-0" /> {c.place}
                    </li>
                  )}
                  {c.hours && (
                    <li className="flex items-center gap-2">
                      <Clock size={15} className="shrink-0" /> {c.hours} horas
                    </li>
                  )}
                  <li className="font-mono text-xs">{c.period}</li>
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-14 text-sm font-semibold uppercase tracking-wider text-muted">Certificações</h3>
        <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {certifications.map((c, i) => (
            <Reveal key={c.code} delay={i}>
              <CertBadge cert={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
