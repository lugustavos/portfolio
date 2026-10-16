/** Marca pessoal: as iniciais num quadrado. `light` é para usar sobre fundo colorido. */
export function Logo({ size = 36, light = false }: { size?: number; light?: boolean }) {
  return (
    <span
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      className={`inline-flex items-center justify-center rounded-lg font-bold leading-none ${
        light ? 'bg-white text-brand' : 'bg-brand text-white'
      }`}
      role="img"
      aria-label="Logo Luís Gustavo"
    >
      LG
    </span>
  )
}
