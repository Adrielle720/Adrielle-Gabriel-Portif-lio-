import { useEffect, useRef, useState } from 'react'
import { sections, type SectionId } from '../../data/nav'
import type { Theme } from '../../hooks/useTheme'
import { PixelIcon } from '../ui/PixelIcon'

interface TaskbarProps {
  active: SectionId
  theme: Theme
  onToggleTheme: () => void
}

// Início fica no botão "logo"; Contato fica no CTA "Fale comigo".
const desktopNav = sections.filter((s) => s.id !== 'inicio' && s.id !== 'contato')

export function Taskbar({ active, theme, onToggleTheme }: TaskbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [menuOpen])

  const themeLabel = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 bg-chrome p-1 shadow-bevel-out">
        <div className="mx-auto flex max-w-container items-center gap-2">
          {/* Mobile: botão "Iniciar" com o menu de seções */}
          <div ref={menuRef} className="relative lg:hidden">
            <button
              type="button"
              className="btn btn-secondary min-h-[44px] gap-2 px-3 font-semibold"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen((o) => !o)}
              style={menuOpen ? { boxShadow: 'var(--shadow-bevel-in)' } : undefined}
            >
              <PixelIcon name="folder" size={20} />
              Menu
            </button>
            {menuOpen && (
              <nav
                id="menu-mobile"
                aria-label="Principal"
                className="win absolute left-0 top-[calc(100%+6px)] w-60"
              >
                <ul className="bg-chrome py-1">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={() => setMenuOpen(false)}
                        aria-current={active === s.id ? 'true' : undefined}
                        className="ui-label flex min-h-[44px] items-center px-4 text-ink hover:bg-primary hover:text-on-primary aria-[current=true]:bg-selection aria-[current=true]:font-semibold"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          {/* Desktop: logo + abas de seção */}
          <a href="#inicio" className="btn btn-secondary hidden min-h-[40px] gap-1.5 px-3 font-semibold lg:inline-flex">
            <PixelIcon name="folder" size={20} />
            adrielle.dev
          </a>
          <nav aria-label="Principal" className="hidden flex-1 gap-0.5 lg:flex">
            {desktopNav.map((s) => {
              const current = active === s.id
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={current ? 'true' : undefined}
                  className={`ui-label px-3.5 py-2.5 text-ink no-underline ${
                    current
                      ? 'bg-chrome-light font-semibold shadow-bevel-in'
                      : 'bg-chrome shadow-bevel-out hover:bg-chrome-light'
                  }`}
                >
                  {s.label}
                </a>
              )
            })}
          </nav>

          {/* Bandeja */}
          <div className="ml-auto flex items-center gap-2.5 py-1 pl-2.5 pr-1 shadow-bevel-in lg:ml-0">
            <button
              type="button"
              className="tbb !h-9 !w-9"
              aria-label={themeLabel}
              title={themeLabel}
              onClick={onToggleTheme}
            >
              <PixelIcon name="monitor" size={20} />
            </button>
            <a href="#contato" className="btn btn-primary hidden min-h-[40px] px-4 !shadow-none sm:inline-flex">
              Fale comigo
            </a>
          </div>
        </div>
      </header>

      {/* Mobile: CTA flutuante (README · Taskbar) */}
      {active !== 'contato' && (
        <a
          href="#contato"
          className="btn btn-primary fixed bottom-4 right-4 z-40 rounded-pill sm:hidden"
        >
          Fale comigo
        </a>
      )}
    </>
  )
}
