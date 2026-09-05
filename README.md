# Portfólio Pessoal — Luís Gustavo

Site de portfólio desenvolvido como atividade do último semestre do curso de
**Desenvolvimento de Software Multiplataforma (DSM)**.

O site reúne, em uma única página, os projetos que desenvolvi ao longo da
graduação — um por semestre — com descrição, tecnologias utilizadas, meu papel
em cada um e os links para o repositório ou para a versão publicada.

## 🔗 Acesso rápido

| | |
| --- | --- |
| **Site publicado (Vercel)** | https://portfolio-tau-nine-zvpd1nb7em.vercel.app |
| **Repositório (GitHub)** | https://github.com/lugustavos/portfolio |

> Para avaliar, basta abrir o link do site publicado — não é necessário instalar
> nada. As instruções abaixo servem apenas para quem quiser rodar o projeto
> localmente.

## 📄 O que o site apresenta

- **Apresentação** — nome, área de atuação e um resumo pessoal.
- **Projetos por semestre** — cada cartão abre uma janela com os detalhes:

  | Semestre | Projeto | Descrição |
  | --- | --- | --- |
  | 1º | MindRest | Plataforma web sobre gestão de ansiedade |
  | 2º | 2Buku.com | Marketplace de troca de livros usados |
  | 3º | Center Pet — Web | Plataforma de adoção responsável de animais |
  | 4º | Swaply | Plataforma full stack de troca de livros |
  | 5º | Center Pet — Mobile | Aplicativo de adoção em React Native |

- **Trajetória** — linha do tempo com a evolução ao longo dos semestres.
- **Sobre** — formação e um pouco mais de contexto.
- **Skills** — tecnologias organizadas por área.
- **Contato** — e-mail, GitHub e LinkedIn.

## 🛠️ Tecnologias utilizadas

- **React 18** + **TypeScript**
- **Vite** (bundler e servidor de desenvolvimento)
- **Tailwind CSS** (estilização)
- **Framer Motion** (animações)
- **Vercel** (hospedagem)

## 💻 Como baixar e rodar localmente

### Pré-requisito

- **Node.js 18 ou superior** — https://nodejs.org (verifique com `node -v`)

### Opção 1 — Baixar o ZIP (sem Git)

1. Acesse https://github.com/lugustavos/portfolio
2. Clique no botão verde **`Code`** → **`Download ZIP`**
3. Extraia a pasta e abra um terminal dentro dela

### Opção 2 — Clonar com Git

```bash
git clone https://github.com/lugustavos/portfolio.git
cd portfolio
```

### Instalar as dependências e iniciar

```bash
npm install
npm run dev
```

O terminal vai mostrar um endereço (normalmente `http://localhost:5173`).
Abra esse endereço no navegador.

### Gerar a versão de produção (opcional)

```bash
npm run build     # gera a pasta /dist com os arquivos finais
npm run preview   # abre a versão de produção localmente
```

## 📁 Estrutura do projeto

```
portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── public/
│   ├── favicon.svg
│   └── perfil.jpg              # foto usada na seção "Sobre"
└── src/
    ├── main.tsx                # ponto de entrada
    ├── App.tsx                 # monta as seções da página
    ├── index.css               # tema (cores e fontes)
    ├── data/
    │   ├── profile.ts          # dados pessoais, formação, links e skills
    │   └── projects.ts         # informações de cada projeto
    └── components/             # seções: Hero, Projects, Timeline, About, Skills, Contact
        └── ui/Reveal.tsx       # animação de entrada ao rolar a página
```

Todo o conteúdo textual do site (dados pessoais e projetos) fica centralizado em
`src/data/` — os componentes apenas exibem essas informações.

## 👤 Autor

**Luís Gustavo**
DSM — Desenvolvimento de Software Multiplataforma
GitHub: [@lugustavos](https://github.com/lugustavos) · LinkedIn: [lugustavos](https://www.linkedin.com/in/lugustavos/)
