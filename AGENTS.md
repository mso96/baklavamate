# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Baklava Mate direction (2026-10-19)
- Brand: Baklava Mate, based in London.
- Preserve the existing homepage design, layout, typography, colours and overall visual treatment; change content only.
- Catalogue: four or five baklava varieties, with only 500 g and 1 kg sizes.
- Product names, prices, delivery coverage and product photography require confirmation; do not invent live commercial claims.

- Confirmed varieties: pistachio, walnut, cold baklava, pistachio sarma and şöbiyet.
- Temporary 1 kg prices: £30 for all except walnut £28. 500 g uses proportional prices (£15 / £14).
- User approved generated sample product images. Keep all media local.

## Inner pages (2026-10-19)
- Founder: Sefa Oruc. Separate Our Story page; founder photos will be supplied later.
- Product detail pages include event date/time, guests and large quantity enquiry UI. Standard retail sizes remain 500 g / 1 kg.
- Larger orders are by enquiry, with no invented bulk price or delivery promise.
- Separate allergen page; exact ingredients and cross-contact information remain unverified.
- Merch concepts: Baklava Lover T-shirt and cap, Turkish Tea T-shirt; preserve existing palette and type.

## Confirmed update — 2026-10-19 (supersedes earlier size/merch decisions)
- Retail baklava is only 1 kg / 2 kg; walnut £28 / £56, others £30 / £60. Remove legacy 500 g basket entries with notice, never silently enlarge.
- Remove announcement band, hero size sentence, search and product detail brand eyebrow.
- Contact: love@baklavamate.com. Events prepare a mailto draft and copyable summary; visitors send through their email app. Fresh baklava for events; arrangements require the team's confirmation.
- Merch: cream “i love baklava.” shirt £25 in S/M/L/XL and one nazar keyring £5.99. Exactly two products, both addable to the basket.
- General allergen information only until exact ingredients are verified. Dedicated privacy page must reflect actual behaviour.
- Cloudflare newsletter and Stripe checkout deferred. Never imply successful subscription or payment while disconnected.
- Publish this project only to https://github.com/mso96/baklavamate.git; exclude parent workspace, secrets and local evidence.

- Footer location row “● LONDON, UK” removed at user request; this is a targeted footer change.
- Newsletter block should sit at the editorial section's left gutter, with heading, copy, input and button sharing one left edge (45 px desktop / 35 px mobile).

- T-shirt temporarily removed from merch. Only the £5.99 nazar keyring is available; retain shirt artwork for possible future return.

## SEO and process — 2026-10-20
- Nazar keyring has a dedicated detail route at /products/nazar-keyring.
- Public pages must be prerendered with metadata, canonical URLs and structured data; generate sitemap, robots and llms.txt from the same catalogue. Footer links to /llms.txt.
- Canonical origin defaults to https://baklavamate.com, configurable with VITE_SITE_URL. Do not invent ratings, stock or shipping guarantees.
- Confirmed process: ingredients come from Türkiye, Turkish baklava masters prepare and bake it fresh. Homepage and Our Story use a three-step illustrated section and “baa·kla·vaah” motif. Do not infer freezing, shipping routes or other reference-image claims.

## Process redesign feedback
- User rejected the cream panel, heavy outlined icons and large pronunciation motif. Remove these. Use three generated editorial photos with lavender backgrounds, existing lime labels and restrained mono typography in the established grid. Preserve the rest of the site.

- Latest process visual direction: use generated hand-drawn editorial illustrations instead of photographs. Keep the restrained three-card layout; lavender backgrounds, pistachio green and golden ochre, no heavy cartoon frames. This supersedes the photography preference above.

- Latest process refinement: compact numbered three-step strip with smaller illustrations (160 px desktop / 140 px mobile), arrows and “bak-la-vaah” pronunciation. Baking illustration must show square-cut baklava with no steam/smoke.

- Ingredients process illustration must contain only Antep pistachios and walnuts; no filo or pastry sheets.

- Nazar keyring detail uses a transparent product cutout over lavender, with normal blending to preserve silver/white colours. Remove its illustrative-photo caption.

- User confirmed UK-wide delivery; homepage hero subtitle on both slides reads “DELIVERY ACROSS THE UK”.

- Event forms requested: Cloudflare D1 tracking and email notifications to love@baklavamate.com, forwarded to sefa9620@gmail.com (user confirmed). Provisioning currently awaits explicit approval after automatic review blocked permanent resource creation.
- External recipe sources are research drafts only until checked against actual production recipes; see docs/ingredient-review.md.
- Catalogue now uses event trays instead of kilogram boxes: classic pistachio 86 slices £90; clotted cream şöbiyet 34 slices £70 round tray; clotted cream midye 68–72 pieces £70 round tray; special baklava 96 slices £70; cold baklava 84 slices £120.
