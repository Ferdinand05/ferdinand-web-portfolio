# Repository guidance

- Vue 3 + TypeScript app; Vite entry is `src/main.ts`, routes in `src/router/index.ts`, views in `src/views`, reusable UI in `src/components` (legacy singular `src/component` also exists).
- Runtime requires Node `^20.19.0 || >=22.12.0`; install with `npm ci`.
- `npm run lint` runs Oxlint and ESLint with `--fix`; it modifies files. Use `npx oxlint .` or `npx eslint . --cache` for non-fixing checks.
- `npm run type-check` runs `vue-tsc --build`; `npm run build-only` builds the Vite app; `npm run build` runs type-check and build in parallel.
- Tests use Vitest + jsdom. Run all with `npm run test:unit -- --run`; focused test: `npx vitest run src/__tests__/App.spec.ts`.
- `npm run format` formats only `src/` and writes changes.
- `npm run preview` builds then starts `wrangler dev`; `npm run deploy` builds then deploys via Wrangler. Wrangler serves static assets with SPA fallback; deploy requires Cloudflare credentials.
- Vite config includes Cloudflare plugin and exposes the dev server on the network (`host: true`); alias `@` maps to `src/`.
