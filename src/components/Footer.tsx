import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="mt-10 bg-navy text-white">
      <div className="container-content flex flex-col items-center justify-between gap-5 py-8 text-sm sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-medium">{profile.fullName}</p>
          <p className="mt-1 text-white/60">
            Portfólio · Laboratório de Desenvolvimento Multiplataforma · FATEC Zona Leste
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: FaGithub, href: profile.links.github, label: 'GitHub' },
            { icon: FaLinkedin, href: profile.links.linkedin, label: 'LinkedIn' },
            { icon: FaEnvelope, href: `mailto:${profile.links.email}`, label: 'E-mail' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="rounded-lg p-2.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <Icon size={18} />
            </a>
          ))}
          <Link to={{ pathname: '/', hash: '#top' }} className="ml-3 text-white/70 hover:text-white">
            Voltar ao topo ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}
