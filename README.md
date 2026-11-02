# Yohanan. DEV — Portfólio

Portfólio pessoal para apresentar projetos, experimentos e trabalhos em desenvolvimento.

## Stack

- React 19
- TypeScript
- Vite
- Ionicons
- CSS com variáveis centralizadas em `src/styles/variables.css`

## Requisitos

- Node.js 22.12 ou superior
- npm

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run typecheck
npm run lint
npm run check
npm run build
npm run preview
```

## Estrutura

- `src/components`: componentes reutilizáveis de interface.
- `src/pages/Home`: conteúdo e estilos da página inicial.
- `src/styles/variables.css`: tokens de cor, tipografia, espaçamento, bordas e efeitos.
- `src/styles/globals.css`: estilos globais e acessibilidade.
- `src/styles/layout.css`: estrutura geral da aplicação.

## Personalização visual

Altere os tokens em `src/styles/variables.css` para ajustar a identidade visual. Os componentes e as páginas devem consumir esses tokens em vez de definir cores de marca diretamente.
