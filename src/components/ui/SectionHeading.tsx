import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
}) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 max-w-2xl text-muted">{children}</p>}
    </Reveal>
  )
}
