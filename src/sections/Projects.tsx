import { useState } from 'react'
import { projects } from '../data/projects'
import { CATEGORY_LABEL, type Project, type ProjectCategory } from '../types'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Window } from '../components/ui/Window'
import { KeycapList } from '../components/ui/KeycapTag'
import { PixelIcon } from '../components/ui/PixelIcon'

type Filter = 'todos' | ProjectCategory

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'dev', label: CATEGORY_LABEL.dev },
  { id: 'dados', label: CATEGORY_LABEL.dados },
]

function ProjectCard({ project }: { project: Project }) {
  const headingId = `proj-${project.id}`
  const isData = project.category === 'dados'
  return (
    <Window
      as="article"
      title={project.exe}
      variant={isData ? 'teal' : 'blue'}
      labelledBy={headingId}
      className="h-full"
      contentClassName="flex flex-col"
    >
      <div className="shot mb-4 grid h-32 place-items-center">
        {project.image ? (
          <img src={project.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <PixelIcon name={isData ? 'chart' : 'terminal'} size={56} />
        )}
      </div>

      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="ui-label inline-flex items-center gap-1.5 text-ink-muted">
          <span aria-hidden="true" className={`h-2.5 w-2.5 ${isData ? 'bg-grass-deep' : 'bg-primary'}`} />
          {CATEGORY_LABEL[project.category]}
        </span>
        {project.isNew && <span className="badge-new">NOVO</span>}
      </div>

      <h3 id={headingId} className="h3">
        {project.title}
      </h3>
      {project.context && <p className="mb-2 text-sm font-semibold text-ink-muted">{project.context}</p>}
      <p className="mb-4 mt-2">{project.description}</p>

      <div className="mb-5">
        <KeycapList items={project.stack.slice(0, 5)} label={`Stack de ${project.title}`} />
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-2">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            Ver código
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-link">
            Ver demo →
          </a>
        )}
      </div>
      <p className="mt-4 border-t border-border pt-3 text-sm">
        Quer algo assim?{' '}
        <a href="#contato" className="text-link">
          Fale comigo
        </a>
      </p>
    </Window>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('todos')
  const visible = filter === 'todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projetos" aria-labelledby="projetos-title" className="bg-surface py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading id="projetos-title" path="C:\Adrielle\Projetos" title="Projetos" />

        <div role="group" aria-label="Filtrar projetos por categoria" className="mb-8 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className="chip"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          {visible.length} projeto(s) exibido(s)
        </p>

        {visible.length > 0 ? (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : (
          <Window title="projetos — 0 objeto(s)" className="max-w-xl">
            <p>Nenhum projeto nesta categoria ainda. Volte em breve!</p>
          </Window>
        )}
      </div>
    </section>
  )
}
