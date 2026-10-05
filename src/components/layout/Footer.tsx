import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="bg-chrome shadow-bevel-out">
      <div className="container-page flex flex-col gap-2 py-4 pb-20 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:pb-4">
        <p className="ui-label">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="ui-label">Feito com React, TypeScript e Tailwind CSS</p>
      </div>
    </footer>
  )
}
