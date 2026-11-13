import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
const routes=JSON.parse(await readFile('src/seo/routes.json','utf8'));
const titles=new Set(),descriptions=new Set();
for(const [path,page] of Object.entries(routes)){
 const file=path==='/'?'dist/index.html':`dist${path}.html`;const html=await readFile(file,'utf8');
 assert.equal((html.match(/<h1\b/g)||[]).length,1,`${path}: H1`);
 assert.equal((html.match(/rel="canonical"/g)||[]).length,1,`${path}: canonical`);
 assert(html.includes(`href="https://lazurrogowo.pl${path}"`));
 assert(!titles.has(page.title));titles.add(page.title);assert(!descriptions.has(page.description));descriptions.add(page.description);
 assert(!/FAQPage|lovable\.dev|@lovable_dev|\/src\/assets\//.test(html),`${path}: template/source reference`);
 assert(/<noscript[^>]*><nav[^>]*>[\s\S]*?<ul/.test(html),`${path}: no-JS navigation`);
 const schema=JSON.parse(html.match(/<script id="seo-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
 assert(schema['@graph'].some(x=>x['@type']==='LodgingBusiness'));
 if(path!=='/')assert(schema['@graph'].some(x=>x['@type']==='BreadcrumbList'));
 for(const match of html.matchAll(/<img\b([^>]+)>/g)){
  assert(/\bwidth="\d+"/.test(match[1])&&/\bheight="\d+"/.test(match[1]),`${path}: dimensions`);
  assert(match[1].includes('decoding="async"'),`${path}: decoding`);
 }
 for(const match of html.matchAll(/(?:src|href)="(\/[^"?#]*)/g)){
  const url=decodeURI(match[1]).replaceAll('&amp;','&');if(url.startsWith('/assets/')||url.startsWith('/gallery-thumbs/'))assert((await stat('dist'+url)).isFile(),`${path}: missing ${url}`);
 }
 const headings=[...html.matchAll(/<h([1-6])\b/g)].map(x=>+x[1]);
 for(let i=1;i<headings.length;i++)assert(headings[i]<=headings[i-1]+1,`${path}: skipped heading level`);
}
JSON.parse(await readFile('vercel.json','utf8'));
const gallery=await readFile('dist/galeria.html','utf8');assert(!/alt="[^"]*(?:WhatsApp|Hero drone|Domekzewnatrz)/i.test(gallery));assert(gallery.includes('360w')&&gallery.includes('720w'));
const missing=await readFile('dist/404.html','utf8');assert(missing.includes('noindex'));assert(missing.includes('href="/"'));
const headers=await readFile('dist/_headers','utf8');assert(headers.includes('max-age=31536000, immutable'));assert(headers.includes('nosniff'));assert(headers.includes('Content-Security-Policy-Report-Only'));
const redirects=await readFile('dist/_redirects','utf8');assert(!redirects.includes('index.html'));assert(!redirects.includes(' 200'));
const sitemap=await readFile('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<url>/g)||[]).length,Object.keys(routes).length);
console.log(`SEO OK: ${Object.keys(routes).length} routes, unique metadata, heading hierarchy, schema, assets, no-JS menu and Cloudflare files.`);
