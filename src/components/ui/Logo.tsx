/** Marca pessoal: monograma "LG" sobre gradiente violeta → ciano. */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Logo Luís Gustavo">
      <defs>
        <linearGradient id="lg-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c5cff" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#lg-grad)" />
      <text
        x="50%"
        y="53%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
        fontSize="28"
        fontWeight="700"
        fill="#0a0a0f"
      >
        LG
      </text>
    </svg>
  )
}
