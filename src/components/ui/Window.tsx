import type { ReactNode } from 'react'

interface WindowProps {
  /** Nome do "programa" na barra de título (decorativo). */
  title: string
  variant?: 'blue' | 'teal'
  /** id do título real (h2/h3) dentro da janela, para aria-labelledby. */
  labelledBy?: string
  as?: 'section' | 'article' | 'div'
  menu?: boolean
  status?: ReactNode[]
  className?: string
  contentClassName?: string
  children: ReactNode
}

export function Window({
  title,
  variant = 'blue',
  labelledBy,
  as: Tag = 'div',
  menu = false,
  status,
  className = '',
  contentClassName = '',
  children,
}: WindowProps) {
  return (
    <Tag className={`win ${className}`} aria-labelledby={labelledBy}>
      <div className={`tb ${variant === 'teal' ? 'tb-alt' : ''}`}>
        <span className="truncate">{title}</span>
        {/* Controles decorativos: escondidos de leitores de tela e fora do foco (README §1.5). */}
        <span className="flex gap-0.5" aria-hidden="true">
          <span className="tbb">_</span>
          <span className="tbb">□</span>
          <span className="tbb">×</span>
        </span>
      </div>
      {menu && (
        <div className="win-menu" aria-hidden="true">
          <span>
            <u>A</u>rquivo
          </span>
          <span>
            <u>E</u>ditar
          </span>
          <span>
            <u>V</u>er
          </span>
          <span>
            A<u>j</u>uda
          </span>
        </div>
      )}
      <div className={`win-content ${contentClassName}`}>{children}</div>
      {status && status.length > 0 && (
        <div className="win-status">
          {status.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      )}
    </Tag>
  )
}
