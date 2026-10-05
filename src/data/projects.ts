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
  {
    slug: '2buku',
    semester: 2,
    semesterLabel: '2º Semestre',
    period: '2024/2',
    title: '2Buku.com',
    tagline: 'Plataforma de troca de livros usados entre leitores',
    type: 'Full Stack',
    team: 'Projeto em equipe',
    description: [
      'O 2Buku conecta leitores que querem trocar livros usados, incentivando a leitura, a sustentabilidade e a criação de uma comunidade. Quem se interessa por um título envia uma proposta de troca ao dono do livro.',
      'O dono recebe um e-mail, aceita ou recusa e, se houver acordo, os dois recebem os contatos para combinar a entrega por conta própria.',
    ],
    features: [
      'Cadastro, login e perfil de usuário com sessão',
      'Catálogo de livros com busca integrada à Google Books API',
      'Propostas de troca com aceite e recusa pelo dono do livro',
      'Notificações por e-mail com Nodemailer',
      'Cadastro de localidade pela API do IBGE',
      'Upload e armazenamento de imagens na Cloudinary',
    ],
    stack: [
      'Node.js',
      'Express',
      'Handlebars',
      'MySQL',
      'Bootstrap',
      'JavaScript',
      'Google Books API',
      'Nodemailer',
      'Cloudinary',
      'API do IBGE',
    ],
    links: [{ label: 'Código no GitHub', href: 'https://github.com/Celegattodev/2Buku.com', kind: 'code' }],
    screenshots: [
      { src: '/projects/2buku/01-home.png', caption: 'Página inicial e login' },
      { src: '/projects/2buku/06-cadastro.png', caption: 'Cadastro de usuário' },
      { src: '/projects/2buku/02-catalogo.png', caption: 'Catálogo com os livros mais populares' },
      { src: '/projects/2buku/03-perfil.png', caption: 'Perfil do usuário e "Meus livros"' },
      { src: '/projects/2buku/05-detalhes-do-livro.png', caption: 'Detalhes de um livro' },
      { src: '/projects/2buku/04-favoritos.png', caption: 'Livros favoritos' },
    ],
    screenshotsNote:
      'Capturas do projeto rodando localmente, com um banco de dados de teste e um usuário fictício. As capas e descrições dos livros vieram de dados de exemplo (Open Library) no lugar da Google Books API, que estava com a cota diária esgotada no momento da captura.',
    participation: [
      'Implementei o cadastro, o login e o gerenciamento de usuários (atualização de dados e exclusão de conta).',
      'Desenvolvi o CRUD de livros: cadastro, edição, detalhes do livro e catálogo, com as views em Handlebars.',
      'Criei o sistema de notificações por e-mail com Nodemailer.',
      'Participei da modelagem e criação do banco de dados MySQL e da integração do upload de imagens.',
    ],
    myTech: ['Node.js', 'Express', 'Handlebars', 'MySQL', 'Nodemailer', 'Bootstrap', 'JavaScript', 'Git e GitHub'],
    accent: '#fef3c7',
  },
  {
    slug: 'center-pet-web',
    semester: 3,
    semesterLabel: '3º Semestre',
    period: '2025/1',
    title: 'Center Pet (Web)',
    tagline: 'Plataforma de adoção responsável de animais',
    type: 'Full Stack',
    team: 'Projeto em equipe (6 integrantes)',
    description: [
      'O Center Pet conecta ONGs de proteção animal a pessoas que querem adotar. As ONGs cadastram e gerenciam os animais; os adotantes exploram o catálogo, conhecem cada pet e acompanham o processo de adoção.',
      'O projeto é dividido em uma aplicação web (React) e uma API própria (Node.js com MongoDB), desenvolvidas por toda a equipe.',
    ],
    features: [
      'Catálogo de pets com filtros e página de detalhes de cada animal',
      'Perfis de ONGs e de adotantes, com áreas e dashboards próprios',
      'Cadastro e edição de pets pela ONG',
      'Fluxo de adoção com formulário de "adotante seguro" e acompanhamento do andamento',
      'Notificações por e-mail durante a adoção',
      'Acessibilidade: ajuste de fonte, filtros para daltonismo e tema claro/escuro',
    ],
    stack: [
      'React',
      'Vite',
      'React Router',
      'Tailwind CSS',
      'Material UI',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Nodemailer',
    ],
    links: [
      { label: 'Código da aplicação web', href: 'https://github.com/Center-Pet/center-pet-web', kind: 'code' },
      { label: 'Código da API', href: 'https://github.com/Center-Pet/center-pet-api', kind: 'code' },
    ],
    screenshots: [
      { src: '/projects/center-pet-web/01-home.png', caption: 'Página inicial' },
      { src: '/projects/center-pet-web/02-catalogo.png', caption: 'Catálogo de pets' },
      { src: '/projects/center-pet-web/03-pet.png', caption: 'Página de detalhes de um pet' },
      { src: '/projects/center-pet-web/04-login.png', caption: 'Tela de login' },
      { src: '/projects/center-pet-web/05-cadastro-ong.png', caption: 'Cadastro de organização (ONG)' },
    ],
    screenshotsNote:
      'Capturas da aplicação em execução, consumindo a API publicada. Telas autenticadas (dashboard, adoção) não aparecem para não expor dados de usuários reais.',
    participation: [
      'No front-end, desenvolvi a página inicial e a página inicial da ONG.',
      'Implementei as validações de CPF, CNPJ e CEP nos formulários de cadastro.',
      'Atualizei a tela de login e criei o acompanhamento do andamento da adoção.',
      'Na API, criei as rotas de login e logout e o envio de e-mails da adoção com Nodemailer.',
    ],
    myTech: ['React', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'Git e GitHub'],
    accent: '#fce7f3',
  },
]

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)
