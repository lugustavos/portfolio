/**
 * Dados pessoais do portfólio.
 * Fonte: currículo do aluno + requisitos da disciplina de Laboratório de
 * Desenvolvimento Multiplataforma (FATEC).
 */

export const profile = {
  fullName: 'Luís Gustavo Gomes Gonçalves',
  firstName: 'Luís Gustavo',
  role: 'Desenvolvedor Full Stack',
  headline: 'Assistente de TI no NOC · Cloud, Redes e Desenvolvimento',
  bio: 'Sou desenvolvedor e estou no último semestre de Desenvolvimento de Software Multiplataforma. Nesses anos passei por projetos bem diferentes entre si — uma plataforma sobre ansiedade, marketplaces de troca, um sistema de adoção de animais que depois virou app — todos feitos em equipe. Hoje trabalho no NOC da Binário.Net, onde também desenvolvo a plataforma interna de monitoramento usada pela operação. O que mais gosto é participar de todas as etapas: entender o problema, pensar a solução junto com o time, escrever o código e ver aquilo indo pro ar.',
  location: 'São Paulo, SP',
  photo: '/perfil.jpg',
  links: {
    github: 'https://github.com/lugustavos',
    linkedin: 'https://www.linkedin.com/in/lugustavos/',
    email: 'lugustavosocial@gmail.com',
  },
}

/** Curso que está cursando (requisito 5). */
export const course = {
  institution: 'FATEC Zona Leste',
  institutionFull: 'Faculdade de Tecnologia da Zona Leste',
  name: 'Tecnólogo em Desenvolvimento de Software Multiplataforma (DSM)',
  start: '2024 · 1º semestre',
  end: 'Dezembro de 2026 (previsão)',
  status: 'Cursando o 6º e último semestre',
}

/** Formação anterior, para contexto. */
export const previousEducation = {
  institution: 'ETEC Zona Leste',
  name: 'Técnico em Desenvolvimento de Sistemas',
  period: '2022 — jun/2023',
}

export type Role = { title: string; start: string; end?: string }

export type Job = {
  company: string
  location: string
  start: string
  end?: string
  roles: Role[]
  summary: string
  activities: string[]
  results: string[]
}

/** Trabalhos realizados (requisito 6). `end` ausente = trabalho atual. */
export const jobs: Job[] = [
  {
    company: 'Binário.Net (Grupo Binário)',
    location: 'São Paulo, SP',
    start: 'fev/2025',
    roles: [
      { title: 'Assistente de TI — NOC', start: 'out/2025' },
      { title: 'Estagiário de Redes', start: 'fev/2025', end: 'out/2025' },
    ],
    summary:
      'Atuo no NOC (Network Operations Center), monitorando a infraestrutura de rede de cerca de 3.000 escolas públicas atendidas pelo projeto Escolas Conectadas (FUST/MEC), em todas as regiões do Brasil.',
    activities: [
      'Monitoramento da infraestrutura de rede das escolas e atendimento imediato a incidentes, com triagem e classificação por criticidade.',
      'Desenvolvimento e manutenção da plataforma interna de monitoramento do NOC (back-end em Python, front-end em React), integrada a múltiplas APIs e usada diariamente pela equipe.',
      'Gestão de incidentes via ITSM (OTRS), com diagnóstico de causa raiz, troubleshooting remoto e documentação com evidências no ticket.',
      'Criação de regras de firewall e aplicação de VLANs em gateways e access points pelo console em nuvem UniFi Cloud Manager.',
      'Criação de runbooks, documentação de processos operacionais e treinamento de 4 novos integrantes do time.',
    ],
    results: [
      'A plataforma desenvolvida virou ferramenta diária de 9 pessoas do NOC.',
      'Tempo de detecção de falhas reduzido de horas para minutos, com alertas proativos no lugar de verificações manuais.',
      'Caso crítico de perda de pacotes resolvido (51,8% → 0%), restabelecendo a disponibilidade de uma escola.',
    ],
  },
]

export type ExtensionCourse = {
  name: string
  institution: string
  place?: string
  hours?: number
  period: string
}

/** Cursos de extensão (requisito 7). */
export const extensionCourses: ExtensionCourse[] = [
  {
    name: 'Fundamentos de RF e Wi-Fi',
    institution: 'NIC.br',
    place: 'Presencial',
    hours: 18,
    period: 'fev/2026',
  },
  {
    name: 'Junos IJOS e Intermediate Routing (JIR)',
    institution: 'Juniper Networks',
    place: 'Online',
    hours: 32,
    period: 'nov/2025',
  },
  {
    name: 'Segurança da Informação e LGPD',
    institution: 'Fundação Bradesco',
    place: 'Online',
    hours: 12,
    period: '2024',
  },
]

export type Certification = {
  code: string
  name: string
  issuer: string
  date: string
  image?: string
  inProgress?: boolean
}

export const certifications: Certification[] = [
  {
    code: 'SC-900',
    name: 'Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    date: 'ago/2026',
    image: '/certs/sc-900.png',
  },
  {
    code: 'AZ-900',
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'abr/2026',
    image: '/certs/az-900.png',
  },
  {
    code: 'GCP',
    name: 'Google Cloud Computing Foundations',
    issuer: 'Google Cloud Skills Boost',
    date: 'mai/2026',
    image: '/certs/gcp.png',
  },
  {
    code: 'NSE 3',
    name: 'Fortinet Certified Associate — FortiGate 7.6 Operator',
    issuer: 'Fortinet',
    date: 'abr/2026',
    image: '/certs/nse3.png',
  },
  {
    code: 'UWS',
    name: 'UniFi Wireless Specialist',
    issuer: 'Ubiquiti',
    date: 'fev/2026',
    image: '/certs/uws.png',
  },
  {
    code: 'AZ-104',
    name: 'Azure Administrator Associate',
    issuer: 'Microsoft',
    date: 'em andamento',
    image: '/certs/az-104.png',
    inProgress: true,
  },
]

export type Language = { name: string; level: string; detail: string; percent: number }

/** Línguas e nível (requisito 8). */
export const languages: Language[] = [
  { name: 'Português', level: 'Nativo', detail: 'Língua materna', percent: 100 },
  { name: 'Inglês', level: 'Intermediário (B1)', detail: 'Leitura de documentação técnica', percent: 55 },
]

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Desenvolvimento',
    items: ['React', 'React Native', 'JavaScript', 'Python', 'Node.js', 'HTML5 e CSS3', 'Tailwind CSS'],
  },
  {
    group: 'Dados e APIs',
    items: ['MySQL', 'MongoDB', 'APIs REST', 'Integração de APIs'],
  },
  {
    group: 'Cloud e Infra',
    items: ['Microsoft Azure', 'Entra ID', 'Google Cloud', 'Docker', 'Nginx', 'Linux'],
  },
  {
    group: 'Redes e Segurança',
    items: ['TCP/IP e VLANs', 'FortiGate', 'Firewall', 'Zero Trust', 'LGPD'],
  },
]
