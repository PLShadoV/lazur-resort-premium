import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Bicycle, Heart, Camera } from '@phosphor-icons/react';
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
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                  Rozbudowana sieć ścieżek rowerowych łączących nadmorskie miejscowości
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/70">Trasa Kołobrzeg - Rogowo</span>
                    <span className="font-medium text-primary">12 km</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/70">Trasa nadbrzeżna</span>
                    <span className="font-medium text-primary">8 km</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
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
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                  Liczne możliwości dla miłośników wędkarstwa
                </p>
                <div className="space-y-3 text-sm">
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
                <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                  Piękne trasy spacerowe po okolicy
                </p>
                <div className="space-y-3 text-sm">
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