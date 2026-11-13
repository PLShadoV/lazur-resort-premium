import { structuredData } from '../src/seo/schema.mjs';
﻿import { createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
const routes=JSON.parse(await readFile('src/seo/routes.json','utf8'));
const lastmod=new Intl.DateTimeFormat('sv-SE',{timeZone:'Europe/Warsaw'}).format(new Date());
const business=JSON.parse(await readFile('src/seo/business.json','utf8'));
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const template=await readFile('dist/index.html','utf8');
const manifest=JSON.parse(await readFile('dist/.vite/manifest.json','utf8'));
const server=await createServer({mode:'production',server:{middlewareMode:true},appType:'custom'});
try {
 const {render}=await server.ssrLoadModule('/src/entry-seo.tsx');
 for(const [path,page] of Object.entries(routes)) {
  let body=await render(path);
  for(const [src,asset] of Object.entries(manifest)) body=body.replaceAll('/'+src,'/'+asset.file).replaceAll(encodeURI('/'+src),'/'+asset.file);
  if(body.includes('/src/assets/')) throw new Error('Unresolved asset in '+path);
  const schema=structuredData(path,routes,business);
  let html=template.replace(/<title>[\s\S]*?<\/title>/,'').replace(/<meta\s+(?:name="description"|property="og:[^"]+"|name="twitter:image")[^>]*>/g,'');
  html=html.replace('</head>',`<title>${esc(page.title)}</title><meta name="description" content="${esc(page.description)}"><link rel="canonical" href="https://lazurrogowo.pl${path}"><meta property="og:title" content="${esc(page.title)}"><meta property="og:description" content="${esc(page.description)}"><meta property="og:url" content="https://lazurrogowo.pl${path}"><meta property="og:type" content="website"><meta property="og:image" content="https://lazurrogowo.pl/og-image.jpg"><meta name="twitter:image" content="https://lazurrogowo.pl/og-image.jpg"><script id="seo-schema" type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script><style>.scroll-reveal{opacity:1;transform:none;filter:none}</style></head>`).replace('<div id="root"></div>',`<div id="root">${body}</div>`);
  const file=path==='/'?'dist/index.html':`dist${path}.html`;await mkdir(dirname(file),{recursive:true});await writeFile(file,html);
 }
 await writeFile('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(routes).map(path=>`<url><loc>https://lazurrogowo.pl${path}</loc><lastmod>${lastmod}</lastmod></url>`).join('')+'</urlset>');
 await writeFile('dist/sitemap.xml',await readFile('public/sitemap.xml'));
 console.log(`Prerender: ${Object.keys(routes).length} complete React pages.`);
} finally {await server.close();}
// Supabase auth keeps a refresh timer in Node; all output writes above are awaited.
process.exit(0);
