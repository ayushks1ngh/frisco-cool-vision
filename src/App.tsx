import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ACRepair from "./pages/ACRepair";
import ACInstallation from "./pages/ACInstallation";
import HeatingRepair from "./pages/HeatingRepair";
import HVACMaintenance from "./pages/HVACMaintenance";
import ServiceAreasPage from "./pages/ServiceAreasPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ac-repair" element={<ACRepair />} />
          <Route path="/ac-installation" element={<ACInstallation />} />
          <Route path="/heating-repair" element={<HeatingRepair />} />
          <Route path="/hvac-maintenance" element={<HVACMaintenance />} />
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
