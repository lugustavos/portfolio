import { FaLanguage } from 'react-icons/fa6'
import { languages } from '../data/profile'
import { SectionTitle } from './ui/SectionTitle'

export function Languages() {
  return (
    <section id="idiomas" className="section">
      <div className="container-content">
        <SectionTitle title="Idiomas" />

        <div className="mt-10 grid max-w-3xl gap-5 md:grid-cols-2">
          {languages.map((l) => (
            <div key={l.name} className="card p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                    <FaLanguage size={20} />
                  </span>
                  <h3 className="font-medium">{l.name}</h3>
                </div>
                <span className="text-sm font-medium text-brand">{l.level}</span>
              </div>
              <div
                className="mt-5 h-2 overflow-hidden rounded-full bg-line"
                role="img"
                aria-label={`Nível de ${l.name}: ${l.level}`}
              >
                <div className="h-full rounded-full bg-brand" style={{ width: `${l.percent}%` }} />
              </div>
              <p className="mt-3 text-sm text-muted">{l.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
