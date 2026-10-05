import type { ReactElement } from 'react'

// Ícones pixel 16×16 desenhados para este portfólio (README §9 — sem ícones da Microsoft).
export type PixelIconName =
  | 'folder'
  | 'chart'
  | 'terminal'
  | 'mail'
  | 'user'
  | 'cap'
  | 'briefcase'
  | 'pin'
  | 'monitor'

const shapes: Record<PixelIconName, ReactElement> = {
  folder: (
    <>
      <rect x="1" y="3" width="6" height="2" fill="#c99a12" />
      <rect x="1" y="5" width="14" height="9" fill="#c99a12" />
      <rect x="2" y="6" width="12" height="7" fill="var(--accent)" />
      <rect x="2" y="6" width="12" height="1" fill="#fff3b0" />
    </>
  ),
  chart: (
    <>
      <rect x="1" y="2" width="14" height="12" fill="#404040" />
      <rect x="2" y="3" width="12" height="10" fill="#fff" />
      <rect x="4" y="9" width="2" height="3" fill="var(--grass-deep)" />
      <rect x="7" y="6" width="2" height="6" fill="#0A4FA8" />
      <rect x="10" y="4" width="2" height="8" fill="var(--accent)" />
    </>
  ),
  terminal: (
    <>
      <rect x="1" y="2" width="14" height="10" fill="#404040" />
      <rect x="2" y="3" width="12" height="8" fill="var(--terminal-bg)" />
      <rect x="3" y="5" width="1" height="1" fill="var(--terminal-green)" />
      <rect x="4" y="6" width="1" height="1" fill="var(--terminal-green)" />
      <rect x="3" y="7" width="1" height="1" fill="var(--terminal-green)" />
      <rect x="6" y="7" width="3" height="1" fill="var(--terminal-green)" />
      <rect x="5" y="12" width="6" height="1" fill="#808080" />
      <rect x="3" y="13" width="10" height="1" fill="#c0c0c0" />
    </>
  ),
  mail: (
    <>
      <rect x="1" y="3" width="14" height="10" fill="#404040" />
      <rect x="2" y="4" width="12" height="8" fill="#fff" />
      <rect x="3" y="5" width="2" height="1" fill="#0A4FA8" />
      <rect x="5" y="6" width="2" height="1" fill="#0A4FA8" />
      <rect x="7" y="7" width="2" height="1" fill="#0A4FA8" />
      <rect x="9" y="6" width="2" height="1" fill="#0A4FA8" />
      <rect x="11" y="5" width="2" height="1" fill="#0A4FA8" />
    </>
  ),
  user: (
    <>
      <rect x="2" y="1" width="12" height="14" fill="#404040" />
      <rect x="3" y="2" width="10" height="12" fill="#fff" />
      <rect x="6" y="3" width="4" height="4" fill="#8a5a3c" />
      <rect x="5" y="8" width="6" height="1" fill="#0A4FA8" />
      <rect x="4" y="9" width="8" height="3" fill="#0A4FA8" />
      <rect x="4" y="12" width="8" height="1" fill="#c0c0c0" />
    </>
  ),
  cap: (
    <>
      <rect x="1" y="5" width="14" height="2" fill="#1a1f2b" />
      <rect x="3" y="4" width="10" height="1" fill="#1a1f2b" />
      <rect x="5" y="3" width="6" height="1" fill="#1a1f2b" />
      <rect x="4" y="7" width="8" height="4" fill="#2b3640" />
      <rect x="13" y="7" width="1" height="4" fill="var(--accent)" />
      <rect x="12" y="11" width="3" height="2" fill="var(--accent)" />
    </>
  ),
  briefcase: (
    <>
      <rect x="5" y="2" width="6" height="1" fill="#5c3a1e" />
      <rect x="5" y="3" width="1" height="2" fill="#5c3a1e" />
      <rect x="10" y="3" width="1" height="2" fill="#5c3a1e" />
      <rect x="1" y="5" width="14" height="9" fill="#5c3a1e" />
      <rect x="2" y="6" width="12" height="7" fill="#9b6a3c" />
      <rect x="2" y="8" width="12" height="1" fill="#5c3a1e" />
      <rect x="7" y="7" width="2" height="3" fill="var(--accent)" />
    </>
  ),
  pin: (
    <>
      <rect x="5" y="1" width="6" height="1" fill="#b3261e" />
      <rect x="4" y="2" width="8" height="5" fill="#b3261e" />
      <rect x="6" y="3" width="2" height="2" fill="#fff" />
      <rect x="5" y="7" width="6" height="2" fill="#b3261e" />
      <rect x="6" y="9" width="4" height="2" fill="#b3261e" />
      <rect x="7" y="11" width="2" height="3" fill="#b3261e" />
    </>
  ),
  monitor: (
    <>
      <rect x="1" y="2" width="14" height="10" fill="#404040" />
      <rect x="2" y="3" width="12" height="8" fill="var(--sky-top)" />
      <rect x="2" y="9" width="12" height="2" fill="var(--grass)" />
      <rect x="6" y="12" width="4" height="1" fill="#808080" />
      <rect x="4" y="13" width="8" height="1" fill="#c0c0c0" />
    </>
  ),
}

interface PixelIconProps {
  name: PixelIconName
  size?: number
  className?: string
}

export function PixelIcon({ name, size = 16, className = '' }: PixelIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      aria-hidden="true"
      className={`shrink-0 [image-rendering:pixelated] ${className}`}
    >
      {shapes[name]}
    </svg>
  )
}
