import React, { useState } from 'react';
import { Phone, Envelope, MapPin, Calendar, CaretUp, CaretDown, FacebookLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  const buttons = [
    {
      icon: Phone,
      className: 'floating-phone',
      action: () => window.open('tel:+48502939725'),
      label: 'Zadzwoń',
    },
    {
      icon: Envelope,
      className: 'floating-mail',
      action: () => navigate('/kontakt'),
      label: 'Kontakt',
    },
    {
      icon: MapPin,
      className: 'floating-map',
      action: () => window.open('https://maps.google.com/?q=Lazur+Resort+Rogowo', '_blank'),
      label: 'Mapa',
    },
    {
      icon: Calendar,
      className: 'floating-calendar',
      action: () => navigate('/rezerwacja'),
      label: 'Rezerwacja',
    },
    {
      icon: FacebookLogo,
      className: 'floating-facebook',
      action: () => window.open('https://www.facebook.com/Lazurresort/', '_blank'),
      label: 'Facebook',
    },
    {
      icon: WhatsappLogo,
      className: 'floating-whatsapp',
      action: () => window.open('https://wa.me/48502939725', '_blank'),
      label: 'WhatsApp',
    },
  ];

  return (
    <div className="floating-buttons fixed right-4 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40">
      {/* Action Buttons */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {buttons.map((button, index) => (
          <Button
            key={index}
            size="icon"
            className={`floating-btn ${button.className}`}
            onClick={button.action}
            title={button.label}
          >
            <button.icon size={20} weight="light" />
          </Button>
        ))}
      </div>

      {/* Toggle Button */}
      <Button
        size="icon"
        className="floating-btn floating-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        title={isExpanded ? 'Ukryj' : 'Pokaż opcje'}
      >
        {isExpanded ? (
          <CaretDown size={20} weight="light" />
        ) : (
          <CaretUp size={20} weight="light" />
        )}
      </Button>
    </div>
  );
};