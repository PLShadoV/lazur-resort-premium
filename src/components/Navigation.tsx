import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X, CaretDown } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import lazurLogo from '@/assets/lazur-logo-new.png';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface NavItems {
  left: NavItem[];
  right: NavItem[];
}

const getNavItems = (t: (key: string) => string) => ({
  left: [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.gallery'), href: '/galeria' },
    { label: t('nav.pricing'), href: '/cennik' }
  ],
  right: [
    { label: t('nav.contact'), href: '/kontakt' },
    {
      label: t('nav.area'),
      href: '/okolica',
      children: [
        { label: 'Domki na wynajem Mrzeżyno', href: '/okolica/mrzezyna' },
        { label: 'Domki na wynajem Dźwirzyno', href: '/okolica/dzwirzyno' },
        { label: 'Domki na wynajem Kołobrzeg', href: '/okolica/kolobrzeg' },
        { label: 'Noclegi z psem', href: '/okolica/z-psem' },
        { label: 'Ścieżki rowerowe', href: '/okolica/sciezki-rowerowe' },
      ],
    }
  ]
});

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = getNavItems(t);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'shadow-luxury'
          : ''
      }`}
      style={{ backgroundColor: '#081c4c' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1">
            {navItems.left.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-white/90 hover:text-white transition-colors py-2 ${
                  location.pathname === item.href ? 'text-white font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 mx-8">
            <img 
              src={lazurLogo} 
              alt="Lazur Resort" 
              className="h-24 w-auto max-w-none"
            />
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
            {navItems.right.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div
                    className="flex items-center space-x-1 text-white/90 hover:text-white cursor-pointer transition-colors"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link to={item.href} className="py-2">
                      {item.label}
                    </Link>
                    <CaretDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                    
                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-luxury overflow-hidden transition-all duration-300 z-50 ${
                        activeDropdown === item.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible translate-y-2'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-3 text-foreground hover:bg-muted transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white/90 hover:text-white transition-colors py-2 ${
                      location.pathname === item.href ? 'text-white font-medium' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Button asChild className="btn-luxury ml-6">
              <Link to="/rezerwacja">{t('button.book')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-md"
            style={{ backgroundColor: '#081c4c' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-16 right-0 bottom-0 w-80 shadow-luxury transform transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ 
            backgroundColor: '#081c4c', 
            opacity: 1,
            backdropFilter: 'none'
          }}
        >
          <div className="p-6 space-y-4 overflow-y-auto max-h-full">
            {/* Mobile Menu Items - Combined */}
            {[...navItems.left, ...navItems.right].map((item: NavItem) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-left py-2 text-white font-medium"
                      onClick={() => handleDropdownToggle(item.label)}
                    >
                      {item.label}
                      <CaretDown
                        size={16}
                        className={`transition-transform text-white ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-white/80 hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`block py-2 text-white hover:text-white/80 transition-colors ${
                      location.pathname === item.href ? 'text-white font-medium' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <Button asChild className="btn-luxury w-full mt-6">
              <Link to="/rezerwacja">{t('button.book')}</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-[-1]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};