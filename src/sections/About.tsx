import { bio, languages } from '../data/about'
import { skillGroups } from '../data/skills'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Window } from '../components/ui/Window'

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading id="sobre-title" path="C:\Adrielle\Sobre" title="Sobre" />

        <Window
          title="sobre_mim.txt"
          menu
          as="article"
          className="mb-10"
          status={[`${bio.length} parágrafos`, 'Idiomas: ' + languages.map((l) => l.name).join(', ')]}
          contentClassName="space-y-4"
        >
          {bio.map((paragraph) => (
            <p key={paragraph} className="max-w-measure text-base leading-[26px] sm:text-lg sm:leading-8">
              {paragraph}
            </p>
          ))}
          <dl className="flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-4 text-sm">
            {languages.map((lang) => (
              <div key={lang.name} className="flex gap-2">
                <dt className="font-semibold">{lang.name}</dt>
                <dd className="text-ink-muted">{lang.detail}</dd>
              </div>
            ))}
          </dl>
        </Window>

        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h3 className="h2">Habilidades</h3>
          <p className="flex items-center gap-2 text-sm text-ink-muted">
            <span className="key key-main">★ Python</span>= stack principal
            <span className="key ml-3">SQLite</span>= uso em projetos
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const headingId = `skills-${group.id}`
            return (
              <Window
                key={group.id}
                as="article"
                title={group.exe}
                variant={group.variant}
                labelledBy={headingId}
              >
                <h4 id={headingId} className="h3 mb-4">
                  {group.label}
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      {skill.main ? (
                        <span className="key key-main">
                          <span aria-hidden="true">★</span>
                          {skill.name}
                          <span className="sr-only">(stack principal)</span>
                        </span>
                      ) : (
                        <span className="key">{skill.name}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </Window>
            )
          })}
        </div>
      </div>
    </section>
  )
}
