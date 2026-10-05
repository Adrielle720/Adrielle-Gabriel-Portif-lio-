import { useRef, useState, type FormEvent } from 'react'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Window } from '../components/ui/Window'
import { MessageDialog } from '../components/ui/MessageDialog'

const SUBJECTS = ['Estágio', 'Projeto freelance', 'Pesquisa ou parceria', 'Outro']

type FieldName = 'name' | 'email' | 'message'
type Values = Record<FieldName, string> & { subject: string }
type Errors = Partial<Record<FieldName, string>>

const EMPTY: Values = { name: '', email: '', subject: SUBJECTS[0], message: '' }

function validate(values: Values): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = '⚠ Conte como posso te chamar.'
  if (!values.email.trim()) errors.email = '⚠ Informe seu e-mail para eu poder responder.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = '⚠ Confira o e-mail. Ex.: maria@empresa.com'
  if (!values.message.trim()) errors.message = '⚠ Escreva uma mensagem — pode ser curtinha.'
  return errors
}

export function Contact() {
  const [values, setValues] = useState<Values>(EMPTY)
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [dialog, setDialog] = useState<null | 'sent' | 'mailto'>(null)
  const [copied, setCopied] = useState(false)
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement | null>>>({})

  const errors = validate(values)
  const visibleError = (field: FieldName) => (touched[field] ? errors[field] : undefined)

  const update = (field: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [field]: e.target.value }))
  const blur = (field: FieldName) => () => setTouched((t) => ({ ...t, [field]: true }))

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    const firstInvalid = (['name', 'email', 'message'] as FieldName[]).find((f) => errors[f])
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus()
      return
    }

    if (!profile.formspreeId) {
      const body = `${values.message}\n\n— ${values.name} (${values.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[Portfólio] ${values.subject}`,
      )}&body=${encodeURIComponent(body)}`
      setDialog('mailto')
      return
    }

    setSending(true)
    setSendError(false)
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(String(res.status))
      setValues(EMPTY)
      setTouched({})
      setDialog('sent')
    } catch {
      setSendError(true)
    } finally {
      setSending(false)
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const fieldProps = (field: FieldName) => ({
    id: `f-${field}`,
    className: 'inp',
    value: values[field],
    onChange: update(field),
    onBlur: blur(field),
    'aria-invalid': visibleError(field) ? true : undefined,
    'aria-describedby': visibleError(field) ? `f-${field}-err` : undefined,
    ref: (el: HTMLInputElement | HTMLTextAreaElement | null) => {
      fieldRefs.current[field] = el
    },
  })

  const errorText = (field: FieldName) =>
    visibleError(field) && (
      <span id={`f-${field}-err`} className="help-error">
        {visibleError(field)}
      </span>
    )

  return (
    <section id="contato" aria-labelledby="contato-title" className="py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading id="contato-title" path="C:\Adrielle\Contato" title="Contato" />

        <Window title="nova_mensagem.exe" as="div" contentClassName="grid gap-8 md:grid-cols-[1fr_240px]">
          <form noValidate onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
            <h3 className="h2">Vamos conversar?</h3>
            <p className="text-ink-muted">
              Estágio, projeto ou uma ideia com dados e IA — me conta.
            </p>

            <div className="grid w-full gap-4 sm:grid-cols-2">
              <div className="field">
                <label htmlFor="f-name">
                  Nome <span className="text-danger" aria-hidden="true">*</span>
                </label>
                <input {...fieldProps('name')} autoComplete="name" placeholder="Seu nome" required />
                {errorText('name')}
              </div>
              <div className="field">
                <label htmlFor="f-email">
                  E-mail <span className="text-danger" aria-hidden="true">*</span>
                </label>
                <input
                  {...fieldProps('email')}
                  type="email"
                  autoComplete="email"
                  placeholder="voce@empresa.com"
                  required
                />
                {errorText('email')}
              </div>
            </div>

            <div className="field w-full">
              <label htmlFor="f-subject">Assunto</label>
              <select id="f-subject" className="inp" value={values.subject} onChange={update('subject')}>
                {SUBJECTS.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="field w-full">
              <label htmlFor="f-message">
                Mensagem <span className="text-danger" aria-hidden="true">*</span>
              </label>
              <textarea
                {...fieldProps('message')}
                placeholder="Conte um pouco sobre a vaga ou o projeto"
                required
              />
              {errorText('message')}
            </div>

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Enviando…' : 'Enviar mensagem ▸'}
            </button>

            {sendError && (
              <p role="alert" className="help-error">
                ⚠ Não consegui enviar agora. Seu texto continua aqui — tente de novo ou use o botão
                “Copiar e-mail” ao lado.
              </p>
            )}
          </form>

          <aside
            aria-label="Outros canais"
            className="flex flex-col gap-2.5 border-t border-border pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0"
          >
            <p className="ui-label mb-1 text-ink-muted">Prefere outro canal?</p>
            <p className="break-all font-semibold">{profile.email}</p>
            <button type="button" className="btn btn-secondary justify-start" onClick={copyEmail}>
              ✉ {copied ? 'E-mail copiado!' : 'Copiar e-mail'}
            </button>
            <span className="sr-only" aria-live="polite">
              {copied ? 'E-mail copiado para a área de transferência' : ''}
            </span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary justify-start">
              in LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary justify-start">
              ⌥ GitHub
            </a>
          </aside>
        </Window>
      </div>

      <MessageDialog
        open={dialog !== null}
        title={dialog === 'sent' ? 'Mensagem enviada' : 'Quase lá'}
        onClose={() => setDialog(null)}
      >
        {dialog === 'sent' ? (
          <>Obrigada pelo contato! Vou responder no e-mail que você informou.</>
        ) : (
          <>
            Abri seu aplicativo de e-mail com a mensagem pronta — é só clicar em enviar. Se nada
            abriu, use o botão <b>Copiar e-mail</b>.
          </>
        )}
      </MessageDialog>
    </section>
  )
}
