import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Clock, 
  TreePine,
  Waves,
  Mountain,
  Binoculars,
  Camera,
  Heart,
  Leaf,
  Sun,
  Fish
} from "lucide-react";

const OkolicaPlazePrzyroda = () => {
  const beaches = [
    {
      name: "Plaża w Rogowie",
      distance: "350 m",
      type: "Piaszczysta, szeroka",
      description: "Nasza najbliższa plaża to prawdziwa perełka Słowińskiego Wybrzeża, piaszczysta i szeroka z legendarnymi zachodami słońca nad morzem.",
      features: [
        "Piękny, złocisty piasek",
        "Łagodnie zjście do wody", 
        "Idealna dla rodzin z dziećmi",
        "Strefa przyjazna psom"
      ]
    },
    {
      name: "Plaża w Mrzeżynie", 
      distance: "3 km",
      type: "Dzika, naturalna",
      description: "Dzika plaża dla miłośników nietknietej przyrody. Warto wybrać się z aparatem na spacer z czworonożnym przyjacielem.",
      features: [
        "Czasem można spotkać foki",
        "Raj dla fotografów przyrody",
        "Wydmy porośnięte trawą",
        "Możliwość spotkania dzikich zwierząt"
      ]
    }
  ];

  const trails = [
    {
      name: "Ścieżka rowerowa Rogowo-Mrzeżyno",
      length: "3 km",
      difficulty: "Łatwa",
      image: "/src/assets/sciezki-rowerowe-mrzezyno.jpg",
      features: [
        "Bezpieczna, oznakowana trasa",
        "Prowadzi przez piękny las iglasty",
        "Odpowiednia dla całej rodziny",
        "Bogata fauna i flora",
        "Miejsca odpoczynku na trasie",
        "Dostęp do punktów wypoczynku"
      ]
    },
    {
      name: "Szlak nadmorski Kołobrzeg-Dźwirzyno", 
      length: "25 km",
      difficulty: "Średnia",
      image: "/src/assets/coastal-bike-path.jpg", 
      features: [
        "Spektakularne widoki na morze",
        "Przechodzi przez parki krajobrazowe", 
        "Miejsca na obserwacje",
        "Restauracje na trasie",
        "Niezapomniane widoki na zachody słońca",
        "Miejsca odpoczynku z widokiem na morze"
      ]
    }
  ];

  const reserves = [
    {
      name: "Nadmorski Park Krajobrazowy",
      distance: "18 km", 
      type: "Krajobrazowy",
      description: "Rozległy park chroniący unikalne ekosystemy polskiego wybrzeża.",
      features: [
        "🏞️ Różnorodne ekosystemy",
        "🦅 Ponad 200 gatunków ptaków",
        "🌊 Klify i wydmy",
        "🥾 Sieć szlaków turystycznych",
        "🏕️ Miejsca biwakowe",
        "🌲 Lasy nadmorskie"
      ]
    }
  ];

  const activities = [
    {
      icon: <Binoculars className="h-8 w-8" />,
      title: "🚴‍♀️ Wypożyczenie rowerów", 
      description: "Zajrzyj nad tą przypadająrem rogate. Oferny upływetown dostępne oklicznym sposobem sieosińnasteba w daidingy."
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "🌅 Najlepsze pory",
      description: "Wschody słońca na plaży to niezapomniane przeżycie - warto wstać wcześniej!"
    },
    {
      icon: <Fish className="h-8 w-8" />,
      title: "📱 Aplikacje",
      description: "Pobierz aplikacje do rozpoznawania ptaków i roślin - zwiedzanie będzie ciekawsze!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/30 to-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-emerald-600/90 to-blue-600/90 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/src/assets/bicycle-forest-path.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-blue-900/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Plaże i przyroda
          </h1>
          <p className="text-lg md:text-xl mb-8 text-emerald-50">
            Odkryj naturalne piękno Wybrzeża Środkowego
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Beaches Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Waves className="h-12 w-12 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Nasze ulubione plaże</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Od spokojnych rodzinnych plaż po dzikie wybrzeża - każdy znajdzie coś dla siebie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {beaches.map((beach, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{beach.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>{beach.distance}</span>
                      </div>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                        {beach.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{beach.description}</p>

                  <div className="grid grid-cols-1 gap-2">
                    {beach.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trails Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <TreePine className="h-12 w-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Szlaki i ścieżki</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Odkryj region na rowerze lub pieszo - przygotowaliśmy najlepsze trasy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {trails.map((trail, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${trail.image}')` }}
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{trail.name}</h3>
                  
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{trail.length}</span>
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                      {trail.difficulty}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {trail.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nature Reserves Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Leaf className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Rezerwaty przyrody</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unikalne ekosystemy i rzadkie gatunki flory i fauny
            </p>
          </div>

          {reserves.map((reserve, index) => (
            <Card key={index} className="mb-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold mb-2">{reserve.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{reserve.distance}</span>
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                        {reserve.type}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{reserve.description}</p>

                    <div className="grid md:grid-cols-2 gap-2">
                      {reserve.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg p-2">
                          <Leaf className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 text-center">
                    <div className="text-sm text-muted-foreground mb-2">Ochrona wybrzeża</div>
                    <div className="text-lg font-bold text-green-600">Gatunki chronione</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Activities Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white overflow-hidden mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Sun className="h-12 w-12 text-white/80 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">🌊 Wskazówki dla aktywnych</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-white/80">
                    {activity.icon}
                  </div>
                  <h4 className="font-bold mb-2">{activity.title}</h4>
                  <p className="text-blue-50 text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Back to Area */}
        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/okolica">← Powrót do okolicy</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OkolicaPlazePrzyroda;