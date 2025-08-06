import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, House } from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';

const Cennik = () => {
  const { t } = useLanguage();
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

  const seasons = [
    {
      name: t('pricing.season.spring'),
      period: '01.04 – 31.05',
      description: t('pricing.season.spring.desc'),
      highlight: false,
      prices: {
        '4': 400,
        '5-6': 450,
        '7-8': 500
      }
    },
    {
      name: t('pricing.season.mayday'),
      period: '30.04 – 03.05',
      description: t('pricing.season.mayday.desc'),
      highlight: false,
      prices: {
        '4': 450,
        '5-6': 500,
        '7-8': 550
      }
    },
    {
      name: t('pricing.season.prevacation'),
      period: '30.05 – 22.06',
      description: t('pricing.season.prevacation.desc'),
      highlight: false,
      prices: {
        '4': 450,
        '5-6': 500,
        '7-8': 550
      }
    },
    {
      name: t('pricing.season.summstart'),
      period: '22.06 – 06.07',
      description: t('pricing.season.summstart.desc'),
      highlight: false,
      prices: {
        '4': 550,
        '5-6': 600,
        '7-8': 650
      }
    },
    {
      name: t('pricing.season.high'),
      period: '06.07 – 17.08',
      description: t('pricing.season.high.desc'),
      highlight: true,
      prices: {
        '4': 650,
        '5-6': 700,
        '7-8': 750
      }
    },
    {
      name: t('pricing.season.summend'),
      period: '17.08 – 31.08',
      description: t('pricing.season.summend.desc'),
      highlight: false,
      prices: {
        '4': 450,
        '5-6': 500,
        '7-8': 550
      }
    },
    {
      name: t('pricing.season.autumn'),
      period: '01.09 – 31.10',
      description: t('pricing.season.autumn.desc'),
      highlight: false,
      prices: {
        '4': 400,
        '5-6': 450,
        '7-8': 500
      }
    }
  ];

  const includes = [
    t('pricing.includes.accommodation'),
    t('pricing.includes.bedrooms'),
    t('pricing.includes.kitchen'),
    t('pricing.includes.bathroom'),
    t('pricing.includes.terrace'),
    t('pricing.includes.wifi'),
    t('pricing.includes.grill'),
    t('pricing.includes.parking'),
    t('pricing.includes.linen'),
    t('pricing.includes.beach')
  ];

  const reservationTerms = [
    t('pricing.terms.minimum'),
    t('pricing.terms.checkin'),
    t('pricing.terms.checkout'),
    t('pricing.terms.deposit'),
    t('pricing.terms.pets'),
    t('pricing.terms.distance'),
    t('pricing.terms.parking')
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in-up">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
            {t('pricing.subtitle')}
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasons.map((season, index) => (
              <Card
                key={index}
                className={`relative ${
                  season.highlight
                    ? 'ring-2 ring-ocean glass-card scale-105'
                    : 'glass-card hover:shadow-luxury'
                } transition-all duration-300 group`}
              >
                {season.highlight && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-ocean text-white">
                    SEZON WYSOKI
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-ocean to-ocean/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <House size={24} weight="light" className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-light tracking-tight">
                    {season.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{season.period}</p>
                  <p className="text-sm text-muted-foreground italic">
                    {season.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{t('pricing.cottage.4')}</span>
                      <span className="font-medium text-ocean">
                        {season.prices['4']} {t('pricing.per.night')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{t('pricing.cottage.56')}</span>
                      <span className="font-medium text-ocean">
                        {season.prices['5-6']} {t('pricing.per.night')}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">{t('pricing.cottage.78')}</span>
                      <span className="font-medium text-ocean">
                        {season.prices['7-8']} {t('pricing.per.night')}
                      </span>
                    </div>
                  </div>

                  <Button asChild className="btn-luxury w-full group-hover:scale-105 transition-transform duration-300">
                    <Link to="/rezerwacja">{t('button.book')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section ref={addToRefs} className="py-16 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-light tracking-tight mb-6 text-center">
                {t('pricing.includes.title')}
              </h2>
              <div className="space-y-3">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check size={20} weight="bold" className="text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h2 className="text-2xl font-light tracking-tight mb-6 text-center">
                {t('pricing.terms.title')}
              </h2>
              <div className="space-y-4">
                {reservationTerms.map((term, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{term}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-ocean/10 rounded-lg">
                <h3 className="font-medium mb-2">{t('pricing.additional.title')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('pricing.additional.desc')}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-6">
            {t('pricing.cta.title')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('pricing.cta.subtitle')}
          </p>
          <Button asChild className="btn-luxury text-lg px-12 py-6">
            <Link to="/rezerwacja">{t('pricing.cta.button')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cennik;