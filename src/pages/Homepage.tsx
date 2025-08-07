import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { House, Waves, Users, Car, WifiHigh, PawPrint, MapPin, Star, Bicycle, TreeEvergreen } from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroDrone from '@/assets/hero-drone.webp';
import heroDroneMobile from '@/assets/hero-drone.webp';
import cottageExterior from '@/assets/domekzewnatrz.webp';
import cottageExteriorMobile from '@/assets/domekzewnatrz.webp';
import cuteDogBeach from '@/assets/cute-dog-beach-mobile.webp';
import cuteDogBeachMobile from '@/assets/cute-dog-beach-mobile.webp';
import bicycleForestPath from '@/assets/bicycle-forest-path.jpg';
import bicycleForestPathMobile from '@/assets/bicycle-forest-path-mobile.webp';
const Homepage = () => {
  const { t } = useLanguage();
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
    title: t('home.feature.comfortable.title'),
    description: t('home.feature.comfortable.desc')
  }, {
    icon: Waves,
    title: t('home.feature.sea.title'),
    description: t('home.feature.sea.desc')
  }, {
    icon: Users,
    title: t('home.feature.family.title'),
    description: t('home.feature.family.desc')
  }, {
    icon: Car,
    title: t('home.feature.parking.title'),
    description: t('home.feature.parking.desc')
  }, {
    icon: WifiHigh,
    title: t('home.feature.wifi.title'),
    description: t('home.feature.wifi.desc')
  }, {
    icon: PawPrint,
    title: t('home.feature.pets.title'),
    description: t('home.feature.pets.desc')
  }];
  const reviews = [
    {
      author: "Anna Kowalska",
      rating: 5,
      comment: "Wspaniałe miejsce na relaks! Domki są czyste, dobrze wyposażone. Lokalizacja blisko morza to ogromny plus.",
      platform: "Google"
    },
    {
      author: "Marcin Nowak", 
      rating: 5,
      comment: "Bardzo polecam! Cisza, spokój i piękna przyroda. Idealne miejsce na rodzinne wakacje.",
      platform: "Booking.com"
    },
    {
      author: "Katarzyna Wiśniewska",
      rating: 4,
      comment: "Miły personel, czyste domki. Świetne miejsce dla rodzin z dziećmi. Na pewno wrócimy!",
      platform: "Google"
    },
    {
      author: "Piotr Zalewski",
      rating: 5,
      comment: "Fantastyczne wakacje! Domek był idealnie czysty, bardzo dobrze wyposażony. Polecam wszystkim!",
      platform: "Booking.com"
    },
    {
      author: "Magdalena Dąbrowska",
      rating: 5,
      comment: "Cudowne miejsce na odpoczynek. Blisko morze, las tuż obok. Domki nowocześnie urządzone.",
      platform: "Google"
    },
    {
      author: "Tomasz Krawczyk",
      rating: 4,
      comment: "Bardzo przyjemny pobyt. Dobra lokalizacja, spokojnie. Właściciele bardzo mili i pomocni.",
      platform: "Booking.com"
    },
    {
      author: "Agnieszka Pawlak",
      rating: 5,
      comment: "Najlepsze wakacje od lat! Domek jak z bajki, wszystko czyste i nowe. Dzieci zachwycone!",
      platform: "Google"
    },
    {
      author: "Robert Jankowski",
      rating: 5,
      comment: "Rewelacyjne miejsce! Doskonała lokalizacja, blisko plaża i atrakcje. Na pewno wrócimy!",
      platform: "Booking.com"
    }
  ];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <picture className="absolute inset-0">
          <source media="(max-width: 768px)" srcSet={heroDroneMobile} />
          <img 
            src={heroDrone} 
            alt="Lazur Resort w Rogowie - widok z drona"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-primary/30"></div>
        </picture>
        
        <div className="relative z-10 text-center text-white px-4 fade-in-up">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 opacity-90 max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>
          
          
          <Button asChild className="btn-luxury text-lg px-12 py-6">
            <Link to="/rezerwacja">{t('button.book')}</Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            {t('home.hero.description')}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section ref={addToRefs} className="py-20 scroll-reveal">
        <div className="container mx-auto px-4">

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
              <picture>
                <source media="(max-width: 768px)" srcSet={cottageExteriorMobile} />
                <img 
                  src={cottageExterior} 
                  alt="Domek Lazur Resort nad morzem w Rogowie" 
                  className="rounded-2xl shadow-luxury w-full" 
                  loading="lazy"
                  width="576"
                  height="512"
                />
              </picture>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-light tracking-tight">
                {t('home.cottages.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('home.cottages.description1')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('home.cottages.description2')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>{t('home.cottages.feature1')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>{t('home.cottages.feature2')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>{t('home.cottages.feature3')}</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-ocean rounded-full"></div>
                  <span>{t('home.cottages.feature4')}</span>
                </li>
              </ul>
              <Button asChild className="btn-luxury">
                <Link to="/galeria">{t('button.gallery')}</Link>
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
                <picture>
                  <source media="(max-width: 768px)" srcSet={cuteDogBeachMobile} />
                  <img 
                    src={cuteDogBeach} 
                    alt="Pobyt z psem nad morzem - domki przyjazne zwierzętom w Lazur Resort"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="576"
                    height="512"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-3">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <PawPrint size={16} weight="light" style={{ color: '#967d48' }} className="sm:hidden" />
                        <PawPrint size={24} weight="light" style={{ color: '#967d48' }} className="hidden sm:block" />
                      </div>
                      <h3 className="text-base sm:text-2xl font-medium">{t('home.pets.title')}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-1 sm:mb-3 text-xs sm:text-base">
                      {t('home.pets.desc')}
                    </p>
                    <ul className="space-y-0.5 text-xs sm:text-sm text-white/80">
                      <li>• {t('home.pets.feature1')}</li>
                      <li>• {t('home.pets.feature2')}</li>
                      <li>• {t('home.pets.feature3')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card overflow-hidden hover:shadow-luxury transition-all duration-300">
              <div className="relative aspect-[16/9] overflow-hidden">
                <picture>
                  <source media="(max-width: 768px)" srcSet={bicycleForestPathMobile} />
                  <img 
                    src={bicycleForestPath} 
                    alt="Wycieczki rowerowe po lasach - ścieżki rowerowe koło Lazur Resort"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="576"
                    height="512"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-3">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Bicycle size={16} weight="light" style={{ color: '#967d48' }} className="sm:hidden" />
                        <Bicycle size={24} weight="light" style={{ color: '#967d48' }} className="hidden sm:block" />
                      </div>
                      <h3 className="text-base sm:text-2xl font-medium">{t('home.bikes.title')}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed mb-1 sm:mb-3 text-xs sm:text-base">
                      {t('home.bikes.desc')}
                    </p>
                    <ul className="space-y-0.5 text-xs sm:text-sm text-white/80">
                      <li>• {t('home.bikes.feature1')}</li>
                      <li>• {t('home.bikes.feature2')}</li>
                      <li>• {t('home.bikes.feature3')}</li>
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
              {t('home.location.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('home.location.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin size={24} weight="light" className="text-ocean" />
                <div>
                  <h3 className="font-medium">{t('home.location.address')}</h3>
                  <p className="text-muted-foreground">{t('home.location.address.value')}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium">{t('home.location.directions')}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• {t('home.location.direction1')}</li>
                  <li>• {t('home.location.direction2')}</li>
                  <li>• {t('home.location.direction3')}</li>
                  <li>• {t('home.location.direction4')}</li>
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
      <section ref={addToRefs} className="py-20 bg-muted scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('home.reviews.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.reviews.subtitle')}
            </p>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500 mr-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={20} weight="fill" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">{review.platform}</span>
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                          <div className="w-6 h-6 bg-primary rounded-full"></div>
                        </div>
                        <span className="font-medium">{review.author}</span>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>;
};
export default Homepage;
