import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { House, Armchair, ChefHat, Shower, Table, TreeEvergreen, Fire, Car, WifiHigh, Bed, PawPrint, Waves, X, CaretLeft, CaretRight } from '@phosphor-icons/react';
import cottageExterior from '@/assets/cottage-exterior.jpg';
import cottageExteriorMobile from '@/assets/cottage-exterior-mobile.webp';
import altana from '@/assets/altana.webp';
import domekBok from '@/assets/domek-bok.webp';
import domekNaDzialce from '@/assets/domek-na-dzialce.webp';
import domekPrzod from '@/assets/domek-przod.webp';
import domekZTarasem from '@/assets/domek-z-tarasem.webp';
import domekZewnatrz from '@/assets/domekzewnatrz.webp';
import kanapa from '@/assets/kanapa.webp';
import kuchnia from '@/assets/kuchnia.webp';
import pomostOZmierzchu from '@/assets/pomost-o-zmierzchu.webp';
import sypialnia from '@/assets/sypialnia.webp';
import tarasWieczorem from '@/assets/taras-wieczorem.webp';
import tarasZDachu from '@/assets/taras-z-dachu.webp';
import wejscieDoDomu from '@/assets/wejscie-do-domku.webp';
import widokNaLas from '@/assets/widok-na-las.webp';
import lazienka from '@/assets/widok-z-ogrodu.webp';
import wnetrzeSalon from '@/assets/wnetrze-salon.webp';
import zachodNadJeziorem from '@/assets/zachod-nad-jeziorem.webp';

const Galeria = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [currentGallery, setCurrentGallery] = useState<'exterior' | 'interior'>('exterior');

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

  const exteriorImages = [
    { src: domekZewnatrz, srcMobile: domekZewnatrz, alt: 'Domek Lazur Resort od zewnątrz - luksusowy domek letniskowy nad morzem' },
    { src: domekPrzod, srcMobile: domekPrzod, alt: 'Domek na działce - widok ogólny całej nieruchomości' },
    { src: domekNaDzialce, srcMobile: domekNaDzialce, alt: 'Widok boczny domku - architektura i otoczenie' },
    { src: domekBok, srcMobile: domekBok, alt: 'Główne wejście do domku - eleganckie i funkcjonalne wejście' },
    { src: domekZTarasem, srcMobile: domekZTarasem, alt: 'Domek z tarasem - przestrzeń do relaksu na świeżym powietrzu' },
    { src: tarasZDachu, srcMobile: tarasZDachu, alt: 'Widok tarasu z perspektywy dachu - panorama okolicy' },
    { src: wejscieDoDomu, srcMobile: wejscieDoDomu, alt: 'Wejście do domku - stylowe i komfortowe wejście' },
    { src: altana, srcMobile: altana, alt: 'Altana ogrodowa - dodatkowa przestrzeń relaksowa' },
    { src: tarasWieczorem, srcMobile: tarasWieczorem, alt: 'Taras wieczorem - romantyczny nastrój i atmosfera' },
    { src: widokNaLas, srcMobile: widokNaLas, alt: 'Widok na las z okolic domku - bliskość natury' },
    { src: pomostOZmierzchu, srcMobile: pomostOZmierzchu, alt: 'Pomost o zmierzchu - spokojne miejsce nad wodą' },
    { src: zachodNadJeziorem, srcMobile: zachodNadJeziorem, alt: 'Zachód słońca nad jeziorem - malownicze widoki' },
  ];

  const interiorImages = [
    { src: wnetrzeSalon, srcMobile: wnetrzeSalon, alt: 'Salon z rozkładaną sofą - komfortowa przestrzeń wypoczynkowa dla 8 osób' },
    { src: kanapa, srcMobile: kanapa, alt: 'Wygodna kanapa w salonie - miejsce relaksu dla całej rodziny' },
    { src: kuchnia, srcMobile: kuchnia, alt: 'Kuchnia z pełnym wyposażeniem - nowoczesne urządzenia AGD' },
    { src: sypialnia, srcMobile: sypialnia, alt: 'Sypialnia - komfortowe łóżko i przytulne wnętrze' },
    { src: lazienka, srcMobile: lazienka, alt: 'Widok na łazienkę z prysznicem' },
  ];

  const allImages = [...exteriorImages, ...interiorImages];

  const openLightbox = useCallback((index: number, gallery: 'exterior' | 'interior') => {
    const galleryOffset = gallery === 'exterior' ? 0 : exteriorImages.length;
    setSelectedImageIndex(galleryOffset + index);
    setCurrentGallery(gallery);
  }, [exteriorImages.length]);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : allImages.length - 1;
      setSelectedImageIndex(newIndex);
      setCurrentGallery(newIndex < exteriorImages.length ? 'exterior' : 'interior');
    }
  }, [selectedImageIndex, allImages.length, exteriorImages.length]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex < allImages.length - 1 ? selectedImageIndex + 1 : 0;
      setSelectedImageIndex(newIndex);
      setCurrentGallery(newIndex < exteriorImages.length ? 'exterior' : 'interior');
    }
  }, [selectedImageIndex, allImages.length, exteriorImages.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex !== null) {
        switch (event.key) {
          case 'Escape':
            closeLightbox();
            break;
          case 'ArrowLeft':
            goToPrevious();
            break;
          case 'ArrowRight':
            goToNext();
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, goToPrevious, goToNext]);

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

      {/* Exterior Gallery */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
            Widoki zewnętrzne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {exteriorImages.map((image, index) => (
              <Card
                key={index}
                className="glass-card overflow-hidden hover:shadow-luxury transition-all duration-300 group cursor-pointer"
                onClick={() => openLightbox(index, 'exterior')}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={image.srcMobile} />
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="576"
                      height="512"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-light tracking-tight mb-8 text-center">
            Wnętrza domków
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorImages.map((image, index) => (
              <Card
                key={index}
                className="glass-card overflow-hidden hover:shadow-luxury transition-all duration-300 group cursor-pointer"
                onClick={() => openLightbox(index, 'interior')}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <picture>
                    <source media="(max-width: 768px)" srcSet={image.srcMobile} />
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="576"
                      height="512"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
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
                  <House size={16} weight="light" style={{ color: '#967d48' }} />
                  2 sypialnie dla maksymalnie 8 osób
                </li>
                <li className="flex items-center gap-2">
                  <Armchair size={16} weight="light" style={{ color: '#967d48' }} />
                  Salon z rozkładaną sofą
                </li>
                <li className="flex items-center gap-2">
                  <ChefHat size={16} weight="light" style={{ color: '#967d48' }} />
                  Kuchnia z pełnym wyposażeniem
                </li>
                <li className="flex items-center gap-2">
                  <Shower size={16} weight="light" style={{ color: '#967d48' }} />
                  Łazienka z prysznicem
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Strefa relaksu</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Table size={16} weight="light" style={{ color: '#967d48' }} />
                  Duży taras z meblami
                </li>
                <li className="flex items-center gap-2">
                  <TreeEvergreen size={16} weight="light" style={{ color: '#967d48' }} />
                  Prywatny ogród
                </li>
                <li className="flex items-center gap-2">
                  <Fire size={16} weight="light" style={{ color: '#967d48' }} />
                  Miejsce na grilla
                </li>
                <li className="flex items-center gap-2">
                  <Car size={16} weight="light" style={{ color: '#967d48' }} />
                  Parking przy domku
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Udogodnienia</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <WifiHigh size={16} weight="light" style={{ color: '#967d48' }} />
                  WiFi i telewizja
                </li>
                <li className="flex items-center gap-2">
                  <Bed size={16} weight="light" style={{ color: '#967d48' }} />
                  Pościel i ręczniki
                </li>
                <li className="flex items-center gap-2">
                  <PawPrint size={16} weight="light" style={{ color: '#967d48' }} />
                  Miejsce dla zwierząt
                </li>
                <li className="flex items-center gap-2">
                  <Waves size={16} weight="light" style={{ color: '#967d48' }} />
                  400m do plaży
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95">
          <div className="relative w-full h-[95vh] flex items-center justify-center">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X size={24} />
            </Button>

            {/* Previous button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
              onClick={goToPrevious}
            >
              <CaretLeft size={32} />
            </Button>

            {/* Next button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
              onClick={goToNext}
            >
              <CaretRight size={32} />
            </Button>

            {/* Image */}
            {selectedImageIndex !== null && (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={allImages[selectedImageIndex].src}
                  alt={allImages[selectedImageIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}

            {/* Image counter and description */}
            {selectedImageIndex !== null && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
                <p className="text-sm mb-2">
                  {selectedImageIndex + 1} / {allImages.length}
                </p>
                <p className="text-sm max-w-lg mx-auto px-4">
                  {allImages[selectedImageIndex].alt}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Galeria;
