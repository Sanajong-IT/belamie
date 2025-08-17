<p align="right">
  <a href="https://www.belamie.catering" target="_blank">
    <img src="https://img.shields.io/badge/site-www.belamie.catering-blue" alt="Site"/>
  </a>
  <a href="https://github.com/<org-or-user>/belamie/actions" target="_blank">
    <img src="https://github.com/<org-or-user>/belamie/workflows/CI/badge.svg" alt="CI Status"/>
  </a>
  <a href="https://github.com/<org-or-user>/belamie/actions" target="_blank">
    <img src="https://img.shields.io/badge/deploy-Cloudflare%20Pages-brightgreen" alt="Deploy"/>
  </a>
</p>

# Bel-Amie — Restaurant & Catering (Next.js)

Snelle, moderne website voor **Bel‑Amie** in Paramaribo. Inclusief TailwindCSS, **SEO**, **Vitest** unit tests, **CI** en automatische deploy naar **Cloudflare Pages** (project: `belamie`).

## 🚀 Quickstart
```bash
npm install
npm run dev
```

## 🧰 Scripts
- `npm run dev` — start dev server
- `npm run build` — productie build
- `npm run start` — start productie
- `npm run lint` — lint (Next.js/ESLint)
- `npm test` — Vitest unit tests
- `npm run postbuild` — genereert sitemap/robots via `next-sitemap`

## 🌐 SEO
- `<Head>` met title/description, Open Graph & Twitter, `theme-color`, canonical: **https://www.belamie.catering**
- `next-sitemap` voor `/sitemap.xml` en `robots.txt`
- PWA-manifest + icons + og-image

## ☁️ Cloudflare Pages (SSR)
- Workflow: `.github/workflows/deploy.yml` (push naar `main` ⇒ build + **next-on-pages** + deploy via **Wrangler**)
- Repo‑secrets in *Settings → Secrets and variables → Actions*:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
- Stel custom domain in: **www.belamie.catering** in Cloudflare

## ✅ PR Checks
- CI workflow draait lint, tests en build op elke Pull Request

---
Made for hungry humans. 🍽️
