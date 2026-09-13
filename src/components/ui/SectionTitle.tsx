export function SectionTitle({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <header>
      <h2 className="text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-3 h-1 w-12 rounded-full bg-brand" />
      {children && <p className="mt-4 max-w-2xl text-muted">{children}</p>}
    </header>
  )
}
