import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car } from '@phosphor-icons/react';

const OkolicaDzwirzyno = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              Domki na wynajem <span className="text-primary">Dźwirzyno</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Wyjątkowe miejsce między morzem a jeziorem Resko Przymorskie - raj dla miłośników natury.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Car size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Odległość</h3>
                <p className="text-foreground/70">12 km od Lazur Resort</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Clock size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Czas dojazdu</h3>
                <p className="text-foreground/70">15 minut samochodem</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <MapPin size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Typ miejscowości</h3>
                <p className="text-foreground/70">Kurort nadmorski</p>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <h2 className="text-2xl font-light text-foreground mb-6">Atrakcje Dźwirżyna</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Jezioro Resko Przymorskie</h3>
                <p>
                  Największa atrakcja regionu - jezioro słodkowodne oddzielone od morza tylko wąskim pasem lądu. 
                  Idealne do pływania, wędkowania i sportów wodnych.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Plaża morska</h3>
                <p>
                  Szeroka plaża z drobnym piaskiem, otoczona wydmami porośniętymi sosną. 
                  Mniej zatłoczona niż inne nadmorskie kurorty.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Wypożyczalnie sprzętu wodnego</h3>
                <p>
                  Możliwość wypożyczenia kajaków, rowerów wodnych, desek SUP oraz sprzętu wędkarskiego. 
                  Doskonałe warunki do aktywnego wypoczynku na wodzie.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Ścieżki spacerowe</h3>
                <p>
                  Malownicze ścieżki wokół jeziora i przez nadmorskie lasy. 
                  Idealne na romantyczne spacery i obserwację ptaków.
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

export default OkolicaDzwirzyno;