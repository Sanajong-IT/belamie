<p align="right">
  <a href="https://www.belamie.catering" target="_blank"><img src="https://img.shields.io/badge/site-www.belamie.catering-blue" alt="Site"></a>
  <a href="https://github.com/<org-or-user>/belamie/actions" target="_blank"><img src="https://github.com/<org-or-user>/belamie/workflows/CI/badge.svg" alt="CI"></a>
  <a href="#" target="_blank"><img src="https://img.shields.io/badge/deploy-Cloudflare%20Pages-brightgreen" alt="Deploy"></a>
  <a href="#" target="_blank"><img src="https://img.shields.io/badge/E2E-Playwright-informational" alt="Playwright"></a>
  <a href="#" target="_blank"><img src="https://img.shields.io/badge/Perf-Lighthouse%20CI-orange" alt="Lighthouse CI"></a>
</p>

# Bel-Amie — Restaurant & Catering (Next.js)

Productieklare setup met **Vitest** (unit), **Playwright** (e2e), **Lighthouse CI** (performance/SEO), **Cloudflare Pages** deploys & **Preview** op elke PR.

## Quickstart
```bash
npm install
npm run dev
```

## Pipelines
- **CI (PR)**: lint → unit tests (Vitest) → build
- **E2E (PR)**: bouw, start Next, draai Playwright tests
- **Preview (PR)**: Cloudflare Pages Preview deployment op branch
- **Lighthouse (PR)**: start site lokaal, run LHCI, upload rapport
- **Deploy (main)**: Next on Pages + Wrangler → Cloudflare Pages

## Secrets
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Scripts
- `npm test` — unit tests
- `npm run e2e` — Playwright e2e
- `npm run lhci:ci` — Lighthouse CI
