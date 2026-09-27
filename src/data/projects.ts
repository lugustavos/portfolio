export type ProjectLink = { label: string; href: string; kind: 'code' | 'site' }
export type Screenshot = { src: string; caption: string }

export type Project = {
  slug: string
  semester: number
  semesterLabel: string
  period: string
  title: string
  tagline: string
  type: 'Web' | 'Mobile' | 'Full Stack'
  team: string
  /** Descrição do projeto (ii) */
  description: string[]
  features: string[]
  /** Tecnologias do projeto como um todo (ii) */
  stack: string[]
  /** Links para o código e para o projeto publicado (iii) */
  links: ProjectLink[]
  /** Aviso exibido junto aos links (ex.: quando o código não está publicado) */
  codeNote?: string
  /** Screenshots do projeto em funcionamento (iv) */
  screenshots: Screenshot[]
  /** Observação exibida sob o título das screenshots (ex.: como foram capturadas) */
  screenshotsNote?: string
  /** O que eu fiz no projeto (v) */
  participation: string[]
  /** Tecnologias que eu utilizei (v) */
  myTech: string[]
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'mindrest',
    semester: 1,
    semesterLabel: '1º Semestre',
    period: '2024/1',
    title: 'MindRest',
    tagline: 'Plataforma web para ajudar no dia a dia com a ansiedade',
    type: 'Web',
    team: 'Projeto em equipe (3 integrantes)',
    description: [
      'O MindRest é um refúgio online para quem convive com a ansiedade: reúne músicas relaxantes, exercícios de respiração guiada e conteúdo informativo em um só lugar, com uma interface calma e simples de usar.',
      'Foi o primeiro projeto da graduação e o primeiro site completo que publicamos, com deploy contínuo na Vercel.',
    ],
    features: [
      'Página inicial com carrossel e apresentação da proposta da plataforma',
      'Página de música com players de playlists voltadas ao alívio de ansiedade e estresse',
      'Exercício de respiração guiada com contador interativo',
      'Links para conteúdos e serviços de apoio (como o CVV)',
      'Layout responsivo para celular e desktop',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Vercel'],
    links: [
      { label: 'Código no GitHub', href: 'https://github.com/lugustavos/MindRest', kind: 'code' },
      { label: 'Site publicado', href: 'https://mind-rest.vercel.app', kind: 'site' },
    ],
    screenshots: [
      { src: '/projects/mindrest/01-home.png', caption: 'Página inicial' },
      { src: '/projects/mindrest/03-musica.png', caption: 'Página de música' },
      { src: '/projects/mindrest/02-respiracao.png', caption: 'Exercício de respiração' },
      { src: '/projects/mindrest/04-home-mobile.png', caption: 'Versão responsiva (celular)' },
    ],
    participation: [
      'Desenvolvi a página inicial e a seção "Sobre nós".',
      'Construí a barra de navegação e a página de música.',
      'Trabalhei na responsividade do site para telas menores.',
      'Implementei o formulário e a troca de idioma da interface.',
    ],
    myTech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git e GitHub'],
    accent: '#dbeafe',
  },
]

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)
