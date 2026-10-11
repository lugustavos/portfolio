import { FaBuilding, FaClock, FaLocationDot } from 'react-icons/fa6'
import { certifications, extensionCourses, type Certification } from '../data/profile'
import { SectionTitle } from './ui/SectionTitle'

function CertBadge({ cert }: { cert: Certification }) {
  return (
    <div className={`card flex h-full flex-col items-center p-4 text-center ${cert.inProgress ? 'border-dashed' : ''}`}>
      <div className="flex h-28 w-28 items-center justify-center">
        {cert.image ? (
          <img
            src={cert.image}
            alt={`Selo ${cert.issuer} ${cert.code}`}
            loading="lazy"
            className={`h-full w-full object-contain ${cert.inProgress ? 'opacity-50 grayscale' : ''}`}
          />
        ) : (
          <span className="text-xl font-bold text-muted">{cert.code}</span>
        )}
      </div>
      <h4 className="mt-3 text-sm font-medium leading-snug">
        {cert.code} · {cert.name}
      </h4>
      <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
      <p className={`mt-3 text-xs font-medium ${cert.inProgress ? 'text-accent' : 'text-brand'}`}>
        {cert.inProgress ? 'estudando agora' : cert.date}
      </p>
    </div>
  )
}

export function Courses() {
  return (
    <section id="cursos" className="section">
      <div className="container-content">
        <SectionTitle title="Cursos e certificados" />

        <h3 className="mt-10 text-lg">Cursos de extensão</h3>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {extensionCourses.map((c) => (
            <article key={c.name} className="card p-5">
              <h4 className="font-medium leading-snug">{c.name}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li className="flex items-center gap-2">
                  <FaBuilding size={13} className="shrink-0 text-brand" /> {c.institution}
                </li>
                {c.place && (
                  <li className="flex items-center gap-2">
                    <FaLocationDot size={13} className="shrink-0 text-brand" /> {c.place}
                  </li>
                )}
                {c.hours && (
                  <li className="flex items-center gap-2">
                    <FaClock size={13} className="shrink-0 text-brand" /> {c.hours} horas
                  </li>
                )}
              </ul>
              <p className="mt-4 text-xs font-medium text-muted">{c.period}</p>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-lg">Certificações</h3>
        <div className="mt-4 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {certifications.map((c) => (
            <CertBadge key={c.code} cert={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
