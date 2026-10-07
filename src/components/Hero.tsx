import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile } from '../data/profile'

export function Hero() {
  const [imgOk, setImgOk] = useState(true)
  const initials = profile.firstName
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-content grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5 inline-flex items-center gap-2"
          >
            <MapPin size={14} />
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            {profile.fullName}
            <span className="mt-3 block bg-gradient-to-r from-accent-soft via-accent to-accent2 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-2xl leading-relaxed text-muted"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-medium text-white transition-colors hover:bg-accent-soft"
            >
              <Github size={18} />
              GitHub · @lugustavos
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium transition-colors hover:border-accent hover:text-accent-soft"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              aria-label="Enviar e-mail"
              className="rounded-xl border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent-soft"
            >
              <Mail size={18} />
            </a>
            <a
              href="#projetos"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group ml-1 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
            >
              Ver projetos
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto w-full max-w-[300px] md:max-w-none"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent2/30 blur-2xl" />
            <div className="card relative aspect-square overflow-hidden rounded-[1.75rem] border-border/80">
              {imgOk ? (
                <img
                  src={profile.photo}
                  alt={`Foto de ${profile.fullName}`}
                  onError={() => setImgOk(false)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="bg-gradient-to-br from-accent-soft to-accent2 bg-clip-text font-mono text-7xl font-bold text-transparent">
                    {initials}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
