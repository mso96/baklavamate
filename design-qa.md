# Baklava Mate QA — 19 October 2026

Preserved layout, original palette and typography. Removed announcement band, hero weight sentence, search and product eyebrow. Updated retail sizes to 1 kg / 2 kg. Added two purchasable merch variants, e-mail event drafting, general allergen content and a dedicated privacy page.

Automated: all ten food prices, legacy 500 g migration, malformed storage rejection, separate shirt sizes, mixed basket totals, and worker routing/packaging.

Browser: L shirt £25 + single keyring £5.99 + 2 kg walnut £56 = £86.99. Removed test items after verification. Event draft contains name, reply email, occasion, date, London time, guests, product and notes; mailto recipient verified without sending an email. Desktop merch and 390 px mobile home reviewed; no home overflow or broken images. Screenshots retained locally in evidence/.

Newsletter/Stripe remain intentionally disconnected. No product-specific allergen guarantees. General information reference: https://www.food.gov.uk/food-safety-and-hygiene/food-allergies-intolerances-and-coeliac-disease . Privacy guidance reference: https://ico.org.uk/for-organisations/advice-for-small-organisations/privacy-notices-and-cookies/cookies-and-privacy-notices-in-detail/ .

## SEO, keyring and process update — 20 October 2026
- Prerendered 13 routes with unique metadata, canonical URLs, social metadata and JSON-LD. Generated sitemap, robots and llms.txt, plus a noindex 404 page; Cloudflare serves a real 404 for unknown paths.
- Verified keyring detail add-to-basket at £5.99 in the built preview; cleared test item afterward.
- Added three-step process on homepage and story page using only confirmed facts (Türkiye ingredients, Turkish masters, fresh baking). Desktop and 390 px mobile layouts reviewed; no horizontal overflow.
- Build and all 13 tests pass. Wrangler deployment dry-run passed with prerendered output. No remote deployment success is implied.
