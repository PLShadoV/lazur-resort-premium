import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Car, 
  Bus, 
  Plane, 
  Train,
  MapPin,
  Clock,
  Phone,
  Info,
  Navigation,
  Fuel,
  ParkingCircle
} from "lucide-react";

const OkolicaTransport = () => {
  const transportOptions = [
    {
      type: "Samochód",
      icon: <Car className="h-12 w-12" />,
      distance: "Różne",
      description: "Najwygodniejszy sposób dotarcia do nas z pełną kontrolą nad czasem i trasą podróży.",
      routes: [
        {
          from: "Warszawa",
          distance: "520 km",
          time: "5h 30min",
          route: "A2 → A1 → S6 → DK163 → Rogowo"
        },
        {
          from: "Gdańsk", 
          distance: "170 km",
          time: "2h 15min",
          route: "A1 → S6 → DK163 → Rogowo"
        },
        {
          from: "Wrocław",
          distance: "420 km", 
          time: "4h 45min",
          route: "A4 → A18 → S3 → S6 → DK163 → Rogowo"
        },
        {
          from: "Kraków",
          distance: "650 km",
          time: "6h 30min", 
          route: "A4 → A1 → S6 → DK163 → Rogowo"
        }
      ],
      tips: [
        "🅿️ Bezpłatny parking przy domkach",
        "⛽ Stacje benzynowe co 50-100 km",
        "🍔 Restauracje przy głównych trasach",
        "📱 Polecamy nawigację GPS",
        "🚗 Płatne odcinki autostrad A1, A2, A4"
      ]
    },
    {
      type: "Komunikacja publiczna",
      icon: <Bus className="h-12 w-12" />,
      distance: "5 km do przystanku",
      description: "Autobusy i pociągi oferują dobrą alternatywę dla transportu publicznego.",
      routes: [
        {
          from: "Warszawa",
          time: "6-8h",
          route: "Pociąg do Koszalina → autobus lokalny",
          details: "Warszawa Centralna → Koszalin → Białogard → Rogowo"
        },
        {
          from: "Gdańsk",
          time: "3-4h", 
          route: "Pociąg/autobus do Słupska → transfer",
          details: "Słupsk → autobus regionalny → Rogowo"
        },
        {
          from: "Szczecin",
          time: "3h",
          route: "Autobus do Kołobrzegu → dalej lokalny", 
          details: "Szczecin → Kołobrzeg → autobus lokalny"
        }
      ],
      tips: [
        "🎫 Bilety można kupić online",
        "📞 Sprawdź rozkłady przed wyjazdem",
        "🚌 Z Kołobrzegu do Rogowo lokalny autobus",
        "🚕 Taxi z Kołobrzegu ok. 40 zł",
        "📱 Aplikacja jakdojade.pl pomoże planować"
      ]
    },
    {
      type: "Samolot + transfer",
      icon: <Plane className="h-12 w-12" />,
      distance: "Różne lotniska",
      description: "Najszybszy sposób dla podróży z dalekich miast i zagranicy.",
      routes: [
        {
          airport: "Gdańsk (GDN)",
          distance: "160 km do Rogowa",
          time: "2h transfer",
          details: "Linie: LOT i międzynarodowe → szeroka siatka połączeń" 
        },
        {
          airport: "Szczecin (SZZ)", 
          distance: "120 km do Rogowa",
          time: "1h 30min transfer",
          details: "✈️ Loty krajowe i międzynarodowe + transfer busem lub samochodem"
        },
        {
          airport: "Berlin (BER)",
          distance: "220 km do Rogowa", 
          time: "2h 30min transfer",
          details: "✈️ Loty międzynarodowe + transfer - wygodna opcja z zagranicy"
        }
      ],
      tips: [
        "Rezerwuj transfer z wyprzedzeniem",
        "Wypożyczalnie samochodów na lotniskach",
        "Sprawdź połączenia przed podróżą", 
        "Transfer busem lub taksówką",
        "Rezerwacja online zalecana",
        "Routes путاद़چ homticardeau czasztub conjosail stet"
      ]
    }
  ];

  const localTransport = {
    bus: {
      title: "Autobus lokalny",
      routes: ["Rogowo - Kołobrzeg", "Rogowo - Mrzeżyno", "Rogowo - Trzebiatów"],
      schedule: "Co 2-3 godziny",
      price: "3-8 zł",
      tip: "Sprawdź rozkład w recepcji lub online"
    },
    taxi: {
      title: "Taxi", 
      companies: [
        { name: "Taxi Kołobrzeg", phone: "+48 94 352 22 22" },
        { name: "Radio Taxi", phone: "+48 94 354 54 54" }
      ],
      coverage: "Całą okolicę",
      price: "2-3 zł/km",
      note: "Zamów wcześniej, szczególnie wieczorem"
    },
    bikeRental: {
      title: "Wypożyczenie rowerów",
      locations: ["Rogowo centrum", "Kołobrzeg", "Mrzeżyno"],
      price: "20-40 zł/dzień",
      routes: "Ponad 50 km ścieżek rowerowych",
      tip: "Świetny sposób na zwiedzanie okolicy"
    },
    carRental: {
      title: "Wypożyczenie samochodów", 
      companies: ["Avis", "Hertz", "Wypożyczalnie lokalne"],
      locations: ["Kołobrzeg centrum", "Lotnisko Gdańsk"],
      price: "100-200 zł/dzień",
      tip: "Rezerwuj z wyprzedzeniem w sezonie"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-blue-600/90 to-indigo-600/90 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/src/assets/coastal-bike-path.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Transport i dojazd
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-50">
            Wszystko co musisz wiedzieć o dotarciu do naszych domków
          </p>
          <p className="text-sm text-blue-100">
            Około 4-5h z Warszawy - łatwy dojazd!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* How to reach us */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Navigation className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Jak do nas dojechać</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rogowo jest doskonale skomunikowane z największymi miastami w Polsce. Wybierz 
            najlepszy dla siebie sposób podróży.
          </p>
        </div>

        {/* Transport Options */}
        <div className="space-y-8 mb-12">
          {transportOptions.map((transport, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Icon and Type */}
                  <div className="text-center">
                    <div className="flex justify-center mb-4 text-primary">
                      {transport.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{transport.type}</h3>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{transport.distance}</span>
                    </div>
                  </div>

                  {/* Routes */}
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">Trasy dojazdu</h4>
                    <div className="space-y-3">
                      {transport.routes.map((route, routeIndex) => (
                        <div key={routeIndex} className="bg-muted/50 rounded-lg p-3">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium">{route.from || route.airport}</span>
                            <div className="text-right text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                {route.distance && <MapPin className="h-3 w-3" />}
                                <span>{route.distance}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{route.time}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {route.route || route.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 className="font-semibold mb-3">Przydatne wskazówki</h4>
                    <div className="space-y-2">
                      {transport.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2 text-sm">
                          <Info className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-muted-foreground text-sm">{transport.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <Bus className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">🚌 Komunikacja lokalna</h3>
              <p className="text-muted-foreground">
                Poruszanie się po okolicy - autobusy, taxi, rowery i wypożyczalnie samochodów
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Local Bus */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Bus className="h-5 w-5 text-blue-500" />
                  {localTransport.bus.title}
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Trasy: </span>
                  </div>
                  <div className="ml-4">
                    {localTransport.bus.routes.map((route, index) => (
                      <div key={index}>• {route}</div>
                    ))}
                  </div>
                  <div>
                    <span className="font-medium">Częstotliwość: </span>
                    {localTransport.bus.schedule}
                  </div>
                  <div>
                    <span className="font-medium">Cena: </span>
                    {localTransport.bus.price}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    💡 Wskazówka: {localTransport.bus.tip}
                  </div>
                </div>
              </div>

              {/* Taxi */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Car className="h-5 w-5 text-green-500" />
                  {localTransport.taxi.title}
                </h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Firmy:</span></div>
                  {localTransport.taxi.companies.map((company, index) => (
                    <div key={index} className="flex items-center gap-2 ml-4">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{company.name}:</span>
                      <span>{company.phone}</span>
                    </div>
                  ))}
                  <div>
                    <span className="font-medium">Zasięg: </span>
                    {localTransport.taxi.coverage}
                  </div>
                  <div>
                    <span className="font-medium">Cena: </span>
                    {localTransport.taxi.price}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    💡 Wskazówka: {localTransport.taxi.note}
                  </div>
                </div>
              </div>

              {/* Bike Rental */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Fuel className="h-5 w-5 text-orange-500" />
                  {localTransport.bikeRental.title}
                </h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Lokalizacje:</span></div>
                  <div className="ml-4">
                    {localTransport.bikeRental.locations.map((location, index) => (
                      <div key={index}>• {location}</div>
                    ))}
                  </div>
                  <div>
                    <span className="font-medium">Cena: </span>
                    {localTransport.bikeRental.price}
                  </div>
                  <div>
                    <span className="font-medium">Trasy: </span>
                    {localTransport.bikeRental.routes}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    💡 Wskazówka: {localTransport.bikeRental.tip}
                  </div>
                </div>
              </div>

              {/* Car Rental */}
              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <ParkingCircle className="h-5 w-5 text-purple-500" />
                  {localTransport.carRental.title}
                </h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Firmy:</span></div>
                  <div className="ml-4">
                    {localTransport.carRental.companies.map((company, index) => (
                      <div key={index}>• {company}</div>
                    ))}
                  </div>
                  <div><span className="font-medium">Lokalizacje:</span></div>
                  <div className="ml-4">
                    {localTransport.carRental.locations.map((location, index) => (
                      <div key={index}>• {location}</div>
                    ))}
                  </div>
                  <div>
                    <span className="font-medium">Cena: </span>
                    {localTransport.carRental.price}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    💡 Wskazówka: {localTransport.carRental.tip}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden mb-8">
          <CardContent className="p-8 text-center">
            <MapPin className="h-12 w-12 text-white/80 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Nasz adres</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <h4 className="font-bold mb-2">Adres</h4>
                <p className="text-blue-50">
                  ul. Leśna 15<br />
                  78-132 Rogowo<br />
                  woj. zachodniopomorskie
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Współrzędne GPS</h4>
                <p className="text-blue-50">
                  54°04'12"N<br />
                  15°51'48"E
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg" variant="secondary">
                <Link to="/kontakt">Zobacz na mapie</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/20 hover:bg-white/30 border border-white/30">
                <Link to="/rezerwacja">Zarezerwuj pobyt</Link>
              </Button>
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

export default OkolicaTransport;