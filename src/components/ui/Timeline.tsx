import type { TimelineEntry } from '../../types'
import { KeycapList } from './KeycapTag'
import { PixelIcon, type PixelIconName } from './PixelIcon'
import { Window } from './Window'

interface TimelineProps {
  entries: TimelineEntry[]
  icon: PixelIconName
  emptyText: string
}

export function Timeline({ entries, icon, emptyText }: TimelineProps) {
  if (entries.length === 0) {
    return <p className="text-ink-muted">{emptyText}</p>
  }

  return (
    <ol className="relative space-y-8 pl-10 sm:pl-14">
      {/* Trilho da timeline */}
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-[11px] top-2 w-1 bg-border sm:left-[19px]"
      />
      {entries.map((entry) => {
        const headingId = `tl-${entry.id}`
        const hasHighlights = entry.highlights && entry.highlights.length > 0
        const hasTools = entry.tools && entry.tools.length > 0
        return (
          <li key={entry.id} className="relative">
            {/* Marcador: ícone pixel numa "tecla" saltada */}
            <span
              aria-hidden="true"
              className="absolute -left-10 top-0 grid h-7 w-7 place-items-center bg-chrome shadow-bevel-out sm:-left-14 sm:h-10 sm:w-10"
            >
              <PixelIcon name={icon} size={20} className="sm:h-6 sm:w-6" />
            </span>

            <Window
              as="article"
              title={entry.exe}
              variant={entry.variant}
              labelledBy={headingId}
              status={[entry.period, entry.location].filter((s): s is string => Boolean(s))}
            >
              <h3 id={headingId} className="h3">
                {entry.title}
              </h3>
              <p className="mt-1 font-semibold text-ink">{entry.org}</p>

              {entry.description && <p className="mt-3 max-w-measure">{entry.description}</p>}

              {hasHighlights && (
                <ul className="mt-3 max-w-measure space-y-1">
                  {entry.highlights!.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-[9px] h-2 w-2 shrink-0 bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {hasTools && (
                <div className="mt-5">
                  <p className="ui-label mb-2 text-ink-muted">Principais ferramentas utilizadas</p>
                  <KeycapList items={entry.tools!} label={`Ferramentas usadas em ${entry.org}`} />
                </div>
              )}
            </Window>
          </li>
        )
      })}
    </ol>
  )
}
