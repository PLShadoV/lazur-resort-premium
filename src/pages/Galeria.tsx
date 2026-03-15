import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import {
  House,
  Armchair,
  ChefHat,
  Shower,
  Table,
  TreeEvergreen,
  Fire,
  Car,
  WifiHigh,
  Bed,
  PawPrint,
  Waves,
} from '@phosphor-icons/react';
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
    const delta = e.deltaY > 0 ? -0.08 : 0.08;
    setScale((s) => Math.min(3, Math.max(0.9, s + delta)));
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
        <div className="rounded-3xl border border-dashed border-border/70 bg-muted/20 px-6 py-10 text-center">
          <p className="text-muted-foreground">
            Dodaj zdjęcia do <code>src/assets/gallery/{cat}/</code> w formacie jpg, jpeg, png lub webp.
          </p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {images.map((image, i) => (
          <button
            key={`${cat}-${image.id}`}
            type="button"
            onClick={() => openAt(cat, i)}
            aria-label={`Otwórz podgląd: ${image.alt}`}
            className="group text-left"
          >
            <Card className="overflow-hidden rounded-[28px] border border-white/10 bg-background/80 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-all duration-500">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="mb-3 h-px w-12 bg-white/70 transition-all duration-500 group-hover:w-20" />
                    <p className="text-white text-sm md:text-base font-medium tracking-[0.01em] drop-shadow-sm">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Header */}
      <section className="relative overflow-hidden py-24 md:py-28 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <p className="mb-4 text-sm md:text-base uppercase tracking-[0.25em] text-primary/70 fade-in-up">
              Lazur Resort
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 fade-in-up">
              {t('gallery.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
              {t('gallery.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Exterior */}
      <section ref={addToRefs} className="py-16 md:py-24 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/70 mb-3">
              Galeria
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-5">
              Domki z zewnątrz
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Zobacz wygląd domków, tarasów oraz otoczenia ośrodka. Zdjęcia są wczytywane
              automatycznie z folderu i wyświetlane w kolejności alfabetycznej.
            </p>
          </div>

          <Grid cat="exterior" />
        </div>
      </section>

      {/* Interior */}
      <section ref={addToRefs} className="py-16 md:py-24 bg-muted/[0.22] scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/70 mb-3">
              Wnętrza
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-5">
              Domki wewnątrz
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Poznaj wnętrza domków — salon, sypialnie, kuchnię i strefę wypoczynku.
              Wszystkie zdjęcia także ładują się automatycznie z osobnego folderu.
            </p>
          </div>

          <Grid cat="interior" />
        </div>
      </section>

      {/* Features */}
      <section ref={addToRefs} className="py-16 md:py-24 scroll-reveal">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-sm uppercase tracking-[0.22em] text-primary/70 mb-3">
              Komfort wypoczynku
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-5">
              {t('gallery.comfort.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-[28px] border border-border/50 bg-background/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8">
              <div className="space-y-5">
                <h3 className="text-xl font-medium">{t('gallery.space.title')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <House size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.space.bedrooms')}
                  </li>
                  <li className="flex items-center gap-3">
                    <Armchair size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.space.living')}
                  </li>
                  <li className="flex items-center gap-3">
                    <ChefHat size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.space.kitchen')}
                  </li>
                  <li className="flex items-center gap-3">
                    <Shower size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.space.bathroom')}
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="rounded-[28px] border border-border/50 bg-background/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8">
              <div className="space-y-5">
                <h3 className="text-xl font-medium">{t('gallery.relax.title')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <Table size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.relax.terrace')}
                  </li>
                  <li className="flex items-center gap-3">
                    <TreeEvergreen size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.relax.garden')}
                  </li>
                  <li className="flex items-center gap-3">
                    <Fire size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.relax.grill')}
                  </li>
                  <li className="flex items-center gap-3">
                    <Car size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.relax.parking')}
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="rounded-[28px] border border-border/50 bg-background/80 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8">
              <div className="space-y-5">
                <h3 className="text-xl font-medium">{t('gallery.amenities.title')}</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <WifiHigh size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.amenities.wifi')}
                  </li>
                  <li className="flex items-center gap-3">
                    <Bed size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.amenities.linen')}
                  </li>
                  <li className="flex items-center gap-3">
                    <PawPrint size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.amenities.pets')}
                  </li>
                  <li className="flex items-center gap-3">
                    <Waves size={18} weight="light" style={{ color: '#967d48' }} />
                    {t('gallery.amenities.beach')}
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open && total > 0 && current && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
          onWheel={onWheel}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          {/* top glow */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute top-10 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 md:p-4 text-white transition"
            aria-label="Poprzednie zdjęcie"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Image */}
          <div className="max-w-[92vw] max-h-[88vh] relative px-4">
            <img
              src={current.src}
              alt={current.alt}
              className="max-w-[92vw] max-h-[78vh] md:max-h-[82vh] object-contain select-none rounded-2xl"
              style={{ transform: `scale(${scale})`, transformOrigin: 'center center' }}
              draggable={false}
            />

            <div className="mt-5 mx-auto max-w-3xl text-center">
              <div className="inline-flex flex-col items-center rounded-full bg-white/10 backdrop-blur-md px-5 py-3 text-white/95">
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/70 mb-1">
                  {CATEGORY_LABEL[category]}
                </span>
                <span className="text-sm md:text-base font-medium">
                  {index + 1} / {total}
                </span>
                <span className="text-xs md:text-sm text-white/80 mt-1">
                  {current.alt}
                </span>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 md:p-4 text-white transition"
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
            className="absolute top-3 right-3 md:top-8 md:right-8 rounded-full border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 text-white transition"
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