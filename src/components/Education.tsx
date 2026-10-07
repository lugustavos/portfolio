import { CalendarCheck, CalendarClock, GraduationCap, School } from 'lucide-react'
import { course, previousEducation } from '../data/profile'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function Education() {
  const rows = [
    { icon: School, label: 'Faculdade', value: `${course.institution}` , sub: course.institutionFull },
    { icon: GraduationCap, label: 'Curso', value: course.name },
    { icon: CalendarCheck, label: 'Início', value: course.start },
    { icon: CalendarClock, label: 'Previsão de conclusão', value: course.end },
  ]

  return (
    <section id="curso" className="section border-t border-border/60">
      <div className="container-content">
        <SectionHeading eyebrow="01 — Formação" title="Curso em andamento" />

        <Reveal delay={1}>
          <div className="card mt-10 p-6 sm:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-soft" />
              {course.status}
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {rows.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-accent-soft">
                    <Icon size={19} />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
                    <dd className="mt-1 font-medium">{value}</dd>
                    {sub && <dd className="text-sm text-muted">{sub}</dd>}
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-8 border-t border-border pt-5 text-sm text-muted">
              Formação anterior: <span className="text-text/90">{previousEducation.name}</span> —{' '}
              {previousEducation.institution} ({previousEducation.period}).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
