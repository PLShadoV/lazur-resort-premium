import React, { useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const flags = {
  pl: '🇵🇱',
  de: '🇩🇪',
  en: '🇬🇧'
};

const languageNames = {
  pl: 'Polski',
  de: 'Deutsch',
  en: 'English'
};

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-border/40 hover:bg-accent shadow-lg"
          >
            <span className="text-2xl">{flags[language]}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-auto p-2">
          <div className="flex flex-col gap-1">
            {(Object.keys(flags) as Language[]).map((lang) => (
              <Button
                key={lang}
                variant={language === lang ? "default" : "ghost"}
                size="sm"
                onClick={() => handleLanguageChange(lang)}
                className="justify-start gap-2 h-8"
              >
                <span className="text-lg">{flags[lang]}</span>
                <span className="text-sm">{languageNames[lang]}</span>
              </Button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};