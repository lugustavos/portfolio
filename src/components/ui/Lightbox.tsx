import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect } from 'react'
import type { Screenshot } from '../../data/projects'

type Props = {
  shots: Screenshot[]
  index: number | null
  onChange: (i: number | null) => void
}

export function Lightbox({ shots, index, onChange }: Props) {
  const open = index !== null

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      if (e.key === 'ArrowRight') onChange((index + 1) % shots.length)
      if (e.key === 'ArrowLeft') onChange((index - 1 + shots.length) % shots.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, shots.length, onChange])

  const shot = index !== null ? shots[index] : null

  return (
    <AnimatePresence>
      {open && shot && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onChange(null)}
        >
          <button
            onClick={() => onChange(null)}
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-lg bg-black/50 p-2 text-white/80 transition-colors hover:text-white"
          >
            <X size={22} />
          </button>

          {shots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index! - 1 + shots.length) % shots.length)
                }}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white/80 transition-colors hover:text-white"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index! + 1) % shots.length)
                }}
                aria-label="Próxima"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white/80 transition-colors hover:text-white"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          <motion.img
            key={shot.src}
            src={shot.src}
            alt={shot.caption}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-h-[80vh] max-w-full rounded-lg border border-border object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="mt-4 text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
            {shot.caption} <span className="text-white/40">· {index! + 1}/{shots.length}</span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
