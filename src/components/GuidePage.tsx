import { Link } from 'react-router-dom';
import { MapPin, Compass, Waves, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import guides from '@/seo/guides.json';
import { routeData } from '@/seo/Seo';
const images=import.meta.glob<string>('/src/assets/*.{webp,jpg}',{eager:true,query:'?url',import:'default'});
export function GuidePage({path}:{path:string}) {
 const page=guides[path as keyof typeof guides];
 return <main className="min-h-screen pt-28 bg-background">
  <section className="container mx-auto px-4 py-16 md:py-20">
   <nav aria-label="Ścieżka strony" className="mb-8 text-sm text-muted-foreground"><Link to="/">Lazur Resort</Link> / <Link to="/okolica">Okolica</Link></nav>
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
    <div><h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">{routeData[path].h1}</h1><p className="text-lg text-muted-foreground leading-relaxed mb-8">{page.intro}</p><Button asChild className="btn-luxury"><Link to="/rezerwacja">Zaplanuj pobyt w Rogowie</Link></Button></div>
    <img src={images['/src/assets/'+page.image]} alt={path==='/okolica/z-psem'?'Pies na piaszczystej plaży':path==='/okolica/transport'?'Domek Lazur Resort w Rogowie':routeData[path].h1} width={page.width} height={page.height} {...{fetchpriority: 'high'}} loading="eager" decoding="async" className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-luxury" />
   </div>
  </section>
  <section className="py-16 bg-muted/30"><div className="container mx-auto px-4"><h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-12">{page.heading}</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{page.cards.map(([title,text,to,label],i)=>{const Icon=[MapPin,Waves,Compass][i%3];return <Card key={title} className="glass-card hover:shadow-luxury transition-shadow"><CardContent className="p-6 md:p-8 flex flex-col h-full"><Icon size={36} className="text-[#967d48] mb-5" aria-hidden="true"/><h3 className="text-xl font-medium mb-4">{title}</h3><p className="text-muted-foreground leading-relaxed mb-6 flex-1">{text}</p><Button asChild variant="outline" className="h-auto whitespace-normal text-left py-3"><Link to={to}>{label}<ArrowRight size={16} className="ml-2 shrink-0"/></Link></Button></CardContent></Card>;})}</div></div></section>
  {path==='/okolica' && <section className="container mx-auto px-4 py-16"><h2 className="text-3xl md:text-4xl font-light tracking-tight text-center mb-12">Okolica: wycieczki z Rogowa</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{['/okolica/mrzezyna','/okolica/dzwirzyno','/okolica/kolobrzeg'].map(to=>{const destination=guides[to as keyof typeof guides];return <Card key={to} className="glass-card overflow-hidden"><img src={images['/src/assets/'+destination.image]} alt={routeData[to].h1} width={destination.width} height={destination.height} loading="lazy" decoding="async" className="w-full h-56 object-cover"/><CardContent className="p-6"><h3 className="text-xl font-medium mb-4">{routeData[to].h1}</h3><p className="text-muted-foreground mb-6">{destination.intro.split('. ')[0]}.</p><Button asChild variant="outline"><Link to={to}>Zaplanuj wycieczkę<ArrowRight size={16} className="ml-2"/></Link></Button></CardContent></Card>;})}</div></section>}
  {path!=='/okolica' && <section className="container mx-auto px-4 py-16"><Card className="glass-card"><CardContent className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center"><div><Compass className="text-[#967d48] mb-4" size={32}/><h2 className="text-3xl font-light tracking-tight mb-4">{page.panel}</h2><p className="text-muted-foreground leading-relaxed max-w-3xl">{page.detail}{path==='/okolica/plaze-przyroda' && <> Przeczytaj też <Link to="/okolica/z-psem" className="underline underline-offset-4">wskazówki dotyczące pobytu z psem</Link>.</>}{path==='/okolica/kolobrzeg' && <> Przed wyjazdem zobacz <Link to="/okolica/transport" className="underline underline-offset-4">informacje o dojeździe</Link>.</>}</p></div><Button asChild className="btn-luxury h-auto whitespace-normal py-4"><Link to={page.cta}>{page.label}</Link></Button></CardContent></Card></section>}
 </main>;
}
