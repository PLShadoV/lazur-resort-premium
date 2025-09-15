import React, { useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  Users,
  Check
} from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';

const Rezerwacja = () => {
  const { t } = useLanguage();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Reservation widget script
    try {
      (function () {
        var iframe = window.document.getElementById('ra-reservation-form-v2-dc2fa3d21439f20f05fbc289a7d47790') as HTMLIFrameElement;
        function raMessageReceiver(event: any) {
          if (iframe) {
            if (!event.data.sender || "reservation-form-dc2fa3d21439f20f05fbc289a7d47790" !== event.data.sender) {
              return;
            }
            if (event.data.height) {
              iframe.style.height = (event.data.height + 10) + "px";
            }
            if (event.data.event && event.data.event.name === "widget.scrollup.requested") {
              try {
                iframe.scrollIntoView({behavior: "smooth", block: "start"});
              } catch (e) { }
            }
            if (event.data.event && event.data.event.name === "reservation.submit.success") {
              console.log("reservation.submit.success", event.data.event.data.reservation);
              var moneyTotal = event.data.event.data.reservation.moneyTotal;
              var id = event.data.event.data.reservation.id;
              
              // GTM integration with proper types
              const win = window as any;
              win.gtag||(console.log("no gtag -- trying fallback "), win.dataLayer = win.dataLayer || [], win.gtag = function(){win.dataLayer.push(arguments)}, Array.from(document.scripts).forEach(function(a: HTMLScriptElement){
                if(a.src.startsWith("https://www.googletagmanager.com/gtag/js")||a.src.startsWith("http://www.googletagmanager.com/gtag/js")){
                  var g=new URL(a.src).searchParams.get("id");
                  console.log("gtag found: "+g);
                  win.gtag("js",new Date);
                  win.gtag("config",g);
                }
              }));
              
              win.gtag("event", "purchase", { transaction_id: id, value: moneyTotal / 100, currency: "PLN" });
              console.log("purchase event sent")
            }
            if (event.data.event && event.data.event.name === "reservation.variant-search.start") {
              /*console.log("variant search started"); */
            }
            if (event.data.event && event.data.event.name) {
              console.log(event.data.event.name, event.data.event);
            }
          }
        }
        window.addEventListener("message", raMessageReceiver, false);
        function setup() {
          try {
            if (iframe && iframe.contentWindow) {
              iframe.contentWindow.postMessage({
                location: window.location.toString(),
                setup: {
                  autoHeight: true,
                  senderName: "reservation-form-dc2fa3d21439f20f05fbc289a7d47790"
                }
              }, "*");
            }
          } catch (e) { }
        }
        const intervalId = setInterval(setup, 1000);
        if (iframe) {
          iframe.addEventListener("load", setup);
        }
        
        // Cleanup function
        return () => {
          clearInterval(intervalId);
          window.removeEventListener("message", raMessageReceiver);
        };
      })();
    } catch (e) {
      console.error(e);
    }
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const cottageFeatures = [
    'Nocleg dla maksymalnie 4, 6 lub 8 osób',
    '2 sypialnie + salon z rozkładaną sofą',
    'W pełni wyposażona kuchnia',
    '1 łazienka z prysznicem',
    'Duży taras z meblami ogrodowymi',
    'WiFi i telewizja satelitarna',
    'Miejsce na grilla',
    'Bezpłatny parking',
    'Pościel i ręczniki',
    '5 minut pieszo do morza'
  ];

  const priceInfo = [
    { guests: 'Do 4 osób:', price: '400-650 zł/noc' },
    { guests: '5-6 osób:', price: '450-700 zł/noc' },
    { guests: '7-8 osób:', price: '500-750 zł/noc' }
  ];

  const additionalInfo = [
    'Odległość do morza: 350 metrów',
    'Parking: bezpłatny przy każdym domku'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in-up">
            {t('reservation.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
            {t('reservation.subtitle')}
          </p>
        </div>
      </section>

      {/* Reservation Engine - Full Width */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <Card className="glass-card">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-light tracking-tight text-center flex items-center justify-center space-x-3">
                <Calendar size={24} weight="light" className="text-ocean" />
                <span>{t('reservation.form.title')}</span>
              </CardTitle>
            </CardHeader>
            
            <div className="px-6 pb-6">
              <div className="relative bg-white rounded-lg overflow-hidden">
                <iframe 
                  id="ra-reservation-form-v2-dc2fa3d21439f20f05fbc289a7d47790" 
                  style={{
                    width: '100%', 
                    height: '100px', 
                    border: 'none', 
                    padding: '0',
                    minHeight: '400px'
                  }} 
                  src="https://roomadmin.pl/widget/reservation-v2/start?fh=e054ee66a5c6bd98949b1f975c392dccebc20d88&style=%7B%22color_accent%22%3A%22%23101c4c%22%2C%22color_bg%22%3A%22%23FFFFFF%22%2C%22color_panel_header%22%3A%22%23FFFFFF%22%2C%22color_panel_body%22%3A%22%23FFFFFF%22%2C%22rounded_corners%22%3A%223%22%7D&filter=%7B%22room_type_id_in%22%3A%5B%223%22%5D%7D&lang=pl"
                ></iframe>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Cottage and Contact Info */}
      <section ref={addToRefs} className="py-16 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cottage Info */}
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

            {/* Contact Info */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg font-light tracking-tight">
                  Kontakt bezpośredni
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-medium text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">+48 502 939 725</p>
                    <p className="text-xs text-muted-foreground">Czynne codziennie 8:00 - 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium text-sm">📧</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">lazurresort@op.pl</p>
                    <p className="text-xs text-muted-foreground">Odpowiadamy w ciągu 24 godzin</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Preferujesz kontakt telefoniczny? Zadzwoń do nas bezpośrednio, 
                  zawsze jesteśmy do Państwa dyspozycji.
                </p>
              </CardContent>
            </Card>

            {/* Why Reserve Section Inline */}
            <Card className="glass-card md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg font-light tracking-tight text-center">
                  Dlaczego rezerwować w Lazur Resort?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Check size={32} weight="light" className="mx-auto mb-2 text-green-500" />
                  <h3 className="font-medium mb-2">Gwarancja najlepszej ceny</h3>
                  <p className="text-sm text-muted-foreground">
                    Konkurencyjne ceny noclegów nad morzem
                  </p>
                </div>
                
                <div className="text-center">
                  <Users size={32} weight="light" className="mx-auto mb-2 text-ocean" />
                  <h3 className="font-medium mb-2">Obsługa 24/7</h3>
                  <p className="text-sm text-muted-foreground">
                    Zawsze jesteśmy do Państwa dyspozycji
                  </p>
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