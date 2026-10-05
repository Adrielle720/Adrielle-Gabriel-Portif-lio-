import type { Challenge, TimelineGroup } from '../types'

export const experienceGroups: TimelineGroup[] = [
  {
    id: 'profissional',
    label: 'Profissional e pesquisa',
    entries: [
      {
        id: 'libertas',
        exe: 'libertas.exe',
        title: 'Estágio em UX, UI e produto',
        org: 'Instituto Libertas',
        period: 'fev — mai 2026',
        description:
          'UX, UI, fluxo de produto digital e experiência do cliente, com front-end em React e back-end em Node/Express.',
        highlights: [
          'Melhorias de usabilidade no formulário de inscrição levaram a base de inscritos de 160 para 800 (5x).',
          'Participei do levantamento de requisitos e da priorização de funcionalidades, questionando o problema por trás de cada pedido antes de implementar.',
        ],
        tools: ['React', 'Node.js', 'Express'],
      },
      {
        id: 'nucleo-raciais',
        exe: 'pesquisa_dados.sql',
        title: 'Assistente de pesquisa em dados',
        org: 'Núcleo de Pesquisas Raciais · Insper',
        description:
          'Modelagem relacional em SQL, com normalização e views, para tratar e padronizar dados sobre desigualdade racial e trabalho em plataformas digitais.',
        tools: ['SQL'],
        variant: 'teal',
      },
    ],
  },
  {
    id: 'lideranca',
    label: 'Liderança e organizações estudantis',
    entries: [
      {
        id: 'raposas',
        exe: 'raposas_negras.exe',
        title: 'Diretora de Captação de Recursos',
        org: 'Liga Raposas Negras',
        period: 'desde fev 2026',
        description: 'Prospecção, negociação e relacionamento com parceiros institucionais.',
        highlights: [
          'Estruturei e fechei um patrocínio de 1 ano com o iFood, cobrindo todos os eventos do ciclo 25.2–26.1.',
          'Negociei parceria com um escritório de advocacia e organizei um evento de treinamento com a Ultra.',
        ],
      },
      {
        id: 'argus',
        exe: 'argus.exe',
        title: 'Cofundadora',
        org: 'Argus',
        description:
          'Agência digital e de automação para pequenos negócios: sites, gestão de redes sociais e integrações de WhatsApp e Telegram.',
        highlights: [
          'Defini a identidade visual da marca (paleta inspirada em pena de pavão, site em nove seções).',
          'Redigi o contrato de serviço de um projeto de e-commerce com a Marketing Insper (Vite e React, FastAPI, PostgreSQL no Neon, Render).',
          'Sistema de rastreamento legislativo com as APIs de dados abertos da Câmara dos Deputados e do Senado Federal.',
          'Pesquisa de pipelines de automação de afiliados e de mitigação de risco em automação de WhatsApp.',
        ],
        tools: ['n8n', 'Evolution API', 'Telegram Bot API', 'Lovable'],
        variant: 'teal',
      },
      {
        id: 'cursinho',
        exe: 'cursinho.exe',
        title: 'Prospecção e Relacionamento com Parceiros',
        org: 'Cursinho Insper',
        description:
          'Prospecção e relacionamento com parceiros e rotina de material institucional: newsletter, apresentações e convites de eventos.',
        highlights: ['Relatórios semanais, começando por um diagnóstico interno na primeira semana.'],
      },
      {
        id: 'green',
        exe: 'green_insper.exe',
        title: 'Diretora da vertente de ESG',
        org: 'Green Insper',
        description: 'Dirigi a vertente de ESG da liga, produzindo conteúdo e análises de ESG.',
      },
    ],
  },
]

export const challenges: Challenge[] = [
  {
    id: 'gas-xp',
    exe: 'gas_challenge.exe',
    name: 'GAS Challenge',
    org: 'XP Inc.',
    status: 'entregue',
    description:
      'Deu origem ao Plúvia (antigo XP Risk Monitor). Entreguei material de pitch, plano de negócios com análise competitiva e estudo de caso.',
  },
  {
    id: 'esg-visagio',
    exe: 'challenge_esg.exe',
    name: 'Challenge ESG',
    org: 'Visagio',
    status: 'entregue',
    description:
      'Diagnóstico de maturidade ESG de uma empresa real do varejo, com plano de ação e indicadores prioritários, apresentado aos stakeholders sob prazo de consultoria.',
  },
  {
    id: 'mulheres-gas',
    exe: 'conversas_em_dados.exe',
    name: 'Mulheres de Gás · Conversas em Dados',
    org: 'Comgás',
    status: 'andamento',
    description:
      'Trilha de experiência do usuário. A proposta do time usa IA para extrair dados estruturados de conversas informais de WhatsApp, em texto e áudio, para montar uma jornada rastreável sem mudar o comportamento de clientes, revendedoras e entregadores.',
  },
  {
    id: 'opportunity',
    exe: 'opportunity_2026.exe',
    name: 'Desafio Opportunity 2026',
    org: 'Opportunity Asset Management',
    status: 'em-breve',
    description:
      'Análise de investimento em uma empresa: relatório setorial e apresentação sobre investir ou não como sócio, cobrindo setor, modelo de negócios e governança, tese, riscos e valuation.',
  },
]
