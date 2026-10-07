# Portfólio — Luís Gustavo Gomes Gonçalves

Portfólio individual desenvolvido para a disciplina de **Laboratório de Desenvolvimento
Multiplataforma** (FATEC Zona Leste · Tecnólogo em Desenvolvimento de Software
Multiplataforma), reunindo os projetos dos **5 primeiros semestres** do curso.

| | |
| --- | --- |
| 🌐 **Site publicado** | https://portfolio-tau-nine-zvpd1nb7em.vercel.app |
| 💻 **Código-fonte** | https://github.com/lugustavos/portfolio |
| 🐙 **GitHub do aluno** | https://github.com/lugustavos |

> Para avaliar, basta abrir o **site publicado** — não é preciso instalar nada.
> As instruções de execução local estão mais abaixo.

## ✅ Onde encontrar cada requisito

### Página mestra (`/`)

| # | Requisito | Onde está no site |
| --- | --- | --- |
| 1 | Identidade visual própria | Marca pessoal "LG" (gradiente violeta → ciano), paleta escura e tipografia Inter + JetBrains Mono, aplicadas em todo o site |
| 2 | Foto do aluno | Topo da página |
| 3 | Nome completo | Topo da página |
| 4 | Link para o GitHub | Topo da página, menu e rodapé |
| 5 | Dados do curso | Seção **Curso em andamento** — faculdade, curso, semestre de início e previsão de conclusão |
| 6 | Trabalhos realizados | Seção **Experiência profissional** — empresa, datas, cargos e descrição das atividades |
| 7 | Cursos de extensão | Seção **Cursos de extensão e certificações** |
| 8 | Línguas e nível | Seção **Idiomas** |
| 9a | Card de cada projeto | Seção **Projetos por semestre** — um card por projeto, que abre a tela do projeto |
| 10 | Hospedagem | Vercel (link acima) |

### Tela de cada projeto (`/projetos/<nome>`)

| # | Requisito | Seção da tela |
| --- | --- | --- |
| i | Nome do projeto | Título da página |
| ii | Descrição e tecnologias | **Sobre o projeto** |
| iii | Link para o código | **Código e acesso** |
| iv | Screenshots em funcionamento | **Screenshots** (clique para ampliar) |
| v | Minha participação e tecnologias que usei | **Minha participação** |

## 📚 Projetos apresentados

| Semestre | Projeto | Tela |
| --- | --- | --- |
| 1º (2024/1) | MindRest — plataforma web sobre ansiedade | `/projetos/mindrest` |
| 2º (2024/2) | 2Buku.com — troca de livros usados | `/projetos/2buku` |
| 3º (2025/1) | Center Pet Web — adoção responsável de animais | `/projetos/center-pet-web` |
| 4º (2025/2) | Swaply — troca de conhecimento com cursos e aulas | `/projetos/swaply` |
| 5º (2026/1) | Center Pet Mobile — app de adoção em React Native | `/projetos/center-pet-mobile` |

## 🛠️ Tecnologias do portfólio

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router · Vercel

## 💻 Como baixar e rodar localmente

**Pré-requisito:** [Node.js](https://nodejs.org) 18 ou superior (`node -v` para conferir).

**1. Baixar o projeto** — escolha uma das opções:

- **ZIP (sem Git):** em https://github.com/lugustavos/portfolio clique em **Code → Download ZIP**,
  extraia a pasta e abra um terminal dentro dela.
- **Git:**
  ```bash
  git clone https://github.com/lugustavos/portfolio.git
  cd portfolio
  ```

**2. Instalar e iniciar**

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

**3. Gerar a versão de produção (opcional)**

```bash
npm run build     # gera a pasta /dist
npm run preview   # serve o build localmente
```

## 📁 Estrutura

```
src/
├── data/
│   ├── profile.ts        # dados pessoais, curso, experiência, cursos, idiomas
│   └── projects.ts       # dados de cada projeto (descrição, links, screenshots, participação)
├── pages/
│   ├── Home.tsx          # página mestra
│   └── ProjectPage.tsx   # tela de apresentação de cada projeto
├── components/           # seções da página mestra e elementos de interface
└── index.css             # tema (cores e fontes)
public/
├── perfil.jpg            # foto
├── certs/                # selos das certificações
└── projects/<projeto>/   # screenshots de cada projeto
```

Todo o conteúdo do site fica centralizado em `src/data/`.
