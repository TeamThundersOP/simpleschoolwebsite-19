import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLenis } from "@/hooks/use-lenis";
import { FullPageLoader } from "@/components/ui/loader";
import ScrollToTop from "@/components/ScrollToTop";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Students = lazy(() => import("./pages/Students"));
const Teachers = lazy(() => import("./pages/Teachers"));
const SchoolManagement = lazy(() => import("./pages/SchoolManagement"));
const CodeSchool = lazy(() => import("./pages/CodeSchool"));
const FinnishExperience = lazy(() => import("./pages/FinnishExperience"));
const KindieDays = lazy(() => import("./pages/KindieDays"));
const MoominLanguageSchool = lazy(() => import("./pages/MoominLanguageSchool"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const Products = lazy(() => import("./pages/Products"));

const queryClient = new QueryClient();

const App = () => {
  useLenis();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[2000] focus:bg-white focus:text-black focus:px-3 focus:py-2 focus:rounded"
          >
            Skip to main content
          </a>
          <ScrollToTop />
          <Suspense fallback={<FullPageLoader text="Loading page..." />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/school-management" element={<SchoolManagement />} />
              <Route path="/code-school" element={<CodeSchool />} />
              <Route path="/finnish-experience" element={<FinnishExperience />} />
              {false && <Route path="/grapho-game" element={null} />}
              <Route path="/kindie-days" element={<KindieDays />} />
              <Route path="/moomin-language-school" element={<MoominLanguageSchool />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/products" element={<Products />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
