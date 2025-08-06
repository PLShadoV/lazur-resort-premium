import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pl' | 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.gallery': 'Galeria',
    'nav.pricing': 'Cennik',
    'nav.area': 'Okolica',
    'nav.contact': 'Kontakt',
    'nav.booking': 'Rezerwacja',
    
    // Footer
    'footer.contact': 'Kontakt',
    'footer.phone': 'Telefon',
    'footer.email': 'Email',
    'footer.address': 'Adres',
    'footer.links': 'Przydatne linki',
    'footer.privacy': 'Polityka prywatności',
    'footer.terms': 'Regulamin',
    'footer.rights': 'Wszystkie prawa zastrzeżone',
    
    // Homepage
    'hero.title': 'Odkryj spokój w sercu natury',
    'hero.subtitle': 'Nowoczesne domki nad jeziorem w Rogowie - idealne miejsce na wypoczynek z rodziną',
    'hero.cta': 'Zarezerwuj teraz',
    'hero.gallery': 'Zobacz galerię',
    
    // Common
    'button.book': 'Zarezerwuj',
    'button.contact': 'Skontaktuj się',
    'button.more': 'Dowiedz się więcej',
    'button.back': 'Powrót',
  },
  
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.gallery': 'Galerie',
    'nav.pricing': 'Preise',
    'nav.area': 'Umgebung',
    'nav.contact': 'Kontakt',
    'nav.booking': 'Buchung',
    
    // Footer
    'footer.contact': 'Kontakt',
    'footer.phone': 'Telefon',
    'footer.email': 'E-Mail',
    'footer.address': 'Adresse',
    'footer.links': 'Nützliche Links',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.rights': 'Alle Rechte vorbehalten',
    
    // Homepage
    'hero.title': 'Entdecken Sie Ruhe im Herzen der Natur',
    'hero.subtitle': 'Moderne Häuschen am See in Rogowo - der perfekte Ort für einen Familienurlaub',
    'hero.cta': 'Jetzt buchen',
    'hero.gallery': 'Galerie ansehen',
    
    // Common
    'button.book': 'Buchen',
    'button.contact': 'Kontaktieren',
    'button.more': 'Mehr erfahren',
    'button.back': 'Zurück',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.gallery': 'Gallery',
    'nav.pricing': 'Pricing',
    'nav.area': 'Area',
    'nav.contact': 'Contact',
    'nav.booking': 'Booking',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.address': 'Address',
    'footer.links': 'Useful Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved',
    
    // Homepage
    'hero.title': 'Discover peace in the heart of nature',
    'hero.subtitle': 'Modern cottages by the lake in Rogowo - perfect place for family vacation',
    'hero.cta': 'Book now',
    'hero.gallery': 'View gallery',
    
    // Common
    'button.book': 'Book',
    'button.contact': 'Contact',
    'button.more': 'Learn more',
    'button.back': 'Back',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};