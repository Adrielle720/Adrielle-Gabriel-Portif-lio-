import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

function readInitialTheme(): Theme {
  // O script inline do index.html já definiu data-theme antes do primeiro paint.
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem('theme', next)
      } catch {
        // armazenamento indisponível: o tema só não fica salvo
      }
      return next
    })
  }, [])

  return { theme, toggle }
}
