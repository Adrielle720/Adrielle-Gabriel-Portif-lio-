interface SectionHeadingProps {
  id: string
  /** Caminho estilo Windows mostrado acima do título, ex.: C:\Adrielle\Sobre */
  path: string
  title: string
  lead?: string
}

export function SectionHeading({ id, path, title, lead }: SectionHeadingProps) {
  return (
    <header className="mb-8 sm:mb-12">
      <p className="ui-label mb-2 text-ink-muted">{path}</p>
      <h2 id={id} className="h-section">
        {title}
      </h2>
      {lead && <p className="mt-3 max-w-measure text-ink-muted">{lead}</p>}
    </header>
  )
}
