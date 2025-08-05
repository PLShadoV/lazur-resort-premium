import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FloatingButtons } from "./components/FloatingButtons";
import { Footer } from "./components/Footer";
import Homepage from "./pages/Homepage";
import Galeria from "./pages/Galeria";
import Cennik from "./pages/Cennik";
import Kontakt from "./pages/Kontakt";
import Rezerwacja from "./pages/Rezerwacja";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Navigation />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/cennik" element={<Cennik />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/rezerwacja" element={<Rezerwacja />} />
              {/* Area pages will be added */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <FloatingButtons />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;