# Meu portfólio

Portfólio que fiz para a disciplina de Laboratório de Desenvolvimento Multiplataforma, na FATEC Zona Leste (curso de Desenvolvimento de Software Multiplataforma). Aqui estão os projetos dos 5 primeiros semestres, os dados do curso, onde trabalho, cursos, certificados e idiomas.

- Site no ar: https://portfolio-tau-nine-zvpd1nb7em.vercel.app
- Meu GitHub: https://github.com/lugustavos

## O que tem no site

Na página principal:

- minha foto, nome completo e link do GitHub
- dados do curso (faculdade, curso, início e previsão de conclusão)
- onde eu trabalho
- cursos de extensão, certificações e idiomas
- um card pra cada projeto

Cada projeto abre numa página própria, com o nome, a descrição e as tecnologias, o link do código, os prints e o que eu fiz nele.

## Projetos

| Semestre | Projeto | O que é |
| --- | --- | --- |
| 1º | MindRest | site pra ajudar com ansiedade |
| 2º | 2Buku.com | troca de livros usados |
| 3º | Center Pet (Web) | adoção de animais |
| 4º | Swaply | troca de conhecimento com cursos e aulas |
| 5º | Center Pet (Mobile) | app de adoção em React Native |

## Como rodar na sua máquina

Precisa do Node.js 18 ou mais novo.

```bash
git clone https://github.com/lugustavos/portfolio.git
cd portfolio
npm install
npm run dev
```

Depois é só abrir o endereço que aparece no terminal (normalmente http://localhost:5173). Também dá pra baixar o ZIP pelo botão verde "Code" do GitHub.

Pra gerar a versão final: `npm run build`.

## Feito com

React, TypeScript, Vite, Tailwind CSS, React Router e React Icons. Hospedado na Vercel.

Os textos e dados do site ficam em `src/data/` (`profile.ts` e `projects.ts`). As imagens ficam em `public/`.
