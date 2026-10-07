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
    accent: '#22d3ee',
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
    screenshots: [],
    participation: [
      'Implementei o cadastro, o login e o gerenciamento de usuários (atualização de dados e exclusão de conta).',
      'Desenvolvi o CRUD de livros: cadastro, edição, detalhes do livro e catálogo, com as views em Handlebars.',
      'Criei o sistema de notificações por e-mail com Nodemailer.',
      'Participei da modelagem e criação do banco de dados MySQL e da integração do upload de imagens.',
    ],
    myTech: ['Node.js', 'Express', 'Handlebars', 'MySQL', 'Nodemailer', 'Bootstrap', 'JavaScript', 'Git e GitHub'],
    accent: '#f59e0b',
  },
  {
    slug: 'center-pet-web',
    semester: 3,
    semesterLabel: '3º Semestre',
    period: '2025/1',
    title: 'Center Pet — Web',
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
      { label: 'Código — aplicação web', href: 'https://github.com/Center-Pet/center-pet-web', kind: 'code' },
      { label: 'Código — API', href: 'https://github.com/Center-Pet/center-pet-api', kind: 'code' },
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
    accent: '#7c5cff',
  },
  {
    slug: 'swaply',
    semester: 4,
    semesterLabel: '4º Semestre',
    period: '2025/2',
    title: 'Swaply',
    tagline: 'Plataforma de troca de conhecimento com cursos e aulas',
    type: 'Full Stack',
    team: 'Projeto em equipe',
    description: [
      'O Swaply é uma plataforma em que as pessoas ensinam e aprendem umas com as outras. A ideia central é "ensinar é aprender duas vezes": cada hora de aula ministrada rende 1 crédito, que pode ser usado para fazer outros cursos.',
      'Instrutores criam cursos e abrem horários na agenda; estudantes se matriculam em um curso completo ou em aulas avulsas, agendam, assistem e avaliam. O front-end é uma aplicação React publicada na Vercel, que consome uma API REST própria.',
    ],
    features: [
      'Catálogo de cursos com busca, destaques e os mais populares',
      'Criação de cursos e gestão de disponibilidade de horários pelo instrutor',
      'Matrícula em curso completo ou em aula avulsa, com sistema de créditos',
      'Agenda e calendário de aulas agendadas',
      'Favoritos, notificações, avaliações de cursos e da plataforma',
      'Acessibilidade: VLibras e modos para daltonismo',
    ],
    stack: ['React', 'Vite', 'JavaScript', 'API REST', 'Vercel', 'Render'],
    links: [{ label: 'Site publicado', href: 'https://swaply-web.vercel.app/', kind: 'site' }],
    codeNote: 'O repositório do código-fonte deste projeto não está disponível publicamente.',
    screenshots: [
      { src: '/projects/swaply/01-catalogo.png', caption: 'Catálogo de cursos (página inicial)' },
      { src: '/projects/swaply/02-login.png', caption: 'Tela de login' },
      { src: '/projects/swaply/03-cadastro.png', caption: 'Tela de cadastro' },
    ],
    participation: [
      'Atuei como desenvolvedor full stack, em equipe, com foco nas ferramentas de login e de autenticação de usuários.',
      'Trabalhei no front-end da aplicação, desenvolvido em React.',
    ],
    myTech: ['React', 'JavaScript', 'API REST', 'Autenticação de usuários', 'Git e GitHub'],
    accent: '#34d399',
  },
  {
    slug: 'center-pet-mobile',
    semester: 5,
    semesterLabel: '5º Semestre',
    period: '2026/1',
    title: 'Center Pet — Mobile',
    tagline: 'Aplicativo de adoção de animais para iOS e Android',
    type: 'Mobile',
    team: 'Projeto em equipe',
    description: [
      'Evolução do Center Pet para dispositivos móveis: a plataforma web foi migrada para um aplicativo React Native com Expo, levando a experiência de adoção para iOS e Android.',
      'A migração foi feita de forma gradual, reaproveitando o código web como referência enquanto as telas eram reescritas para mobile e consumindo a mesma API do projeto.',
    ],
    features: [
      'Aplicativo multiplataforma (iOS e Android) com Expo',
      'Navegação por pilha com React Navigation',
      'Contexto de autenticação e persistência local com AsyncStorage',
      'Camada de serviços HTTP consumindo a API do Center Pet',
      'Seleção de imagens da galeria, compartilhamento e exportação de arquivos',
      'Estilização com NativeWind (Tailwind para React Native)',
    ],
    stack: ['React Native', 'Expo', 'React Navigation', 'NativeWind', 'AsyncStorage', 'API REST'],
    links: [{ label: 'Código no GitHub', href: 'https://github.com/Center-Pet/center-pet-mobile', kind: 'code' }],
    screenshots: [
      { src: '/projects/center-pet-mobile/01-home.png', caption: 'Início' },
      { src: '/projects/center-pet-mobile/02-catalogo.png', caption: 'Catálogo de pets' },
      { src: '/projects/center-pet-mobile/03-pet.png', caption: 'Detalhes do pet' },
      { src: '/projects/center-pet-mobile/04-login.png', caption: 'Login' },
    ],
    screenshotsNote:
      'Capturas do aplicativo em execução via Expo Web, em tela de celular (390×844), consumindo a API publicada.',
    participation: [
      'Integrei a equipe que migrou o Center Pet para o aplicativo mobile, atuando nas ferramentas de login e de autenticação.',
      'Trabalhei no front-end do aplicativo, em React Native.',
      'O código foi consolidado pela equipe em um único commit, por isso meu nome não aparece no histórico do repositório.',
    ],
    myTech: ['React Native', 'Expo', 'JavaScript', 'Autenticação de usuários', 'Git e GitHub'],
    accent: '#ec4899',
  },
]

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)
