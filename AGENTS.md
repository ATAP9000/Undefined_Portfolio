# AGENTS.md — Undefined Portfolio

## Repo structure

- **Root** — active React 19 + TypeScript 6 + Vite 8 portfolio app (MUI v9, Framer Motion)
- **`functions/api/`** — Cloudflare Pages Functions (GraphQL proxy for pinned repos + Resend email)
- **`Portfolio-master/`** — legacy Next.js 13 + Chakra UI version. **Archive; do not modify.**
- **`src/`** — portfolio content migrated from `Portfolio-master/`. Sections: NavBar, Hero, PersonalSkills, TechStack, Projects, AboutMe, ContactMe.

## Commands

| Action | Command |
|---|---|
| Dev server | `npm run dev` |
| Build (typecheck + bundle) | `npm run build` |
| Lint | `npm run lint` |
| Preview production build | `npm run preview` |

- Dev server runs on **port 60888** (configured in `vite.config.ts`).
- Build runs `tsc -b` then `vite build`. Fix type errors before building.
- No test framework is configured.

## TypeScript quirks

- `tsc -b` with project references (`tsconfig.app.json` + `tsconfig.node.json`).
- `verbatimModuleSyntax: true` — use `import type` for type-only imports.
- `erasableSyntaxOnly: true` — no enums, no namespaces, no `parameter properties`.
- `noUnusedLocals` / `noUnusedParameters` — both enabled; clean them up or the build fails.
- `allowArbitraryExtensions: true` — importing `.css` etc. works without declaration files.
- **TypeScript 6.0** — verify compatibility before adding any TS plugin or transformer.

## ESLint

- Flat config (`eslint.config.js`) with `typescript-eslint`, `react-hooks`, `react-refresh`.
- Ignores `dist/`. Run `npm run lint` (no args needed).

## MUI v9 (installed)

- **All CSS system props must go in `sx`** — `display`, `flex`, `bgcolor`, `fontWeight`, `alignItems`, `justifyContent`, `mt`/`mb`/`my`/`mx`/`px`/`py`/`pt`/`pb`, `gap`, `lineHeight`, `letterSpacing`, `borderRadius`, `boxShadow`, `position`, `top`, `left`, `cursor`, `textAlign`, `maxWidth`, `visibility` etc. are NOT valid as direct component props. Use only `sx={{ ... }}`.
- MUI-specific props that still work as direct props: `variant`, `color` (text color), `spacing` (Stack), `direction` (Stack), `gutterBottom` (Typography).
- Icons: Mix of `@mui/icons-material` and `react-icons/si`/`di`/`tb`.

## Visual Studio integration

- `.esproj` + `.slnx` files indicate a Visual Studio JavaScript project.
- `launch.json` includes Edge and Chrome debug configs pointing at `http://localhost:60888`.
- `.vs/` directory is ignored by Vite's file watcher (`vite.config.ts`).

## i18n

- Custom `LocaleContext` (`src/context/LocaleContext.tsx`) with `useLocale()` hook.
- Locales: `src/locales/en.ts`, `es.ts` with shared `IProps` interface.
- Components read translations via `const { lang } = useLocale()`.

## Contact form

- Functional form in `src/components/Contact/` with local state hook (`useContactForm`).
- Email sent via Cloudflare Pages Function (`functions/api/send.js`) using Resend API.
- The function requires `RESEND_API_KEY` and `CONTACT_EMAIL` env vars set in Cloudflare Pages dashboard.
- Client falls back to `VITE_API_URL` env var or `/api/send` in production.
- No global loading context — `isLoading` is local to the hook.

## Projects carousel

- Fetches pinned repos via Cloudflare Pages Function (`functions/api/projects.js`) using GitHub GraphQL API.
- Requires `GITHUB_TOKEN` env var in Cloudflare Pages dashboard.
- Falls back to GitHub REST API (`/users/ATAP9000/repos`) if the GraphQL function isn't available.
- Auto-rotating carousel with Framer Motion, pauses on hover, dot indicators.

## Cloudflare Pages deployment

- Deploy the entire repo with build command `npm run build`, output directory `dist`.
- Required env vars (set in Cloudflare Pages → Settings → Environment variables):
  - `GITHUB_TOKEN` — GitHub personal access token (for pinned repos)
  - `RESEND_API_KEY` — Resend API key (for contact form emails)
  - `CONTACT_EMAIL` — Destination email for contact form submissions
  - `VITE_PROJECTS_API` = `/api/projects`

## Dead code (do not recreate)

- `ToolsSection.tsx`, `AboutLilMe` locale key, `Certificates` nav link, `AppContext` reducer, `IEmailService` interface, duplicate `CenterHeader`.

## Legacy code (`Portfolio-master/`)

- Next.js 13.1.6, React 18, Chakra UI — **archived**. Do not treat as source of truth.
- If you need to port a section that's missing in `src/`, read the files there for reference, then implement fresh in the Vite app.
