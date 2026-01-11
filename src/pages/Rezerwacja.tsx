import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users, Check, Clock, Phone, Mail } from "lucide-react";
import beachBalticHeroImage from "@/assets/beach-baltic-hero.webp";

const IFRAME_ID =
  "ra-reservation-form-v2-dc2fa3d21439f20f05fbc289a7d47790";
const SENDER = "reservation-form-dc2fa3d21439f20f05fbc289a7d47790";

const Rezerwacja = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // iframe auto-height + scroll + GA
  useEffect(() => {
    const iframe = document.getElementById(
      IFRAME_ID
    ) as HTMLIFrameElement | null;
    if (!iframe) return;

    const receiver = (event: MessageEvent) => {
      if (!event.data?.sender || event.data.sender !== SENDER) return;

      if (event.data.height) iframe.style.height = `${event.data.height + 10}px`;

      if (event.data.event?.name === "widget.scrollup.requested") {
        iframe.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (event.data.event?.name === "reservation.submit.success") {
        const r = event.data.event.data.reservation;
        if (window.gtag) {
          gtag("event", "purchase", {
            transaction_id: r.id,
            value: r.moneyTotal / 100,
            currency: "PLN",
          });
        }
      }
    };

    window.addEventListener("message", receiver);

    const setup = () => {
      try {
        iframe.contentWindow?.postMessage(
          {
            location: window.location.toString(),
            setup: {
              autoHeight: true,
              senderName: SENDER,
            },
          },
          "*"
        );
      } catch {}
    };

    const interval = setInterval(setup, 1000);
    iframe.addEventListener("load", setup);

    return () => {
      window.removeEventListener("message", receiver);
      iframe.removeEventListener("load", setup);
      clearInterval(interval);
    };
  }, []);

  const cottageFeatures = [
    "Nocleg dla maksymalnie 4, 6 lub 8 osób",
    "2 sypialnie + salon z rozkładaną sofą",
    "W pełni wyposażona kuchnia",
    "1 łazienka z prysznicem",
    "Duży taras z meblami ogrodowymi",
    "WiFi i telewizja satelitarna",
    "Miejsce na grilla",
    "Bezpłatny parking",
    "Pościel i ręczniki",
    "5 minut pieszo do morza",
  ];

  const priceInfo = [
    { guests: "Do 4 osób:", price: "400-650 zł/noc" },
    { guests: "5-6 osób:", price: "450-700 zł/noc" },
    { guests: "7-8 osób:", price: "500-750 zł/noc" },
  ];

  const additionalInfo = [
    "Odległość do morza: 350 metrów",
    "Parking: bezpłatny przy każdym domku",
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${beachBalticHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rezerwacja</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Zarezerwuj pobyt w naszych apartamentach nad morzem
          </p>
        </div>
      </section>

      {/* SYSTEM REZERWACJI */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card className="glass-card">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <CalendarDays className="text-primary" />
                Formularz rezerwacji
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                id={IFRAME_ID}
                className="w-full border-none rounded-lg"
                style={{ minHeight: "320px" }}
                src="https://roomadmin.pl/widget/reservation-v2/start?fh=e054ee66a5c6bd98949b1f975c392dccebc20d88&style=%7B%22color_accent%22%3A%22%23101c4c%22%2C%22color_bg%22%3A%22%23FFFFFF%22%7D&filter=%7B%22room_type_id_in%22%3A%5B%223%22%5D%7D&lang=pl"
                scrolling="no"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* COTTAGE INFO + CONTACT */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cottage Features */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Users className="text-primary" />
                Domki Lazur Resort
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {cottageFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="text-green-500" />
                  <span className="text-sm text-muted-foreground">{f}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Price Info */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl">Cennik</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {priceInfo.map((p, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span>{p.guests}</span>
                  <span className="font-medium text-primary">{p.price}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl">Kontakt bezpośredni</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-primary" />
                <div>
                  <p className="text-sm font-medium">+48 502 939 725</p>
                  <p className="text-xs text-muted-foreground">
                    Czynne codziennie 8:00 - 20:00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary" />
                <div>
                  <p className="text-sm font-medium">lazurresort@op.pl</p>
                  <p className="text-xs text-muted-foreground">
                    Odpowiadamy w ciągu 24 godzin
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PAYMENT + TERMS */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl text-center">Dane do przelewu</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>Gracja Rogowo</strong></p>
              <p>Rogowo 46, 72-330</p>
              <p>mBank S.A.</p>
              <p className="font-mono">57 1140 2004 0000 3002 6054 8321</p>
              <p className="text-xs mt-1">SWIFT: BREXPLPWMBK</p>
              <p className="text-xs">IBAN: PL57114020040000300260548321</p>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl text-center">Dodatkowe opłaty i warunki</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Minimalna rezerwacja: 2 noce</p>
              <p>• Zameldowanie: od 15:00</p>
              <p>• Wymeldowanie: do 10:00</p>
              <p>• Zwierzęta: dozwolone za dopłatą 15 zł/dobę</p>
              <p>• Zadatek: 20% wartości pobytu</p>
              <p>• Opłata klimatyczna: 3 zł/os./dobę</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Rezerwacja;
