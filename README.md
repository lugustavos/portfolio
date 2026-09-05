# Portfólio — Luís Gustavo

Portfólio pessoal em React + Vite + Tailwind CSS, com foco em apresentar os projetos
desenvolvidos ao longo da graduação.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build      # gera /dist
npm run preview    # serve o build localmente
```

## Como personalizar

Todo o conteúdo editável fica em `src/data/`:

| Arquivo | O que contém |
| --- | --- |
| `src/data/profile.ts` | Nome, título, bio, localização, formação, links (e-mail, GitHub, LinkedIn, currículo) e a lista de skills. |
| `src/data/projects.ts` | Um objeto por projeto/semestre: título, descrição, destaques, stack, papel e links. |

Campos marcados com `⚠️ TODO` no código precisam da sua informação real.

### Foto e currículo

- Coloque sua foto em `public/perfil.jpg` e aponte `profile.photo` para `/perfil.jpg`.
- Coloque o currículo em `public/curriculo.pdf` e aponte `profile.links.resume` para `/curriculo.pdf`.

## Deploy

O projeto já vem com `vercel.json`. Basta importar o repositório na Vercel — o framework
Vite é detectado automaticamente (`npm run build` → saída `dist`).

## Estrutura

```
src/
  data/           # conteúdo editável (perfil + projetos)
  components/      # seções da página
    ui/Reveal.tsx  # wrapper de animação on-scroll
  App.tsx
  main.tsx
  index.css        # tema (cores, fontes) via Tailwind
```
