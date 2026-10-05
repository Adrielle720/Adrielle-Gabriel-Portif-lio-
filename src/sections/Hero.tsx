import { profile } from '../data/profile'
import { PixelIcon, type PixelIconName } from '../components/ui/PixelIcon'
import { Window } from '../components/ui/Window'

const shortcuts: { href: string; label: string; icon: PixelIconName }[] = [
  { href: '#sobre', label: 'Sobre', icon: 'user' },
  { href: '#formacao', label: 'Formação', icon: 'cap' },
  { href: '#experiencia', label: 'Experiência', icon: 'briefcase' },
  { href: '#projetos', label: 'Projetos', icon: 'folder' },
  { href: '#contato', label: 'Contato', icon: 'mail' },
]

function Clouds() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-16 h-40 w-full"
      viewBox="0 0 1440 160"
      preserveAspectRatio="xMidYMid slice"
      shapeRendering="crispEdges"
    >
      <g fill="var(--cloud)">
        <rect x="120" y="40" width="160" height="16" />
        <rect x="96" y="56" width="224" height="16" />
        <rect x="140" y="24" width="72" height="16" />
        <rect x="980" y="88" width="192" height="16" />
        <rect x="1012" y="72" width="96" height="16" />
        <rect x="948" y="104" width="256" height="16" />
        <rect x="620" y="16" width="112" height="12" />
        <rect x="600" y="28" width="160" height="12" />
      </g>
    </svg>
  )
}

function Hill() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[18vh] min-h-[110px] w-full"
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
    >
      <path d="M0 120 C 360 20, 760 30, 1440 110 L1440 200 L0 200 Z" fill="var(--grass-light)" />
      <path d="M0 150 C 420 70, 900 80, 1440 140 L1440 200 L0 200 Z" fill="var(--grass)" />
    </svg>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="sky relative flex min-h-[100svh] flex-col overflow-hidden pt-[72px]"
    >
      <Clouds />

      <div className="container-page relative z-10 grid flex-1 items-center gap-10 pb-40 pt-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12 lg:pb-48">
        <div className="flex flex-col items-start gap-5">
          <span className="badge-pill">{profile.role}</span>

          <h1 id="hero-title" className="display-hero text-on-sky">
            {profile.name}
          </h1>

          <div className="flex flex-wrap gap-3">
            <span className="badge-chrome">
              <PixelIcon name="pin" size={16} />
              {profile.location}
            </span>
          </div>

          <p className="text-on-sky max-w-[34ch] text-lg font-semibold leading-8 sm:text-xl">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#contato" className="btn btn-primary">
              Vamos conversar ▸
            </a>
            <a href="#projetos" className="btn btn-secondary">
              Ver projetos ▸
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <nav aria-label="Atalhos de seção" className="hidden flex-wrap gap-1 lg:flex">
            {shortcuts.map((s) => (
              <a key={s.href} href={s.href} className="desktop-icon">
                <PixelIcon name={s.icon} size={48} />
                <span>{s.label}</span>
              </a>
            ))}
          </nav>

          <Window title="terminal — whoami" className="w-full" contentClassName="!p-0">
            <pre className="term">
              <span className="term-prompt">adrielle@insper:~$</span> whoami{'\n'}
              {profile.name}{'\n'}
              ciência de dados · full stack{'\n'}
              <span className="term-prompt">adrielle@insper:~$</span> cat formacao.txt{'\n'}
              <span className="term-key">Ciência da Computação</span> · Insper{'\n'}
              4º semestre · formatura prevista: <span className="text-[var(--terminal-orange)]">dez/2028</span>{'\n'}
              <span className="term-prompt">adrielle@insper:~$</span> ls frentes/{'\n'}
              <span className="term-key">full-stack/  dados-ia/  argus/</span>{'\n'}
              <span className="term-prompt">adrielle@insper:~$</span> ./contato --abrir
              <span className="term-cursor" aria-hidden="true">
                {' '}
              </span>
            </pre>
          </Window>
        </div>
      </div>

      <Hill />

      <a
        href="#sobre"
        className="badge-chrome absolute bottom-6 left-1/2 z-10 -translate-x-1/2 no-underline hover:bg-chrome-light"
      >
        <span aria-hidden="true" className="inline-block animate-[nudge_1.2s_ease-in-out_infinite]">
          ▼
        </span>
        Rolar para baixo
      </a>
    </section>
  )
}
