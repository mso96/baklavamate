import {build} from 'vite';
import {readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const tmp=resolve('dist/prerender');
await build({build:{ssr:'src/prerender.jsx',outDir:tmp}});
const {render,pagePaths,seoFor,siteUrl,products,merch}=await import(pathToFileURL(resolve(tmp,'prerender.js')));
const template=await readFile('dist/client/index.html','utf8');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
for(const path of [...pagePaths,'/404']){
 const s=seoFor(path);
 const metas=`<title>${escape(s.title)}</title>\n<meta name="description" content="${escape(s.description)}"/>\n<meta name="robots" content="${s.known?'index,follow':'noindex,follow'}"/>\n<link rel="canonical" href="${s.url}"/>\n`+Object.entries({'og:title':s.title,'og:description':s.description,'og:image':s.image,'og:url':s.url,'og:type':'website','og:site_name':'Baklava Mate'}).map(([key,val])=>`<meta property="${key}" content="${escape(val)}"/>`).join('\n')+`\n<meta name="twitter:card" content="summary_large_image"/><meta name="twitter:title" content="${escape(s.title)}"/><meta name="twitter:description" content="${escape(s.description)}"/><meta name="twitter:image" content="${s.image}"/><script id="structured-data" type="application/ld+json">${JSON.stringify(s.json).replaceAll('<','\\u003c')}</script>`;
 const html=template.replace(/<title>.*?<\/title>/s,'').replace(/<meta name="description"[^>]*>/,'').replace('</head>',metas+'\n</head>').replace('<div id="root"></div>',`<div id="root">${render(path)}</div>`);
 const file=path==='/404'?'dist/client/404.html':path==='/'?'dist/client/index.html':`dist/client${path}/index.html`;
 await mkdir(resolve(file,'..'),{recursive:true});await writeFile(file,html);
}
await writeFile('dist/client/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pagePaths.map(p=>`<url><loc>${siteUrl}${p}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/client/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile('dist/client/llms.txt',`# Baklava Mate\n\n> London-based baklava brand founded by Sefa Oruc. Event trays of fresh Turkish baklava and a nazar keyring.\n\nOur ingredients come from Türkiye. Baklava is prepared and baked fresh by Turkish baklava masters. Contact: love@baklavamate.com. All prices are GBP. Online checkout is not active. Event forms save enquiries and notify the team for confirmation. Newsletter registration is active; the 5% first-order offer is confirmed against the sign-up email before payment, with no automatic coupon. UK-wide delivery timing and charges are confirmed per enquiry. Product-specific allergen information must be confirmed directly.\n\n## Event trays\n${products.map(p=>`- [${p.name}](${siteUrl}/products/${p.id}): ${p.slices}, ${p.tray}, £${p.price.toFixed(2)}. ${p.description}`).join('\n')}\n\n## Merchandise\n${merch.map(p=>`- [${p.name}](${siteUrl}/products/${p.id}): £${p.price.toFixed(2)} per item. Sold individually.`).join('\n')}\n\n## Information\n${pagePaths.filter(p=>!p.startsWith('/products')).map(p=>`- [${seoFor(p).title.split(' | ')[0]}](${siteUrl}${p}): ${seoFor(p).description}`).join('\n')}\n`);
await rm(tmp,{recursive:true,force:true});
console.log(`Prerendered ${pagePaths.length} pages, sitemap, robots.txt and llms.txt.`);
