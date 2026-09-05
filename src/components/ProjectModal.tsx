import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Project } from '../data/projects'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (project) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="card relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-b-none rounded-t-3xl p-8 sm:rounded-3xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-5 top-5 rounded-lg p-2 text-muted transition-colors hover:bg-surface hover:text-text"
            >
              <X size={20} />
            </button>

            <span
              className="font-mono text-xs font-medium"
              style={{ color: project.accent }}
            >
              {project.semesterLabel} · {project.type}
            </span>
            <h3 className="mt-2 text-3xl">{project.title}</h3>
            <p className="mt-1 text-muted">{project.tagline}</p>

            <p className="mt-6 leading-relaxed text-text/90">{project.description}</p>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">Destaques</h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-text/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.accent }} />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Meu papel</h4>
                <p className="mt-2 text-sm text-text/90">{project.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">Contexto</h4>
                <p className="mt-2 text-sm text-text/90">{project.team}</p>
              </div>
            </div>

            <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted">Tecnologias</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent-soft"
                >
                  {l.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
