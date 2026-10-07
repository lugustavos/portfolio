import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

export function ProjectCards() {
  return (
    <section id="projetos" className="section border-t border-border/60">
      <div className="container-content">
        <SectionHeading eyebrow="05 — Portfólio" title="Projetos por semestre">
          Um projeto por semestre, dos primeiros 5 da graduação. Clique em um cartão para abrir a página
          completa do projeto, com descrição, código, screenshots e a minha participação.
        </SectionHeading>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i}>
              <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="h-full">
                <Link
                  to={`/projetos/${p.slug}`}
                  className="card group flex h-full flex-col overflow-hidden transition-colors hover:border-accent/50"
                >
                  <div
                    className="relative aspect-[16/9] overflow-hidden border-b border-border"
                    style={{ background: `linear-gradient(135deg, ${p.accent}33, transparent 70%)` }}
                  >
                    {p.screenshots[0] ? (
                      <img
                        src={p.screenshots[0].src}
                        alt={`Prévia do projeto ${p.title}`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center font-mono text-4xl font-bold" style={{ color: `${p.accent}99` }}>
                        {p.title.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-medium" style={{ color: p.accent }}>
                        {p.semesterLabel}
                      </span>
                      <span className="rounded-md border border-border px-2 py-0.5 text-[11px] text-muted">{p.type}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
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

                    <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-soft">
                      Abrir projeto
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
