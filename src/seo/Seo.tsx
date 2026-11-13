import { structuredData } from './schema.mjs';
﻿import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from './routes.json';
import business from './business.json';
export const routeData = routes as Record<string, {title:string;description:string;h1:string}>;
export function Seo() {
 const {pathname} = useLocation();
 useEffect(()=>{
 const path=pathname.replace(/\/+$/,'') || '/'; const page=routeData[path];
 document.title=page?.title || 'Nie znaleziono strony | Lazur Resort';
 const meta=(key:string,value:string,property=false)=>{const attr=property?'property':'name';let el=document.head.querySelector(`meta[${attr}="${key}"]`);if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.append(el);}el.setAttribute('content',value);};
 meta('description',page?.description || 'Wróć na stronę główną Lazur Resort w Rogowie.');
 meta('robots',page?'index, follow':'noindex, follow');
 for(const key of ['title','description','url','image']) meta('og:'+key,key==='title'?document.title:key==='description'?(page?.description || ''):key==='url'?'https://lazurrogowo.pl'+path:'https://lazurrogowo.pl/og-image.jpg',true);
 meta('twitter:image','https://lazurrogowo.pl/og-image.jpg');
 let canonical=document.head.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.setAttribute('rel','canonical');document.head.append(canonical);}canonical.setAttribute('href','https://lazurrogowo.pl'+path);
 document.getElementById('seo-schema')?.remove();
 if(page){const script=document.createElement('script');script.id='seo-schema';script.type='application/ld+json';script.textContent=JSON.stringify(structuredData(path,routeData,business));document.head.append(script);}
 },[pathname]); return null;
}
