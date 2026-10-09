import { FaCalendarDays, FaFlagCheckered, FaGraduationCap, FaSchool } from 'react-icons/fa6'
import { course, previousEducation } from '../data/profile'
import { SectionTitle } from './ui/SectionTitle'

export function Education() {
  const rows = [
    { icon: FaSchool, label: 'Faculdade', value: course.institution, sub: course.institutionFull },
    { icon: FaGraduationCap, label: 'Curso', value: course.name },
    { icon: FaCalendarDays, label: 'Início', value: course.start },
    { icon: FaFlagCheckered, label: 'Previsão de conclusão', value: course.end },
  ]

  return (
    <section id="curso" className="section">
      <div className="container-content">
        <SectionTitle title="Faculdade" />

        <div className="card mt-10 max-w-4xl p-6 sm:p-8">
          <p className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand">
            {course.status}
          </p>

          <dl className="mt-5 grid gap-6 sm:grid-cols-2">
            {rows.map(({ icon: Icon, label, value, sub }) => (
              <div key={label} className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon size={17} />
                </span>
                <div>
                  <dt className="text-sm text-muted">{label}</dt>
                  <dd className="mt-0.5 font-medium">{value}</dd>
                  {sub && <dd className="text-sm text-muted">{sub}</dd>}
                </div>
              </div>
            ))}
          </dl>

          <p className="mt-6 border-t border-line pt-4 text-sm text-muted">
            Antes da FATEC fiz o <span className="font-medium text-ink">{previousEducation.name}</span> na{' '}
            {previousEducation.institution} ({previousEducation.period}).
          </p>
        </div>
      </div>
    </section>
  )
}
