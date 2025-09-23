import React, { useState } from "react";
import { Play, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import InteractiveBentoGallery from "@/components/blocks/interactive-bento-gallery";

// Moomin Language School Components
import HeroSection from "@/components/MoominLanguageSchool/HeroSection";
import TrustStripSection from "@/components/MoominLanguageSchool/TrustStripSection";
import VisionSection from "@/components/MoominLanguageSchool/VisionSection";
import HowItWorksSection from "@/components/MoominLanguageSchool/HowItWorksSection";
import WhyItWorksSection from "@/components/MoominLanguageSchool/WhyItWorksSection";
import ChildrenExperienceSection from "@/components/MoominLanguageSchool/ChildrenExperienceSection";
import EducatorsSection from "@/components/MoominLanguageSchool/EducatorsSection";
import SchoolBenefitsSection from "@/components/MoominLanguageSchool/SchoolBenefitsSection";
import ResultsSection from "@/components/MoominLanguageSchool/ResultsSection";
import GettingStartedSection from "@/components/MoominLanguageSchool/GettingStartedSection";
import AtAGlanceSection from "@/components/MoominLanguageSchool/AtAGlanceSection";
import GetStartedCTASection from "@/components/MoominLanguageSchool/GetStartedCTASection";

const MoominLanguageSchool = () => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    organization: "",
    email: "",
    phone: "",
    intent: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (import.meta.env.DEV) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-start w-full relative m-0 p-0 overflow-x-clip">
      <Navbar />
      <Seo
        title="Moomin Language School × School Grads – Early English in the Finnish Way!"
        description="Simple to start, joyful to teach, and loved by children. Moomin Language School helps children aged 3–8 years learn English naturally through short daily play on a learning app and lively weekly group sessions."
        canonical="https://simpleschoolwebsite-19.onrender.com/moomin-language-school"
      />

      <main id="main" className="w-full" role="main">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Strip */}
        <TrustStripSection />

        {/* School Grads Vision for India */}
        <VisionSection />

        {/* How It Works */}
        <HowItWorksSection />

        {/* Why It Works */}
        <WhyItWorksSection />

        {/* What Children Experience */}
        <ChildrenExperienceSection />

        {/* What Educators Get */}
        <EducatorsSection />

        {/* Benefits for Schools & Managers */}
        <SchoolBenefitsSection />

        {/* Results That Families Notice */}
        <ResultsSection />

        {/* Getting Started is Simple */}
        <GettingStartedSection />

        {/* At a Glance */}
        <AtAGlanceSection />

        {/* Get Started CTA */}
        <GetStartedCTASection />

        {/* Interactive Bento Gallery Section */}
        <section className="box-border flex w-full flex-col items-center gap-12 lg:gap-20 bg-white m-0 px-4 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-28">
          <InteractiveBentoGallery
            mediaItems={[
              {
                id: 1,
                type: "image",
                title: "Moomin Language School App",
                desc: "Interactive learning with Moomin characters",
                url: "/lovable-uploads/Moomin Language School/App-and-tools.png",
                span: "large", // Hero item - tools overview
              },
              {
                id: 2,
                type: "image",
                title: "Children Learning English",
                desc: "Kids enjoying Moomin Language School",
                url: "/lovable-uploads/Moomin Language School/MoominLS Kids 2.webp",
                span: "standard", // Portrait of kids
              },
              {
                id: 3,
                type: "image",
                title: "Playful Learning Sessions",
                desc: "Engaging group activities with Moomin",
                url: "/lovable-uploads/Moomin Language School/Playful-session_1.png",
                span: "tall", // Group session photo
              },
              {
                id: 4,
                type: "image",
                title: "App Learning Experience",
                desc: "Daily practice with Moomin characters",
                url: "/lovable-uploads/Moomin Language School/App-use.jpg",
                span: "wide", // App interface screenshot
              },
              {
                id: 5,
                type: "image",
                title: "Happy Learning Children",
                desc: "Students enjoying Finnish-style English learning",
                url: "/lovable-uploads/Moomin Language School/MoominLS Kids 4.png",
                span: "standard", // Kids with devices
              },
              {
                id: 6,
                type: "image",
                title: "Educational Tools",
                desc: "Comprehensive learning materials and tools",
                url: "/lovable-uploads/Moomin Language School/tools.png",
                span: "standard", // Tool icons
              },
              {
                id: 7,
                type: "image",
                title: "Young Learners",
                desc: "Children engaged in Moomin Language activities",
                url: "/lovable-uploads/Moomin Language School/Children_1.png",
                span: "tall", // Classroom scene
              },
              {
                id: 8,
                type: "image",
                title: "Learning Banner",
                desc: "Moomin Language School promotional materials",
                url: "/lovable-uploads/Moomin Language School/Banner_1.png",
                span: "wide", // Marketing banner
              },
              {
                id: 9,
                type: "image",
                title: "Children in Classroom",
                desc: "Students engaged in Finnish-style learning",
                url: "/lovable-uploads/Moomin Language School/Children_2.jpg",
                span: "standard", // Classroom photo
              },
              {
                id: 10,
                type: "image",
                title: "Founders Team",
                desc: "Meet the team behind Moomin Language School",
                url: "/lovable-uploads/Moomin Language School/Founders 2.jpg",
                span: "tall", // Team portrait
              },
              {
                id: 11,
                type: "image",
                title: "Young Moomin Learners",
                desc: "Children enjoying Moomin-based English learning",
                url: "/lovable-uploads/Moomin Language School/MoominLS Kids.png",
                span: "wide", // Group of kids learning
              },
              {
                id: 12,
                type: "image",
                title: "Creative Learning",
                desc: "Fun and engaging Moomin language activities",
                url: "/lovable-uploads/Moomin Language School/MoominLS kids 3.ong.png",
                span: "standard", // Individual child
              },
            ]}
            title="Moomin Language School Gallery"
            description="Experience joyful English learning in the Finnish way"
          />
        </section>

        {/* CTA Bar (Sticky on Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
          <div className="flex gap-2">
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-highlight text-white hover:bg-highlight/90 transition-all duration-300 font-semibold text-sm">
              <Phone className="w-4 h-4 text-white" />
              Call
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-highlight text-highlight hover:bg-highlight hover:text-white transition-all duration-300 font-semibold text-sm">
              <Mail className="w-4 h-4 text-highlight" />
              Demo
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-highlight text-white hover:bg-highlight/90 transition-all duration-300 font-semibold text-sm">
              <Play className="w-4 h-4 text-white" />
              Trial
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MoominLanguageSchool;
