import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Eager-loaded pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy-loaded pages
const ACRepair = lazy(() => import("./pages/ACRepair"));
const ACInstallation = lazy(() => import("./pages/ACInstallation"));
const HeatingRepair = lazy(() => import("./pages/HeatingRepair"));
const HVACMaintenance = lazy(() => import("./pages/HVACMaintenance"));
const ServiceAreasPage = lazy(() => import("./pages/ServiceAreasPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Admin (lazy)
const AdminLogin = lazy(() => import("./pages/admin/Login"));
const AdminLayout = lazy(() => import("./pages/admin/Layout"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const AdminLeadsList = lazy(() => import("./pages/admin/LeadsList"));
const AdminLeadDetail = lazy(() => import("./pages/admin/LeadDetail"));

const queryClient = new QueryClient();

function Loading() {
  return <div className="min-h-screen flex items-center justify-center"><div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ac-repair" element={<ACRepair />} />
            <Route path="/ac-installation" element={<ACInstallation />} />
            <Route path="/heating-repair" element={<HeatingRepair />} />
            <Route path="/hvac-maintenance" element={<HVACMaintenance />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="leads" element={<AdminLeadsList />} />
              <Route path="leads/:id" element={<AdminLeadDetail />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
