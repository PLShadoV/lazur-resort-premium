import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { House, Armchair, ChefHat, Shower, Table, TreeEvergreen, Fire, Car, WifiHigh, Bed, PawPrint, Waves } from '@phosphor-icons/react';
import cottageExterior from '@/assets/cottage-exterior.jpg';

const Galeria = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // Using the uploaded cottage image multiple times for demo
  const galleryImages = [
    { src: cottageExterior, alt: 'Zewnętrzny widok domku Lazur Resort', category: 'Exterior' },
    { src: cottageExterior, alt: 'Taras z meblami ogrodowymi', category: 'Exterior' },
    { src: cottageExterior, alt: 'Ogród przy domku', category: 'Exterior' },
    { src: cottageExterior, alt: 'Parking przy domku', category: 'Exterior' },
    { src: cottageExterior, alt: 'Salon z rozkładaną sofą', category: 'Interior' },
    { src: cottageExterior, alt: 'Kuchnia z pełnym wyposażeniem', category: 'Interior' },
    { src: cottageExterior, alt: 'Sypialnia główna', category: 'Interior' },
    { src: cottageExterior, alt: 'Druga sypialnia', category: 'Interior' },
    { src: cottageExterior, alt: 'Łazienka z prysznicem', category: 'Interior' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in-up">
            Galeria Domków Lazur Resort
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
            Zobacz nasz luksusowe domki letniskowe nad morzem w Rogowie. 
            Komfortowe wnętrza i piękne otoczenie czekają na Państwa.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="glass-card overflow-hidden hover:shadow-luxury transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                      <p className="text-white/80 text-xs">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={addToRefs} className="py-16 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-12">
            Każdy domek oferuje pełen komfort
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Przestrzeń mieszkalna</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <House size={16} weight="light" className="text-ocean" />
                  2 sypialnie dla maksymalnie 8 osób
                </li>
                <li className="flex items-center gap-2">
                  <Armchair size={16} weight="light" className="text-ocean" />
                  Salon z rozkładaną sofą
                </li>
                <li className="flex items-center gap-2">
                  <ChefHat size={16} weight="light" className="text-ocean" />
                  Kuchnia z pełnym wyposażeniem
                </li>
                <li className="flex items-center gap-2">
                  <Shower size={16} weight="light" className="text-ocean" />
                  Łazienka z prysznicem
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Strefa relaksu</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Table size={16} weight="light" className="text-ocean" />
                  Duży taras z meblami
                </li>
                <li className="flex items-center gap-2">
                  <TreeEvergreen size={16} weight="light" className="text-ocean" />
                  Prywatny ogród
                </li>
                <li className="flex items-center gap-2">
                  <Fire size={16} weight="light" className="text-ocean" />
                  Miejsce na grilla
                </li>
                <li className="flex items-center gap-2">
                  <Car size={16} weight="light" className="text-ocean" />
                  Parking przy domku
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Udogodnienia</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <WifiHigh size={16} weight="light" className="text-ocean" />
                  WiFi i telewizja
                </li>
                <li className="flex items-center gap-2">
                  <Bed size={16} weight="light" className="text-ocean" />
                  Pościel i ręczniki
                </li>
                <li className="flex items-center gap-2">
                  <PawPrint size={16} weight="light" className="text-ocean" />
                  Miejsce dla zwierząt
                </li>
                <li className="flex items-center gap-2">
                  <Waves size={16} weight="light" className="text-ocean" />
                  400m do plaży
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Galeria;