import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car } from '@phosphor-icons/react';

const OkolicaMrzezyna = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              Domki na wynajem <span className="text-primary">Mrzeżyno</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Odkryj urok Mrzeżyna - spokojnego miasteczka nad Bałtykiem z piękną plażą i autentyczną atmosferą.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Car size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Odległość</h3>
                <p className="text-foreground/70">8 km od Lazur Resort</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Clock size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Czas dojazdu</h3>
                <p className="text-foreground/70">10 minut samochodem</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <MapPin size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Typ miejscowości</h3>
                <p className="text-foreground/70">Nadmorska wieś</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <h2 className="text-2xl font-light text-foreground mb-6">Co warto zobaczyć w Mrzeżynie?</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Plaża w Mrzeżynie</h3>
                <p>
                  Szeroka, piaszczysta plaża z czystym piaskiem i łagodnym zejściem do morza. 
                  Idealna dla rodzin z dziećmi. Plaża jest mniej zatłoczona niż te w większych kurortach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Port rybacki</h3>
                <p>
                  Malowniczy port z kolorowymi kutrami rybackimi. Można tu kupić świeże ryby 
                  bezpośrednio od rybaków lub skosztować regionalnych specjałów w portowych barach.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Ścieżka przyrodnicza</h3>
                <p>
                  Oznakowana ścieżka prowadząca przez nadmorskie wydmy i lasy. 
                  Doskonała na spacery i obserwację lokalnej flory i fauny.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Latarnia morska</h3>
                <p>
                  Charakterystyczna latarnia morska, która służy jako punkt orientacyjny 
                  i popularne miejsce fotografowania zachodu słońca.
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

export default OkolicaMrzezyna;