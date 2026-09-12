/** Marca pessoal: as iniciais num quadrado verde. */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <span
      style={{ width: size, height: size, fontSize: size * 0.4 }}
      className="inline-flex items-center justify-center rounded-lg bg-brand font-bold leading-none text-white"
      role="img"
      aria-label="Logo Luís Gustavo"
    >
      LG
    </span>
  )
}
