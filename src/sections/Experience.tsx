import { challenges, experienceGroups } from '../data/experience'
import { CHALLENGE_STATUS_LABEL, type ChallengeStatus } from '../types'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Timeline } from '../components/ui/Timeline'
import { Window } from '../components/ui/Window'

const STATUS_DOT: Record<ChallengeStatus, string> = {
  entregue: 'bg-grass-deep',
  andamento: 'bg-primary',
  'em-breve': 'bg-accent',
}

export function Experience() {
  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading id="experiencia-title" path="C:\Adrielle\Experiência" title="Experiência" />

        <div className="space-y-14">
          {experienceGroups.map((group) => (
            <div key={group.id} className="max-w-3xl">
              <h3 className="h2 mb-6">{group.label}</h3>
              <Timeline
                entries={group.entries}
                icon={group.id === 'profissional' ? 'briefcase' : 'user'}
                emptyText="Em breve."
              />
            </div>
          ))}

          {challenges.length > 0 && (
            <div>
              <h3 className="h2 mb-6">Challenges e competições</h3>
              <ul className="grid gap-6 sm:grid-cols-2">
                {challenges.map((c) => {
                  const headingId = `ch-${c.id}`
                  return (
                    <li key={c.id}>
                      <Window as="article" title={c.exe} labelledBy={headingId} className="h-full">
                        <p className="ui-label mb-2 inline-flex items-center gap-1.5 text-ink-muted">
                          <span aria-hidden="true" className={`h-2.5 w-2.5 ${STATUS_DOT[c.status]}`} />
                          {CHALLENGE_STATUS_LABEL[c.status]}
                        </p>
                        <h4 id={headingId} className="h3">
                          {c.name}
                        </h4>
                        <p className="mb-3 font-semibold">{c.org}</p>
                        <p>{c.description}</p>
                      </Window>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
