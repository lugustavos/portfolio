import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaGithub, FaXmark } from 'react-icons/fa6'
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
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <nav className="container-content flex h-16 items-center justify-between gap-4">
        <Link to={{ pathname: '/', hash: '#top' }} className="flex items-center gap-3" aria-label="Início">
          <Logo size={34} />
          <span className="hidden font-semibold sm:inline">{profile.firstName}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.hash}>
              <Link
                to={{ pathname: '/', hash: item.hash }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <a href={profile.links.github} target="_blank" rel="noreferrer" className="btn-outline hidden lg:inline-flex">
          <FaGithub size={16} /> GitHub
        </a>

        <button
          className="rounded-lg border border-line p-2.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <FaXmark size={17} /> : <FaBars size={17} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-surface lg:hidden">
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
          </ul>
        </div>
      )}
    </header>
  )
}
