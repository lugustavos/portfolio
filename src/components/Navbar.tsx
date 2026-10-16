import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaGithub, FaLinkedin, FaXmark } from 'react-icons/fa6'
import { profile } from '../data/profile'
import { Logo } from './ui/Logo'

const nav = [
  { hash: '#projetos', label: 'Projetos' },
  { hash: '#curso', label: 'Faculdade' },
  { hash: '#experiencia', label: 'Experiência' },
  { hash: '#cursos', label: 'Cursos' },
  { hash: '#idiomas', label: 'Idiomas' },
  { hash: '#skills', label: 'Skills' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand text-white">
      <nav className="container-content flex h-16 items-center justify-between gap-6">
        <Link to={{ pathname: '/', hash: '#top' }} className="flex items-center gap-3" aria-label="Início">
          <Logo size={36} light />
          <span className="hidden leading-tight sm:block">
            <span className="block font-semibold">{profile.firstName}</span>
            <span className="block text-xs text-white/70">Desenvolvedor Full Stack</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.hash}>
                <Link
                  to={{ pathname: '/', hash: item.hash }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="mx-3 h-6 w-px bg-white/30" />
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2.5 text-white/85 transition-colors hover:bg-white/15 hover:text-white"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2.5 text-white/85 transition-colors hover:bg-white/15 hover:text-white"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        <button
          className="rounded-md p-2.5 hover:bg-white/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <FaXmark size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/20 bg-brand-dark lg:hidden">
          <ul className="container-content flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.hash}>
                <Link
                  to={{ pathname: '/', hash: item.hash }}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="block py-3 text-sm font-medium">
                GitHub
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="block py-3 text-sm font-medium">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
