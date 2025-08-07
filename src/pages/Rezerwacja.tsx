import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Calendar,
  Users,
  MapPin,
  Check,
  WifiHigh,
  Car,
  PawPrint
} from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Rezerwacja = () => {
  const { t } = useLanguage();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '4',
    children: '0',
    withPet: 'nie',
    additionalInfo: ''
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

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.firstName,
          surname: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
          message: `Liczba dzieci: ${formData.children}\nZ psem: ${formData.withPet}\n\n${formData.additionalInfo}`,
          type: 'reservation'
        }
      });

      if (error) throw error;

      toast.success('Zapytanie o rezerwację zostało wysłane! Skontaktujemy się w ciągu 24 godzin.', {
        duration: 6000,
        style: {
          fontSize: '18px',
          padding: '24px',
          maxWidth: '600px',
          minWidth: '400px'
        },
        position: 'top-center'
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '4',
        children: '0',
        withPet: 'nie',
        additionalInfo: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się telefonicznie.', {
        duration: 6000,
        style: {
          fontSize: '16px',
          padding: '20px',
          maxWidth: '500px'
        }
      });
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

      {/* Reservation Form and Info */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-light tracking-tight flex items-center space-x-3">
                    <Calendar size={24} weight="light" className="text-ocean" />
                    <span>{t('reservation.form.title')}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">{t('reservation.form.firstname')} {t('required')}</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Twoje imię"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nazwisko *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Twoje nazwisko"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('reservation.form.email')} {t('required')}</Label>
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
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+48 502 939 725"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="checkIn">Data przyjazdu *</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkOut">Data wyjazdu *</Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guests">Liczba osób *</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="8"
                          placeholder="4"
                          value={formData.guests}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="children">Liczba dzieci</Label>
                        <Input
                          id="children"
                          name="children"
                          type="number"
                          min="0"
                          placeholder="0"
                          value={formData.children}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Czy przyjeżdżacie z psem?</Label>
                      <RadioGroup
                        value={formData.withPet}
                        onValueChange={(value) => handleRadioChange('withPet', value)}
                        className="flex space-x-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="nie" id="no-pet" />
                          <Label htmlFor="no-pet">Nie</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="tak" id="yes-pet" />
                          <Label htmlFor="yes-pet">Tak (+15 zł/dobę)</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Dodatkowe informacje</Label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Szczególne życzenia, pytania o domek letniskowy nad morzem..."
                        rows={4}
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="bg-ocean/10 p-4 rounded-lg">
                      <h3 className="font-medium mb-2 flex items-center space-x-2">
                        <Users size={18} weight="light" className="text-ocean" />
                        <span>Informacja o rezerwacji:</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Po wysłaniu formularza skontaktujemy się z Państwem w ciągu 24 godzin w celu 
                        potwierdzenia dostępności i warunków rezerwacji domku letniskowego.
                      </p>
                    </div>

                    <Button type="submit" className="btn-luxury w-full text-lg py-6">
                      {t('reservation.form.submit')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Reserve Section */}
      <section ref={addToRefs} className="py-16 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-6">
              Dlaczego rezerwować domki w Lazur Resort Rogowo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card p-6">
              <div className="text-center">
                <Check size={48} weight="light" className="mx-auto mb-4 text-green-500" />
                <h3 className="text-lg font-medium mb-4">Gwarancja najlepszej ceny</h3>
                <p className="text-sm text-muted-foreground">
                  Konkurencyjne ceny noclegów nad morzem
                </p>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="text-center">
                <Users size={48} weight="light" className="mx-auto mb-4 text-ocean" />
                <h3 className="text-lg font-medium mb-4">Obsługa 24/7</h3>
                <p className="text-sm text-muted-foreground">
                  Zawsze jesteśmy do Państwa dyspozycji
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rezerwacja;