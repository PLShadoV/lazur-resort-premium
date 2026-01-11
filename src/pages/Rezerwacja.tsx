import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Check } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const IFRAME_ID = "ra-reservation-form-v2-dc2fa3d21439f20f05fbc289a7d47790";
const SENDER = "reservation-form-dc2fa3d21439f20f05fbc289a7d47790";

const Rezerwacja = () => {
  const { t } = useLanguage();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );
    sectionsRef.current.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // RoomAdmin iframe setup
  useEffect(() => {
    const iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
    if (!iframe) return;

    const receiver = (event: MessageEvent) => {
      if (!event.data?.sender || event.data.sender !== SENDER) return;

      if (event.data.height) iframe.style.height = `${event.data.height + 10}px`;

      if (event.data.event?.name === "widget.scrollup.requested") {
        iframe.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (event.data.event?.name === "reservation.submit.success") {
        const r = event.data.event.data.reservation;
        window.gtag?.("event", "purchase", {
          transaction_id: r.id,
          value: r.moneyTotal / 100,
          currency: "PLN",
        });
      }
    };

    window.addEventListener("message", receiver);

    const setup = () => {
      try {
        iframe.contentWindow?.postMessage(
          { location: window.location.toString(), setup: { autoHeight: true, senderName: SENDER } },
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

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) sectionsRef.current.push(el);
  };

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

  const additionalInfo = ["Odległość do morza: 350 metrów", "Parking: bezpłatny przy każdym domku"];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in-up">
            {t("reservation.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
            {t("reservation.subtitle")}
          </p>
        </div>
      </section>

      {/* Reservation Engine */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <Card className="glass-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-light tracking-tight text-center flex items-center justify-center space-x-3">
                <Calendar size={24} weight="light" className="text-ocean" />
                <span>{t("reservation.form.title")}</span>
              </CardTitle>
            </CardHeader>
            <div className="px-6 pb-6">
              <div className="relative bg-white rounded-lg overflow-hidden">
                <iframe
                  id={IFRAME_ID}
                  style={{
                    width: "100%",
                    height: "200px",
                    border: "none",
                    padding: 0,
                    minHeight: "200px",
                    transition: "height 0.3s ease",
                  }}
                  src="https://roomadmin.pl/widget/reservation-v2/start?fh=e054ee66a5c6bd98949b1f975c392dccebc20d88&style=%7B%22color_accent%22%3A%22%23101c4c%22%2C%22color_bg%22%3A%22%23FFFFFF%22%2C%22color_panel_header%22%3A%22%23FFFFFF%22%2C%22color_panel_body%22%3A%22%23FFFFFF%22%2C%22rounded_corners%22%3A%223%22%7D&filter=%7B%22room_type_id_in%22%3A%5B%223%22%5D%7D&lang=pl"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cottage Info */}
      <section ref={addToRefs} className="py-16 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cottage */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-xl font-light tracking-tight flex items-center space-x-2">
                  <Users size={20} weight="light" className="text-ocean" />
                  <span>Domki Lazur Resort</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Dostępne domki:</span>
                  <Badge variant="secondary">4 domki</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Typ domku:</span>
                  <span className="text-sm font-medium">2 sypialnie + salon</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Ceny dla domku (8 osób):</h3>
                  {priceInfo.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.guests}</span>
                      <span className="font-medium text-ocean">{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {additionalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check size={16} weight="bold" className="text-green-500" />
                      <span className="text-xs">{info}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rezerwacja;
