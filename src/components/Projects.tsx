import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { projects, type Project } from '../data/projects'
import { Reveal } from './ui/Reveal'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projetos" className="section">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">01 — Portfólio</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Projetos por semestre</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Cada semestre da graduação trouxe um projeto novo e uma camada a mais da stack — de páginas
            estáticas a aplicações full stack e apps mobile. Clique em um cartão para ver os detalhes.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i} as="div">
              <motion.button
                onClick={() => setActive(p)}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="card group flex h-full w-full flex-col p-6 text-left transition-colors hover:border-accent/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium" style={{ color: p.accent }}>
                    {p.semesterLabel}
                  </span>
                  <span className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted">{p.type}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((t) => (
                    <span key={t} className="rounded border border-border bg-surface px-2 py-0.5 text-[11px] text-muted">
                      {t}
                    </span>
                  ))}
                  {p.stack.length > 4 && (
                    <span className="rounded border border-border bg-surface px-2 py-0.5 text-[11px] text-muted">
                      +{p.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-accent-soft">
                  <Plus size={16} />
                  Ver detalhes
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-soft"
                  />
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
