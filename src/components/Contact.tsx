import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from './ui/Reveal'

export function Contact() {
  return (
    <section id="contato" className="section border-t border-border/60">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow">05 — Contato</p>
          <h2 className="mt-3 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
            Onde me encontrar
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Fico à disposição para conversar sobre os projetos ou trocar uma ideia. É só chamar por um dos canais abaixo.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.links.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-soft"
            >
              <Mail size={18} />
              {profile.links.email}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent-soft"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent-soft"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
