import React, { useState } from 'react';
import { Phone, Envelope, MapPin, Calendar, CaretUp, CaretDown } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';

export const FloatingButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      action: () => window.location.href = '/kontakt',
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
      action: () => window.location.href = '/rezerwacja',
      label: 'Rezerwacja',
    },
  ];

  return (
    <div className="floating-buttons">
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