import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock, Camera, Waves, Umbrella, TreeEvergreen } from '@phosphor-icons/react';
import kolobrzegBeach from '@/assets/kolobrzeg-beach.jpg';
import latarniaKolobrzeg from '@/assets/latarnia-kolobrzeg.jpg';
import moloKolobrzeg from '@/assets/molo-kolobrzeg.jpg';

export const OkolicaKolobrzeg = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${kolobrzegBeach})`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Domki na wynajem Kołobrzeg
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Odkryj uroki nadmorskiego kurortu - plaże, uzdrowisko i niezapomniane wakacje
          </p>
        </div>
      </section>

      {/* About Kołobrzeg Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Kołobrzeg - Perła Polskiego Wybrzeża
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Kołobrzeg to jeden z najpopularniejszych kurortów nadmorskich w Polsce, 
                oferujący doskonałe warunki do wypoczynku i lecznictwa uzdrowiskowego. 
                Miasto słynie z pięknych, szerokich plaż, nowoczesnych ośrodków SPA 
                oraz bogatej historii.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nasze domki znajdują się w idealnej lokalizacji - zaledwie 15 km od centrum 
                Kołobrzegu, co pozwala cieszyć się spokojem natury i jednocześnie mieć 
                łatwy dostęp do wszystkich atrakcji miasta.
              </p>
            </div>
            <div className="relative">
              <img 
                src={latarniaKolobrzeg} 
                alt="Latarnia morska w Kołobrzegu" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beach Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src={moloKolobrzeg} 
                alt="Molo w Kołobrzegu" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Plaże i Nadmorska Infrastruktura
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Kołobrzeskie plaże to prawdziwa perła polskiego wybrzeża. Szerokie, 
                piaszczyste plaże ciągną się na kilometry, oferując idealne warunki 
                do plażowania, spacerów i aktywności wodnych.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <Waves size={40} style={{ color: '#967d48' }} className="mx-auto mb-2" />
                  <p className="font-medium">Czyste wody</p>
                </div>
                <div className="text-center">
                  <Umbrella size={40} style={{ color: '#967d48' }} className="mx-auto mb-2" />
                  <p className="font-medium">Wypożyczalnie</p>
                </div>
                <div className="text-center">
                  <TreeEvergreen size={40} style={{ color: '#967d48' }} className="mx-auto mb-2" />
                  <p className="font-medium">Park nadmorski</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Atrakcje Kołobrzegu
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Miasto pełne historii, kultury i nowoczesnych atrakcji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Starówka i Port</h3>
              <p className="text-muted-foreground mb-4">
                Zabytkowa starówka z gotycką katedrą i miejskimi fortyfikacjami. 
                Nowoczesny port z restauracjami i atrakcjami.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Promenada</h3>
              <p className="text-muted-foreground mb-4">
                Kilkukilometrowa promenada z punktami gastronomicznymi 
                i atrakcjami dla dzieci.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">SPA i Wellness</h3>
              <p className="text-muted-foreground mb-4">
                Liczne ośrodki wykorzystujące lecznicze właściwości 
                morskiego klimatu.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Muzea</h3>
              <p className="text-muted-foreground mb-4">
                Muzeum Oręża Polskiego, Bazylika Katedralna 
                i średniowieczne fortyfikacje.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Wydarzenia</h3>
              <p className="text-muted-foreground mb-4">
                Festiwal "Shanties", koncerty letnie 
                i wydarzenia sportowe.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4">Aktywności</h3>
              <p className="text-muted-foreground mb-4">
                Sporty wodne, wycieczki rowerowe 
                i spacery po parku nadmorskim.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Distance Info */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Jak dotrzeć z Lazur Resort
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <MapPin size={48} style={{ color: '#967d48' }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Odległość</h3>
                <p className="text-muted-foreground">15 km</p>
              </div>
              <div className="text-center">
                <Clock size={48} style={{ color: '#967d48' }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Czas dojazdu</h3>
                <p className="text-muted-foreground">20 minut</p>
              </div>
              <div className="text-center">
                <Camera size={48} style={{ color: '#967d48' }} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Typ miejscowości</h3>
                <p className="text-muted-foreground">Miasto-kurort</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OkolicaKolobrzeg;