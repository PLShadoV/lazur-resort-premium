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
import Homepage from "./pages/Homepage";
import Galeria from "./pages/Galeria";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import Rezerwacja from "./pages/Rezerwacja";
import NotFound from "./pages/NotFound";
import Okolica from "./pages/Okolica";
import OkolicaMrzezyna from "./pages/OkolicaMrzezyna";
import OkolicaDzwirzyno from "./pages/OkolicaDzwirzyno";
import OkolicaKolobrzeg from "./pages/OkolicaKolobrzeg";
import OkolicaZPsem from "./pages/OkolicaZPsem";
import OkolicaSciezkiRowerowe from "./pages/OkolicaSciezkiRowerowe";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <FloatingButtons />
      <LanguageSwitcher />
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;