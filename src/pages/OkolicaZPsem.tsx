import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, CheckCircle, MapPin } from '@phosphor-icons/react';

const OkolicaZPsem = () => {
  const petFriendlyFeatures = [
    'Ogrodzone tereny dla bezpiecznych spacerów',
    'Plaże przyjazne dla psów w pobliżu',
    'Miejsce na karmę i miski dla pupili',
    'Dostęp do weterynarza w okolicy',
    'Trasy spacerowe przez lasy i łąki',
    'Brak dodatkowych opłat za psa',
  ];

  const nearbyDogBeaches = [
    {
      name: 'Plaża dla psów Mrzeżyno',
      distance: '3 km',
      description: 'Wyznaczona strefa na plaży gdzie psy mogą swobodnie biegać',
    },
    {
      name: 'Plaża Dźwirzyno - sektor północny',
      distance: '12 km',
      description: 'Spokojny odcinek plaży idealny dla psów',
    },
    {
      name: 'Plaża Kołobrzeg - strefa wschodnia',
      distance: '15 km',
      description: 'Duża przestrzeń z możliwością kąpieli dla psów',
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              <span className="text-primary">Noclegi z psem</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Lazur Resort to idealne miejsce dla rodzin podróżujących ze swoimi czworonożnymi przyjaciółmi. 
              Zapewniamy komfort zarówno dla Was, jak i Waszych pupili.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <Heart size={40} className="text-primary mb-6" />
                <h2 className="text-2xl font-light text-foreground mb-6">
                  Dlaczego warto wybrać nas?
                </h2>
                <ul className="space-y-4">
                  {petFriendlyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardContent className="p-8">
                <MapPin size={40} className="text-primary mb-6" />
                <h2 className="text-2xl font-light text-foreground mb-6">
                  Plaże dla psów w okolicy
                </h2>
                <div className="space-y-4">
                  {nearbyDogBeaches.map((beach, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h3 className="font-medium text-foreground">{beach.name}</h3>
                      <p className="text-sm text-primary">{beach.distance} od resortu</p>
                      <p className="text-foreground/70 text-sm mt-1">{beach.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 mb-12">
            <h2 className="text-2xl font-light text-foreground mb-6">Zasady pobytu z psem</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Przed przyjazdem</h3>
                <p>
                  Prosimy o wcześniejsze zgłoszenie obecności psa podczas rezerwacji. 
                  Pies musi posiadać aktualne szczepienia i być zdrowy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Podczas pobytu</h3>
                <p>
                  Psy powinny być pod stałą opieką właściciela. Na terenie resortu obowiązuje smycz. 
                  Zapewniamy miejsce na karmienie i odpoczynek dla Waszego pupila.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-3">Spacery i aktywności</h3>
                <p>
                  Okoliczne lasy i łąki to doskonałe miejsce na długie spacery. 
                  Polecamy również wizyty na plażach przyjaznych dla psów, 
                  gdzie Wasze pupile mogą swobodnie biegać i bawić się w wodzie.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-luxury">
              <Link to="/rezerwacja">
                <span className="text-sm sm:text-base">Zarezerwuj z psem</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/okolica">
                <span className="text-sm sm:text-base">Wróć do okolicy</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OkolicaZPsem;