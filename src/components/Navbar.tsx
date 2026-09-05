import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'

const nav = [
  { href: '#projetos', label: 'Projetos' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#contato', label: 'Contato' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-accent-soft">{'{'}</span> LG <span className="text-accent-soft">{'}'}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="link-underline text-sm text-muted transition-colors hover:text-text">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:text-accent-soft md:inline-block"
        >
          GitHub
        </a>

        <button
          className="text-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="container-content flex flex-col py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-muted transition-colors hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
