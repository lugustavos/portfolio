import { useState } from 'react'

/** Print do projeto num quadro simples. Imagens em retrato (celular) aparecem inteiras. */
export function ShotThumb({ src, alt }: { src: string; alt: string }) {
  const [portrait, setPortrait] = useState(false)

  return (
    <div className="aspect-[16/10] overflow-hidden rounded-lg border border-line bg-white">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={(e) => setPortrait(e.currentTarget.naturalHeight > e.currentTarget.naturalWidth)}
        className={`h-full w-full ${portrait ? 'object-contain py-1' : 'object-cover object-top'}`}
      />
    </div>
  )
}
