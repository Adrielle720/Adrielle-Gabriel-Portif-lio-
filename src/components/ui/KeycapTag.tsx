export function KeycapTag({ children }: { children: string }) {
  return <span className="key">{children}</span>
}

export function KeycapList({ items, label }: { items: string[]; label: string }) {
  if (items.length === 0) return null
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <KeycapTag>{item}</KeycapTag>
        </li>
      ))}
    </ul>
  )
}
