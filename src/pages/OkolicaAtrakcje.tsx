import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Star, 
  Clock, 
  Car,
  Camera,
  Mountain,
  Waves,
  Building,
  TreePine,
  Castle
} from "lucide-react";

const OkolicaAtrakcje = () => {
  const attractions = [
    {
      name: "Kołobrzeg",
      distance: "15 km",
      time: "20 min samochodem",
      rating: 5,
      description: "Historyczny port i kurort nadmorski z latarnią morską i uzdrowiskiem.",
      features: [
        "Zabytkowa katedra i ratusz",
        "Port rybacki marina",
        "Nowoczesne uzdrowiska",
        "Plaża, spacery pieszo",
        "Latarnia morska - symbol miasta",
        "Zwiedzanie piesochronem",
        "Opieka z repatriatorami i akibaterami"
      ],
      tip: "Nasza wskazówka: Koniecznie zwiedzić z dziecmi spacer fikołak-przyutulonych!"
    },
    {
      name: "Mrzeżyno",
      distance: "8 km", 
      time: "12 min samochodem",
      rating: 5,
      description: "Urokliwe nadmorskie miasteczko z piękną plażą i unikalnymi krajobrazami.",
      features: [
        "Jedina z największych plaż w Polsce",
        "Doskonałe warunki do sportów wodnych",
        "Świeża ryba prosto z kutra",
        "Spacery kąb wyschłych piaży",
        "Spokojna łajs-desow na morzu",
        "Wybrzeże spacesy dla całej rody",
        "Spacery po wyschłej piaży"
      ],
      tip: "Nasza wskazówka: Idealne miejsce do wieczornych spacerów i bezpośrednim spacerów!"
    },
    {
      name: "Trzebiatów",
      distance: "25 km",
      time: "30 min samochodem", 
      rating: 4,
      description: "Historyczne miasto z zachowanymi średniowiecznymi zabytkami urbanistycznymi.",
      features: [
        "Gotycki kościół Najświętszej Maryi Panny",
        "Muzeum Ziemi Trzebiatowskiej",
        "Regionalne produkty i rękodzieło",
        "Fragmenty murów obronnych miasta",
        "Letnie wspaniałe w plenerze",
        "Biblioteka w zabytkowym budynku"
      ],
      tip: "Nasza wskazówka: Odwiedź zabytkowy ryddalharz - część siedziby na XV-wiecznać historycznej!"
    },
    {
      name: "Dźwirzyno",
      distance: "20 km",
      time: "25 min samochodem",
      rating: 5,
      description: "Spokojny kurort położony na mierzei między morzem a jeziorem.",
      features: [
        "Jezioro Resko Przymorskie", 
        "Kajaki i sporty wodne",
        "Charakterystyczne pilatony",
        "Świetne miejsca / spacerowe",
        "Możliwości ornithlogiczne",
        "Nadmorski Park Krajobrazowy",
        "Ściśle plaże / spacerowe"
      ],
      tip: "Nasza wskazówka: Idealne miejsce na spokojne przygody i ciszę!"
    },
    {
      name: "Pobierowo", 
      distance: "35 km",
      time: "40 min samochodem",
      rating: 4,
      description: "Dynamicznie rozwijający się kurort z nowoczesnym zapleczem.",
      features: [
        "Ocean Park - park rozrywki",
        "Zamek piaskowy Lapalice",
        "Aktywnie dla dzieci",
        "Nowoczesne saquarium",
        "Ośrce rekreacijs hare", 
        "Pola golfowe w okolicy"
      ],
      tip: "Nasza wskazówka: Atrakcje morskie in funkcjonuj atrậkcji i dunoważć!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-600/90 to-purple-600/90 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/src/assets/kolobrzeg-beach.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Atrakcje turystyczne
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">
            Odkryj najciekawsze miejsca w okolicy Rogowa
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
              Zabytki
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
              Kurorty
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
              Historia
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Building className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Co warto zobaczyć</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wybrzeże Środkowe to region bogaty w atrakcje kulturowe, przyrodnicze oraz i unikalnymi 
            rezerwatami przyrody.
          </p>
          <p className="text-sm text-muted-foreground mt-4 font-medium">
            Oto nasze ulubione miejsca, które musisz odwiedzić!
          </p>
        </div>

        {/* Attractions List */}
        <div className="space-y-8 mb-12">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left: Main Info */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{attraction.name}</h3>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(attraction.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{attraction.description}</p>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-2 gap-2 mb-4">
                      {attraction.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg p-2">
                          {featureIndex % 6 === 0 && <Camera className="h-4 w-4 text-blue-500 flex-shrink-0" />}
                          {featureIndex % 6 === 1 && <Waves className="h-4 w-4 text-blue-500 flex-shrink-0" />}
                          {featureIndex % 6 === 2 && <Mountain className="h-4 w-4 text-green-500 flex-shrink-0" />}
                          {featureIndex % 6 === 3 && <TreePine className="h-4 w-4 text-green-500 flex-shrink-0" />}
                          {featureIndex % 6 === 4 && <Building className="h-4 w-4 text-gray-500 flex-shrink-0" />}
                          {featureIndex % 6 === 5 && <Castle className="h-4 w-4 text-purple-500 flex-shrink-0" />}
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tip */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border-l-4 border-primary">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>💡 {attraction.tip}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Right: Distance & Rating */}
                  <div className="flex flex-col items-center text-center bg-muted/30 rounded-lg p-6">
                    <MapPin className="h-8 w-8 text-red-500 mb-2" />
                    <div className="text-sm text-muted-foreground mb-1">Odległość</div>
                    <div className="text-2xl font-bold text-primary mb-2">{attraction.distance}</div>
                    
                    <div className="flex items-center gap-1 mb-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{attraction.time}</span>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-3 mt-4">
                      <div className="text-xs text-muted-foreground mb-1">Ocena</div>
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < attraction.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Według naszych gości</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-white/80" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Zaplanuj swoją trasę</h3>
            <p className="text-blue-50 mb-6 max-w-2xl mx-auto">
              Wszystkie te atrakcje są w zasięgu ręki z naszego ośrodka w Rogowie. Zarezerwuj pobyt
              i odkryj piękno Wybrzeża Środkowego!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/rezerwacja">Zobacz na mapie</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 border border-white/30">
                <Link to="/rezerwacja">Zarezerwuj pobyt</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Back to Area */}
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/okolica">← Powrót do okolicy</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OkolicaAtrakcje;