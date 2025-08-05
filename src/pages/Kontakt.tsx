import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Phone, 
  Envelope, 
  MapPin, 
  Clock,
  Car,
  Waves
} from '@phosphor-icons/react';

const Kontakt = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: ''
  });

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

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+48 502 939 725',
      subtitle: 'Czynne codziennie 8:00 - 20:00',
      action: () => window.open('tel:+48502939725')
    },
    {
      icon: Envelope,
      title: 'Email',
      content: 'lazurresort@op.pl',
      subtitle: 'Odpowiadamy w ciągu 24 godzin',
      action: () => window.open('mailto:lazurresort@op.pl')
    },
    {
      icon: MapPin,
      title: 'Adres',
      content: '72-330 Rogowo',
      subtitle: 'województwo zachodniopomorskie',
      action: () => window.open('https://maps.google.com/?q=Lazur+Resort+Rogowo', '_blank')
    },
    {
      icon: Clock,
      title: 'Godziny kontaktu',
      content: 'Poniedziałek - Niedziela: 8:00 - 20:00',
      subtitle: 'Rezerwacje przyjmujemy całą dobę online',
      action: null
    }
  ];

  const directions = [
    {
      icon: Car,
      title: '15 km od Kołobrzegu',
      description: 'Dojazd z Kołobrzegu drogą wojewódzką nr 163 w kierunku Mrzeżyna, następnie skręt w Rogowo zgodnie ze znakowaniem.'
    },
    {
      icon: Waves,
      title: '400 metrów do plaży',
      description: 'Zaledwie 400 metrów do pięknej plaży w Rogowie - spacer zajmuje około 5 minut.'
    }
  ];

  const features = [
    'Blisko morza',
    'Doskonała lokalizacja',
    'Profesjonalna obsługa'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in-up">
            Kontakt - Lazur Resort Rogowo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
            Skontaktuj się z nami w sprawie rezerwacji domków letniskowych nad morzem w 
            Rogowie. Chętnie odpowiemy na wszystkie pytania dotyczące noclegów dla 8 osób.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-light tracking-tight mb-8">
                Informacje kontaktowe
              </h2>
              
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`glass-card p-6 ${info.action ? 'cursor-pointer hover:shadow-luxury' : ''} transition-all duration-300`}
                  onClick={info.action || undefined}
                >
                  <div className="flex items-start space-x-4">
                    <info.icon size={24} weight="light" className="text-ocean mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">{info.title}</h3>
                      <p className="text-foreground">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </Card>
              ))}

              {/* How to reach us */}
              <div className="mt-12">
                <h3 className="text-xl font-light tracking-tight mb-6">
                  Jak do nas dojechać?
                </h3>
                <div className="space-y-6">
                  {directions.map((direction, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <direction.icon size={24} weight="light" className="text-ocean mt-1" />
                      <div>
                        <h4 className="font-medium mb-2">{direction.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {direction.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="glass-card p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-light tracking-tight">
                  Wyślij zapytanie o domki letniskowe
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Imię *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Twoje imię"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="surname">Nazwisko *</Label>
                      <Input
                        id="surname"
                        name="surname"
                        placeholder="Twoje nazwisko"
                        value={formData.surname}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="twoj@email.pl"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+48 123 456 789"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn">Data przyjazdu</Label>
                      <Input
                        id="checkIn"
                        name="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="checkOut">Data wyjazdu</Label>
                      <Input
                        id="checkOut"
                        name="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Liczba osób</Label>
                    <Input
                      id="guests"
                      name="guests"
                      placeholder="Maksymalnie 8 osób"
                      value={formData.guests}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Wiadomość</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Dodatkowe informacje, pytania o domki letniskowe nad morzem..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" className="btn-luxury w-full">
                    Wyślij zapytanie o rezerwację
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Pola wymagane. Odpowiemy w ciągu 24 godzin.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={addToRefs} className="py-16 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light tracking-tight text-center mb-12">
            Dlaczego warto wybrać domki Lazur Resort w Rogowie?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves size={32} weight="light" className="text-ocean" />
                </div>
                <h3 className="font-medium text-lg">{feature}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {index === 0 && 'Zaledwie 400 metrów do pięknej plaży w Rogowie'}
                  {index === 1 && 'Blisko Kołobrzegu, Mrzeżyna i innych atrakcji turystycznych'}
                  {index === 2 && 'Zawsze chętnie pomożemy i odpowiemy na pytania'}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;