# Rodrigo Santos

Personal site at [rodrigosantos.dev](https://rodrigosantos.dev). Research, experiments, and work.

## About

I'm an AI Engineer at [Snyk](https://snyk.io). Right now I'm spending my energy AI-ifying the platform. This repo is the source for that site.

The homepage is short: **About**, **Latest**, and **Connect**. Color scheme follows the system — light and dark.

## Stack

- [Next.js](https://nextjs.org) 16 and [React](https://react.dev) 19
- [StyleX](https://stylexjs.com) for styles
- [Geist](https://vercel.com/font) fonts
- TypeScript, [pnpm](https://pnpm.io) 12, [oxlint](https://oxc.rs/docs/guide/usage/linter) / [oxfmt](https://oxc.rs/docs/guide/usage/formatter)
- [Vercel Analytics](https://vercel.com/docs/analytics) and [Speed Insights](https://vercel.com/docs/speed-insights)

## Getting started

```bash
git clone https://github.com/rodrigosdev/rodrigosantos.dev.git
cd rodrigosantos.dev
pnpm install
pnpm dev
```

This repo pins `pnpm@12.4.2` via `packageManager` in `package.json`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Lint with oxlint |
| `pnpm format` | Format with oxfmt |
| `pnpm typecheck` | Type-check with `tsc --noEmit` |

## Layout

- `app/` — App Router, metadata, sitemap, robots
- `components/` — page sections and UI
- `lib/` — Open Graph and icon helpers
- `styles/` — shared StyleX utilities
