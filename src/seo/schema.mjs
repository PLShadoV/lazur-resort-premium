export function structuredData(path, routeData, business) {

 const parts = path.split('/').filter(Boolean);
 const crumbs = [{name:'Strona główna',item:'https://lazurrogowo.pl/'}];
 parts.forEach((_,i) => { const key='/'+parts.slice(0,i+1).join('/'); crumbs.push({name:routeData[key]?.h1 || parts[i],item:'https://lazurrogowo.pl'+key}); });
 return {'@context':'https://schema.org','@graph':[business,...(parts.length ? [{'@type':'BreadcrumbList',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,...c}))}] : [])]};
}
