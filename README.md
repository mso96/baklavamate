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

Deploy command: `npx wrangler deploy` (or `npm run deploy`). The committed Wrangler configuration runs the existing build and serves `dist/client` with SPA fallback. No automatic framework setup or Cloudflare Vite plugin is required. Do not change the Vite output to `dist`: the Sites packaging step also relies on `dist/client`.

Validate without publishing: `npm run deploy:check`.
