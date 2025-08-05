import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { House, Waves, Users, Car, WifiHigh, PawPrint, MapPin, Star, Bicycle, TreeEvergreen } from '@phosphor-icons/react';
import heroDrone from '@/assets/hero-drone.webp';
import cottageExterior from '@/assets/domekzewnatrz.webp';
import cuteDogBeach from '@/assets/cute-dog-beach.jpg';
import bicycleForestPath from '@/assets/bicycle-forest-path.jpg';
const Homepage = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.1
    });
    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
  const features = [{
    icon: House,
    title: 'Komfortowe domki',
    description: 'Luksusowe domki dla maksymalnie 8 osób z pełnym wyposażeniem'
  }, {
    icon: Waves,
    title: 'Blisko morza',
    description: 'Zaledwie 400 metrów do pięknej plaży w Rogowie'
  }, {
    icon: Users,
    title: 'Dla rodzin',
    description: 'Idealne miejsce na wypoczynek z dziećmi i przyjaciółmi'
  }, {
    icon: Car,
    title: 'Bezpłatny parking',
    description: 'Prywatny parking przy każdym domku'
  }, {
    icon: WifiHigh,
    title: 'WiFi i TV',
    description: 'Darmowy internet oraz telewizja satelitarna'
  }, {
    icon: PawPrint,
    title: 'Akceptujemy zwierzęta',
    description: 'Twój czworonóg też jest mile widziany'
  }];
  const reviews = [
    {
      name: "Magdalena",
      rating: 5,
      text: "Piękne miejsce, świetne do wypoczynku z dziećmi. Domki bardzo czyste i dobrze wyposażone. Blisko do plaży, co jest ogromnym atutem."
    },
    {
      name: "Piotr K.",
      rating: 5,
      text: "Wspaniała lokalizacja, cisza i spokój. Właściciele bardzo mili i pomocni. Gorąco polecamy!"
    },
    {
      name: "Anna W.",
      rating: 5,
      text: "Doskonałe miejsce na wakacje z rodziną. Domki komfortowe, a okolica piękna. Na pewno wrócimy!"
    },
    {
      name: "Michał J.",
      rating: 5,
      text: "Świetna lokalizacja, blisko morza i lasu. Domki czyste i wygodne. Idealne miejsce na relaks."
    }
  ];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroDrone})`
      }}>
          <div className="absolute inset-0 bg-primary/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            Lazur Resort
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 opacity-90 max-w-3xl mx-auto">
            Luksusowe domki letniskowe nad morzem w Rogowie
          </p>
          <p className="text-lg md:text-xl font-light mb-8 opacity-80 max-w-2xl mx-auto">
            Odkryj spokój i komfort w naszych ekskluzywnych domkach położonych między Kołobrzegiem a Mrzeżynem. 
            Zaledwie 400 metrów od pięknej, piaszczystej plaży Bałtyku.
          </p>
          
          
          <Button asChild className="btn-luxury text-lg px-12 py-6">
            <Link to="/rezerwacja">Zarezerwuj</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section ref={addToRefs} className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Dlaczego domki Lazur Resort w Rogowie?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferujemy komfortowy wypoczynek w luksusowych domkach nad morzem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="glass-card hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon size={48} weight="light" className="mx-auto mb-6 text-ocean" />
                  <h3 className="text-xl font-medium mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* House Photo Section */}
      <section ref={addToRefs} className="py-20 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src={cottageExterior} alt="Domek Lazur Resort" className="rounded-2xl shadow-luxury w-full" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-light tracking-tight">
                Nasze luksusowe domki letniskowe nad morzem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lazur Resort oferuje 4 identyczne domki w Rogowie, każdy zaprojektowany z myślą 
                o maksymalnym komforcie dla maksymalnie 8 osób. Nowoczesne wnętrza łączą elegancję 
                z funkcjonalnością, a przestronne tarasy i prywatne ogrody zapewniają pełną prywatność.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Każdy domek wyposażony jest w najwyższej jakości sprzęty i meble. Duże okna wpuszczają 
                dużo naturalnego światła, tworząc przyjazną i ciepłą atmosferę. Idealne miejsce na 
                rodzinne wakacje, wyjazd z przyjaciółmi czy romantyczny weekend nad morzem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>2 sypialnie + salon z rozkładaną sofą</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>W pełni wyposażona kuchnia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>1 łazienka z prysznicem</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>Duży taras z meblami ogrodowymi</span>
                </li>
              </ul>
              <Button asChild className="btn-luxury">
                <Link to="/galeria">Zobacz galerię</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Activities Section */}
      <section ref={addToRefs} className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-card overflow-hidden hover:shadow-luxury transition-all duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={cuteDogBeach} 
                  alt="Pobyt z psem nad morzem"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <PawPrint size={24} weight="light" style={{ color: '#967d48' }} />
                      </div>
                      <h3 className="text-2xl font-medium">Pobyt z czworonogiem</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-3">
                      Akceptujemy zwierzęta domowe. Duże tereny zielone i bliskość 
                      plaży to idealne warunki dla Twojego pupila.
                    </p>
                    <ul className="space-y-1 text-sm text-white/80">
                      <li>• Zwierzęta dozwolone za dopłatą 15 zł/dobę</li>
                      <li>• Duży ogród przy każdym domku</li>
                      <li>• Blisko plaża przyjazna psom</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card overflow-hidden hover:shadow-luxury transition-all duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={bicycleForestPath} 
                  alt="Wycieczki rowerowe po lasach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Bicycle size={24} weight="light" style={{ color: '#967d48' }} />
                      </div>
                      <h3 className="text-2xl font-medium">Rowerem nad morzem</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-3">
                      Odkryj urokliwe ścieżki rowerowe łączące Rogowo z Mrzeżynem, 
                      Dźwirzynem i Kołobrzegiem.
                    </p>
                    <ul className="space-y-1 text-sm text-white/80">
                      <li>• Trasy dla całej rodziny</li>
                      <li>• Przepiękne widoki na morze</li>
                      <li>• Bezpieczne ścieżki rowerowe</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Location Section */}
      <section ref={addToRefs} className="py-20 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light tracking-tight mb-6">
              Lokalizacja - Rogowo nad morzem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Idealnie położone domki między najpopularniejszymi nadmorskimi kurortami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin size={24} weight="light" className="text-ocean" />
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <p className="text-muted-foreground">Makowa 6, 72-330 Rogowo, województwo zachodniopomorskie</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Jak do nas dojechać?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 15 km od Kołobrzegu</li>
                  <li>• 400 metrów do plaży</li>
                  <li>• Dojazd z Kołobrzegu drogą wojewódzką nr 163</li>
                  <li>• Następnie skręt w Rogowo zgodnie ze znakowaniem</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-luxury">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4677.647891234567!2d15.5773896!3d54.2823456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.1!3m3!1m2!1s0x47aa5e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2sMakowa+6%2C+72-330+Rogowo!5e0!3m2!1spl!2spl!4v1645123456789" width="100%" height="300" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={addToRefs} className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light tracking-tight mb-6">
              Najwyżej oceniane Domki letniskowe 2025
            </h2>
            <p className="text-xl text-muted-foreground">
              Co mówią o nas nasi goście
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => <Card key={index} className="glass-card p-6">
                <div className="flex items-center mb-4">
                  {Array.from({
                length: review.rating
              }).map((_, i) => <Star key={i} size={20} weight="fill" className="text-yellow-400" />)}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{review.text}"
                </p>
                <p className="font-medium">— {review.name}</p>
              </Card>)}
          </div>
        </div>
      </section>
    </div>;
};
export default Homepage;