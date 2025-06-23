
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import LifeAtNBPage from "./pages/LifeAtNB";
import Careers from "./pages/Careers";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

// ScrollToTop component to reset scroll position on route change
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/life-at-nb" element={<LifeAtNBPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Services />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
