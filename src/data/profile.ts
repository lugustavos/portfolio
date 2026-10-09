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
  bio: 'Estou no último semestre de Desenvolvimento de Software Multiplataforma na FATEC. Trabalho no NOC da Binário.Net, onde também desenvolvo a plataforma interna de monitoramento que a equipe usa todo dia. Na faculdade fiz projetos bem diferentes, de um site sobre ansiedade até um app de adoção de animais, todos em grupo. O que mais gosto é acompanhar tudo: entender o problema, escrever o código e ver funcionando no ar.',
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
  period: '2022 a jun/2023',
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
      { title: 'Assistente de TI (NOC)', start: 'out/2025' },
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
