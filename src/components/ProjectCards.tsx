import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import { projects } from '../data/projects'
import { SectionTitle } from './ui/SectionTitle'
import { ShotThumb } from './ui/ShotThumb'
import { TechLogo } from './ui/TechIcon'

export function ProjectCards() {
  return (
    <section id="projetos" className="section">
      <div className="container-content">
        <SectionTitle title="Projetos da faculdade">
          Fiz um projeto por semestre, do 1º ao 5º. Clique em um deles para ver a página completa, com descrição,
          código, prints e o que eu fiz em cada um.
        </SectionTitle>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/projetos/${p.slug}`}
              className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="p-4" style={{ background: p.accent }}>
                {p.screenshots[0] ? (
                  <ShotThumb src={p.screenshots[0].src} alt={`Prévia do projeto ${p.title}`} />
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center rounded-lg bg-white text-4xl font-bold text-muted">
                    {p.title.slice(0, 2).toUpperCase()}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-medium text-brand">
                  {p.semesterLabel} · {p.type}
                </p>
                <h3 className="mt-1 text-lg">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {p.stack.slice(0, 7).map((t) => (
                    <TechLogo key={t} name={t} size={20} />
                  ))}
                </div>
                <span className="mt-auto flex items-center gap-2 pt-5 text-sm font-medium text-brand">
                  Ver projeto
                  <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
