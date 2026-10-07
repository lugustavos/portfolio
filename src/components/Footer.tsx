import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-content flex flex-col items-center justify-between gap-5 text-sm text-muted sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-text/90">{profile.fullName}</p>
          <p className="mt-1">
            Portfólio · Laboratório de Desenvolvimento Multiplataforma · FATEC Zona Leste
          </p>
        </div>
        <div className="flex items-center gap-1">
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
              className="rounded-lg p-2.5 transition-colors hover:bg-card hover:text-text"
            >
              <Icon size={19} />
            </a>
          ))}
          <Link to={{ pathname: '/', hash: '#top' }} className="link-underline ml-3 hover:text-text">
            Topo ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}
