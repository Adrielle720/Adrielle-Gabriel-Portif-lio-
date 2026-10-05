import type { TimelineEntry } from '../types'

// Para adicionar outra formação, copie o objeto e ajuste. A ordem do array é a ordem na tela.
export const education: TimelineEntry[] = [
  {
    id: 'insper-cc',
    exe: 'insper.edu',
    title: 'Bacharelado em Ciência da Computação',
    org: 'Insper',
    location: 'São Paulo, SP',
    period: 'fev 2025 — dez 2028 (previsto)',
    description: 'Bolsista integral, aprovada na primeira tentativa. Atualmente no 4º semestre.',
    highlights: ['Estudos em andamento em Inteligência Artificial e Robótica.'],
  },
  {
    id: 'insper-fintech',
    exe: 'fintech.edu',
    title: 'Formação complementar em Fintech',
    org: 'Insper Fintech',
    description: 'Mercado financeiro, Open Finance, meios de pagamento e regulação.',
    variant: 'teal',
  },
]
