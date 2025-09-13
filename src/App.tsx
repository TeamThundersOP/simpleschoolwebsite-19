import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLenis } from "@/hooks/use-lenis";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import SchoolManagement from "./pages/SchoolManagement";
import CodeSchool from "./pages/CodeSchool";
import FinnishExperience from "./pages/FinnishExperience";
import GraphoGame from "./pages/GraphoGame";
import KindieDays from "./pages/KindieDays";
import MoominLanguageSchool from "./pages/MoominLanguageSchool";
import About from "./pages/About";
import Services from "./pages/Services";
import StudentsService from "./pages/services/Students";
import TeachersService from "./pages/services/Teachers";
import SchoolManagementService from "./pages/services/SchoolManagement";

const queryClient = new QueryClient();

const App = () => {
  useLenis();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/school-management" element={<SchoolManagement />} />
          <Route path="/code-school" element={<CodeSchool />} />
          <Route path="/finnish-experience" element={<FinnishExperience />} />
          <Route path="/grapho-game" element={<GraphoGame />} />
          <Route path="/kindie-days" element={<KindieDays />} />
          <Route path="/moomin-language-school" element={<MoominLanguageSchool />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/students" element={<StudentsService />} />
          <Route path="/services/teachers" element={<TeachersService />} />
          <Route path="/services/school-management" element={<SchoolManagementService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
