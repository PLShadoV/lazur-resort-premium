import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Bicycle, Heart, Camera } from '@phosphor-icons/react';

const Okolica = () => {
  const areas = [
    {
      title: 'Domki na wynajem Mrzeżyno',
      href: '/okolica/mrzezyna',
      description: 'Spokojne miasteczko nad morzem z piękną plażą i urokliwym portem rybackim.',
      icon: <MapPin size={24} className="text-primary" />,
    },
    {
      title: 'Domki na wynajem Dźwirzyno',
      href: '/okolica/dzwirzyno',
      description: 'Malownicza miejscowość między morzem a jeziorem Resko Przymorskie.',
      icon: <Camera size={24} className="text-primary" />,
    },
    {
      title: 'Domki na wynajem Kołobrzeg',
      href: '/okolica/kolobrzeg',
      description: 'Znany kurort nadmorski z licznymi atrakcjami i zabytkami.',
      icon: <Heart size={24} className="text-primary" />,
    },
    {
      title: 'Noclegi z psem',
      href: '/okolica/z-psem',
      description: 'Idealne miejsca dla właścicieli psów z przyjaznymi regulacjami.',
      icon: <Heart size={24} className="text-primary" />,
    },
    {
      title: 'Ścieżki rowerowe',
      href: '/okolica/sciezki-rowerowe',
      description: 'Malownicze trasy rowerowe wzdłuż wybrzeża i przez lasy.',
      icon: <Bicycle size={24} className="text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
            Odkryj <span className="text-primary">Okolicę</span>
          </h1>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Rogowo to idealna baza wypadowa do odkrywania pięknych miejscowości nadmorskich. 
            Poznaj uroki pobliskich miasteczek i atrakcji regionu.
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
                    Dowiedz się więcej
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-light text-foreground mb-6">
            Dlaczego warto wybrać <span className="text-primary">Rogowo</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-medium text-foreground mb-3">Centralna Lokalizacja</h3>
              <p className="text-foreground/70">
                Idealne położenie między Kołobrzegiem, Mrzeżynem i Dźwirzynem
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-foreground mb-3">Bliskość Plaży</h3>
              <p className="text-foreground/70">
                Zaledwie kilka minut jazdy do pięknych plaż Bałtyku
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-foreground mb-3">Spokój i Natura</h3>
              <p className="text-foreground/70">
                Otoczone lasami i zielenią, z dala od miejskiego zgiełku
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Okolica;