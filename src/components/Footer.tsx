import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-content flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Feito com React, Vite e Tailwind.
        </p>
        <a href="#top" className="link-underline hover:text-text">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}
