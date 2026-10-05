import { useEffect, useRef, type ReactNode } from 'react'

interface MessageDialogProps {
  open: boolean
  title: string
  children: ReactNode
  onClose: () => void
}

/**
 * Caixa de mensagem estilo Windows. Usa <dialog> nativo com showModal(), que já prende
 * o foco, fecha com Esc e devolve o foco ao elemento que estava ativo antes.
 */
export function MessageDialog({ open, title, children, onClose }: MessageDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      role="alertdialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
      onClose={onClose}
      className="win hidden open:flex m-auto w-[calc(100%-32px)] max-w-[420px] bg-chrome-light p-[3px] text-ink backdrop:bg-[rgba(10,31,68,0.45)]"
    >
      <div className="tb">
        <span id="dialog-title">{title}</span>
        <button type="button" className="tbb" aria-label="Fechar" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="flex items-start gap-4 px-5 pb-2 pt-5">
        <svg viewBox="0 0 16 16" width="40" height="40" aria-hidden="true" shapeRendering="crispEdges" className="shrink-0">
          <rect x="2" y="2" width="12" height="12" fill="var(--grass-deep)" />
          <rect x="4" y="8" width="2" height="2" fill="#fff" />
          <rect x="6" y="10" width="2" height="2" fill="#fff" />
          <rect x="8" y="8" width="2" height="2" fill="#fff" />
          <rect x="10" y="6" width="2" height="2" fill="#fff" />
        </svg>
        <p id="dialog-desc" className="m-0">
          {children}
        </p>
      </div>
      <div className="flex justify-center px-5 pb-4 pt-2">
        <button
          type="button"
          autoFocus
          className="btn btn-secondary min-w-24 outline outline-1 outline-ink"
          onClick={onClose}
        >
          OK
        </button>
      </div>
    </dialog>
  )
}
