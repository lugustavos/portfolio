import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import { useEffect } from 'react'
import type { Screenshot } from '../../data/projects'

type Props = {
  shots: Screenshot[]
  index: number | null
  onChange: (i: number | null) => void
}

export function Lightbox({ shots, index, onChange }: Props) {
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

  if (index === null) return null
  const shot = shots[index]
  const btn = 'absolute rounded-full bg-white/90 p-3 text-ink shadow transition-colors hover:bg-white'

  return (
    <div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-ink/80 p-4"
      onClick={() => onChange(null)}
    >
      <button onClick={() => onChange(null)} aria-label="Fechar" className={`${btn} right-4 top-4`}>
        <FaXmark size={16} />
      </button>

      {shots.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onChange((index - 1 + shots.length) % shots.length)
            }}
            aria-label="Anterior"
            className={`${btn} left-3 top-1/2 -translate-y-1/2`}
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onChange((index + 1) % shots.length)
            }}
            aria-label="Próxima"
            className={`${btn} right-3 top-1/2 -translate-y-1/2`}
          >
            <FaChevronRight size={16} />
          </button>
        </>
      )}

      <img
        key={shot.src}
        src={shot.src}
        alt={shot.caption}
        className="max-h-[80vh] max-w-full rounded-lg bg-white object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="mt-4 text-sm text-white" onClick={(e) => e.stopPropagation()}>
        {shot.caption} <span className="text-white/60">· {index + 1}/{shots.length}</span>
      </p>
    </div>
  )
}
