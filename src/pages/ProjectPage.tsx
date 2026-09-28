import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCircleCheck,
  FaCodeBranch,
  FaGlobe,
  FaRegImages,
  FaUsers,
} from 'react-icons/fa6'
import { getProject, projects } from '../data/projects'
import { Lightbox } from '../components/ui/Lightbox'
import { ShotThumb } from '../components/ui/ShotThumb'
import { Tech } from '../components/ui/TechIcon'

function Heading({ children }: { children: string }) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl">{children}</h2>
      <div className="mt-2 h-1 w-10 rounded-full bg-brand" />
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  const [shot, setShot] = useState<number | null>(null)

  if (!project) return <Navigate to="/" replace />

  const i = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[i - 1]
  const next = projects[i + 1]

  return (
    <main className="pb-6 pt-8 md:pt-10">
      <div className="container-content">
        <Link
          to={{ pathname: '/', hash: '#projetos' }}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-brand"
        >
          <FaArrowLeft size={12} /> Voltar aos projetos
        </Link>

        {/* i) Nome do projeto */}
        <header className="mt-6 rounded-xl border border-line p-6 sm:p-8" style={{ background: project.accent }}>
          <div className="flex flex-wrap gap-2">
            <span className="tag">
              {project.semesterLabel} · {project.period}
            </span>
            <span className="tag">{project.type}</span>
            <span className="tag">
              <FaUsers size={12} /> {project.team}
            </span>
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl">{project.title}</h1>
          <p className="mt-2 max-w-2xl text-lg text-ink/80">{project.tagline}</p>
        </header>

        {/* ii) Descrição e tecnologias */}
        <section className="mt-12">
          <Heading>Sobre o projeto</Heading>
          <div className="mt-5 max-w-3xl space-y-4 leading-relaxed">
            {project.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="mt-8 font-semibold">O que ele faz</h3>
          <ul className="mt-3 grid max-w-4xl gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed">
                <FaCircleCheck size={15} className="mt-0.5 shrink-0 text-brand" />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-semibold">Tecnologias do projeto</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Tech key={t} name={t} />
            ))}
          </div>
        </section>

        {/* iii) Links para o código */}
        <section className="mt-12">
          <Heading>Código e acesso</Heading>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={l.kind === 'code' ? 'btn-primary' : 'btn-outline'}
              >
                {l.kind === 'code' ? <FaCodeBranch size={14} /> : <FaGlobe size={14} />}
                {l.label}
                <FaArrowUpRightFromSquare size={11} />
              </a>
            ))}
          </div>
          {project.codeNote && <p className="mt-4 text-sm text-muted">{project.codeNote}</p>}
        </section>

        {/* iv) Screenshots */}
        <section className="mt-12">
          <Heading>Screenshots</Heading>
          {project.screenshotsNote && <p className="mt-4 max-w-3xl text-sm text-muted">{project.screenshotsNote}</p>}
          {project.screenshots.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {project.screenshots.map((s, idx) => (
                <button
                  key={s.src}
                  onClick={() => setShot(idx)}
                  className="card p-3 text-left transition-shadow hover:shadow-md"
                >
                  <ShotThumb src={s.src} alt={s.caption} />
                  <p className="px-1 pb-1 pt-3 text-sm font-medium">{s.caption}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="card mt-6 flex items-center gap-4 border-dashed p-6 text-sm text-muted">
              <FaRegImages size={22} className="shrink-0" />
              As screenshots deste projeto serão adicionadas em breve.
            </div>
          )}
        </section>

        {/* v) Participação e tecnologias que utilizei */}
        <section className="mt-12">
          <Heading>Minha participação</Heading>
          <ul className="mt-5 max-w-3xl space-y-3">
            {project.participation.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {p}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 font-semibold">Tecnologias que eu usei</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.myTech.map((t) => (
              <Tech key={t} name={t} />
            ))}
          </div>
        </section>

        <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          {prev ? (
            <Link to={`/projetos/${prev.slug}`} className="card p-4 transition-shadow hover:shadow-md">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <FaArrowLeft size={10} /> {prev.semesterLabel}
              </span>
              <span className="mt-1 block font-medium">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link to={`/projetos/${next.slug}`} className="card p-4 text-right transition-shadow hover:shadow-md">
              <span className="flex items-center justify-end gap-1.5 text-xs text-muted">
                {next.semesterLabel} <FaArrowRight size={10} />
              </span>
              <span className="mt-1 block font-medium">{next.title}</span>
            </Link>
          )}
        </nav>
      </div>

      <Lightbox shots={project.screenshots} index={shot} onChange={setShot} />
    </main>
  )
}
