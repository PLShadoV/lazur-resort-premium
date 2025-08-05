import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Envelope, MapPin, FacebookLogo, InstagramLogo } from '@phosphor-icons/react';
// Using uploaded logo image
const lazurLogo = '/lovable-uploads/8b4ddeb2-e7a9-46bf-8902-865f5f51bcd2.png';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={lazurLogo} alt="Lazur Resort" className="h-8 w-auto" />
              <span className="font-medium text-lg">Lazur Resort</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Luksusowe domki letniskowe nad morzem w Rogowie. Idealne miejsce na wypoczynek
              z rodziną w województwie zachodniopomorskim.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogo size={24} weight="light" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} weight="light" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="text-white/80 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/cennik" className="text-white/80 hover:text-white transition-colors">
                  Cennik
                </Link>
              </li>
              <li>
                <Link to="/rezerwacja" className="text-white/80 hover:text-white transition-colors">
                  Rezerwacja
                </Link>
              </li>
            </ul>
          </div>

          {/* Area Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Okolica</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/okolica/mrzezyna" className="text-white/80 hover:text-white transition-colors">
                  Mrzeżyno
                </Link>
              </li>
              <li>
                <Link to="/okolica/dzwirzyno" className="text-white/80 hover:text-white transition-colors">
                  Dźwirzyno
                </Link>
              </li>
              <li>
                <Link to="/okolica/kolobrzeg" className="text-white/80 hover:text-white transition-colors">
                  Kołobrzeg
                </Link>
              </li>
              <li>
                <Link to="/okolica/z-psem" className="text-white/80 hover:text-white transition-colors">
                  Z psem nad morze
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} weight="light" />
                <a
                  href="tel:+48502939725"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +48 502 939 725
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Envelope size={18} weight="light" />
                <a
                  href="mailto:lazurresort@op.pl"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  lazurresort@op.pl
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} weight="light" className="mt-1" />
                <div className="text-white/80">
                  <p>72-330 Rogowo</p>
                  <p>województwo zachodniopomorskie</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>
            © 2024 Lazur Resort Rogowo. Wszystkie prawa zastrzeżone. |{' '}
            <Link to="/polityka-prywatnosci" className="hover:text-white transition-colors">
              Polityka prywatności
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};