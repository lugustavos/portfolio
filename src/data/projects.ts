export type Project = {
  slug: string
  semester: number
  semesterLabel: string
  title: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  role: string
  type: 'Web' | 'Mobile' | 'Full Stack'
  team: string
  links: { label: string; href: string }[]
  accent: string
}

export const projects: Project[] = [
  {
    slug: 'mindrest',
    semester: 1,
    semesterLabel: '1º Semestre',
    title: 'MindRest',
    tagline: 'Plataforma web para gestão de ansiedade',
    description:
      'Primeiro projeto da graduação: um espaço digital acessível com estratégias práticas para o dia a dia de quem convive com ansiedade. O foco foi criar uma experiência acolhedora e simples, com conteúdo organizado e navegação leve.',
    highlights: [
      'Interface construída do zero com HTML, CSS e JavaScript puro',
      'Conteúdo dividido em páginas temáticas de técnicas e exercícios',
      'Design centrado no usuário, priorizando clareza e acessibilidade',
      'Deploy contínuo na Vercel',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel'],
    role: 'Desenvolvimento front-end, em equipe',
    type: 'Web',
    team: 'Projeto em equipe',
    links: [
      { label: 'Repositório', href: 'https://github.com/lugustavos/MindRest' },
      { label: 'Site ao vivo', href: 'https://mind-rest.vercel.app' },
    ],
    accent: '#22d3ee',
  },
  {
    slug: '2buku',
    semester: 2,
    semesterLabel: '2º Semestre',
    title: '2Buku.com',
    tagline: 'Marketplace de troca de livros usados',
    description:
      'Plataforma que conecta leitores para troca de livros usados, incentivando a leitura, a sustentabilidade e a criação de comunidade. Os usuários navegam pelo catálogo, enviam propostas de troca e, ao aceite, recebem os contatos por e-mail para combinar a entrega.',
    highlights: [
      'Catálogo com busca integrada à Google Books API',
      'Fluxo de propostas de troca com aceite/recusa pelo dono do livro',
      'Notificações por e-mail via Nodemailer',
      'Cadastro com preenchimento de localidade pela API do IBGE',
      'Upload e armazenamento de imagens na Cloudinary',
      'Arquitetura MVC com Node.js e banco MySQL',
    ],
    stack: ['Node.js', 'JavaScript', 'Bootstrap', 'MySQL', 'HTML5', 'CSS3', 'Google Books API', 'Nodemailer', 'Cloudinary'],
    role: 'Desenvolvimento full stack, em equipe',
    type: 'Full Stack',
    team: 'Projeto em equipe',
    links: [{ label: 'Repositório', href: 'https://github.com/Celegattodev/2Buku.com' }],
    accent: '#f59e0b',
  },
  {
    slug: 'center-pet-web',
    semester: 3,
    semesterLabel: '3º Semestre',
    title: 'Center Pet — Web',
    tagline: 'Plataforma de adoção responsável de animais',
    description:
      'Aplicação web que conecta ONGs de proteção animal a potenciais adotantes. Reúne o catálogo de pets disponíveis, perfis das ONGs, cadastro de animais e um processo de adoção guiado, com formulário de triagem para adoção responsável.',
    highlights: [
      'Catálogo de pets com filtros e página de detalhes por animal',
      'Perfis de ONGs e de adotantes com áreas dedicadas',
      'Cadastro e edição de pets pela ONG (dashboard próprio)',
      'Fluxo de adoção com formulário de "adotante seguro"',
      'Recursos de acessibilidade: controle de fonte, filtros para daltonismo e tema',
      'SPA em React + Vite com autenticação e rotas protegidas',
    ],
    stack: ['React', 'Vite', 'JavaScript', 'CSS3', 'API REST'],
    role: 'Desenvolvimento front-end, em equipe',
    type: 'Web',
    team: 'Projeto em equipe (organização Center-Pet)',
    links: [{ label: 'Repositório', href: 'https://github.com/Center-Pet/center-pet-web' }],
    accent: '#7c5cff',
  },
  {
    slug: 'swaply',
    semester: 4,
    semesterLabel: '4º Semestre',
    title: 'Swaply',
    tagline: 'Plataforma de troca de livros entre leitores',
    description:
      'Aplicação web para troca de livros usados entre leitores, seguindo a mesma lógica do Center Pet, mas voltada para livros: catálogo, cadastro de itens, propostas de troca e conexão entre os usuários. Projeto full stack desenvolvido em equipe e publicado na Vercel.',
    highlights: [
      'Catálogo de livros com cadastro e edição pelos próprios usuários',
      'Fluxo de propostas de troca com aceite e recusa',
      'Autenticação e áreas de perfil dos usuários',
      'Front-end em React consumindo uma API REST própria',
      'Deploy contínuo na Vercel',
    ],
    stack: ['React', 'JavaScript', 'Node.js', 'API REST', 'Vercel'],
    role: 'Desenvolvimento full stack, em equipe',
    type: 'Full Stack',
    team: 'Projeto em equipe',
    links: [{ label: 'Site ao vivo', href: 'https://swaply-web.vercel.app/' }],
    accent: '#34d399',
  },
  {
    slug: 'center-pet-mobile',
    semester: 5,
    semesterLabel: '5º Semestre',
    title: 'Center Pet — Mobile',
    tagline: 'App mobile de adoção em React Native',
    description:
      'Evolução do Center Pet para dispositivos móveis: migração da plataforma web para um aplicativo React Native com Expo, levando a experiência de adoção para iOS e Android com transição gradual de telas.',
    highlights: [
      'App multiplataforma (iOS e Android) com Expo',
      'Contexto de autenticação e persistência local de dados',
      'Camada de serviços HTTP consumindo a API do Center Pet',
      'Estrutura organizada em navegação, telas, serviços e contextos',
      'Migração incremental a partir do código web legado',
    ],
    stack: ['React Native', 'Expo', 'JavaScript', 'Tailwind CSS', 'API REST'],
    role: 'Desenvolvimento mobile, em equipe',
    type: 'Mobile',
    team: 'Projeto em equipe (organização Center-Pet)',
    links: [{ label: 'Repositório', href: 'https://github.com/Center-Pet/center-pet-mobile' }],
    accent: '#ec4899',
  },
]
