import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Bicycle, Heart, Camera, Buildings, Tree, Car } from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';

const Okolica = () => {
  const { t } = useLanguage();
  
  const areas = [
    {
      title: t('area.mrzezyna.title'),
      href: '/okolica/mrzezyna',
      description: t('area.mrzezyna.desc'),
      icon: <MapPin size={24} className="text-primary" />,
    },
    {
      title: t('area.dzwirzyno.title'),
      href: '/okolica/dzwirzyno',
      description: t('area.dzwirzyno.desc'),
      icon: <Camera size={24} className="text-primary" />,
    },
    {
      title: t('area.kolobrzeg.title'),
      href: '/okolica/kolobrzeg',
      description: t('area.kolobrzeg.desc'),
      icon: <Heart size={24} className="text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            {t('area.title').split(' ')[0]} <span className="text-primary">{t('area.title').split(' ')[1]}</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {t('area.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area) => (
            <Card key={area.href} className="glass-card border-0 hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {area.icon}
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <Button asChild className="btn-luxury">
                  <Link to={area.href}>
                    {t('button.more')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Topics Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4">
              Odkryj <span className="text-primary">okolicę</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Kompleksowe informacje o wszystkim, co możesz zobaczyć i doświadczyć w naszym regionie
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card border-0 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Buildings size={48} className="text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Atrakcje turystyczne
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Odkryj najciekawsze miejsca w okolicy - historyczne miasta, kurorty nadmorskie i zabytki kulturowe
                </p>
                <Button asChild className="btn-luxury">
                  <Link to="/okolica/atrakcje">
                    Zwiedzaj atrakcje
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Tree size={48} className="text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Plaże i przyroda
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Piękne plaże, szlaki rowerowe, ścieżki spacerowe i rezerwaty przyrody w bezpośrednim sąsiedztwie
                </p>
                <Button asChild className="btn-luxury">
                  <Link to="/okolica/plaze-przyroda">
                    Poznaj przyrodę
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:scale-105 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <Car size={48} className="text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  Transport i dojazd
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Wszystkie informacje o dojeździe do nas - samochodem, komunikacją publiczną oraz lokalnym transportem
                </p>
                <Button asChild className="btn-luxury">
                  <Link to="/okolica/transport">
                    Sprawdź dojazd
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-4">
              Aktywności w <span className="text-primary">okolicy</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bicycle Routes */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Bicycle size={48} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    Trasy rowerowe
                  </h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Rozbudowana sieć ścieżek rowerowych łączących nadmorskie miejscowości
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Trasa Kołobrzeg - Rogowo</span>
                    <span className="font-medium text-primary">12 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Trasa nadbrzeżna</span>
                    <span className="font-medium text-primary">8 km</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/70">Ścieżka leśna</span>
                    <span className="font-medium text-primary">5 km</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fishing */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-4xl">
                    🎣
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    Wędkowanie
                  </h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Liczne możliwości dla miłośników wędkarstwa
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Morze Bałtyckie</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Zarybiony staw</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Jezioro w okolicy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Łowiska rzeczne</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Walking Trails */}
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center text-4xl">
                    🥾
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-4">
                    Spacery
                  </h3>
                </div>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  Piękne trasy spacerowe po okolicy
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Spacery brzegiem morza</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Ścieżki leśne</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Trasy po wydmach</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Recreation Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-light text-foreground mb-6">
                Aktywny <span className="text-primary">wypoczynek</span>
              </h2>
              
              <div className="space-y-6 text-foreground/70 leading-relaxed">
                <p>
                  Rogowo to raj dla miłośników aktywnego wypoczynku. W bezpośrednim 
                  sąsiedztwie naszych domków rozpoczynają się szlaki rowerowe 
                  prowadzące przez malownicze lasy i pola. Możesz wypożyczyć rowery 
                  w pobliskich punktach wypożyczalni lub przyjeżdżać z własnymi.
                </p>
                
                <p>
                  W okolicy znajdziesz również korty tenisowe, boiska do siatkówki 
                  plażowej oraz wyznaczone trasy nordic walking. Dla amatorów sportów 
                  wodnych dostępne są kajaki i sprzęt do windsurfingu. Bliskość Bałtyku 
                  pozwala na organizowanie wycieczek łodzią po okolicy i wędkowanie.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Szlaki rowerowe wprost z domku</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Sporty wodne na Bałtyku</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Wypożyczalnie rowerów w okolicy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground/70">Korty tenisowe i boiska sportowe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img 
                src="/src/assets/widok-na-las.webp" 
                alt="Aktywny wypoczynek w okolicy - rodzina spaceruje po leśnej ścieżce"
                className="w-full h-[400px] object-cover rounded-2xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            {t('area.why.title').split(' ')[0]} {t('area.why.title').split(' ')[1]} {t('area.why.title').split(' ')[2]} <span className="text-primary">{t('area.why.title').split(' ')[3]}</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-medium text-foreground mb-3">{t('area.why.location')}</h3>
              <p className="text-foreground/70">
                {t('area.why.location.desc')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-foreground mb-3">{t('area.why.beach')}</h3>
              <p className="text-foreground/70">
                {t('area.why.beach.desc')}
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-foreground mb-3">{t('area.why.nature')}</h3>
              <p className="text-foreground/70">
                {t('area.why.nature.desc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Okolica;