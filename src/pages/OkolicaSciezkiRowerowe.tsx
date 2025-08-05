import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bicycle, Clock, MapPin, Star } from '@phosphor-icons/react';

const OkolicaSciezkiRowerowe = () => {
  const bikeRoutes = [
    {
      name: 'Trasa Rogowo - Mrzeżyno',
      distance: '8 km',
      difficulty: 'Łatwa',
      time: '30 min',
      description: 'Malownicza trasa przez pola i lasy prowadząca do morza',
      highlights: ['Widoki na pola', 'Droga przez las', 'Zakończenie na plaży'],
    },
    {
      name: 'Pętla jeziora Resko',
      distance: '15 km',
      difficulty: 'Średnia',
      time: '1 godz',
      description: 'Okrężna trasa wokół jeziora Resko Przymorskie',
      highlights: ['Widoki na jezioro', 'Obserwacja ptaków', 'Miejsca na piknik'],
    },
    {
      name: 'Szlak nadmorski Mrzeżyno-Dźwirzyno',
      distance: '12 km',
      difficulty: 'Łatwa',
      time: '45 min',
      description: 'Trasa wzdłuż wybrzeża z pięknymi widokami na Bałtyk',
      highlights: ['Panorama morza', 'Wydmy i plaże', 'Port w Mrzeżynie'],
    },
    {
      name: 'Trasa do Kołobrzegu',
      distance: '25 km',
      difficulty: 'Trudna',
      time: '1.5 godz',
      description: 'Dłuższa wycieczka do największego kurortu w okolicy',
      highlights: ['Starówka Kołobrzegu', 'Latarnia morska', 'Promenada'],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Łatwa': return 'text-green-600';
      case 'Średnia': return 'text-yellow-600';
      case 'Trudna': return 'text-red-600';
      default: return 'text-foreground/70';
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-foreground mb-6">
              <span className="text-primary">Ścieżki rowerowe</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Odkryj piękno Pomorza Zachodniego na dwóch kółkach. Przygotowaliśmy dla Was 
              przewodnik po najpiękniejszych trasach rowerowych w okolicy Rogowa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {bikeRoutes.map((route, index) => (
              <Card key={index} className="glass-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-foreground">{route.name}</h3>
                    <Bicycle size={24} className="text-primary" />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <MapPin size={16} className="text-primary mx-auto mb-1" />
                      <p className="text-sm text-foreground/70">{route.distance}</p>
                    </div>
                    <div className="text-center">
                      <Clock size={16} className="text-primary mx-auto mb-1" />
                      <p className="text-sm text-foreground/70">{route.time}</p>
                    </div>
                    <div className="text-center">
                      <Star size={16} className="text-primary mx-auto mb-1" />
                      <p className={`text-sm font-medium ${getDifficultyColor(route.difficulty)}`}>
                        {route.difficulty}
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-4">{route.description}</p>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Główne atrakcje:</h4>
                    <ul className="space-y-1">
                      {route.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-foreground/70 flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mb-12">
            <div className="max-w-lg">
              <Card className="glass-card border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-light text-foreground mb-6 text-center">
                    Przydatne informacje
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Bezpieczeństwo:</h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="break-words">• Zawsze używaj kasku</li>
                        <li className="break-words">• Jedź po prawej stronie drogi</li>
                        <li className="break-words">• Unikaj jazdy po zmroku</li>
                        <li className="break-words">• Zabierz telefon i wodę</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Najlepszy czas:</h3>
                      <ul className="space-y-2 text-foreground/80">
                        <li className="break-words">• Maj - Wrzesień (sezon letni)</li>
                        <li className="break-words">• Rano (mniej turystów)</li>
                        <li className="break-words">• Wczesnym wieczorem (piękne światło)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-luxury">
              <Link to="/rezerwacja">
                <span className="text-sm sm:text-base">Zarezerwuj pobyt</span>
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

export default OkolicaSciezkiRowerowe;