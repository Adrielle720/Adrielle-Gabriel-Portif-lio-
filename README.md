# Portfólio · Adrielle Gabriel Santana

Site em página única (Vite + React + TypeScript + Tailwind CSS) com a estética do design system **Portfolio Desktop**: pele de Windows 95/XP, esqueleto web moderno.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

## Onde editar o conteúdo

Todo o conteúdo fica em `src/data/`. Não é preciso mexer nos componentes.

| Arquivo | O que tem |
|---|---|
| `profile.ts` | nome, título, frase, e-mail, LinkedIn, GitHub |
| `about.ts` | parágrafos da seção Sobre |
| `skills.ts` | habilidades por categoria; `main: true` destaca como stack principal (★) |
| `education.ts` | timeline de formação |
| `experience.ts` | grupos da timeline de experiência e challenges; `tools` vira "Principais ferramentas utilizadas" |
| `projects.ts` | cards de projeto; `category: 'dev' \| 'dados'` alimenta o filtro |

- **Imagem de projeto:** coloque em `public/projetos/` e use `image: '/projetos/arquivo.png'`.
- **Formulário:** sem configuração, abre o app de e-mail (mailto). Para enviar direto, crie um formulário no Formspree, copie `.env.example` para `.env` e preencha `VITE_FORMSPREE_ID`.

## Publicação

A cada push na `main`, o workflow `.github/workflows/deploy.yml` gera o build e publica no GitHub Pages.
Na primeira vez, ative em **Settings → Pages → Source: GitHub Actions**.
Para o formulário enviar direto (sem mailto), crie a variável `VITE_FORMSPREE_ID` em **Settings → Secrets and variables → Actions → Variables**.

## Tokens

`src/styles/tokens.css` traz as cores, sombras e espaçamentos do design system (claro e escuro). As fontes são carregadas no `index.html`.
