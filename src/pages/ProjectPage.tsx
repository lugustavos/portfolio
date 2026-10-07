import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Globe, ImageOff, Users } from 'lucide-react'
import { getProject, projects } from '../data/projects'
import { Reveal } from '../components/ui/Reveal'
import { Lightbox } from '../components/ui/Lightbox'
import { ShotThumb } from '../components/ui/ShotThumb'

function Heading({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <h2 className="flex items-baseline gap-3 text-2xl font-bold">
      <span className="font-mono text-sm font-normal text-accent-soft">{n}</span>
      {children}
    </h2>
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
    <main className="pt-28 pb-10 md:pt-32">
      <div className="container-content">
        <Link
          to={{ pathname: '/', hash: '#projetos' }}
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={16} /> Voltar aos projetos
        </Link>

        {/* i) Nome do projeto */}
        <header className="mt-8">
          <p className="font-mono text-sm font-medium" style={{ color: project.accent }}>
            {project.semesterLabel} · {project.period}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl">{project.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
            <span className="rounded-md border border-border px-2.5 py-1">{project.type}</span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1">
              <Users size={13} /> {project.team}
            </span>
          </div>
        </header>

        {/* ii) Descrição e tecnologias */}
        <Reveal className="mt-14">
          <Heading n="01">Sobre o projeto</Heading>
          <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-text/90">
            {project.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">Funcionalidades</h3>
          <ul className="mt-3 grid max-w-4xl gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-text/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} />
                {f}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">
            Tecnologias do projeto
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span key={t} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-text/90">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* iii) Links para o código */}
        <Reveal className="mt-14">
          <Heading n="02">Código e acesso</Heading>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent-soft"
              >
                {l.kind === 'code' ? <Code2 size={17} /> : <Globe size={17} />}
                {l.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
          {project.codeNote && <p className="mt-4 text-sm text-muted">{project.codeNote}</p>}
        </Reveal>

        {/* iv) Screenshots */}
        <Reveal className="mt-14">
          <Heading n="03">Screenshots</Heading>
          {project.screenshotsNote && (
            <p className="mt-3 max-w-3xl text-sm text-muted">{project.screenshotsNote}</p>
          )}
          {project.screenshots.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.screenshots.map((s, idx) => (
                <button
                  key={s.src}
                  onClick={() => setShot(idx)}
                  className="card group overflow-hidden text-left transition-colors hover:border-accent/50"
                >
                  <ShotThumb src={s.src} alt={s.caption} />
                  <p className="px-4 py-3 text-sm text-muted">{s.caption}</p>
                </button>
              ))}
            </div>
          ) : (
            <div className="card mt-5 flex items-center gap-4 border-dashed p-6 text-sm text-muted">
              <ImageOff size={22} className="shrink-0" />
              As screenshots deste projeto serão adicionadas em breve.
            </div>
          )}
        </Reveal>

        {/* v) Participação e tecnologias que utilizei */}
        <Reveal className="mt-14">
          <Heading n="04">Minha participação</Heading>
          <ul className="mt-5 max-w-3xl space-y-3">
            {project.participation.map((p) => (
              <li key={p} className="flex gap-3 leading-relaxed text-text/90">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} />
                {p}
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">
            Tecnologias que utilizei
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.myTech.map((t) => (
              <span
                key={t}
                className="rounded-md border px-2.5 py-1 text-xs font-medium"
                style={{ borderColor: `${project.accent}66`, background: `${project.accent}14`, color: project.accent }}
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <nav className="mt-20 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {prev ? (
            <Link to={`/projetos/${prev.slug}`} className="card group p-5 transition-colors hover:border-accent/50">
              <span className="flex items-center gap-1.5 text-xs text-muted">
                <ArrowLeft size={14} /> {prev.semesterLabel}
              </span>
              <span className="mt-1 block font-semibold">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to={`/projetos/${next.slug}`}
              className="card group p-5 text-right transition-colors hover:border-accent/50"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs text-muted">
                {next.semesterLabel} <ArrowRight size={14} />
              </span>
              <span className="mt-1 block font-semibold">{next.title}</span>
            </Link>
          )}
        </nav>
      </div>

      <Lightbox shots={project.screenshots} index={shot} onChange={setShot} />
    </main>
  )
}
