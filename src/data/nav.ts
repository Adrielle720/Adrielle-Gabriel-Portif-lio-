export const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'formacao', label: 'Formação' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
] as const

export type SectionId = (typeof sections)[number]['id']
