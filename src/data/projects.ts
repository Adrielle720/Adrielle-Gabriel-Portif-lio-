import type { Project } from '../types'

// Estrutura da descrição: problema → o que construí → resultado.
// Quando tiver repositório ou demo públicos, preencha repoUrl / demoUrl.
export const projects: Project[] = [
  {
    id: 'pluvia',
    exe: 'pluvia.exe',
    title: 'Plúvia',
    category: 'dados',
    context: 'GAS Challenge · XP Inc.',
    description:
      'SaaS de risco climático por localização para empresas com ativos físicos. MVP com rating de A a D, 8 conectores de dados reais (INMET, ANA, INPE, CEMADEN, entre outros) e motor preditivo de 16 dias a 10 anos.',
    stack: ['React', 'TanStack', 'Lovable', 'APIs de dados climáticos'],
  },
  {
    id: 'argus-finance',
    exe: 'argus_finance.jar',
    title: 'Argus Finance API',
    category: 'dev',
    context: 'Projeto pessoal',
    description:
      'API REST de controle financeiro em arquitetura em camadas: autenticação JWT, contas a pagar e a receber, categorização automática de despesas, webhooks por evento e fechamento mensal agendado. Integração com a Belvo (Open Finance) mapeada para extratos bancários.',
    stack: ['Java 21', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'unas',
    exe: 'unas_financeiro.exe',
    title: 'Sistema Financeiro UNAS',
    category: 'dev',
    context: 'Equipe de 5 · ONG de São Paulo',
    description:
      'Plataforma de gestão financeira desenvolvida com Git Flow e code review. Fiquei com o front-end e corrigi um erro de Mixed Content em produção com um Cloudflare Tunnel sobre a AWS EC2.',
    stack: ['React 18', 'TypeScript', 'TanStack Router', 'Tailwind CSS', 'Cloudflare'],
  },
  {
    id: 'lead-scoring',
    exe: 'lead_scorer.py',
    title: 'Scoring de leads',
    category: 'dados',
    context: 'Barsi Investimentos · projeto de férias',
    description:
      'Qualificação de leads de investidores com fontes públicas (Receita Federal, CVM, TSE) e enriquecimento via BigDataCorp. Pontuação de 0 a 100 em faixas de FRIO a PREMIUM, que se realimenta a cada aceite ou recusa de oferta.',
    stack: ['Python', 'SQL', 'SQLite', 'BigDataCorp'],
  },
  {
    id: 'mcp-juridico',
    exe: 'mcp_juridico.py',
    title: 'MCP Jurídico',
    category: 'dados',
    context: 'Projeto pessoal de IA',
    description:
      'Servidor MCP que lê a API do Senado Federal e permite a um assistente de IA ler, resumir e guardar projetos de lei. Separa a geração dos resumos (cara, via LLM) da consulta (barata, via query direta).',
    stack: ['Python', 'MCP', 'API do Senado Federal'],
  },
  {
    id: 'cns',
    exe: 'cns_etl.py',
    title: 'Integração de dados CNS',
    category: 'dados',
    context: 'Confederação Nacional de Saúde',
    description:
      'Pipelines de ETL que unem bases públicas e privadas dispersas em um schema único, com modelagem relacional normalizada e dashboards em Power BI.',
    stack: ['Python', 'SQL', 'Power BI', 'Google Cloud'],
  },
  {
    id: 'qitech',
    exe: 'api_bancaria.py',
    title: 'API bancária',
    category: 'dev',
    context: 'Bootcamp QI Tech 2026',
    description:
      'API bancária completa em que defino a maior parte das regras de negócio, com as decisões de modelagem registradas em um documento de design (RFC).',
    stack: ['Python', 'FastAPI'],
  },
  {
    id: 'secretaria-whatsapp',
    exe: 'secretaria.n8n',
    title: 'Secretária de WhatsApp',
    category: 'dev',
    context: 'Automação com IA',
    description:
      'Agendamentos automáticos pelo WhatsApp, hospedados em VPS Ubuntu com Easypanel e Traefik. O fluxo de texto está quase pronto para produção; processamento de áudio é o próximo passo.',
    stack: ['n8n', 'Evolution API', 'Google Gemini', 'Docker', 'MongoDB'],
  },
  {
    id: 'sinaliza-edu',
    exe: 'sinaliza_edu.pbix',
    title: 'Sinaliza Edu',
    category: 'dados',
    context: 'Impacto social em educação',
    description:
      'Análise de dados educacionais de alunos surdos, com bases estruturadas em SQL e dashboards de impacto em Power BI.',
    stack: ['Python', 'SQL', 'Power BI'],
  },
  {
    id: 'apis-academicas',
    exe: 'reservas_api.jar',
    title: 'APIs acadêmicas em Spring Boot',
    category: 'dev',
    context: 'Insper · Projeto de Software',
    description:
      'API de reservas containerizada com Docker e API REST com relação muitos-para-muitos entre usuários e projetos, com DTOs, validação e coleção do Postman.',
    stack: ['Spring Boot', 'PostgreSQL', 'JPA', 'Docker', 'Postman'],
  },
  {
    id: 'dre-powerbi',
    exe: 'dre_protheus.pbix',
    title: 'Depuração de DRE em Power BI',
    category: 'dados',
    context: 'Dados contábeis · TOTVS Protheus',
    description:
      'Corrigi um dashboard de DRE com tabela de calendário desconectada, campo de classificação incorreto e inversão de sinal em um lote contábil, usando TREATAS no DAX.',
    stack: ['Power BI', 'DAX', 'TOTVS Protheus'],
  },
]
