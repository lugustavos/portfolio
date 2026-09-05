/**
 * ─────────────────────────────────────────────────────────────
 *  DADOS PESSOAIS — edite este arquivo para personalizar o site.
 *  Campos marcados com  ⚠️ TODO  precisam da sua informação real.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Luís Gustavo',
  role: 'Desenvolvedor Full Stack',
  bio: 'Sou desenvolvedor e estou no último semestre de Desenvolvimento de Software Multiplataforma. Nesses anos passei por projetos bem diferentes entre si — uma plataforma sobre ansiedade, marketplaces de troca, um sistema de adoção de animais que depois virou app — todos feitos em equipe. O que mais gosto é participar de todas as etapas: entender o problema, pensar a solução junto com o time, escrever o código e ver aquilo indo pro ar.',
  location: 'São Paulo, Brasil',
  education: {
    course: 'Desenvolvimento de Software Multiplataforma (DSM)',
    institution: 'Fatec',
    period: '2024 — 2026 · último semestre',
  },
  links: {
    email: 'francaguto10@gmail.com',
    github: 'https://github.com/lugustavos',
    linkedin: 'https://www.linkedin.com/in/lugustavos/',
    resume: '',
  },
  // Foto: salve a imagem em /public/perfil.jpg. Se o arquivo não existir,
  // o site mostra as iniciais automaticamente.
  photo: '/perfil.jpg',
}

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'Frontend',
    items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    group: 'Mobile',
    items: ['React Native', 'Expo'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'APIs REST', 'Nodemailer'],
  },
  {
    group: 'Dados & Infra',
    items: ['MySQL', 'Firebase', 'Cloudinary', 'Git & GitHub', 'Vercel'],
  },
]
