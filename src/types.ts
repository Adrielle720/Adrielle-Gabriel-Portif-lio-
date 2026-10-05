export type ProjectCategory = 'dev' | 'dados'

export const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  dev: 'Desenvolvimento',
  dados: 'Dados & IA',
}

export interface Project {
  id: string
  /** Nome do "programa" na barra de título, ex.: pipeline_leads.exe */
  exe: string
  title: string
  category: ProjectCategory
  /** Linha curta de contexto: cliente, equipe, desafio… */
  context?: string
  description: string
  /** Só as 5 primeiras aparecem no card — ordene da mais relevante para a menos. */
  stack: string[]
  repoUrl?: string
  demoUrl?: string
  /** Caminho em /public, ex.: /projetos/meu-projeto.png */
  image?: string
  isNew?: boolean
}

export interface TimelineEntry {
  id: string
  exe: string
  title: string
  org: string
  period?: string
  location?: string
  description?: string
  highlights?: string[]
  /** "Principais ferramentas utilizadas" */
  tools?: string[]
  /** Barra teal (Dados & IA) em vez da azul */
  variant?: 'blue' | 'teal'
}

export interface TimelineGroup {
  id: string
  label: string
  entries: TimelineEntry[]
}

export type ChallengeStatus = 'entregue' | 'andamento' | 'em-breve'

export const CHALLENGE_STATUS_LABEL: Record<ChallengeStatus, string> = {
  entregue: 'Entregue',
  andamento: 'Em andamento',
  'em-breve': 'Em breve',
}

export interface Challenge {
  id: string
  exe: string
  name: string
  org: string
  status: ChallengeStatus
  description: string
}

export interface Skill {
  name: string
  /** Stack principal: aparece destacada em amarelo com ★ */
  main?: boolean
}

export interface SkillGroup {
  id: string
  label: string
  exe: string
  variant?: 'blue' | 'teal'
  skills: Skill[]
}
