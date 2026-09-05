# Portfólio — Luís Gustavo

Portfólio pessoal desenvolvido em **React + Vite + Tailwind CSS**, reunindo os
projetos feitos ao longo da graduação em Desenvolvimento de Software
Multiplataforma (DSM).

🔗 **Ao vivo:** https://portfolio-tau-nine-zvpd1nb7em.vercel.app

## Tecnologias

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (animações)
- Deploy na Vercel

## Rodando localmente

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build      # gera /dist
npm run preview    # serve o build localmente
```

## Estrutura

```
src/
  data/
    profile.ts       # dados pessoais, formação, links e skills
    projects.ts      # um objeto por projeto (título, descrição, stack, links)
  components/         # seções da página (Hero, Projects, Timeline, About…)
    ui/Reveal.tsx     # wrapper de animação on-scroll
  App.tsx
  main.tsx
  index.css           # tema (cores e fontes) via Tailwind
public/
  perfil.jpg          # foto usada na seção "Sobre"
```

Todo o conteúdo do site fica em `src/data/` — editar esses dois arquivos é
suficiente para atualizar textos, projetos e links.

## Projetos apresentados

| Semestre | Projeto | Descrição |
| --- | --- | --- |
| 1º | MindRest | Plataforma web sobre gestão de ansiedade |
| 2º | 2Buku.com | Marketplace de troca de livros usados |
| 3º | Center Pet — Web | Plataforma de adoção responsável de animais |
| 4º | Swaply | Plataforma full stack de troca de livros |
| 5º | Center Pet — Mobile | App de adoção em React Native |
