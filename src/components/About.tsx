import { useState } from 'react'
import { GraduationCap, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './ui/Reveal'

export function About() {
  const [imgOk, setImgOk] = useState(true)
  const initials = profile.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
  const showPhoto = Boolean(profile.photo) && imgOk

  return (
    <section id="sobre" className="section border-t border-border/60">
      <div className="container-content grid gap-14 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="card flex aspect-square w-full max-w-xs items-center justify-center overflow-hidden">
            {showPhoto ? (
              <img
                src={profile.photo}
                alt={profile.name}
                onError={() => setImgOk(false)}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="bg-gradient-to-br from-accent-soft to-accent2 bg-clip-text font-mono text-7xl font-bold text-transparent">
                {initials}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="eyebrow">03 — Quem sou</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Sobre mim</h2>
          <p className="mt-6 leading-relaxed text-text/90">{profile.bio}</p>
          <p className="mt-4 leading-relaxed text-muted">
            Gosto de acompanhar o produto do início ao fim: entender o problema, desenhar a interface,
            integrar APIs e colocar no ar. Trabalhei tanto sozinho quanto em equipe, usando Git e
            fluxo de organização em repositórios compartilhados.
          </p>

          <div className="mt-8 flex flex-col gap-3 text-sm">
            <span className="inline-flex items-center gap-2.5 text-muted">
              <GraduationCap size={18} className="text-accent-soft" />
              {profile.education.course} · {profile.education.institution} ({profile.education.period})
            </span>
            <span className="inline-flex items-center gap-2.5 text-muted">
              <MapPin size={18} className="text-accent-soft" />
              {profile.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
