import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Phone, 
  Mail
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';
import InteractiveBentoGallery from '@/components/blocks/interactive-bento-gallery';

// Moomin Language School Components
import HeroSection from '@/components/MoominLanguageSchool/HeroSection';
import TrustStripSection from '@/components/MoominLanguageSchool/TrustStripSection';
import VisionSection from '@/components/MoominLanguageSchool/VisionSection';
import HowItWorksSection from '@/components/MoominLanguageSchool/HowItWorksSection';
import WhyItWorksSection from '@/components/MoominLanguageSchool/WhyItWorksSection';
import ChildrenExperienceSection from '@/components/MoominLanguageSchool/ChildrenExperienceSection';
import EducatorsSection from '@/components/MoominLanguageSchool/EducatorsSection';
import SchoolBenefitsSection from '@/components/MoominLanguageSchool/SchoolBenefitsSection';
import ResultsSection from '@/components/MoominLanguageSchool/ResultsSection';
import GettingStartedSection from '@/components/MoominLanguageSchool/GettingStartedSection';
import AtAGlanceSection from '@/components/MoominLanguageSchool/AtAGlanceSection';
import GetStartedCTASection from '@/components/MoominLanguageSchool/GetStartedCTASection';

const MoominLanguageSchool = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    email: '',
    phone: '',
    intent: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (import.meta.env.DEV) {
      console.log('Form submitted:', formData);
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
                title: "Moomin Language School Classroom",
                desc: "Children learning English with Moomin characters",
                url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
                span: "",
              },
              {
                id: 2,
                type: "video",
                title: "App Learning Session",
                desc: "Interactive daily practice with Moomin",
                url: "https://cdn.pixabay.com/video/2020/06/23/42878-430049606_large.mp4",
                span: "",
              },
              {
                id: 3,
                type: "image",
                title: "Finnish Education Method",
                desc: "Joyful learning environment",
                url: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                span: "",
              },
              {
                id: 4,
                type: "image",
                title: "Teacher Training",
                desc: "Professional development support",
                url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                span: "",
              },
              {
                id: 5,
                type: "video",
                title: "Group Learning Activities",
                desc: "Weekly playful sessions",
                url: "https://cdn.pixabay.com/video/2022/05/31/119013-712900325_large.mp4",
                span: "",
              }
            ]}
            title="Moomin Language School Gallery"
            description="Experience joyful English learning in the Finnish way"
          />
        </section>

        {/* CTA Bar (Sticky on Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50">
          <div className="flex gap-2">
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#0C0504]/80 transition-all duration-300 font-semibold text-sm">
              <Phone className="w-4 h-4 text-white" />
              Call
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid border-[#0C0504] text-[#0C0504] hover:bg-[#0C0504] hover:text-white transition-all duration-300 font-semibold text-sm">
              <Mail className="w-4 h-4 text-[#0C0504]" />
              Demo
            </button>
            <button className="flex-1 box-border flex justify-center items-center gap-2 border cursor-pointer m-0 px-4 py-2 rounded-full border-solid bg-[#0C0504] text-white hover:bg-[#0C0504]/80 transition-all duration-300 font-semibold text-sm">
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