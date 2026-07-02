# Angelo Tarazona — FullStack Developer Portfolio

React 19 · TypeScript 6 · MUI v9 · Framer Motion · Cloudflare Pages

## Setup

```bash
cp .env.example .env    # then fill in your values
npm install
npm run dev             # http://localhost:60888
```

## Build

```bash
npm run build           # tsc -b && vite build → dist/
npm run preview         # preview production build
```

## Deployment (Cloudflare Pages)

1. Connect this repo to Cloudflare Pages
2. Build command: `npm run build`, output: `dist`
3. Set environment variables in CF Pages dashboard:

| Variable | Description |
|---|---|
| `VITE_SITE_TITLE` | Page title + OG title |
| `VITE_SITE_DESCRIPTION` | Meta description + OG description |
| `VITE_AUTHOR` | Author meta tag |
| `VITE_KEYWORDS` | SEO keywords |
| `VITE_SITE_URL` | Canonical URL (OG) |
| `VITE_OG_IMAGE` | Social card image URL |
| `VITE_PROJECTS_API` | `/api/projects` |
| `GITHUB_TOKEN` | GitHub PAT for pinned repos GraphQL |
| `RESEND_API_KEY` | Resend API key for contact form |
| `CONTACT_EMAIL` | Email for contact form submissions |

## Features

- **Bilingual** (EN/ES) with browser language detection
- **Dark/light theme** toggle
- **Projects carousel** — fetches pinned GitHub repos via GraphQL
- **Contact form** — sends emails via Resend API
- **Smooth scroll** navigation
- **SEO meta tags** injected at build time
