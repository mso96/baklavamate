# Baklava Mate

London-based baklava storefront. React + Vite, with locally stored imagery and an asset-serving worker.

## Local development

`npm ci`

`npm run dev -- --host 127.0.0.1 --port 4173`

`npm run build`

`node --test tests/*.test.mjs`

## Catalogue and behaviour

Five baklava varieties in 1 kg and 2 kg. Walnut is £28 / £56; other varieties are £30 / £60. Merch: single nazar keyring (£5.99). T-shirt temporarily withdrawn.

Basket items persist locally, including food weights and shirt sizes. Legacy 500 g lines are removed with a notice. Event forms prepare a mailto draft and copyable summary; the visitor sends the email themselves to love@baklavamate.com. No message is sent by the site.

Newsletter integration on Cloudflare and Stripe checkout are pending. No signup, payment or server-side personal data collection is active. Product-specific ingredient and allergen declarations still need verification. General allergen and privacy information is available on dedicated pages. Product imagery is generated.

## Packaging

The build emits `dist/client`, `dist/server/index.js` and `dist/.openai/hosting.json`. Existing worker routing supports SPA page refreshes. Only current app assets are versioned; old clone evidence and unused reference images are excluded.

## Cloudflare Workers Builds

Deploy command: `npx wrangler deploy` (or `npm run deploy`). The committed Wrangler configuration runs the existing build and serves `dist/client` with pre-rendered pages and a proper 404 page. No automatic framework setup or Cloudflare Vite plugin is required. Do not change the Vite output to `dist`: the Sites packaging step also relies on `dist/client`.

Validate without publishing: `npm run deploy:check`.

## SEO and agent discovery

Build prerenders 13 public routes into readable HTML with unique titles/descriptions, canonical links, social metadata, Product and Breadcrumb JSON-LD. Products do not claim stock, reviews or checkout offers while availability/payment integration is pending. `sitemap.xml`, `robots.txt`, `llms.txt` and `404.html` are generated from the same catalogue. Unknown routes use Cloudflare’s `404-page` handling.

Canonical origin defaults to `https://baklavamate.com`; set `VITE_SITE_URL` at build time if the production origin differs. Preview the complete generated site with `npm run preview`; discovery files are build outputs rather than files served by the Vite development server.

The homepage and story page explain confirmed sourcing and preparation: ingredients from Türkiye, Turkish baklava masters and fresh baking.
