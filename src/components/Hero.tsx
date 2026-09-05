import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="container-content">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-5"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-4xl leading-[1.05] sm:text-6xl md:text-7xl"
        >
          {profile.name}
          <span className="mt-3 block bg-gradient-to-r from-accent-soft via-accent to-accent2 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
            {profile.role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted"
        >
          {profile.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-white transition-all hover:bg-accent-soft"
          >
            Ver projetos
            <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent-soft"
          >
            Entrar em contato
          </a>

          <div className="ml-1 flex items-center gap-1">
            {[
              { icon: Github, href: profile.links.github, label: 'GitHub' },
              { icon: Linkedin, href: profile.links.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${profile.links.email}`, label: 'E-mail' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="rounded-lg p-2.5 text-muted transition-colors hover:bg-card hover:text-text"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8"
        >
          {[
            { k: `${projects.length}`, v: 'projetos ao longo da graduação' },
            { k: '5', v: 'semestres de desenvolvimento contínuo' },
            { k: 'Web + Mobile', v: 'do front-end ao deploy' },
          ].map((s) => (
            <div key={s.v}>
              <dt className="text-2xl font-bold text-text">{s.k}</dt>
              <dd className="mt-1 max-w-[16ch] text-sm text-muted">{s.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
