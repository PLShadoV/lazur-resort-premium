import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { House, Armchair, ChefHat, Shower, Table, TreeEvergreen, Fire, Car, WifiHigh, Bed, PawPrint, Waves } from '@phosphor-icons/react';
import { useLanguage } from '@/contexts/LanguageContext';

type GalleryKey = 'exterior' | 'interior';

type ImgEntry = {
  id: number;
  src: string;
  alt: string;
};

const CATEGORY_LABEL: Record<GalleryKey, string> = {
  exterior: 'Domki z zewnątrz',
  interior: 'Domki wewnątrz',
};

/* --- Automatyczne ładowanie obrazów z folderów --- */
const modulesExterior = import.meta.glob<{ default: string }>(
  '@/assets/gallery/exterior/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

const modulesInterior = import.meta.glob<{ default: string }>(
  '@/assets/gallery/interior/*.{jpg,jpeg,png,webp}',
  { eager: true }
);

function formatFilenameToAlt(filename: string) {
  const clean = filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!clean) return '';

  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function toEntries(
  modules: Record<string, { default: string }>,
  altPrefix: string
): ImgEntry[] {
  return Object.keys(modules)
    .sort((a, b) => a.localeCompare(b, 'pl'))
    .map((path, idx) => {
      const url = modules[path]!.default;
      const filename = path.split('/').pop() || `photo-${idx + 1}`;
      const readableName = formatFilenameToAlt(filename);

      return {
        id: idx + 1,
        src: url,
        alt: readableName
          ? `${altPrefix} – ${readableName}`
          : `${altPrefix} – zdjęcie ${idx + 1}`,
      };
    });
}

const GALLERIES: Record<GalleryKey, ImgEntry[]> = {
  exterior: toEntries(modulesExterior, CATEGORY_LABEL.exterior),
  interior: toEntries(modulesInterior, CATEGORY_LABEL.interior),
};

const Galeria: React.FC = () => {
  const { t } = useLanguage();
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  const [activeTab, setActiveTab] = useState<GalleryKey>('exterior');

  /* Lightbox */
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<GalleryKey>('exterior');
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [touchX, setTouchX] = useState<number | null>(null);

  const currentList = useMemo(() => GALLERIES[category] ?? [], [category]);
  const total = currentList.length;
  const current = useMemo(() => currentList[index], [currentList, index]);

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

  const openAt = useCallback((cat: GalleryKey, i: number) => {
    setCategory(cat);
    setIndex(i);
    setScale(1);
    setOpen(true);

    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setScale(1);

    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }, []);

  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, []);

  const prev = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i - 1 + total) % total);
    setScale(1);
  }, [total]);

  const next = useCallback(() => {
    if (!total) return;
    setIndex((i) => (i + 1) % total);
    setScale(1);
  }, [total]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, prev, next]);

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((s) => Math.min(3, Math.max(0.8, s + delta)));
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchX(e.touches[0].clientX);
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (touchX === null) return;

    const dx = e.changedTouches[0].clientX - touchX;
    if (dx > 50) prev();
    if (dx < -50) next();

    setTouchX(null);
  };

  const Grid: React.FC<{ cat: GalleryKey }> = ({ cat }) => {
    const images = GALLERIES[cat];

    if (images.length === 0) {
      return (
        <p className="text-center text-muted-foreground">
          Dodaj zdjęcia do <code>src/assets/gallery/{cat}/</code> w formacie jpg, jpeg, png lub webp.
        </p>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, i) => (
          <button
            key={`${cat}-${image.id}`}
            type="button"
            onClick={() => openAt(cat, i)}
            aria-label={`Otwórz podgląd: ${image.alt}`}
            className="group text-left"
          >
            <Card className="overflow-hidden border-0 rounded-2xl bg-background shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium line-clamp-2">
                    {image.alt}
                  </p>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6 fade-in-up">
            {t('gallery.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section ref={addToRefs} className="py-16 scroll-reveal">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center">
              <div className="inline-flex rounded-2xl bg-muted p-2 shadow-sm border border-border/50">
                {(['exterior', 'interior'] as GalleryKey[]).map((tab) => {
                  const isActive = activeTab === tab;

                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={[
                        'px-5 md:px-8 py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300',
                        isActive
                          ? 'bg-background text-foreground shadow-md'
                          : 'text-muted-foreground hover:text-foreground',
                      ].join(' ')}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {CATEGORY_LABEL[tab]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Intro for selected tab */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4">
              {CATEGORY_LABEL[activeTab]}
            </h2>
            <p className="text-lg text-muted-foreground">
              {activeTab === 'exterior'
                ? 'Zobacz domki, tarasy i otoczenie ośrodka. Wszystkie zdjęcia ładują się automatycznie z folderu i wyświetlają w kolejności alfabetycznej.'
                : 'Poznaj wnętrza domków — salon, kuchnię, sypialnie i przestrzeń wypoczynkową. Zdjęcia również wczytują się automatycznie z folderu.'}
            </p>
          </div>

          {/* Active gallery */}
          <Grid cat={activeTab} />
        </div>
      </section>

      {/* Features */}
      <section ref={addToRefs} className="py-16 bg-muted/30 scroll-reveal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light tracking-tight mb-12">
            {t('gallery.comfort.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">{t('gallery.space.title')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <House size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.space.bedrooms')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Armchair size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.space.living')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <ChefHat size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.space.kitchen')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Shower size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.space.bathroom')}
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">{t('gallery.relax.title')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Table size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.relax.terrace')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <TreeEvergreen size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.relax.garden')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Fire size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.relax.grill')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Car size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.relax.parking')}
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">{t('gallery.amenities.title')}</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <WifiHigh size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.amenities.wifi')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Bed size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.amenities.linen')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <PawPrint size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.amenities.pets')}
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <Waves size={16} weight="light" style={{ color: '#967d48' }} />
                  {t('gallery.amenities.beach')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && total > 0 && current && (
        <div
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-sm flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition"
            aria-label="Poprzednie zdjęcie"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-[92vw] max-h-[90vh] relative">
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-[92vw] max-h-[90vh] object-contain select-none"
              style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
              draggable={false}
            />

            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 text-sm text-white/90 px-4 py-2 rounded-full bg-black/40 text-center max-w-[90vw]">
              <div className="font-medium">
                {CATEGORY_LABEL[category]} • {index + 1}/{total}
              </div>
              <div className="text-white/80 text-xs md:text-sm mt-1">
                {current.alt}
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition"
            aria-label="Następne zdjęcie"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute top-3 right-3 md:top-6 md:right-6 rounded-full bg-white/10 hover:bg-white/20 p-3 text-white transition"
            aria-label="Zamknij podgląd"
            title="Zamknij (Esc)"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.41 4.29 19.71 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3z"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Galeria;