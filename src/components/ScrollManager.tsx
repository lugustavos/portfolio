import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Ao trocar de rota rola ao topo; se houver #âncora, rola até a seção. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      // espera a página montar antes de procurar a seção
      const t = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 60)
      return () => window.clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
