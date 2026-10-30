import {products,merch,brand} from './content.js';
export const siteUrl=(import.meta.env?.VITE_SITE_URL||'https://baklavamate.com').replace(/\/$/,'');
const pages={
 '/':['Baklava Mate | Event Baklava Trays','Meet Baklava Mate: fresh Turkish baklava trays for events, gatherings and celebrations across the UK. Founded by Sefa Oruc.'],
 '/our-story':['Our Story | Baklava Mate','Meet Baklava Mate, founded by Sefa Oruc in London. Ingredients from Türkiye, prepared by Turkish baklava masters and baked fresh.'],
 '/box-sizes':['Baklava Event Trays | Baklava Mate','Explore event trays counted by slice, with options for pistachio baklava, şöbiyet, midye, special baklava and cold baklava.'],
 '/events':['Fresh Baklava for Events | Baklava Mate','Plan fresh baklava for birthdays, weddings and work events. Send your date, guest count and quantities to the Baklava Mate team.'],
 '/merch':['Nazar Keyring | Baklava Mate Merch','Discover the blue nazar keyring from Baklava Mate. £5.99 per keyring, sold individually with a silver-coloured clasp.'],
 '/allergens':['Ingredients & Allergen Information | Baklava Mate','Find out how to request current ingredient, allergen and cross-contact information before arranging your Baklava Mate order.'],
 '/privacy':['Privacy Information | Baklava Mate','How Baklava Mate handles browser basket storage, email enquiries and privacy requests. Contact love@baklavamate.com.'],
 '/faq':['Frequently Asked Questions | Baklava Mate','Answers to common questions about Baklava Mate event trays, ordering, UK delivery, allergens, first-order offers and merchandise.'],
};
export const pagePaths=[...Object.keys(pages),...products.map(p=>'/products/'+p.id),...merch.map(p=>'/products/'+p.id)];
export function seoFor(path){
 const p=[...products,...merch].find(p=>path===`/products/${p.id}`);
 const known=!!p||!!pages[path];
 const title=p?`${p.name} | Baklava Mate`:pages[path]?.[0]||'Page Not Found | Baklava Mate';
 const description=p?(p.slices?`${p.description} ${p.slices}, ${p.tray}, £${p.price} for event enquiries.`:'Blue nazar eye keyring with a silver-coloured clasp. £5.99 each, sold individually. Discover Baklava Mate merchandise.'):pages[path]?.[1]||'This page could not be found.';
 const image=siteUrl+(p?(p.image||`/assets/baklava-${p.id}.png`):'/assets/baklava-hero-desktop.png');
 const url=siteUrl+(path==='/'?'/' :path);
 const graph=[{'@type':'Organization','@id':siteUrl+'/#organization',name:brand.name,url:siteUrl+'/',email:'love@baklavamate.com',founder:{'@type':'Person',name:'Sefa Oruc'}},{'@type':'WebSite','@id':siteUrl+'/#website',name:brand.name,url:siteUrl+'/'}];
 if(p)graph.push({'@type':'Product',name:p.name,description,image:[image],sku:p.id,url,brand:{'@type':'Brand',name:'Baklava Mate'}});
 // No offers or stock claims while checkout/availability are unconfirmed.
 if(path!=='/'&&known)graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Home',item:siteUrl+'/'},...(p?[{'@type':'ListItem',position:2,name:p.slices?'Event trays':'Merch',item:siteUrl+(p.slices?'/':'/merch')}]:[]),{'@type':'ListItem',position:p?3:2,name:p?.name||title.split(' | ')[0],item:url}]});
 return {title,description,image,url,known,json:{'@context':'https://schema.org','@graph':graph}};
}
export function applySeo(path){const s=seoFor(path);document.title=s.title;const meta=(key,value,property=false)=>{const attr=property?'property':'name';let el=document.head.querySelector(`meta[${attr}="${key}"]`);if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.append(el)}el.content=value};meta('description',s.description);meta('robots',s.known?'index,follow':'noindex,follow');for(const [k,v] of Object.entries({'og:title':s.title,'og:description':s.description,'og:image':s.image,'og:url':s.url,'og:type':'website','og:site_name':'Baklava Mate'}))meta(k,v,true);meta('twitter:card','summary_large_image');meta('twitter:title',s.title);meta('twitter:description',s.description);meta('twitter:image',s.image);let canonical=document.head.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.append(canonical)}canonical.href=s.url;let json=document.getElementById('structured-data');if(!json){json=document.createElement('script');json.type='application/ld+json';json.id='structured-data';document.head.append(json)}json.textContent=JSON.stringify(s.json)}
