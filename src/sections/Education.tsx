import { education } from '../data/education'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Timeline } from '../components/ui/Timeline'

export function Education() {
  return (
    <section id="formacao" aria-labelledby="formacao-title" className="bg-surface py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading id="formacao-title" path="C:\Adrielle\Formação" title="Formação acadêmica" />
        <div className="max-w-3xl">
          <Timeline entries={education} icon="cap" emptyText="Em breve." />
        </div>
      </div>
    </section>
  )
}
