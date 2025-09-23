import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Car, Anchor, Tree, Camera } from '@phosphor-icons/react';
import mrzezynaImage from '@/assets/port-w-mrzezynie.jpg';

const OkolicaMrzezyna = () => {
  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Image and Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-foreground mb-6 hero-title">
                Mrzeżyno – <span className="text-primary">port rybacki i klimatyczne plaże</span>
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                 Mrzeżyno to nadmorska miejscowość z wyjątkowym klimatem, położona zaledwie 3 km 
                od Rogowa. Znana z urokliwego portu rybackiego, gdzie można obserwować kutry
                wypływające w morze i kupić świeże ryby prosto z łodzi.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  domki letniskowe Mrzeżyno
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  spokojna plaża
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  port rybacki
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  noclegi blisko morza
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={mrzezynaImage}
                alt="Widok na Mrzeżyno z lotu ptaka - urokliwa nadmorska miejscowość z portem rybackim"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-luxury"
                loading="lazy"
                width="400"
                height="320"
              />
            </div>
          </div>

          {/* Key Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Car size={32} style={{ color: '#967d48' }} className="mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Odległość</h3>
                <p className="text-foreground/70">3 km od Lazur Resort</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <Clock size={32} style={{ color: '#967d48' }} className="mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Czas dojazdu</h3>
                <p className="text-foreground/70">5 minut samochodem</p>
              </CardContent>
            </Card>
            <Card className="glass-card border-0">
              <CardContent className="p-6 text-center">
                <MapPin size={32} style={{ color: '#967d48' }} className="mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Typ miejscowości</h3>
                <p className="text-foreground/70">Nadmorska wieś</p>
              </CardContent>
            </Card>
          </div>

          {/* Attractions Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-light text-foreground mb-8 text-center">Co warto zobaczyć w Mrzeżynie?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin size={24} style={{ color: '#967d48' }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-3">Plaża w Mrzeżynie</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Szeroka, piaszczysta plaża z czystym piaskiem i łagodnym zejściem do morza. 
                        Duży atut są także nadmorskie kawiarnie, smażalnie i promenada.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Anchor size={24} style={{ color: '#967d48' }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-3">Port rybacki</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Znana z urokliwego portu rybackiego, gdzie można obserwować kutry 
                        wypływające w morze i kupić świeże ryby prosto z łodzi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Tree size={24} style={{ color: '#967d48' }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-3">Ścieżka przyrodnicza</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Oznakowana ścieżka prowadząca przez nadmorskie wydmy i lasy. 
                        Doskonała na spacery i obserwację lokalnej flory i fauny.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Camera size={24} style={{ color: '#967d48' }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-foreground mb-3">Latarnia morska</h3>
                      <p className="text-foreground/70 leading-relaxed">
                        Charakterystyczna latarnia morska, która służy jako punkt orientacyjny 
                        i popularne miejsce fotografowania zachodu słońca.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
