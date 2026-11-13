import { lazy, Suspense, type ReactNode } from 'react';
import seoRoutes from './seo/routes.json';
import { Seo } from './seo/Seo';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FloatingButtons } from "./components/FloatingButtons";
import { Footer } from "./components/Footer";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { LanguageProvider } from "./contexts/LanguageContext";
import { useScrollToTop } from "./hooks/useScrollToTop";
const Homepage = lazy(() => import("./pages/Homepage"));
const Galeria = lazy(() => import("./pages/Galeria"));
const Cennik = lazy(() => import("./pages/Cennik"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Rezerwacja = lazy(() => import("./pages/Rezerwacja"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Okolica = lazy(() => import("./pages/Okolica"));
const OkolicaMrzezyna = lazy(() => import("./pages/OkolicaMrzezyna"));
const OkolicaDzwirzyno = lazy(() => import("./pages/OkolicaDzwirzyno"));
const OkolicaKolobrzeg = lazy(() => import("./pages/OkolicaKolobrzeg"));
const OkolicaZPsem = lazy(() => import("./pages/OkolicaZPsem"));
const OkolicaSciezkiRowerowe = lazy(() => import("./pages/OkolicaSciezkiRowerowe"));
const OkolicaAtrakcje = lazy(() => import("./pages/OkolicaAtrakcje"));
const OkolicaPlazePrzyroda = lazy(() => import("./pages/OkolicaPlazePrzyroda"));
const OkolicaTransport = lazy(() => import("./pages/OkolicaTransport"));
const PolitykaPrywatnosci = lazy(() => import("./pages/PolitykaPrywatnosci"));

const queryClient = new QueryClient();

export const AppContent = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <Navigation />
      <noscript><nav aria-label="Menu bez JavaScript" className="pt-32 pb-6 px-6 bg-primary text-white"><ul className="flex flex-wrap gap-x-8 gap-y-4 max-w-7xl mx-auto">{Object.entries(seoRoutes).map(([path,page])=><li key={path}><a href={path} className="underline underline-offset-4">{path==='/'?'Strona główna':page.h1}</a></li>)}</ul></nav></noscript>
      <Suspense fallback={<div className="min-h-screen pt-40 text-center" role="status">Wczytywanie strony…</div>}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/rezerwacja" element={<Rezerwacja />} />
        <Route path="/okolica" element={<Okolica />} />
        <Route path="/okolica/mrzezyna" element={<OkolicaMrzezyna />} />
        <Route path="/okolica/dzwirzyno" element={<OkolicaDzwirzyno />} />
        <Route path="/okolica/kolobrzeg" element={<OkolicaKolobrzeg />} />
        <Route path="/okolica/z-psem" element={<OkolicaZPsem />} />
        <Route path="/okolica/sciezki-rowerowe" element={<OkolicaSciezkiRowerowe />} />
        <Route path="/okolica/atrakcje" element={<OkolicaAtrakcje />} />
        <Route path="/okolica/plaze-przyroda" element={<OkolicaPlazePrzyroda />} />
        <Route path="/okolica/transport" element={<OkolicaTransport />} />
        <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Footer />
      <FloatingButtons />
      <LanguageSwitcher />
    </div>
  );
};

export const AppProviders = ({children}: {children: ReactNode}) => (
  <QueryClientProvider client={queryClient}><LanguageProvider><TooltipProvider>
    <Toaster /><Sonner />{children}
  </TooltipProvider></LanguageProvider></QueryClientProvider>
);
const App = () => <AppProviders><BrowserRouter><AppContent /></BrowserRouter></AppProviders>;
export default App;
