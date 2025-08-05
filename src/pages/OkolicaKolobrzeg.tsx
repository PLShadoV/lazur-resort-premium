import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car } from '@phosphor-icons/react';

const OkolicaKolobrzeg = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              Domki na wynajem <span className="text-primary">Kołobrzeg</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Największy kurort nadmorski regionu z bogatą historią, licznymi atrakcjami i doskonałą infrastrukturą.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Car size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Odległość</h3>
                <p className="text-foreground/70">15 km od Lazur Resort</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Clock size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Czas dojazdu</h3>
                <p className="text-foreground/70">20 minut samochodem</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <MapPin size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Typ miejscowości</h3>
                <p className="text-foreground/70">Miasto-kurort</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <h2 className="text-2xl font-light text-foreground mb-6">Atrakcje Kołobrzegu</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Starówka i Port</h3>
                <p>
                  Zabytkowa starówka z gotycką katedrą i miejskimi fortyfikacjami. 
                  Nowoczesny port z restauracjami, sklepami i wypożyczalniami sprzętu wodnego.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Promenada nadmorska</h3>
                <p>
                  Kilkukilometrowa promenada z punktami gastronomicznymi, atrakcjami dla dzieci 
                  i punktami widokowymi. Idealna na spacery o każdej porze dnia.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Sanatorium i SPA</h3>
                <p>
                  Liczne ośrodki wellness wykorzystujące lecznicze właściwości morskiego klimatu. 
                  Możliwość skorzystania z zabiegów spa i terapii solankowych.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Muzea i zabytki</h3>
                <p>
                  Muzeum Oręża Polskiego, Bazylika Katedralna, ruiny średniowiecznych fortyfikacji. 
                  Bogate dziedzictwo historyczne miasta.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Wydarzenia kulturalne</h3>
                <p>
                  Festiwal piosenki żeglarskiej "Shanties", koncerty letnie, 
                  targi regionalne i wydarzenia sportowe przez cały sezon.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="btn-luxury mr-4">
              <Link to="/rezerwacja">Zarezerwuj pobyt</Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/okolica">Wróć do okolicy</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OkolicaKolobrzeg;