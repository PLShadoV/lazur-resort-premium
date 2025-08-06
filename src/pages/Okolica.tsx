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
    {
      title: t('area.pets.title'),
      href: '/okolica/z-psem',
      description: t('area.pets.desc'),
      icon: <Heart size={24} className="text-primary" />,
    },
    {
      title: t('area.bikes.title'),
      href: '/okolica/sciezki-rowerowe',
      description: t('area.bikes.desc'),
      icon: <Bicycle size={24} className="text-primary" />,
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