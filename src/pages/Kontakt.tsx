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
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const Kontakt = () => {
  const { t } = useLanguage();
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          surname: formData.surname,
          email: formData.email,
          phone: formData.phone,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
          message: formData.message,
          type: 'contact'
        }
      });

      if (error) throw error;

      toast.success('Zapytanie zostało wysłane! Skontaktujemy się w ciągu 24 godzin.', {
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
        name: '',
        surname: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: ''
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

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+48 502 939 725',
      subtitle: t('contact.phone.hours'),
      action: () => window.open('tel:+48502939725')
    },
    {
      icon: Envelope,
      title: t('contact.email'),
      content: 'lazurresort@op.pl',
      subtitle: t('contact.email.response'),
      action: () => window.open('mailto:lazurresort@op.pl')
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      content: '72-330 Rogowo',
      subtitle: t('contact.address.region'),
      action: () => window.open('https://maps.google.com/?q=Lazur+Resort+Rogowo', '_blank')
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      content: t('contact.hours.value'),
      subtitle: t('contact.hours.online'),
      action: null
    }
  ];

  const directions = [
    {
      icon: Car,
      title: t('contact.directions.kolobrzeg'),
      description: t('contact.directions.kolobrzeg.desc')
    },
    {
      icon: Waves,
      title: t('contact.directions.beach'),
      description: t('contact.directions.beach.desc')
    }
  ];

  const features = [
    t('contact.why.sea'),
    t('contact.why.location'),
    t('contact.why.service')
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in-up">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
            {t('contact.subtitle')}
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
                {t('contact.info.title')}
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
                  {t('contact.directions.title')}
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
                  {t('contact.form.title')}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact.form.name')} {t('required')}</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={t('contact.form.name')}
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="surname">{t('contact.form.surname')} {t('required')}</Label>
                        <Input
                          id="surname"
                          name="surname"
                          placeholder={t('contact.form.surname')}
                          value={formData.surname}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact.form.email')} {t('required')}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={t('contact.form.email')}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact.form.phone')}</Label>
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
                        <Label htmlFor="checkIn">{t('contact.form.checkin')}</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="checkOut">{t('contact.form.checkout')}</Label>
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
                      <Label htmlFor="guests">{t('contact.form.guests')}</Label>
                      <Input
                        id="guests"
                        name="guests"
                        placeholder={t('contact.form.guests.placeholder')}
                        value={formData.guests}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t('contact.form.message')}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t('contact.form.message.placeholder')}
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button type="submit" className="btn-luxury w-full">
                      {t('contact.form.submit')}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      {t('contact.form.required')}
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
            {t('contact.why.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-6 text-center">
                <div className="w-16 h-16 bg-ocean/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves size={32} weight="light" className="text-ocean" />
                </div>
                <h3 className="font-medium text-lg">{feature}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {index === 0 && t('contact.why.sea.desc')}
                  {index === 1 && t('contact.why.location.desc')}
                  {index === 2 && t('contact.why.service.desc')}
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