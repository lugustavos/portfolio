import { useState } from 'react'

/** Miniatura de screenshot: imagens em retrato (celular) aparecem inteiras, as demais cobrem o quadro. */
export function ShotThumb({ src, alt }: { src: string; alt: string }) {
  const [portrait, setPortrait] = useState(false)

  return (
    <div className="aspect-[16/10] overflow-hidden bg-surface">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={(e) => setPortrait(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)}
        className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.02] ${
          portrait ? 'object-contain py-2' : 'object-cover object-top'
        }`}
      />
    </div>
  )
}
